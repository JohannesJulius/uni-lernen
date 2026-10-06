---
title: Der ℝⁿ als euklidischer Raum – Skalarprodukt, Länge, Winkel, Orthogonalität, Gram-Schmidt
chapter: 2 Lineare Algebra
minutes: 110
sources: Mathe 1/IngMath1_slides_2_linalg_07_analytgeom_1_Rn_EukidVR_Skalarprodukt.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#106
---

:::ziel
- Standardskalarprodukt, Länge (Norm) und Winkel im $\R^n$ berechnen.
- Orthogonalität prüfen; **Orthogonalprojektion** (Zerlegung in parallele und senkrechte Komponente).
- Orthonormalbasen und das **Gram-Schmidt-Verfahren**.
- Eigenschaften: Bilinearität, Symmetrie, positive Definitheit, Cauchy-Schwarz, Norm, Metrik; Skalarprodukt auf $\C^n$.
:::

## Motivation: Länge und Winkel im $\R^2$

Für $\vec v=(v_1,v_2)^T$ ist die Länge nach Pythagoras $\|\vec v\|=\sqrt{v_1^2+v_2^2}$. Bildet $\vec v$ den Winkel $\varphi$ und $\vec w$ den Winkel $\psi$ mit der $x_1$-Achse, so gilt $\cos\varphi=\frac{v_1}{\|\vec v\|}$, $\sin\varphi=\frac{v_2}{\|\vec v\|}$ (analog für $\psi$). Mit dem Additionstheorem:
$$\cos(\psi-\varphi)=\cos\psi\cos\varphi+\sin\psi\sin\varphi=\frac{v_1w_1+v_2w_2}{\|\vec v\|\|\vec w\|}.$$
Der Ausdruck $v_1w_1+v_2w_2$ verdient einen Namen.

## Das Standardskalarprodukt

:::def Skalarprodukt im $\R^n$
$$\langle\vec v,\vec w\rangle=\vec v\cdot\vec w=\vec v^T\vec w=\sum_{k=1}^nv_kw_k=v_1w_1+\dots+v_nw_n.$$
Das Ergebnis ist eine **Zahl** (ein Skalar), kein Vektor.
:::

Als Matrixprodukt: Zeile mal Spalte, $(v_1\ \cdots\ v_n)\begin{pmatrix}w_1\\\vdots\\w_n\end{pmatrix}$. In MATLAB: `dot(v,w)` oder `v'*w` für Spaltenvektoren.

:::satz Eigenschaften
Für $\vec u,\vec v,\vec w\in\R^n$, $x,y\in\R$:
1. **Symmetrie:** $\langle\vec u,\vec v\rangle=\langle\vec v,\vec u\rangle$
2. **Bilinearität:** $\langle x\vec u+y\vec v,\vec w\rangle=x\langle\vec u,\vec w\rangle+y\langle\vec v,\vec w\rangle$ (und ebenso im 2. Argument)
3. **Positive Definitheit:** $\langle\vec v,\vec v\rangle\ge0$ und $\langle\vec v,\vec v\rangle=0\iff\vec v=\vec0$

Ein Vektorraum mit einem solchen Skalarprodukt heißt **euklidischer Vektorraum**.
:::

## Länge und Winkel

:::def Norm (Länge, Betrag)
$$\|\vec v\|=\sqrt{\langle\vec v,\vec v\rangle}=\sqrt{v_1^2+\dots+v_n^2}.$$
Ein Vektor mit $\|\vec e\|=1$ heißt **Einheitsvektor**. Normieren: $\vec e=\frac{\vec v}{\|\vec v\|}$.
:::

:::satz Winkel
$$\langle\vec v,\vec w\rangle=\|\vec v\|\,\|\vec w\|\cos\angle(\vec v,\vec w)\qquad\Longrightarrow\qquad\cos\angle(\vec v,\vec w)=\frac{\langle\vec v,\vec w\rangle}{\|\vec v\|\,\|\vec w\|}.$$
:::

Vorzeichen des Skalarprodukts: $>0$ spitzer Winkel, $=0$ rechter Winkel, $<0$ stumpfer Winkel.

:::bsp
$\vec v=(1,2,2)^T$, $\vec w=(2,0,1)^T$: $\langle\vec v,\vec w\rangle=2+0+2=4$, $\|\vec v\|=3$, $\|\vec w\|=\sqrt5$. $\cos\alpha=\frac4{3\sqrt5}\approx0{,}596\Rightarrow\alpha\approx53{,}4°$.
:::

:::satz Weitere Rechenregeln
- $\|\vec u\pm\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2\pm2\langle\vec u,\vec v\rangle$ (wie binomische Formel; daraus folgt der **Kosinussatz**)
- **Parallelogrammgleichung:** $\|\vec u+\vec v\|^2+\|\vec u-\vec v\|^2=2(\|\vec u\|^2+\|\vec v\|^2)$
- **Pythagoras:** $\vec u\perp\vec v\Rightarrow\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2$
:::

## Cauchy-Schwarz, Norm und Metrik

