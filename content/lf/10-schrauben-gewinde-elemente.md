---
title: 10 Schraubenverbindungen I – Gewinde, Werkstoffe, Schrauben, Muttern, Scheiben, Sicherungen
chapter: Kap. 9 Schraubenverbindungen
minutes: 100
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#73; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#76; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#82
---

:::ziel
- Verwendungszwecke, **Vor- und Nachteile** von Schrauben nennen; **Schraube vs. Bolzen** unterscheiden.
- Gewinde geometrisch beschreiben ($\tan\varphi=P/(\pi d_2)$) und die **Maße des ISO-Gewindes** berechnen ($d_2$, $d_3$, $A_S$).
- **ISO-, UST- (UNC/UNF/UNJF) und Whitworth-Bezeichnungen** lesen; Toleranzklassen vergleichen.
- **Festigkeitsklassen** (z. B. 10.9) entschlüsseln; typische Luftfahrt-Werkstoffe kennen.
- Schraubenformen, Muttern, **Scheiben** (PLI, DTI), **Gewindeeinsätze** (Heli-Coil) und zulässige **Schraubensicherungen** kennen.
:::

## 1 Allgemeines (Kap. 9.1)

Historisch war die Schraube zuerst **Bewegungs- und Kraftübersetzungselement** (Archimedische Schraube, Wein- und Ölpressen), erst später Verbindungselement. 1841 führte Whitworth das erste brauchbare **einheitliche Gewindesystem** ein – vorher passten Schrauben und Muttern verschiedener Hersteller nicht zusammen. Im Maschinenbau ist die Schraube das häufigste Element; im **Flugzeugbau** dient sie hauptsächlich als **Scherelement** (Passschraube), seltener als Zug-/Dehnschraube (Flansche).

**Verwendung:** Befestigung (lösbar) · Spannschraube (Spannschloss) · Verschlussschraube (kegelig) · Stellschraube · Messschraube (Mikrometer) · Kraftübersetzung (Schraubstock) · Bewegungsschraube (Leitspindel) · Differenzschraube.

:::merke Vorteile / Nachteile
**Vorteile:** lösbar · als Querbolzen höhere Tragfähigkeit als ein Niet · **viel höhere Kopfzugfestigkeit** als ein Niet · als **Dehnschraube** gut für schwingende Lasten · Vorspannung einfach aufzubringen.
**Nachteile:** **ungewisse Vorspannkraft** · Sicherung gegen Losdrehen nötig · **Kerbwirkung** des Gewindes · schlechter Wirkungsgrad bei Bewegungsschrauben · Verschleiß der Flanken · Gewindespiel · schlechte Zentrierung durch das Gewinde.
:::

:::def Schraube oder Bolzen?
**Schraube:** Nenndurchmesser **< 5 mm**, oder Gewinde **durchgehend** (besonders bei langen Elementen).
**Bolzen:** Nenndurchmesser **> 5 mm** mit **blankem Schaft** (Gewinde geht nicht durch; oft Passbolzen).
In den USA entscheidet das **Werkzeug**: Schraubenschlüssel → *bolt*, Schraubendreher → *screw*.
:::

## 2 Gewinde (Kap. 9.2)

:::formel Schraubenlinie (Gl. 9.1)
Wickelt man eine unter dem **Steigungswinkel** $\varphi$ geneigte Gerade auf einen Zylinder (Durchmesser $D$), entsteht die Schraubenlinie:
$$\tan\varphi=\frac{P}{2\pi R}=\frac{P}{\pi D}\qquad(P=\text{Steigung}).$$
**Mehrgängige** Gewinde: mehrere parallele Schraubenlinien; die **Teilung** ist der Abstand benachbarter Gänge, die Steigung = Gangzahl · Teilung.
:::

