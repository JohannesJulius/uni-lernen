---
title: 12 Lineare Ausgleichsprobleme – Methode der kleinsten Quadrate, Normalengleichung
chapter: 12 Lineare Ausgleichsprobleme
minutes: 110
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#253; Mathe 2/IM2_slides_T2_anamv_11_functions_mv_localextrema_2_lsq.pdf
---

:::ziel
- Verstehen, **warum** man die Summe der Fehlerquadrate minimiert (normalverteilte Messfehler).
- Ein Ausgleichsproblem als $\min\|A\mathbf x-\mathbf b\|$ formulieren: $A$ und $\mathbf b$ aufstellen.
- Die **Normalengleichung** $A^TA\mathbf x=A^T\mathbf b$ geometrisch (Projektion) herleiten und lösen.
- Lösbarkeit ($\operatorname{rang}A=n$) und numerische Aspekte (Kondition, QR) kennen.
:::

## Problemstellung

Gemessene Daten sollen ein Modell kalibrieren – bekannt als **Ausgleichsproblem, Regression, Methode der kleinsten Quadrate, Least Squares** (alles Synonyme).

**Annahme:** Es gibt eine Modellfunktion $m$ mit $m(x_i)=y_i$ bei idealer Messung. Real gilt
$$y_i=m(x_i)+\varepsilon_i$$
mit Fehlern $\varepsilon_i$ (weitere Einflüsse, Vereinfachungen, Messfehler). Sinnvoll ist das nur, wenn die wesentlichen Einflüsse im Modell stecken und keine systematischen Fehler vorliegen – präzise: **die $\varepsilon_i$ sind normalverteilt mit Mittelwert 0**,
$$\mathcal N(x;\mu,\sigma^2)=\frac1{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}.$$

**Warum Quadrate?** Die Wahrscheinlichkeit, genau die gemessenen Werte zu erhalten (unabhängige Messungen), ist
$$p(\mathbf y)=\prod_{i=1}^N\mathcal N(\varepsilon_i)=\frac1{\sqrt{2\pi\sigma^2}^N}\exp\Big(-\frac1{2\sigma^2}\sum_{i=1}^N\varepsilon_i^2\Big).$$
Sie ist **maximal, wenn $\sum\varepsilon_i^2$ minimal** ist. Man wählt also das Modell, unter dem die Messung am wahrscheinlichsten ist (Maximum-Likelihood).

:::def Problem der kleinsten Quadrate
Modell $m(x;p_1,\ldots,p_M)$: Finde $p_1,\ldots,p_M$ mit
$$\sum_{i=1}^N\big(m(x_i;p_1,\ldots,p_M)-y_i\big)^2\ \to\ \min.$$
**Linear** heißt das Problem, wenn die **Parameter linear** eingehen (das Modell selbst darf nichtlinear in $x$ sein, z. B. eine Parabel!). Dann
$$\min_{\mathbf x}\|A\mathbf x-\mathbf b\|^2,\qquad A\in\mathbb R^{m\times n},\ m>n\ (\text{meist }m\gg n).$$
($\mathbf x$ = Parameter, $\mathbf b$ = Messwerte, $m$ Messungen, $n$ Parameter.)
:::

## Die Normalengleichung

**Geometrie:** $A\mathbf x$ durchläuft den Untervektorraum $\operatorname{Bild}A\subset\mathbb R^m$ (Dimension $\le n$). Gesucht ist der Punkt in $\operatorname{Bild}A$, der $\mathbf b$ am nächsten liegt – die **senkrechte Projektion** von $\mathbf b$. Der Fehlervektor $A\mathbf x-\mathbf b$ steht also senkrecht auf $\operatorname{Bild}A$:
$$A\boldsymbol\zeta\cdot(A\mathbf x-\mathbf b)=0\ \ \forall\boldsymbol\zeta\in\mathbb R^n\iff\boldsymbol\zeta\cdot A^T(A\mathbf x-\mathbf b)=0\ \ \forall\boldsymbol\zeta\iff A^T(A\mathbf x-\mathbf b)=\mathbf 0.$$

:::satz Normalengleichung (Satz 12.4)
$$A^TA\,\mathbf x=A^T\mathbf b.$$
Das Ausgleichsproblem ist **eindeutig lösbar genau dann, wenn $\operatorname{rang}A=n$** (Spalten linear unabhängig).
:::

