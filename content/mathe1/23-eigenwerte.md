---
title: Eigenwerte, Eigenvektoren & Diagonalisierung
chapter: 2 Lineare Algebra
minutes: 120
sources: Mathe 1/IngMath1_slides_2_linalg_11_eigenwerte.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#185; Mathe 1 + 2 neu/skript_m1_m2.pdf#193; Mathe 1 + 2 neu/skript_m1_m2.pdf#196
---

:::ziel
- Definition und geometrische Bedeutung von Eigenwerten/-vektoren.
- **Charakteristisches Polynom** aufstellen, Eigenwerte und **Eigenräume** berechnen.
- Algebraische vs. geometrische Vielfachheit; Kriterium für **Diagonalisierbarkeit**; $A=SDS^{-1}$.
- Komplexe Eigenwerte; **symmetrische Matrizen** (reelle EW, ONB aus EV, orthogonale Diagonalisierung).
- Nützliche Kontrollen: Spur = Summe der EW, Determinante = Produkt der EW.
:::

## Motivation: Diagonalmatrizen sind einfach

Für $D=\operatorname{diag}(d_1,\dots,d_n)$ ist alles leicht:
- $\det D=d_1\cdots d_n$, $\;D^{-1}=\operatorname{diag}(\frac1{d_1},\dots,\frac1{d_n})$, $\;D^k=\operatorname{diag}(d_1^k,\dots,d_n^k)$,
- die Standardbasisvektoren werden nur **gestreckt**: $D\vec e_i=d_i\vec e_i$.

**Frage:** Gibt es für eine beliebige Matrix $A$ Richtungen, die nur gestreckt werden? Wenn ja, ist $A$ in einer passenden Basis diagonal.

:::bsp Erste Beispiele
- $A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$: $A\vec e_1=2\vec e_1$, $A\vec e_2=3\vec e_2$.
- $A=\begin{pmatrix}2&0\\0&0\end{pmatrix}$: $A\vec e_2=0\cdot\vec e_2$ (Eigenwert 0 ⇒ $A$ nicht invertierbar).
- $A=\begin{pmatrix}2&1\\0&3\end{pmatrix}$: $A\vec e_1=2\vec e_1$, aber $A\vec e_2=(1,3)^T$ ist kein Vielfaches von $\vec e_2$. Dafür $A(1,1)^T=(3,3)^T=3(1,1)^T$.
- $A=\begin{pmatrix}2&1\\0&2\end{pmatrix}$: Nur Vielfache von $\vec e_1$ werden gestreckt – sonst nichts.
:::

## Definition

:::def Eigenwert, Eigenvektor
$\lambda\in K$ ($\R$ oder $\C$) heißt **Eigenwert** von $A\in K^{n\times n}$, wenn es einen Vektor $\vec v\ne\vec0$ gibt mit
$$A\vec v=\lambda\vec v.$$
$\vec v$ heißt **Eigenvektor** zum Eigenwert $\lambda$. (Der Nullvektor ist **nie** ein Eigenvektor!)
:::

Geometrisch: $A$ ändert die Richtung von $\vec v$ nicht, sondern streckt (staucht, kehrt um) nur um den Faktor $\lambda$.

## Das charakteristische Polynom

$A\vec v=\lambda\vec v\iff(A-\lambda E)\vec v=\vec0$. Eine Lösung $\vec v\ne\vec0$ gibt es genau dann, wenn $A-\lambda E$ **nicht invertierbar** ist:

:::satz
$$\lambda\text{ ist Eigenwert von }A\iff\chi_A(\lambda):=\det(A-\lambda E)=0.$$
$\chi_A$ ist ein Polynom vom Grad $n$, das **charakteristische Polynom**. Nach dem Fundamentalsatz der Algebra hat es (in ℂ, mit Vielfachheit) genau $n$ Nullstellen.
:::

:::def Eigenraum
$\operatorname{Eig}(\lambda)=\Kern(A-\lambda E)$ – alle Eigenvektoren zu $\lambda$ plus $\vec0$. Ein Untervektorraum.
:::

