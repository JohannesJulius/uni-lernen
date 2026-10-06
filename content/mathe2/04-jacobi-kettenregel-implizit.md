---
title: 13.3 Jacobi-Matrix, Kettenregel, Umkehrfunktion, implizite Funktionen
chapter: 13 Funktionen von mehreren Variablen
minutes: 110
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#296; Mathe 2/IM2_slides_T2_anamv_13_functions_mv_chain_rule.pdf; Mathe 2/IM2_slides_T2_anamv_10_functions_mv_implicitfunctions.pdf; Mathe 2/IM2_slides_T2_anamv_08_functions_mv_differentiation_example_1.pdf
---

:::ziel
- Die **Jacobi-Matrix** vektorwertiger Funktionen aufstellen (Zeilen = Komponenten, Spalten = Variablen).
- Ableitungsregeln, insbesondere die **Kettenregel** $D(f\circ g)=Df(g)\,Dg$, in den wichtigen Spezialfällen anwenden.
- Die Ableitung der **Umkehrfunktion** berechnen (Polarkoordinaten).
- Mit dem **Satz über implizite Funktionen** Steigungen von Kurven $F(x,y)=0$ bestimmen.
:::

## Jacobi-Matrix

Für $f=(f_1,\ldots,f_m):\mathbb R^n\to\mathbb R^m$ linearisiert man jede Komponente einzeln und stapelt die Gradienten:

:::satz Jacobi-Matrix (Satz 13.21)
$$Df(\mathbf x)=\begin{pmatrix}\frac{\partial f_1}{\partial x_1}&\cdots&\frac{\partial f_1}{\partial x_n}\\\vdots&&\vdots\\\frac{\partial f_m}{\partial x_1}&\cdots&\frac{\partial f_m}{\partial x_n}\end{pmatrix}=\begin{pmatrix}-\nabla f_1(\mathbf x)-\\\vdots\\-\nabla f_m(\mathbf x)-\end{pmatrix}\in\mathbb R^{m\times n},$$
$$f(\mathbf x+\boldsymbol\delta)\approx f(\mathbf x)+Df(\mathbf x)\,\boldsymbol\delta.$$
**Zeile** $i$ ↔ Komponente $f_i$, **Spalte** $j$ ↔ Variable $x_j$. Für $m=1$: Zeilenvektor $\nabla f$. Für $n=1$ (Kurve): Spaltenvektor $\dot\gamma$ (Tangentenvektor).
:::

:::bsp Polarkoordinaten (Skript Bsp. 13.22)
$f(r,\varphi)=\begin{pmatrix}r\cos\varphi\\r\sin\varphi\end{pmatrix}$: $\ Df=\begin{pmatrix}\cos\varphi&-r\sin\varphi\\\sin\varphi&r\cos\varphi\end{pmatrix}$, $\det Df=r$.
Kleine Störungen: $\Delta\mathbf x\approx\begin{pmatrix}\Delta r\cos\varphi-r\Delta\varphi\sin\varphi\\\Delta r\sin\varphi+r\Delta\varphi\cos\varphi\end{pmatrix}$. Für $r=0$ wirken Winkelfehler gar nicht (der Winkel ist dort bedeutungslos); auf der $x$-Achse ($\varphi=0$) beeinflusst $\Delta r$ nur $x$ und $\Delta\varphi$ nur $y$.
$\det Df=r$ wird bei Bereichsintegralen als **Funktionaldeterminante** wichtig ($\d A=r\,\d r\,\d\varphi$, Kap. 17).
:::

## Ableitungsregeln

:::satz Rechenregeln (Satz 13.23)
- Linearität: $D(f+g)=Df+Dg$, $D(\lambda f)=\lambda Df$.
- Produktregel (Skalarprodukt zweier vektorwertiger Funktionen): $D(f\cdot g)=f^TDg+g^TDf$.
- **Kettenregel:** $D(f\circ g)(\mathbf x)=Df\big(g(\mathbf x)\big)\cdot Dg(\mathbf x)$ (Matrixprodukt; Dimensionen passen automatisch: $(m\times n)(n\times l)$).
:::

