---
title: 19.2 Lineare DGL 1. Ordnung – homogene Lösung, Variation der Konstanten, Superposition
chapter: 19 Separierbare und lineare DGL
minutes: 110
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#394; Mathe 2/IM2_slides_T4_DGL_04_linearode1order.pdf; Mathe 2/IM2_wrksheet_T4_DGL_01_linearode1_varconst.pdf
---

:::ziel
- Die Struktur „allgemeine Lösung = homogene Lösung + **eine** partikuläre Lösung" verstehen (wie bei LGS).
- $\dot x+a(t)x=0$ lösen: $x_H=ce^{-A(t)}$.
- Eine partikuläre Lösung mit **Variation der Konstanten** (immer) oder mit einem Ansatz (bei konstanten Koeffizienten) bestimmen.
- Anwendungen: RC-Glied, Thermik eines Satelliten, Mischungsprobleme.
:::

## Problemstellung

$$\dot x(t)+a(t)\,x(t)=s(t)\qquad(s=\text{Störung von außen, Eingang}).$$
Homogene Gleichung ($s\equiv0$) = ungestörtes System; sie ist separierbar:
$$\frac{\d x}x=-a(t)\,\d t\ \Rightarrow\ x_H(t)=c\,e^{-A(t)},\quad A'=a,\ c\in\mathbb R.$$

:::merke Struktur linearer Probleme (wie in der linearen Algebra)
Lösungsmenge der homogenen Gleichung = **Vektorraum** $L_H$ (hier 1-dimensional). Lösungsmenge der inhomogenen Gleichung = **verschobener** Vektorraum:
$$L=x_p+L_H=\{x_p+x_H\mid x_H\in L_H\}.$$
Man braucht also **irgendeine** Lösung $x_p$ der inhomogenen Gleichung. (Analog: $A\mathbf x=\mathbf b$ – Lösung = spezielle Lösung + Kern.)
:::

## Variation der Konstanten

Ansatz: Konstante in $x_H$ zeitabhängig machen, $x_p=c(t)e^{-A(t)}$. Einsetzen:
$$\dot ce^{-A}-c\,a\,e^{-A}+a\,c\,e^{-A}=s\ \Rightarrow\ \dot c=s(t)e^{A(t)}\ \Rightarrow\ c(t)=\int s(t)e^{A(t)}\,\d t.$$

:::satz Allgemeine Lösung
$$x(t)=c\,e^{-A(t)}+e^{-A(t)}\int s(t)\,e^{A(t)}\,\d t,\qquad A(t)=\int a(t)\,\d t.$$
Die Terme mit $a$ heben sich beim Einsetzen **immer** weg – gute Rechenkontrolle.
:::

:::rezept Lineare DGL 1. Ordnung
1. Auf Normalform bringen: $\dot x+a(t)x=s(t)$ (Koeffizient von $\dot x$ = 1!).
2. $A(t)=\int a\,\d t$, $x_H=ce^{-A}$.
3. $\dot c=se^{A}$ integrieren ⇒ $x_p$.
4. $x=x_H+x_p$, Anfangswert ⇒ $c$.
Bei **konstantem** $a$ und $s$ = Polynom/Exponential/Sinus geht es schneller mit einem **Ansatz vom Typ der rechten Seite** (Kap. 20).
:::

:::bsp Skript Bsp. 19.5
$\dot x-\frac1tx=3t$: $a=-\frac1t$, $A=-\ln|t|$, $x_H=c\,|t|\to ct$.
$x_p=c(t)t$: $\dot ct+c-c=3t$ ⇒ $\dot c=3$ ⇒ $c=3t$ ⇒ $x_p=3t^2$.
$x=ct+3t^2$; mit $x(1)=2$: $c=-1$, $x=3t^2-t$.
:::

:::bsp RC-Glied (vgl. E-Technik, Schaltvorgänge)
$RC\dot u+u=U_0$ ⇒ $\dot u+\frac1{RC}u=\frac{U_0}{RC}$: $x_H=ce^{-t/RC}$; Ansatz $x_p=$ const $=U_0$ ⇒ $u=U_0+ce^{-t/RC}$, mit $u(0)=0$: $u=U_0(1-e^{-t/\tau})$ – genau die Universalformel aus der Elektrotechnik.
:::

**Superpositionsprinzip:** Ist $x_1$ Lösung zu $s_1$ und $x_2$ zu $s_2$, dann löst $\alpha x_1+\beta x_2$ die Gleichung mit $\alpha s_1+\beta s_2$. Für homogene Gleichungen sind Linearkombinationen von Lösungen wieder Lösungen; für inhomogene **nicht** (die Summe zweier Lösungen löst die Gleichung mit $2s$).

