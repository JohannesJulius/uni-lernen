---
title: §A.1 Vektorrechnung für die Mechanik – Komponenten, Skalar- und Vektorprodukt
chapter: §1 Grundbegriffe
minutes: 60
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#270
---

:::ziel
- Vektoren in Komponenten zerlegen, Betrag und Richtungswinkel berechnen.
- Skalarprodukt (Projektion, Winkel, Arbeit) und Vektorprodukt (Moment, Fläche) sicher anwenden.
- Lineare Gleichungssysteme der Statik aufstellen und lösen.
:::

:::info Bezug zu Mathe 1
Diese Lektion ist die mechanische Kurzfassung von Mathe 1 „Skalarprodukt" und „Vektorprodukt". Dort stehen Beweise und mehr Hintergrund – hier geht es um die Anwendung.
:::

## Vektoren und Komponenten

Ein Vektor $\vec a$ hat Betrag $a=|\vec a|$ und Richtung. Mit den Einheitsvektoren $\vec e_x,\vec e_y,\vec e_z$ eines kartesischen Rechtssystems:
$$\vec a=a_x\vec e_x+a_y\vec e_y+a_z\vec e_z=\begin{pmatrix}a_x\\a_y\\a_z\end{pmatrix},\qquad a=\sqrt{a_x^2+a_y^2+a_z^2}.$$

**Richtungskosinus:** Sind $\alpha,\beta,\gamma$ die Winkel zwischen $\vec a$ und den Achsen:
$$\cos\alpha=\frac{a_x}{a},\quad\cos\beta=\frac{a_y}{a},\quad\cos\gamma=\frac{a_z}{a},\qquad\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1.$$
Der Einheitsvektor in Richtung $\vec a$ ist $\vec e_a=\frac{\vec a}{a}=(\cos\alpha,\cos\beta,\cos\gamma)^T$.

**In der Ebene** (Winkel $\alpha$ zur $x$-Achse): $F_x=F\cos\alpha$, $F_y=F\sin\alpha$; umgekehrt $F=\sqrt{F_x^2+F_y^2}$, $\tan\alpha=\frac{F_y}{F_x}$ (Quadrant beachten!).

:::rezept Kraft entlang eines Seils von P nach Q
Richtungsvektor $\vec r_{PQ}=\vec r_Q-\vec r_P$, Einheitsvektor $\vec e=\frac{\vec r_{PQ}}{|\vec r_{PQ}|}$, Kraft $\vec S=S\,\vec e$ (Betrag $S$ unbekannt, Richtung bekannt!).
:::

## Rechenoperationen

- **Skalarmultiplikation:** $\lambda\vec a=(\lambda a_x,\lambda a_y,\lambda a_z)^T$.
- **Addition:** komponentenweise; geometrisch Parallelogramm/Polygon. $\vec R=\sum\vec F_i$ mit $R_x=\sum F_{ix}$ usw.

:::formel Skalarprodukt
$$\vec a\cdot\vec b=ab\cos\varphi=a_xb_x+a_yb_y+a_zb_z$$
- $\vec a\perp\vec b\iff\vec a\cdot\vec b=0$
- Projektion von $\vec a$ auf die Richtung $\vec e$ ($|\vec e|=1$): $a_e=\vec a\cdot\vec e$
- Mechanik: Arbeit $W=\vec F\cdot\vec s$; Kraftkomponente in Stabrichtung.
:::

:::formel Vektorprodukt
$$\vec c=\vec a\times\vec b=\begin{pmatrix}a_yb_z-a_zb_y\\a_zb_x-a_xb_z\\a_xb_y-a_yb_x\end{pmatrix}=\begin{vmatrix}\vec e_x&\vec e_y&\vec e_z\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}$$
- $|\vec c|=ab\sin\varphi$ = Fläche des Parallelogramms; $\vec c\perp\vec a,\vec b$; Rechtssystem.
- $\vec a\times\vec b=-\vec b\times\vec a$; $\vec a\times\vec a=\vec0$.
- $\vec e_x\times\vec e_y=\vec e_z$, $\vec e_y\times\vec e_z=\vec e_x$, $\vec e_z\times\vec e_x=\vec e_y$.
- Mechanik: **Moment** $\vec M=\vec r\times\vec F$.
:::

