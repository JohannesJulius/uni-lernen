---
title: 3.3 Gleichstrom III – Arbeit, Leistung, Leistungsanpassung, reale Messungen
chapter: 3 Gleichstrom
minutes: 90
sources: Elektrotechnik/Elektrotechnik - 3.3 Gleichstrom III.pdf
---

:::ziel
- Elektrische Arbeit und Leistung in allen drei Schreibweisen.
- **Leistungsanpassung** $R=R_i$, $P_{max}=\frac{U_0^2}{4R_i}$; Wirkungsgrad; Betriebszustände.
- Arbeitspunkt grafisch bestimmen.
- Reale Messungen: Innenwiderstand von Voltmetern, **Shunt**, **Vierleitermessung**.
:::

## Arbeit und Leistung

$$W=UIt=I^2Rt=\frac{U^2}Rt,\qquad[W]=\mathrm{VAs}=\mathrm{Ws}=\mathrm J\quad(1\,\mathrm{kWh}=3{,}6\,\mathrm{MJ})$$
$$P=\frac{\d W}{\d t}=UI=I^2R=\frac{U^2}R,\qquad[P]=\mathrm W.$$
Die drei Formen sind über Ohm äquivalent – nimm die, deren Größen du kennst. ($I^2R$: Leitungsverluste wachsen quadratisch mit dem Strom ⇒ Energieübertragung mit hoher Spannung.)

## Leistungsanpassung

Reale Quelle ($U_0$, $R_i$) mit Last $R$:
$$P=RI^2=U_0^2\frac{R}{(R_i+R)^2}.$$
Leerlauf ($R\to\infty$) und Kurzschluss ($R=0$) liefern beide $P=0$ – dazwischen liegt ein Maximum. Ableiten nach $R$:
$$\frac{\d P}{\d R}=U_0^2\frac{(R_i+R)^2-2R(R_i+R)}{(R_i+R)^4}=U_0^2\frac{R_i-R}{(R_i+R)^3}=0\iff R=R_i.$$

:::formel Leistungsanpassung
$$R=R_i\quad\Rightarrow\quad P_{max}=\frac{U_0^2}{4R_i}.$$
:::

**Anpassungsverhältnis** $\alpha=\frac R{R_i}$, **Wirkungsgrad** $\eta=\frac{P}{P_0}=\frac{R}{R_i+R}=\frac{\alpha}{1+\alpha}$.

:::achtung
Bei Leistungsanpassung ist $\eta=0{,}5$ – die Hälfte der Energie heizt die Quelle!
- **Nachrichtentechnik:** Anpassung (maximales Signal zählt, z. B. Antennen 50 Ω).
- **Energietechnik:** Überanpassung $R\gg R_i$ (Wirkungsgrad zählt).
:::

| Zustand | Last | $P_0$ (Quelle) | $P$ (Last) | $\eta$ |
|---|---|---|---|---|
| Kurzschluss | $R=0$ | $U_0^2/R_i$ | 0 | 0 |
| Unteranpassung | $R<R_i$ | $U_0^2/(R+R_i)$ | $<P_{max}$ | $<0{,}5$ |
| Anpassung | $R=R_i$ | $U_0^2/(2R_i)$ | $U_0^2/(4R_i)$ | 0,5 |
| Überanpassung | $R>R_i$ | $U_0^2/(R+R_i)$ | $<P_{max}$ | $>0{,}5$ |
| Leerlauf | $R\to\infty$ | 0 | 0 | 1 |

## Arbeitspunkt

Quelle: fallende Gerade $U=U_0-R_iI$; Last: steigende Gerade $U=RI$. Der **Schnittpunkt** ist der Arbeitspunkt (dort stellen sich $U$ und $I$ tatsächlich ein). Grafisch besonders nützlich bei **nichtlinearen** Lasten (Diode, Lampe).

## Reale Messungen

