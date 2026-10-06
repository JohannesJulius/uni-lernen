---
title: 17.2 Koordinatentransformation (Polar-, Zylinder-, Kugelkoordinaten), Rotationskörper, Satz von Green
chapter: 17 Bereichsintegrale
minutes: 140
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#366; Mathe 2/IM2_slides_T2_anamv_17_integration_3_riemann2d_rotationalsymmetry.pdf; Mathe 2/IM2_slides_T2_anamv_18_integration_4_riemann2d_coordtransfer.pdf
---

:::ziel
- Die **Transformationsformel** mit Funktionaldeterminante anwenden.
- Polar- ($r$), Zylinder- ($r$) und Kugelkoordinaten ($r^2\sin\psi$) sicher einsetzen; affine Transformationen.
- Volumen von Rotationskörpern, Trägheitsmomente, Schwerpunkte berechnen.
- Den **ebenen Satz von Green** verstehen und zur Flächenberechnung nutzen.
:::

## Transformationsformel

Integrale in „unpassenden" Koordinaten sind mühsam: Kreisfläche kartesisch $\int_{-R}^R2\sqrt{R^2-x^2}\,\d x=\pi R^2$ braucht eine trigonometrische Substitution.

:::satz Transformationsformel (17.2)
$\Phi:R\to K$ Koordinatentransformation (bijektiv, $\Phi$ und $\Phi^{-1}$ stetig differenzierbar), $\Phi$ bildet **neue Koordinaten auf kartesische** ab:
$$\int_Kf(\mathbf x)\,\d\mathbf x=\int_Rf(\Phi(\mathbf y))\,\big|\det D\Phi(\mathbf y)\big|\,\d\mathbf y.$$
$|\det D\Phi|$ (**Funktional-/Jacobi-Determinante**) ist der lokale **Flächen-/Volumenverzerrungsfaktor**: Ein kleines Rechteck $\d y_1\,\d y_2$ wird auf ein Parallelogramm aus $D\Phi\,\mathbf e_1\d y_1$, $D\Phi\,\mathbf e_2\d y_2$ abgebildet.
:::

| Koordinaten | $\Phi$ | $\lvert\det D\Phi\rvert$ | Element |
|---|---|---|---|
| Polar | $(r\cos\varphi,\ r\sin\varphi)$ | $r$ | $\d A=r\,\d r\,\d\varphi$ |
| Zylinder | $(r\cos\varphi,\ r\sin\varphi,\ z)$ | $r$ | $\d V=r\,\d r\,\d\varphi\,\d z$ |
| Kugel ($\psi$ von der $z$-Achse) | $(r\cos\varphi\sin\psi,\ r\sin\varphi\sin\psi,\ r\cos\psi)$ | $r^2\sin\psi$ | $\d V=r^2\sin\psi\,\d r\,\d\varphi\,\d\psi$ |
| affin $A\mathbf y+\mathbf b$ | | $\lvert\det A\rvert$ | konstant |
| Streckung $a\mathbf x$ im $\mathbb R^n$ | | $a^n$ | Maß skaliert mit $a^n$ |

:::achtung
Den Faktor $r$ (bzw. $r^2\sin\psi$) **nie vergessen** – häufigster Fehler! Und die Grenzen im neuen System neu bestimmen (Skizze).
:::

:::bsp Kreisfläche und Kugelvolumen
$\int_0^{2\pi}\int_0^Rr\,\d r\,\d\varphi=\pi R^2$. Kugel: $\int_0^{2\pi}\int_0^\pi\int_0^Rr^2\sin\psi\,\d r\,\d\psi\,\d\varphi=2\pi\cdot2\cdot\frac{R^3}3=\frac43\pi R^3$.
:::

:::bsp Trägheitsmoment einer Kugel (Skript Bsp. 17.10)
Abstand zur $z$-Achse $d=r\sin\psi$, $\rho=1$:
$\Theta=\int_0^R\int_0^\pi\int_0^{2\pi}(r\sin\psi)^2r^2\sin\psi\,\d\varphi\,\d\psi\,\d r=2\pi\frac{R^5}5\int_0^\pi\sin^3\psi\,\d\psi=2\pi\frac{R^5}5\cdot\frac43=\frac{8\pi}{15}R^5$ $\big(=\frac25MR^2$ mit $M=\frac43\pi R^3\big)$.
:::

## Rotationskörper (Folien)

