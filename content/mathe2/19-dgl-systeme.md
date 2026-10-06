---
title: 21.1 Systeme von DGL – Umwandlung höherer Ordnung, Picard-Lindelöf, lineare Systeme mit Eigenwerten
chapter: 21 Systeme von Differentialgleichungen
minutes: 130
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#417; Mathe 2/IM2_slides_T4_DGL_07_odeequivsystems.pdf; Mathe 2/IM2_slides_T4_DGL_08_linODE_equivSystems.pdf; Mathe 2/IM2_slides_T4_DGL_09_odesystems.pdf; Mathe 2/IM2_slides_T4_DGL_11_odesystems_linalg.pdf; Mathe 2/IM2_slides_T4_DGL_10_odesystem_doublependulum.pdf
---

:::ziel
- Eine DGL $n$-ter Ordnung in ein **System 1. Ordnung** umwandeln (und zurück).
- Existenz und Eindeutigkeit: **Satz von Picard-Lindelöf** (Lipschitz-Bedingung).
- $\dot{\mathbf x}=A\mathbf x$ für **diagonalisierbares** $A$ mit Eigenwerten/-vektoren lösen, auch bei komplexen Eigenwerten.
- Gekoppelte Schwinger (Zweimassenschwinger, Fahrwerk) als Eigenwertproblem verstehen.
:::

## Höhere Ordnung ↔ System 1. Ordnung

$x^{(n)}=g(t,x,\dot x,\ldots,x^{(n-1)})$ – mit $z_1=x$, $z_2=\dot x$, …, $z_n=x^{(n-1)}$:
$$\dot z_1=z_2,\ \ldots,\ \dot z_{n-1}=z_n,\ \dot z_n=g(t,z_1,\ldots,z_n),\qquad\mathbf z(t_0)=(x(t_0),\dot x(t_0),\ldots)^T.$$
Funktioniert **auch nichtlinear** und ist die Grundlage jeder Numerik (Euler, RK4, `ode45` lösen nur Systeme 1. Ordnung).

:::bsp
- $\ddot x=\dot x+x$: $\dot{\mathbf z}=\begin{pmatrix}0&1\\1&1\end{pmatrix}\mathbf z$, $\mathbf z(0)=(x(0),\dot x(0))$.
- Pendel $\ddot\varphi=-\frac gl\sin\varphi$: $\dot\varphi=\omega$, $\dot\omega=-\frac gl\sin\varphi$ – nichtlinear, nicht als $A\mathbf z$ schreibbar.
- Linear allgemein: **Begleitmatrix** $A=\begin{pmatrix}0&1&&\\&\ddots&\ddots&\\&&0&1\\-a_0&-a_1&\cdots&-a_{n-1}\end{pmatrix}$ (für $a_n=1$); $\det(A-\lambda E)=\pm p(\lambda)$ – die **Eigenwerte von $A$ sind die Nullstellen des charakteristischen Polynoms**.
:::

## Existenz und Eindeutigkeit

:::satz Picard-Lindelöf (Satz 21.5)
Ist $F$ stetig und erfüllt die **Lipschitz-Bedingung** $\|F(t,\mathbf x)-F(t,\tilde{\mathbf x})\|\le L\|\mathbf x-\tilde{\mathbf x}\|$, dann hat das AWP $\dot{\mathbf x}=F(t,\mathbf x)$, $\mathbf x(t_0)=\mathbf x_0$ **genau eine** Lösung. (Hinreichend: $F$ stetig differenzierbar mit beschränkter Ableitung.)
Lineare Systeme $\dot{\mathbf x}=A\mathbf x+\mathbf s(t)$ erfüllen sie immer. Für das Pendel: Startwinkel **und** Startgeschwindigkeit legen die Bewegung eindeutig fest.
:::

:::bsp Ohne Lipschitz keine Eindeutigkeit (Skript 21.3)
$\dot x=\sqrt[3]x$, $x(0)=0$: Lösungen $x\equiv0$, $x=\big(\frac23t\big)^{3/2}$, $x=-\big(\frac23t\big)^{3/2}$, und jede Lösung, die bis zu einem beliebigen $t_1$ bei 0 bleibt und dann $\pm\big(\frac23(t-t_1)\big)^{3/2}$ folgt – unendlich viele. Grund: $\sqrt[3]x$ hat bei 0 unendliche Steigung, keine Lipschitz-Konstante.
:::