:::satz Cauchy-Schwarzsche Ungleichung
$$|\langle\vec u,\vec v\rangle|\le\|\vec u\|\,\|\vec v\|,$$
mit Gleichheit genau dann, wenn $\vec u,\vec v$ linear abhängig sind.
:::
Darum ist $-1\le\frac{\langle\vec u,\vec v\rangle}{\|\vec u\|\|\vec v\|}\le1$ und der Winkel $\angle(\vec u,\vec v)=\arccos\frac{\langle\vec u,\vec v\rangle}{\|\vec u\|\|\vec v\|}$ ist in **jedem** euklidischen Raum wohldefiniert.

:::def Norm (allgemein)
Eine **Norm** auf $V$ ist eine Abbildung $\|\cdot\|:V\to[0,\infty)$ mit
1. $\|\vec x\|=0\iff\vec x=\vec0$, 2. $\|\lambda\vec x\|=|\lambda|\,\|\vec x\|$, 3. $\|\vec x+\vec y\|\le\|\vec x\|+\|\vec y\|$ (Dreiecksungleichung).
:::
Beispiele: die euklidische Norm (vom Skalarprodukt **induziert**), die **Maximumnorm** $\|\vec x\|_{\max}=\max_k|x_k|$.

:::ausblick Metrische Räume
Eine **Metrik** $d(\vec x,\vec y)$ misst Abstände: $d=0\iff\vec x=\vec y$, symmetrisch, Dreiecksungleichung $d(\vec x,\vec z)\le d(\vec x,\vec y)+d(\vec y,\vec z)$. Jede Norm induziert eine Metrik $d(\vec x,\vec y)=\|\vec y-\vec x\|$; im $\R^n$: $d(\vec x,\vec y)=\sqrt{\sum(y_k-x_k)^2}$.
:::

## Orthogonalität und Orthogonalprojektion

:::def Orthogonal
$\vec v\perp\vec w\iff\langle\vec v,\vec w\rangle=0$.
:::

:::bsp Senkrechte Geraden
Gerade $g=\{s(1,m)^T\}$ mit Steigung $m$, gesucht $h=\{t(1,\tilde m)^T\}\perp g$: $\langle(1,m),(1,\tilde m)\rangle=1+m\tilde m=0\Rightarrow\tilde m=-\frac1m$. (Bekannt aus der Schule: Steigungen senkrechter Geraden multiplizieren sich zu $-1$.)
:::

:::satz Orthogonalprojektion
Sei $\|\vec e\|=1$. Dann zerfällt jeder Vektor $\vec v$ eindeutig in
$$\vec v=\vec v_\parallel+\vec v_\perp,\qquad\vec v_\parallel=\langle\vec v,\vec e\rangle\,\vec e,\qquad\vec v_\perp=\vec v-\langle\vec v,\vec e\rangle\,\vec e,$$
mit $\vec v_\parallel\parallel\vec e$ und $\vec v_\perp\perp\vec e$. Ist $\vec a$ nicht normiert: $\vec v_\parallel=\frac{\langle\vec v,\vec a\rangle}{\langle\vec a,\vec a\rangle}\vec a$.
:::

Anwendung in der Mechanik: Zerlegung einer Kraft in Komponenten **parallel und senkrecht** zu einer schiefen Ebene; Arbeit $W=\vec F\cdot\vec s$ zählt nur die Komponente in Wegrichtung.

:::bsp
$\vec v=(1,2)^T$, $\vec e=\frac1{\sqrt2}(1,1)^T$: $\langle\vec v,\vec e\rangle=\frac3{\sqrt2}$, $\vec v_\parallel=\frac3{\sqrt2}\cdot\frac1{\sqrt2}(1,1)^T=(1{,}5;\ 1{,}5)^T$, $\vec v_\perp=(-0{,}5;\ 0{,}5)^T$. Probe: $\langle\vec v_\perp,\vec e\rangle=0$ ✓.
:::

## Orthonormalbasen

:::def Orthonormalbasis (ONB)
Eine Basis, deren Vektoren paarweise orthogonal und alle normiert sind: $\langle\vec b_i,\vec b_j\rangle=\delta_{ij}$ ($=1$ für $i=j$, sonst $0$).
:::
Beispiele: Standardbasis $\vec e_1,\dots,\vec e_n$; im $\R^2$ auch $\frac{1}{\sqrt2}(1,1)^T,\frac1{\sqrt2}(1,-1)^T$. Die Spalten von **Drehmatrizen** und Spiegelungen bilden ONBs (orthogonale Matrizen).

:::merke Vorteil einer ONB
Koordinaten sind einfach Skalarprodukte – kein LGS nötig: $\vec v=\sum_k\langle\vec v,\vec b_k\rangle\,\vec b_k$.
:::

## Gram-Schmidt-Orthogonalisierung

:::satz
Aus linear unabhängigen $\vec w_1,\dots,\vec w_n$ erhält man orthogonale $\vec v_1,\dots,\vec v_n$ mit gleichem Spann:
$$\vec v_1=\vec w_1,\qquad\vec v_k=\vec w_k-\sum_{l=1}^{k-1}\frac{\langle\vec v_l,\vec w_k\rangle}{\langle\vec v_l,\vec v_l\rangle}\vec v_l.$$
Normieren ($\vec v_k/\|\vec v_k\|$) liefert eine ONB.
:::
Idee: Von jedem neuen Vektor werden die Projektionen auf alle bisherigen abgezogen – übrig bleibt der senkrechte Anteil.

