---
title: Komplexe Zahlen I – Definition, Rechnen, Gaußsche Zahlenebene
chapter: 1 Grundlagen – Komplexe Zahlen
minutes: 90
sources: Mathe 1/IngMath1_slides_1_basics_6_komplexezahlen_1_Definition_Eigenschaften.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#167
---

:::ziel
- Verstehen, warum man ℝ zu ℂ erweitert, und was $\mathrm i$ ist.
- Real-/Imaginärteil, Addition, Multiplikation, **Division** (mit konjugiert Komplexem) sicher rechnen.
- Komplexe Zahlen in der **Gaußschen Zahlenebene** zeichnen; Betrag und Konjugation geometrisch deuten.
- Die **Polarform** $z=r(\cos\varphi+\mathrm i\sin\varphi)$ bestimmen und Multiplikation als Drehstreckung verstehen.
:::

## Motivation

Zahlbereiche wurden immer erweitert, um Gleichungen lösbar zu machen: $\N\to\Z$ ($x+3=1$), $\Z\to\Q$ ($2x=1$), $\Q\to\R$ ($x^2=2$). Jetzt: $x^2=-1$ hat in ℝ keine Lösung, da $x^2\ge0$.

Weitere Gründe:
- **Faktorisierung von Polynomen:** $x^2-1=(x-1)(x+1)$, aber $x^2+1$ zerfällt reell nicht. $x^3-2x^2+x-2=(x-2)(x^2+1)$ hat reell nur eine Nullstelle.
- **Anwendungen:** Schwingungen, Wellen, **Wechselstromtechnik** (in Elektrotechnik zentral!), Signalverarbeitung, Eigenwerte, Differentialgleichungen.

## Definition

:::def Imaginäre Einheit und komplexe Zahlen
Die **imaginäre Einheit** $\mathrm i$ ist definiert durch $\mathrm i^2=-1$. (In der Elektrotechnik schreibt man $\mathrm j$, weil $i$ der Strom ist.)
$$\C=\{z=a+\mathrm ib\mid a,b\in\R\}$$
$a=\operatorname{Re}(z)$ heißt **Realteil**, $b=\operatorname{Im}(z)$ **Imaginärteil** (Achtung: $b$ ist reell, *ohne* $\mathrm i$!).
:::

- Reelle Zahlen sind spezielle komplexe Zahlen ($b=0$): $\R\subset\C$.
- **Rein imaginär**: $a=0$, z. B. $3\mathrm i$. Die Menge $\mathrm i\R$.
- $\sqrt{-9}$: Die Lösungen von $z^2=-9$ sind $\pm3\mathrm i$.
- Zwei komplexe Zahlen sind gleich ⇔ Real- **und** Imaginärteile stimmen überein.

Potenzen von $\mathrm i$ wiederholen sich mit Periode 4:
$$\mathrm i^1=\mathrm i,\quad\mathrm i^2=-1,\quad\mathrm i^3=-\mathrm i,\quad\mathrm i^4=1,\quad\mathrm i^5=\mathrm i,\dots$$

## Rechenregeln (algebraische Form)

Für $z_1=a+\mathrm ib$, $z_2=c+\mathrm id$ rechnet man wie mit reellen Termen und ersetzt $\mathrm i^2=-1$:

| Operation | Ergebnis |
|---|---|
| Addition | $z_1+z_2=(a+c)+\mathrm i(b+d)$ |
| Subtraktion | $z_1-z_2=(a-c)+\mathrm i(b-d)$ |
| Multiplikation | $z_1z_2=(ac-bd)+\mathrm i(ad+bc)$ |
| Division | $\dfrac{z_1}{z_2}=\dfrac{ac+bd}{c^2+d^2}+\mathrm i\,\dfrac{bc-ad}{c^2+d^2}$ |

Multiplikation ausführlich: $(a+\mathrm ib)(c+\mathrm id)=ac+\mathrm iad+\mathrm ibc+\mathrm i^2bd=(ac-bd)+\mathrm i(ad+bc)$.

