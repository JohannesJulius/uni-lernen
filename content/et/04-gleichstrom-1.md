---
title: 3.1 Gleichstrom I – Strom, Ohmsches Gesetz, Widerstand, Kirchhoff, Teilerregeln
chapter: 3 Gleichstrom
minutes: 130
sources: Elektrotechnik/Elektrotechnik - 3.1 Gleichstrom I.pdf
---

:::ziel
- Strom und Stromdichte; technische Stromrichtung; Driftgeschwindigkeit.
- **Ohmsches Gesetz**, Widerstand $R=\rho\frac lA$, Leitwert; Temperaturabhängigkeit (Pt100).
- **Zählpfeilsysteme** (Verbraucher/Erzeuger).
- **Kirchhoffsche Gesetze** (Knoten, Masche) und Anzahl unabhängiger Gleichungen.
- Reihen-/Parallelschaltung, **Spannungsteiler**, **Stromteiler**; Topologie erkennen.
:::

## Strom und Stromdichte

:::def
Elektrischer **Strom** ist der gerichtete Fluss von Ladung.
- **Stromstärke** $I=\frac{\d Q}{\d t}$, $[I]=\mathrm A=\frac{\mathrm C}{\mathrm s}$.
- **Stromdichte** $\vec J=\rho_Q\vec v$ ($\rho_Q$ Ladungsdichte, $\vec v$ Geschwindigkeit), $[J]=\frac{\mathrm A}{\mathrm m^2}$; $I=\int_A\vec J\cdot\d\vec A$, bei homogener Verteilung $J=\frac IA$.
(In manchen Büchern heißt die Stromdichte $S$.)
:::

**Technische Stromrichtung:** $\vec J$ und $I$ zeigen in die Richtung, in die sich **positive** Ladung bewegen würde – unabhängig davon, wer sich tatsächlich bewegt. In **Metallen** bewegen sich Elektronen ($\rho_Q<0$), und zwar **entgegen** $\vec J$.

**Metalle:** Jedes Atom gibt Elektronen ab, die als „Elektronengas" frei zwischen den positiven Atomrümpfen beweglich sind. Der Leiter ist überall neutral. Im Feld werden Elektronen beschleunigt und durch Stöße gebremst – im Mittel stellt sich eine konstante **Driftgeschwindigkeit** $\vec v_d=\vec J/\rho_Q$ ein ($\rho_Q=-ne$).

:::bsp Driftgeschwindigkeit in Kupfer
$A=1\,$mm², $I=1\,$A, $n\approx8{,}5\cdot10^{28}\,$m⁻³: $|\rho_Q|=ne\approx1{,}36\cdot10^{10}\,$C/m³, $J=10^6\,$A/m², $v_d=\frac{J}{|\rho_Q|}\approx7{,}4\cdot10^{-5}\,$m/s $\approx0{,}26\,$m/h – schneckenlangsam! Das Licht geht trotzdem sofort an, weil sich das **Feld** fast mit Lichtgeschwindigkeit ausbreitet.
:::

## Ohmsches Gesetz und Widerstand

Für lineare Leiter (Metalle bei konstanter Temperatur) ist die Stromdichte proportional zur Feldstärke:
$$\vec J=\sigma\vec E\qquad(\sigma=\text{Leitfähigkeit}).$$
Leiter der Länge $l$, Querschnitt $A$: $I=JA=\sigma EA=\sigma\frac UlA=\frac UR$ mit
$$\boxed{R=\frac UI=\frac{l}{\sigma A}=\rho\frac lA},\qquad\rho=\frac1\sigma\ (\text{spezifischer Widerstand}).$$

| Größe | Definition | Einheit |
|---|---|---|
| Widerstand $R$ | $U/I$ | Ω (Ohm) = V/A |
| Leitwert $G$ | $1/R=I/U$ | S (Siemens) = A/V |
| spez. Widerstand $\rho$ | $RA/l$ | Ω·m (oft Ω·mm²/m) |
| Leitfähigkeit $\sigma$ | $1/\rho$ | S/m |

$\rho$, $\sigma$ sind **Materialeigenschaften**; $R$, $G$ **Bauteilgrößen** (Geometrie!). Kupfer hat immer $\sigma_{Cu}=58\,$MS/m, aber ein dickeres Kabel hat ein kleineres $R$.

## Temperaturabhängigkeit

