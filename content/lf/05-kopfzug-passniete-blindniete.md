---
title: 5 Kopfzug, kombinierte Belastung, Inter-Rivet Buckling, Pass- und Blindniete, Konstruktionsregeln
chapter: Kap. 6 Nietverbindung
minutes: 110
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#33; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#36; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#40
---

:::ziel
- Die **Kopfzug**-Tragfähigkeit von Vollnieten berechnen.
- **Kombinierte Scher- und Zugbelastung** mit Abminderungsfaktor $K$ und **Interaktionskurven** nachweisen (Reservefaktor).
- **Inter-Rivet Buckling** erklären und die Nietteilung abschätzen.
- **Passniete** (Taper-Lok, Hi-Lok, Lockbolt/Hi-Shear) und **Blindniete** mit Einsatzgebiet, Vor- und Nachteilen beschreiben.
- Niete nach **Festigkeit/Kosten** auswählen und die **Konstruktions- und Einbauregeln** anwenden.
:::

## 1 Kopfzug bei Vollnieten (Kap. 6.3.3)

Zieht eine Kraft **in Richtung der Nietachse**, kann der Kopf **abscheren** (zylindrischer Mantel um den Schaft, Höhe $h$) oder der **Schaft reißen**:

:::formel Ertragbare Kopfzugkraft
$$K_{B1}=\frac{\pi d_R^2}{4}\cdot R_C,\qquad K_{B2}=2\,d_R\,h\,R_C,\qquad K_B=\min(K_{B1},K_{B2}).$$
$h$ = Nietkopfhöhe. (Der Schaftzug wird – konservativ – ebenfalls mit $R_C$ bewertet.)
:::

:::achtung
**Kopfzug ist bei Nietkonstruktionen möglichst zu vermeiden!** Niete sind Schubelemente.
:::

:::bsp
Dk-Niet $d_R=4{,}05\,$mm, $R_C=200\,$N/mm², Kopfhöhe $h=1{,}6\,$mm: $K_{B1}=2576\,$N, $K_{B2}=2\cdot4{,}05\cdot1{,}6\cdot200=2592\,$N → $K_B=2576\,$N.
:::

## 2 Kombinierte Belastung (Kap. 6.3.4)

Wirken **Scher- und Zugkraft gleichzeitig**, darf man die beiden Nachweise nicht getrennt führen. Man bildet **Auslastungsgrade** und prüft sie gegen eine **Interaktionskurve**.

:::formel Auslastungsgrade
$$R_S=\frac{F_S}{F_{SB}}\quad(\text{Schub}),\qquad R_Z=\frac{F_Z}{F_{ZB}\cdot K}\quad(\text{Zug}).$$
$F_{ZB}$ = ertragbare Bruch-Zuglast des **ganzen** Verbindungselements (Niet + Collar/Mutter, meist Herstellerangabe), $K$ = **Abminderungsfaktor** (Tab. 6.6).
:::

:::formel Abminderungsfaktor und Kurven (Tab. 6.6, Abb. 6.14)
| Verbindungselement | Kurve dicke Bauteile | Kurve dünne Bauteile | $K$ normal | $K$ Crash |
|---|---|---|---|---|
| Stahl-/Ti-Schraub-Passniete und Schrauben | A | C | 1,0 | 1,0 |
| Al-Schraub-Passniete | B | C | 1,0 | 1,0 |
| Passniete mit gequetschtem Collar | D | D | 0,8 | 1,0 |
| **Vollniete** | D | D | **0,5** | 1,0 |
| Blindniete | D | D | 0,2 | 1,0 |
Interaktionskurven (HSB):
- **A:** $R_Z^2+R_S^{10}=1$
- **B:** $R_Z^2+R_S^{5}=1$
- **C:** $R_Z^2+R_S^{2}=1$ (Kreis)
- **D:** $R_Z+R_S=1$ (Gerade)

