---
title: §3 Allgemeine Kraftsysteme in der Ebene – Kräftepaar, Moment, Resultierende, Gleichgewicht
chapter: §3 Allgemeine Kraftsysteme
minutes: 130
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#56; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#7
---

:::ziel
- **Kräftepaar** und sein **Moment** verstehen (freier Vektor, nur Drehwirkung).
- **Moment einer Kraft** bezüglich eines Punktes berechnen (Hebelarm oder Komponenten), Vorzeichenkonvention.
- Parallelverschiebung einer Kraft (Kraft + Versetzungsmoment); Reduktion eines Kraftsystems auf Resultierende + Moment; Lage der Wirkungslinie der Resultierenden.
- **Drei Gleichgewichtsbedingungen** der Ebene und ihre gleichwertigen Formen (Momentensätze).
- Seileck (grafisches Verfahren) im Überblick.
:::

## Allgemeine Kräftegruppe

Schneiden sich die Wirkungslinien **nicht** in einem Punkt, kann ein Körper nicht nur verschoben, sondern auch **gedreht** werden. Dann reicht $\sum\vec F=\vec0$ nicht mehr.

## Das Kräftepaar

:::def Kräftepaar
Zwei gleich große, entgegengesetzt gerichtete Kräfte $F$ auf **parallelen** Wirkungslinien im Abstand $h$. Die Resultierende ist null – trotzdem dreht das Kräftepaar einen Körper. Seine Wirkung ist vollständig beschrieben durch sein **Moment**
$$M=F\cdot h\qquad[\mathrm{Nm}]$$
und den **Drehsinn** (Pfeil ↺ oder ↻).
:::

:::satz Eigenschaften
- Ein Kräftepaar kann **nicht** durch eine Einzelkraft ersetzt werden.
- Es darf in der Ebene **beliebig verschoben und gedreht** werden; Kräftepaare mit gleichem Moment ($F h=F'h'$) sind gleichwertig. Das Moment ist ein **freier Vektor** (in der Ebene: Skalar mit Vorzeichen).
- Mehrere Momente addiert man unter Beachtung des Drehsinns: $M_R=\sum M_i$ (z. B. ↺ positiv).
- Gleichgewicht einer Gruppe von Kräftepaaren: $\sum M_i=0$.
:::

## Moment einer Kraft bezüglich eines Punktes

:::def
Das Moment einer Kraft $F$ bezüglich des Punktes $A$ ist
$$M^{(A)}=F\cdot h,$$
$h$ = **Hebelarm** = senkrechter Abstand von $A$ zur **Wirkungslinie** von $F$. Vorzeichen nach Drehsinn (Konvention festlegen, z. B. ↺ positiv).
:::

:::merke Momentenberechnung über Komponenten
Oft einfacher: Kraft in $F_x,F_y$ zerlegen, deren Hebelarme ablesen. Liegt der Angriffspunkt relativ zu $A$ bei $(x,y)$:
$$M^{(A)}=x\,F_y-y\,F_x\quad(\text{↺ positiv})$$
– das ist genau die $z$-Komponente von $\vec r\times\vec F$.
:::

:::satz Satz von Varignon
Das Moment der Resultierenden ist gleich der Summe der Momente der Einzelkräfte (bezüglich desselben Punktes).
:::

:::satz Parallelverschiebung einer Kraft
Eine Kraft $F$ im Abstand $h$ vom Punkt $A$ ist gleichwertig einer gleich großen, parallelen Kraft **in $A$** plus einem **Versetzungsmoment** $M^{(A)}=Fh$.
:::
(Beweis: In $A$ zwei entgegengesetzte Kräfte $\pm F$ hinzufügen – das ändert nichts; die ursprüngliche Kraft und die Gegenkraft in $A$ bilden ein Kräftepaar.)

**Wichtig:** Das Moment einer Kraft hängt vom Bezugspunkt ab, das Moment eines Kräftepaares nicht.

## Reduktion und Resultierende

Jedes ebene Kraftsystem lässt sich bezüglich eines beliebigen Punktes $A$ reduzieren auf
$$R_x=\sum F_{ix},\quad R_y=\sum F_{iy},\quad M_R^{(A)}=\sum M_i^{(A)}.$$
Ist $\vec R\ne\vec0$, kann man $\vec R$ so parallel verschieben, dass das Moment verschwindet – die **Wirkungslinie der Resultierenden** hat dann den Abstand
$$h_R=\frac{M_R^{(A)}}{R}$$
von $A$ (bzw. schneidet die $x$-Achse bei $x_R=\frac{M_R^{(A)}}{R_y}$, wenn $M=xR_y-yR_x$).

Fälle: $\vec R\ne\vec0$ → Einzelkraft; $\vec R=\vec0$, $M_R\ne0$ → resultierendes **Kräftepaar**; beides null → **Gleichgewicht**.

:::bsp Resultierende paralleler Kräfte
Auf einem Balken wirken nach unten $F_1=2\,$kN bei $x=1\,$m, $F_2=3\,$kN bei $x=3\,$m, $F_3=1\,$kN bei $x=6\,$m. $R=6\,$kN nach unten. Moment um $x=0$: $M=2\cdot1+3\cdot3+1\cdot6=17\,$kNm (↻). Lage: $x_R=\frac{17}6\approx2{,}83\,$m. (Das ist auch die Idee des **Schwerpunkts**, Kap. 4.)
:::

## Gleichgewichtsbedingungen

:::satz Gleichgewicht der allgemeinen ebenen Kräftegruppe
$$\sum F_{ix}=0,\qquad\sum F_{iy}=0,\qquad\sum M_i^{(A)}=0\quad(A\text{ beliebig}).$$
Drei Gleichungen ⇒ **drei Unbekannte**.
:::

