---
title: §3 Allgemeine Kraftsysteme im Raum – Momentenvektor, Gleichgewicht, Dyname
chapter: §3 Allgemeine Kraftsysteme
minutes: 90
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#78; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#10
---

:::ziel
- Moment als **Vektor** $\vec M^{(A)}=\vec r_{AP}\times\vec F$; Momente um Achsen.
- Sechs Gleichgewichtsbedingungen im Raum.
- Reduktion räumlicher Kraftsysteme; **Dyname/Kraftschraube**.
:::

## Der Momentenvektor

Im Raum genügt kein Vorzeichen mehr – das Moment hat eine **Drehachse**.

:::def Moment einer Kraft bezüglich eines Punktes
$$\vec M^{(A)}=\vec r_{AP}\times\vec F,$$
$\vec r_{AP}$ = Vektor von $A$ zu einem beliebigen Punkt $P$ der Wirkungslinie von $\vec F$. Der Betrag ist $|\vec M|=Fh$ (Hebelarm $h$), die Richtung ist die **Drehachse** nach der **Rechte-Hand-Regel** (Daumen = Momentenvektor, Finger = Drehsinn). Darstellung oft als Doppelpfeil.
:::

In Komponenten mit $\vec r=(x,y,z)^T$ relativ zu $A$:
$$M_x=yF_z-zF_y,\qquad M_y=zF_x-xF_z,\qquad M_z=xF_y-yF_x.$$
$M_x$ ist das **Moment um die $x$-Achse** (durch $A$): Nur Kraftkomponenten, die die $x$-Achse **nicht schneiden und nicht parallel** zu ihr sind, tragen bei.

:::merke Moment um eine beliebige Achse
Moment um eine Achse durch $A$ mit Richtung $\vec e$: $M_e=\vec M^{(A)}\cdot\vec e$. Kräfte, die die Achse schneiden oder parallel zu ihr sind, haben **kein** Moment um sie – das nutzt man beim Aufstellen geschickter Gleichungen.
:::

Das Moment eines **Kräftepaars** im Raum ist ein freier Vektor senkrecht zur Ebene des Paars.

## Reduktion

Jedes räumliche Kraftsystem ist bezüglich eines Punktes $A$ äquivalent zu
$$\vec R=\sum\vec F_i\qquad\text{und}\qquad\vec M_R^{(A)}=\sum\vec r_{Ai}\times\vec F_i+\sum\vec M_j.$$
Wechselt man den Bezugspunkt zu $B$: $\vec M^{(B)}=\vec M^{(A)}+\vec r_{BA}\times\vec R$.

## Gleichgewicht im Raum

:::satz Sechs Gleichgewichtsbedingungen
$$\sum F_{ix}=0,\ \sum F_{iy}=0,\ \sum F_{iz}=0,\qquad\sum M_{ix}^{(A)}=0,\ \sum M_{iy}^{(A)}=0,\ \sum M_{iz}^{(A)}=0.$$
⇒ **sechs Unbekannte** bestimmbar. Kräftegleichungen können durch Momentengleichungen um geeignete (andere) Achsen ersetzt werden.
:::

:::bsp Rechteckige Platte an drei Seilen
Eine horizontale rechteckige Platte (Gewicht $G$, Schwerpunkt in der Mitte $(\frac a2,\frac b2)$, Ecken $A=(0,0)$, $B=(a,0)$, $C=(0,b)$) hängt an drei senkrechten Seilen in $A$, $B$ und $C$ mit den Seilkräften $S_A,S_B,S_C$ (alle parallel zu $z$):
- $\sum F_z$: $S_A+S_B+S_C=G$
- Moment um die $y$-Achse (durch $A$, Kräfte bei $x=a$ und Schwerpunkt bei $x=a/2$): $S_B\,a-G\frac a2=0\Rightarrow S_B=\frac G2$
- Moment um die $x$-Achse: $S_C\,b-G\frac b2=0\Rightarrow S_C=\frac G2$
- ⇒ $S_A=0$. (Plausibel: Der Schwerpunkt liegt auf der Verbindungslinie $BC$.)
Die übrigen drei Gleichungen ($\sum F_x$, $\sum F_y$, $\sum M_z$) sind identisch erfüllt (alle Kräfte parallel zu $z$).
:::

