import Cocoa
import WebKit
import PDFKit

// MARK: - Pfade

/// Ordner "Uni Lernen" mit den Original-Unterlagen (PDFs). Reihenfolge:
/// 1. im Menü „Unterlagen-Ordner wählen …" gespeicherter Ordner,
/// 2. Ordner neben der App, falls er Fachordner enthält,
/// 3. ~/Desktop/Uni Lernen.
let knownSubjectFolders = ["Mathe 1", "Mathe 2", "Mathe 1 + 2 neu", "Technische Mechanik 1", "Technische Mechanik 2",
                           "Elektrotechnik", "Numerik", "Spanlose Fertigung", "Bauelemente der Luftfahrzeuge"]

func materialsFolder() -> URL {
    let fm = FileManager.default
    if let saved = UserDefaults.standard.string(forKey: "materialsFolder"), fm.fileExists(atPath: saved) {
        return URL(fileURLWithPath: saved, isDirectory: true)
    }
    let besideApp = Bundle.main.bundleURL.deletingLastPathComponent()
    if knownSubjectFolders.contains(where: { fm.fileExists(atPath: besideApp.appendingPathComponent($0).path) }) { return besideApp }
    return fm.homeDirectoryForCurrentUser.appendingPathComponent("Desktop/Uni Lernen")
}

func stateFileURL() -> URL {
    let fm = FileManager.default
    let dir = fm.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
        .appendingPathComponent("UniLernen", isDirectory: true)
    try? fm.createDirectory(at: dir, withIntermediateDirectories: true)
    return dir.appendingPathComponent("fortschritt.json")
}

/// Listet alle PDFs pro Unterordner – damit neue Unterlagen (z. B. für Bauelemente oder
/// Spanlose Fertigung) automatisch in der App auftauchen.
func scanMaterials() -> [String: [String]] {
    let fm = FileManager.default
    let base = materialsFolder()
    var result: [String: [String]] = [:]
    guard let dirs = try? fm.contentsOfDirectory(at: base, includingPropertiesForKeys: [.isDirectoryKey]) else { return result }
    for d in dirs {
        var isDir: ObjCBool = false
        guard fm.fileExists(atPath: d.path, isDirectory: &isDir), isDir.boolValue, !d.lastPathComponent.hasSuffix(".app") else { continue }
        var files: [String] = []
        if let en = fm.enumerator(at: d, includingPropertiesForKeys: nil) {
            for case let f as URL in en {
                let ext = f.pathExtension.lowercased()
                if ["pdf", "mlx", "m", "docx", "pptx", "png", "jpg"].contains(ext) {
                    files.append(String(f.path.dropFirst(base.path.count + 1)))
                }
            }
        }
        result[d.lastPathComponent] = files.sorted()
    }
    return result
}

// MARK: - Claude-Leiste (claude.ai im eingebauten Browser)

/// Zeigt claude.ai rechts im Hauptfenster. Die Anmeldung läuft über das eigene claude.ai-Konto und
/// bleibt im Website-Speicher der App erhalten – es werden keine API-Credits gebraucht.
/// Die App füllt nur über den offiziellen Link `claude.ai/new?q=…` die Eingabe vor; abgeschickt wird von Hand.
final class ClaudePanel: NSObject, WKNavigationDelegate, WKUIDelegate, NSWindowDelegate {
    let view = NSView()
    let web: WKWebView
    var popups: [NSWindow] = []
    var onNewChat: (() -> Void)?
    var onClose: (() -> Void)?

