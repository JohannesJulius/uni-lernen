---
title: §2 Zentrale Kräftegruppen im Raum
chapter: §2 Zentrale Kräftegruppen
minutes: 75
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#45; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#7
---

:::ziel
- Räumliche Kräfte als Vektoren aus Geometriedaten aufstellen.
- Drei Gleichgewichtsbedingungen $\sum F_x=\sum F_y=\sum F_z=0$ anwenden (3 Unbekannte).
- Typisches Beispiel: Mast/Last an drei Seilen oder Stäben (Dreibein).
:::

## Resultierende und Gleichgewicht

$$\vec R=\sum\vec F_i,\qquad R_x=\sum F_{ix},\ R_y=\sum F_{iy},\ R_z=\sum F_{iz},\qquad R=\sqrt{R_x^2+R_y^2+R_z^2}.$$

:::satz Gleichgewicht der räumlichen zentralen Kräftegruppe
$$\sum F_{ix}=0,\qquad\sum F_{iy}=0,\qquad\sum F_{iz}=0.$$
Drei skalare Gleichungen ⇒ **drei Unbekannte** bestimmbar.
:::

:::rezept Räumliche Aufgaben
1. Koordinaten aller relevanten Punkte aufschreiben.
2. Für jede unbekannte Seil-/Stabkraft den **Einheitsvektor** aus den Koordinaten bilden: $\vec e_i=\frac{\vec r_{Ziel}-\vec r_{Knoten}}{|\dots|}$; dann $\vec S_i=S_i\vec e_i$ (Zug positiv).
3. Gleichgewicht am Knoten: $\sum S_i\vec e_i+\vec F_{bekannt}=\vec0$ → 3×3-LGS.
4. Lösen (Gauß/Cramer), Vorzeichen deuten.
:::

## Beispiel: Last an drei Stäben (Dreibein)

Knoten $K=(0,0,4)\,$m trägt $\vec G=(0,0,-12)\,$kN. Drei gelenkig gelagerte Stäbe führen zu den Bodenpunkten $A=(3,0,0)$, $B=(-3,3,0)$, $C=(-3,-3,0)$ (m). Stabkräfte $S_A,S_B,S_C$ (Zug positiv: vom Knoten **zum** Fußpunkt gerichtet).

Richtungen vom Knoten zu den Fußpunkten:
- $\vec r_{KA}=(3,0,-4)$, Länge 5 ⇒ $\vec e_A=(0{,}6;\ 0;\ -0{,}8)$
- $\vec r_{KB}=(-3,3,-4)$, Länge $\sqrt{34}\approx5{,}831$ ⇒ $\vec e_B=(-0{,}5145;\ 0{,}5145;\ -0{,}6860)$
- $\vec r_{KC}=(-3,-3,-4)$ ⇒ $\vec e_C=(-0{,}5145;\ -0{,}5145;\ -0{,}6860)$

Gleichgewicht:
$$\begin{aligned}x:&\ 0{,}6S_A-0{,}5145S_B-0{,}5145S_C=0\\y:&\ 0{,}5145S_B-0{,}5145S_C=0\ \Rightarrow S_B=S_C\\z:&\ -0{,}8S_A-0{,}686S_B-0{,}686S_C-12=0\end{aligned}$$
Aus $x$: $0{,}6S_A=1{,}029S_B\Rightarrow S_A=1{,}715S_B$. In $z$: $-1{,}372S_B-1{,}372S_B=12\Rightarrow S_B=-4{,}37\,$kN.
⇒ $S_B=S_C\approx-4{,}37\,$kN, $S_A\approx-7{,}50\,$kN – alle Stäbe auf **Druck** (logisch, sie stützen die Last von unten).
Kontrolle $z$: $-0{,}8(-7{,}5)-0{,}686(-8{,}74)=6{,}0+6{,}0=12$ ✓.

:::merke
Durch die Symmetrie ($y$-Gleichung) sieht man oft sofort Gleichheiten. Kontrolle: Die Summe der vertikalen Anteile muss die Last tragen.
:::

## Grafisch?

Im Raum ist die grafische Lösung unpraktisch; man rechnet fast immer mit Komponenten. Ausnahme: Projektionen auf zwei Ebenen.

## Aufgaben

:::aufgabe 1
Bestimme die Resultierende von $\vec F_1=(2,0,1)\,$kN, $\vec F_2=(-1,3,2)\,$kN, $\vec F_3=(0,-1,-4)\,$kN, ihren Betrag und die Richtungswinkel.
:::loesung
$\vec R=(1,2,-1)\,$kN, $R=\sqrt6\approx2{,}45\,$kN. $\cos\alpha=\frac1{\sqrt6}\Rightarrow\alpha\approx65{,}9°$; $\cos\beta=\frac2{\sqrt6}\Rightarrow\beta\approx35{,}3°$; $\cos\gamma=-\frac1{\sqrt6}\Rightarrow\gamma\approx114{,}1°$.
:::
:::

:::aufgabe 2
Ein Gewicht $G=10\,$kN hängt im Punkt $K=(0,0,0)$ an drei Seilen zu den Deckenpunkten $P_1=(2,0,4)$, $P_2=(-1,2,4)$, $P_3=(-1,-2,4)$ (m). Seilkräfte?
:::loesung
Längen: $|KP_1|=\sqrt{20}=4{,}472$, $|KP_2|=|KP_3|=\sqrt{21}=4{,}583$.
$\vec e_1=(0{,}447;0;0{,}894)$, $\vec e_2=(-0{,}218;0{,}436;0{,}873)$, $\vec e_3=(-0{,}218;-0{,}436;0{,}873)$.
$y$: $S_2=S_3$. $x$: $0{,}447S_1=0{,}436S_2\Rightarrow S_1=0{,}976S_2$. $z$: $0{,}894\cdot0{,}976S_2+2\cdot0{,}873S_2=10\Rightarrow S_2(0{,}873+1{,}746)=10\Rightarrow S_2=S_3\approx3{,}82\,$kN, $S_1\approx3{,}73\,$kN (alle Zug ✓).
:::
:::

## Karteikarten

:::karte
Wie viele Unbekannte liefert eine räumliche zentrale Kräftegruppe?
???
Drei ($\sum F_x=\sum F_y=\sum F_z=0$).
:::

:::karte
Wie setzt man eine Stabkraft im Raum an?
???
$\vec S=S\,\vec e$ mit Einheitsvektor aus Koordinaten (vom Knoten zum anderen Stabende), Zug positiv.
:::
