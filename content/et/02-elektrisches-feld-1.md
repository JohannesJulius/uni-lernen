---
title: 2.1 Das elektrische Feld I – Ladung, Coulomb-Gesetz, Feldstärke
chapter: 2 Das elektrische Feld
minutes: 60
sources: Elektrotechnik/Elektrotechnik - 2.1 Elektrisches Feld I.pdf
---

:::ziel
- Elektrische Ladung: zwei Vorzeichen, Quantisierung, Aufbau der Materie.
- **Coulombsches Gesetz** anwenden; Vergleich mit der Gravitation.
- **Elektrische Feldstärke** $\vec E=\vec F/Q$ definieren; Feld einer Punktladung.
:::

## Die vier Grundkräfte

1. **Gravitation** – wirkt auf Masse, hält das Sonnensystem zusammen.
2. **Elektromagnetismus** – wirkt auf Ladung, hält Atome und Moleküle zusammen; bestimmt fast alle Alltagsphänomene.
3. **Starke Wechselwirkung** – hält Atomkerne zusammen.
4. **Schwache Wechselwirkung** – radioaktiver Zerfall.

## Elektrische Ladung

- Ladungen gibt es in zwei Arten: **positiv** und **negativ** (Vorzeichen = Konvention).
- **Gleichnamige** Ladungen **stoßen sich ab**, **ungleichnamige ziehen sich an**.
- Atome: positiver Kern aus Protonen (+) und Neutronen (0), Hülle aus Elektronen (−).
- Ladung ist **quantisiert**: immer ganzzahliges Vielfaches der **Elementarladung** $e=1{,}602\cdot10^{-19}\,$C. Elektron $-e$, Proton $+e$ (Quarks: $+\frac23e$, $-\frac13e$, aber nie einzeln beobachtbar).
- Einheit: **Coulomb** $1\,\mathrm C=1\,\mathrm{A\,s}$. Ladung bleibt erhalten (Ladungserhaltung).

## Coulombsches Gesetz

:::formel Coulombsches Gesetz
Kraft zwischen zwei Punktladungen $Q_1,Q_2$ im Abstand $r$:
$$|\vec F_{12}|=\frac{1}{4\pi\varepsilon_0}\cdot\frac{|Q_1Q_2|}{r^2},\qquad\varepsilon_0\approx8{,}854\cdot10^{-12}\,\frac{\mathrm{As}}{\mathrm{Vm}}=\frac{\mathrm C^2}{\mathrm{Nm^2}},\qquad\frac1{4\pi\varepsilon_0}\approx8{,}99\cdot10^9\,\frac{\mathrm{Nm^2}}{\mathrm C^2}.$$
Richtung: entlang der Verbindungslinie; $Q_1Q_2>0$ Abstoßung, $Q_1Q_2<0$ Anziehung. Vektoriell: $\vec F_{12}=\frac{Q_1Q_2}{4\pi\varepsilon_0r^2}\vec e_r$.
:::

**Analogie zur Gravitation:** $|\vec F|=G\frac{m_1m_2}{r^2}$, $G\approx6{,}674\cdot10^{-11}\,\frac{\mathrm{m^3}}{\mathrm{kg\,s^2}}$. Gleiches $\frac1{r^2}$-Gesetz – aber:

:::bsp Wasserstoffatom: Coulomb vs. Gravitation
$$\frac{F_e}{F_g}=\frac{e^2/(4\pi\varepsilon_0r^2)}{Gm_pm_e/r^2}=\frac{e^2}{4\pi\varepsilon_0Gm_pm_e}=\frac{(1{,}602\cdot10^{-19})^2}{1{,}113\cdot10^{-10}\cdot6{,}674\cdot10^{-11}\cdot1{,}67\cdot10^{-27}\cdot9{,}11\cdot10^{-31}}\approx2{,}3\cdot10^{39}.$$
Die elektrische Kraft ist unvorstellbar viel stärker. Dass im Alltag trotzdem die Gravitation dominiert, liegt daran, dass sich positive und negative Ladungen in normaler Materie **exakt aufheben**, während es keine negativen Massen gibt.
:::

## Elektrische Feldstärke

Eine Ladung verändert den Raum um sich: Jede Probeladung $Q$ erfährt dort eine Kraft $\propto Q$. Man definiert das **Feld** unabhängig von der Probeladung:

:::def Elektrische Feldstärke
$$\vec E=\frac{\vec F}{Q}\qquad\Longleftrightarrow\qquad\vec F=Q\cdot\vec E,\qquad[\vec E]=\frac{\mathrm N}{\mathrm C}=\frac{\mathrm V}{\mathrm m}.$$
Auf positive Ladungen wirkt die Kraft **in** Feldrichtung, auf negative **entgegen**. Ein Feld ist eine **ortsabhängige** Größe (hier ein Vektorfeld).
:::

:::formel Feld einer Punktladung
$$\vec E(\vec r)=\frac{Q}{4\pi\varepsilon_0r^2}\,\vec e_r,\qquad E=\frac{Q}{4\pi\varepsilon_0r^2}.$$
Bei positivem $Q$ zeigt $\vec E$ radial nach außen, bei negativem nach innen.
:::

## Aufgaben (Aufgabe 2 der Folien)

:::aufgabe 1
Auf $Q_2$ wirkt im Feld von $Q_1$ die Kraft $F_1=2\cdot10^{-8}\,$N. Welche Kraft wirkt auf eine Ladung $Q_3=4Q_2$ im doppelten Abstand? (ohne Taschenrechner)
:::loesung
$F\propto\frac{Q}{r^2}$: Faktor $\frac{4}{2^2}=1$ ⇒ $F_2=2\cdot10^{-8}\,$N – gleich groß.
:::
:::

:::aufgabe 2
$Q=10\,$nC im Vakuum. Feldstärke in $r=24\,$cm? Kraft auf ein Elektron dort, Richtung?
:::loesung
$E=\frac{8{,}99\cdot10^9\cdot10\cdot10^{-9}}{0{,}24^2}=\frac{89{,}9}{0{,}0576}\approx1560\,$V/m.
$F=eE=1{,}602\cdot10^{-19}\cdot1560\approx2{,}5\cdot10^{-16}\,$N, **zur Ladung hin** (Elektron negativ, Anziehung).
:::
:::

:::aufgabe 3
Zwei Ladungen $Q_1=+2\,$µC bei $x=0$ und $Q_2=-2\,$µC bei $x=0{,}1\,$m. Feldstärke in der Mitte?
:::loesung
Beide Felder zeigen in $+x$ (weg von +, hin zu −): $E=2\cdot\frac{8{,}99\cdot10^9\cdot2\cdot10^{-6}}{0{,}05^2}=2\cdot7{,}19\cdot10^6=1{,}44\cdot10^7\,$V/m.
:::
:::

## Karteikarten

:::karte
Coulombsches Gesetz?
???
$F=\frac{1}{4\pi\varepsilon_0}\frac{|Q_1Q_2|}{r^2}$, $\frac1{4\pi\varepsilon_0}\approx9\cdot10^9\,$Nm²/C².
:::

:::karte
Definition elektrische Feldstärke und Einheit?
???
$\vec E=\vec F/Q$; [E] = N/C = V/m.
:::

:::karte
Feldstärke einer Punktladung?
???
$E=\frac{Q}{4\pi\varepsilon_0r^2}$, radial.
:::

:::karte
Was heißt „Ladung ist quantisiert"?
???
Jede Ladung ist ein ganzzahliges Vielfaches von $e=1{,}602\cdot10^{-19}\,$C.
:::