## Konjugation und Betrag

:::def Konjugiert komplexe Zahl, Betrag
$$\bar z=a-\mathrm ib\qquad |z|=\sqrt{a^2+b^2}=\sqrt{z\bar z}$$
:::

Es gilt $z\cdot\bar z=(a+\mathrm ib)(a-\mathrm ib)=a^2+b^2=|z|^2$ – **immer reell und ≥ 0**. Das ist der Schlüssel zur Division:

:::rezept Division komplexer Zahlen
Mit dem **Konjugierten des Nenners** erweitern – der Nenner wird dann reell:
$$\frac{a+\mathrm ib}{c+\mathrm id}=\frac{(a+\mathrm ib)(c-\mathrm id)}{(c+\mathrm id)(c-\mathrm id)}=\frac{(ac+bd)+\mathrm i(bc-ad)}{c^2+d^2}.$$
:::

Weitere Regeln: $\overline{z_1+z_2}=\bar z_1+\bar z_2$, $\overline{z_1z_2}=\bar z_1\bar z_2$, $\bar{\bar z}=z$, $\operatorname{Re}z=\frac{z+\bar z}2$, $\operatorname{Im}z=\frac{z-\bar z}{2\mathrm i}$, $|z_1z_2|=|z_1||z_2|$, $|z_1+z_2|\le|z_1|+|z_2|$.

:::bsp Haftmann 5.1: $z_1=2+3\mathrm i$, $z_2=3-5\mathrm i$
- $z_1+z_2=5-2\mathrm i$, $\;z_1-z_2=-1+8\mathrm i$, $\;2z_1=4+6\mathrm i$
- $z_1z_2=6-10\mathrm i+9\mathrm i-15\mathrm i^2=6+15-\mathrm i=21-\mathrm i$
- $\bar z_2=3+5\mathrm i$, $\;z_2\bar z_2=9+25=34$, $\;|z_2|=\sqrt{34}$
- $\dfrac{z_1}{z_2}=\dfrac{(2+3\mathrm i)(3+5\mathrm i)}{34}=\dfrac{6+10\mathrm i+9\mathrm i-15}{34}=\dfrac{-9+19\mathrm i}{34}=-\dfrac9{34}+\dfrac{19}{34}\mathrm i$
:::

ℂ ist ein **Körper** (alle Rechengesetze wie in ℝ), aber **nicht angeordnet**: Ausdrücke wie $z_1<z_2$ sind für komplexe Zahlen sinnlos!

## Die Gaußsche Zahlenebene

Reelle Zahlen liegen auf einer Geraden – komplexe Zahlen brauchen eine **Ebene**: $z=a+\mathrm ib\;\widehat=\;(a,b)\in\R^2$. Waagrecht: reelle Achse, senkrecht: imaginäre Achse.