$$R(T)=R(T_0)\,[1+\alpha(T-T_0)]\qquad(\alpha=\text{Temperaturkoeffizient},\ [\alpha]=\mathrm K^{-1},\ T_0\text{ meist }20\,°\mathrm C\text{ oder }0\,°\mathrm C).$$

| Material | $\rho$ (µΩ·m) | $\sigma$ (MS/m) | $\alpha$ (1/K) |
|---|---|---|---|
| Silber | 0,016 | 63 | $3{,}8\cdot10^{-3}$ |
| Kupfer | 0,017 | 58 | $3{,}9\cdot10^{-3}$ |
| Aluminium | 0,027 | 38 | $4{,}3\cdot10^{-3}$ |
| Messing | 0,062 | 16 | $2{,}0\cdot10^{-3}$ |

Metalle: $\alpha>0$ (Widerstand steigt mit Temperatur). **Pt100**-Thermometer: $R(0\,°\mathrm C)=100\,\Omega$, $\alpha=3{,}85\cdot10^{-3}\,$K⁻¹, −200 °C bis 850 °C, langzeitstabil – z. B. für Triebwerks- und Kabinentemperaturen.

## Zählpfeile

Vor dem Rechnen bekommt jede Spannung und jeder Strom eine **Zählrichtung** (frei wählbar, dann verbindlich). Negatives Ergebnis ⇒ es fließt andersherum.
- **Verbraucherzählpfeilsystem (VZS):** $U$ und $I$ am Bauteil **gleichsinnig** – für Widerstände; $P=UI>0$ heißt: nimmt Leistung auf.
- **Erzeugerzählpfeilsystem (EZS):** $U$ und $I$ **gegensinnig** – für Quellen; $P>0$ heißt: gibt ab.
- Beim Maschenumlauf: Pfeil in Umlaufrichtung → positiv, sonst negativ.

## Kirchhoffsche Gesetze

:::satz Knotenregel (1. Kirchhoff)
In einem Knoten wird Ladung weder gespeichert noch erzeugt:
$$\sum_kI_k=0\qquad(\text{zufließend positiv, abfließend negativ – oder umgekehrt}).$$
:::

:::satz Maschenregel (2. Kirchhoff)
Die Summe aller Spannungen in einer geschlossenen Masche ist null:
$$\sum_kU_k=0.$$
(Folgt aus der Wegunabhängigkeit der Spannung – das Potential ist eindeutig.)
:::

:::merke Anzahl unabhängiger Gleichungen
Netzwerk mit $k$ Knoten und $z$ Zweigen: **$k-1$** unabhängige Knotengleichungen und **$z-(k-1)$** unabhängige Maschengleichungen – zusammen $z$ Gleichungen für die $z$ Zweigströme. Beispiel: 2 Knoten, 3 Zweige ⇒ 1 Knoten- + 2 Maschengleichungen.
:::

## Reihen- und Parallelschaltung

:::formel Reihenschaltung
$$R_{ges}=R_1+R_2+\dots+R_n$$
Gleicher Strom durch alle; Spannungen addieren sich; $R_{ges}$ > größter Einzelwiderstand.
**Spannungsteiler:** $\displaystyle\frac{U_1}{R_1}=\frac{U_2}{R_2}=\frac{U}{R_{ges}}=I$, also $U_2=U\frac{R_2}{R_1+R_2}$.
:::

:::formel Parallelschaltung
$$\frac1{R_{ges}}=\frac1{R_1}+\dots+\frac1{R_n}\iff G_{ges}=\sum G_i,\qquad R_1\parallel R_2=\frac{R_1R_2}{R_1+R_2}.$$
Gleiche Spannung an allen; Ströme addieren sich (Knotenregel); $R_{ges}$ < kleinster Einzelwiderstand.
**Stromteiler:** $\displaystyle\frac{I_k}{G_k}=\frac{I}{G_{ges}}$, bei zwei Widerständen $I_1=I\frac{R_2}{R_1+R_2}$ (Strom teilt sich **umgekehrt** zu den Widerständen).
:::

:::achtung Reihe oder parallel? Topologie entscheidet, nicht die Zeichnung!
- **In Reihe** ⇔ zwingend derselbe Strom ⇔ zwischen ihnen liegt **kein Knoten mit Abzweig**.
- **Parallel** ⇔ beide hängen an **denselben zwei Knoten** ⇔ zwingend dieselbe Spannung.
Methode: Knoten markieren (alle nur durch Draht verbundenen Punkte sind **ein** Knoten), dann neu zeichnen. Manche Schaltungen sind **weder** reihe noch parallel (z. B. Brücken) – dann Kirchhoff oder Stern-Dreieck.
:::

