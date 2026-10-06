---
title: 6.2 Wechselstrom II – R, L, C im Wechselstromkreis, Impedanz, Admittanz, Grundschaltungen
chapter: 6 Wechselstrom
minutes: 120
sources: Elektrotechnik/Elektrotechnik - 6.2 Wechselstrom II.pdf
---

:::ziel
- Verhalten von R, C, L bei Sinusspannung: Amplituden, **Phasenlage**, Momentanleistung.
- **Impedanz** $\underline Z=\frac{\underline U}{\underline I}$ und **Admittanz** $\underline Y=\frac1{\underline Z}$; $\underline Z_R$, $\underline Z_L$, $\underline Z_C$.
- Grundschaltungen RL/RC seriell und parallel: Betrag, Phase, Zeigerdiagramm.
- Alle Gleichstrom-Methoden (Ohm, Kirchhoff, Teiler, Zweipol) komplex anwenden.
:::

## Die drei Grundelemente

:::formel Ohmscher Widerstand
$u=Ri$ ⇒ $\hat U=R\hat I$, $\varphi_u=\varphi_i$: **Strom und Spannung in Phase**.
Momentanleistung $p(t)=\hat U\hat I\sin^2\omega t=\frac{\hat U\hat I}2(1-\cos2\omega t)\ge0$, Mittelwert $P=UI$ – Energie wird ständig verbraucht (**Wirkwiderstand**).
:::

:::bsp E-Auto einphasig laden
$U=230\,$V, $I=16\,$A ⇒ $P=3{,}68\,$kW; 40-kWh-Akku in ≈ 11 h. Mit 32 A: 7,4 kW.
:::

:::formel Kondensator
$i=C\frac{\d u}{\d t}$ ⇒ $\hat U=\frac{\hat I}{\omega C}$, $\varphi_u-\varphi_i=-\frac\pi2$: **Strom eilt der Spannung um 90° voraus.**
$p(t)=UI\sin(2\omega t)$, Mittelwert 0 – Energie pendelt zwischen Quelle und elektrischem Feld (**Blindwiderstand**).
:::

:::formel Induktivität
$u=L\frac{\d i}{\d t}$ ⇒ $\hat U=\omega L\hat I$, $\varphi_u-\varphi_i=+\frac\pi2$: **Spannung eilt dem Strom um 90° voraus.**
Mittelwert der Leistung 0 – Energie pendelt mit dem Magnetfeld.
:::

:::merke Merkspruch
„Bei **Induktivitäten** die **Ströme sich verspäten**; im **Kondensator eilt der Strom vor**." (Oder: CIVIL – bei C eilt I vor U, bei L eilt U vor I.)
:::

## Impedanz und Admittanz

:::def
$$\underline Z=\frac{\underline U}{\underline I}=\frac UI\e^{j(\varphi_u-\varphi_i)}=R+jX\quad(\text{Wirk- + Blindwiderstand}),\qquad\underline Y=\frac1{\underline Z}=G+jB.$$
:::

| | R | C | L |
|---|---|---|---|
| $\underline Z$ | $R$ | $\dfrac1{j\omega C}=-j\dfrac1{\omega C}$ | $j\omega L$ |
| $\underline Y$ | $\dfrac1R$ | $j\omega C$ | $\dfrac1{j\omega L}=-j\dfrac1{\omega L}$ |
| Phase $\varphi=\varphi_u-\varphi_i$ | 0 | −90° | +90° |

**Alles aus dem Gleichstrom gilt weiter – nur komplex:** Ohm $\underline U=\underline Z\,\underline I$, Kirchhoff, Reihe ($\underline Z$ addieren), parallel ($\underline Y$ addieren), Spannungs-/Stromteiler, Ersatzquellen.

**Vorzeichen von φ:** induktiv $\varphi>0$ ($\operatorname{Im}\underline Z>0$), kapazitiv $\varphi<0$.

## Grundschaltungen