:::bsp Moment einer Kraft
$\vec F=(2,-1,3)^T\,$kN greift bei $\vec r=(1,2,0)^T\,$m an. Moment um den Ursprung:
$$\vec M=\vec r\times\vec F=\begin{pmatrix}2\cdot3-0\cdot(-1)\\0\cdot2-1\cdot3\\1\cdot(-1)-2\cdot2\end{pmatrix}=\begin{pmatrix}6\\-3\\-5\end{pmatrix}\,\mathrm{kNm},\qquad|\vec M|=\sqrt{70}\approx8{,}37\,\mathrm{kNm}.$$
:::

## Lineare Gleichungssysteme in der Statik

Gleichgewichtsbedingungen liefern LGS für die unbekannten Kräfte, z. B. für zwei Seilkräfte $S_1,S_2$:
$$\begin{aligned}S_1\cos\alpha_1-S_2\cos\alpha_2&=0\\S_1\sin\alpha_1+S_2\sin\alpha_2&=G\end{aligned}$$
Lösung per Einsetzen, Gauß oder Cramerscher Regel ($x_i=\frac{\det A_i}{\det A}$, wobei in $A_i$ die $i$-te Spalte durch die rechte Seite ersetzt ist). Ist $\det A=0$, ist das System **statisch unbrauchbar** (z. B. kinematisch beweglich).

:::bsp Cramer für 2×2
$\begin{cases}2S_1+S_2=10\\S_1-S_2=2\end{cases}$: $\det A=-2-1=-3$, $S_1=\frac{\begin{vmatrix}10&1\\2&-1\end{vmatrix}}{-3}=\frac{-12}{-3}=4$, $S_2=\frac{\begin{vmatrix}2&10\\1&2\end{vmatrix}}{-3}=\frac{-6}{-3}=2$.
:::

## Aufgaben

:::aufgabe 1
$F=500\,$N wirkt unter $\alpha=120°$ zur $x$-Achse. Komponenten?
:::loesung
$F_x=500\cos120°=-250\,$N, $F_y=500\sin120°\approx433\,$N.
:::
:::

:::aufgabe 2
Ein Seil verläuft von $P=(0,0,0)$ nach $Q=(3,4,12)\,$m und trägt $S=2{,}6\,$kN. Komponenten der Seilkraft (Wirkung auf $P$, zu $Q$ hin)?
:::loesung
$|\vec r_{PQ}|=\sqrt{9+16+144}=13$, $\vec e=\frac1{13}(3,4,12)$, $\vec S=2{,}6\cdot\frac1{13}(3,4,12)=(0{,}6;\ 0{,}8;\ 2{,}4)\,$kN.
:::
:::

:::aufgabe 3
Welchen Winkel schließen $\vec F_1=(1,1,0)^T$ und $\vec F_2=(1,0,1)^T$ ein? Welche Komponente hat $\vec F_1$ in Richtung $\vec F_2$?
:::loesung
$\cos\varphi=\frac{1}{\sqrt2\sqrt2}=\frac12\Rightarrow60°$. Projektion $\vec F_1\cdot\vec e_2=\frac1{\sqrt2}\approx0{,}71$.
:::
:::

## Karteikarten

:::karte
Komponenten einer ebenen Kraft unter Winkel α?
???
$F_x=F\cos\alpha$, $F_y=F\sin\alpha$.
:::

:::karte
Wie bestimmt man eine Seilkraft als Vektor?
???
$\vec S=S\frac{\vec r_Q-\vec r_P}{|\vec r_Q-\vec r_P|}$ – Betrag unbekannt, Richtung aus Geometrie.
:::

:::karte
Moment als Vektor?
???
$\vec M=\vec r\times\vec F$ ($\vec r$ vom Bezugspunkt zum Angriffspunkt bzw. zu einem Punkt der Wirkungslinie).
:::

:::karte
Richtungskosinus-Bedingung?
???
$\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$
:::
