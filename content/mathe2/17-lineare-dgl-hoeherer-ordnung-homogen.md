---
title: 20.1 Lineare DGL mit konstanten Koeffizienten – homogen, charakteristisches Polynom, Fundamentalsystem, Feder-Masse-Dämpfer
chapter: 20 Lineare DGL höherer Ordnung
minutes: 120
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#403; Mathe 2/IM2_slides_T4_DGL_05_inearode2order.pdf; Mathe 2/IM2_slides_T4_DGL_06_ode2ndorder_pendulum.pdf
---

:::ziel
- Lineare DGL $n$-ter Ordnung mit konstanten Koeffizienten mit dem Ansatz $e^{\lambda t}$ lösen.
- Fälle: einfache reelle, **mehrfache** reelle, **komplexe** Nullstellen des charakteristischen Polynoms.
- **Fundamentalsystem** und **Wronski-Determinante**.
- Das **Feder-Masse-Dämpfer-System** (Schwingfall, aperiodischer Grenzfall, Kriechfall) beherrschen – Grundlage für Fahrwerke, Schwingungstechnik, RLC-Kreise.
:::

## Problem und Struktur

$$a_nx^{(n)}+a_{n-1}x^{(n-1)}+\ldots+a_1\dot x+a_0x=s(t),\qquad a_i\in\mathbb R,\ a_n\ne0.$$
:::satz (Satz 20.4)
Die Lösungen der **homogenen** Gleichung bilden einen **$n$-dimensionalen Vektorraum**. Eine Basis $x_1,\ldots,x_n$ heißt **Fundamentalsystem**; allgemeine Lösung $x=c_1x_1+\ldots+c_nx_n$. $n$ Anfangswerte legen die $c_i$ fest.
:::

## Ansatz $x=e^{\lambda t}$

Einsetzen und durch $e^{\lambda t}\ne0$ teilen ⇒ **charakteristische Gleichung**
$$p(\lambda)=a_n\lambda^n+\ldots+a_1\lambda+a_0=0.$$
Nach dem Fundamentalsatz der Algebra (Mathe 1) hat $p$ genau $n$ Nullstellen (mit Vielfachheit, komplex).

:::rezept Fundamentalsystem aus den Nullstellen
| Nullstelle | Beitrag zum Fundamentalsystem |
|---|---|
| reell, einfach | $e^{\lambda t}$ |
| reell, $m$-fach | $e^{\lambda t},\ te^{\lambda t},\ \ldots,\ t^{m-1}e^{\lambda t}$ |
| komplexes Paar $a\pm ib$ (einfach) | $e^{at}\cos bt,\ e^{at}\sin bt$ (konjugierte Nullstelle streichen) |
| komplexes Paar, $m$-fach | zusätzlich mit $t,\ldots,t^{m-1}$ multipliziert |
Insgesamt immer genau $n$ Funktionen.
:::

*Warum Real- und Imaginärteil?* $e^{(a+ib)t}=e^{at}(\cos bt+i\sin bt)$ ist eine komplexe Lösung; wegen der reellen Koeffizienten sind Real- und Imaginärteil einzeln Lösungen (Euler-Formel aus Mathe 1).

:::bsp Skript
- $\ddot x+5\dot x+6x=0$: $(\lambda+2)(\lambda+3)=0$ ⇒ $x=c_1e^{-2t}+c_2e^{-3t}$ (klingt ab).
- $x^{(4)}+2x^{(3)}-2\dot x-x=0$: $p=(\lambda-1)(\lambda+1)^3$ ⇒ $x=c_1e^t+(c_2+c_3t+c_4t^2)e^{-t}$.
- $\ddot x+4\dot x+13x=0$: $\lambda=-2\pm3i$ ⇒ $x=e^{-2t}(c_1\cos3t+c_2\sin3t)$ – Realteil −2 = Dämpfung, Imaginärteil 3 = Kreisfrequenz.
:::

:::def Wronski-Determinante (Def. 20.8, Satz 20.9)
$$W(t)=\det\begin{pmatrix}x_1&\cdots&x_n\\\dot x_1&\cdots&\dot x_n\\\vdots&&\vdots\\x_1^{(n-1)}&\cdots&x_n^{(n-1)}\end{pmatrix}.$$
Lösungen bilden ein Fundamentalsystem ⇔ $W(t)\ne0$ für **ein** $t$ (dann für alle). Beispiel $\cos t,\sin t$ für $\ddot x+x=0$: $W=\cos^2t+\sin^2t=1$.
:::

## Feder-Masse-Dämpfer-System

$m\ddot x+d\dot x+cx=0$ ⇒ Standardform
$$\ddot x+2\delta\dot x+\omega_0^2x=0,\qquad\delta=\frac d{2m}\ (\text{Abklingkoeffizient}),\quad\omega_0=\sqrt{\frac cm}\ (\text{Eigenkreisfrequenz}).$$
Mit dem **Lehrschen Dämpfungsmaß** $D=\frac\delta{\omega_0}=\frac d{2\sqrt{mc}}$: $\ddot x+2D\omega_0\dot x+\omega_0^2x=0$, $\lambda_{1,2}=-\delta\pm\sqrt{\delta^2-\omega_0^2}=\omega_0\big(-D\pm\sqrt{D^2-1}\big)$.