| Schaltung | $\underline Z$ | $\lvert\underline Z\rvert$ | $\varphi$ |
|---|---|---|---|
| R–L Serie | $R+j\omega L$ | $\sqrt{R^2+(\omega L)^2}$ | $\arctan\frac{\omega L}R$ |
| R–L parallel | $\underline Y=\frac1R-j\frac1{\omega L}$ | $\dfrac1{\sqrt{\frac1{R^2}+\frac1{(\omega L)^2}}}$ | $\arctan\frac R{\omega L}$ |
| R–C Serie | $R-j\frac1{\omega C}$ | $\sqrt{R^2+\frac1{(\omega C)^2}}$ | $-\arctan\frac1{\omega CR}$ |
| R–C parallel | $\underline Y=\frac1R+j\omega C$ | $\dfrac1{\sqrt{\frac1{R^2}+(\omega C)^2}}$ | $-\arctan(\omega CR)$ |

Bei der Serienschaltung ist der **Strom** gemeinsam (Bezugszeiger), bei der Parallelschaltung die **Spannung**.

:::rezept Zeigerdiagramm einer Serienschaltung
1. Gemeinsamen Strom $\underline I$ als Bezugszeiger zeichnen (oder wie gegeben).
2. $\underline U_R$ parallel zu $\underline I$, $\underline U_L$ um +90° gedreht, $\underline U_C$ um −90° gedreht.
3. Zeiger aneinanderhängen: Summe = $\underline U$ (Maschenregel). Maßstab angeben!
:::

## Aufgabe 19 der Folien

:::aufgabe 1
$R=40\,\Omega$ in Reihe mit $\omega L=30\,\Omega$ an $\underline U=10\,\mathrm V\e^{j0}$ (Effektivwert). (a) $\underline Z$? (b) $\underline I$, $\underline U_R$, $\underline U_L$? (c) Zeigerdiagramm. (d) $I$, $\hat I$, $\varphi_i$?
:::loesung
(a) $\underline Z=40+j30=50\,\Omega\,\e^{j36{,}9°}$.
(b) $\underline I=\frac{10}{50}\e^{-j36{,}9°}=0{,}2\,\mathrm A\,\e^{-j36{,}9°}=(0{,}16-j0{,}12)\,$A; $\underline U_R=8\,\mathrm V\e^{-j36{,}9°}=(6{,}4-j4{,}8)\,$V; $\underline U_L=j30\cdot\underline I=6\,\mathrm V\e^{j53{,}1°}=(3{,}6+j4{,}8)\,$V. Kontrolle $\underline U_R+\underline U_L=10\,$V ✓ (3-4-5-Dreieck!).
(c) $\underline U_R$ und $\underline U_L$ stehen senkrecht aufeinander und ergeben zusammen $\underline U$ auf der reellen Achse; $\underline I$ liegt parallel zu $\underline U_R$.
(d) $I=0{,}2\,$A, $\hat I=0{,}28\,$A, $\varphi_i=-36{,}9°$ (Strom eilt nach – induktiv).
:::
:::

:::aufgabe 2
Ein Kondensator $C=10\,$µF an 230 V/50 Hz. Strom?
:::loesung
$X_C=\frac1{\omega C}=\frac1{314\cdot10^{-5}}=318\,\Omega$, $I=\frac{230}{318}=0{,}72\,$A, eilt 90° vor.
:::
:::

:::aufgabe 3
$R=100\,\Omega$ parallel zu $C=10\,$µF bei $\omega=1000\,$s⁻¹. $\underline Z$ in Polarform?
:::loesung
$\underline Y=0{,}01+j0{,}01\,$S ⇒ $\underline Z=\frac1{0{,}01\sqrt2\e^{j45°}}=70{,}7\,\Omega\,\e^{-j45°}$ (kapazitiv).
:::
:::

## Karteikarten

:::karte
Impedanz von L und C?
???
$\underline Z_L=j\omega L$, $\underline Z_C=\frac1{j\omega C}=-\frac{j}{\omega C}$.
:::

:::karte
Phasenlage an C und L?
???
C: Strom eilt 90° vor. L: Spannung eilt 90° vor (Strom eilt nach).
:::

:::karte
Wie verknüpft man Impedanzen in Reihe und parallel?
???
Reihe: $\underline Z$ addieren. Parallel: $\underline Y=1/\underline Z$ addieren.
:::

:::karte
Woran erkennt man induktives / kapazitives Verhalten?
???
$\operatorname{Im}\underline Z>0$ (φ>0) induktiv; $\operatorname{Im}\underline Z<0$ kapazitiv.
:::
