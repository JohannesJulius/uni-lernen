---
title: Numerische Integration – Mittelpunkt-, Trapez- und Keplersche Fassregel (Simpson)
chapter: 4 Integralrechnung
minutes: 90
sources: Mathe 1/IngMath1_slides_3_ana_11_integration_numerik_trapezregel.pdf; Mathe 1/IngMath1_slides_3_ana_12_integration_numerik_Kepler_Fassregel.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#240
---

:::ziel
- Verstehen, warum man Integrale numerisch berechnet (keine Stammfunktion, nur Messwerte).
- **Mittelpunktregel**, **Trapezregel**, **Keplersche Fassregel/Simpson** – einfach und **summiert** – anwenden.
- Fehlerordnungen kennen und vergleichen.
- Anwendungen: Fassvolumen, Trägheitsnavigation (Drohne).
:::

## Idee: Quadraturformeln

Viele Integrale haben keine elementare Stammfunktion (z. B. $\int\e^{-x^2}\d x$, $\int\frac{\sin x}x\d x$), oder $f$ ist nur an Messpunkten bekannt. Dann nähert man
$$\int_a^bf(x)\,\d x\approx(b-a)\sum_{i=0}^n\omega_i\,f(x_i)$$
mit **Knoten** $x_i$ und **Gewichten** $\omega_i$ (**Quadraturformel**). Konstruktionsprinzip: $f$ durch ein **Interpolationspolynom** ersetzen und dieses exakt integrieren (siehe Interpolation).

## Die drei Grundregeln

:::formel Mittelpunktregel (Rechteckregel), $n=0$
$$\int_a^bf\,\d x\approx(b-a)\,f\!\left(\tfrac{a+b}2\right)$$
Exakt für Polynome vom Grad ≤ 1 (Symmetrie!). Lokaler Fehler $O(h^3)$.
:::

:::formel Trapezregel, $n=1$
$$\int_a^bf\,\d x\approx(b-a)\,\frac{f(a)+f(b)}2$$
$f$ wird durch die Sehne (lineare Interpolation) ersetzt; die Fläche ist ein Trapez = Rechteck $\min\cdot h$ + Dreieck $\frac{|f(b)-f(a)|}2h$. Exakt für Grad ≤ 1. Lokaler Fehler $O(h^3)$.
:::

:::formel Keplersche Fassregel = Simpsonregel, $n=2$
$$\int_a^bf\,\d x\approx\frac{b-a}6\left(f(a)+4f\!\left(\tfrac{a+b}2\right)+f(b)\right)$$
$f$ wird durch eine **Parabel** durch Anfang, Mitte, Ende ersetzt. Gewichte $\frac16,\frac46,\frac16$ (aus $\int L_i$). Exakt sogar für Grad ≤ **3**. Lokaler Fehler $O(h^5)$.
:::

Allgemein: Mit $n+1$ Knoten ist die Formel exakt für Polynome vom Grad ≤ $n$ und der Fehler ist $\le Ch^{n+2}$; Mittelpunkt- und Simpsonregel gewinnen durch Symmetrie eine Ordnung.

## Summierte (zusammengesetzte) Regeln

Für Genauigkeit zerlegt man $[a,b]$ in $N$ Teilintervalle der Breite $h=\frac{b-a}N$, $x_k=a+kh$, und wendet die Regel auf jedes an:

:::formel Summierte Regeln
- **Mittelpunkt:** $M_h=h\sum_{k=0}^{N-1}f\!\left(x_k+\tfrac h2\right)$ – Gesamtfehler $O(h^2)$
- **Trapez:** $T_h=h\left(\tfrac12f(x_0)+f(x_1)+\dots+f(x_{N-1})+\tfrac12f(x_N)\right)$ – Gesamtfehler $O(h^2)$
- **Simpson** ($N$ gerade): $S_h=\frac h3\big(f(x_0)+4f(x_1)+2f(x_2)+4f(x_3)+\dots+2f(x_{N-2})+4f(x_{N-1})+f(x_N)\big)$ – Gesamtfehler $O(h^4)$
:::

Halbiert man $h$, wird der Fehler bei Trapez/Mittelpunkt etwa **4-mal**, bei Simpson etwa **16-mal** kleiner.

:::bsp $\int_0^1\e^{-x^2}\d x\approx0{,}746824$
$N=2$, $h=0{,}5$: Werte $f(0)=1$, $f(0{,}5)=0{,}7788$, $f(1)=0{,}3679$.
- Trapez: $0{,}5(0{,}5+0{,}7788+0{,}1839)=0{,}7314$ (Fehler 0,015)
- Simpson ($N=2$): $\frac{0{,}5}3(1+4\cdot0{,}7788+0{,}3679)=0{,}7472$ (Fehler 0,0004)
:::

## Anwendung: Keplersche Fassregel