    override init() {
        let config = WKWebViewConfiguration()
        config.websiteDataStore = .default()
        web = WKWebView(frame: .zero, configuration: config)
        // Wie Safari auftreten, damit Anmeldeseiten den eingebauten Browser akzeptieren
        web.customUserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15"
        super.init()
        web.navigationDelegate = self
        web.uiDelegate = self

        let bar = NSStackView()
        bar.orientation = .horizontal
        bar.edgeInsets = NSEdgeInsets(top: 30, left: 10, bottom: 6, right: 8)
        bar.spacing = 6
        let title = NSTextField(labelWithString: "✦ Claude")
        title.font = .boldSystemFont(ofSize: 13)
        let newChat = NSButton(title: "Neue Frage zu dieser Lektion", target: self, action: #selector(newChatClicked))
        newChat.bezelStyle = .rounded
        newChat.controlSize = .small
        let browser = NSButton(title: "↗", target: self, action: #selector(openInBrowser))
        browser.bezelStyle = .rounded; browser.controlSize = .small
        browser.toolTip = "Diesen Chat im normalen Browser öffnen"
        let close = NSButton(title: "✕", target: self, action: #selector(closeClicked))
        close.bezelStyle = .rounded; close.controlSize = .small
        close.toolTip = "Claude-Leiste schließen (⌘J)"
        let spacer = NSView()
        spacer.setContentHuggingPriority(.init(1), for: .horizontal)
        [title, spacer, newChat, browser, close].forEach { bar.addArrangedSubview($0) }

        let stack = NSStackView(views: [bar, web])
        stack.orientation = .vertical
        stack.spacing = 0
        stack.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(stack)
        NSLayoutConstraint.activate([
            stack.leadingAnchor.constraint(equalTo: view.leadingAnchor), stack.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            stack.topAnchor.constraint(equalTo: view.topAnchor), stack.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            bar.widthAnchor.constraint(equalTo: stack.widthAnchor),
        ])
    }

    /// Gespeichertes claude.ai-Projekt („Uni Lernen") – neue Fragen starten dann dort.
    var projectURL: URL? {
        get { UserDefaults.standard.string(forKey: "claudeProjectURL").flatMap(URL.init(string:)) }
        set { UserDefaults.standard.set(newValue?.absoluteString, forKey: "claudeProjectURL") }
    }

    func ask(prompt: String) {
        var c = URLComponents(url: projectURL ?? URL(string: "https://claude.ai/new")!, resolvingAgainstBaseURL: false)!
        if !prompt.isEmpty {
            c.queryItems = [URLQueryItem(name: "q", value: prompt)]
            // Zusätzlich in die Zwischenablage, falls die Seite das Feld nicht vorausfüllt (⌘V)
            NSPasteboard.general.clearContents()
            NSPasteboard.general.setString(prompt, forType: .string)
        }
        web.load(URLRequest(url: c.url!))
    }

    /// Die gerade offene claude.ai-Seite als Projekt übernehmen (URL muss /project/… sein).
    func useCurrentPageAsProject() -> Bool {
        guard let u = web.url, u.host?.hasSuffix("claude.ai") == true, u.path.hasPrefix("/project/") else { return false }
        var c = URLComponents(url: u, resolvingAgainstBaseURL: false)!
        c.query = nil; c.fragment = nil
        projectURL = c.url
        return true
    }

    func showStartIfEmpty() {
        if web.url == nil { web.load(URLRequest(url: projectURL ?? URL(string: "https://claude.ai/new")!)) }
    }

    @objc func newChatClicked() { onNewChat?() }
    @objc func closeClicked() { onClose?() }
    @objc func openInBrowser() { if let u = web.url { NSWorkspace.shared.open(u) } }

    static let loginHosts = ["claude.ai", "anthropic.com", "accounts.google.com", "appleid.apple.com", "google.com", "gstatic.com", "apple.com", "icloud.com"]
    static func isLoginOrClaude(_ url: URL?) -> Bool {
        guard let h = url?.host?.lowercased() else { return true }
        return loginHosts.contains { h == $0 || h.hasSuffix("." + $0) }
    }

    // Links aus Antworten (fremde Seiten) im normalen Browser öffnen, claude.ai und Anmeldung hier
    func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if action.navigationType == .linkActivated, !ClaudePanel.isLoginOrClaude(action.request.url), let u = action.request.url {
            NSWorkspace.shared.open(u); decisionHandler(.cancel); return
        }
        decisionHandler(.allow)
    }

    // Anmelde-Popups (Google, Apple) als eigenes kleines Fenster, sonstige neue Fenster im Browser
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for action: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        let url = action.request.url
        if let u = url, !ClaudePanel.isLoginOrClaude(u) { NSWorkspace.shared.open(u); return nil }
        let popup = WKWebView(frame: NSRect(x: 0, y: 0, width: 520, height: 680), configuration: configuration)
        popup.customUserAgent = web.customUserAgent
        popup.uiDelegate = self
        let win = NSWindow(contentRect: popup.frame, styleMask: [.titled, .closable, .resizable], backing: .buffered, defer: false)
        win.title = "Anmelden"
        win.contentView = popup
        win.isReleasedWhenClosed = false
        win.delegate = self
        win.center()
        win.makeKeyAndOrderFront(nil)
        popups.append(win)
        return popup
    }

    func webViewDidClose(_ webView: WKWebView) {
        if let win = popups.first(where: { $0.contentView === webView }) { win.close() }
    }

    func windowWillClose(_ notification: Notification) {
        popups.removeAll { $0 === notification.object as? NSWindow }
    }
}

// MARK: - PDF-Fenster

final class PDFWindowController: NSWindowController, NSWindowDelegate {
    static var open: [PDFWindowController] = []