## Lineare Systeme mit konstanten Koeffizienten (homogen)

$\dot{\mathbf x}=A\mathbf x$, $A\in\mathbb R^{n\times n}$ **diagonalisierbar** ($n$ linear unabhängige Eigenvektoren $\mathbf v_i$, Eigenwerte $\lambda_i$, Mathe 1). Mit $A=TDT^{-1}$ und $\mathbf z=T^{-1}\mathbf x$ **entkoppelt** das System: $\dot z_i=\lambda_iz_i$ ⇒ $z_i=c_ie^{\lambda_it}$.

:::satz Fundamentalsystem (Satz 21.6)
$$\mathbf x(t)=c_1e^{\lambda_1t}\mathbf v_1+\ldots+c_ne^{\lambda_nt}\mathbf v_n.$$
**Komplexes Paar** $\lambda=a+ib$, $\mathbf v=\mathbf u+i\mathbf w$ (konjugiertes streichen) liefert zwei reelle Lösungen:
$$\mathbf x_1=e^{at}(\cos bt\,\mathbf u-\sin bt\,\mathbf w),\qquad\mathbf x_2=e^{at}(\sin bt\,\mathbf u+\cos bt\,\mathbf w).$$
:::

**Stabilität:** Alle $\operatorname{Re}\lambda_i<0$ ⇒ alle Lösungen → 0 (asymptotisch stabil); ein $\operatorname{Re}\lambda>0$ ⇒ instabil; komplexe Eigenwerte ⇒ Schwingungen/Spiralen.

:::bsp Skript Bsp. 21.7
$A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$: $\lambda_1=3$, $\mathbf v_1=(1,1,1)$; $\lambda_{2,3}=0$ (Kern 2-dimensional), $\mathbf v_2=(1,-1,0)$, $\mathbf v_3=(1,0,-1)$.
$\mathbf x=c_1e^{3t}(1,1,1)^T+c_2(1,-1,0)^T+c_3(1,0,-1)^T$.
:::

:::bsp Gekoppelter Zweimassenschwinger (Skript Bsp. 21.8, Folien)
Zwei gleiche Massen, drei gleiche Federn: $m\ddot x_1=-2kx_1+kx_2$, $m\ddot x_2=kx_1-2kx_2$. Mit $c=\frac km$ und $\mathbf z=(x_1,x_2,\dot x_1,\dot x_2)$: Eigenwerte $\pm i\sqrt c$, $\pm i\sqrt{3c}$.
$$\mathbf x(t)=c_1\begin{pmatrix}\cos\omega_1t\\\cos\omega_1t\end{pmatrix}+c_2\begin{pmatrix}\sin\omega_1t\\\sin\omega_1t\end{pmatrix}+c_3\begin{pmatrix}-\cos\omega_2t\\\cos\omega_2t\end{pmatrix}+c_4\begin{pmatrix}-\sin\omega_2t\\\sin\omega_2t\end{pmatrix},\quad\omega_1=\sqrt{\tfrac km},\ \omega_2=\sqrt{\tfrac{3k}m}.$$
**Eigenschwingungen:** gleichphasig (mittlere Feder unbelastet) und gegenphasig (schneller). Start $x(0)=(1,1)$, $\dot x(0)=0$ ⇒ nur Mode 1: $x_1=x_2=\cos\omega_1t$. Kürzer (Numerik, Kap. 5.2): $M\ddot{\mathbf y}=K\mathbf y$ ⇒ verallgemeinertes Eigenwertproblem. Anwendung: Fahrwerk (Rad- und Aufbaumasse), Flügel–Triebwerk.
:::

## Aufgaben

:::aufgabe 1 (Skript 21.4.1)
$\dot{\mathbf x}=\begin{pmatrix}-4&3\\-6&5\end{pmatrix}\mathbf x$.
:::loesung
$\lambda^2-\lambda-2=0$ ⇒ $\lambda=2$: $\begin{pmatrix}-6&3\\-6&3\end{pmatrix}\mathbf v=0$ ⇒ $\mathbf v=(1,2)$; $\lambda=-1$: $\mathbf v=(1,1)$.
$\mathbf x=c_1e^{2t}(1,2)^T+c_2e^{-t}(1,1)^T$ (Sattel, instabil).
:::
:::

