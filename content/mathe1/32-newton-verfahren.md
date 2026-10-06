---
title: Das Newton-Verfahren (Skript-Kapitel 5)
chapter: 3 Analysis
minutes: 60
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#89
---

:::abgleich
Das Newton-Verfahren steht im **Skript (Kap. 5)**, aber in keinem eigenen Mathe-1-Foliensatz. Es kommt außerdem in **Numerik (Analysis I/II)** vor. Daher hier als eigene Lektion – nicht weglassen!
:::

:::ziel
- Die Newton-Iteration aus der Linearisierung herleiten.
- Iterationen per Hand rechnen; quadratische Konvergenz erkennen.
- Fallstricke kennen: waagrechte Tangente, Oszillation, Overshooting.
- Anwendung: Kepler-Gleichung in der Raumfahrt.
:::

## Idee

Viele Gleichungen sind nicht analytisch lösbar, z. B. $x=\sin x+1$. Man bringt sie auf die Form $f(x^*)=0$ (hier $f(x)=x-\sin x-1$) und sucht eine Nullstelle **iterativ**.

Trick: $f$ ist kompliziert – aber die **Tangente** in einer Schätzung $x_0$ ist einfach: $l(x)=f(x_0)+f'(x_0)(x-x_0)$. Ihre Nullstelle ist
$$x_1=x_0-\frac{f(x_0)}{f'(x_0)}\qquad(f'(x_0)\ne0).$$
Dann wiederholt man das mit $x_1$ usw.

:::def Newton-Verfahren
$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)},\qquad n=0,1,2,\dots$$
mit geeignetem Startwert $x_0$ und $f'(x_n)\ne0$. Abbruch, wenn $|f(x_n)|$ oder $|x_{n+1}-x_n|$ kleiner als eine Toleranz ist.
:::

:::bsp $f(x)=x^2-1$, $x_0=2$
$f'(x)=2x$. $x_1=2-\frac{3}{4}=\frac54$, $\;x_2=\frac54-\frac{25/16-1}{5/2}=\frac54-\frac{9}{40}=\frac{41}{40}=1{,}025$. Schon nah an $x^*=1$.
:::

## Konvergenzverhalten

:::satz Quadratische Konvergenz
Ist $f$ zweimal stetig differenzierbar, $f(x^*)=0$, $f'(x^*)\ne0$ und $x_0$ nahe genug an $x^*$, so konvergiert das Verfahren **quadratisch**: $|x_{n+1}-x^*|\le C|x_n-x^*|^2$. Die Zahl der korrekten Stellen **verdoppelt** sich ungefähr pro Schritt (im Gegensatz zur linearen Konvergenz der Bisektion).
:::

:::bsp $\sqrt[3]2$ mit $f(x)=x^3-2$, $x_0=1{,}5$
| $n$ | $x_n$ | Fehler |
|---|---|---|
| 0 | 1,50000000 | $2{,}4\cdot10^{-1}$ |
| 1 | 1,29629630 | $3{,}6\cdot10^{-2}$ |
| 2 | 1,26093222 | $1{,}0\cdot10^{-3}$ |
| 3 | 1,25992186 | $8{,}1\cdot10^{-7}$ |
| 4 | 1,25992105 | $5{,}3\cdot10^{-13}$ |
:::

:::achtung Wann Newton versagt
- **Waagrechte Tangente** $f'(x_n)=0$: Division durch 0.
- **Oszillation:** $f(x)=x^3-x$ mit $x_0=\frac1{\sqrt5}$: $x_{n+1}=\frac{2x_n^3}{3x_n^2-1}$ liefert $x_1=-\frac1{\sqrt5}$, $x_2=\frac1{\sqrt5}$, … – ewiges Pendeln.
- **Overshooting:** bei flachen Tangenten (z. B. $\arctan x$ mit großem $|x_0|$) springt das Verfahren weit weg und kann divergieren.
- Startwert also sinnvoll wählen (Skizze, Bisektion vorab, physikalische Vorkenntnis).
:::

## Walkthrough: Kepler-Gleichung (Raumfahrt)

Die Position eines Satelliten auf einer Ellipsenbahn folgt aus der **exzentrischen Anomalie** $E$, die die Kepler-Gleichung erfüllt:
$$E-e\sin E=M$$
($e$ = Exzentrizität, $M$ = mittlere Anomalie ∝ Zeit). Die Gleichung ist **transzendent** – nicht nach $E$ auflösbar. Bordcomputer lösen sie mit Newton hunderte Male pro Sekunde.