    convenience init(url: URL, page: Int) {
        let win = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 900, height: 1000),
                           styleMask: [.titled, .closable, .resizable, .miniaturizable],
                           backing: .buffered, defer: false)
        win.title = url.lastPathComponent
        win.center()
        self.init(window: win)
        win.delegate = self
        let view = PDFView()
        view.autoScales = true
        view.displayMode = .singlePageContinuous
        if let doc = PDFDocument(url: url) {
            view.document = doc
            let idx = max(0, min(page - 1, doc.pageCount - 1))
            if let p = doc.page(at: idx) {
                DispatchQueue.main.async { view.go(to: p) }
            }
        }
        win.contentView = view
    }

    func windowWillClose(_ notification: Notification) {
        PDFWindowController.open.removeAll { $0 === self }
    }
}

// MARK: - Hauptfenster

final class AppDelegate: NSObject, NSApplicationDelegate, WKScriptMessageHandler, WKNavigationDelegate {
    var window: NSWindow!
    var webView: WKWebView!
    var planList: [[String: String]] = []
    var currentPlan = ""
    let planMenu = NSMenu(title: "Lernplan")
    var userContent: WKUserContentController!
    let claude = ClaudePanel()
    var split: NSSplitView!

    /// Startskript mit dem aktuellen Fortschritt – wird nach jedem Speichern erneuert,
    /// damit ein Neuladen (z. B. beim Planwechsel) den neuesten Stand sieht.
    func installBootScript() {
        var stateJSON = "null"
        if let data = try? Data(contentsOf: stateFileURL()), let s = String(data: data, encoding: .utf8), !s.isEmpty {
            stateJSON = s
        }
        let materials = (try? JSONSerialization.data(withJSONObject: scanMaterials())).flatMap { String(data: $0, encoding: .utf8) } ?? "{}"
        let boot = "window.__NATIVE__ = true; window.__STATE__ = \(stateJSON); window.__MATERIALS__ = \(materials);"
        userContent.removeAllUserScripts()
        userContent.addUserScript(WKUserScript(source: boot, injectionTime: .atDocumentStart, forMainFrameOnly: true))
    }

