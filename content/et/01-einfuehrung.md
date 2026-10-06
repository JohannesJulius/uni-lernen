---
title: 1 Einführung – Physikalische Größen, SI-Einheiten, Dimensionsanalyse
chapter: 1 Einführung
minutes: 45
sources: Elektrotechnik/Elektrotechnik - 1 Einführung.pdf
---

:::ziel
- Physikalische Größe = Zahlenwert × Einheit; skalare und vektorielle Größen.
- Die 7 SI-Basiseinheiten (zentral: **Ampere**) und ihre Definition über Naturkonstanten.
- Abgeleitete Einheiten herleiten statt auswendig lernen; SI-Präfixe sicher anwenden.
- Dimensionsanalyse als Fehlercheck; Luftfahrt-Einheiten umrechnen.
:::

:::info Organisatorisches (laut Folien)
Prüfung: **schriftlich, 60 Minuten, keine Hilfsmittel** – Formeln müssen sitzen, Rechnen ohne Taschenrechner üben (die Aufgaben sind so gestellt). Tafelanschriebe ergänzen die Folien und sind prüfungsrelevant. Literatur: Pregla, Hagmann, Hering, Fischer; Vorlesungsskript Prof. Palme. Gliederung: 1 Einführung, 2 E-Feld, 3 Gleichstrom, 4 Magnetismus, 5 Induktion, 6 Wechselstrom, 7 Drehstrom, 8 Schaltvorgänge.
:::

## Physikalische Größen

$$x=\{x\}\cdot[x]\qquad(\text{Zahlenwert}\cdot\text{Einheit}),\quad\text{z. B. }t=10\,\mathrm s,\ m=5\,\mathrm{kg},\ \Delta T=-20\,\mathrm K.$$
- Addieren/Subtrahieren nur bei **gleicher Einheit**: $2\,\mathrm m+3\,\mathrm m=5\,\mathrm m$.
- Multiplizieren/Dividieren: Einheiten werden mitgerechnet: $v=\frac{10\,\mathrm m}{5\,\mathrm s}=2\,\frac{\mathrm m}{\mathrm s}=7{,}2\,\frac{\mathrm{km}}{\mathrm h}$.
- **Vektorielle Größen**: Betrag (immer positiv) und Richtung, $\vec v=|\vec v|\cdot\vec e_v$, z. B. $\vec a=9{,}81\,\frac{\mathrm m}{\mathrm s^2}\cdot(-\vec e_z)$.
- Schreibweise: Variablen kursiv ($U$), Einheiten aufrecht (V).

## Das SI-System

| Basisgröße | Symbol | Dimension | Einheit |
|---|---|---|---|
| Zeit | $t$ | T | Sekunde s |
| Länge | $l$ | L | Meter m |
| Masse | $m$ | M | Kilogramm kg |
| **elektrische Stromstärke** | $I$ | I | **Ampere A** |
| Temperatur | $T$ | Θ | Kelvin K |
| Stoffmenge | $n$ | N | Mol mol |
| Lichtstärke | $I_v$ | J | Candela cd |

Seit 2019 sind alle Basiseinheiten über **exakt festgelegte Naturkonstanten** definiert (kein Urmeter/Urkilogramm mehr): Cäsium-Frequenz $\Delta\nu_{Cs}=9\,192\,631\,770\,$Hz, Lichtgeschwindigkeit $c=299\,792\,458\,$m/s, Planck $h=6{,}62607015\cdot10^{-34}\,$Js, **Elementarladung $e=1{,}602176634\cdot10^{-19}\,$C**, Boltzmann $k_B$, Avogadro $N_A$, $K_{cd}$. Alle elektrischen Einheiten bauen auf dem Ampere auf.

## Abgeleitete Einheiten

| Größe | Formel | Einheit | Basiseinheiten |
|---|---|---|---|
| Kraft | $F=ma$ | N | kg·m·s⁻² |
| Energie/Arbeit | $W=Fs$ | J = N·m | kg·m²·s⁻² |
| Leistung | $P=\frac{\Delta W}{\Delta t}$ | W = J/s | kg·m²·s⁻³ |
| Ladung | $Q=It$ | C | A·s |
| Spannung | $U=\frac WQ$ | V | kg·m²·A⁻¹·s⁻³ |
| Widerstand | $R=\frac UI$ | Ω | kg·m²·A⁻²·s⁻³ |
| Kapazität | $C=\frac QU$ | F | A²·s⁴·kg⁻¹·m⁻² |
| Induktivität | $L=\frac{\Psi}{I}$ | H = Vs/A | kg·m²·A⁻²·s⁻² |
| magn. Flussdichte | $F=QvB$ | T = Vs/m² | kg·A⁻¹·s⁻² |