Gleichwertige Formen (oft geschickter, weil jede Gleichung nur eine Unbekannte enthält):
- $\sum F_x=0$, $\sum M^{(A)}=0$, $\sum M^{(B)}=0$ – $A,B$ dürfen nicht auf einer Senkrechten zur $x$-Achse liegen.
- $\sum F_y=0$, $\sum M^{(A)}=0$, $\sum M^{(B)}=0$ – $A,B$ nicht auf einer Senkrechten zur $y$-Achse.
- $\sum M^{(A)}=\sum M^{(B)}=\sum M^{(C)}=0$ – $A,B,C$ **nicht auf einer Geraden**.

:::rezept Momentenbezugspunkt geschickt wählen
Wähle den Bezugspunkt im **Schnittpunkt der Wirkungslinien möglichst vieler Unbekannter** – deren Momente sind dann null, und die Gleichung enthält nur eine Unbekannte. Zur **Kontrolle** eine weitere (überzählige) Gleichgewichtsbedingung prüfen.
:::

:::bsp Leiter an glatter Wand (Vorschau Lager/Reibung)
Leiter (Länge $l$, Gewicht $G$ in der Mitte) lehnt an glatter Wand (Winkel $\alpha$ zum Boden); am Boden Normalkraft $N_B$ und Haftkraft $H$. Unbekannte: $N_W$ (Wand, horizontal), $N_B$, $H$.
- $\uparrow$: $N_B=G$.
- Moment um den Fußpunkt: $N_W\,l\sin\alpha-G\frac l2\cos\alpha=0\Rightarrow N_W=\frac{G}{2\tan\alpha}$.
- $\to$: $H=N_W=\frac G{2\tan\alpha}$.
:::

## Grafisch: Seileck (Überblick)

Für parallele oder allgemeine ebene Kräfte liefert das **Seileck** (Seilpolygon) die Lage der Resultierenden: Man zeichnet ein Krafteck mit einem Pol $P$ und den **Polstrahlen**; deren Parallelen im Lageplan bilden das Seileck; der Schnittpunkt der ersten und letzten Seilseite liegt auf der Wirkungslinie der Resultierenden. Heute meist durch Rechnung ersetzt, aber anschaulich (z. B. Form eines Seils unter Einzellasten).

## Aufgaben

:::aufgabe 1
An einer quadratischen Platte (Seitenlänge $a$, Ecken $O=(0,0)$, $(a,0)$, $(a,a)$, $(0,a)$) wirken: $F$ in $+x$ an $(0,a)$, $F$ in $-y$ an $(a,a)$, $F$ in $-x$ an $(a,0)$. Resultierende und Moment um $O$?
:::loesung
$R_x=F-F=0$, $R_y=-F$. Momente um $O$ ($M=xF_y-yF_x$): $(0,a)$: $0-aF=-aF$; $(a,a)$: $a(-F)-0=-aF$; $(a,0)$: $0-0\cdot(-F)=0$. $M^{(O)}=-2aF$ (↻). Wirkungslinie der Resultierenden $R=F$ (nach unten): $x_R=\frac{M}{R_y}=\frac{-2aF}{-F}=2a$ – sie liegt **außerhalb** der Platte.
:::
:::

:::aufgabe 2
Ein Balken (Länge 4 m) ist links bei A gelenkig (Festlager) und rechts bei B auf einem Rollenlager gelagert. Last $F=10\,$kN bei $x=1\,$m (senkrecht) und ein Moment $M_0=8\,$kNm (↺) bei $x=3\,$m. Lagerreaktionen?
:::loesung
$\sum M^{(A)}=0$ (↺ positiv): $B\cdot4-F\cdot1+M_0=0\Rightarrow B=\frac{10-8}4=0{,}5\,$kN.
$\sum F_y=0$: $A_y+B-F=0\Rightarrow A_y=9{,}5\,$kN. $\sum F_x=0$: $A_x=0$.
Kontrolle $\sum M^{(B)}$: $-A_y\cdot4+F\cdot3+M_0=-38+30+8=0$ ✓. (Das Moment wirkt egal wo – freier Vektor.)
:::
:::

:::aufgabe 3
Zeige: Eine Kraft $F=5\,$kN unter $30°$ zur Horizontalen, angreifend bei $(2,1)\,$m, hat bezüglich des Ursprungs das Moment $M=2F\sin30°-1\cdot F\cos30°$. Zahlenwert?
:::loesung
$M=xF_y-yF_x=2\cdot2{,}5-1\cdot4{,}33=0{,}67\,$kNm (↺).
:::
:::

## Karteikarten

:::karte
Moment eines Kräftepaares und seine Eigenschaft?
???
$M=Fh$; freier Vektor – unabhängig vom Bezugspunkt, beliebig verschiebbar; nicht durch eine Einzelkraft ersetzbar.
:::

:::karte
Moment einer Kraft in Komponenten (Ebene)?
???
$M^{(A)}=xF_y-yF_x$ ($x,y$ = Koordinaten des Angriffspunkts relativ zu A, ↺ positiv).
:::

:::karte
Gleichgewichtsbedingungen der allgemeinen ebenen Kräftegruppe?
???
$\sum F_x=0$, $\sum F_y=0$, $\sum M^{(A)}=0$ – drei Unbekannte.
:::

:::karte
Parallelverschiebung einer Kraft um $h$?
???
Gleiche Kraft im neuen Punkt + Versetzungsmoment $M=Fh$.
:::

:::karte
Bedingung für drei Momentengleichungen als GGW-Bedingungen?
???
Die drei Bezugspunkte dürfen nicht auf einer Geraden liegen.
:::