- **Voltmeter** liegt **parallel** zum Messobjekt; reales DMM: $R_i\approx10\,$MΩ – es zieht etwas Strom (**Lastfehler**), wenn der Quellwiderstand nicht viel kleiner ist. Faustregel: unkritisch, wenn $R_{Quelle}\ll R_{i,V}$. In Klausuren: „ideales Voltmeter" $R_i\to\infty$.
- **Amperemeter** liegt **in Reihe**; ideal $R_i=0$.
- **Shunt** für große Ströme: kleiner Präzisionswiderstand $R_S$ (z. B. 1 mΩ) im Strompfad, gemessen wird $U_S$: $I=\frac{U_S}{R_S}$. Bei 100 A: $U_S=100\,$mV, Verlust nur 10 W. Überall in Batteriemanagement und Motorsteuerungen.
- **Vierleitermessung** für kleine Widerstände (Pt100): Zwei Leitungen führen den Messstrom, zwei **separate** Leitungen messen die Spannung direkt am Sensor – durch sie fließt (fast) kein Strom, also fällt dort keine Spannung ab ⇒ der Leitungswiderstand fällt heraus („Sense"-Klemmen).

## Aufgaben (Aufgaben 9 und 10 der Folien)

:::aufgabe 1 Autobatterie
| $U_a$/V | 11,8 | 11,6 | 11 | 10 | 8 |
|---|---|---|---|---|---|
| $I$/A | 10 | 20 | 50 | 100 | 200 |
(a) $U_0$ und $R_i$? (b) Wirkungsgrad bei $R=0{,}2\,\Omega$?
:::loesung
(a) Lineare Kennlinie: Steigung $\frac{8-11{,}8}{200-10}=-0{,}02\,\Omega$ ⇒ $R_i=20\,$mΩ; $U_0=11{,}8+0{,}02\cdot10=12{,}0\,$V (Kontrolle bei 100 A: $12-2=10$ ✓).
(b) $\eta=\frac{0{,}2}{0{,}22}\approx91\,\%$.
:::
:::

:::aufgabe 2 Temperaturmessung
Pt100 ($R_0=100\,\Omega$ bei 0 °C, vereinfacht $\alpha=4\cdot10^{-3}\,$K⁻¹), ideale Stromquelle 1 mA, Vierleitermessung $U_\vartheta=120\,$mV. (a) $R_\vartheta$? (b) $\vartheta$? (c) Leistung im Sensor – warum klein halten?
:::loesung
(a) $R=\frac{0{,}12}{0{,}001}=120\,\Omega$. (b) $120=100(1+0{,}004\vartheta)\Rightarrow\vartheta=50\,°$C. (c) $P=I^2R=120\,$µW – klein, damit sich der Sensor nicht **selbst erwärmt** und die Messung verfälscht.
:::
:::

:::aufgabe 3
Eine Quelle $U_0=12\,$V, $R_i=2\,\Omega$. Last $R=4\,\Omega$: $P$, $\eta$? Welche Last liefert $P_{max}$?
:::loesung
$I=2\,$A, $P=16\,$W, $\eta=\frac46=67\,\%$. $P_{max}$ bei $R=2\,\Omega$: $18\,$W, $\eta=50\,\%$.
:::
:::

## Karteikarten

:::karte
Elektrische Leistung (3 Formen)?
???
$P=UI=I^2R=U^2/R$
:::

:::karte
Leistungsanpassung?
???
$R=R_i$ ⇒ $P_{max}=\frac{U_0^2}{4R_i}$, Wirkungsgrad 50 %.
:::

:::karte
Wirkungsgrad einer belasteten Quelle?
???
$\eta=\frac{R}{R+R_i}$
:::

:::karte
Wozu Vierleitermessung?
???
Leitungswiderstände eliminieren: Strom über zwei Leitungen, Spannung stromlos über zwei separate Leitungen direkt am Bauteil.
:::

:::karte
Shunt?
???
Kleiner Präzisionswiderstand im Strompfad; $I=U_S/R_S$.
:::
