---
title: Das Riemann-Integral – Definition, Eigenschaften, Mittelwertsatz (+ Ausblick Lebesgue)
chapter: 4 Integralrechnung
minutes: 90
sources: Mathe 1/IngMath1_slides_3_ana_09_integration_integral_eigenschaften.pdf; Mathe 1/IngMath1_slides_3_ana_09_integration_integral_lebesgue_EXTRA.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#215
---

:::ziel
- Das Integral als **orientierten Flächeninhalt** und als **akkumulierte Änderung** verstehen.
- Ober-/Untersummen und **Riemann-Summen**; Integral als Grenzwert.
- Rechenregeln: Linearität, Additivität, Grenzen vertauschen, Monotonie.
- **Mittelwertsatz der Integralrechnung**, Integralmittelwert.
- (Extra) Grundidee des Lebesgue-Integrals.
:::

## Motivation

- **Geometrie:** Fläche unter einem Graphen, Volumen, Masse, Schwerpunkt (TM 1!).
- **Physik:** Aus der Geschwindigkeit $v(t)$ den Weg berechnen: $s(t)=\int_a^tv(\tau)\,\d\tau$. Allgemein: Integriert man eine **Änderungsrate**, erhält man die **Gesamtänderung**.
- **Technik:** Lichtintensität auf Sensorpixeln, Laserleistung in der Arbeitsebene, Gesamtimpuls eines Triebwerks $I=\int_0^{t_{end}}F(t)\,\d t$ (bei konstantem Schub $100\,$kN über $10\,$s: $I=1000\,$kNs).

## Annäherung durch Treppenfunktionen

:::def Treppenfunktion
$\varphi:[a,b]\to\R$ ist eine Treppenfunktion, wenn es eine Zerlegung $a=x_0<x_1<\dots<x_n=b$ gibt, sodass $\varphi$ auf jedem $(x_{k-1},x_k)$ konstant ist. Ihr Integral ist einfach die Summe der Rechteckflächen.
:::

Für stetiges $f$ zerlegt man $[a,b]$ (z. B. äquidistant, Breite $\Delta x=\frac{b-a}n$) und approximiert
- von unten mit dem Minimum auf jedem Teilintervall: **Untersumme** $U_n=\sum\min_{[x_{k-1},x_k]}f\cdot\Delta x$,
- von oben mit dem Maximum: **Obersumme** $O_n=\sum\max f\cdot\Delta x$.

Es gilt $U_n\le$ Fläche $\le O_n$.

## Riemann-Summen und Integral

:::def Riemann-Summe, Riemann-Integral
Zu einer Zerlegung $a=x_0<\dots<x_n=b$ und Zwischenstellen $\xi_k\in[x_{k-1},x_k]$ heißt
$$S=\sum_{k=1}^nf(\xi_k)(x_k-x_{k-1})$$
**Riemann-Summe**. $f$ heißt **(Riemann-)integrierbar**, wenn diese Summen bei immer feiner werdender Zerlegung (max. Breite $\to0$) **unabhängig von der Wahl der $\xi_k$** gegen denselben Grenzwert konvergieren:
$$\int_a^bf(x)\,\d x=\lim_{\Delta x\to0}\sum_kf(\xi_k)\Delta x_k.$$
:::

:::satz
Stetige (und stückweise stetige, beschränkte) Funktionen auf $[a,b]$ sind integrierbar. Für sie konvergieren Unter- und Obersumme gegen dasselbe Integral.
:::

:::merke Bedeutung des Integrals
$\int_a^bf(x)\,\d x$ ist der **orientierte** Flächeninhalt zwischen Graph und $x$-Achse: Flächen **oberhalb** zählen **positiv**, unterhalb **negativ**. Die „echte" Fläche erhält man mit $\int_a^b|f(x)|\,\d x$ (Nullstellen beachten, stückweise integrieren!).
:::

:::bsp Integrale aus der Definition (Skript)
- $f(x)=c$: Teleskopsumme $\sum c(x_k-x_{k-1})=c(b-a)$ ⇒ $\int_a^bc\,\d x=c(b-a)$ (Rechteck).
- $f(x)=x$, äquidistant, rechte Randpunkte $\xi_k=a+k\frac{b-a}n$:
$$S_n=\sum_{k=1}^n\left(a+k\tfrac{b-a}n\right)\tfrac{b-a}n=a(b-a)+\tfrac{(b-a)^2}{n^2}\cdot\tfrac{n(n+1)}2\xrightarrow{n\to\infty}a(b-a)+\tfrac{(b-a)^2}2=\tfrac12(b^2-a^2).$$
Das ist genau die Trapezfläche. (Man sieht: Über die Definition ist das mühsam – der Hauptsatz wird das ändern.)
:::

## Eigenschaften

:::satz Rechenregeln
Für integrierbare $f,g$ und $\mu,\nu\in\R$:
1. **Linearität:** $\int_a^b(\mu f+\nu g)\,\d x=\mu\int_a^bf\,\d x+\nu\int_a^bg\,\d x$
2. **Additivität** (Zerlegung des Intervalls): $\int_a^bf\,\d x=\int_a^cf\,\d x+\int_c^bf\,\d x$ (auch für $c$ außerhalb, mit den nächsten Regeln)
3. **Grenzen vertauschen:** $\int_b^af\,\d x=-\int_a^bf\,\d x$, $\;\int_a^af\,\d x=0$
4. **Monotonie:** $f\le g$ auf $[a,b]$ ⇒ $\int_a^bf\le\int_a^bg$; insbesondere $\left|\int_a^bf\right|\le\int_a^b|f|$
5. **Symmetrie:** $f$ gerade ⇒ $\int_{-a}^af=2\int_0^af$; $f$ ungerade ⇒ $\int_{-a}^af=0$
:::

