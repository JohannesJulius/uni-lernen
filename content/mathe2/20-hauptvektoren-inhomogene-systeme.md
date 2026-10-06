---
title: 21.2 Nicht diagonalisierbare Systeme (Hauptvektoren), inhomogene Systeme, Doppelpendel
chapter: 21 Systeme von Differentialgleichungen
minutes: 120
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#426; Mathe 2/IM2_slides_T4_DGL_12_odesystem_doublependulum_revisited.pdf; Mathe 2/IM2_slides_T4_DGL_10_odesystem_doublependulum.pdf
---

:::ziel
- Fehlende Eigenvektoren durch **Hauptvektoren** ersetzen und daraus Lösungen bilden.
- Inhomogene Systeme $\dot{\mathbf x}=A\mathbf x+\mathbf s(t)$ mit **Variation der Konstanten** lösen.
- Zusammenhang Systeme ↔ DGL höherer Ordnung ausnutzen; Doppelpendel/Zweimassenschwinger als Anwendung.
:::

## Hauptvektoren

Hat ein $k$-facher Eigenwert $\lambda$ weniger als $k$ linear unabhängige Eigenvektoren (algebraische > geometrische Vielfachheit), ist $A$ **nicht diagonalisierbar** – man bekommt zu wenige Lösungen $e^{\lambda t}\mathbf v$.

:::def Hauptvektor (Def. 21.9)
$\mathbf w$ heißt **Hauptvektor $k$-ter Stufe** zu $\lambda$, wenn $(A-\lambda E)^k\mathbf w=\mathbf 0$ (Eigenvektoren = Stufe 1). Praktisch für Stufe 2: Löse
$$(A-\lambda E)\,\mathbf w=\mathbf v\qquad(\mathbf v\text{ Eigenvektor}).$$
:::

:::satz Hauptvektorlösungen (Satz 21.10)
$$\mathbf x(t)=e^{\lambda t}\sum_{j=0}^{k-1}\frac{t^j}{j!}(A-\lambda E)^j\mathbf w.$$
Für Stufe 2: $\mathbf x(t)=e^{\lambda t}\big(\mathbf w+t\,\mathbf v\big)$. Es gibt immer genug Hauptvektoren für ein Fundamentalsystem. (Gegenstück zu $te^{\lambda t}$ bei mehrfachen Nullstellen in Kap. 20.)
:::

:::bsp Skript Bsp. 21.11
$A=\begin{pmatrix}0&1&-1\\-2&3&-1\\-1&1&1\end{pmatrix}$, Eigenwerte $1,1,2$.
$\lambda=2$: $\mathbf v=(0,1,1)$ ⇒ $\mathbf x_3=e^{2t}(0,1,1)^T$.
$\lambda=1$: $\operatorname{rang}(A-E)=2$ ⇒ nur ein Eigenvektor $\mathbf v_1=(1,1,0)$ ⇒ $\mathbf x_1=e^t(1,1,0)^T$.
Hauptvektor: $(A-E)\mathbf w=\mathbf v_1$ ⇒ $\mathbf w=(0,0,-1)$ ⇒ $\mathbf x_2=e^t\big((0,0,-1)^T+t(1,1,0)^T\big)$.
$$\mathbf x=c_1e^t\begin{pmatrix}1\\1\\0\end{pmatrix}+c_2e^t\begin{pmatrix}t\\t\\-1\end{pmatrix}+c_3e^{2t}\begin{pmatrix}0\\1\\1\end{pmatrix}.$$
:::

## Inhomogene Systeme

$\dot{\mathbf x}=A\mathbf x+\mathbf s(t)$. **Fundamentalmatrix** $X(t)=(\mathbf x_1(t)|\ldots|\mathbf x_n(t))$ aus einem Fundamentalsystem.

:::satz Variation der Konstanten (Satz 21.12)
Löse $X(t)\,\dot{\mathbf c}(t)=\mathbf s(t)$ (LGS für $\dot c_i$), integriere:
$$\mathbf x_p=X(t)\int X^{-1}(t)\,\mathbf s(t)\,\d t,\qquad\mathbf x=X(t)\mathbf c+\mathbf x_p.$$
Funktioniert für **jede** Störung. Für Polynome/Exponentiale/Schwingungen geht oft auch ein vektorieller Ansatz vom Typ der rechten Seite schneller.
:::

:::bsp Skript Bsp. 21.13
$\dot x_1=x_1+3x_2+2\cos^2t$, $\dot x_2=3x_1+x_2+2\sin^2t$. $A=\begin{pmatrix}1&3\\3&1\end{pmatrix}$: $\lambda=4$, $(1,1)$; $\lambda=-2$, $(1,-1)$. $X=\begin{pmatrix}e^{4t}&e^{-2t}\\e^{4t}&-e^{-2t}\end{pmatrix}$.
LGS ⇒ $\dot c_1=e^{-4t}$, $\dot c_2=e^{2t}\cos2t$ ⇒ $c_1=-\frac14e^{-4t}$, $c_2=\frac14(\sin2t+\cos2t)e^{2t}$.
$$\mathbf x=c_1e^{4t}\begin{pmatrix}1\\1\end{pmatrix}+c_2e^{-2t}\begin{pmatrix}1\\-1\end{pmatrix}-\frac14\begin{pmatrix}1\\1\end{pmatrix}+\frac14(\sin2t+\cos2t)\begin{pmatrix}1\\-1\end{pmatrix}.$$
:::

## Doppelpendel und gekoppelte Systeme (Folien)