:::formel Gewindeformen (Tab. 9.1)
| Profil | Gewinde | Anwendung |
|---|---|---|
| Dreieck | **Spitzgewinde** | **Befestigungsschrauben**; kegelig 1:16 als Verschlussschraube |
| Rechteck | Flachgewinde | Bewegungsgewinde (selten) |
| Trapez (30°) | Trapezgewinde (DIN 103) | Bewegungsgewinde, z. B. Klappenantriebe, Spindeln |
| Sägezahn (3°/30°) | Sägengewinde (DIN 513) | große Kräfte in **einer** Richtung (Hubspindel) |
| Halbkreis | Rundgewinde (DIN 405) | robuste Kupplungen, Lasthaken |
Im Flugzeugbau zählen vor allem **Spitzgewinde** (Befestigung).
:::

### Metrisches ISO-Gewinde (DIN 13)

Flankenwinkel **60°**; gegenüber dem alten DIN-Profil größere Ausrundung im Gewindegrund. Regelgewinde haben $\varphi\approx2{,}5°\ldots3{,}5°$.

:::formel Maße des ISO-Gewindes
$$H=\tfrac{\sqrt3}2P=0{,}86603\,P\quad(\text{theor. Profilhöhe}),\qquad H_1=0{,}54127\,P=\tfrac58H\quad(\text{Mutter}),\qquad h_3=0{,}61343\,P\quad(\text{Bolzen})$$
$$d_2=D_2=d-0{,}64953\,P\ (\text{Flanken-}\varnothing),\quad D_1=d-2H_1\ (\text{Kern-}\varnothing\text{ Mutter}),\quad d_3=d-1{,}22687\,P\ (\text{Kern-}\varnothing\text{ Bolzen})$$
$$A_K=\frac\pi4d_3^2\ (\text{Kernquerschnitt}),\qquad A_S=\frac\pi4\left(\frac{d_2+d_3}2\right)^2\ (\text{Spannungsquerschnitt; konservativ: }A_K).$$
:::

:::bsp Gewindemaße
| | $P$ | $d_2$ | $d_3$ | $A_S$ | $\varphi$ |
|---|---|---|---|---|---|
| M8 | 1,25 | 7,188 | 6,466 | 36,6 mm² | 3,17° |
| M10 | 1,5 | 9,026 | 8,160 | 58,0 mm² | 3,03° |
| M12 | 1,75 | 10,863 | 9,853 | 84,3 mm² | 2,94° |
| M20×1 (fein) | 1 | 19,350 | 18,773 | 285,4 mm² | 0,94° |
Rechenweg M10: $d_2=10-0{,}64953\cdot1{,}5=9{,}026$; $d_3=10-1{,}22687\cdot1{,}5=8{,}160$; $A_S=\frac\pi4\cdot8{,}593^2=58{,}0\,$mm²; $\varphi=\arctan\frac{1{,}5}{\pi\cdot9{,}026}=3{,}03°$.
**Feingewinde** haben einen kleineren Steigungswinkel (bessere Selbsthemmung) und einen größeren Kernquerschnitt.
:::

**Bezeichnungen:** `DIN 13-M8` = Regelgewinde Ø 8, $P=1{,}25$ · `M30` → $P=3{,}5$ · `M20x1` = Feingewinde $P=1$ · `DIN 158-M30x2 keg.` = kegeliges, im Gewinde dichtendes Außengewinde (1:16).
**Toleranzen** nach DIN EN ISO 4759-1: Produktklassen A, B (Außengewinde **6g**) und C (8g).

### UST – Unified Screw Threads (US/GB)

Flankenwinkel ebenfalls **60°**, Maße über $H$ und $P$ (Form nach **AS 8879**, früher MIL-S-8879): $H_1=\frac9{16}H$, $h_3=\frac23H$, $d_2=d-0{,}64952P$, $d_3=d-1{,}155P$.
- **UNC** (Coarse, Grobgewinde), **UNF** (Fine), **UNEF** (Extra Fine), **UN** mit Einheitssteigung (8, 12, 16 Gänge/Zoll).
- Unter ¼″: Größen-**Schlüsselzahlen** 0–12 (z. B. Nr. 4 = 2,84 mm, Nr. 10 = 4,82 mm); darüber direkte Zollangabe. Nach dem Bindestrich: **Gänge pro Zoll**.
- **J** = kontrollierter Gewindegrundradius (*controlled root radius*) – bessere Dauerfestigkeit, Luftfahrtstandard (UNJ).
- Toleranzklassen **1A/2A/3A** (außen), **1B/2B/3B** (innen); 2A/2B sind Standard.

