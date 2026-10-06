---
title: 3 Nietverbindungen – Grundlagen, Vollniete, Werkstoffe und Kennzeichnung
chapter: Kap. 6 Nietverbindung
minutes: 90
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#24; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#27
---

:::ziel
- Erklären, warum im Flugzeugbau **genietet** wird, und Vor- und Nachteile von Nietverbindungen nennen.
- **Vollniete (Stauchniete)** beschreiben: Setzkopf, Schaft, Schließkopf; typische **Kopfformen** und Normen.
- Mit den **Faustformeln** (Bohrung, Durchmesser, Schließkopf, Überstand) einen Niet grob auslegen.
- **Strichnummern** (1/32 Zoll), **Werkstoffkennzeichnung** am Kopf und den **NAS-523-Rivet-Code** lesen.
- Besonderheiten der **Dünnblechnietung** (Senkniet, Warzen/Dimpling, Messerschneide) kennen.
:::

## 1 Warum Nieten?

Ein Flugzeug besteht aus **Baugruppen** (Rumpf, Flügel links/rechts, Leitwerke …), die untereinander **lösbar** verbunden sind. Die Baugruppen selbst – bei großen Flugzeugen auch **Sektionen** wie Rumpfvorder-, -mittel- und -heckteil mit Ober- und Unterschale – bestehen aus **unlösbar** verbundenen Einzelteilen (Haut, Spanten, Stringer). Die übliche unlösbare Verbindung der tragenden Struktur ist die **Nietung**. Gegenüber Löten, (Punkt-)Schweißen oder Schrauben bietet sie in hochbeanspruchten Bereichen die größte Festigkeit und **Ausfallsicherheit**, dazu geringe Anschaffungs- und Rüstkosten und schnelle maschinelle Verarbeitung.

:::merke Vorteile von Nietverbindungen
- **Unterschiedliche Werkstoffe** (metallisch und nichtmetallisch) und Dicken lassen sich leicht verbinden.
- **Kaum Montagespannungen** (anders als beim Schweißen – keine Wärmeeinbringung).
- Jedes **kaltverformbare** Material kann als Niet dienen.
- Niete lassen sich vielfältig oberflächenbehandeln (plattieren, phosphatieren, lackieren).
- Vielseitig: Verbindungselement, Schwenkzapfen, Distanzhalter, elektrischer Kontakt, Anschlag.
- **Fertig behandelte Teile** (z. B. lackierte Bleche) können noch vernietet werden.
:::

:::achtung Nachteile
- **Zug- und Dauerfestigkeit** geringer als bei Bolzen/Schrauben.
- **Zugkräfte in Nietachse** nur gering übertragbar – Gefahr, dass der Kopf abreißt bzw. durchgezogen wird.
- **Schwingbelastung** kann die Klemmung aufheben.
- Nicht von sich aus **dicht** (Abdichtung möglich, aber teurer; z. B. Tank-Dichtnietung mit maßhaltig aufgeriebenen Bohrungen).
- Nicht **zerstörungsfrei lösbar** (für Inspektion/Reparatur muss der Niet ausgebohrt werden).
:::

## 2 Vollniete / Stauchniete

:::def Aufbau
Ein **Vollniet** besteht aus **Setzkopf** (vorgefertigter Kopf) und **Schaft**. Beim Nieten wird das überstehende Schaftende **gestaucht** (geschlagen oder gepresst) und bildet den **Schließkopf**. Dabei füllt der Schaft die Bohrung aus.
:::

:::formel Typische Setzkopfformen (Tab. 6.1)
| Kopfform | Normen (Beispiele) |
|---|---|
| Flat-Head (Flachkopf) | AN-441, AN-442 |
| Round-Head (Rundkopf) | AN-430, AN-435 |
| **Universal-Head** (Universalkopf) | AN-420, **MS 20470**, LN 9178, **LN 9198** |
| Brazier-Head (flacher, breiter Linsenkopf) | AN-455, AN-456 |
| **Countersunk 100°** (Senkkopf) | AN-426, **MS 20426**, LN 9179, **LN 9199** |
| Shear-Head 100° (Scher-/Kleinkopf) | AN-177 |
:::