„Dick" = Scherbruch maßgebend, „dünn" = Lochleibungsbruch maßgebend. $K<1$, weil Firmenangaben zur Bruch-Zuglast nichts über die **Verformung** des Niets aussagen (besonders bei wiederholter Last). Bei **Crash-Fällen** dürfen starke Verformungen auftreten → keine Abminderung.
:::

:::formel Reservefaktor aus der Interaktionskurve
Der Lastpunkt $P=(R_S;R_Z)$ wird vom Ursprung $O$ aus (proportionale Laststeigerung) bis zur Kurve verlängert (Punkt $S$):
$$RF=\frac{\overline{OS}}{\overline{OP}}.$$
Für Kurve D: $RF=\dfrac{1}{R_S+R_Z}$; für Kurve C: $RF=\dfrac{1}{\sqrt{R_S^2+R_Z^2}}$; für A/B numerisch lösen: $(RF\cdot R_Z)^2+(RF\cdot R_S)^{10\text{ bzw. }5}=1$.
:::

:::achtung
Der so ermittelte $RF$ gilt **nur für das Verbindungselement**. Der Reservefaktor des **Bauteils** (Lochleibung, Nettoquerschnitt) ist **gesondert** nachzuweisen.
:::

:::bsp Vollniet unter Schub und Zug
Dk-Niet ($F_{SB}=2576\,$N), Bruch-Zuglast lt. Hersteller $F_{ZB}=1500\,$N, normaler Lastfall → $K=0{,}5$, Kurve D. Lasten (Bruchlastniveau): $F_S=1200\,$N, $F_Z=200\,$N.
$R_S=\frac{1200}{2576}=0{,}466$, $R_Z=\frac{200}{0{,}5\cdot1500}=0{,}267$.
$RF=\frac1{0{,}466+0{,}267}=1{,}37\ge1$ ✓.
(Zum Vergleich: wäre Kurve C zulässig, ergäbe sich $RF=1/\sqrt{0{,}466^2+0{,}267^2}=1{,}86$.)
:::

## 3 Inter-Rivet Buckling (Kap. 6.3.5)

Bei **druckbelasteten** Nietverbindungen – typisch: **Außenhaut auf Stringer** – kann das dünne Blech **zwischen zwei Nieten ausknicken** (wie ein kurzer Knickstab, eingespannt an den Nieten, Abb. 6.15). Die kritische Spannung $\sigma_{ir}$ hängt ab von der **Nietteilung** $t$ bezogen auf die Blechdicke $s$ ($t/s$), vom Werkstoff und vom **Niet-Formfaktor** $c$ (Einspanngrad des Kopfes):

| Kopf | $c$ |
|---|---|
| Senkkopf | 1,0 |
| Brazier-Head | 3,0 |
| Punktschweißung | 3,5 |
| Universalkopf | 4,0 |

Diagramm Abb. 6.16 gilt für $c=4$. Liest man für eine andere Befestigung die nötige Teilung ab, wird $t/s$ mit $\sqrt{c/c_{\text{Diagr.}}}$ korrigiert (Euler-Knicken: kritische Spannung $\propto c/(t/s)^2$).

:::merke Richtwert
Nietabstand **4 bis 5 × Nenndurchmesser** ist in den meisten Fällen ein guter Wert (Rundkopf $t/d=4$, Senkkopf $t/d=5$).
:::

:::bsp Korrektur für Senkniete
Für $\sigma_{ir}=200\,$N/mm² liest man für Universalköpfe ($c=4$) z. B. $t/s=40$ ab. Mit Senknieten ($c=1$): $t/s=40\cdot\sqrt{1/4}=20$ – die Niete müssen **halb so weit** auseinander sitzen.
:::

## 4 Passniete / Spezialniete (Kap. 6.4)