**Spezialfall 1 – Umweg durch das $\mathbb R^n$** (Skalarfeld entlang einer Kurve, z. B. Temperatur, die ein Flugzeug auf seiner Bahn erlebt): $h(t)=f(\gamma(t))$,
$$h'(t)=\nabla f(\gamma(t))\cdot\dot\gamma(t)=\sum_i\frac{\partial f}{\partial x_i}\frac{\d x_i}{\d t}.$$
**Spezialfall 2 – Nachbearbeitung** eines Skalarfelds mit einer 1D-Funktion: $h=\varphi\circ g$, $\nabla h=\varphi'(g(\mathbf x))\nabla g(\mathbf x)$. Beispiel: $h=\ln\|\mathbf x\|$ ⇒ $\nabla h=\frac1{\|\mathbf x\|}\frac{\mathbf x^T}{\|\mathbf x\|}=\frac{\mathbf x^T}{\|\mathbf x\|^2}$.

:::bsp Folienbeispiel Kettenregel
$f(x,y)=\frac{x^2}4+y+5$, $\gamma(t)=(2\sin t,\ t)$. $Df=(\frac x2,\ 1)$, $\dot\gamma=(2\cos t,\ 1)^T$:
$\frac{\d}{\d t}f(\gamma(t))=\frac{2\sin t}2\cdot2\cos t+1=2\sin t\cos t+1$ – gleich wie direkt: $f(\gamma(t))=\sin^2t+t+5$.
:::

:::bsp Abstand auf einer Ellipse (Skript Bsp. 13.24)
$\gamma(t)=(a\cos t,b\sin t)$, $f=\sqrt{x^2+y^2}$: $h'(t)=\frac{(b^2-a^2)\sin t\cos t}{\sqrt{a^2\cos^2t+b^2\sin^2t}}$ (über die Kettenregel oder direkt).
:::

**Richtungsableitung** ist eine Anwendung: $g(t)=\mathbf x+t\boldsymbol\nu$ ⇒ $\frac{\d}{\d t}f(g(t))\big|_0=\nabla f(\mathbf x)\boldsymbol\nu$.

## Umkehrfunktion

:::satz (Satz 13.27)
Ist $f$ die Umkehrabbildung von $g$ ($f\circ g=\mathrm{id}$), so gilt $Df(g(\mathbf x))=\big(Dg(\mathbf x)\big)^{-1}$.
:::
Polarkoordinaten rückwärts ($r=\sqrt{x^2+y^2}$, $\varphi=\arctan\frac yx$):
$$D(r,\varphi)(x,y)=\begin{pmatrix}\cos\varphi&\sin\varphi\\-\frac{\sin\varphi}r&\frac{\cos\varphi}r\end{pmatrix}=\begin{pmatrix}\frac x{\sqrt{x^2+y^2}}&\frac y{\sqrt{x^2+y^2}}\\-\frac y{x^2+y^2}&\frac x{x^2+y^2}\end{pmatrix}.$$
Probe: $\frac{\partial r}{\partial x}=\frac x r$ ✓ – ohne die Umkehrformel mühsam.

## Implizite Funktionen (Folien, Ergänzung zum Skript)

:::abgleich
Der Satz über implizite Funktionen steht in den Mathe-2-Folien, nicht im Skript.
:::

Viele Kurven sind nur **implizit** gegeben: $F(x,y)=0$ (Einheitskreis $x^2+y^2-1=0$, Höhenlinien, Zustandsgleichungen). Lokal lässt sich oft nach $y$ auflösen ($y=\pm\sqrt{1-x^2}$) – aber oft nicht explizit.