:::bsp $\vec w_1=(1,0,1)^T$, $\vec w_2=(1,2,3)^T$, $\vec w_3=(3,2,1)^T$
- $\vec v_1=(1,0,1)^T$, $\langle\vec v_1,\vec v_1\rangle=2$.
- $\langle\vec v_1,\vec w_2\rangle=4$ ⇒ $\vec v_2=(1,2,3)^T-2(1,0,1)^T=(-1,2,1)^T$, $\langle\vec v_2,\vec v_2\rangle=6$.
- $\langle\vec v_1,\vec w_3\rangle=4$, $\langle\vec v_2,\vec w_3\rangle=-3+4+1=2$ ⇒ $\vec v_3=(3,2,1)^T-2(1,0,1)^T-\frac13(-1,2,1)^T=\left(\frac43,\frac43,-\frac43\right)^T$.
Probe: $\vec v_1\cdot\vec v_3=\frac43-\frac43=0$, $\vec v_2\cdot\vec v_3=\frac{-4+8-4}3=0$ ✓.
:::

## Komplexes Skalarprodukt (unitärer Raum)

Auf $\C^n$: $\langle\vec v,\vec w\rangle=\sum_kv_k\overline{w_k}$. Die Konjugation sorgt dafür, dass $\langle\vec v,\vec v\rangle=\sum|v_k|^2\ge0$ reell ist. Eigenschaften: linear im ersten, **semilinear** im zweiten Argument ($\langle\vec u,\lambda\vec v\rangle=\bar\lambda\langle\vec u,\vec v\rangle$), **hermitesch**: $\langle\vec u,\vec v\rangle=\overline{\langle\vec v,\vec u\rangle}$. Induzierte Norm $\|\vec v\|=\sqrt{\sum|v_k|^2}$.

## Aufgaben

:::aufgabe 1
Berechne den Winkel zwischen $(1,1,0)^T$ und $(0,1,1)^T$.
:::loesung
$\cos\alpha=\frac{1}{\sqrt2\sqrt2}=\frac12\Rightarrow\alpha=60°$.
:::
:::

:::aufgabe 2
Für welches $t$ sind $(2,t,1)^T$ und $(t,3,-4)^T$ orthogonal?
:::loesung
$2t+3t-4=0\Rightarrow t=\frac45$.
:::
:::

:::aufgabe 3
Zerlege die Kraft $\vec F=(3,4)^T\,$N in Komponenten parallel und senkrecht zur Richtung $\vec a=(4,3)^T$.
:::loesung
$\vec e=\frac15(4,3)^T$, $\langle\vec F,\vec e\rangle=\frac{12+12}5=4{,}8$. $\vec F_\parallel=4{,}8\cdot\frac15(4,3)^T=(3{,}84;\ 2{,}88)^T$, $\vec F_\perp=(-0{,}84;\ 1{,}12)^T$. Probe: $\vec F_\perp\cdot\vec a=-3{,}36+3{,}36=0$ ✓.
:::
:::

:::aufgabe 4
Orthonormalisiere $\vec w_1=(1,1)^T$, $\vec w_2=(1,0)^T$.
:::loesung
$\vec v_1=(1,1)^T$; $\vec v_2=(1,0)^T-\frac12(1,1)^T=(\frac12,-\frac12)^T$. Normiert: $\frac1{\sqrt2}(1,1)^T$, $\frac1{\sqrt2}(1,-1)^T$.
:::
:::

## Karteikarten

:::karte
Skalarprodukt und Winkelformel?
???
$\langle\vec v,\vec w\rangle=\sum v_kw_k=\|\vec v\|\|\vec w\|\cos\alpha$
:::

:::karte
Orthogonalprojektion von $\vec v$ auf Richtung $\vec a$?
???
$\vec v_\parallel=\frac{\langle\vec v,\vec a\rangle}{\langle\vec a,\vec a\rangle}\vec a$, $\vec v_\perp=\vec v-\vec v_\parallel$.
:::

:::karte
Cauchy-Schwarz-Ungleichung?
???
$|\langle\vec u,\vec v\rangle|\le\|\vec u\|\|\vec v\|$, Gleichheit ⇔ linear abhängig.
:::

:::karte
Gram-Schmidt-Formel?
???
$\vec v_k=\vec w_k-\sum_{l<k}\frac{\langle\vec v_l,\vec w_k\rangle}{\langle\vec v_l,\vec v_l\rangle}\vec v_l$
:::

:::karte
Drei Eigenschaften einer Norm?
???
$\|x\|=0\Leftrightarrow x=0$; $\|\lambda x\|=|\lambda|\|x\|$; Dreiecksungleichung.
:::

:::karte
Was ist eine Orthonormalbasis?
???
Basis aus paarweise orthogonalen Einheitsvektoren; Koordinaten = Skalarprodukte $\langle\vec v,\vec b_k\rangle$.
:::
