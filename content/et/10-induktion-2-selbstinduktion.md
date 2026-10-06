---
title: 5.2 Induktion II – Selbstinduktion, Induktivität, magnetische Energie, Kräfte an Grenzflächen
chapter: 5 Elektromagnetische Induktion
minutes: 100
sources: Elektrotechnik/Elektrotechnik - 5.2 Induktion II.pdf
---

:::ziel
- Selbstinduktion und **Induktivität** $L=\frac{N^2}{R_m}$ herleiten; $u=L\frac{\d i}{\d t}$ im VZS.
- Einfluss von Eisen und Luftspalt auf $L$; Reihen- und Parallelschaltung.
- Magnetische Energie $W=\frac12LI^2$, Energiedichte $w=\frac12HB$.
- Kraft am Luftspalt aus der Energie herleiten; Maxwellsche Zugspannung.
:::

## Selbstinduktion

Ein Strom durch eine Spule erzeugt ein eigenes Magnetfeld $\Phi\propto I$. Ändert sich $I$, ändert sich $\Phi$ – und das induziert eine Spannung **in derselben Spule**.

Mit dem magnetischen Kreis: $\Phi=\frac{\Theta}{R_m}=\frac{NI}{R_m}$ ⇒
$$U_{ind}=-N\frac{\d\Phi}{\d t}=-\frac{N^2}{R_m}\frac{\d I}{\d t}=-L\frac{\d I}{\d t}.$$

:::formel Induktivität
$$L=\frac{N^2}{R_m}=N^2\frac{\mu_0\mu_rA}{l},\qquad[L]=\frac{\mathrm{Wb}}{\mathrm A}=\frac{\mathrm{Vs}}{\mathrm A}=\mathrm H\ (\text{Henry}).$$
$L$ verbindet den Magnetkreis mit der Schaltung: eine Zahl für Geometrie, Material und Windungszahl ($\propto N^2$!).
:::

:::merke Vorzeichen: Klemmenspannung
Die messbare **Klemmenspannung** im Verbraucherzählpfeilsystem ist
$$u=-u_{ind}=+L\frac{\d i}{\d t}.$$
(Das Ringintegral der induzierten Spannung läuft entgegen dem Klemmenspannungspfeil.)
:::

Folgerungen: Der Strom durch eine Induktivität kann **nicht springen** (sonst $u\to\infty$) – wichtig für Schaltvorgänge (Kap. 8). Beim Abschalten entstehen hohe Spannungsspitzen (Freilaufdiode!).

### Eisen und Luftspalt

Bei Ferromagneten hängt $\mu_r$ von $I$ ab (Hysterese, Sättigung) ⇒ $L$ ist nicht konstant. Abhilfe: **Luftspalt**:
$$L=N^2\frac{\mu_0A}{\frac{l_E}{\mu_r}+\delta}\approx N^2\frac{\mu_0A}{\delta},$$
dann hat $\mu_r$ kaum Einfluss. Für $\delta\to0$ wird $L$ nicht beliebig groß: Der Eisenweg mit endlichem $\mu_r$ bleibt, und das Eisen sättigt.

### Schaltungen (ohne magnetische Kopplung)

- **Reihe:** $L_{ges}=\sum L_i$ (gleicher Strom, Spannungen addieren sich).
- **Parallel:** $\frac1{L_{ges}}=\sum\frac1{L_i}$ (gleiche Spannung: $\frac{U}{L_{ges}}=\frac{\d I_{ges}}{\d t}=\sum\frac{\d I_i}{\d t}=\sum\frac U{L_i}$).
Gleiche Regeln wie bei Widerständen – **umgekehrt** zu Kondensatoren.

## Energie des Magnetfelds

RL-Kreis an $U_0$: $U_0=IR+L\frac{\d I}{\d t}$ ⇒ Energie $\d W=U_0I\,\d t=\underbrace{I^2R\,\d t}_{\text{Wärme}}+\underbrace{LI\,\d I}_{\text{Magnetfeld}}$.

:::formel Magnetische Energie
$$W_m=\int_0^ILI'\,\d I'=\frac12LI^2;\qquad\text{Energiedichte }w_m=\frac12HB=\frac{B^2}{2\mu_0\mu_r},\quad W_m=w_mV\ (\text{homogen}).$$
Analog Kondensator: $W=\frac12CU^2$, $w_e=\frac12ED$.
:::

## Kräfte an Grenzflächen