:::bsp UST-Bezeichnungen lesen
`4-40 UNC-3A`: Größe 4 (2,84 mm), 40 Gänge/Zoll, Grobgewinde, Außengewinde Klasse 3.
`1/2-20 UNJF-3A`: ½″ = 12,7 mm, 20 Gänge/Zoll ($P=1{,}27\,$mm), Feingewinde mit kontrolliertem Grundradius, Außengewinde Klasse 3.
`1/4-32 UNJEF-3B`: ¼″, 32 Gänge/Zoll, UN-Form mit J-Grund, extra fein, Klasse 3, Innengewinde.
:::

:::formel Toleranzvergleich (Tab. 9.4)
| | Klasse fein | mittel | grob |
|---|---|---|---|
| ISO außen | 4h | **6g** | 8g |
| ISO innen | 4H, 5H | **5H, 6H** | 7H |
| UST außen | 3A | **2A** | 1A |
| UST innen | 3B | **2B** | 1B |
:::

**Whitworth** (BSW grob, BSF fein, BA Kleinschrauben): Flankenwinkel **55°** → **nicht** mit UST kombinierbar, auch bei gleichem Durchmesser und gleicher Steigung! Whitworth-**Rohrgewinde** werden nach dem Rohr-Innendurchmesser benannt (R 1½ → Rohr innen 38,1 mm, Gewinde außen 47,8 mm).
**Sonstige:** Trapez `Tr 36x6` ($P=6$), `Tr 36x10 P5` (zweigängig, Steigung 10, Teilung 5); Säge `S 48x8`.

## 3 Werkstoffe und Herstellung (Kap. 9.3–9.4)

:::formel Festigkeitsklassen (DIN EN ISO 898-1)
Kennzeichnung **X.Y**: $R_m=X\cdot100\,$N/mm², $R_{p0,2}=Y/10\cdot R_m$.
| Klasse | 4.6 | 5.6 | 6.8 | **8.8** | 9.8 | **10.9** | **12.9** |
|---|---|---|---|---|---|---|---|
| $R_m$ nominal | 400 | 500 | 600 | 800 | 900 | 1000 | 1200 |
| $R_{p0,2}$ min | 240 | 300 | 360 | 640 | 720 | 940 | 1100 |
Beispiel: 10.9 → $R_m=1000$, $R_{p0,2}=0{,}9\cdot1000=900$ (Mindestwert in der Norm 940); 8.8 → $R_m=800$, $R_{p0,2}=640\,$N/mm².
:::

- Im **Flugzeugbau** Schraubenwerkstoffe mit $R_m>900\,$N/mm²: **1.7220.5** ($R_m>900$), **1.6604.6** ($>1250$), **3.7164.1** (Ti6Al4V, $>1100$).
- **Muttern** meist geringerer Festigkeit als der Bolzen (1.1174.5, 1.0721.7).
- Oberflächen: **kadmiert**, **versilbert** (über 430 °C).
- Gewinde werden im Flugzeugbau **ausschließlich gerollt**, Köpfe **gestaucht** → nicht unterbrochener **Faserverlauf**, Druckeigenspannungen → höhere Dauerfestigkeit (geschnittene, gefräste … Gewinde nicht).

## 4 Schrauben, Muttern, Scheiben, Einsätze (Kap. 9.5–9.8)

**Kopfformen** (Abb. 9.6): Sechskant (Hex), Zwölfkant (12-Point, kleiner Kopf, hohe Momente), Innensechskant, Innenzwölfkant, Kreuzschlitz (Phillips ACR), Square-Drive, **Torq-Set**, **Tri-Wing**, Clevis-Bolt (Gabelbolzen). Normen z. B. LN 9471 (Übersicht), LN 9355 (Sechskant-Passschrauben), LN 9347/9350 (Dehnschrauben), **LN 29796 (Hi-Lok, Ti)**.