| Fall | Bedingung | Lösung | Verhalten |
|---|---|---|---|
| **Schwingfall** (unterdämpft) | $D<1$ | $e^{-\delta t}(c_1\cos\omega_dt+c_2\sin\omega_dt)$, $\omega_d=\sqrt{\omega_0^2-\delta^2}$ | abklingende Schwingung, Hüllkurve $\pm e^{-\delta t}$ |
| **aperiodischer Grenzfall** | $D=1$ | $(c_1+c_2t)e^{-\delta t}$ | schnellstmögliche Rückkehr ohne Überschwingen (Stoßdämpfer, Zeigerinstrumente) |
| **Kriechfall** (überdämpft) | $D>1$ | $c_1e^{\lambda_1t}+c_2e^{\lambda_2t}$, $\lambda_{1,2}<0$ | zähes Kriechen (Türschließer) |
| ungedämpft | $D=0$ | $c_1\cos\omega_0t+c_2\sin\omega_0t$ | Dauerschwingung |

Dasselbe gilt für den **RLC-Reihenschwingkreis** $L\ddot q+R\dot q+\frac1Cq=0$ ($\omega_0=\frac1{\sqrt{LC}}$, $\delta=\frac R{2L}$).

## Aufgaben

:::aufgabe 1 (Skript 20.1)
(1) $\ddot x-5\dot x+6x=0$; (2) $\ddot x+4\dot x+4x=0$; (3) $\ddot x+2\dot x+5x=0$; (4) $\ddot x+9x=0$.
:::loesung
(1) $\lambda=2,3$: $c_1e^{2t}+c_2e^{3t}$. (2) $\lambda=-2$ doppelt: $(c_1+c_2t)e^{-2t}$. (3) $\lambda=-1\pm2i$: $e^{-t}(c_1\cos2t+c_2\sin2t)$. (4) $\lambda=\pm3i$: $c_1\cos3t+c_2\sin3t$.
:::
:::

:::aufgabe 2 (Skript 20.2)
(1) $\ddot x+4\dot x+13x=0$, $x(0)=2$, $\dot x(0)=0$. (2) $\ddot x-4\dot x+4x=0$, $x(0)=1$, $\dot x(0)=3$.
:::loesung
(1) $x=e^{-2t}(c_1\cos3t+c_2\sin3t)$; $c_1=2$; $\dot x(0)=-2c_1+3c_2=0$ ⇒ $c_2=\frac43$: $x=e^{-2t}(2\cos3t+\frac43\sin3t)$ – gedämpfte Schwingung.
(2) $x=(c_1+c_2t)e^{2t}$; $c_1=1$, $2c_1+c_2=3$ ⇒ $c_2=1$: $x=(1+t)e^{2t}$ – wächst unbegrenzt (instabil, „negative Dämpfung").
:::
:::

:::aufgabe 3 (Skript 20.4)
$x^{(4)}-16x=0$.
:::loesung
$\lambda^4-16=(\lambda^2-4)(\lambda^2+4)$ ⇒ $\lambda=\pm2,\pm2i$: $x=c_1e^{2t}+c_2e^{-2t}+c_3\cos2t+c_4\sin2t$ (Biegeschwingungen eines Balkens führen auf genau solche Gleichungen).
:::
:::

:::aufgabe 4 (Skript 20.5 – Landestoßdämpfer)
$\ddot z+2D\omega_0\dot z+\omega_0^2z=0$. (1) Nullstellen in Abhängigkeit von $D$; warum Schwingung nur für $D<1$? (2) Warum ist $D\gg1$ gefährlich bei mehreren Bodenwellen? (3) Resonanzbedingung bei Anregung $F_0\cos\Omega t$, $D\to0$.
:::loesung
(1) $\lambda=\omega_0(-D\pm\sqrt{D^2-1})$. Für $D<1$ ist die Wurzel imaginär ⇒ $e^{-D\omega_0t}(\cos\omega_dt,\sin\omega_dt)$; für $D\ge1$ reell ⇒ reine Exponentialfunktionen, keine Schwingung.
(2) Im Kriechfall ist $\lambda_1=\omega_0(-D+\sqrt{D^2-1})\approx-\frac{\omega_0}{2D}$ betragsmäßig sehr klein ⇒ sehr langsames Abklingen; das Federbein ist bei der nächsten Welle noch eingefedert, die Stöße addieren sich („Verhärten"). Deshalb $D\approx0{,}6$–$0{,}8$: schnell und fast ohne Nachschwingen.
(3) Resonanz für $\Omega=\omega_0$; ohne Dämpfung wächst die partikuläre Lösung linear in $t$ ($z_p\propto t\sin\omega_0t$, → nächste Lektion), mit kleiner Dämpfung wird die Amplitude $\approx\frac{F_0}{2Dm\omega_0^2}$ sehr groß ⇒ Überlastung der Struktur.
:::
:::

## Karteikarten

:::karte
Charakteristische Gleichung?
???
Ansatz $e^{\lambda t}$ ⇒ $a_n\lambda^n+\ldots+a_0=0$.
:::

:::karte
Beitrag einer doppelten reellen Nullstelle λ?
???
$e^{\lambda t}$ und $te^{\lambda t}$
:::

:::karte
Beitrag eines komplexen Paars a ± ib?
???
$e^{at}\cos bt$, $e^{at}\sin bt$
:::

:::karte
Die drei Fälle des gedämpften Schwingers?
???
D < 1 Schwingfall, D = 1 aperiodischer Grenzfall, D > 1 Kriechfall.
:::

:::karte
δ, ω₀, D beim Feder-Masse-Dämpfer?
???
δ = d/(2m), ω₀ = √(c/m), D = δ/ω₀ = d/(2√(mc)).
:::

:::karte
Wozu die Wronski-Determinante?
???
Prüft lineare Unabhängigkeit von Lösungen: Fundamentalsystem ⇔ W ≠ 0.
:::
