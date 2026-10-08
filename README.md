# Uni Lernen

Lern-App für macOS (WiSe 2026, Luft- und Raumfahrttechnik): alle Fächer als Lektionen mit Formeln, Beispielen, Übungsaufgaben mit Lösungen, Karteikarten (Leitner-System) und einem Wochenplan bis 31.12.

| Fach | Lektionen |
|---|---|
| Mathe 1 | 40 |
| TM 1 – Statik | 17 |
| Elektrotechnik | 15 |
| TM 2 – Elastostatik | 18 |
| Bauelemente der Luftfahrzeuge | 15 |
| Numerik (MATLAB/Simulink) | 12 |
| Mathe 2 | 20 |
| Spanlose Fertigung | Platzhalter |

## Zwei Lernpläne

Im Menü **Lernplan** (oder oben in der Seitenleiste) umschalten:

- **Vollplan – alle Fächer** (12.10.–31.12., gut 4 h pro Tag)
- **Ohne Mathe 1 & TM 1** (gleicher Zeitraum, knapp 3 h pro Tag; Mathe 1 und TM 1 werden ausgeblendet)

Der Fortschritt bleibt beim Wechseln erhalten, nur die Verteilung auf die Wochen ändert sich.

## Claude in der App (ohne API-Kosten)

**„✦ Frag Claude"** (unten rechts) bzw. **⌘J** blendet rechts claude.ai ein – mit deinem normalen Claude-Konto (Free/Pro), einmal anmelden genügt. Jede neue Frage startet mit der aktuellen Lektion schon im Eingabefeld (zusätzlich in der Zwischenablage, falls das Feld leer bleibt: ⌘V).

**Empfohlen: claude.ai-Projekt mit allen Lektionen**
1. In der Claude-Leiste links **Projekte → Neues Projekt**, Name z. B. „Uni Lernen".
2. Den Text aus `Projekt-Anweisungen.txt` als Projekt-Anweisungen einfügen und die Fach-Dateien (`*.md`) als Projektwissen hochladen – beides unter Menü **Claude → Dateien fürs Projekt im Finder zeigen**.
3. Im geöffneten Projekt Menü **Claude → Offenes Projekt für neue Fragen verwenden**.

Ab dann starten alle Fragen in diesem Projekt; Claude kennt alle Lektionen aller Fächer.

## Download und Installation

1. Unter **Releases** (rechts auf der Repository-Seite) die neueste `Uni-Lernen-macOS.zip` herunterladen und entpacken.
2. `Uni Lernen.app` in den Ordner *Programme* ziehen (oder in den Ordner mit deinen Unterlagen).
3. Beim ersten Start: **Rechtsklick → Öffnen → Öffnen**. Die App ist nicht von Apple notarisiert, deshalb fragt macOS einmal nach. Falls macOS meldet, die App sei „beschädigt", im Terminal einmal ausführen:
   ```bash
   xattr -cr "/Applications/Uni Lernen.app"
   ```

Voraussetzung: macOS 13 oder neuer, Apple Silicon oder Intel.

## Original-Unterlagen (PDFs)

Die Skripte und Foliensätze sind **nicht** im Repository enthalten. Die App findet sie, wenn sie in einem Ordner mit den Fachordnern liegen (`Mathe 1`, `Mathe 2`, `Mathe 1 + 2 neu`, `Technische Mechanik 1`, `Technische Mechanik 2`, `Elektrotechnik`, `Numerik`, `Bauelemente der Luftfahrzeuge`, `Spanlose Fertigung`):

- automatisch, wenn die App direkt in diesem Ordner liegt oder der Ordner `~/Desktop/Uni Lernen` heißt,
- sonst über **Lernplan → Unterlagen-Ordner wählen …**.

Dann öffnen die Quellen-Buttons in jeder Lektion die passende PDF-Seite. Ohne Unterlagen funktioniert alles andere trotzdem.

Fortschritt, Notizen und Karteikarten liegen in `~/Library/Application Support/UniLernen/fortschritt.json`.

## Selbst bauen

```bash
npm ci
./build_app.sh dist
```

Die Lektionen liegen als Markdown in `content/<fach>/`, die Lernpläne in `content/plans.json` (`alloc` legt fest, welcher Anteil eines Fachs in welche Woche fällt; die Lektionen werden beim Build automatisch nach Lernzeit verteilt). `build.mjs` rendert alles (marked + KaTeX) nach `web/`, `App/main.swift` ist die native Hülle (WKWebView + PDFKit).

## Neue Version veröffentlichen

```bash
git tag v1.1
git push origin v1.1
```

GitHub Actions baut die App (Universal-Binary) und hängt `Uni-Lernen-macOS.zip` an ein neues Release.