**Muttern:** überwiegend **selbstsichernde** Sechs- oder Zwölfkantmuttern; außerdem **Annietmuttern** (Nutplates) – auf der Rückseite angenietet, damit man von **einer** Seite schrauben kann (Wartungsdeckel). Kronenmuttern mit Splint. Übersicht: LN 9466/9467, LN 29670.

:::merke Montageregel
Muttern wenn möglich **nach unten** montieren – löst sich die Mutter, fällt der Bolzen nicht heraus. Muttern müssen in der Struktur **gegen Losdrehen gesichert** sein. Klemmteil-Selbstsicherungen (gequetschtes Gewinde, Polyamidring) sind nur für **1–2 Montagen** gedacht; **splintgesicherte Kronenmuttern** sind beliebig oft montierbar.
:::

**Scheiben** (LN 9447) – wofür?
- weiche Bauteiloberfläche → **Flächenpressung** unter dem Kopf verringern,
- schräge Flächen → Auflage **ausgleichen** (keilförmig/sphärisch),
- polierte/behandelte Oberfläche → vor **Beschädigung** schützen,
- **definierte Vorspannung** (Spezialscheiben),
- raue Oberfläche → Reibung reduzieren (im Flugzeugbau selten).

:::def Spezialscheiben zur Vorspannungskontrolle
**PLI-Washer** (*Pre-Load Indicating*): ein höherer Innenring wird beim Anziehen zusammengedrückt, bis der flachere Außenring anliegt → Kontrolle über den **sich schließenden Spalt**.
**DTI-Washer** (*Direct Tension Indication*): bis zur Sollvorspannung Reibung nur innen; dann berühren die äußeren Noppen → **sprunghaft steigendes Moment**, aus den Noppen tritt eine **Paste** aus.
:::

:::def Gewindeeinsätze – Heli-Coil
Eine **Stahldrahtspirale** wird in ein Übermaß-Gewinde (meist **Leichtmetall**) eingesetzt. Zweck: **Ausreißen** weicher Gewinde verhindern, häufig gelöste Verbindungen verbessern, **Reparatur**. Die Spirale sitzt nach dem Entspannen fest (Reibdurchmesser zum Bauteil größer als zum Bolzen). **Twinsert:** zwei Spiralen ineinander, um nach großem Aufbohren wieder aufs Nennmaß zu kommen.
:::

## 5 Schrauben- und Muttersicherungen (Tab. 9.7)

| Sicherung | Bewertung |
|---|---|
| **Splintgesicherte Kronenmutter** | unbeschränkt, sofern kein Drehmoment auf die Mutter wirkt |
| Selbstsichernde Mutter mit **Polyamideinlage** | statisch/dynamisch ohne Relativbewegung Kopf–Auflage; **Temperaturgrenze** beachten |
| **V-Lock-Nut**, **Flex-Lock-Nut** | statisch/dynamisch ohne Relativbewegung |
| Sicherungsbleche | im Einzelfall prüfen |
| **Zahnscheiben, Federringe, Fächerscheiben** | **gelten nicht als Sicherung!** |
| **Kontermuttern** | im Flugzeugbau **grundsätzlich nicht** verwenden |
| Lacke und Kleber | im Einzelfall nachzuweisen |
| **Drahtsicherung** | uneingeschränkt; z. B. **MS 20995-NC-32** = Military Standard, Material C (Werkstoffbuchstabe), Ø 0,032″ |

## Übungsaufgaben