:::aufgabe 2 (Skript 21.4.2)
$A=\begin{pmatrix}5&-6&-6\\2&-3&-4\\-2&2&3\end{pmatrix}$.
:::loesung
$\det(A-\lambda E)=0$ für $\lambda=5,1,-1$ (Spur $5$ ✓). Eigenvektoren: $\lambda=5$: $(2,1,-1)$; $\lambda=1$: $(0,1,-1)$; $\lambda=-1$: $(1,1,0)$.
$\mathbf x=c_1e^{5t}(2,1,-1)^T+c_2e^{t}(0,1,-1)^T+c_3e^{-t}(1,1,0)^T$.
:::
:::

:::aufgabe 3 (Skript 21.6)
$\dot x_1=x_1+x_2$, $\dot x_2=x_1+x_2$, $x_1(0)=x_2(0)=1$.
:::loesung
$\lambda=2$, $(1,1)$; $\lambda=0$, $(1,-1)$. $\mathbf x(0)=(1,1)$ ⇒ $c_1=1$, $c_2=0$: $x_1=x_2=e^{2t}$.
:::
:::

:::aufgabe 4 (Skript 21.8 A – laterale Flugdynamik)
$A_1=\begin{pmatrix}-1&-2\\2&-1\end{pmatrix}$, $\lambda=-1\pm2i$, $\mathbf v=(1,-i)=\mathbf u+i\mathbf w$, $\mathbf u=(1,0)$, $\mathbf w=(0,-1)$. Reelle Lösungen, Verhalten, Lösung für $\mathbf x(0)=(1,0)$ und erste Nullstelle von $x_2$.
:::loesung
$\mathbf x_1=e^{-t}(\cos2t\,\mathbf u-\sin2t\,\mathbf w)=e^{-t}(\cos2t,\ \sin2t)$, $\mathbf x_2=e^{-t}(\sin2t,\ -\cos2t)$.
Realteil $-1<0$: Spirale nach innen (stabiler Fokus), Kreisfrequenz 2.
$\mathbf x(0)=(1,0)$ ⇒ $c_1=1$, $c_2=0$: $\mathbf x=e^{-t}(\cos2t,\sin2t)$; Kursfehler $x_2=0$ wieder bei $t_1=\frac\pi2$.
:::
:::

:::aufgabe 5 (Skript 21.3)
Warum hat $\dot x=\sqrt[3]x$, $x(0)=0$ keine eindeutige Lösung? Zeige, dass $x=(\frac23t)^{3/2}$ eine Lösung ist.
:::loesung
$\dot x=\frac32\cdot\frac23(\frac23t)^{1/2}=(\frac23t)^{1/2}=\sqrt[3]{x}$ ✓. Weitere Lösungen siehe oben. $f(x)=\sqrt[3]x$ ist bei 0 nicht Lipschitz-stetig ($\frac{f(x)-f(0)}{x}=x^{-2/3}\to\infty$).
:::
:::

## Karteikarten

:::karte
Wie wird x⁽ⁿ⁾ = g(t, x, …) zum System?
???
$z_1=x,\ldots,z_n=x^{(n-1)}$: $\dot z_k=z_{k+1}$, $\dot z_n=g(t,z_1,\ldots,z_n)$.
:::

:::karte
Satz von Picard-Lindelöf?
???
F stetig und Lipschitz in x ⇒ AWP eindeutig lösbar.
:::

:::karte
Lösung von ẋ = Ax (diagonalisierbar)?
???
$\sum c_ie^{\lambda_it}\mathbf v_i$
:::

:::karte
Reelle Lösungen aus λ = a + ib, v = u + iw?
???
$e^{at}(\cos bt\,\mathbf u-\sin bt\,\mathbf w)$, $e^{at}(\sin bt\,\mathbf u+\cos bt\,\mathbf w)$
:::

:::karte
Stabilitätskriterium für ẋ = Ax?
???
Alle Realteile der Eigenwerte < 0 ⇒ asymptotisch stabil.
:::

:::karte
Eigenwerte der Begleitmatrix?
???
Die Nullstellen des charakteristischen Polynoms der DGL n-ter Ordnung.
:::
