---
title: 14 Extremwerte – Hessematrix, Satz von Schwarz, Taylor 2. Ordnung, Definitheit, Sattelpunkte
chapter: 14 Extremwerte
minutes: 140
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#313; Mathe 2/IM2_slides_T2_anamv_09_functions_mv_higherderivatives.pdf; Mathe 2/IM2_slides_T2_anamv_12_functions_mv_taylorpolynomials.pdf; Mathe 2/IM2_slides_T2_anamv_11_functions_mv_localextrema_1.pdf; Mathe 2/IM2_slides_T2_anamv_11_functions_mv_localextrema_2_lsq.pdf
---

:::ziel
- Zweite partielle Ableitungen und die **Hessematrix** berechnen; **Satz von Schwarz**.
- Das **Taylorpolynom 2. Ordnung** aufstellen.
- **Kritische Punkte** finden und mit der Definitheit der Hessematrix als Minimum, Maximum oder **Sattelpunkt** klassifizieren (Eigenwerte, Determinanten-Spur-Kriterium, Hauptminoren).
- Optimierungsprobleme mit Nebenbedingung durch Elimination lösen; Ausblick Lagrange.
:::

## Höhere partielle Ableitungen und Hessematrix

Der Gradient ist selbst eine Funktion $\operatorname{grad}f:\mathbb R^n\to\mathbb R^n$. Ihre Jacobi-Matrix ist die **Hessematrix**:
$$H_f(\mathbf x)=D^2f(\mathbf x)=\begin{pmatrix}f_{x_1x_1}&\cdots&f_{x_1x_n}\\\vdots&&\vdots\\f_{x_nx_1}&\cdots&f_{x_nx_n}\end{pmatrix},\qquad f_{xy}:=\frac{\partial}{\partial y}\frac{\partial f}{\partial x}.$$

:::satz Satz von Schwarz
Ist $f$ zweimal **stetig** differenzierbar, so ist die Reihenfolge egal: $f_{xy}=f_{yx}$. Die Hessematrix ist **symmetrisch** (⇒ reelle Eigenwerte, Mathe 1). Allgemein: bis zur Ordnung $p$ vertauschbar, wenn alle $p$-ten Ableitungen stetig sind.
:::

:::bsp
- $f=a\cdot\mathbf x$ (linear): $H=0$.
- $f=\sin x_1\cos x_2$: $H=\begin{pmatrix}-\sin x_1\cos x_2&-\cos x_1\sin x_2\\-\cos x_1\sin x_2&-\sin x_1\cos x_2\end{pmatrix}$.
- $f=3x^2y^2$: $\nabla f=(6xy^2,6x^2y)$, $H=\begin{pmatrix}6y^2&12xy\\12xy&6x^2\end{pmatrix}$.
- $f=x^2+y\sin x$: $\nabla f=(2x+y\cos x,\ \sin x)$, $H=\begin{pmatrix}2-y\sin x&\cos x\\\cos x&0\end{pmatrix}$.
- $f=\mathbf x^TA\mathbf x$ ($A$ symmetrisch): $H=2A$ (konstant).
:::

## Taylorpolynom 2. Ordnung

$$f(\mathbf x_0+\mathbf v)\approx T_2(\mathbf v)=f(\mathbf x_0)+\nabla f(\mathbf x_0)\,\mathbf v+\tfrac12\,\mathbf v^TH_f(\mathbf x_0)\,\mathbf v.$$
In 2D ausgeschrieben ($\mathbf v=(h,k)$):
$$T_2=f+f_xh+f_yk+\tfrac12\big(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2\big).$$
Höhere Ordnungen: Summen über alle $k$-fachen Ableitungen (Folien) – in der Praxis selten.

## Bedingungen für Extremwerte