    func applicationDidFinishLaunching(_ notification: Notification) {
        buildMenu()

        let config = WKWebViewConfiguration()
        let ucc = WKUserContentController()
        ucc.add(self, name: "app")

        userContent = ucc
        installBootScript()
        config.userContentController = ucc

        webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = self
        webView.setValue(false, forKey: "drawsBackground")

        window = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 1400, height: 900),
                          styleMask: [.titled, .closable, .resizable, .miniaturizable, .fullSizeContentView],
                          backing: .buffered, defer: false)
        window.title = "Uni Lernen"
        window.titlebarAppearsTransparent = true
        window.minSize = NSSize(width: 900, height: 600)
        window.setFrameAutosaveName("UniLernenMain")
        split = NSSplitView()
        split.isVertical = true
        split.dividerStyle = .thin
        split.addArrangedSubview(webView)
        split.addArrangedSubview(claude.view)
        split.autosaveName = "UniLernenSplit"
        claude.view.isHidden = true
        claude.onClose = { [weak self] in self?.setClaude(visible: false) }
        claude.onNewChat = { [weak self] in self?.askClaudeAboutCurrentLesson() }
        window.contentView = split
        if !window.setFrameUsingName("UniLernenMain") { window.center() }
        window.makeKeyAndOrderFront(nil)

        if let web = Bundle.main.resourceURL?.appendingPathComponent("web") {
            webView.loadFileURL(web.appendingPathComponent("index.html"), allowingReadAccessTo: web)
        }
        NSApp.activate(ignoringOtherApps: true)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }

    func userContentController(_ uc: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let body = message.body as? [String: Any], let action = body["action"] as? String else { return }
        switch action {
        case "save":
            if let json = body["state"] as? String {
                try? json.data(using: .utf8)?.write(to: stateFileURL(), options: .atomic)
                if body["reload"] as? Bool == true {
                    installBootScript()
                    webView.reload()
                }
            }
        case "openPDF":
            guard let rel = body["path"] as? String else { return }
            let url = materialsFolder().appendingPathComponent(rel)
            let page = (body["page"] as? Int) ?? 1
            if url.pathExtension.lowercased() == "pdf" {
                let wc = PDFWindowController(url: url, page: page)
                PDFWindowController.open.append(wc)
                wc.showWindow(nil)
            } else {
                NSWorkspace.shared.open(url)
            }
        case "openExternal":
            if let rel = body["path"] as? String {
                NSWorkspace.shared.open(materialsFolder().appendingPathComponent(rel))
            }
        case "revealFolder":
            let rel = (body["path"] as? String) ?? ""
            NSWorkspace.shared.open(materialsFolder().appendingPathComponent(rel))
        case "rescan":
            let materials = (try? JSONSerialization.data(withJSONObject: scanMaterials())).flatMap { String(data: $0, encoding: .utf8) } ?? "{}"
            webView.evaluateJavaScript("window.onMaterials && window.onMaterials(\(materials))")
        case "askClaude":
            askClaudeAboutCurrentLesson()
        case "toggleClaude":
            toggleClaude()
        case "openURL":
            if let s = body["url"] as? String, let url = URL(string: s), ["https"].contains(url.scheme ?? "") {
                NSWorkspace.shared.open(url)
            }
        case "plans":
            planList = (body["plans"] as? [[String: String]]) ?? []
            currentPlan = (body["current"] as? String) ?? ""
            rebuildPlanMenu()
        case "exportState":
            guard let json = body["state"] as? String else { return }
            let panel = NSSavePanel()
            panel.nameFieldStringValue = "UniLernen-Fortschritt.json"
            if panel.runModal() == .OK, let url = panel.url {
                try? json.data(using: .utf8)?.write(to: url)
            }
        default: break
        }
    }

    func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if let url = action.request.url, ["http", "https"].contains(url.scheme ?? "") {
            NSWorkspace.shared.open(url)
            decisionHandler(.cancel)
            return
        }
        decisionHandler(.allow)
    }

    /// Menü „Lernplan": Vollplan / ohne Mathe 1 & TM 1 (Liste kommt aus der Web-Oberfläche).
    func rebuildPlanMenu() {
        planMenu.removeAllItems()
        for (i, p) in planList.enumerated() {
            let item = NSMenuItem(title: p["name"] ?? "", action: #selector(choosePlan(_:)), keyEquivalent: i < 9 ? String(i + 1) : "")
            item.keyEquivalentModifierMask = [.command, .option]
            item.representedObject = p["id"]
            item.target = self
            item.state = p["id"] == currentPlan ? .on : .off
            planMenu.addItem(item)
        }
        if !planList.isEmpty { planMenu.addItem(.separator()) }
        let folder = NSMenuItem(title: "Unterlagen-Ordner wählen …", action: #selector(chooseMaterialsFolder), keyEquivalent: "")
        folder.target = self
        planMenu.addItem(folder)
        let show = NSMenuItem(title: "Unterlagen-Ordner im Finder zeigen", action: #selector(revealMaterialsFolder), keyEquivalent: "")
        show.target = self
        planMenu.addItem(show)
    }

    @objc func choosePlan(_ sender: NSMenuItem) {
        guard let id = sender.representedObject as? String else { return }
        webView.evaluateJavaScript("window.setPlan && window.setPlan('\(id)')")
    }

    @objc func chooseMaterialsFolder() {
        let panel = NSOpenPanel()
        panel.canChooseDirectories = true
        panel.canChooseFiles = false
        panel.allowsMultipleSelection = false
        panel.message = "Ordner mit deinen Fachordnern (Mathe 1, Elektrotechnik, …) wählen"
        panel.directoryURL = materialsFolder()
        if panel.runModal() == .OK, let url = panel.url {
            UserDefaults.standard.set(url.path, forKey: "materialsFolder")
            let materials = (try? JSONSerialization.data(withJSONObject: scanMaterials())).flatMap { String(data: $0, encoding: .utf8) } ?? "{}"
            webView.evaluateJavaScript("window.onMaterials && window.onMaterials(\(materials))")
        }
    }

    @objc func revealMaterialsFolder() {
        NSWorkspace.shared.open(materialsFolder())
    }

    /// Claude-Leiste ein-/ausblenden (Breite ca. 40 % des Fensters, danach gemerkt).
    func setClaude(visible: Bool) {
        guard claude.view.isHidden == visible else { return }
        claude.view.isHidden = !visible
        if visible {
            let w = split.bounds.width
            if claude.view.frame.width < 300 { split.setPosition(w - max(420, w * 0.4), ofDividerAt: 0) }
            claude.showStartIfEmpty()
            window.makeFirstResponder(claude.web)
        } else {
            window.makeFirstResponder(webView)
        }
        split.adjustSubviews()
    }

    @objc func toggleClaude() { setClaude(visible: claude.view.isHidden) }

    /// Holt den Kontext der aktuellen Lektion aus der Web-Oberfläche und startet damit einen neuen claude.ai-Chat.
    @objc func askClaudeAboutCurrentLesson() {
        webView.evaluateJavaScript("window.claudePrompt ? window.claudePrompt(\(claude.projectURL != nil)) : ''") { [weak self] result, _ in
            self?.setClaude(visible: true)
            self?.claude.ask(prompt: (result as? String) ?? "")
        }
    }

    @objc func setProjectFromPanel() {
        let a = NSAlert()
        if claude.useCurrentPageAsProject() {
            a.messageText = "Projekt verknüpft"
            a.informativeText = "„Frag Claude“ startet neue Fragen jetzt in diesem Projekt – mit allen Lektionen als Wissen."
        } else {
            a.messageText = "Kein Projekt geöffnet"
            a.informativeText = "Öffne in der Claude-Leiste zuerst dein Projekt (Seitenleiste von claude.ai → Projekte → „Uni Lernen“) und wähle dann diesen Menüpunkt."
        }
        a.runModal()
    }

    @objc func clearProject() { claude.projectURL = nil }

    @objc func revealProjectFiles() {
        if let dir = Bundle.main.resourceURL?.appendingPathComponent("claude-projekt") {
            NSWorkspace.shared.activateFileViewerSelecting([dir])
        }
    }

    func buildMenu() {
        let main = NSMenu()
        let appItem = NSMenuItem(); main.addItem(appItem)
        let appMenu = NSMenu()
        appMenu.addItem(withTitle: "Über Uni Lernen", action: #selector(NSApplication.orderFrontStandardAboutPanel(_:)), keyEquivalent: "")
        appMenu.addItem(.separator())
        appMenu.addItem(withTitle: "Uni Lernen beenden", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
        appItem.submenu = appMenu

        let editItem = NSMenuItem(); main.addItem(editItem)
        let edit = NSMenu(title: "Bearbeiten")
        edit.addItem(withTitle: "Widerrufen", action: Selector(("undo:")), keyEquivalent: "z")
        edit.addItem(withTitle: "Wiederholen", action: Selector(("redo:")), keyEquivalent: "Z")
        edit.addItem(.separator())
        edit.addItem(withTitle: "Ausschneiden", action: #selector(NSText.cut(_:)), keyEquivalent: "x")
        edit.addItem(withTitle: "Kopieren", action: #selector(NSText.copy(_:)), keyEquivalent: "c")
        edit.addItem(withTitle: "Einsetzen", action: #selector(NSText.paste(_:)), keyEquivalent: "v")
        edit.addItem(withTitle: "Alles auswählen", action: #selector(NSText.selectAll(_:)), keyEquivalent: "a")
        editItem.submenu = edit

        let planItem = NSMenuItem(); main.addItem(planItem)
        planItem.submenu = planMenu
        rebuildPlanMenu()

        let claudeItem = NSMenuItem(); main.addItem(claudeItem)
        let claudeMenu = NSMenu(title: "Claude")
        claudeMenu.addItem(withTitle: "Claude-Leiste ein/aus", action: #selector(toggleClaude), keyEquivalent: "j").target = self
        claudeMenu.addItem(withTitle: "Neue Frage zur aktuellen Lektion", action: #selector(askClaudeAboutCurrentLesson), keyEquivalent: "J").target = self
        claudeMenu.addItem(.separator())
        claudeMenu.addItem(withTitle: "Offenes Projekt für neue Fragen verwenden", action: #selector(setProjectFromPanel), keyEquivalent: "").target = self
        claudeMenu.addItem(withTitle: "Projekt-Verknüpfung entfernen", action: #selector(clearProject), keyEquivalent: "").target = self
        claudeMenu.addItem(withTitle: "Dateien fürs Projekt im Finder zeigen", action: #selector(revealProjectFiles), keyEquivalent: "").target = self
        claudeItem.submenu = claudeMenu

        let winItem = NSMenuItem(); main.addItem(winItem)
        let win = NSMenu(title: "Fenster")
        win.addItem(withTitle: "Minimieren", action: #selector(NSWindow.miniaturize(_:)), keyEquivalent: "m")
        win.addItem(withTitle: "Schließen", action: #selector(NSWindow.performClose(_:)), keyEquivalent: "w")
        winItem.submenu = win
        NSApp.mainMenu = main
    }
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)
app.run()