## Aufgaben

:::aufgabe 1 (Skript 19.3)
Allgemeine Lösung: (1) $\dot x+\sin t\,x=0$; (2) $\dot x+2x=0$; (3) $\dot x+2x=2t+1$; (4) $\dot x+2x=3\cos t$; (5) $\dot x+2x=e^{2t}$.
:::loesung
(1) $A=-\cos t$ ⇒ $x=ce^{\cos t}$. (2) $x=ce^{-2t}$.
(3) Ansatz $x_p=\alpha t+\beta$: $\alpha+2\alpha t+2\beta=2t+1$ ⇒ $\alpha=1$, $\beta=0$ ⇒ $x=t+ce^{-2t}$.
(4) $x_p=A\cos t+B\sin t$: $(B+2A)\cos t+(2B-A)\sin t=3\cos t$ ⇒ $A=\frac65$, $B=\frac35$ ⇒ $x=\frac65\cos t+\frac35\sin t+ce^{-2t}$.
(5) $x_p=ke^{2t}$: $4k=1$ ⇒ $x=\frac14e^{2t}+ce^{-2t}$.
(Alle auch per Variation der Konstanten lösbar, z. B. (3): $\dot c=(2t+1)e^{2t}$ ⇒ $c=te^{2t}$ ⇒ $x_p=t$.)
:::
:::

:::aufgabe 2 (Skript 19.4.2)
$\dot x+2tx=4t$, $x(1)=2$.
:::loesung
$x_H=ce^{-t^2}$; $x_p=2$ (konstanter Ansatz: $0+4t=4t$ ✓) ⇒ $x=2+ce^{-t^2}$; $x(1)=2$ ⇒ $c=0$ ⇒ $x\equiv2$ (für alle $t$ definiert).
:::
:::

:::aufgabe 3 (Skript 19.2)
Zeige das Superpositionsprinzip für $\dot x+a(t)x=0$ und erkläre, warum es für inhomogene Gleichungen nicht gilt.
:::loesung
$(\alpha x_1+\beta x_2)^\cdot+a(\alpha x_1+\beta x_2)=\alpha(\dot x_1+ax_1)+\beta(\dot x_2+ax_2)=0$. Inhomogen: rechte Seite wäre $(\alpha+\beta)s\ne s$ im Allgemeinen.
:::
:::

:::aufgabe 4 (Skript 19.5 – Thermomanagement eines CubeSats)
$C_{th}\dot T+G_{th}T=P_{in}(t)$, $\tau=\frac{C_{th}}{G_{th}}$. (1) Schattenphase ($P_{in}=0$): Lösung, Bedeutung von $\tau$. (2) Sonnenphase ($P_{in}=P_0$): allgemeine Lösung und $T_\infty$. (3) Eclipse 35 min, $T_{start}=293\,$K: $T$ am Ende bei $\tau=25\,$min? Mindest-$\tau$, damit $T\ge263\,$K bleibt?
:::loesung
(1) $T=T_{start}e^{-t/\tau}$; nach $\Delta t=\tau$ ist $T$ auf $\frac1e\approx36{,}8\,$% gefallen – $\tau$ = thermische Trägheit.
(2) $T_p=\tau s_0=\frac{P_0}{G_{th}}$ (konstanter Ansatz) ⇒ $T=\frac{P_0}{G_{th}}+\big(T(0)-\frac{P_0}{G_{th}}\big)e^{-t/\tau}\to T_\infty=\frac{P_0}{G_{th}}$ unabhängig vom Start.
(3) $293e^{-35/25}=293\cdot0{,}247=72\,$K. Bedingung $293e^{-35/\tau}\ge263$ ⇒ $\tau\ge\frac{35}{\ln(293/263)}=\frac{35}{0{,}108}\approx324\,$min ≈ 5,4 h – erreichbar durch MLI (kleines $G_{th}$) oder PCM (großes $C_{th}$).
:::
:::

## Karteikarten

:::karte
Lösung von $\dot x+a(t)x=0$?
???
$x_H=c\,e^{-A(t)}$ mit $A'=a$.
:::

:::karte
Variation der Konstanten (Formel)?
???
$x_p=e^{-A}\int s\,e^{A}\,\d t$
:::

:::karte
Struktur der Lösungsmenge einer linearen inhomogenen DGL?
???
$x=x_p+x_H$ – eine partikuläre Lösung plus alle homogenen Lösungen.
:::

:::karte
Wann gilt das Superpositionsprinzip?
???
Für lineare DGL: Lösungen zu s₁, s₂ addieren sich zur Lösung für s₁ + s₂; homogen: Linearkombinationen sind Lösungen.
:::