Analog zu 1D ($f'=0$, Vorzeichen von $f''$):

:::satz Notwendige Bedingung
In einem lokalen Extremum (innerer Punkt) gilt $\nabla f(\mathbf x_0)=\mathbf 0$ (sonst gäbe es eine Abstiegsrichtung). Solche Punkte heißen **kritische (stationäre) Punkte**.
:::

Im kritischen Punkt ist $f(\mathbf x_0+\mathbf v)\approx f(\mathbf x_0)+\frac12\mathbf v^TH\mathbf v$ – das Vorzeichen der **quadratischen Form** entscheidet. Mit den Eigenwerten gilt $\lambda_{min}\|\mathbf v\|^2\le\mathbf v^TH\mathbf v\le\lambda_{max}\|\mathbf v\|^2$.

:::def Definitheit (symmetrische Matrix)
**positiv definit**: alle $\lambda_i>0$; **negativ definit**: alle $\lambda_i<0$; **indefinit**: positive und negative Eigenwerte; **semidefinit**: $\ge0$ bzw. $\le0$ mit mindestens einer 0.
:::

:::satz Hinreichende Bedingung (Satz 14.9)
$f$ zweimal stetig differenzierbar, $\nabla f(\mathbf x_0)=\mathbf 0$:
- $H$ positiv definit ⇒ **lokales Minimum**
- $H$ negativ definit ⇒ **lokales Maximum**
- $H$ indefinit ⇒ **Sattelpunkt** (kein Extremum)
- semidefinit ⇒ **keine Aussage** (höhere Terme nötig)
:::

:::rezept Determinanten-Spur-Kriterium (2×2)
$H=\begin{pmatrix}f_{xx}&f_{xy}\\f_{xy}&f_{yy}\end{pmatrix}$, $\lambda_1\lambda_2=\det H$, $\lambda_1+\lambda_2=f_{xx}+f_{yy}$:
| | Ergebnis |
|---|---|
| $\det H>0$, $f_{xx}>0$ | Minimum |
| $\det H>0$, $f_{xx}<0$ | Maximum |
| $\det H<0$ | Sattelpunkt |
| $\det H=0$ | keine Aussage |
**$n$ Dimensionen (Sylvester/Hauptminoren):** positiv definit ⇔ alle führenden Hauptminoren $\det A_k>0$; negativ definit ⇔ Vorzeichen alternieren ($\det A_1<0$, $\det A_2>0$, …).
:::

:::rezept Extremwertaufgabe
1. $\nabla f=\mathbf 0$ lösen (meist nichtlinear – Fallunterscheidungen, keine Lösungen verlieren!).
2. $H$ allgemein berechnen.
3. An jedem kritischen Punkt Definitheit prüfen.
4. Bei Bereichen mit Rand: Randpunkte gesondert untersuchen (globales Extremum!).
:::

:::bsp Skript Bsp. 14.10
$f=6xy-3y^2-2x^3$: $\nabla f=(6y-6x^2,\ 6x-6y)=\mathbf 0$ ⇒ $y=x^2$, $y=x$ ⇒ $P_1=(0,0)$, $P_2=(1,1)$.
$H=\begin{pmatrix}-12x&6\\6&-6\end{pmatrix}$. $P_1$: $\det=-36<0$ ⇒ **Sattel**. $P_2$: $\det=72-36=36>0$, $f_{xx}=-12<0$ ⇒ **Maximum** $f(1,1)=1$.
:::

:::bsp Schwerpunkt (Skript Bsp. 14.11)
$f(\mathbf x)=\sum_{i=1}^n\|\mathbf a_i-\mathbf x\|^2$ ⇒ $\nabla f=\mathbf 0$ ⇔ $\mathbf x=\frac1n\sum\mathbf a_i$ (Mittelpunkt); $H=2nI$ positiv definit ⇒ Minimum.
:::

:::bsp Least Squares als Extremwertproblem (Folien)
$f(\mathbf x)=\|A\mathbf x-\mathbf b\|^2=\mathbf x^TA^TA\mathbf x-2\mathbf b^TA\mathbf x+\mathbf b^T\mathbf b$: $\nabla f=2A^TA\mathbf x-2A^T\mathbf b=\mathbf 0$ ⇒ **Normalengleichung**; $H=2A^TA$ positiv definit bei $\operatorname{rang}A=n$ ⇒ Minimum (Kap. 12).
:::

:::achtung Minimum auf allen Geraden ≠ Minimum (Skript 14.8)
$f=2x^2-3xy^2+y^4=(2x-y^2)(x-y^2)$ hat auf **jeder Geraden** durch 0 ein Minimum, aber entlang der Parabel $x=\frac34y^2$ ist $f=-\frac18y^4<0$ – kein lokales Minimum. Hier ist $H(0)=\begin{pmatrix}4&0\\0&0\end{pmatrix}$ semidefinit: keine Aussage aus 2. Ordnung.
:::

## Nebenbedingungen

Elimination: Nebenbedingung nach einer Variablen auflösen, einsetzen, unbeschränkt optimieren (Skript 14.10/14.12).
*Ausblick (nicht im Skript):* Lagrange-Multiplikatoren – Extrema von $f$ unter $g=0$ erfüllen $\nabla f=\lambda\nabla g$, $g=0$ (Höhenlinie von $f$ berührt die Nebenbedingungskurve).

## Aufgaben

:::aufgabe 1 (Skript 14.2)
Warum gibt es keine $C^2$-Funktion mit $f_x=x^2y$, $f_y=x^3$?
:::loesung
$f_{xy}=\frac{\partial}{\partial y}(x^2y)=x^2$, $f_{yx}=\frac{\partial}{\partial x}x^3=3x^2$ – widerspricht dem Satz von Schwarz.
:::
:::

:::aufgabe 2 (Skript 14.3)
Taylorpolynome 2. Ordnung in $(0,0)$ von $2x^2+3xy+y$, $xy^2+ye^{-xy}$, $x\sin y$.
:::loesung
Erste ist selbst ein Polynom vom Grad 2: $T_2=2x^2+3xy+y$. Zweite: $ye^{-xy}=y-xy^2+\ldots$ und $xy^2$ sind von Ordnung ≥ 3 ⇒ $T_2=y$. Dritte: $x\sin y=xy-\ldots$ ⇒ $T_2=xy$ ($h_{xy}(0)=\cos0=1$).
:::
:::

:::aufgabe 3 (Skript 14.4)
$f=x_1x_2$: kritischer Punkt, Hessematrix, Eigenwerte/-vektoren, Schnitte $g_i(t)=f(t\mathbf v_i)$.
:::loesung
$\nabla f=(x_2,x_1)=\mathbf 0$ ⇒ $\mathbf x^*=\mathbf 0$. $H=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\lambda=\pm1$, $\mathbf v_{1,2}=\frac1{\sqrt2}(1,\pm1)$ ⇒ indefinit ⇒ Sattel.
$g_1(t)=\frac{t^2}2$ (Minimum in $t=0$), $g_2(t)=-\frac{t^2}2$ (Maximum) – entlang der Eigenrichtungen sieht man die Parabeln des Sattels.
:::
:::

:::aufgabe 4 (Skript 14.5)
Extrema und Sattelpunkte von $\sin x\cos y$ auf $[0,2\pi)^2$.
:::loesung
$\nabla f=(\cos x\cos y,\ -\sin x\sin y)=\mathbf 0$.
Fall $\cos x=0$ ($x=\frac\pi2,\frac{3\pi}2$) ⇒ $\sin y=0$ ($y=0,\pi$): Maxima $(\frac\pi2,0)$, $(\frac{3\pi}2,\pi)$ mit $f=1$; Minima $(\frac\pi2,\pi)$, $(\frac{3\pi}2,0)$ mit $f=-1$ ($H=\mp I$).
Fall $\cos y=0$ ⇒ $\sin x=0$: $(0,\frac\pi2),(0,\frac{3\pi}2),(\pi,\frac\pi2),(\pi,\frac{3\pi}2)$, $f=0$, $H=\begin{pmatrix}0&\pm1\\\pm1&0\end{pmatrix}$ ⇒ Sattelpunkte.
:::
:::

:::aufgabe 5 (Skript 14.6)
$f_\alpha=x^3-y^3+3\alpha xy$, $\alpha\ne0$.
:::loesung
$f_x=3x^2+3\alpha y=0$, $f_y=-3y^2+3\alpha x=0$ ⇒ $y=-\frac{x^2}\alpha$, $x=\frac{y^2}\alpha=\frac{x^4}{\alpha^3}$ ⇒ $x=0$ oder $x=\alpha$. Punkte $(0,0)$ und $(\alpha,-\alpha)$.
$H=\begin{pmatrix}6x&3\alpha\\3\alpha&-6y\end{pmatrix}$. $(0,0)$: $\det=-9\alpha^2<0$ ⇒ Sattel. $(\alpha,-\alpha)$: $\det=27\alpha^2>0$, $f_{xx}=6\alpha$ ⇒ Minimum für $\alpha>0$, Maximum für $\alpha<0$.
:::
:::

:::aufgabe 6 (Skript 14.7)
$f=\cos^2z-x^2-y^2-e^{xy}$ in $(0,0,0)$.
:::loesung
$\nabla f=(-2x-ye^{xy},\ -2y-xe^{xy},\ -\sin2z)=\mathbf 0$ ✓. $H(0)=\begin{pmatrix}-2&-1&0\\-1&-2&0\\0&0&-2\end{pmatrix}$, Eigenwerte $-1,-3,-2$ (bzw. Hauptminoren $-2<0$, $3>0$, $-6<0$) ⇒ negativ definit ⇒ lokales Maximum.
:::
:::

:::aufgabe 7 (Skript 14.10)
Quader mit $x+y+z=1$: maximale Oberfläche?
:::loesung
$O=2(xy+yz+zx)$, $z=1-x-y$ ⇒ $f=2(x+y-x^2-xy-y^2)$. $\nabla f=2(1-2x-y,\ 1-x-2y)=\mathbf 0$ ⇒ $x=y=\frac13$, $z=\frac13$. $H=\begin{pmatrix}-4&-2\\-2&-4\end{pmatrix}$, $\det=12>0$, $f_{xx}<0$ ⇒ Maximum $O=\frac23$ (Würfel).
:::
:::

:::aufgabe 8 (Skript 14.12/14.13)
(a) Maximales Produkt $xyz$ mit $x+y+z=105$. (b) $f=\|M(x,y)^T-\mathbf v\|^2$ mit $M=\begin{pmatrix}2&1\\1&3\\2&0\end{pmatrix}$, $\mathbf v=(1,2,3)^T$.
:::loesung
(a) Elimination $z=105-x-y$, $\nabla(xy(105-x-y))=\mathbf 0$ ⇒ $x=y=z=35$, Produkt $42\,875$.
(b) $\nabla f=2M^T(M\mathbf x-\mathbf v)$, $H=2M^TM=2\begin{pmatrix}9&5\\5&10\end{pmatrix}$ (positiv definit). $M^TM\mathbf x=M^T\mathbf v=(10,7)^T$ ⇒ $x=1$, $y=0{,}2$: einziges (globales) Minimum – $M\mathbf x$ ist die Projektion von $\mathbf v$ auf die von den Spalten aufgespannte Ebene.
:::
:::

:::aufgabe 9 (Skript 14.14 – Flugmechanik, statische Längsstabilität)
Nickpotential $U(\alpha,\eta)=\frac12c_\alpha\alpha^2+c_{\alpha\eta}\alpha\eta+\frac12c_\eta\eta^2-\frac k4\alpha^4$ ($c_\alpha,c_\eta,k>0$). (1) Bedingung für statische Stabilität in $(0,0)$; (2) Rolle von $c_\alpha$; (3) kritischer Anstellwinkel bei $\eta=0$.
:::loesung
(1) $\nabla U=(c_\alpha\alpha+c_{\alpha\eta}\eta-k\alpha^3,\ c_{\alpha\eta}\alpha+c_\eta\eta)$ verschwindet in 0 (getrimmter Flug). $H(0)=\begin{pmatrix}c_\alpha&c_{\alpha\eta}\\c_{\alpha\eta}&c_\eta\end{pmatrix}$, Spur $>0$ ⇒ stabil (Minimum) genau dann, wenn $c_\alpha c_\eta-c_{\alpha\eta}^2>0$.
(2) Größeres $c_\alpha$ (größere Stabilitätsmarge, Schwerpunkt weiter vor dem Neutralpunkt) vergrößert die Eigenwerte ⇒ stärkere Rückstellung, höhere Frequenz der Anstellwinkelschwingung, und der Kopplungsterm $c_{\alpha\eta}^2$ kann die Determinante nicht mehr negativ machen.
(3) $H(\alpha,0)=\begin{pmatrix}c_\alpha-3k\alpha^2&c_{\alpha\eta}\\c_{\alpha\eta}&c_\eta\end{pmatrix}$, $\det\le0$ ⇔ $\alpha\ge\alpha_{crit}=\sqrt{\frac{c_\alpha-c_{\alpha\eta}^2/c_\eta}{3k}}$. Darüber ist $H$ indefinit (Sattel): Störungen werden verstärkt – das Flugzeug bäumt sich auf (Pitch-up), Gefahr von Strömungsabriss/Deep Stall.
:::
:::

## Karteikarten

:::karte
Satz von Schwarz?
???
Bei stetigen zweiten Ableitungen gilt $f_{xy}=f_{yx}$ – Hessematrix symmetrisch.
:::

:::karte
Taylorpolynom 2. Ordnung (mehrdimensional)?
???
$f(\mathbf x_0)+\nabla f\,\mathbf v+\frac12\mathbf v^TH\mathbf v$
:::

:::karte
Klassifikation kritischer Punkte über H?
???
pos. definit → Min, neg. definit → Max, indefinit → Sattel, semidefinit → keine Aussage.
:::

:::karte
Det-Spur-Kriterium in 2D?
???
det > 0 & f_xx > 0: Min; det > 0 & f_xx < 0: Max; det < 0: Sattel; det = 0: keine Aussage.
:::

:::karte
Hauptminorenkriterium (positiv definit)?
???
Alle führenden Hauptminoren $\det A_k>0$.
:::

:::karte
Notwendige Bedingung für ein lokales Extremum im Inneren?
???
$\nabla f(\mathbf x_0)=\mathbf 0$ (kritischer Punkt).
:::