Das **Doppelpendel** (zwei Pendel aneinander) führt auf zwei gekoppelte, **nichtlineare** DGLs 2. Ordnung in $\varphi_1,\varphi_2$ ⇒ System mit 4 Zuständen; für große Auslenkungen **chaotisch** (extrem empfindlich gegenüber Anfangswerten) – nur numerisch lösbar. Für **kleine** Auslenkungen linearisiert man ($\sin\varphi\approx\varphi$, Produkte kleiner Größen vernachlässigt) und erhält $M\ddot{\boldsymbol\varphi}+K\boldsymbol\varphi=\mathbf 0$ – wie beim Zweimassenschwinger mit zwei Eigenfrequenzen und Eigenformen (gleich- und gegenphasig). Für gleiche Massen und Längen: $\omega^2=\frac gl(2\mp\sqrt2)$.

**Zweimassenschwinger mit Parametern** (Folien): $m_1=\alpha_mm$, $k_2=\alpha_kk$:
$\ddot{\mathbf y}=M^{-1}K\mathbf y=\frac km\begin{pmatrix}-\frac{1+\alpha_k}{\alpha_m}&\frac{\alpha_k}{\alpha_m}\\\alpha_k&-\alpha_k\end{pmatrix}\mathbf y$ – Ansatz $\mathbf y=\mathbf ve^{i\omega t}$ führt auf das Eigenwertproblem für $-\omega^2$. Anwendung **Fahrwerk**: Aufbau- und Radmasse, Reifen- und Aufbaufeder – zwei Eigenfrequenzen (Aufbau ~1 Hz, Rad ~10 Hz).

## Aufgaben

:::aufgabe 1 (Skript 21.1)
$\dot{\mathbf x}=\begin{pmatrix}5&1\\-4&1\end{pmatrix}\mathbf x$. (1) Lösen als System. (2) Über eine skalare DGL 2. Ordnung. (4) Warum ist $A$ nicht diagonalisierbar?
:::loesung
(1) $\lambda^2-6\lambda+9=0$ ⇒ $\lambda=3$ doppelt. $A-3E=\begin{pmatrix}2&1\\-4&-2\end{pmatrix}$ (Rang 1) ⇒ ein Eigenvektor $\mathbf v=(1,-2)$. Hauptvektor $(A-3E)\mathbf w=\mathbf v$: $2w_1+w_2=1$ ⇒ $\mathbf w=(0,1)$.
$\mathbf x=c_1e^{3t}\begin{pmatrix}1\\-2\end{pmatrix}+c_2e^{3t}\begin{pmatrix}t\\1-2t\end{pmatrix}$.
(2) $x_2=\dot x_1-5x_1$ in $\dot x_2=-4x_1+x_2$ ⇒ $\ddot x_1-6\dot x_1+9x_1=0$ ⇒ $x_1=(c_1+c_2t)e^{3t}$, $x_2=\dot x_1-5x_1$.
(4) Der doppelte Eigenwert hat nur einen Eigenvektor – erkennbar am Term $te^{3t}$, der bei Diagonalisierbarkeit nicht auftreten könnte.
:::
:::

:::aufgabe 2 (Skript 21.7)
$\ddot x+x=-\sin^2t$: als System und skalar lösen.
:::loesung
System: $\dot z_1=z_2$, $\dot z_2=-z_1-\sin^2t$, $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $\lambda=\pm i$.
Skalar schneller: $-\sin^2t=-\frac12+\frac12\cos2t$ ⇒ $x_p=-\frac12+B\cos2t$ mit $-3B=\frac12$ ⇒ $B=-\frac16$.
$x=c_1\cos t+c_2\sin t-\frac12-\frac16\cos2t$.
:::
:::

:::aufgabe 3 (Skript 21.8 B)
$A_2=\begin{pmatrix}-1&1\\0&-1\end{pmatrix}$, $\mathbf v=(1,0)$, $\mathbf w=(0,1)$. Allgemeine Lösung, Verhalten?
:::loesung
$\mathbf x=c_1e^{-t}\begin{pmatrix}1\\0\end{pmatrix}+c_2e^{-t}\begin{pmatrix}t\\1\end{pmatrix}$. Stabil (alles $\to0$), aber $x_1$ kann vorübergehend **anwachsen** ($te^{-t}$, Maximum bei $t=1$) – transientes Überschwingen trotz stabiler Eigenwerte, typisch für degenerierte (Jordan-)Dynamik.
:::
:::

:::aufgabe 4 (Skript 21.2 a)
$\ddot x_1-x_1+x_2=0$, $\ddot x_2+x_1+x_2=0$ als System 1. Ordnung.
:::loesung
$x_3=\dot x_1$, $x_4=\dot x_2$: $\dot x_1=x_3$, $\dot x_2=x_4$, $\dot x_3=x_1-x_2$, $\dot x_4=-x_1-x_2$ – lineares System mit $4\times4$-Matrix ⇒ 4-dimensionaler Lösungsraum, also vier linear unabhängige Lösungen.
:::
:::

## Karteikarten

:::karte
Wann braucht man Hauptvektoren?
???
Wenn ein mehrfacher Eigenwert zu wenige Eigenvektoren hat (A nicht diagonalisierbar).
:::

:::karte
Lösung aus einem Hauptvektor 2. Stufe?
???
$e^{\lambda t}(\mathbf w+t\mathbf v)$ mit $(A-\lambda E)\mathbf w=\mathbf v$.
:::

:::karte
Variation der Konstanten bei Systemen?
???
$\mathbf x_p=X(t)\int X^{-1}(t)\mathbf s(t)\,\d t$, X = Fundamentalmatrix.
:::

:::karte
Doppelpendel – Eigenschaften?
???
Nichtlinear, 4 Zustände, chaotisch bei großen Winkeln; linearisiert: zwei Eigenschwingungen.
:::