:::satz Satz über implizite Funktionen (2D)
Ist $F$ stetig differenzierbar, $F(x_0,y_0)=0$ und $F_y(x_0,y_0)\ne0$, dann definiert $F(x,y)=0$ in einer Umgebung **eindeutig** eine differenzierbare Funktion $y(x)$ mit
$$y'(x)=-\frac{F_x(x,y)}{F_y(x,y)}.$$
:::
*Herleitung:* $F(x,y(x))=0$ ableiten (Kettenregel): $F_x+F_y\,y'=0$.
Kreis: $y'=-\frac{2x}{2y}=-\frac xy$ (senkrechte Tangente bei $y=0$, wo $F_y=0$ – dort ist nach $x$ auflösbar: $x'(y)=-\frac{F_y}{F_x}$).
Geometrisch: $\nabla F\perp$ Höhenlinie, Tangentenrichtung $(F_y,-F_x)$.

## Eine Kuriosität (Folien)

$f(x,y)=\frac{xy}{\sqrt{x^2+y^2}}$, $f(0,0)=0$: **stetig** (Polarkoordinaten: $|f|=r|\cos\varphi\sin\varphi|\to0$), **partiell differenzierbar** ($f_x(0,0)=f_y(0,0)=0$), aber die partiellen Ableitungen $f_x=\frac{y^3}{(x^2+y^2)^{3/2}}$ sind in 0 **unstetig** – und $f$ ist **nicht total differenzierbar**: Die Richtungsableitung in Richtung $(\cos\phi,\sin\phi)$ ist $\cos\phi\sin\phi\ne\nabla f(0)\cdot\boldsymbol\nu=0$.

## Aufgaben

:::aufgabe 1
Jacobi-Matrix von $f(x,y,z)=\begin{pmatrix}xyz\\x^2+\sin z\end{pmatrix}$ in $(1,2,0)$.
:::loesung
$Df=\begin{pmatrix}yz&xz&xy\\2x&0&\cos z\end{pmatrix}$, in $(1,2,0)$: $\begin{pmatrix}0&0&2\\2&0&1\end{pmatrix}$.
:::
:::

:::aufgabe 2 (Skript 13.5)
$g(x)=f(x,x)$. Bestimme $g'(x)$.
:::loesung
Kettenregel mit $\gamma(x)=(x,x)$, $\dot\gamma=(1,1)$: $g'(x)=f_x(x,x)+f_y(x,x)$.
:::
:::

:::aufgabe 3
Die Temperatur im Raum sei $T(x,y,z)=20+0{,}1xy-0{,}02z^2$; eine Drohne fliegt $\gamma(t)=(2t,\,3,\,t^2)$. $\frac{\d T}{\d t}$ bei $t=1$?
:::loesung
$\nabla T=(0{,}1y,\,0{,}1x,\,-0{,}04z)=(0{,}3;\,0{,}2;\,-0{,}04)$ bei $(2,3,1)$; $\dot\gamma=(2,0,2t)=(2,0,2)$ ⇒ $\frac{\d T}{\d t}=0{,}6-0{,}08=0{,}52\,$K/s.
:::
:::

:::aufgabe 4
Steigung der Kurve $x^3+y^3-3xy=0$ (Descartes' Blatt) im Punkt $(\frac32,\frac32)$.
:::loesung
$F_x=3x^2-3y$, $F_y=3y^2-3x$; in $(\frac32,\frac32)$: $F_x=F_y=\frac{27}4-\frac92=\frac94$ ⇒ $y'=-1$.
:::
:::

## Karteikarten

:::karte
Aufbau der Jacobi-Matrix?
???
Zeile i: Gradient der Komponente f_i; Spalte j: Ableitungen nach x_j; Größe m×n.
:::

:::karte
Kettenregel mehrdimensional?
???
$D(f\circ g)(\mathbf x)=Df(g(\mathbf x))\,Dg(\mathbf x)$
:::

:::karte
Ableitung entlang einer Kurve?
???
$\frac{\d}{\d t}f(\gamma(t))=\nabla f(\gamma(t))\cdot\dot\gamma(t)$
:::

:::karte
Implizite Ableitung?
???
$y'=-F_x/F_y$, falls $F_y\ne0$.
:::

:::karte
Jacobi-Determinante der Polarkoordinaten?
???
$r$
:::