Senkköpfe (100°) ergeben eine **glatte Außenhaut** (aerodynamisch wichtig); Universalköpfe sind für innenliegende Struktur üblich.

### Grobe Abmaße und Faustformeln

Abb. 6.1 zeigt grob: Universalkopf ca. $2d$ breit, Schaftüberstand vor dem Stauchen ca. $1{,}5d$, Schließkopf ca. $1{,}5d$ breit; Senkkopf 100° mit ca. $1{,}8d$ Kopfdurchmesser.

:::formel Faustformeln für Vollniete (nur Entwurf – maßgeblich ist die Norm, z. B. LN 9118)
$$d_{\text{Bohrung}}\approx d_{\text{Nietschaft}}+0{,}1\,\text{mm}$$
$$d_{\text{Nenn}}\approx(2{,}5\ldots4)\cdot s_{\text{Blech}}$$
$$d_{\text{Schließkopf}}\approx1{,}5\cdot d_{\text{Nenn}}+1\,\text{mm}$$
$$L_{\text{Überstand}}\approx1{,}5\cdot d_{\text{Nenn}}\quad(\text{maximal, für weiche Werkstoffe})$$
:::

:::formel Standarddurchmesser – Strichnummern (Tab. 6.2)
Abstufung in **1/32 Zoll**; die „Strichnummer" gibt den Durchmesser in 32steln Zoll an:
| Strichnr. | Zoll | mm |
|---|---|---|
| -2 | 1/16 | 1,6 |
| -3 | 3/32 | 2,4 |
| **-4** | **1/8** | **3,2** |
| **-5** | **5/32** | **4,0** |
| **-6** | **3/16** | **4,8** |
| -7 | 7/32 | 5,6 |
| -8 | 1/4 | 6,4 |
5,6 und 6,4 mm sind bei Vollnieten selten.
:::

:::bsp Faustformel-Auslegung
Zwei Bleche je $s=1{,}2\,$mm sollen mit Vollnieten verbunden werden.
$d_{\text{Nenn}}\approx(2{,}5\ldots4)\cdot1{,}2=3{,}0\ldots4{,}8\,$mm → wähle **-5 (4,0 mm)**. Bohrung ≈ 4,1 mm. Schließkopf ≈ $1{,}5\cdot4+1=7\,$mm. Schaftüberstand vor dem Stauchen ≈ $1{,}5\cdot4=6\,$mm → Nietlänge ≈ $2\cdot1{,}2+6=8{,}4\,$mm, also nächste Normlänge.
:::

### Dünnblechnietung (bis ca. 1,0 mm)

- Meist Befestigungen mit **niedrigem Lastniveau**.
- **Niet- und Blechwerkstoff müssen zusammenpassen**: ein zu weicher Niet kann sich – besonders bei Senkungen – durch die hohe örtliche Flächenpressung lockern.
- **Senkniet:** Im angesenkten Blech müssen mindestens **0,2 mm zylindrische Restbohrung** bleiben – sonst entsteht eine **Messerschneide** (Abb. 6.3), die einreißt. Für dünnere Bleche: **Scherkopf-/Kleinkopfniete** oder **Warzen (Dimpling, gewarzte Senkung, LN 9118)**: das Blech wird kegelig eingedrückt statt angesenkt.
- Gewarzte Verbindungen sind statisch gleichwertig, aber: Nietreihen passen schwer ineinander, nicht jeder Werkstoff lässt sich warzen, und die gewarzte Zone ist bei vibrierenden Dünnblechen **rissgefährdet**. Heute stattdessen oft **Aufdickungen** (aufgeklebte Doppler, chemisch abgetragene Blechfelder), in die gefräst gesenkt wird.
- Niete mit **reduzierten Senkköpfen** (z. B. NAS 1097, NAS 1739) erlauben Fräsensenkungen ab 0,8 mm – aber geringere Kopfzugfestigkeit und Gefahr des **„Ausknöpfens"** (die Haut schiebt sich über den kleinen Kopf).