Für $2\times2$: $\chi_A(\lambda)=\det\begin{pmatrix}a-\lambda&b\\c&d-\lambda\end{pmatrix}=\lambda^2-(a+d)\lambda+(ad-bc)=\lambda^2-\operatorname{Spur}(A)\lambda+\det A$, also
$$\lambda_{1,2}=\frac{a+d}2\pm\sqrt{\frac{(a-d)^2}4+bc}.$$
Reell, wenn $\frac{(a-d)^2}4+bc\ge0$, sonst komplex. Bei $b=0$ oder $c=0$ (Dreiecksmatrix) sind die EW einfach $a$ und $d$.

:::satz Kontrollen
- $\lambda_1+\dots+\lambda_n=\operatorname{Spur}A=a_{11}+\dots+a_{nn}$
- $\lambda_1\cdots\lambda_n=\det A$
- Bei **Dreiecksmatrizen** stehen die Eigenwerte auf der Diagonale.
- $A$ invertierbar $\iff0$ ist kein Eigenwert.
:::

:::rezept Eigenwerte und Eigenvektoren berechnen
1. $\chi_A(\lambda)=\det(A-\lambda E)$ aufstellen.
2. Nullstellen $\lambda_i$ bestimmen (mit Vielfachheit).
3. Für jedes $\lambda_i$: homogenes LGS $(A-\lambda_iE)\vec v=\vec0$ mit Gauß lösen ⇒ $\operatorname{Eig}(\lambda_i)$. Es **muss** eine Nullzeile entstehen (sonst Rechenfehler!).
4. Probe: $A\vec v=\lambda\vec v$.
:::

## Beispiele

:::bsp 1: $A=\begin{pmatrix}3&1\\0&1\end{pmatrix}$
$\chi_A=(3-\lambda)(1-\lambda)$ ⇒ $\lambda_1=3$, $\lambda_2=1$.
- $\operatorname{Eig}(3)=\Kern\begin{pmatrix}0&1\\0&-2\end{pmatrix}=\operatorname{span}\{(1,0)^T\}$.
- $\operatorname{Eig}(1)=\Kern\begin{pmatrix}2&1\\0&0\end{pmatrix}=\operatorname{span}\{(1,-2)^T\}$.
Mit $S=\begin{pmatrix}1&1\\0&-2\end{pmatrix}$, $S^{-1}=\frac12\begin{pmatrix}2&1\\0&-1\end{pmatrix}$ gilt $S^{-1}AS=\begin{pmatrix}3&0\\0&1\end{pmatrix}$, also $A=S\begin{pmatrix}3&0\\0&1\end{pmatrix}S^{-1}$: $A$ ist **diagonalisierbar**.
:::

:::bsp 2 (symmetrisch): $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$
$\chi_A=(2-\lambda)^2-1=0\Rightarrow\lambda=2\pm1$, also $3$ und $1$.
- $\operatorname{Eig}(3)=\Kern\begin{pmatrix}-1&1\\1&-1\end{pmatrix}=\operatorname{span}\{(1,1)^T\}$
- $\operatorname{Eig}(1)=\Kern\begin{pmatrix}1&1\\1&1\end{pmatrix}=\operatorname{span}\{(1,-1)^T\}$
Die Eigenvektoren sind **orthogonal**! Normiert: ONB $\left\{\frac{1}{\sqrt2}(1,1)^T,\frac1{\sqrt2}(1,-1)^T\right\}$. Mit der orthogonalen Matrix $T=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ ($T^{-1}=T^T$) ist $T^TAT=\operatorname{diag}(3,1)$. Kontrolle: Spur $4=3+1$ ✓, $\det3=3\cdot1$ ✓.
:::

:::bsp 3 (nicht diagonalisierbar): $A=\begin{pmatrix}3&4\\0&3\end{pmatrix}$
$\chi_A=(3-\lambda)^2$ ⇒ $\lambda=3$ doppelt (**algebraische Vielfachheit 2**).
$\operatorname{Eig}(3)=\Kern\begin{pmatrix}0&4\\0&0\end{pmatrix}=\operatorname{span}\{(1,0)^T\}$ – nur eindimensional (**geometrische Vielfachheit 1**).
Es gibt **keine Basis aus Eigenvektoren** ⇒ nicht diagonalisierbar. (Man kann $\vec v_1=(1,0)^T$ durch $\vec v_2$ mit $(A-3E)\vec v_2=\vec v_1$, z. B. $\vec v_2=(0,\frac14)^T$, ergänzen und erhält die obere Dreiecksform $\begin{pmatrix}3&1\\0&3\end{pmatrix}$ – Ausblick **Jordan-Normalform**.)
:::