<figure><svg class="fig" viewBox="0 0 360 300" width="360" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="12">
<defs><marker id="arK" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none"><path d="M20 150 H340" marker-end="url(#arK)"/><path d="M120 290 V10" marker-end="url(#arK)"/></g>
<text x="325" y="168" fill="currentColor">Re</text><text x="126" y="18" fill="currentColor">Im</text>
<path d="M120 150 L240 70" stroke="#3b6fd8" stroke-width="2" marker-end="url(#arK)"/><circle cx="240" cy="70" r="4" fill="#3b6fd8"/><text x="246" y="66" fill="#3b6fd8">z = a + ib</text>
<path d="M120 150 L240 230" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/><circle cx="240" cy="230" r="4" fill="#c0392b"/><text x="246" y="240" fill="#c0392b">z̄ = a − ib</text>
<path d="M240 70 V150" stroke="currentColor" stroke-dasharray="3 3"/><path d="M120 70 H240" stroke="currentColor" stroke-dasharray="3 3"/>
<text x="236" y="166" fill="currentColor">a</text><text x="106" y="74" fill="currentColor">b</text>
<path d="M150 150 A30 30 0 0 0 145 134" stroke="currentColor" fill="none"/><text x="156" y="142" fill="currentColor">φ</text>
<text x="160" y="100" fill="#3b6fd8">r = |z|</text>
</svg><figcaption>Konjugation = Spiegelung an der reellen Achse; |z| = Abstand zum Ursprung</figcaption></figure>

- **Addition** = Vektoraddition (Parallelogramm).
- **Konjugation** = Spiegelung an der reellen Achse.
- **Betrag** = Länge des Pfeils (Pythagoras).

## Polarform

Statt mit $(a,b)$ beschreibt man $z\ne0$ durch **Länge** $r=|z|$ und **Winkel** $\varphi$ (Argument) zur positiven reellen Achse:
$$z=r(\cos\varphi+\mathrm i\sin\varphi),\qquad a=r\cos\varphi,\quad b=r\sin\varphi.$$

Mit der **Eulerschen Formel** $\e^{\mathrm i\varphi}=\cos\varphi+\mathrm i\sin\varphi$ (Beweis später über Potenzreihen) wird das zur **Exponentialform** $z=r\,\e^{\mathrm i\varphi}$.

:::rezept Umrechnung kartesisch → polar
1. $r=\sqrt{a^2+b^2}$.
2. Winkel: $\tan\varphi=\frac ba$. **Quadranten beachten!** Am sichersten: Skizze machen.
   - $a>0$: $\varphi=\arctan\frac ba$
   - $a<0$: $\varphi=\arctan\frac ba+\pi$
   - $a=0$: $\varphi=\frac\pi2$ ($b>0$) bzw. $-\frac\pi2$ bzw. $\frac{3\pi}2$ ($b<0$)
3. Der Winkel ist nur bis auf Vielfache von $2\pi$ eindeutig; man wählt meist $\varphi\in[0,2\pi)$ oder $(-\pi,\pi]$. Für $z=0$ ist $\varphi$ unbestimmt.
:::

:::bsp
- $z=1+\mathrm i$: $r=\sqrt2$, $\varphi=\frac\pi4$ ⇒ $z=\sqrt2\,\e^{\mathrm i\pi/4}$.
- $z=-1+\sqrt3\,\mathrm i$: $r=2$, $\arctan(-\sqrt3)=-\frac\pi3$, $a<0$ ⇒ $\varphi=-\frac\pi3+\pi=\frac{2\pi}3$ (2. Quadrant ✓).
- $z=-3$: $r=3$, $\varphi=\pi$. $\;z=-2\mathrm i$: $r=2$, $\varphi=\frac{3\pi}2$.
:::

:::merke Wichtige Werte
| $\varphi$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos\varphi$ | 1 | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | 0 | −1 |
| $\sin\varphi$ | 0 | $\frac12$ | $\frac{\sqrt2}2$ | $\frac{\sqrt3}2$ | 1 | 0 |
:::

## Multiplikation = Drehstreckung

$$z_1z_2=r_1r_2\big(\cos\varphi_1\cos\varphi_2-\sin\varphi_1\sin\varphi_2+\mathrm i(\cos\varphi_1\sin\varphi_2+\sin\varphi_1\cos\varphi_2)\big)=r_1r_2\big(\cos(\varphi_1+\varphi_2)+\mathrm i\sin(\varphi_1+\varphi_2)\big)$$
(Additionstheoreme). In Exponentialform sofort: $r_1\e^{\mathrm i\varphi_1}\cdot r_2\e^{\mathrm i\varphi_2}=r_1r_2\e^{\mathrm i(\varphi_1+\varphi_2)}$.

:::merke
- **Multiplizieren:** Beträge multiplizieren, Winkel **addieren**.
- **Dividieren:** Beträge dividieren, Winkel **subtrahieren**: $\frac{z_1}{z_2}=\frac{r_1}{r_2}\e^{\mathrm i(\varphi_1-\varphi_2)}$.
- Multiplikation mit $\mathrm i=\e^{\mathrm i\pi/2}$ ist eine **Drehung um 90°**. Darum: $\mathrm i,\mathrm i^2,\mathrm i^3,\mathrm i^4$ laufen im Viertelkreis-Takt um. $(2\mathrm i)^n$ dreht und verdoppelt jeweils (Spirale).
- Addition ist kartesisch einfach, Multiplikation polar einfach.
:::

## Aufgaben

:::aufgabe 1
$z_1=1+2\mathrm i$, $z_2=3-\mathrm i$. Berechne $z_1+z_2$, $z_1z_2$, $\bar z_1$, $|z_2|$, $\frac{z_1}{z_2}$, $z_1^2$.
:::loesung
$4+\mathrm i$; $3-\mathrm i+6\mathrm i-2\mathrm i^2=5+5\mathrm i$; $1-2\mathrm i$; $\sqrt{10}$; $\frac{(1+2\mathrm i)(3+\mathrm i)}{10}=\frac{3+\mathrm i+6\mathrm i-2}{10}=\frac1{10}+\frac7{10}\mathrm i$; $1+4\mathrm i-4=-3+4\mathrm i$.
:::
:::

:::aufgabe 2
Berechne $\mathrm i^{2026}$ und $\frac1{\mathrm i}$.
:::loesung
$2026=4\cdot506+2$ ⇒ $\mathrm i^{2026}=\mathrm i^2=-1$. $\frac1{\mathrm i}=\frac{-\mathrm i}{\mathrm i\cdot(-\mathrm i)}=\frac{-\mathrm i}{1}=-\mathrm i$.
:::
:::

:::aufgabe 3
Bringe in Polarform: $z=-2-2\mathrm i$, $w=\sqrt3-\mathrm i$, $u=5\mathrm i$. Berechne dann $z\cdot w$ in Polarform.
:::loesung
$z$: $r=2\sqrt2$, 3. Quadrant: $\varphi=\arctan1+\pi=\frac{5\pi}4$.
$w$: $r=2$, $\varphi=\arctan(-\frac1{\sqrt3})=-\frac\pi6$ (bzw. $\frac{11\pi}6$).
$u$: $r=5$, $\varphi=\frac\pi2$.
$zw=4\sqrt2\,\e^{\mathrm i(5\pi/4-\pi/6)}=4\sqrt2\,\e^{\mathrm i\,13\pi/12}$.
:::
:::

:::aufgabe 4
Beschreibe die Menge $\{z\in\C: |z-1|\le2\}$ und $\{z: \operatorname{Re}z>\operatorname{Im}z\}$ geometrisch.
:::loesung
Kreisscheibe um $1$ mit Radius 2 (inkl. Rand). Halbebene unterhalb der Winkelhalbierenden $y=x$ (ohne die Gerade).
:::
:::

## Karteikarten

:::karte
Wie dividiert man zwei komplexe Zahlen?
???
Mit dem konjugiert Komplexen des Nenners erweitern: Nenner wird $c^2+d^2$ (reell).
:::

:::karte
$|z|$ und $z\bar z$ für $z=a+\mathrm ib$?
???
$|z|=\sqrt{a^2+b^2}$, $z\bar z=a^2+b^2=|z|^2$.
:::

:::karte
Was passiert bei Multiplikation in Polarform?
???
Beträge multiplizieren, Winkel addieren (Drehstreckung).
:::

:::karte
Winkel von $z=a+\mathrm ib$ bei $a<0$?
???
$\varphi=\arctan(b/a)+\pi$ – Quadrant beachten!
:::

:::karte
Eulersche Formel?
???
$\e^{\mathrm i\varphi}=\cos\varphi+\mathrm i\sin\varphi$
:::

:::karte
Ist $\operatorname{Im}(3-4\mathrm i)=-4\mathrm i$?
???
Nein! $\operatorname{Im}(3-4\mathrm i)=-4$ (reelle Zahl, ohne i).
:::