:::bsp Welle mit Zahnrad (typisch Maschinenbau)
Eine Welle entlang der $x$-Achse ist in $A$ (Festlager, $x=0$) und $B$ (Loslager, $x=l$) gelagert. Am Zahnrad bei $x=a$ (Radius $r$) greift die Zahnkraft $\vec F=(0,0,-F)$ am Umfangspunkt $(a,r,0)$ an; ein Antriebsmoment $M_A$ um die $x$-Achse hält das Gleichgewicht.
- $\sum M_x$: $M_A+(r\cdot(-F)-0)=0\Rightarrow M_A=Fr$
- $\sum M_y^{(A)}$ mit $M_y=zF_x-xF_z$: Zahnkraft liefert $-a\cdot(-F)=aF$, die Lagerkraft $B_z$ (bei $x=l$, positiv in $+z$) liefert $-l\,B_z$. Also $aF-lB_z=0\Rightarrow B_z=\frac al F$ (nach oben).
- $\sum F_z$: $A_z+B_z-F=0\Rightarrow A_z=\frac{l-a}lF$.
:::

## Dyname und Kraftschraube

Ein räumliches System lässt sich im Allgemeinen **nicht** auf eine Einzelkraft reduzieren. Man zerlegt $\vec M^{(A)}$ in einen Anteil parallel zu $\vec R$ und senkrecht dazu. Den senkrechten Anteil kann man durch Verschieben von $\vec R$ beseitigen; übrig bleiben $\vec R$ und ein **paralleles** Moment $\vec M_\parallel=\frac{\vec M\cdot\vec R}{R^2}\vec R$ – die **Dyname** oder **Kraftschraube** (wie beim Eindrehen einer Schraube: Druck + Drehung um dieselbe Achse). Die zugehörige Achse heißt **Zentralachse**. Ist $\vec M\cdot\vec R=0$, gibt es eine Einzelresultierende (z. B. immer bei ebenen oder parallelen Kräften).

## Aufgaben

:::aufgabe 1
$\vec F=(0,3,4)\,$kN greift bei $P=(2,0,1)\,$m an. Moment um den Ursprung und um die $x$-Achse?
:::loesung
$\vec M=\vec r\times\vec F=(0\cdot4-1\cdot3,\ 1\cdot0-2\cdot4,\ 2\cdot3-0\cdot0)=(-3,-8,6)\,$kNm. Um die $x$-Achse: $M_x=-3\,$kNm.
:::
:::

:::aufgabe 2
Eine Klappe (Gewicht $G=400\,$N) ist unten in zwei Gelenken $A=(0,0,0)$ und $B=(2,0,0)$ (m) drehbar gelagert (Drehachse = $x$-Achse). Sie wird durch ein horizontales Seil in $-y$-Richtung gehalten, das bei $C=(1;\,0{,}6;\,1{,}2)$ angreift. Der Schwerpunkt liegt bei $(1;\,0{,}3;\,0{,}6)$. Wie groß ist die Seilkraft?
:::loesung
Moment um die $x$-Achse (durch $A$ und $B$ – die Gelenkkräfte haben kein Moment): Seilkraft $\vec S=(0,-S,0)$ bei $(1;0{,}6;1{,}2)$: $M_x=yF_z-zF_y=0-1{,}2(-S)=1{,}2S$. Gewicht $(0,0,-G)$ bei $(1;0{,}3;0{,}6)$: $M_x=0{,}3(-G)-0=-0{,}3G$. $\sum M_x=0\Rightarrow S=\frac{0{,}3}{1{,}2}G=100\,$N.
:::
:::

## Karteikarten

:::karte
Moment einer Kraft im Raum?
???
$\vec M^{(A)}=\vec r_{AP}\times\vec F$ (Rechte-Hand-Regel).
:::

:::karte
Wie viele GGW-Bedingungen hat ein räumliches Kraftsystem?
???
Sechs: 3 Kraft- und 3 Momentengleichungen.
:::

:::karte
Welche Kräfte haben kein Moment um eine Achse?
???
Kräfte, die die Achse schneiden oder parallel zu ihr verlaufen.
:::

:::karte
Was ist eine Dyname (Kraftschraube)?
???
Resultierende Kraft plus dazu paralleles Moment – allgemeinste reduzierte Form eines räumlichen Kraftsystems.
:::