:::bsp 4 (komplexe EW): $A=\begin{pmatrix}2&1\\-1&2\end{pmatrix}$
$\chi_A=(2-\lambda)^2+1=\lambda^2-4\lambda+5$ ⇒ $\lambda=2\pm\mathrm i$. Über ℝ keine Eigenvektoren (die Abbildung ist eine Drehstreckung!). Über ℂ:
$A-(2+\mathrm i)E=\begin{pmatrix}-\mathrm i&1\\-1&-\mathrm i\end{pmatrix}$ ⇒ $\operatorname{Eig}(2+\mathrm i)=\operatorname{span}\{(1,\mathrm i)^T\}$, analog $\operatorname{Eig}(2-\mathrm i)=\operatorname{span}\{(1,-\mathrm i)^T\}$.
Probe: $A(1,\mathrm i)^T=(2+\mathrm i,\ -1+2\mathrm i)^T=(2+\mathrm i)(1,\mathrm i)^T$ ✓ (denn $(2+\mathrm i)\mathrm i=-1+2\mathrm i$).
Über ℂ diagonalisierbar: $A=S\operatorname{diag}(2+\mathrm i,2-\mathrm i)S^{-1}$ mit $S=\begin{pmatrix}1&1\\\mathrm i&-\mathrm i\end{pmatrix}$.
:::

## Diagonalisierbarkeit

:::satz Kriterien
- Eigenvektoren zu **verschiedenen** Eigenwerten sind linear unabhängig.
- $A\in K^{n\times n}$ ist **diagonalisierbar** ⇔ es gibt eine Basis aus Eigenvektoren ⇔ für jeden Eigenwert gilt **geometrische = algebraische Vielfachheit** (und $\chi_A$ zerfällt über $K$ in Linearfaktoren).
- Hat $A$ $n$ **verschiedene** Eigenwerte, ist $A$ diagonalisierbar.
- Immer: $1\le$ geometrische Vielfachheit $\le$ algebraische Vielfachheit.
:::

:::rezept Diagonalisieren
1. EW $\lambda_1,\dots,\lambda_n$ und Basis aus EV $\vec v_1,\dots,\vec v_n$ bestimmen.
2. $S=(\vec v_1\ \cdots\ \vec v_n)$ (EV als Spalten, Reihenfolge wie die EW!), $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$.
3. $A=SDS^{-1}$ bzw. $D=S^{-1}AS$.
:::

Nutzen: $A^k=SD^kS^{-1}$ (z. B. $A^{100}$ in einer Zeile), Entkopplung von **Differentialgleichungssystemen** (Mathe 2!), Schwingungsanalyse (Eigenfrequenzen), Hauptspannungen (TM 2).

## Symmetrische Matrizen

:::satz Spektralsatz (reell symmetrisch)
Ist $A\in\R^{n\times n}$ symmetrisch ($A^T=A$), dann
1. sind alle Eigenwerte **reell**,
2. sind Eigenvektoren zu verschiedenen Eigenwerten **orthogonal**,
3. gibt es eine **Orthonormalbasis aus Eigenvektoren**: $A=QDQ^T$ mit orthogonalem $Q$ (**orthogonale Diagonalisierung**).
:::

Darum haben Spannungs- und Trägheitstensoren immer reelle Hauptwerte und senkrechte Hauptachsen.

:::bsp 3×3 (aus der Basiswechsel-Übung)
$A=\begin{pmatrix}5&-1&1\\1&3&-1\\2&-2&4\end{pmatrix}$ hat die EW $6,4,2$ mit EV $(1,0,1)^T$, $(1,1,0)^T$, $(0,1,1)^T$. Kontrolle: Spur $=12=6+4+2$ ✓. Probe $A(1,1,0)^T=(4,4,0)^T$ ✓, $A(0,1,1)^T=(0,2,2)^T$ ✓.
:::