Körper, der durch Rotation von $r(z)$, $z\in[a,b]$ um die $z$-Achse entsteht – Zylinderkoordinaten:
$$V=\int_a^b\int_0^{2\pi}\int_0^{r(z)}r\,\d r\,\d\varphi\,\d z=\pi\int_a^br(z)^2\,\d z,\qquad M_{Mantel}=2\pi\int_a^br(z)\sqrt{1+r'(z)^2}\,\d z.$$
Halbkugel: $r(z)=\sqrt{2Rz-z^2}$, $V=\pi\int_0^R(2Rz-z^2)\,\d z=\frac23\pi R^3$. Hohlkörper: Differenz zweier Volumina (hohle Halbkugel $\frac23\pi(R_a^3-R_i^3)$). (Vgl. Mathe 1, Rotationsvolumina.)

## Der ebene Satz von Green

Ein **Integralsatz** verbindet ein Integral über ein Gebiet mit einem Integral über seinen **Rand**.

:::satz Green (Satz 17.12)
$B\subset\mathbb R^2$ beschränkt, Rand $\partial B$ **positiv orientiert** (das Gebiet liegt beim Durchlaufen **links**, äußerer Rand gegen den Uhrzeigersinn, Löcher im Uhrzeigersinn), $\mathbf v=(v_1,v_2)$ stetig differenzierbar:
$$\iint_B\left(\frac{\partial v_2}{\partial x}-\frac{\partial v_1}{\partial y}\right)\d x\,\d y=\oint_{\partial B}\mathbf v\cdot\d\mathbf s.$$
Links: „2D-Rotation" summiert; rechts: Zirkulation am Rand. In Gradientenfeldern ist links 0 ⇒ $\oint=0$ (Kap. 16).
:::

:::bsp Skript Bsp. 17.13
$\mathbf v=(xy,\ x+y)$ auf der Einheitskreisscheibe. Rand: $\oint=\int_0^{2\pi}(-\cos t\sin^2t+\cos^2t+\cos t\sin t)\,\d t=\pi$. Gebiet: $\partial_xv_2-\partial_yv_1=1-x$ ⇒ $\iint(1-x)=\pi-0=\pi$ ✓ (zwei völlig verschiedene Rechnungen, gleiches Ergebnis).
:::

:::satz Fläche aus dem Rand (Satz 17.14)
Mit $\mathbf v=\frac12(-y,x)$ ist $\partial_xv_2-\partial_yv_1=1$:
$$|B|=\frac12\oint_{\partial B}\begin{pmatrix}-y\\x\end{pmatrix}\cdot\d\mathbf s=\frac12\oint(x\dot y-y\dot x)\,\d t\quad(\text{Leibnizsche Sektorformel}).$$
Ellipse: $\frac12\int_0^{2\pi}(ab\sin^2t+ab\cos^2t)\,\d t=\pi ab$. Prinzip des **Planimeters** (mechanisches Flächenmessgerät).
:::

## Aufgaben

:::aufgabe 1 (Skript 17.6)
(a) Fläche von $D=\{1<r<2,\ \frac\pi6<\varphi<\pi\}$. (b) $\iint_D\frac y{x^4}$ über $1\le x^2+y^2\le4$, $x\ge y\ge0$.
:::loesung
(a) $\int_{\pi/6}^\pi\int_1^2r\,\d r\,\d\varphi=\frac{5\pi}6\cdot\frac32=\frac{5\pi}4$.
(b) $0\le\varphi\le\frac\pi4$: $\frac{r\sin\varphi}{r^4\cos^4\varphi}\,r=\frac{\sin\varphi}{r^2\cos^4\varphi}$. $\int_1^2r^{-2}\d r=\frac12$, $\int_0^{\pi/4}\frac{\sin\varphi}{\cos^4\varphi}\d\varphi=\big[\frac1{3\cos^3\varphi}\big]_0^{\pi/4}=\frac{2\sqrt2-1}3$ ⇒ $\frac{2\sqrt2-1}6\approx0{,}305$.
:::
:::

:::aufgabe 2 (Skript 17.4)
Volumen unter $z=xy$ über dem Viertelkreis $x,y\ge0$, $x^2+y^2\le R^2$.
:::loesung
$\int_0^{\pi/2}\int_0^Rr^2\cos\varphi\sin\varphi\cdot r\,\d r\,\d\varphi=\frac{R^4}4\cdot\frac12=\frac{R^4}8$.
:::
:::

:::aufgabe 3 (Skript 17.7)
Trapez mit Ecken $(1,0),(2,0),(0,-2),(0,-1)$: $\iint_Be^{(x+y)/(x-y)}$ mit $s=x+y$, $t=x-y$.
:::loesung
Ecken in $(s,t)$: $(1,1),(2,2),(-2,2),(-1,1)$ ⇒ $1\le t\le2$, $-t\le s\le t$. $x=\frac{s+t}2$, $y=\frac{s-t}2$ ⇒ $|\det|=\frac12$.
$\frac12\int_1^2\int_{-t}^te^{s/t}\,\d s\,\d t=\frac12\int_1^2t(e-e^{-1})\,\d t=\frac34\left(e-\frac1e\right)\approx1{,}763$.
:::
:::

:::aufgabe 4 (Skript 17.8)
Nordhalbkugel (Radius 1) mit Dichte $\rho=z$: Masse, Schwerpunkt, geometrischer Schwerpunkt.
:::loesung
Kugelkoordinaten, $z=r\cos\psi$, $0\le\psi\le\frac\pi2$:
$M=\int_0^{2\pi}\int_0^{\pi/2}\int_0^1r\cos\psi\,r^2\sin\psi\,\d r\,\d\psi\,\d\varphi=2\pi\cdot\frac14\cdot\frac12=\frac\pi4$.
$\int z\rho=\int z^2=2\pi\cdot\frac15\cdot\frac13=\frac{2\pi}{15}$ ⇒ $s_3=\frac{8}{15}$, $s_1=s_2=0$.
Geometrisch ($\rho=1$): $V=\frac{2\pi}3$, $\int z=2\pi\cdot\frac14\cdot\frac12=\frac\pi4$ ⇒ $z_s=\frac38$.
:::
:::

:::aufgabe 5 (Skript 17.10)
Rohr $1\le\sqrt{x^2+y^2}\le1{,}2$, $0\le z\le10$, Dichte $\rho=\frac{z+4}{x^2+y^2}$. Masse?
:::loesung
Zylinderkoordinaten: $\int_0^{10}\int_0^{2\pi}\int_1^{1{,}2}\frac{z+4}{r^2}r\,\d r\,\d\varphi\,\d z=90\cdot2\pi\cdot\ln1{,}2=180\pi\ln1{,}2\approx103{,}1$.
:::
:::

:::aufgabe 6 (Skript 17.11)
Rotationsellipsoid $\frac{x^2+y^2}{a^2}+\frac{z^2}{b^2}\le1$: Transformation von der Einheitskugel, $\Theta_z$ bei Dichte 1.
:::loesung
$\Phi(u,v,w)=(au,av,bw)$, $D\Phi=\operatorname{diag}(a,a,b)$, $\det=a^2b$. $\Theta_z(E)=\int_K(a^2u^2+a^2v^2)\,a^2b\,\d K=a^4b\,\Theta_z(K)=a^4b\cdot\frac{8\pi}{15}$. (Probe: $\frac25Ma^2$ mit $M=\frac43\pi a^2b$ ✓.)
:::
:::

:::aufgabe 7 (Skript 17.14 – Raketentank)
Tank: Halbkugelkappe (Radius $R$, $-R\le z\le0$) + Zylinder bis Füllhöhe $h$. (1) Volumen und Schwerpunkt der Kappe. (2) $m(h)$, $z_{cg}(h)$. (3) $\Theta_z$ des Zylinderteils; Vergleich $R_A=1{,}8\,$m vs. $R_B=2{,}7\,$m bei gleicher Masse.
:::loesung
(1) $V=\int_0^{2\pi}\int_0^R\sqrt{R^2-r^2}\,r\,\d r\,\d\varphi=\frac23\pi R^3$; $\int z\,\d V=-2\pi\int_0^R\frac{R^2-r^2}2r\,\d r=-\frac\pi4R^4$ ⇒ $z_{Kappe}=-\frac38R$.
(2) $m=\rho_0\pi R^2(\frac23R+h)$, $z_{cg}=\frac{\frac{h^2}2-\frac{R^2}4}{h+\frac23R}$. Beim Entleeren ($h\to0$) wandert $z_{cg}$ nach unten bis $-\frac38R$ – der Hebelarm zur Düse ändert sich ständig, daher muss die Schubvektorsteuerung ihre Verstärkung/Schwenkwinkel adaptiv anpassen.
(3) $\Theta_{z,Zyl}=\rho_0\cdot2\pi\cdot h\cdot\frac{R^4}4=\frac12m_{Zyl}R^2$. Bei gleicher Masse $\Theta\propto R^2$: $\left(\frac{2{,}7}{1{,}8}\right)^2=2{,}25$ – die breite Stufe ist 2,25-mal träger um die Längsachse, braucht also mehr Rollsteuermoment für dieselbe Winkelbeschleunigung.
:::
:::

:::aufgabe 8 (Skript 17.12)
Leite die Leibnizsche Sektorformel aus Green her.
:::loesung
Kurve $\gamma$ durch die Strecken $0\to\gamma(a)$ und $\gamma(b)\to0$ schließen. Auf Strecken durch den Ursprung ist $\mathbf x\parallel\dot{\mathbf x}$, also $x\dot y-y\dot x=0$ – sie tragen nichts bei. Mit Satz 17.14 bleibt $F=\frac12\left|\int_a^b(x\dot y-\dot xy)\,\d t\right|$.
:::
:::

## Karteikarten

:::karte
Transformationsformel?
???
$\int_Kf\,\d\mathbf x=\int_Rf(\Phi(\mathbf y))|\det D\Phi(\mathbf y)|\,\d\mathbf y$
:::

:::karte
Funktionaldeterminanten Polar / Zylinder / Kugel?
???
r / r / r² sin ψ
:::

:::karte
Volumen eines Rotationskörpers um die z-Achse?
???
$V=\pi\int_a^br(z)^2\,\d z$
:::

:::karte
Ebener Satz von Green?
???
$\iint_B(\partial_xv_2-\partial_yv_1)\,\d A=\oint_{\partial B}\mathbf v\cdot\d\mathbf s$ (Rand positiv: Gebiet links).
:::

:::karte
Fläche aus dem Randintegral?
???
$|B|=\frac12\oint(x\,\d y-y\,\d x)$
:::

:::karte
Trägheitsmoment einer Vollkugel?
???
$\frac25MR^2$ (ρ = 1: $\frac{8\pi}{15}R^5$)
:::