:::beweis
$A^TA\in\mathbb R^{n\times n}$ ist quadratisch – es genügt Injektivität. Aus $A^TA\mathbf x=\mathbf 0$ folgt $0=\langle A^TA\mathbf x,\mathbf x\rangle=\langle A\mathbf x,A\mathbf x\rangle=\|A\mathbf x\|^2$, also $A\mathbf x=\mathbf 0$ und wegen vollen Rangs $\mathbf x=\mathbf 0$.
:::

*Alternative Herleitung (Mathe-2-Folien, Extremwerte):* $f(\mathbf x)=\|A\mathbf x-\mathbf b\|^2$ ist eine Funktion mehrerer Variablen; $\nabla f=2A^T(A\mathbf x-\mathbf b)=\mathbf 0$ liefert dieselbe Gleichung, und die Hessematrix $2A^TA$ ist positiv definit ⇒ Minimum (→ Kapitel 14).

:::rezept Lineares Ausgleichsproblem lösen
1. **Modell** und Parameter festlegen; $A$ und $\mathbf b$ aufstellen – Zeile $i$ von $A$ = Basisfunktionen an $x_i$ (hier passieren die meisten Fehler!).
2. $A^TA$ ($n\times n$) und $A^T\mathbf b$ berechnen.
3. Normalengleichung lösen (Gauß, bei $2\times2$ Cramer).
4. Ergebnis interpretieren (Einheiten, Plausibilität).
:::

Für die Gerade $y=p_1x+p_2$ gilt allgemein
$$A=\begin{pmatrix}x_1&1\\\vdots&\vdots\\x_N&1\end{pmatrix},\quad A^TA=\begin{pmatrix}\sum x_i^2&\sum x_i\\\sum x_i&N\end{pmatrix},\quad A^T\mathbf b=\begin{pmatrix}\sum x_iy_i\\\sum y_i\end{pmatrix}.$$

:::achtung Numerik: Normalengleichung vs. QR
$\kappa_2(A^TA)=\kappa_2(A)^2$: Bei $\kappa(A)\approx10^4$ hat $A^TA$ schon $10^8$ – die Hälfte der 16 Stellen ist verloren. Software (MATLAB `A\b`, `scipy.linalg.lstsq`) nutzt deshalb die **QR-Zerlegung** $A=QR$: $\|A\mathbf x-\mathbf b\|=\|R\mathbf x-Q^T\mathbf b\|$, Rückwärtseinsetzen, Kondition bleibt $\kappa(A)$. Für riesige Probleme (Machine Learning): iterative Verfahren (Gradientenabstieg).
:::

## Beispiele aus dem Skript

:::bsp Sensorkalibrierung (Bsp. 12.5)
$x_i=-2,1,2,4$; $y_i=-1,0,1,5$; Modell $y=p_1x+p_2$.
$A=\begin{pmatrix}-2&1\\1&1\\2&1\\4&1\end{pmatrix}$, $\mathbf b=\begin{pmatrix}-1\\0\\1\\5\end{pmatrix}$, $A^TA=\begin{pmatrix}25&5\\5&4\end{pmatrix}$, $A^T\mathbf b=\begin{pmatrix}24\\5\end{pmatrix}$.
$\det=75$ ⇒ $p_1=\frac{4\cdot24-5\cdot5}{75}=\frac{71}{75}\approx0{,}947$, $p_2=\frac{25\cdot5-5\cdot24}{75}=\frac1{15}\approx0{,}067$.
Kennlinie $y=0{,}947x+0{,}067$: Empfindlichkeit 0,95 mV/K, Offset 0,07 mV.
:::

:::bsp Projektion auf eine Ebene (Bsp. 12.6)
$\mathbf b=(1,2,3)^T$ auf $\operatorname{span}\{(1,0,1)^T,(1,1,1)^T\}$: $A=\begin{pmatrix}1&1\\0&1\\1&1\end{pmatrix}$, $A^TA=\begin{pmatrix}2&2\\2&3\end{pmatrix}$, $A^T\mathbf b=\begin{pmatrix}4\\6\end{pmatrix}$ ⇒ $\alpha=0$, $\beta=2$; Projektion $\mathbf w=(2,2,2)^T$, Abstand $\|\mathbf w-\mathbf b\|=\sqrt2$.
:::