:::aufgabe 1
Berechne $d_2$, $d_3$, $A_S$ und $\varphi$ für M16 ($P=2$).
:::loesung
$d_2=16-0{,}64953\cdot2=14{,}701$; $d_3=16-1{,}22687\cdot2=13{,}546$; $A_S=\frac\pi4\left(\frac{14{,}701+13{,}546}2\right)^2=\frac\pi4\cdot14{,}124^2=156{,}7\,$mm²; $\varphi=\arctan\frac2{\pi\cdot14{,}701}=2{,}48°$.
:::
:::

:::aufgabe 2
Welche Streckgrenze hat eine Schraube der Klasse 12.9 nach dem Kennzeichnungssystem? Welche Mindestwerte nennt die Norm?
:::loesung
$R_m=1200$, $R_{p0,2}=0{,}9\cdot1200=1080\,$N/mm². Norm: $R_m\ge1220$, $R_{p0,2}\ge1100\,$N/mm².
:::
:::

:::aufgabe 3
Ein Mechaniker will eine Wartungsklappe mit Sechskantschrauben und **Federringen** sichern. Was sagst du? Was wäre eine zulässige Lösung?
:::loesung
Federringe gelten **nicht** als Schraubensicherung. Zulässig: selbstsichernde Muttern bzw. Annietmuttern (Nutplates) mit Klemmteil, oder Drahtsicherung.
:::
:::

:::aufgabe 4
Bestimme die Steigung in mm für `3/8-24 UNJF-3A` und vergleiche den Steigungswinkel ungefähr mit M10.
:::loesung
$P=25{,}4/24=1{,}058\,$mm; $d=9{,}525$, $d_2\approx9{,}525-0{,}6495\cdot1{,}058=8{,}838$ → $\varphi=\arctan\frac{1{,}058}{\pi\cdot8{,}838}=2{,}18°$ (M10: 3,03°) – feiner, also bessere Selbsthemmung.
:::
:::

## Karteikarten

:::karte
Schraube vs. Bolzen (Luftfahrt-Definition)?
???
Schraube: < 5 mm oder durchgehendes Gewinde; Bolzen: > 5 mm mit blankem Schaft. (USA: Schlüssel → bolt, Schraubendreher → screw.)
:::

:::karte
Steigungswinkel?
???
$\tan\varphi=\frac P{\pi d_2}$; ISO-Regelgewinde ca. 2,5–3,5°.
:::

:::karte
ISO-Gewinde: $d_2$, $d_3$?
???
$d_2=d-0{,}64953P$, $d_3=d-1{,}22687P$.
:::

:::karte
Spannungsquerschnitt?
???
$A_S=\frac\pi4\left(\frac{d_2+d_3}2\right)^2$ (konservativ $A_K=\frac\pi4d_3^2$).
:::

:::karte
Flankenwinkel ISO / UST / Whitworth / Trapez?
???
60° / 60° / 55° / 30°.
:::

:::karte
Was bedeutet das J in UNJF?
???
Controlled Root Radius – definierter Radius im Gewindegrund, bessere Dauerfestigkeit (Luftfahrtstandard).
:::

:::karte
Festigkeitsklasse 10.9?
???
$R_m=1000\,$N/mm², $R_{p0,2}=0{,}9\cdot R_m=900\,$N/mm².
:::

:::karte
Wie werden Gewinde im Flugzeugbau hergestellt und warum?
???
Ausschließlich gerollt (Köpfe gestaucht) → ununterbrochener Faserverlauf, Druckeigenspannungen, höhere Dauerfestigkeit.
:::

:::karte
Was gilt nicht als Schraubensicherung, was ist verboten?
???
Zahnscheiben, Federringe, Fächerscheiben gelten nicht als Sicherung; Kontermuttern im Flugzeugbau grundsätzlich nicht verwenden.
:::

:::karte
Heli-Coil?
???
Stahldrahtspirale in Leichtmetallgewinde gegen Ausreißen und zur Reparatur; Twinsert = zwei Spiralen.
:::

:::karte
PLI- und DTI-Scheibe?
???
Zur Vorspannungskontrolle: PLI – Spalt zwischen Deckscheibe und Außenring schließt sich; DTI – Noppen, Momentsprung, austretende Paste.
:::
