---
title: 7 Drehstrom – Dreiphasensystem, Stern- und Dreieckschaltung, Leistung, Kompensation
chapter: 7 Drehstrom
minutes: 90
sources: Elektrotechnik/Elektrotechnik - 7 Drehstrom.pdf
---

:::ziel
- Warum Drehstrom? Materialersparnis, konstante Leistung, Drehfeld.
- Symmetrisches Dreiphasensystem; Stern- und Außenleiterspannung, $U_\Delta=\sqrt3U_Y$.
- Verbraucher in **Stern (Y)** und **Dreieck (Δ)**: Strang- und Leitergrößen.
- Leistung $S=\sqrt3U_\Delta I$; Y–Δ-Vergleich; Kompensation $C_\Delta=C_Y/3$.
:::

## Warum Drehstrom?

Fast die gesamte Energieversorgung arbeitet mit **drei um 120° versetzten** Wechselspannungen:
- **Weniger Material:** 3 (bzw. 4) Leiter übertragen die Leistung von drei getrennten Kreisen (6 Leiter).
- **Konstante Leistung:** Die Gesamtleistung pendelt nicht (anders als einphasig).
- **Drehfeld gratis:** Drei um 120° versetzte Spulen, gespeist mit den drei Strömen, erzeugen ein Magnetfeld mit **konstantem Betrag**, das sich mit $\omega$ dreht ⇒ robuste Motoren ohne Schleifringe/Kommutator (**Asynchronmaschine**).

## Das symmetrische Dreiphasensystem

Effektivwertzeiger der **Sternspannungen** (Länge $U_Y$):
$$\underline U_1=U_Y\e^{j0°},\quad\underline U_2=U_Y\e^{-j120°},\quad\underline U_3=U_Y\e^{+j120°},\qquad\underline U_1+\underline U_2+\underline U_3=0.$$

**Vierleiternetz:** Außenleiter L1, L2, L3 und Neutralleiter N (Sternpunkt).
- **Sternspannung** $U_Y$: Außenleiter ↔ N.
- **Außenleiter-/Dreieckspannung** $U_\Delta$: Außenleiter ↔ Außenleiter, z. B. $\underline U_{12}=\underline U_1-\underline U_2$.

:::formel Zusammenhang
Zeigersubtraktion (gleichschenkliges Dreieck mit 30°): $U_\Delta=2\cos30°\cdot U_Y=\sqrt3\,U_Y$.
Niederspannungsnetz: $U_Y=230\,$V, $U_\Delta=400\,$V – „Drehstromnetz 400/230 V".
:::

## Verbraucher in Stern- und Dreieckschaltung

:::formel Sternschaltung (Y)
Drei gleiche Impedanzen $\underline Z$ zwischen Außenleiter und Sternpunkt:
$$U_{Str}=U_Y=\frac{U_\Delta}{\sqrt3},\qquad I_{Str}=I=\frac{U_Y}{Z}.$$
Neutralleiterstrom $\underline I_N=\underline I_1+\underline I_2+\underline I_3=0$ bei symmetrischer Last.
:::

:::formel Dreieckschaltung (Δ)
Drei gleiche Impedanzen jeweils zwischen zwei Außenleitern:
$$U_{Str}=U_\Delta,\qquad I_{Str}=\frac{U_\Delta}{Z}=\frac{I}{\sqrt3}\quad(\text{Knotenregel an den Ecken}).$$
:::

:::merke
Der Faktor $\sqrt3$ sitzt bei **Y zwischen den Spannungen**, bei **Δ zwischen den Strömen**.
:::

## Leistung

Symmetrischer Verbraucher: $S=3U_{Str}I_{Str}$. In beiden Schaltungen mit Netzgrößen ($U_\Delta$, Außenleiterstrom $I$):
$$S=\sqrt3\,U_\Delta\,I,\qquad P=S\cos\varphi,\qquad Q=S\sin\varphi.$$

:::achtung Dieselbe Last in Y und Δ
Dieselbe Impedanz nimmt in **Δ die dreifache Leistung** auf wie in Y (Strangspannung $\sqrt3$-mal größer, $P\propto U_{Str}^2$). Anwendung: **Stern-Dreieck-Anlauf** von Motoren (sanft in Y starten, dann auf Δ umschalten).
:::

**Konstante Momentanleistung** (Vertiefung): Die Pendelanteile ($2\omega$) der drei Strangleistungen heben sich auf: $p(t)=p_1+p_2+p_3=3U_{Str}I_{Str}\cos\varphi=P=$ const. ⇒ Drehstrommotoren liefern konstantes Moment (kein Rütteln), Generatoren werden gleichmäßig belastet.

## Kompensation im Drehstromnetz

Kondensatoren parallel zum induktiven Verbraucher:
- **in Stern** (an $U_Y$): $Q_C=3U_Y^2\omega C_Y\Rightarrow C_Y=\frac{Q_C}{3U_Y^2\omega}$
- **in Dreieck** (an $U_\Delta$): $C_\Delta=\frac{Q_C}{3U_\Delta^2\omega}=\frac{C_Y}3$ – nur ein Drittel der Kapazität, aber Kondensatoren müssen für 400 V ausgelegt sein.

## Aufgaben (Aufgabe 22 der Folien)

:::aufgabe 1 Heizofen
Heizstäbe $R=20\,\Omega$ pro Strang in Δ an 400/230 V. (a) Strang- und Außenleiterströme? (b) $P_\Delta$? (c) $P_Y$ in Sternschaltung? (d) Faktor?
:::loesung
(a) $I_{Str}=\frac{400}{20}=20\,$A, $I=\sqrt3\cdot20=34{,}6\,$A. (b) $P_\Delta=3\cdot400\cdot20=24\,$kW. (c) $I=\frac{230}{20}=11{,}5\,$A, $P_Y=3\cdot230\cdot11{,}5\approx7{,}9\,$kW. (d) Faktor 3, weil $U_{Str}$ um $\sqrt3$ größer ist und $P=\frac{U^2}R$.
:::
:::

:::aufgabe 2
Ein Motor nimmt an 400 V $P=15\,$kW bei $\cos\varphi=0{,}8$ auf. Leiterstrom? Kompensation auf $\cos\varphi=0{,}95$ mit Kondensatoren in Δ (50 Hz)?
:::loesung
$S=18{,}75\,$kVA, $I=\frac{S}{\sqrt3\cdot400}=27{,}1\,$A. $Q_C=15(\tan36{,}87°-\tan18{,}19°)=15(0{,}75-0{,}329)=6{,}32\,$kvar. $C_\Delta=\frac{6320}{3\cdot400^2\cdot314}\approx42\,$µF pro Strang.
:::
:::

## Karteikarten

:::karte
Zusammenhang Stern- und Außenleiterspannung?
???
$U_\Delta=\sqrt3U_Y$ (400 V = √3 · 230 V).
:::

:::karte
Stern vs. Dreieck: wo sitzt √3?
???
Y: $U_{Str}=U_\Delta/\sqrt3$, $I_{Str}=I$. Δ: $U_{Str}=U_\Delta$, $I_{Str}=I/\sqrt3$.
:::

:::karte
Drehstromleistung?
???
$S=\sqrt3U_\Delta I$, $P=S\cos\varphi$.
:::

:::karte
Leistungsverhältnis gleiche Last Δ/Y?
???
3 : 1
:::

:::karte
Warum ist der Neutralleiterstrom bei symmetrischer Last null?
???
Weil sich die drei um 120° versetzten Strangströme zu null addieren.
:::