Vergrößert man einen Luftspalt (Fläche $A$) um $\d l$, entsteht neues Feldvolumen $A\,\d l$ mit Energiedichte $\frac{B^2}{2\mu_0}$ (bei konstantem Fluss): $\d W=\frac{B^2}{2\mu_0}A\,\d l=F\,\d l$ ⇒
$$F=\frac{B^2A}{2\mu_0}\qquad\text{(Formel aus Kap. 4 – jetzt hergeleitet ✓)}.$$
**Maxwellsche Zugspannung** (Kraft pro Fläche): $\sigma=\frac{F}{A}=\frac{B^2}{2\mu_0}$. Zahlengefühl: bei 1 T ist $\sigma\approx40\,\frac{\mathrm N}{\mathrm{cm}^2}$ – 1 cm² trägt 4 kg! Anwendungen: Hubmagnete, Relais, Schütze, Magnetverriegelungen.

## Aufgaben (Aufgaben 15 und 16 der Folien)

:::aufgabe 1 Drosselspule
Ringkern $\mu_r=4000$, $l_{Fe}=20\,$cm, $A=4\,$cm², Luftspalt $l_L=0{,}5\,$mm, $N=50$, $I=2\,$A. (a) $R_{m,Fe}$, $R_{m,L}$ – wer dominiert? (b) $\Phi$? (c) $B$, $H_{Fe}$, $H_L$? (d) $L$?
:::loesung
(a) $R_{m,Fe}=\frac{0{,}2}{4\pi\cdot10^{-7}\cdot4000\cdot4\cdot10^{-4}}\approx9{,}95\cdot10^4\,$H⁻¹; $R_{m,L}=\frac{5\cdot10^{-4}}{4\pi\cdot10^{-7}\cdot4\cdot10^{-4}}\approx9{,}95\cdot10^5\,$H⁻¹ – der **Luftspalt** (10-mal größer).
(b) $\Theta=100\,$A, $R_{m,ges}\approx1{,}09\cdot10^6$ ⇒ $\Phi\approx9{,}1\cdot10^{-5}\,$Wb.
(c) $B=\frac\Phi A\approx0{,}23\,$T (überall gleich, gleicher Querschnitt); $H_{Fe}=\frac{B}{\mu_0\mu_r}\approx45\,$A/m; $H_L=\frac B{\mu_0}\approx1{,}8\cdot10^5\,$A/m.
(d) $L=\frac{N^2}{R_m}=\frac{2500}{1{,}09\cdot10^6}\approx2{,}3\,$mH.
:::
:::

:::aufgabe 2 Bestückungsautomat
Elektromagnet $N=1000$, $R_{m,ges}=10^6\,$H⁻¹, Betriebsstrom 0,4 A. (a) $L$? (b) Beim Einschalten steigt $I$ konstant mit 0,5 A/ms – Spannung an $L$? (c) Gespeicherte Energie bei 0,4 A? (d) Rechteckspannung $+U_1$ für $t_1$, dann 0: Stromverlauf?
:::loesung
(a) $L=\frac{10^6}{10^6}=1\,$H. (b) $u=L\frac{\d i}{\d t}=1\cdot500=500\,$V. (c) $W=\frac12\cdot1\cdot0{,}4^2=0{,}08\,$J. (d) $i(t)$ steigt während $t_1$ **linear** mit Steigung $\frac{U_1}L$ und bleibt danach (ideale Spule, $u=0$) konstant – eine Rampe mit Plateau.
:::
:::

:::aufgabe 3
Zwei Spulen $L_1=2\,$mH und $L_2=6\,$mH. Gesamtinduktivität in Reihe und parallel?
:::loesung
Reihe 8 mH; parallel $\frac{2\cdot6}{8}=1{,}5\,$mH.
:::
:::

## Karteikarten

:::karte
Induktivität einer Spule?
???
$L=\frac{N^2}{R_m}=N^2\frac{\mu_0\mu_rA}{l}$; [L] = H = Vs/A.
:::

:::karte
Spannung an einer Induktivität (VZS)?
???
$u=L\frac{\d i}{\d t}$
:::

:::karte
Energie im Magnetfeld?
???
$W=\frac12LI^2$; Energiedichte $w=\frac12HB$.
:::

:::karte
Maxwellsche Zugspannung?
???
$\sigma=\frac{B^2}{2\mu_0}$ (≈ 40 N/cm² bei 1 T).
:::

:::karte
Kann der Strom durch eine Spule springen?
???
Nein (würde unendliche Spannung erfordern) – Strom in L ist stetig.
:::
