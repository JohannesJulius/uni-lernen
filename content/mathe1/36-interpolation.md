---
title: Polynominterpolation – Lagrange-Polynome, Fehler, Runge-Phänomen (Skript 11.2)
chapter: 4 Integralrechnung
minutes: 60
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#235
---

:::abgleich
Interpolation ist Teil der Modulbeschreibung („Polynominterpolation") und steht im **Skript Kap. 11.2**, hat aber keinen eigenen Mathe-1-Foliensatz. Sie ist die Grundlage für die numerische Integration und kommt in **Numerik** wieder (MATLAB `polyfit`, `interp1`).
:::

:::ziel
- Interpolationsaufgabe formulieren; Existenz und Eindeutigkeit.
- **Lagrange-Basispolynome** aufstellen und das Interpolationspolynom direkt hinschreiben.
- Fehlerabschätzung; stückweise Interpolation und Runge-Phänomen.
:::

## Interpolationsaufgabe

:::def
Gegeben $n+1$ paarweise verschiedene **Knoten** $x_0,\dots,x_n$ und Werte $y_i=f(x_i)$. Gesucht ist ein Polynom $p$ vom Grad ≤ $n$ mit
$$p(x_i)=y_i\qquad(i=0,\dots,n).$$
:::

:::satz
Die Interpolationsaufgabe ist **eindeutig lösbar**. (Zwei Lösungen hätten eine Differenz vom Grad ≤ $n$ mit $n+1$ Nullstellen – also die Nullfunktion.)
:::

Durch 2 Punkte geht genau eine Gerade, durch 3 Punkte (nicht auf einer Geraden) genau eine Parabel usw.

## Lagrange-Polynome

:::def Lagrange-Basispolynome
$$L_i(x)=\prod_{j=0,\,j\ne i}^n\frac{x-x_j}{x_i-x_j}\qquad\text{mit}\qquad L_i(x_j)=\delta_{ij}=\begin{cases}1,&i=j\\0,&i\ne j.\end{cases}$$
Eselsbrücke: Setzt man $x=x_j$ ($j\ne i$) ein, wird ein Zählerfaktor 0; bei $x=x_i$ kürzt sich alles zu 1.
:::

:::satz Lagrange-Form des Interpolationspolynoms
$$p(x)=\sum_{i=0}^ny_i\,L_i(x).$$
Kein Gleichungssystem nötig!
:::

:::bsp Walkthrough: Punkte $(0,1)$, $(1,3)$, $(2,2)$
- $L_0=\frac{(x-1)(x-2)}{(0-1)(0-2)}=\frac12(x^2-3x+2)$
- $L_1=\frac{(x-0)(x-2)}{(1-0)(1-2)}=-x^2+2x$
- $L_2=\frac{(x-0)(x-1)}{(2-0)(2-1)}=\frac12(x^2-x)$
$p(x)=1\cdot L_0+3L_1+2L_2=-1{,}5x^2+3{,}5x+1$. Probe: $p(1)=-1{,}5+3{,}5+1=3$ ✓, $p(2)=-6+7+1=2$ ✓.
:::

:::bsp $f(x)=2^x$ an $0,1,2$
$p(x)=1\cdot\frac12(x-1)(x-2)+2\cdot(-(x-2)x)+4\cdot\frac12(x-1)x=\frac12x^2+\frac12x+1$.
:::

## Fehler

:::satz Interpolationsfehler
Ist $f$ $(n+1)$-mal stetig differenzierbar, so gilt auf $[a,b]$:
$$|f(x)-p(x)|\le\frac{\max|f^{(n+1)}|}{(n+1)!}\prod_{i=0}^n|x-x_i|\le\frac{\max|f^{(n+1)}|}{(n+1)!}(b-a)^{n+1}.$$
:::
Der Fehler ist klein, wenn das Intervall klein ist. Darum: **stückweise** interpolieren (Intervall in Teile zerlegen, auf jedem ein Polynom niedrigen Grades). Wählt man die Teilintervallgrenzen als Knoten, wird die Gesamtfunktion stetig (Polygonzug, Splines).

:::achtung Runge-Phänomen
Hohe Polynomgrade mit äquidistanten Knoten sind **gefährlich**: Für $f(x)=\frac1{1+25x^2}$ auf $[-1,1]$ mit 11 Knoten schwingt das Interpolationspolynom vom Grad 10 an den Rändern heftig über (bis ≈ 2 statt ≈ 0,04). Daher in der Praxis: stückweise Polynome / Splines, oder spezielle Knoten (Tschebyscheff).
:::

:::info Anwendung (Skript 11.4)
Kalibrierung einer Pitot-Sonde: Der Zusammenhang $v=\sqrt{2q/\rho}$ ist nichtlinear; ein Interpolationspolynom 2. Grades durch drei Kalibrierpunkte bildet die Krümmung besser ab als ein Streckenzug. Ein Polynom 10. Grades durch 11 Punkte wäre wegen Runge an den Rändern unbrauchbar.
:::

## Aufgaben

:::aufgabe 1 (Skript 11.3)
Bestimme das kubische Polynom durch $(0,2)$, $(1,4)$, $(3,5)$, $(4,10)$. Wie ändert sich $p(5)$, wenn $y_2=5{,}02$ statt 5?
:::loesung
Lagrange: $L_0=\frac{(x-1)(x-3)(x-4)}{-12}$, $L_1=\frac{x(x-3)(x-4)}{6}$, $L_2=\frac{x(x-1)(x-4)}{-6}$, $L_3=\frac{x(x-1)(x-3)}{12}$.
$p(5)=2L_0(5)+4L_1(5)+5L_2(5)+10L_3(5)$ mit $L_0(5)=\frac{4\cdot2\cdot1}{-12}=-\frac23$, $L_1(5)=\frac{5\cdot2\cdot1}6=\frac53$, $L_2(5)=\frac{5\cdot4\cdot1}{-6}=-\frac{10}3$, $L_3(5)=\frac{5\cdot4\cdot2}{12}=\frac{10}3$.
$p(5)=-\frac43+\frac{20}3-\frac{50}3+\frac{100}3=\frac{66}3=22$.
Änderung: $\Delta p(5)=0{,}02\cdot L_2(5)=0{,}02\cdot(-\frac{10}3)\approx-0{,}067$ – die kleine Messänderung wird bei Extrapolation **verstärkt** (Faktor 3,3).
:::
:::

:::aufgabe 2
Interpoliere $\sin x$ an $0,\frac\pi2,\pi$ und schätze den Fehler bei $x=\frac\pi4$.
:::loesung
$p(x)=1\cdot L_1(x)=\frac{x(x-\pi)}{\frac\pi2(\frac\pi2-\pi)}=\frac{4}{\pi^2}x(\pi-x)$. $p(\frac\pi4)=\frac4{\pi^2}\cdot\frac\pi4\cdot\frac{3\pi}4=0{,}75$ vs. $\sin\frac\pi4=0{,}7071$. Abschätzung ($|\sin'''|\le1$): $\frac{1}{3!}\cdot\frac\pi4\cdot\frac\pi4\cdot\frac{3\pi}4=\frac{\pi^3}{128}\approx0{,}24\ge0{,}043$ ✓.
:::
:::

## Karteikarten

:::karte
Lagrange-Basispolynom $L_i$?
???
$L_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j}$, mit $L_i(x_j)=\delta_{ij}$.
:::

:::karte
Interpolationspolynom in Lagrange-Form?
???
$p(x)=\sum_iy_iL_i(x)$
:::

:::karte
Was ist das Runge-Phänomen?
???
Polynome hohen Grades mit äquidistanten Knoten oszillieren stark an den Intervallrändern – besser stückweise interpolieren.
:::