:::def Passniet
Wird **nicht durch Stauchen** des Schafts geschlossen, sondern durch einen **aufgeschraubten oder aufgequetschten Schließring („Collar")** → immer mindestens **zweiteilig**. Grund: Man kann **sehr feste Werkstoffe** verwenden (Vergütungsstahl, hochfeste Ti-Legierungen), die nicht stauchbar wären, und erreicht eine **hochwertige Passung** (gut für dynamische Lasten). Al-Passniete werden eingesetzt, wo es mehr auf **Ermüdungsverhalten** als auf hohe Festigkeit ankommt.
:::

- **Geschraubter Collar:** reißt bei einem bestimmten Anzugsmoment an einer **Sollbruchstelle** ab; der Rest ist nicht profiliert → mit einfachen Mitteln **nicht lösbar** (daher „nicht lösbare" Verbindung, obwohl geschraubt). Mit lösbarer Spezialmutter → **Passbolzen**.
- Passniete brauchen **Zugang von beiden Seiten**.

:::def Taper-Lok (konischer Schaft)
Hochfester, niedriglegierter Stahl; für **hochfeste Strukturverbindungen mit dynamischen Lasten**. Der **konische Schaft** erzeugt beim Anziehen eine **Druckvorspannung in der Bohrungswand** → kleinere Spannungsspitzen, bessere **Zeitfestigkeit**, **spielfreier** Sitz. Bohrung mit Spezialreibahlen → **sehr teuer**, Reparatur mit Übergrößen. Optimal z. B. an **Flügel-, Fahrwerks- und Triebwerksanschlüssen**.
:::

:::def Hi-Lok (zylindrischer Schaft)
Viel häufiger, in allen hochbeanspruchten Bereichen der Zelle. Stahl, Ti oder Al. **Scher-Typ** mit niedrigem Setzkopf, **Zug-Typ** mit höherem Kopf. Normung z. B. BAC (Boeing), in Deutschland **LN 29796** (Airbus). Einbau streng nach den Bohrungstoleranzen der Handbücher. Reparatur: Ersatz durch Taper-Lok möglich.
:::

:::def Lockbolt, Huckbolt, Hi-Shear
Prinzipiell identisch, Unterschied v. a. Handelsname, Zahl der Ringnuten und Kopfform; der Schließring wird **aufgequetscht**. **Hi-Shear** (nur eine große Schließringnut + Quetschhülse) ist auf **Kopfzug am geringsten** belastbar.
:::

## 5 Blindniete und Sonderformen (Kap. 6.5–6.6)

:::def Blindniet
Wird **nur von einer Seite** montiert – für schwer zugängliche Stellen in Fertigung und Reparatur. Schnelle Verarbeitung aus dem Magazin möglich. Je niedriger beansprucht, desto billiger. **Einfache Pop-Niete nicht in der Primärstruktur!** Dort spezielle Systeme: Blind-Lockbolt, Schraubniete (V-Bolt, Jo-Bolt), Hi-Shear-Blindbolzen.
:::

**Sonderformen:** Stauchniete aus **Monel** (bis ca. 230 °C) und **CRES** (Triebwerk bis 750 °C); **Bimetall-Stauchniete** (Setzkopf schon ausgehärtet, Schaft weich); **Scherniete in der Steuerung** als Sollbruchstelle gegen Überlast (z. B. durch Eisansatz), oft in Drehwellen.

## 6 Auswahl nach Festigkeit und Kosten (Tab. 6.7)

Werte **relativ zum Alu-Vollniet LN 9199 = 1**:

| Niet | Kosten | stat. Abscheren | Kopfzug | Schwingfestigkeit | Senkkopfhöhe | Gewicht |
|---|---|---|---|---|---|---|
| Alu-Vollniet LN 9199 | 1 | 1 | 1 | 1 | 1 | 1 |
| Monel-Vollniet LN 9179 | 1,5 | 1,3 | 2 | 1 | 1 | 3,2 |
| Hi-Lok Stahl Zug/Scher | 5,2 | 2,5 | 2,6/1,5 | 1,2 | 1,1/0,7 | 4,1/4,0 |
| Hi-Lok Titan Zug/Scher | 9,1/10,1 | 2,5/2,9 | 2,6/1,5 | 1,2 | 1,1/0,6 | 2,1/2 |
| Hi-Shear Stahl/Titan | 4/8 | 2,5 | 1,2 | 1,0 | 0,7 | 4/2 |
| Avdel-Blindniet | 1,4 | 1,0 | 0,7 | 0,6 | 1,0 | 0,9 |
| Taper-Lok Stahl/Titan | 7/20 | 2,5 | 1,5 | 1,4 | 0,7 | 4/2 |

Erkenntnis: Taper-Lok hat die **beste Schwingfestigkeit** (1,4), ist aber teuer (Ti: 20-fach!). Titan halbiert das Gewicht gegenüber Stahl bei ähnlicher Festigkeit. Blindniete haben die **schlechteste Schwingfestigkeit** (0,6).

## 7 Konstruktions- und Einbaukriterien (Kap. 6.8)

:::merke Checkliste
- **Kopfzug** bei Vollnieten vermeiden.
- Bei Senknieten **Mindestblechdicke** $k+0{,}2\,$mm (Messereffekt).
- Nietung so dimensionieren, dass die anzuschließenden Querschnitte **voll ausgelastet** werden können.
- Teilung gegen **Inter-Rivet Buckling**: $t/d=4$ (Rundkopf), $t/d=5$ (Senkkopf).
- Senkniete bei dünnen Bauteilen weniger tragfähig als Rundkopfniete.
- **Randabstand** $e/d\ge2$, nie $\le1{,}5$; bei Faserverbund $e/d>3$.
- **Nietreihen** statisch am günstigsten **2-reihig** (Dichtnietung nur 2-reihig); bei mehr Reihen ist die **erste Reihe höher beansprucht**.
- **Bohrungsqualität** beeinflusst die Schwingfestigkeit stark (Abb. 6.22).
- Dauerfestigkeit: **unsymmetrisch einschnittig am schlechtesten, symmetrisch zweischnittig am besten**, oft einschnittig mit Aussteifungen.
- Dicke Bauteile: Verbindungselement versagt; dünne: Bauteil (Lochleibung).
- **Lieber viele kleine Niete als wenige große** (keine Kraftkonzentrationen).
- Niete mit **axialer Vorspannung** (Reibschluss) mindern die Kerbwirkung am Bohrungsrand.
- Fügungen für **Inspektion** zugänglich machen.
- **Oberflächenschutz:** Alu-Niete chromsäure-anodisiert, Monel/Stahl kadmiert, Titan anodisiert.
- In einer Zone möglichst **gleiche** Verbindungselemente, Bohrungen, Toleranzen.
- **Reparatur** bedenken (Übermaßniete).
:::

## Übungsaufgaben

:::aufgabe 1
Ein Ti-Hi-Lok (Scher-Typ, Kurve A bei dickem Bauteil, $K=1$) hat $F_{SB}=12\,$kN und $F_{ZB}=8\,$kN. Belastung: $F_S=9\,$kN, $F_Z=4\,$kN. Bestimme den Reservefaktor. Was ändert sich bei dünnem Bauteil (Kurve C)?
:::loesung
$R_S=0{,}75$, $R_Z=0{,}5$.
Kurve A: $(0{,}5\,RF)^2+(0{,}75\,RF)^{10}=1$. Probieren: $RF=1{,}25$: $0{,}391+0{,}525=0{,}92<1$; $RF=1{,}30$: $0{,}423+0{,}776=1{,}20>1$; $RF=1{,}27$: $0{,}403+0{,}614=1{,}02$ → $RF\approx1{,}27$.
Kurve C: $RF=1/\sqrt{0{,}75^2+0{,}5^2}=1/0{,}901=1{,}11$.
:::
:::

:::aufgabe 2
Ein Vollniet trägt nur Kopfzug. $d=3{,}2\,$mm ($d_R=3{,}25$), $R_C=260\,$N/mm², $h=1{,}2\,$mm. Wie groß ist $K_B$? Welcher Fall ist maßgebend?
:::loesung
$K_{B1}=260\cdot\frac{\pi\cdot3{,}25^2}4=2157\,$N; $K_{B2}=2\cdot3{,}25\cdot1{,}2\cdot260=2028\,$N → $K_B=2028\,$N, **Kopf schert ab**.
:::
:::

:::aufgabe 3
Warum ist bei einer dreireihigen Nietung die erste Reihe am höchsten belastet? (Vorgriff auf Lektion 8.)
:::loesung
Bleche und Niete sind elastisch. An der ersten Reihe ist die Dehnungsdifferenz zwischen den beiden Blechen am größten (ein Blech trägt noch fast die ganze Kraft, das andere fast nichts) → größte Relativverschiebung → größte Nietkraft. Die mittleren Reihen bekommen weniger.
:::
:::

:::aufgabe 4
Wähle eine Verbindungsart: (a) Innenverkleidung, (b) Flügel-Rumpf-Anschluss mit hoher Schwinglast, (c) Reparatur an einem geschlossenen Kastenholm, (d) Rumpfhaut einer Druckkabine.
:::loesung
(a) A-Niet (Al 99,5) oder einfacher Blindniet; (b) Taper-Lok; (c) Strukturblindniet (Blind-Lockbolt, Jo-Bolt o. Ä., kein Pop-Niet); (d) Senk-Vollniete DD bzw. Dk (aerodynamisch glatt, 2-reihig dicht).
:::
:::

## Karteikarten

:::karte
Kopfzug eines Vollniets?
???
$K_B=\min\left(\frac{\pi d_R^2}4R_C;\ 2d_RhR_C\right)$; möglichst vermeiden.
:::

:::karte
$R_S$ und $R_Z$ bei kombinierter Belastung?
???
$R_S=F_S/F_{SB}$, $R_Z=F_Z/(F_{ZB}\cdot K)$; $K$ = 0,5 Vollniet, 0,2 Blindniet, 0,8 Collar gequetscht, 1,0 Schraub-Passniete/Crash.
:::

:::karte
Interaktionskurven A–D?
???
A: $R_Z^2+R_S^{10}=1$; B: $R_Z^2+R_S^5=1$; C: $R_Z^2+R_S^2=1$; D: $R_Z+R_S=1$.
:::

:::karte
RF aus Interaktionskurve?
???
$RF=\overline{OS}/\overline{OP}$ (Strahl durch Lastpunkt bis zur Kurve); Kurve D: $RF=1/(R_S+R_Z)$.
:::

:::karte
Inter-Rivet Buckling?
???
Ausknicken des druckbelasteten Blechs zwischen zwei Nieten (Haut–Stringer). Abhilfe: Teilung 4–5 d; Senkkopf $c=1$, Universalkopf $c=4$.
:::

:::karte
Passniet – Prinzip und Vorteil?
???
Geschlossen durch Collar (geschraubt mit Sollbruchstelle oder gequetscht); hochfeste Werkstoffe möglich, hochwertige Passung.
:::

:::karte
Taper-Lok?
???
Konischer Schaft, Stahl; Druckvorspannung in der Bohrung, spielfrei, beste Schwingfestigkeit; sehr teuer; Flügel-, Fahrwerks-, Triebwerksanschluss.
:::

:::karte
Hi-Lok?
???
Zylindrischer Passniet (Stahl/Ti/Al) mit Schraub-Collar; Scher- und Zugtyp; LN 29796; häufigster Passniet.
:::

:::karte
Blindniet – wann und Einschränkung?
???
Nur einseitig zugänglich; Pop-Niete nicht in Primärstruktur (dort Blind-Lockbolt, Jo-Bolt, Hi-Shear-Blindbolzen).
:::

:::karte
Nietreihen – Regel?
???
Statisch am günstigsten 2-reihig; bei mehreren Reihen ist die erste Reihe höher belastet.
:::

:::karte
Oberflächenschutz für Niete?
???
Alu: chromsäure-anodisiert; Monel/Stahl: kadmiert; Titan: anodisiert.
:::

:::karte
Schwingfestigkeit: ein- oder zweischnittig?
???
Unsymmetrisch einschnittig am schlechtesten, symmetrisch zweischnittig am besten.
:::