## 3 Nietwerkstoffe und Kopfkennzeichnung (Tab. 6.3)

Weil man einem Niet seinen Werkstoff nicht ansieht, wird er **am Setzkopf gekennzeichnet** (Erhebungen/Vertiefungen).

:::formel Übersicht (Scherfestigkeit $R_C$ ca. in N/mm²)
| US-Bez. | Werkstoff | dt. Bez. | $R_C$ | Kennzeichen (US) | Anwendung |
|---|---|---|---|---|---|
| **A** | Al 99,5 (1100-F) | Al-Niet 3.0255 | – | glatt (ohne) | nichttragende Teile, Innenverkleidung |
| **B** | AlMg5 (5056-H32) | Mg-Niet 3.3354 | 170 | erhabenes **Kreuz** | Verbindung Mg- mit Al-Teilen, Sekundärstruktur |
| **AD** | AlCuMg0,5 (2117-T3 lt. NAS 523) | **Dk-Niet** 3.1124 | 200 | **Punkt (Delle)** | tragende Teile der Primärstruktur, Tankdichtniete |
| **D** | AlCuMg1 (2017-T4) | **Du-Niet** 3.1324 | 260 | erhabener Punkt | hochfeste Al-Primärstruktur |
| **DD** | AlCuMg2 (2024-T4) | 3.1354 | – | zwei Striche | tragende Teile, v. a. Druckzelle |
| Ti | 3.7024 | – | 380–390 | „T" | hohe Belastung |
| **M** (Monel) | 2.4360 | – | 350 | Punkte | Ti- und Stahlblechnietung, Ersatz für Stahlniete |
| Nimonic 75 | 2.4630 | – | 450 | Punkte | hohe Last und Temperatur, Triebwerksbau |
(Deutsche Kennzeichnung teils abweichend, z. B. Dk-Niet mit „Y"-Zeichen.)
:::

:::merke Verformungskräfte
Zum Stauchen braucht man ungefähr **Al : Monel : Ti ≈ 1 : 2 : 3**. Ti-Vollniete sind daher schwer zu verarbeiten → bei Titan meist Passniete (Lektion 5).
:::

## 4 NAS 523 – Rivet Code

Auf Zeichnungen (v. a. US) wird ein Niet durch ein **Kreuz-Symbol** mit vier Feldern (NW, NE, SW, SE) codiert:

- **NW – Fastener Identity:** Zwei-Buchstaben-Code für alles außer Durchmesser und Länge, z. B. **BJ** = AN470AD (Universalkopf, 2117-T3), **BB** = AN426AD (Senkkopf 100°, 2117-T3), BH = AN470A (1100-F), CY = AN426DD (2024-T3).
- **NE – Durchmesser** in 32stel Zoll (z. B. 4 = 4/32″ = 1/8″) und **Lage des Setzkopfs**: „F" = far side, „N" = near side.
- **SE – Länge** in 16tel Zoll (z. B. 5 = 5/16″, 4,5 = 4,5/16″).
- **SW – Senk-/Warzendaten:** C = countersink (Senkung), D = dimple (Warze), DC = oben gewarzt, unten gesenkt; 100 bzw. 82 = Senkwinkel.

:::bsp Rivet Code lesen
`BJ | 4N` über `| 5` → **MS20470AD-4-5**: Universalkopf, Werkstoff AD (2117), Durchmesser 4/32″ = 1/8″, Länge 5/16″, Setzkopf auf der Near Side.
`BB | 3N` über `C | 4.5` → MS20426AD-3: Senkkopf 100°, Ø 3/32″, Setzkopf near side, oberes Blech 100° angesenkt, Länge 4,5/16″.
:::

## Übungsaufgaben

:::aufgabe 1
Welchen Nenndurchmesser (Strichnummer) wählst du nach Faustformel für zwei Bleche $s=0{,}8\,$mm? Wie groß ist die Bohrung? Lohnt sich hier ein Senkniet?
:::loesung
$d\approx(2{,}5\ldots4)\cdot0{,}8=2{,}0\ldots3{,}2\,$mm → **-3 (2,4 mm)** oder **-4 (3,2 mm)**. Bohrung ≈ $d+0{,}1\,$mm. Senkniet 100° in 0,8 mm Blech: Die Senkkopfhöhe ist größer als $0{,}8-0{,}2=0{,}6\,$mm → Messerschneide. Also **warzen (Dimpling)**, Kleinkopf-/reduzierten Senkkopfniet verwenden oder Universalkopf.
:::
:::

:::aufgabe 2
Was bedeutet MS20426DD-5-6? Welcher Durchmesser und welche Länge in mm?
:::loesung
MS20426 = Senkkopf 100°, DD = AlCuMg2 (2024), -5 = 5/32″ = **4,0 mm**, -6 = 6/16″ = 3/8″ = **9,5 mm** Länge.
:::
:::

:::aufgabe 3
Warum werden für die Verbindung eines Mg-Bauteils mit einem Al-Bauteil B-Niete (AlMg5) genommen und nicht AD-Niete?
:::loesung
Kontaktkorrosion: AlMg5 liegt elektrochemisch näher am Magnesium und ist kupferfrei; kupferhaltige Al-Legierungen (AD, D) würden mit Mg ein starkes galvanisches Element bilden. Außerdem ist die Last in der Sekundärstruktur gering.
:::
:::

## Karteikarten

:::karte
Drei Vorteile von Nietverbindungen?
???
Verschiedene Werkstoffe/Dicken verbindbar; kaum Montagespannungen; fertig behandelte Teile vernietbar (außerdem: jedes kaltverformbare Material, vielseitig, günstig, maschinell).
:::

:::karte
Drei Nachteile von Nietverbindungen?
???
Geringe Zug-/Dauerfestigkeit, kaum Zugkraft in Nietachse (Kopfzug), nicht dicht und nicht zerstörungsfrei lösbar; Schwingung kann Klemmung lösen.
:::

:::karte
Setzkopf und Schließkopf?
???
**Setzkopf** = vorgefertigter Kopf; **Schließkopf** = beim Nieten aus dem Schaftende gestauchter Kopf.
:::

:::karte
Faustformel Nietdurchmesser?
???
$d_{\text{Nenn}}\approx(2{,}5\ldots4)\,s_{\text{Blech}}$; Bohrung ≈ $d+0{,}1\,$mm.
:::

:::karte
Faustformel Schließkopf und Überstand?
???
$d_{\text{Schließkopf}}\approx1{,}5d+1\,$mm; Schaftüberstand $\approx1{,}5d$.
:::

:::karte
Strichnummer -5 bei Nieten?
???
5/32 Zoll ≈ 4,0 mm (Durchmesser in 32steln Zoll). -4 = 3,2 mm, -6 = 4,8 mm.
:::

:::karte
Mindest-Restbohrung beim Senkniet?
???
≥ 0,2 mm zylindrischer Bereich, sonst Messerschneide. Für dünnere Bleche: warzen (Dimpling) oder Kleinkopfniete.
:::

:::karte
Kennzeichnung AD- und B-Niet (US)?
???
AD (2117, Dk-Niet): **Punkt/Delle**; B (5056): **erhabenes Kreuz**; A (1100): glatt.
:::

:::karte
Verhältnis der Stauchkräfte Al : Monel : Ti?
???
≈ 1 : 2 : 3.
:::

:::karte
NAS 523: Was steht in den vier Feldern?
???
NW: Fastener-Code (Typ+Werkstoff), NE: Durchmesser (1/32″) + Kopflage N/F, SE: Länge (1/16″), SW: Senk-/Warzenangaben (C, D, Winkel).
:::
