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
        window.contentView = webView
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
