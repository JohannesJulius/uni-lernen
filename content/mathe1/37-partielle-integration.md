---
title: Partielle Integration – inkl. Fourier-Integrale und Rechtecksignal
chapter: 4 Integralrechnung
minutes: 100
sources: Mathe 1/IngMath1_slides_3_ana_13_integration_integrationstechniken_partielle_integration (1).pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#224
---

:::ziel
- Partielle Integration aus der Produktregel herleiten und sicher anwenden (Wahl von $u'$ und $v$).
- Typische Muster: Polynom × exp/sin/cos, Logarithmus („Eins-Trick"), $\sin^2$, „Phönix aus der Asche" (Integral taucht wieder auf).
- **Orthogonalität** von $\sin(nx)$, $\cos(mx)$ auf $[0,2\pi]$; Fourier-Koeffizienten eines Rechtecksignals.
:::

## Herleitung

Produktregel: $(uv)'=u'v+uv'$. Integrieren über $[a,b]$ und umstellen:

:::satz Partielle Integration
Für stetig differenzierbare $u,v$:
$$\int_a^bu'(x)\,v(x)\,\d x=\big[u(x)v(x)\big]_a^b-\int_a^bu(x)\,v'(x)\,\d x,$$
unbestimmt: $\int u'v=uv-\int uv'$.
:::

Geometrisch (Skript): Die Differenz der Rechteckflächen $u(b)v(b)-u(a)v(a)$ zerfällt in die Flächen „unter" und „links von" der Kurve $(u(x),v(x))$.

:::rezept Wahl der Faktoren
- **$v$** (wird abgeleitet) soll durch Ableiten **einfacher** werden: Polynome, $\ln x$, $\arctan x$, $\arcsin x$.
- **$u'$** (wird integriert) muss eine **bekannte Stammfunktion** haben: $\e^x$, $\sin$, $\cos$, $x^n$.
- Faustregel „LIATE" für die Wahl von $v$: **L**ogarithmus > **I**nverse trig. > **A**lgebraisch (Polynom) > **T**rigonometrisch > **E**xponential.
- Bei $x^n\cdot(\dots)$ ggf. $n$-mal partiell integrieren.
:::

## Standardbeispiele

:::bsp $\int x\cos x\,\d x$ (Walkthrough)
$v=x\Rightarrow v'=1$; $u'=\cos x\Rightarrow u=\sin x$:
$$\int x\cos x\,\d x=x\sin x-\int\sin x\,\d x=x\sin x+\cos x+C.$$
Probe durch Ableiten: $\sin x+x\cos x-\sin x=x\cos x$ ✓.
:::

:::bsp $\int x\e^x\,\d x$
$v=x$, $u'=\e^x$: $=x\e^x-\int\e^x=\e^x(x-1)+C$.
:::

:::bsp Eins-Trick: $\int\ln x\,\d x$
$\int1\cdot\ln x\,\d x$ mit $u'=1\Rightarrow u=x$, $v=\ln x\Rightarrow v'=\frac1x$:
$$=x\ln x-\int x\cdot\tfrac1x\,\d x=x\ln x-x+C.$$
Ebenso $\int\arctan x\,\d x=x\arctan x-\frac12\ln(1+x^2)+C$.
:::

:::bsp Zweimal partiell: $\int x^2\e^x\,\d x$
$=x^2\e^x-\int2x\e^x=x^2\e^x-2\e^x(x-1)=\e^x(x^2-2x+2)+C$.
:::

:::bsp Phönix aus der Asche: $\int\e^x\sin x\,\d x=:I$
$I=-\e^x\cos x+\int\e^x\cos x=-\e^x\cos x+\e^x\sin x-I$ ⇒ $2I=\e^x(\sin x-\cos x)$ ⇒ $I=\frac{\e^x}2(\sin x-\cos x)+C$.
:::

## Fourier-Integrale

:::bsp $\int_0^{2\pi}\sin^2x\,\d x$
$u'=\sin x\Rightarrow u=-\cos x$, $v=\sin x\Rightarrow v'=\cos x$:
$$\int_0^{2\pi}\sin^2x=\underbrace{[-\sin x\cos x]_0^{2\pi}}_{0}+\int_0^{2\pi}\cos^2x=\int_0^{2\pi}(1-\sin^2x)=2\pi-\int_0^{2\pi}\sin^2x$$
⇒ $\int_0^{2\pi}\sin^2x\,\d x=\pi$. Analog $\int_0^{2\pi}\cos^2x\,\d x=\pi$.
Stammfunktion allgemein: $\int\sin^2x\,\d x=\frac12(x-\sin x\cos x)+C$ (Probe: $\frac12(1-\cos^2x+\sin^2x)=\sin^2x$ ✓). Alternativ mit $\sin^2x=\frac12(1-\cos2x)$.
:::

:::satz Orthogonalitätsrelationen
Für $n,m\in\N$:
$$\int_0^{2\pi}\sin(nx)\sin(mx)\,\d x=\int_0^{2\pi}\cos(nx)\cos(mx)\,\d x=\begin{cases}0,&n\ne m\\\pi,&n=m\end{cases},\qquad\int_0^{2\pi}\sin(nx)\cos(mx)\,\d x=0.$$
:::
*Beweisidee ($n\ne m$):* Zweimal partiell integrieren; die Randterme verschwinden wegen der $2\pi$-Periodizität, und man erhält $\int\sin\sin=\frac{m^2}{n^2}\int\sin\sin$, also $\left(1-\frac{m^2}{n^2}\right)\int\sin(nx)\sin(mx)=0$. Für $n=m$ mit der Substitution $u=nx$: $\int_0^{2\pi}\sin^2(nx)\d x=\frac1n\int_0^{2n\pi}\sin^2u\,\d u=\frac1n\cdot n\pi=\pi$.

Die Funktionen $\sin(nx),\cos(mx)$ stehen also **senkrecht** aufeinander bzgl. des „Skalarprodukts" $\langle f,g\rangle=\int_0^{2\pi}fg$ – genau wie Einheitsvektoren.

### Anwendung: Fourier-Reihen

Periodische Funktionen lassen sich als Überlagerung von Sinus- und Kosinusschwingungen darstellen:
$$f(x)=\frac{a_0}2+\sum_{n=1}^\infty\big(a_n\cos(nx)+b_n\sin(nx)\big),\quad a_n=\frac1\pi\int_{-\pi}^\pi f(x)\cos(nx)\,\d x,\quad b_n=\frac1\pi\int_{-\pi}^\pi f(x)\sin(nx)\,\d x.$$
Die Orthogonalität sorgt dafür, dass jeder Koeffizient einzeln „herausgefiltert" wird.

:::bsp Rechtecksignal
$f(x)=-1$ für $-\pi\le x<0$, $f(x)=1$ für $0\le x<\pi$, $2\pi$-periodisch (ungerade ⇒ nur Sinusanteile).
$$c_n=\int_{-\pi}^{\pi}f(x)\sin(nx)\,\d x=2\int_0^\pi\sin(nx)\,\d x\overset{u=nx}=\frac2n\int_0^{n\pi}\sin u\,\d u=\frac2n(1-\cos n\pi)=\begin{cases}0,&n\text{ gerade}\\\frac4n,&n\text{ ungerade}\end{cases}$$
Also $b_n=\frac{c_n}\pi$ und
$$f(x)=\frac4\pi\left(\sin x+\frac{\sin3x}3+\frac{\sin5x}5+\dots\right).$$
Je mehr Terme, desto besser wird das Rechteck nachgebildet (an den Sprüngen bleibt ein Überschwinger – Gibbs-Phänomen). Das ist die Grundlage der **Frequenzanalyse** (vgl. DFT, Wechselstromtechnik: Oberschwingungen).
:::

## Aufgaben

:::aufgabe 1
Berechne (a) $\int x\sin(2x)\,\d x$ (b) $\int_1^\e x\ln x\,\d x$ (c) $\int\arcsin x\,\d x$ (d) $\int_0^\pi\e^x\sin(3x)\,\d x$.
:::loesung
(a) $v=x$, $u'=\sin2x\Rightarrow u=-\frac12\cos2x$: $-\frac x2\cos2x+\frac14\sin2x+C$.
(b) $v=\ln x$, $u'=x\Rightarrow u=\frac{x^2}2$: $[\frac{x^2}2\ln x]_1^\e-\int_1^\e\frac x2=\frac{\e^2}2-\frac{\e^2-1}4=\frac{\e^2+1}4$.
(c) Eins-Trick: $x\arcsin x-\int\frac{x}{\sqrt{1-x^2}}\d x=x\arcsin x+\sqrt{1-x^2}+C$ (Substitution $w=1-x^2$).
(d) Phönix: $\int\e^x\sin3x=\frac{\e^x}{10}(\sin3x-3\cos3x)$ ⇒ $[\dots]_0^\pi=\frac{\e^\pi}{10}(0+3)-\frac1{10}(0-3)=\frac3{10}(\e^\pi+1)\approx7{,}24$.
:::
:::

:::aufgabe 2 (Skript 10.6)
Berechne $\int_0^L\sin^2\left(\frac{n\pi}Lx\right)\d x$.
:::loesung
Substitution $t=\frac xL$: $=L\int_0^1\sin^2(n\pi t)\,\d t=L\cdot\frac12=\frac L2$ (wegen $\int_0^1\sin^2(n\pi t)\d t=\frac12$). Wichtig z. B. bei Eigenschwingungen von Saiten/Balken.
:::
:::

:::aufgabe 3
Zeige: $\int_0^{2\pi}\sin(x)\cos(x)\,\d x=0$.
:::loesung
$\sin x\cos x=\frac12\sin2x$, $\int_0^{2\pi}\frac12\sin2x=[-\frac14\cos2x]_0^{2\pi}=0$.
:::
:::

## Karteikarten

:::karte
Formel der partiellen Integration?
???
$\int u'v\,\d x=uv-\int uv'\,\d x$
:::

:::karte
$\int x\e^x\,\d x$, $\int\ln x\,\d x$?
???
$\e^x(x-1)+C$; $x\ln x-x+C$.
:::

:::karte
$\int_0^{2\pi}\sin^2(nx)\,\d x$ und $\int_0^{2\pi}\sin(nx)\sin(mx)\,\d x$ ($n\ne m$)?
???
$\pi$ bzw. $0$ (Orthogonalität).
:::

:::karte
Was tun, wenn das Ausgangsintegral nach partieller Integration wieder auftaucht?
???
Als Gleichung für $I$ auffassen und nach $I$ auflösen („Phönix aus der Asche").
:::

:::karte
Fourier-Reihe des Rechtecksignals ±1?
???
$\frac4\pi\left(\sin x+\frac{\sin3x}3+\frac{\sin5x}5+\dots\right)$
:::
