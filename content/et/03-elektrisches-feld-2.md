---
title: 2.2 Das elektrische Feld II – Feldlinien, Gauß, Dielektrika, Potential, Spannung, Kondensatoren
chapter: 2 Das elektrische Feld
minutes: 130
sources: Elektrotechnik/Elektrotechnik - 2.2 Elektrisches Feld II.pdf
---

:::ziel
- Feldlinienbilder lesen und skizzieren; **Superposition**.
- Elektrische Flussdichte $\vec D$, **Satz von Gauß** bei symmetrischen Anordnungen.
- Dielektrika, Permittivitätszahl $\varepsilon_r$.
- **Potential**, **Spannung**, elektrische **Arbeit** (wegunabhängig).
- Homogenes Feld, **Kondensatoren**: $C=Q/U$, Platten-, Kugel-, Zylinderkondensator, Schaltungen, **Energie**.
:::

## Feldlinien

- Zeigen Richtung der Kraft auf eine **positive** Probeladung; verlaufen von **+ nach −**.
- **Dichte** der Linien ∝ Feldstärke. Feldlinien schneiden sich nie.
- Punktladung: radial; Dipol (+/−): Bögen von + nach −; zwei gleichnamige: Linien weichen sich aus, dazwischen feldfreier Punkt.
- Plattenkondensator: zwischen den Platten **homogen** (parallel, gleich dicht).

:::satz Superpositionsprinzip
Das Feld mehrerer Ladungen ist die **Vektorsumme** der Einzelfelder: $\vec E(\vec r)=\sum_i\vec E_i(\vec r)$. Felder stören sich nicht, sie addieren sich (für kontinuierliche Verteilungen: Integral).
:::

## Elektrische Flussdichte und Satz von Gauß

:::def Elektrische Flussdichte, Fluss
$$\vec D=\varepsilon_0\vec E\ (\text{Vakuum}),\qquad[\vec D]=\frac{\mathrm C}{\mathrm m^2};\qquad\Psi=\int_A\vec D\cdot\d\vec A\ (\text{Fluss durch eine Fläche}).$$
:::

:::satz Satz von Gauß
Der elektrische Fluss durch eine **geschlossene** Oberfläche ist gleich der eingeschlossenen Ladung:
$$\oint_A\vec D\cdot\d\vec A=Q_{innen}.$$
Feldlinien beginnen und enden nur auf Ladungen. Besonders nützlich bei hoher Symmetrie (Kugel, Zylinder, Ebene): Dann ist $D$ auf der Hüllfläche konstant und man kann ausklammern.
:::

:::bsp Punktladung mit Gauß
Kugel mit Radius $r$ um $Q$: $D(r)\cdot4\pi r^2=Q\Rightarrow D=\frac{Q}{4\pi r^2}$, $E=\frac{Q}{4\pi\varepsilon_0r^2}$ – das Coulomb-Feld, ohne Coulombsches Gesetz hergeleitet.
:::

## Elektrisches Feld in Materie

In isolierenden Stoffen (**Dielektrika**) verschieben sich positive und negative Ladungen gegeneinander (**Polarisation**). Das erzeugt ein Gegenfeld, das das äußere Feld schwächt:
$$\vec E_{Materie}=\frac1{\varepsilon_r}\vec E_{Vakuum},\qquad\varepsilon_r\ge1\ (\text{Permittivitätszahl}).$$

| Material | $\varepsilon_r$ |
|---|---|
| Luft | 1,00059 |
| Gummi | 2,5–3,5 |
| Glas | 5–7 |
| destilliertes Wasser | 81 |

Konvention: $\vec D=\varepsilon_0\varepsilon_r\vec E=\varepsilon\vec E$ bezieht sich auf die **freien** Ladungen; der Satz von Gauß gilt unverändert ($\oint\vec D\cdot\d\vec A=Q_{frei}$). $D$ ändert sich beim Eintauchen nicht, $E$ wird um $\varepsilon_r$ kleiner.

## Arbeit, Potential, Spannung

Bewegt man eine Probeladung $Q_P$ im Feld einer Punktladung $Q$ von $r_1$ nach $r_2$:
$$W_{12}=\int_{r_1}^{r_2}F(r)\,\d r=Q_P\int_{r_1}^{r_2}\frac{Q}{4\pi\varepsilon r^2}\d r=Q_P\left[\frac{Q}{4\pi\varepsilon r_1}-\frac{Q}{4\pi\varepsilon r_2}\right]=Q_P(\varphi_1-\varphi_2).$$
Die Arbeit hängt **nur von Anfangs- und Endpunkt** ab (konservatives Feld, vgl. TM 1 Potential), und der Rest ist eine Eigenschaft des Feldes:

