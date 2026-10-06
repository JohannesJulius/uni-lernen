---
title: 16.1 Kurvenintegrale – skalar (Masse, Zaunfläche) und vektoriell (Arbeit)
chapter: 16 Kurvenintegrale
minutes: 100
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#345; Mathe 2/IM2_slides_T3_vectorcalc_04_curveintegrals.pdf
---

:::ziel
- Skalare und vektorielle Kurvenintegrale definieren, deuten und berechnen.
- Rechenregeln: Linearität, Zerlegung in Teilkurven, Orientierungsumkehr.
- Physikalische Bedeutung: Gesamtmasse/-ladung, Bogenlänge, **Arbeit** einer Kraft.
:::

## Definition

Integriert wird **entlang einer Kurve** $\gamma:[a,b]\to\mathbb R^n$ durch den Definitionsbereich eines Feldes.

:::def Kurvenintegrale (Def. 16.1)
- **Skalares** Kurvenintegral eines Skalarfelds $f$:
$$\int_\gamma f\,\d s=\int_a^bf(\gamma(t))\,\|\dot\gamma(t)\|\,\d t.$$
- **Vektorielles** Kurvenintegral eines Vektorfelds $\mathbf v$:
$$\int_\gamma\mathbf v\cdot\d\mathbf s=\int_a^b\mathbf v(\gamma(t))\cdot\dot\gamma(t)\,\d t.$$
- Geschlossene Kurve ($\gamma(a)=\gamma(b)$): $\oint_\gamma$.
:::

:::rezept Kurvenintegral berechnen
1. Kurve parametrisieren (falls nicht gegeben) und $\dot\gamma$ bilden.
2. Feld **auf der Kurve** auswerten: $x\to x(t)$, $y\to y(t)$, …
3. Skalar: mit $\|\dot\gamma\|$ multiplizieren; vektoriell: Skalarprodukt mit $\dot\gamma$.
4. Gewöhnliches Integral über $t$ berechnen.
:::

**Deutungen:**
- skalar: Masse eines Drahts mit Dichte $f$, Gesamtladung; $f\equiv1$ ⇒ **Bogenlänge**; für $f\ge0$ in 2D die „**Zaunfläche**" zwischen Kurve und Graph von $f$.
- vektoriell: **Arbeit** $W=\int\mathbf F\cdot\d\mathbf s$ einer Kraft längs des Weges – nur die Komponente in Bewegungsrichtung zählt. In der Strömungslehre: Zirkulation.

:::satz Rechenregeln (Satz 16.3)
- Linear in $f$ bzw. $\mathbf v$.
- Additiv bei zusammengesetzten Kurven $\gamma=\gamma_1+\ldots+\gamma_m$ (Streckenzüge!).
- Orientierungsumkehr $-\gamma$: skalares Integral **unverändert**, vektorielles Integral **wechselt das Vorzeichen**.
- Unabhängig von der Parametrisierung (bei gleicher Orientierung).
:::

## Beispiele (Skript)

:::bsp Einheitskreis $\gamma=(\cos t,\sin t)$, $\dot\gamma=(-\sin t,\cos t)$, $\|\dot\gamma\|=1$
(a) $f=xy^2$: $\oint f\,\d s=\int_0^{2\pi}\cos t\sin^2t\,\d t=\big[\frac13\sin^3t\big]_0^{2\pi}=0$ (Symmetrie: $f$ ungerade in $x$).
(b) $\mathbf v=(-y,x^2)$: $\oint\mathbf v\cdot\d\mathbf s=\int_0^{2\pi}(\sin^2t+\cos^3t)\,\d t=\pi+0=\pi\ne0$ – auf dem geschlossenen Weg wird Arbeit verrichtet (das Feld ist **nicht** konservativ, → nächste Lektion).
(c) $f=1$: $2\pi$ = Umfang (Zaunfläche Höhe 1 = Zylindermantel).
:::

## Aufgaben

