---
title: Uneigentliche Integrale
chapter: 4 Integralrechnung
minutes: 60
sources: Mathe 1/IngMath1_slides_3_ana_16_ integration_uneigentliche_integrale.pdf
---

:::ziel
- Integrale über **unbeschränkte Intervalle** und über **unbeschränkte Integranden** als Grenzwerte definieren.
- Konvergenz/Divergenz entscheiden, Werte berechnen; Vergleichsintegrale $\int\frac1{x^p}$.
:::

## Zwei Typen

Das Riemann-Integral setzt ein **beschränktes Intervall** und eine **beschränkte Funktion** voraus. Ist eines verletzt, definiert man über Grenzwerte:

:::def Uneigentliches Integral
**Typ 1 – unendliches Intervall:**
$$\int_a^\infty f(x)\,\d x:=\lim_{R\to\infty}\int_a^Rf(x)\,\d x.$$
**Typ 2 – Integrand unbeschränkt** (z. B. Pol bei $b$):
$$\int_a^bf(x)\,\d x:=\lim_{R\nearrow b}\int_a^Rf(x)\,\d x\quad(\text{analog bei }a:\ \lim_{R\searrow a}\int_R^b).$$
Existiert der Grenzwert (endlich), heißt das Integral **konvergent**, sonst **divergent**. Bei $\int_{-\infty}^\infty$ oder mehreren kritischen Stellen: aufteilen, **jeder** Teil muss einzeln konvergieren.
:::

:::rezept
1. Kritische Stelle(n) identifizieren ($\pm\infty$, Pole, auch **innerhalb** des Intervalls!).
2. Durch eine Variable $R$ ersetzen, normal integrieren.
3. Grenzwert $R\to$ kritische Stelle bilden.
:::

## Übungsaufgaben (Aufgabe 7 aus dem Übungsblatt)

:::bsp (a) $\int_1^\infty\frac1{\sqrt x}\,\d x$
$\int_1^R x^{-1/2}\d x=[2\sqrt x]_1^R=2\sqrt R-2\to\infty$ ⇒ **divergent**.
:::

:::bsp (b) $\int_0^a\frac{x}{\sqrt{a^2-x^2}}\,\d x$ (Pol bei $x=a$)
Substitution $u=a^2-x^2$: Stammfunktion $-\sqrt{a^2-x^2}$. $\int_0^R=-\sqrt{a^2-R^2}+|a|\xrightarrow{R\nearrow a}|a|$ ⇒ **konvergent**, Wert $|a|$.
:::

:::bsp (c) $\int_1^\infty\frac1{x^3}\,\d x$
$\int_1^R x^{-3}=\left[-\frac1{2x^2}\right]_1^R=-\frac1{2R^2}+\frac12\to\frac12$ ⇒ **konvergent**, Wert $\frac12$.
:::

## Die wichtigen Vergleichsintegrale

:::satz
$$\int_1^\infty\frac{\d x}{x^p}\ \begin{cases}=\frac1{p-1},&p>1\\\text{divergent},&p\le1\end{cases}\qquad\qquad\int_0^1\frac{\d x}{x^p}\ \begin{cases}=\frac1{1-p},&p<1\\\text{divergent},&p\ge1\end{cases}$$
:::
Merke: Bei $\infty$ muss $f$ **schnell genug** abfallen ($p>1$), bei 0 darf $f$ nur **langsam genug** wachsen ($p<1$). $\frac1x$ divergiert an beiden Enden. (Vergleich: Reihe $\sum\frac1{n^p}$!)

:::bsp Weitere
- $\int_0^\infty\e^{-x}\d x=\lim[-\e^{-x}]_0^R=1$.
- $\int_{-\infty}^\infty\frac{\d x}{1+x^2}=\lim_{R\to\infty}[\arctan x]_{-R}^R=\frac\pi2-(-\frac\pi2)=\pi$.
- $\int_0^1\ln x\,\d x=\lim_{R\searrow0}[x\ln x-x]_R^1=-1-0=-1$ (mit $R\ln R\to0$).
- $\int_{-1}^1\frac{\d x}{x^2}$: Pol bei 0 **im Inneren**! $\int_0^1\frac{\d x}{x^2}$ divergiert ⇒ das ganze Integral divergiert. (Naiv $[-\frac1x]_{-1}^1=-2$ wäre falsch – ein positiver Integrand kann kein negatives Integral haben!)
- Gaußsches Fehlerintegral: $\int_{-\infty}^\infty\e^{-x^2}\d x=\sqrt\pi$ (Herleitung in Mathe 2 mit Polarkoordinaten).
:::

:::satz Vergleichskriterium
Ist $0\le f\le g$ und $\int g$ konvergent, so konvergiert $\int f$. Ist $\int f$ divergent, divergiert auch $\int g$.
:::
Beispiel: $\int_1^\infty\frac{\sin^2x}{x^2}\d x$ konvergiert, da $\frac{\sin^2x}{x^2}\le\frac1{x^2}$.

## Anwendung

- **Fluchtgeschwindigkeit:** Arbeit gegen die Gravitation bis ins Unendliche $W=\int_R^\infty\frac{GMm}{r^2}\d r=\frac{GMm}{R}$ – endlich! Daraus $v_{esc}=\sqrt{2GM/R}\approx11{,}2\,$km/s für die Erde.
- **Elektrisches Potential** einer Punktladung (Elektrotechnik): $\varphi(r)=\int_r^\infty E\,\d r$.
- Laplace-Transformation, Wahrscheinlichkeitsdichten.

## Aufgaben

:::aufgabe 1
Konvergent? (a) $\int_0^\infty x\e^{-x}\d x$ (b) $\int_2^\infty\frac{\d x}{x\ln x}$ (c) $\int_0^1\frac{\d x}{\sqrt{1-x^2}}$ (d) $\int_0^\infty\frac{\d x}{(x+1)^2}$
:::loesung
(a) $[-\e^{-x}(x+1)]_0^R\to1$ – konvergent, Wert 1. (b) $[\ln\ln x]_2^R\to\infty$ – divergent. (c) $[\arcsin x]_0^R\to\frac\pi2$ – konvergent. (d) $[-\frac1{x+1}]_0^R\to1$ – konvergent.
:::
:::

:::aufgabe 2
Berechne die Fluchtgeschwindigkeit der Erde ($G=6{,}674\cdot10^{-11}$, $M=5{,}97\cdot10^{24}\,$kg, $R=6{,}371\cdot10^6\,$m).
:::loesung
$\frac12mv^2=\frac{GMm}R\Rightarrow v=\sqrt{\frac{2GM}R}=\sqrt{\frac{2\cdot6{,}674\cdot10^{-11}\cdot5{,}97\cdot10^{24}}{6{,}371\cdot10^6}}\approx11{,}2\,$km/s.
:::
:::

## Karteikarten

:::karte
Definition $\int_a^\infty f\,\d x$?
???
$\lim_{R\to\infty}\int_a^Rf\,\d x$ (falls endlich: konvergent).
:::

:::karte
Wann konvergiert $\int_1^\infty\frac{\d x}{x^p}$, wann $\int_0^1\frac{\d x}{x^p}$?
???
Bei $\infty$: $p>1$ (Wert $\frac1{p-1}$). Bei 0: $p<1$ (Wert $\frac1{1-p}$).
:::

:::karte
Warum ist $\int_{-1}^1\frac{\d x}{x^2}\ne-2$?
???
Pol bei 0 im Inneren – das uneigentliche Integral divergiert; Hauptsatz nicht anwendbar.
:::
