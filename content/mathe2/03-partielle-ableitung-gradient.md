---
title: 13.2 Partielle und totale Ableitung, Gradient, Tangentialebene, Richtungsableitung
chapter: 13 Funktionen von mehreren Variablen
minutes: 130
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#284; Mathe 2/IM2_slides_T2_anamv_03_functions_mv_partialderivatives.pdf; Mathe 2/IM2_slides_T2_anamv_04_functions_mv_directionalderivatives.pdf; Mathe 2/IM2_slides_T2_anamv_05_functions_mv_totalderivative.pdf; Mathe 2/IM2_slides_T2_anamv_06_functions_mv_gradient.pdf; Mathe 2/IM2_slides_T2_anamv_07_functions_mv_gradient_geometry.pdf; Mathe 2/IM2_wrksheet_T2_anamv_02_totalderivatives.pdf
---

:::ziel
- **Partielle Ableitungen** berechnen (andere Variablen als Konstanten behandeln).
- **Totale Differenzierbarkeit** als lokale Linearisierung verstehen; Zusammenhang partiell ↔ total.
- **Gradient**, **lineares Taylorpolynom/Tangentialebene** und **lineare Fehlerrechnung** anwenden.
- Geometrie des Gradienten: senkrecht zu Höhenlinien, Richtung des steilsten Anstiegs; **Richtungsableitung**.
:::

## Motivation: Fertigungstoleranzen (Skript Bsp. 13.10/13.11)

Tank $V(r,h)=\pi r^2h$, Sollmaß $r=1{,}20\,$m $\pm2\,$mm, $h=5{,}00\,$m $\pm5\,$mm, $V=22{,}62\,$m³. Wie groß ist die maximale Abweichung?
Für kleine Störungen: Änderung in $r$ allein ≈ $\frac{\d V}{\d r}\Delta r$, in $h$ allein ≈ $\frac{\d V}{\d h}\Delta h$; zusammen
$$|\Delta V|\lesssim\underbrace{2\pi rh}_{\text{Mantelfläche}=37{,}7\,\mathrm m^2}|\Delta r|+\underbrace{\pi r^2}_{\text{Grundfläche}=4{,}52\,\mathrm m^2}|\Delta h|=0{,}0754+0{,}0226=0{,}098\,\mathrm m^3.$$
Exakte Worst-Case-Rechnung: 0,0983 m³ – passt hervorragend. Obwohl die Radiustoleranz kleiner ist, macht sie 76 % des Fehlers aus (größere **Sensitivität**).

## Partielle Ableitungen

:::def
$$\frac{\partial f}{\partial x_i}(\mathbf x)=f_{x_i}(\mathbf x)=\lim_{h\to0}\frac{f(\mathbf x+h\mathbf e_i)-f(\mathbf x)}{h}.$$
Praktisch: nach $x_i$ ableiten wie in Mathe 1, **alle anderen Variablen sind Konstanten**. Geometrisch: Steigung des Schnitts des Graphen in $x_i$-Richtung.
:::

:::bsp
$f=2x^2+3xy+y$: $f_x=4x+3y$, $f_y=3x+1$.
$g=xy^2+ye^{-xy}$: $g_x=y^2-y^2e^{-xy}$, $g_y=2xy+e^{-xy}-xye^{-xy}$.
$h=x\sin y$: $h_x=\sin y$, $h_y=x\cos y$.
:::

## Totale Differenzierbarkeit

Erinnerung 1D: $f$ differenzierbar ⇔ $f(x+h)=f(x)+ah+o(h)$ – lokale **Linearisierung**.

:::def Totale Differenzierbarkeit (Def. 13.13)
$f:\mathbb R^n\to\mathbb R^m$ heißt (total) differenzierbar in $\mathbf x_0$, wenn es eine lineare Abbildung $A$ ($m\times n$-Matrix, **Jacobi-Matrix** $Df(\mathbf x_0)$) gibt mit
$$f(\mathbf x)=f(\mathbf x_0)+A(\mathbf x-\mathbf x_0)+o(\mathbf x-\mathbf x_0),\qquad\frac{o(\mathbf h)}{\|\mathbf h\|}\to0.$$
:::

