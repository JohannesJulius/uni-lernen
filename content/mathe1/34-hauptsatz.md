---
title: Hauptsatz der Differential- und Integralrechnung – Stammfunktionen
chapter: 4 Integralrechnung
minutes: 80
sources: Mathe 1/IngMath1_slides_3_ana_10_integration_hauptsatz.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#219
---

:::ziel
- Die Integralfunktion $F(x)=\int_a^xf(s)\,\d s$ verstehen: stetig, differenzierbar, $F'=f$.
- **Stammfunktion** und **unbestimmtes Integral**; Stammfunktionen unterscheiden sich nur um Konstanten.
- Den **Hauptsatz** anwenden: $\int_a^bf=F(b)-F(a)$.
- Grundintegrale auswendig; Flächen zwischen Kurven berechnen.
:::

## Die Integralfunktion

:::def
Für integrierbares $f:[a,b]\to\R$ definiert man
$$F(x)=\int_a^xf(s)\,\d s\qquad(x\in[a,b])$$
– die Fläche von $a$ bis zur variablen Grenze $x$ („akkumulierte Fläche").
:::

:::satz
1. $F$ ist stetig: $F(x+h)-F(x)=\int_x^{x+h}f=f(\xi)h\to0$.
2. Ist $f$ **stetig**, so ist $F$ differenzierbar mit
$$F'(x)=f(x).$$
:::

:::beweis
$\frac{F(x+h)-F(x)}h=\frac1h\int_x^{x+h}f(s)\,\d s=f(\xi_h)$ für ein $\xi_h\in[x,x+h]$ (Mittelwertsatz). Für $h\to0$ geht $\xi_h\to x$, und wegen der Stetigkeit $f(\xi_h)\to f(x)$. ∎
:::

## Stammfunktionen

:::def Stammfunktion
$F$ heißt **Stammfunktion** von $f$, wenn $F'=f$. Die Menge aller Stammfunktionen schreibt man als **unbestimmtes Integral** $\int f(x)\,\d x=F(x)+C$.
:::

:::satz
Zwei Stammfunktionen $F,G$ von $f$ auf einem Intervall unterscheiden sich nur um eine Konstante: $(F-G)'=0\Rightarrow F-G=C$.
:::

## Der Hauptsatz

:::satz Hauptsatz der Differential- und Integralrechnung
Ist $f:[a,b]\to\R$ stetig und $F$ irgendeine Stammfunktion von $f$, so gilt
$$\int_a^bf(x)\,\d x=F(b)-F(a)=:\big[F(x)\big]_a^b=F(x)\Big|_a^b.$$
:::
*Beweis:* $F_a(x)=\int_a^xf$ ist eine Stammfunktion, also $F=F_a+C$. Dann $\int_a^bf=F_a(b)-\underbrace{F_a(a)}_{0}=(F(b)-C)-(F(a)-C)=F(b)-F(a)$. ∎

:::idee Bedeutung
Ableiten misst die **momentane Änderung**, Integrieren **summiert alle kleinen Änderungen** wieder auf. Die beiden Operationen sind invers: $\frac{\d}{\d x}\int_a^xf=f$ und $\int_a^bF'=F(b)-F(a)$. Statt Riemann-Summen muss man nur noch eine Stammfunktion finden – „Ableitungsregeln rückwärts".
:::

## Grundintegrale

| $f(x)$ | $\int f(x)\,\d x$ | | $f(x)$ | $\int f(x)\,\d x$ |
|---|---|---|---|---|
| $x^\alpha$ ($\alpha\ne-1$) | $\frac{x^{\alpha+1}}{\alpha+1}$ | | $\sin x$ | $-\cos x$ |
| $\frac1x$ | $\ln\lvert x\rvert$ | | $\cos x$ | $\sin x$ |
| $\e^x$ | $\e^x$ | | $\frac1{\cos^2x}$ | $\tan x$ |
| $\e^{ax}$ | $\frac1a\e^{ax}$ | | $\frac1{1+x^2}$ | $\arctan x$ |
| $a^x$ | $\frac{a^x}{\ln a}$ | | $\frac1{\sqrt{1-x^2}}$ | $\arcsin x$ |
| $\ln x$ | $x\ln x-x$ | | $\sinh x$, $\cosh x$ | $\cosh x$, $\sinh x$ |
| $\frac{f'(x)}{f(x)}$ | $\ln\lvert f(x)\rvert$ | | $f'(x)f(x)$ | $\frac12f(x)^2$ |

(+ C nicht vergessen.) Begründung für $\ln|x|$: Für $x>0$ ist $(\ln x)'=\frac1x$; für $x<0$ ist $(\ln(-x))'=\frac{-1}{-x}=\frac1x$ (Kettenregel).

:::achtung
- Die Integrationsvariable ist „stumm": $\int_a^bf(x)\,\d x=\int_a^bf(t)\,\d t$.
- $\int\frac1x\,\d x=\ln|x|$ gilt nur auf Intervallen, die 0 nicht enthalten. $\int_{-1}^1\frac1x\,\d x$ ist **nicht** einfach $\ln1-\ln1=0$ (uneigentlich, divergent)!
- Kontrolle: Stammfunktion ableiten muss den Integranden ergeben.
:::

## Beispiele

:::bsp
- $\int_0^2(3x^2-2x+1)\,\d x=[x^3-x^2+x]_0^2=8-4+2=6$
- $\int_0^\pi\sin x\,\d x=[-\cos x]_0^\pi=1-(-1)=2$
- $\int_1^\e\frac1x\,\d x=\ln\e-\ln1=1$
- $\int_0^1\frac1{1+x^2}\,\d x=\arctan1=\frac\pi4$
- $\frac{\d}{\d x}\int_0^{x}\e^{-t^2}\d t=\e^{-x^2}$ (ohne die Stammfunktion zu kennen!); mit Kettenregel $\frac{\d}{\d x}\int_0^{x^2}\e^{-t^2}\d t=\e^{-x^4}\cdot2x$.
:::

## Flächenberechnung

:::rezept Fläche zwischen Graph und x-Achse / zwischen zwei Kurven
1. Nullstellen von $f$ (bzw. Schnittstellen von $f$ und $g$: $f=g$) im Intervall bestimmen.
2. Intervall an diesen Stellen zerlegen.
3. Auf jedem Teilintervall $\left|\int(f-g)\,\d x\right|$ berechnen.
4. Summieren.
:::

:::bsp Fläche zwischen $y=x^2$ und $y=x$
Schnittpunkte $x^2=x\Rightarrow x=0,1$. Auf $[0,1]$ ist $x\ge x^2$: $A=\int_0^1(x-x^2)\,\d x=\frac12-\frac13=\frac16$.
:::

:::bsp Fläche von $\sin x$ auf $[0,2\pi]$
$\int_0^{2\pi}\sin x\,\d x=0$ (orientiert), aber die Fläche ist $\int_0^\pi\sin-\int_\pi^{2\pi}\sin=2+2=4$.
:::

## Aufgaben

:::aufgabe 1
Berechne (a) $\int_1^4\sqrt x\,\d x$ (b) $\int_0^{\pi/2}\cos x\,\d x$ (c) $\int_{-1}^1(\e^x-x^3)\,\d x$ (d) $\int_1^2\frac{x^2+1}{x}\,\d x$
:::loesung
(a) $[\frac23x^{3/2}]_1^4=\frac23(8-1)=\frac{14}3$. (b) $1$. (c) $\e-\e^{-1}-0=2\sinh1\approx2{,}35$ ($x^3$ ungerade). (d) $\int(x+\frac1x)=[\frac{x^2}2+\ln x]_1^2=\frac32+\ln2$.
:::
:::

:::aufgabe 2
Bestimme die Fläche, die $f(x)=x^3-x$ mit der $x$-Achse einschließt.
:::loesung
Nullstellen $-1,0,1$. $\int_{-1}^0(x^3-x)=[\frac{x^4}4-\frac{x^2}2]_{-1}^0=0-(\frac14-\frac12)=\frac14$; auf $[0,1]$: $-\frac14$. Fläche $\frac14+\frac14=\frac12$.
:::
:::

:::aufgabe 3
Verifiziere $\int\frac{\d x}{\sqrt{1-x^2}}=\arcsin x$ und $\int\frac{\d x}{1+x^2}=\arctan x$ (Skript 10.1).
:::loesung
Ableiten: $(\arcsin x)'=\frac1{\sqrt{1-x^2}}$, $(\arctan x)'=\frac1{1+x^2}$ (Regel für die Umkehrfunktion, siehe Differentiation). ✓
:::
:::

:::aufgabe 4 (Skript 10.3)
Zeige, dass $F(x)=\frac12x^2\cosh(x^2)-\frac12\sinh(x^2)$ Stammfunktion von $f(x)=x^3\sinh(x^2)$ ist, und berechne $\int_0^1f$.
:::loesung
$F'=x\cosh(x^2)+\frac12x^2\sinh(x^2)\cdot2x-\frac12\cosh(x^2)\cdot2x=x^3\sinh(x^2)$ ✓. $\int_0^1f=F(1)-F(0)=\frac12\cosh1-\frac12\sinh1-0=\frac12\e^{-1}\approx0{,}184$. $F$ ist gerade, $f$ ungerade – passt (Ableitung einer geraden Funktion ist ungerade).
:::
:::

## Karteikarten

:::karte
Hauptsatz der Differential- und Integralrechnung?
???
$\int_a^bf=F(b)-F(a)$ für jede Stammfunktion $F$ von stetigem $f$; außerdem $\frac{\d}{\d x}\int_a^xf=f(x)$.
:::

:::karte
$\int\frac1x\,\d x=\,?$
???
$\ln|x|+C$
:::

:::karte
$\int\frac{f'(x)}{f(x)}\,\d x=\,?$
???
$\ln|f(x)|+C$
:::

:::karte
$\int\ln x\,\d x=\,?$
???
$x\ln x-x+C$
:::

:::karte
Wie berechnet man die Fläche zwischen zwei Kurven?
???
Schnittstellen bestimmen, stückweise $\left|\int(f-g)\right|$ berechnen, aufsummieren.
:::