:::def Potential, Spannung
- **Potential** einer Punktladung: $\varphi(r)=\dfrac{Q}{4\pi\varepsilon_0\varepsilon_rr}$ (Bezug: $\varphi(\infty)=0$), Einheit $\frac{\mathrm J}{\mathrm C}=\mathrm V$.
- **Spannung** = Potentialdifferenz: $U_{12}=\varphi_1-\varphi_2=\displaystyle\int_{P_1}^{P_2}\vec E\cdot\d\vec s$.
- **Arbeit**: $W_{12}=Q\cdot U_{12}$ – unabhängig vom Weg.
:::

**Äquipotentialflächen** (gleiches $\varphi$) stehen **senkrecht** auf den Feldlinien; entlang ihnen wird keine Arbeit verrichtet (wie Höhenlinien auf einer Landkarte; Kraft in Richtung des stärksten Gefälles). Elektrostatische Felder sind **Potentialfelder**: Feldlinien beginnen/enden auf Ladungen (Quellen/Senken), sie sind nie geschlossen.

## Homogenes Feld

Konstantes $\vec E$, parallele Feldlinien, Äquipotentialflächen senkrecht dazu:
$$U=E\cdot d\qquad(d=\text{Abstand in Feldrichtung}).$$

## Kondensatoren

:::def Kapazität
Ein Kondensator speichert Ladung ($+Q$ und $-Q$ auf zwei Elektroden):
$$C=\frac QU,\qquad[C]=\frac{\mathrm C}{\mathrm V}=\mathrm F\ (\text{Farad}).$$
:::

:::achtung Kapazität ≠ Kapazität
Die „Kapazität" einer **Batterie** in mAh ist eine **Ladungsmenge** ($1\,$mAh $=10^{-3}\,\mathrm A\cdot3600\,\mathrm s=3{,}6\,$C), nicht Farad!
:::

:::formel Kondensatorformen
- **Plattenkondensator:** $E=\frac{Q}{\varepsilon A}$, $U=Ed$ ⇒ $\displaystyle C=\frac{\varepsilon_0\varepsilon_rA}{d}$ (größer mit Fläche, Permittivität, kleinerem Abstand).
- **Kugelkondensator** (Radien $R_1<R_2$): $C=4\pi\varepsilon\frac{R_1R_2}{R_2-R_1}$.
- **Zylinderkondensator** (Koaxialkabel, Länge $l$): $C=\dfrac{2\pi\varepsilon l}{\ln(R_2/R_1)}$.
Herleitung jeweils: Gauß → $E(r)$ → $U=\int E\,\d r$ → $C=Q/U$.
:::

:::formel Schaltungen
- **Parallel:** gleiche Spannung, Ladungen addieren sich ⇒ $C_{ges}=C_1+C_2+\dots$
- **Reihe:** gleiche Ladung, Spannungen addieren sich ⇒ $\dfrac1{C_{ges}}=\dfrac1{C_1}+\dfrac1{C_2}+\dots$ (Herleitung: $\frac{U}{Q}=\frac{U_1+U_2+\dots}{Q}=\frac1{C_1}+\frac1{C_2}+\dots$)
Zwei in Reihe: $C_{ges}=\frac{C_1C_2}{C_1+C_2}$; die Spannung teilt sich **umgekehrt** zu den Kapazitäten auf.
:::

:::formel Energie im Kondensator
Beim Aufladen wächst $U(q)=\frac qC$ mit:
$$W=\int_0^QU(q)\,\d q=\int_0^Q\frac qC\d q=\frac{Q^2}{2C}=\frac12QU=\frac12CU^2,\qquad[W]=\mathrm{V\,C}=\mathrm{W\,s}=\mathrm J.$$
:::

**Geschichtete Dielektrika:** nebeneinander (Teilflächen $A_1,A_2$) = Parallelschaltung: $C=\frac{\varepsilon_0}{d}(\varepsilon_{r1}A_1+\varepsilon_{r2}A_2)$; hintereinander (Dicken $d_1,d_2$) = Reihenschaltung: $C=\frac{\varepsilon_0\varepsilon_{r1}\varepsilon_{r2}A}{\varepsilon_{r2}d_1+\varepsilon_{r1}d_2}$. Anwendung: **kapazitiver Füllstandssensor** (z. B. Öl/Treibstoff im Tank): Steigt die Flüssigkeit, ändert sich der Anteil mit hohem $\varepsilon_r$ und damit $C$.