:::merke Strategie
Einheiten **herleiten** aus einer bekannten Formel, z. B. $[U]=\frac{[W]}{[Q]}=\frac{\mathrm{kg\,m^2s^{-2}}}{\mathrm{A\,s}}$. Die Tabelle wird im Laufe des Kurses ergänzt.
:::

## SI-Präfixe

| Faktor | Präfix | | Faktor | Präfix |
|---|---|---|---|---|
| $10^{-1}$ | Dezi d | | $10^1$ | Deka da |
| $10^{-2}$ | Zenti c | | $10^2$ | Hekto h |
| $10^{-3}$ | Milli m | | $10^3$ | Kilo k |
| $10^{-6}$ | Mikro µ | | $10^6$ | Mega M |
| $10^{-9}$ | Nano n | | $10^9$ | Giga G |
| $10^{-12}$ | Piko p | | $10^{12}$ | Tera T |

Alltag in der E-Technik: µF, nF, pF (Kondensatoren), mH (Spulen), kΩ, MΩ, mA, kV, MW.

## Dimensionsanalyse

Die **Dimension** beschreibt, wie eine Größe aus den Grundgrößen zusammengesetzt ist: $\dim v=\frac LT$, $\dim F=M\frac{L}{T^2}$, Winkel $\frac LL=1$ (dimensionslos). **Beide Seiten einer Gleichung müssen dieselbe Dimension haben** – der schnellste Fehlercheck überhaupt.

:::achtung Nicht-SI-Einheiten in der Luftfahrt ✈️
- Flughöhe in **Fuß**: 1 ft = 0,3048 m (FL 350 = 35 000 ft ≈ 10 668 m)
- Entfernung in **Seemeilen**: 1 NM = 1852 m
- Geschwindigkeit in **Knoten**: 1 kt = 1 NM/h = 1,852 km/h
Der Mars Climate Orbiter ging 1999 verloren, weil ein Team in Pfund-Sekunden, das andere in Newton-Sekunden rechnete.
:::

## Aufgaben (Aufgabe 1 der Folien)

:::aufgabe 1
a) $v=108\,$km/h in m/s. b) Zeige, dass $E=\frac12mv^2$ die Einheit J hat. c) Ein Triebwerk leistet $P=30\,$MW für 2 min – Energie in J?
:::loesung
a) $\frac{108\,000\,\mathrm m}{3600\,\mathrm s}=30\,$m/s. b) $\mathrm{kg}\cdot\frac{\mathrm m^2}{\mathrm s^2}=\mathrm N\cdot\mathrm m=\mathrm J$. c) $W=Pt=30\cdot10^6\cdot120=3{,}6\cdot10^9\,$J $=3{,}6\,$GJ.
:::
:::

:::aufgabe 2
Ein Flugzeug fliegt mit 450 kt auf FL 370. Geschwindigkeit in km/h und m/s, Höhe in m?
:::loesung
$450\cdot1{,}852=833{,}4\,$km/h $=231{,}5\,$m/s; $37\,000\cdot0{,}3048=11\,278\,$m.
:::
:::

## Karteikarten

:::karte
Welche SI-Basiseinheit ist für die Elektrotechnik zentral?
???
Das Ampere (A) – alle elektrischen Einheiten bauen darauf auf.
:::

:::karte
Volt in Basiseinheiten?
???
$\mathrm V=\frac{\mathrm J}{\mathrm C}=\mathrm{kg\,m^2\,A^{-1}\,s^{-3}}$
:::

:::karte
1 kt, 1 NM, 1 ft in SI?
???
1 kt = 1,852 km/h; 1 NM = 1852 m; 1 ft = 0,3048 m.
:::

:::karte
Wert der Elementarladung?
???
$e=1{,}602\cdot10^{-19}\,$C (exakt festgelegt).
:::