## Aufgaben

:::aufgabe 1
Bestimme EW und EV von $A=\begin{pmatrix}4&1\\2&3\end{pmatrix}$ und diagonalisiere.
:::loesung
$\chi=\lambda^2-7\lambda+10=(\lambda-5)(\lambda-2)$.
$\lambda=5$: $\begin{pmatrix}-1&1\\2&-2\end{pmatrix}$ ⇒ $(1,1)^T$. $\lambda=2$: $\begin{pmatrix}2&1\\2&1\end{pmatrix}$ ⇒ $(1,-2)^T$.
$S=\begin{pmatrix}1&1\\1&-2\end{pmatrix}$, $D=\operatorname{diag}(5,2)$. Kontrolle Spur $7$, $\det10$ ✓.
:::
:::

:::aufgabe 2
Bestimme die EW von $\begin{pmatrix}2&0&0\\1&3&0\\4&5&-1\end{pmatrix}$ und die Determinante.
:::loesung
Untere Dreiecksmatrix ⇒ EW $2,3,-1$; $\det=-6$.
:::
:::

:::aufgabe 3
Ist $A=\begin{pmatrix}1&1&0\\0&1&0\\0&0&2\end{pmatrix}$ diagonalisierbar?
:::loesung
EW $1$ (alg. 2) und $2$. $\operatorname{Eig}(1)=\Kern\begin{pmatrix}0&1&0\\0&0&0\\0&0&1\end{pmatrix}=\operatorname{span}\{\vec e_1\}$ – geom. Vielfachheit 1 < 2 ⇒ **nicht** diagonalisierbar.
:::
:::

:::aufgabe 4
Berechne $A^{10}$ für $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.
:::loesung
$A=TDT^T$ mit $D=\operatorname{diag}(3,1)$, $T=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$: $A^{10}=T\operatorname{diag}(3^{10},1)T^T=\frac12\begin{pmatrix}3^{10}+1&3^{10}-1\\3^{10}-1&3^{10}+1\end{pmatrix}=\begin{pmatrix}29525&29524\\29524&29525\end{pmatrix}$.
:::
:::

:::aufgabe 5
Zeige: Ist $\lambda$ EW von $A$ mit EV $\vec v$, so ist $\lambda^2$ EW von $A^2$, und (falls $A$ invertierbar) $\frac1\lambda$ EW von $A^{-1}$.
:::loesung
$A^2\vec v=A(\lambda\vec v)=\lambda A\vec v=\lambda^2\vec v$. Aus $A\vec v=\lambda\vec v$ folgt $\vec v=\lambda A^{-1}\vec v$, also $A^{-1}\vec v=\frac1\lambda\vec v$ ($\lambda\ne0$, da $A$ invertierbar). ∎
:::
:::

## Karteikarten

:::karte
Definition Eigenwert/Eigenvektor?
???
$A\vec v=\lambda\vec v$ mit $\vec v\ne\vec0$.
:::

:::karte
Wie berechnet man Eigenwerte?
???
Nullstellen des charakteristischen Polynoms $\det(A-\lambda E)=0$.
:::

:::karte
Was ist der Eigenraum zu $\lambda$?
???
$\Kern(A-\lambda E)$
:::

:::karte
Wann ist eine Matrix diagonalisierbar?
???
Wenn es eine Basis aus Eigenvektoren gibt, d. h. geometrische = algebraische Vielfachheit für jeden EW. Hinreichend: $n$ verschiedene EW.
:::

:::karte
Was gilt für symmetrische reelle Matrizen?
???
EW reell, EV zu verschiedenen EW orthogonal, ONB aus EV: $A=QDQ^T$.
:::

:::karte
Spur und Determinante über Eigenwerte?
???
Spur = Summe der EW, Determinante = Produkt der EW.
:::

:::karte
$A=SDS^{-1}$ – was steht in $S$ und $D$?
???
$S$: Eigenvektoren als Spalten; $D$: zugehörige Eigenwerte auf der Diagonale (gleiche Reihenfolge).
:::