Für $e=0{,}8$, $M=1{,}0$: $f(E)=E-0{,}8\sin E-1$, $f'(E)=1-0{,}8\cos E$, Startwert $E_0=M=1$ (exakt bei Kreisbahn $e=0$).
- $E_1=1-\frac{-0{,}67318}{0{,}56776}\approx2{,}18568$
- $E_2=2{,}18568-\frac{0{,}53254}{1{,}46194}\approx1{,}82141$
- … konvergiert gegen $E^*\approx1{,}89025$.

```python
E = M                      # Startwert
for i in range(10):        # höchstens 10 Iterationen
    f  = E - e*sin(E) - M
    df = 1 - e*cos(E)
    E  = E - f/df          # Newton-Schritt
    if abs(f) < 1e-6: break
```

## Aufgaben

:::aufgabe 1 (Skript 5.1)
Entwirf ein Newton-Verfahren zur Berechnung von $\sqrt a$ ohne Wurzelfunktion.
:::loesung
$f(x)=x^2-a$, $f'=2x$: $x_{n+1}=x_n-\frac{x_n^2-a}{2x_n}=\frac12\left(x_n+\frac a{x_n}\right)$ – genau das **Heron-Verfahren**!
:::
:::

:::aufgabe 2 (Skript 5.2)
Leite aus $f(x)=\frac1x-a$ eine divisionsfreie Iteration für $\frac1a$ her.
:::loesung
$f'(x)=-\frac1{x^2}$: $x_{n+1}=x_n-\frac{1/x_n-a}{-1/x_n^2}=x_n+x_n-ax_n^2=x_n(2-ax_n)$. Konvergiert für $0<x_0<\frac2a$ (bei $a>0$), denn mit $e_n=1-ax_n$ gilt $e_{n+1}=e_n^2$, also Konvergenz für $|e_0|<1$.
:::
:::

:::aufgabe 3 (Skript 5.3)
$f(x)=x^2-\cos x$ auf $[0,\frac\pi2]$: Zeige, dass genau eine Nullstelle existiert, und berechne $x_1$ für $x_0=1$.
:::loesung
$f(0)=-1<0$, $f(\frac\pi2)=\frac{\pi^2}4>0$ ⇒ Nullstelle (ZWS). $f'=2x+\sin x>0$ auf $(0,\frac\pi2]$ ⇒ streng monoton ⇒ genau eine. $x_1=1-\frac{1-\cos1}{2+\sin1}=1-\frac{0{,}4597}{2{,}8415}\approx0{,}8382$.
:::
:::

:::aufgabe 4 (Skript 5.4, Transfer)
Im Flugcomputer wird die Mach-Zahl bei Überschall aus dem gemessenen Druckverhältnis $R$ über eine transzendente Gleichung $g(M)=R$ bestimmt. Warum nimmt man als Startwert den Wert von vor 10 ms und macht genau 2 Newton-Schritte? Wie bekommt man die Ableitung ohne Formel?
:::loesung
- Funktion: $f(M)=g(M)-R_{mess}$.
- Der alte Wert liegt extrem nahe an der Lösung (Mach-Zahl ändert sich in 10 ms kaum) ⇒ quadratische Konvergenz: Fehler $10^{-3}\to10^{-6}\to10^{-12}$; 2 Schritte reichen.
- Ableitung numerisch per Differenzenquotient: $f'(M)\approx\frac{f(M+h)-f(M)}h$ (oder zentral $\frac{f(M+h)-f(M-h)}{2h}$).
- Vereister Sensor ⇒ falscher Wert, evtl. flache Tangente ⇒ Overshooting. Feste Iterationszahl garantiert eine **feste Rechenzeit** (Echtzeitfähigkeit) – eine while-Schleife könnte hängen.
:::
:::

## Karteikarten

:::karte
Newton-Iteration?
???
$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$
:::

:::karte
Konvergenzgeschwindigkeit von Newton?
???
Quadratisch (nahe einer einfachen Nullstelle): Anzahl korrekter Stellen verdoppelt sich etwa pro Schritt.
:::

:::karte
Drei Probleme des Newton-Verfahrens?
???
Waagrechte Tangente ($f'=0$), Oszillation, Overshooting/Divergenz bei schlechtem Startwert.
:::

:::karte
Newton für $x^2-a$ ergibt …?
???
Das Heron-Verfahren $x_{n+1}=\frac12(x_n+a/x_n)$.
:::