## Aufgaben (Aufgaben 3–5 der Folien)

:::aufgabe 1
Zwei gleichnamige Punktladungen $Q$ und $2Q$ im Abstand $d$: Wo ist das Feld null?
:::loesung
$\frac{Q}{x^2}=\frac{2Q}{(d-x)^2}\Rightarrow d-x=\sqrt2x\Rightarrow x=\frac{d}{1+\sqrt2}\approx0{,}41d$ von der **kleinen** Ladung – also näher an der kleinen.
:::
:::

:::aufgabe 2
$Q=10\,$nC, $r=24\,$cm, nun in destilliertem Wasser ($\varepsilon_r=81$). $E$ und $D$?
:::loesung
$E=\frac{1560}{81}\approx19{,}3\,$V/m; $D=\frac{Q}{4\pi r^2}=\frac{10^{-8}}{4\pi\cdot0{,}0576}\approx1{,}38\cdot10^{-8}\,$C/m² – **unverändert** (hängt nur von der freien Ladung ab).
:::
:::

:::aufgabe 3
Spannung zwischen $r_1=24\,$cm und $r_2=50\,$cm um $Q=10\,$nC (Vakuum)?
:::loesung
$U=\frac{Q}{4\pi\varepsilon_0}\left(\frac1{r_1}-\frac1{r_2}\right)=89{,}9\,\mathrm{Vm}\cdot(4{,}167-2)\,\mathrm m^{-1}\approx195\,$V.
:::
:::

:::aufgabe 4
$C_1=1\,$µF und $C_2=4\,$µF in Reihe an $U=5000\,$V. $C_{ges}$, $U_1$, $U_2$, gespeicherte Energie?
:::loesung
$C_g=\frac{1\cdot4}{5}=0{,}8\,$µF; $Q=C_gU=4\,$mC; $U_1=\frac Q{C_1}=4000\,$V, $U_2=1000\,$V; $W=\frac12\cdot0{,}8\cdot10^{-6}\cdot5000^2=10\,$J.
:::
:::

:::aufgabe 5
Plattenkondensator $A=100\,$cm², $d=1\,$mm, Luft. $C$? Wie ändert sich $C$, wenn man eine Glasplatte ($\varepsilon_r=6$) von 0,5 mm Dicke einschiebt?
:::loesung
$C=\frac{8{,}854\cdot10^{-12}\cdot0{,}01}{0{,}001}=88{,}5\,$pF. Mit Glas: Reihenschaltung zweier Schichten, Luft ($\varepsilon_{r1}=1$, $d_1=0{,}5\,$mm) und Glas ($\varepsilon_{r2}=6$, $d_2=0{,}5\,$mm): $C=\frac{\varepsilon_0\varepsilon_{r1}\varepsilon_{r2}A}{\varepsilon_{r2}d_1+\varepsilon_{r1}d_2}=\frac{6\,\varepsilon_0A}{3{,}5\,\mathrm{mm}}=\frac67\cdot2\cdot88{,}5\,\mathrm{pF}\approx152\,$pF.
:::
:::

## Karteikarten

:::karte
Satz von Gauß (Elektrostatik)?
???
$\oint\vec D\cdot\d\vec A=Q_{innen}$
:::

:::karte
Zusammenhang Spannung, Potential, Feld?
???
$U_{12}=\varphi_1-\varphi_2=\int_1^2\vec E\cdot\d\vec s$; homogen: $U=Ed$.
:::

:::karte
Kapazität des Plattenkondensators?
???
$C=\frac{\varepsilon_0\varepsilon_rA}{d}$
:::

:::karte
Kondensatoren parallel / in Reihe?
???
Parallel: $C=\sum C_i$. Reihe: $\frac1C=\sum\frac1{C_i}$.
:::

:::karte
Energie im Kondensator?
???
$W=\frac12CU^2=\frac12QU=\frac{Q^2}{2C}$
:::

:::karte
Was bewirkt ein Dielektrikum?
???
Polarisation schwächt das Feld: $E=E_0/\varepsilon_r$; $D$ (freie Ladungen) bleibt; Kapazität steigt um $\varepsilon_r$.
:::