## Mittelwertsatz der Integralrechnung

:::satz
Ist $f:[a,b]\to\R$ stetig, so gibt es $\xi\in[a,b]$ mit
$$\int_a^bf(x)\,\d x=f(\xi)\cdot(b-a).$$
Allgemeiner (gewichtet, $p\ge0$ stetig): $\int_a^bf(x)p(x)\,\d x=f(\xi)\int_a^bp(x)\,\d x$.
:::
Anschaulich: Es gibt ein Rechteck der Breite $b-a$ mit derselben Fläche wie unter der Kurve; seine Höhe ist der **Integralmittelwert**
$$\bar f=\frac1{b-a}\int_a^bf(x)\,\d x.$$
Beispiel: mittlere Geschwindigkeit, Mittelwert eines Signals, Effektivwert in der Elektrotechnik (dort mit $f^2$).

## Ausblick: Lebesgue-Integral (EXTRA)

Riemann zerlegt die **$x$-Achse**, Lebesgue zerlegt die **$y$-Achse** und misst, wie „groß" die Menge $f^{-1}(y\text{-Bereich})$ ist.
- **Maß** $\mu$: Länge $\mu((a,b))=b-a$, Fläche $(b-a)(d-c)$, Volumen eines Quaders …
- **Nullmengen:** Punkte, Strecken in der Ebene, Rechtecke im Raum haben Maß 0. Daher $\mu([a,b])=\mu((a,b))$.
- Für eine Treppenfunktion $\sum f_k\mathbb 1_{(a_k,b_k)}$: $\int f\,\d\mu=\sum f_k(b_k-a_k)$ – wie bei Riemann.
- Aber: Die Dirichlet-Funktion $\mathbb 1_\Q$ ist **nicht Riemann-**, aber **Lebesgue-integrierbar**: $\int_{[0,1]}\mathbb 1_\Q\,\d\mu=\mu(\Q\cap[0,1])=0$, $\int_{[0,1]}\mathbb 1_{\R\setminus\Q}\,\d\mu=1$.
- Anwendung: Wahrscheinlichkeitstheorie. Für alle Funktionen, die uns als Ingenieure begegnen, liefern beide denselben Wert.

## Aufgaben

:::aufgabe 1
Berechne die Unter- und Obersumme von $f(x)=x^2$ auf $[0,1]$ für $n=4$ gleich breite Streifen.
:::loesung
$\Delta x=\frac14$, Stützstellen $0,\frac14,\frac12,\frac34,1$. $U_4=\frac14(0+\frac1{16}+\frac14+\frac9{16})=\frac14\cdot\frac{14}{16}=0{,}21875$; $O_4=\frac14(\frac1{16}+\frac14+\frac9{16}+1)=\frac14\cdot\frac{30}{16}=0{,}46875$. Exakt: $\frac13$.
:::
:::

:::aufgabe 2 (Skript 10.2)
Welche Integrale sind 0? (a) $\int_{-\pi}^\pi x\sin x\,\d x$ (b) $\int_{-\pi}^\pi x^2\sin x\,\d x$ (c) $\int_{-\pi}^\pi x\sin(x^2)\,\d x$ (d) $\int_{-\pi}^\pi x^2\sin(x^2)\,\d x$ (e) $\int_{-1}^1\frac{x}{1+x^2}\,\d x$
:::loesung
(a) $x\sin x$ gerade ⇒ nicht 0 (Wert $2\pi$). (b) ungerade ⇒ **0**. (c) ungerade ⇒ **0**. (d) gerade ⇒ nicht 0. (e) ungerade ⇒ **0**.
:::
:::

:::aufgabe 3
Mittelwert von $f(x)=\sin x$ auf $[0,\pi]$?
:::loesung
$\bar f=\frac1\pi\int_0^\pi\sin x\,\d x=\frac1\pi[-\cos x]_0^\pi=\frac2\pi\approx0{,}64$ (Hauptsatz – nächste Lektion).
:::
:::

## Karteikarten

:::karte
Riemann-Summe?
???
$\sum_kf(\xi_k)(x_k-x_{k-1})$ mit Zwischenstellen $\xi_k$; Grenzwert bei feiner Zerlegung = Integral.
:::

:::karte
Was ist $\int_a^bf\,\d x$ geometrisch?
???
Orientierter Flächeninhalt: oberhalb der $x$-Achse positiv, unterhalb negativ.
:::

:::karte
Mittelwertsatz der Integralrechnung?
???
$\exists\xi\in[a,b]:\int_a^bf=f(\xi)(b-a)$ (für stetiges $f$).
:::

:::karte
Integral einer ungeraden Funktion über $[-a,a]$?
???
0
:::

:::karte
$\int_b^af\,\d x=\,?$
???
$-\int_a^bf\,\d x$
:::