:::aufgabe 1 (Skript 16.1)
(a) $\gamma(t)=(\cos t,\sin t,t)$, $t\in[0,2\pi]$: $\int_\gamma(x^2+yz)\,\d s$. (b) Strecke $(0,0)\to(1,1)$: $\int\mathbf v\cdot\d\mathbf s$ für $\mathbf v=(2y,e^x)$.
:::loesung
(a) $\|\dot\gamma\|=\sqrt2$; $\int_0^{2\pi}(\cos^2t+t\sin t)\sqrt2\,\d t=\sqrt2(\pi-2\pi)=-\sqrt2\,\pi$ (mit $\int_0^{2\pi}t\sin t\,\d t=[-t\cos t+\sin t]_0^{2\pi}=-2\pi$).
(b) $\gamma=(t,t)$, $\dot\gamma=(1,1)$: $\int_0^1(2t+e^t)\,\d t=1+e-1=e$.
:::
:::

:::aufgabe 2 (Skript 16.2)
$\mathbf v=(x^2-y,\ x+y^2)$ und $\mathbf w=(x+y^2,\ 2xy)$, von $A(0,1)$ nach $B(1,2)$: (a) Gerade, (b) über $(1,1)$, (c) Parabel $y=x^2+1$.
:::loesung
$\mathbf v$: (a) $\gamma=(t,1+t)$: $\int_0^1(2t^2+2t)\,\d t=\frac53$. (b) $(t,1)$: $\int_0^1(t^2-1)\d t=-\frac23$; dann $(1,1+t)$: $\int_0^1(1+(1+t)^2)\d t=\frac{10}3$ ⇒ $\frac83$. (c) $(t,t^2+1)$, $\dot\gamma=(1,2t)$: $\int_0^1(2t^5+4t^3+2t^2+2t-1)\d t=\frac13+1+\frac23+1-1=2$. **Wegabhängig.**
$\mathbf w$: in allen drei Fällen $\frac92$ – es ist ein Gradientenfeld mit Stammfunktion $\frac{x^2}2+xy^2$: $f(1,2)-f(0,1)=\frac12+4=\frac92$.
:::
:::

:::aufgabe 3 (Skript 16.4 – Arbeit im Zug)
Ein Zug beschleunigt in 10 s gleichmäßig von 0 auf 120 km/h. Welche Arbeit verrichtest du (75 kg), wenn du dabei 10 m in Fahrtrichtung gehst?
:::loesung
$a=\frac{33{,}3}{10}=3{,}33\,$m/s². Im Zug wirkt die Trägheitskraft $ma=250\,$N nach hinten (konstant) – ein konstantes Kraftfeld, also wegunabhängig: $W=F\cdot s=250\cdot10=2500\,$J, egal wie schnell man geht.
:::
:::

:::aufgabe 4 (Skript 16.5)
Helix $\gamma(t)=(\cos2\pi t,\sin2\pi t,t)$, $t\in[0,1]$: Länge und $\int\mathbf v\cdot\d\mathbf s$ für $\mathbf v=\big(-\frac y{x^2+y^2},\frac x{x^2+y^2},2\big)$.
:::loesung
$\dot\gamma=(-2\pi\sin,2\pi\cos,1)$, $L=\sqrt{4\pi^2+1}\approx6{,}36$. $\mathbf v(\gamma)\cdot\dot\gamma=2\pi\sin^2+2\pi\cos^2+2=2\pi+2$ ⇒ Integral $2\pi+2$.
:::
:::

## Karteikarten

:::karte
Skalares Kurvenintegral?
???
$\int_\gamma f\,\d s=\int_a^bf(\gamma(t))\|\dot\gamma(t)\|\,\d t$
:::

:::karte
Vektorielles Kurvenintegral?
???
$\int_\gamma\mathbf v\cdot\d\mathbf s=\int_a^b\mathbf v(\gamma(t))\cdot\dot\gamma(t)\,\d t$
:::

:::karte
Was passiert bei Umkehr der Orientierung?
???
Skalar: unverändert. Vektoriell: Vorzeichenwechsel.
:::

:::karte
Physikalische Bedeutung des vektoriellen Kurvenintegrals?
???
Arbeit der Kraft entlang des Weges (bzw. Zirkulation einer Strömung).
:::