Kepler wollte das Volumen von Weinfässern abschätzen. Volumen eines **Rotationskörpers** mit Randkurve $r(x)$, $x\in[0,h]$:
$$V=\int_0^h\pi r(x)^2\,\d x=\int_0^hq(x)\,\d x\quad(q=\text{Querschnittsfläche}).$$
Simpson auf $q$ mit symmetrischem Fass ($r(0)=r(h)=r_{Kopf}$, $r(\frac h2)=r_{Bauch}$):
$$V\approx\frac h6\left(q(0)+4q(\tfrac h2)+q(h)\right)=\frac{\pi h}3\left(r_{Kopf}^2+2r_{Bauch}^2\right).$$

:::bsp 10-l-Weinfass
$r_{Kopf}=10\,$cm, $r_{Bauch}=12{,}5\,$cm, $h=30\,$cm.
- innerer Zylinder: $\pi\cdot10^2\cdot30=9{,}425\,$l $<V$
- äußerer Zylinder: $\pi\cdot12{,}5^2\cdot30=14{,}726\,$l $>V$
- Fassregel: $\frac{30\pi}3(100+2\cdot156{,}25)=12{,}959\,$l
Bierfass ($r_{Kopf}=10$, $r_{Bauch}=11$, $h=29$): $9{,}11<V<11{,}02$, Fassregel $V\approx10{,}386\,$l.
:::

Für die Randkurve als Parabel mit Scheitel $(\frac h2,r_1)$ durch $(0,r_0)$: $p(x)=\frac{4(r_0-r_1)}{h^2}(x-\frac h2)^2+r_1$, Fläche darunter $\int_0^hp=\frac{(r_0+2r_1)h}3$.

## Anwendung: Trägheitsnavigation (Skript Bsp. 11.19)

Eine Drohne misst mit der IMU die Beschleunigung $a(t)$. Geschwindigkeit und Position: $v(t)=v_0+\int_0^ta$, $s(t)=s_0+\int_0^tv$ – doppelte numerische Integration in Echtzeit, Schritt für Schritt mit der Trapezregel $v_{k+1}=v_k+\frac{\Delta t}2(a_k+a_{k+1})$.

:::bsp
$\Delta t=0{,}1\,$s, $a=(0;\ 1{,}2;\ 2{,}4)\,$m/s², Start in Ruhe.
$v_1=0{,}05(0+1{,}2)=0{,}06$, $v_2=0{,}06+0{,}05(1{,}2+2{,}4)=0{,}24\,$m/s.
$s_1=0{,}05(0+0{,}06)=0{,}003$, $s_2=0{,}003+0{,}05(0{,}06+0{,}24)=0{,}018\,$m.
Exakt (bei $a=12t$): $v=6t^2$ → $0{,}24$ ✓ (Trapez exakt für lineares $a$), $s=2t^3$ → $0{,}016\,$m. Fehler 2 mm = 12,5 % nach zwei Schritten! Fehler summieren sich (**INS-Drift**) – deshalb Stützung durch GPS.
:::

## Aufgaben

:::aufgabe 1
Approximiere $\int_0^1\sin(\pi x)\,\d x=\frac2\pi\approx0{,}6366$ mit der summierten Trapezregel ($N=4$) und mit Simpson ($N=4$).
:::loesung
$h=0{,}25$; $f$: $0;\ 0{,}7071;\ 1;\ 0{,}7071;\ 0$.
Trapez: $0{,}25(0+0{,}7071+1+0{,}7071+0)=0{,}6036$.
Simpson: $\frac{0{,}25}3(0+4\cdot0{,}7071+2\cdot1+4\cdot0{,}7071+0)=\frac{0{,}25}3\cdot7{,}6569=0{,}6381$.
:::
:::

:::aufgabe 2
Zeige, dass die Simpsonregel $\int_0^1x^3\d x$ exakt berechnet.
:::loesung
$\frac16(0+4\cdot\frac18+1)=\frac16\cdot\frac32=\frac14=\int_0^1x^3\d x$ ✓.
:::
:::

:::aufgabe 3
Ein Fass hat $r_{Kopf}=25\,$cm, $r_{Bauch}=30\,$cm, $h=80\,$cm. Volumen nach Kepler?
:::loesung
$V\approx\frac{80\pi}3(625+1800)=\frac{80\pi}3\cdot2425\approx203\,155\,$cm³ ≈ 203 l.
:::
:::

## Karteikarten

:::karte
Trapezregel (einfach)?
???
$\int_a^bf\approx(b-a)\frac{f(a)+f(b)}2$
:::

:::karte
Simpson-/Keplersche Fassregel?
???
$\int_a^bf\approx\frac{b-a}6\left(f(a)+4f(\frac{a+b}2)+f(b)\right)$, exakt bis Grad 3.
:::

:::karte
Fehlerordnung der summierten Trapez- und Simpsonregel?
???
Trapez $O(h^2)$, Simpson $O(h^4)$.
:::

:::karte
Volumen eines Rotationskörpers?
???
$V=\pi\int_a^br(x)^2\,\d x$
:::