## Aufgaben (Aufgaben 6 und 7 der Folien)

:::aufgabe 1
Glühlampe (12 V Blinker), $I=0{,}5\,$A. (a) $J_1$ im Glühfaden ($d_1=100\,$µm)? (b) $J_2$ in der Zuleitung ($d_2=1{,}5\,$mm)? (c) Widerstand eines Kupferdrahts $l=5\,$m, $A=3\,$mm² ($\rho_{Cu}=1{,}79\cdot10^{-8}\,\Omega$m)? (d) Gleicher Draht aus Aluminium ($2{,}6\cdot10^{-8}\,\Omega$m)?
:::loesung
(a) $A_1=\pi(50\,\mu\mathrm m)^2=7{,}85\cdot10^{-9}\,$m² ⇒ $J_1\approx6{,}4\cdot10^7\,$A/m² $=64\,$A/mm².
(b) $A_2=\pi(0{,}75\,\mathrm{mm})^2=1{,}77\,$mm² ⇒ $J_2\approx0{,}28\,$A/mm² – über 200-mal kleiner, deshalb glüht nur der Faden.
(c) $R=\frac{1{,}79\cdot10^{-8}\cdot5}{3\cdot10^{-6}}\approx29{,}8\,$mΩ. (d) $43{,}3\,$mΩ.
:::
:::

:::aufgabe 2
Spannungsteiler $R_1=R_2=1\,$kΩ an $U=12\,$V, Abgriff über $R_2$. (a) $U_a$ im Leerlauf? (b) mit Last $R_L=1\,$kΩ parallel zu $R_2$? (c) Knoten, Zweige, Gleichungen in (b)?
:::loesung
(a) $6\,$V. (b) $R_2\parallel R_L=500\,\Omega$ ⇒ $U_a=12\cdot\frac{500}{1500}=4\,$V – **der belastete Teiler bricht ein**. (c) Fasst man Quelle und $R_1$ zu einem Zweig zusammen: 2 Knoten, 3 Zweige ⇒ 1 Knoten- + 2 Maschengleichungen.
:::
:::

:::aufgabe 3
Ein Kupferkabel hat bei 20 °C $R=2\,\Omega$. Widerstand bei 80 °C?
:::loesung
$R=2\,(1+3{,}9\cdot10^{-3}\cdot60)=2\cdot1{,}234=2{,}47\,\Omega$.
:::
:::

:::aufgabe 4
$R_1=6\,\Omega$, $R_2=3\,\Omega$ parallel, dazu $R_3=4\,\Omega$ in Reihe, an $U=12\,$V. Alle Ströme?
:::loesung
$R_1\parallel R_2=2\,\Omega$, $R_{ges}=6\,\Omega$, $I=2\,$A, $U_3=8\,$V, $U_{12}=4\,$V ⇒ $I_1=\frac46=0{,}67\,$A, $I_2=\frac43=1{,}33\,$A (Summe 2 A ✓).
:::
:::

## Karteikarten

:::karte
Widerstand eines Drahtes?
???
$R=\rho\frac lA=\frac{l}{\sigma A}$
:::

:::karte
Knoten- und Maschenregel?
???
$\sum I_k=0$ im Knoten; $\sum U_k=0$ in jeder Masche.
:::

:::karte
Wie viele unabhängige Knoten-/Maschengleichungen?
???
$k-1$ Knoten-, $z-(k-1)$ Maschengleichungen.
:::

:::karte
Spannungsteiler- und Stromteilerregel?
???
$U_2=U\frac{R_2}{R_1+R_2}$; $I_1=I\frac{R_2}{R_1+R_2}$ (bzw. $I_k/G_k=I/G_{ges}$).
:::

:::karte
Temperaturabhängigkeit des Widerstands?
???
$R(T)=R_0[1+\alpha(T-T_0)]$, Metalle $\alpha>0$ (Cu ≈ 0,004/K).
:::

:::karte
VZS vs. EZS?
???
VZS: U und I gleichsinnig (Verbraucher, P>0 aufgenommen). EZS: gegensinnig (Quellen, P>0 abgegeben).
:::