**Skalarwertig** ($m=1$): $A$ ist der Zeilenvektor $\nabla f=(f_{x_1},\ldots,f_{x_n})$ („Nabla"). Als Spaltenvektor heißt er **Gradient** $\operatorname{grad}f$.

:::satz Zusammenhang
- total differenzierbar ⇒ partiell differenzierbar (die Einträge der Jacobi-Matrix sind die partiellen Ableitungen) und stetig.
- partiell differenzierbar ⇏ total differenzierbar (Gegenbeispiel $\frac{x_1x_2}{(x_1^2+x_2^2)^2}$: partielle Ableitungen in 0 existieren, $f$ ist dort nicht einmal stetig).
- **Satz 13.15:** partiell differenzierbar **mit stetigen** partiellen Ableitungen ⇒ total differenzierbar. (Für fast alle Funktionen der Praxis erfüllt.)
:::

## Lineares Taylorpolynom und Tangentialebene

$$T_{f,\mathbf x_0}(\mathbf x)=f(\mathbf x_0)+\operatorname{grad}f(\mathbf x_0)\cdot(\mathbf x-\mathbf x_0)\approx f(\mathbf x).$$
Für $n=2$ ist der Graph die **Tangentialebene** $z=f(x_0,y_0)+f_x(x-x_0)+f_y(y-y_0)$ mit Normalenvektor $(-f_x,-f_y,1)$. Sie hat in $\mathbf x_0$ denselben Wert und dieselben partiellen Ableitungen wie $f$.

:::formel Lineare Fehlerfortpflanzung (totales Differential)
$$\Delta f\approx\d f=\sum_i\frac{\partial f}{\partial x_i}\Delta x_i,\qquad|\Delta f|_{max}\approx\sum_i\Big|\frac{\partial f}{\partial x_i}\Big|\,|\Delta x_i|.$$
:::

## Geometrie des Gradienten

:::satz
1. $\operatorname{grad}f(\mathbf x)$ steht **senkrecht auf der Höhenlinie** durch $\mathbf x$.
2. $\operatorname{grad}f$ zeigt in Richtung des **steilsten Anstiegs**; $\|\operatorname{grad}f\|$ ist dieser maximale Anstieg.
:::
*Begründung:* Für einen kleinen Schritt $\boldsymbol\nu$ gilt $f(\mathbf x+\boldsymbol\nu)\approx f(\mathbf x)+\|\operatorname{grad}f\|\,\|\boldsymbol\nu\|\cos\varphi$. Senkrecht ($\cos\varphi=0$): Wert bleibt gleich ⇒ Höhenlinie. Maximal für $\varphi=0$.

:::def Richtungsableitung
Für einen **Einheitsvektor** $\boldsymbol\nu$ ($\|\boldsymbol\nu\|=1$):
$$\frac{\partial f}{\partial\boldsymbol\nu}(\mathbf x)=\frac{\d}{\d t}f(\mathbf x+t\boldsymbol\nu)\Big|_{t=0}=\operatorname{grad}f(\mathbf x)\cdot\boldsymbol\nu.$$
Partielle Ableitungen sind Richtungsableitungen in Achsenrichtung.
:::

| $f$ | $\operatorname{grad}f$ | Bemerkung |
|---|---|---|
| $\mathbf a\cdot\mathbf x$ (linear) | $\mathbf a$ | konstant; eigene Linearisierung |
| $\|\mathbf x\|$ | $\frac{\mathbf x}{\|\mathbf x\|}$ | radial, Länge 1 (Kegel) |
| $x^2+y^2$ | $(2x,2y)$ | radial, wächst nach außen |
| $\mathbf x^TA\mathbf x$ | $(A+A^T)\mathbf x$ | $=2A\mathbf x$ für symmetrisches $A$ |

:::bsp Rosenbrock-Bananenfunktion (Skript Bsp. 13.26)
$f=(1-x)^2+10(y-x^2)^2$: $\operatorname{grad}f=\begin{pmatrix}-2(1-x)-40x(y-x^2)\\20(y-x^2)\end{pmatrix}$, in $(0{,}5;0{,}8)$: $(-12,\,11)$, steilster Anstieg $\sqrt{265}=16{,}28$. In Richtung $(1,1)$: $\boldsymbol\nu=\frac1{\sqrt2}(1,1)$, $\frac{\partial f}{\partial\boldsymbol\nu}=\frac{-12+11}{\sqrt2}=-\frac{\sqrt2}2$ – leicht bergab.
:::

## Aufgaben

:::aufgabe 1 (Skript 13.6)
Zeige: $f=xy+x\ln\frac yx$ ($x,y>0$) erfüllt $xf_x+yf_y=xy+f$.
:::loesung
$f_x=y+\ln y-\ln x-1$, $f_y=x+\frac xy$. $xf_x+yf_y=xy+x\ln\frac yx-x+xy+x=2xy+x\ln\frac yx=xy+f$ ✓.
:::
:::

:::aufgabe 2 (Skript 13.7)
Tangentialebenen der drei Funktionen aus dem Beispiel oben in $(0,0)$.
:::loesung
$f$: $f(0,0)=0$, $\operatorname{grad}=(0,1)$ ⇒ $T=y$. $g$: $g(0,0)=0$, $g_x=0$, $g_y=1$ ⇒ $T=y$. $h$: alles 0 ⇒ $T=0$.
:::
:::

:::aufgabe 3 (Skript 13.8)
$f=\sqrt{1-x^2-y^2}$. Graph, Gradient, Tangentialebene und Normale in $(0,0)$ und $(\frac12,0)$.
:::loesung
Obere Einheitshalbkugel. $\operatorname{grad}f=\frac{-1}{\sqrt{1-x^2-y^2}}(x,y)$.
$(0,0)$: $T=1$, Normale $(0,0,1)$.
$(\frac12,0)$: $f=\frac{\sqrt3}2$, $\operatorname{grad}=(-\frac1{\sqrt3},0)$ ⇒ $T=\frac{\sqrt3}2-\frac1{\sqrt3}(x-\frac12)$; Normale $(\frac1{\sqrt3},0,1)\parallel(\frac12,0,\frac{\sqrt3}2)$ – zeigt radial vom Mittelpunkt weg, wie es bei einer Kugel sein muss.
:::
:::

:::aufgabe 4
Ohmsches Gesetz $R=\frac UI$: $U=230\,$V $\pm2\,$V, $I=2\,$A $\pm0{,}05\,$A. Maximaler Fehler von $R$?
:::loesung
$R=115\,\Omega$. $|\Delta R|\le\frac1I|\Delta U|+\frac U{I^2}|\Delta I|=1+2{,}875=3{,}9\,\Omega$ (3,4 %).
:::
:::

:::aufgabe 5
Richtungsableitung von $f=x^2y$ in $(1,2)$ in Richtung $(3,4)$. In welche Richtung steigt $f$ am stärksten?
:::loesung
$\operatorname{grad}f=(2xy,x^2)=(4,1)$; $\boldsymbol\nu=(0{,}6;0{,}8)$ ⇒ $\frac{\partial f}{\partial\boldsymbol\nu}=2{,}4+0{,}8=3{,}2$. Steilster Anstieg in Richtung $(4,1)$ mit Steigung $\sqrt{17}=4{,}12$.
:::
:::

## Karteikarten

:::karte
Wie bildet man eine partielle Ableitung?
???
Nach einer Variablen ableiten, alle anderen als Konstanten behandeln.
:::

:::karte
Totale Differenzierbarkeit (Idee)?
???
Lokale Linearisierung: $f(\mathbf x)=f(\mathbf x_0)+Df(\mathbf x_0)(\mathbf x-\mathbf x_0)+o(\|\mathbf x-\mathbf x_0\|)$.
:::

:::karte
Hinreichend für totale Differenzierbarkeit?
???
Partielle Ableitungen existieren und sind stetig.
:::

:::karte
Tangentialebene an z = f(x,y)?
???
$z=f(x_0,y_0)+f_x(x-x_0)+f_y(y-y_0)$
:::

:::karte
Geometrie des Gradienten?
???
Senkrecht zu Höhenlinien, Richtung steilsten Anstiegs, Länge = maximale Steigung.
:::

:::karte
Richtungsableitung?
???
$\frac{\partial f}{\partial\boldsymbol\nu}=\operatorname{grad}f\cdot\boldsymbol\nu$ mit $\|\boldsymbol\nu\|=1$.
:::

:::karte
Lineare Fehlerrechnung?
???
$|\Delta f|\approx\sum|\partial f/\partial x_i|\,|\Delta x_i|$
:::