:::bsp Ausgleichsparabel (Bsp. 12.7)
$x_i=0,\ldots,4$; $y_i=1,2,2,4,6$; Modell $p_2x^2+p_1x+p_0$ (Basisfunktionen $x^2,x,1$):
$A=\begin{pmatrix}0&0&1\\1&1&1\\4&2&1\\9&3&1\\16&4&1\end{pmatrix}$ ⇒ $p_2=\frac27\approx0{,}286$, $p_1=\frac2{35}\approx0{,}057$, $p_0=\frac{41}{35}\approx1{,}171$.
**„Linear" bezieht sich auf die Parameter**, nicht auf das Modell. Genauso lassen sich $\sin$, $e^{x}$, … als Basisfunktionen verwenden. Nicht linear wäre z. B. $y=ae^{bx}$ (aber: Logarithmieren ⇒ $\ln y=\ln a+bx$ ist linear in $\ln a$, $b$).
:::

## Aufgaben

:::aufgabe 1 (Skript 12.2)
Punkte $(-2,2),(-1,1),(0,0),(1,1),(2,2)$. (1) Warum gibt es kein quadratisches Polynom durch alle Punkte? (2) Beste quadratische Approximation?
:::loesung
(1) Ein Polynom $\le2$. Grades ist durch 3 Punkte festgelegt: Durch $(-1,1),(0,0),(1,1)$ geht nur $x^2$, das aber $x^2(2)=4\ne2$ liefert.
(2) Symmetrie ⇒ $p_1=0$ (auch aus den Normalgleichungen). Mit $\sum x^4=34$, $\sum x^2=10$, $N=5$, $\sum x^2y=18$, $\sum y=6$: $34p_2+10p_0=18$, $10p_2+5p_0=6$ ⇒ $p_2=\frac37$, $p_0=\frac{12}{35}$. $p(x)=\frac37x^2+\frac{12}{35}$.
:::
:::

:::aufgabe 2 (Skript 12.3 – Luftwiderstand)
Ausrollversuch: $v=10,20,30\,$m/s; Verzögerung $a=0{,}1225;\ 0{,}1625;\ 0{,}2225\,$m/s². Modell $a=r+\frac{\rho Ac_w}{2m}v^2$ ($A=1\,$m², $\rho=1{,}29$, $m=1290\,$kg). Schätze $r$ und $c_w$.
:::loesung
Linear in $(r,k)$ mit $k=\frac{\rho Ac_w}{2m}=\frac{c_w}{2000}$. Spalten $1$ und $v^2=100,400,900$.
$A^TA=\begin{pmatrix}3&1400\\1400&980\,000\end{pmatrix}$, $A^T\mathbf b=\begin{pmatrix}0{,}5075\\277{,}5\end{pmatrix}$ ⇒ $k=1{,}245\cdot10^{-4}$, $r=0{,}111\,$m/s² ⇒ $c_w=2000k\approx0{,}25$.
:::
:::

:::aufgabe 3
Zeige: Bei der Ausgleichsgeraden geht die Gerade durch den Schwerpunkt $(\bar x,\bar y)$ der Daten.
:::loesung
Zweite Zeile der Normalengleichung: $p_1\sum x_i+Np_2=\sum y_i$ ⇒ $p_1\bar x+p_2=\bar y$.
:::
:::

## Karteikarten

:::karte
Warum minimiert man die Fehlerquadrate?
???
Bei normalverteilten Fehlern ist die Wahrscheinlichkeit der Messung maximal, wenn $\sum\varepsilon_i^2$ minimal ist.
:::

:::karte
Normalengleichung?
???
$A^TA\mathbf x=A^T\mathbf b$
:::

:::karte
Wann eindeutig lösbar?
???
Genau dann, wenn rang A = n (Spalten linear unabhängig).
:::

:::karte
Geometrische Deutung?
???
$A\mathbf x$ ist die senkrechte Projektion von $\mathbf b$ auf Bild A; Fehler ⟂ Bild A.
:::

:::karte
Warum nutzt Software QR statt Normalengleichung?
???
$\kappa(A^TA)=\kappa(A)^2$ – Normalengleichung verliert doppelt so viele Stellen.
:::

:::karte
Was heißt „linear" beim linearen Ausgleichsproblem?
???
Die Parameter gehen linear ein – das Modell darf in x nichtlinear sein (Parabel, sin, …).
:::
