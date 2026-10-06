---
title: 4.1 Magnetismus I – Magnetfeld, Lorentzkraft, Durchflutungsgesetz, Materie
chapter: 4 Magnetismus
minutes: 130
sources: Elektrotechnik/Elektrotechnik - 4.1 Magnetismus I.pdf
---

:::ziel
- Magnetfelder: Pole, Feldlinien (immer geschlossen), Flussdichte $\vec B$, Rechte-Faust-Regel.
- Feld des geraden Leiters; Kraft zwischen Leitern; **Lorentzkraft** $\vec F=Q\vec v\times\vec B$, $\vec F=I\vec l\times\vec B$; Kreisbahn geladener Teilchen.
- Magnetischer Fluss $\Phi$, Feldstärke $\vec H$, **Durchflutungsgesetz**; lange Spule.
- Vergleich elektrisches/magnetisches Feld.
- Materie: Dia-, Para-, Ferromagnetismus, **Hysterese**, hart-/weichmagnetisch.
:::

## Elektrizität und Magnetismus

Untrennbar verbunden: ruhende Ladungen → **Elektrostatik**; konstante Ströme → **Magnetostatik**; langsam veränderliche → **Quasistatik**; allgemein → **Elektrodynamik** (Maxwell).

**Magnetpole:** Jeder Magnet hat Nord- und Südpol (Nordpol zeigt auf der Erde nach Norden). Gleichnamige Pole stoßen sich ab, ungleichnamige ziehen sich an. Es gibt **keine magnetischen Monopole**.

**Magnetfelder entstehen durch bewegte Ladungen (Ströme).** Zwei parallele stromdurchflossene Leiter üben aufeinander die Kraft
$$\frac{F}{l}=\frac{\mu_0}{2\pi}\cdot\frac{I_1I_2}{d}\qquad(\mu_0\approx4\pi\cdot10^{-7}\,\tfrac{\mathrm N}{\mathrm A^2}=1{,}257\cdot10^{-6}\,\tfrac{\mathrm{Vs}}{\mathrm{Am}})$$
aus – gleichsinnige Ströme ziehen sich an, gegensinnige stoßen sich ab.

## Feldlinien und Flussdichte

- Feldlinien zeigen dorthin, wohin sich der **Nordpol** einer Kompassnadel ausrichtet; außerhalb eines Magneten von **N nach S**.
- Magnetische Feldlinien sind **immer geschlossen** (innerhalb des Magneten von S nach N).
- Die **magnetische Flussdichte** $\vec B$ zeigt entlang der Feldlinien; Betrag ∝ Liniendichte. Einheit **Tesla**: $[B]=\frac{\mathrm N}{\mathrm{Am}}=\frac{\mathrm{Vs}}{\mathrm m^2}=\mathrm T$.

:::merke Rechte-Faust-Regel
Daumen in **Stromrichtung** → gekrümmte Finger zeigen die **Feldrichtung** um den Leiter (Schraubenregel: Schraube in Stromrichtung eindrehen = Drehsinn der Feldlinien).
:::

:::formel Gerader, unendlich langer Leiter
$$B=\frac{\mu_0I}{2\pi r}$$
Beispiel: Für $B=1\,$T in $r=1\,$m bräuchte man $I=\frac{2\pi rB}{\mu_0}=5\cdot10^6\,$A!
:::

| Quelle | $B$ |
|---|---|
| Erdmagnetfeld | 30–60 µT |
| Kühlschrankmagnet | 1–10 mT |
| Magnetstreifen | 10–100 mT |
| Lautsprecher | 0,1–1 T |
| MRT | 1–3 T |
| LHC | 8 T |
| Fusionskraftwerk | 5–15 T |

## Kräfte im Magnetfeld

:::formel Lorentzkraft
Auf eine bewegte Ladung: $\vec F=Q\,(\vec v\times\vec B)$.
Auf einen stromdurchflossenen Leiter (Länge $\vec l$ in Stromrichtung): $\vec F=I\,(\vec l\times\vec B)$, für $\vec l\perp\vec B$: $F=IlB$.
**Rechte-Hand-Regel:** Daumen = Strom (Ursache), Zeigefinger = Feld, Mittelfinger = Kraft.
:::

Die Kraft steht **senkrecht** auf der Bewegung – deshalb verrichtet sie keine Arbeit und man kann $\vec B$ nicht einfach als „Kraft pro Ladung" definieren wie $\vec E$.

:::bsp Kreisbahn
Eine Ladung mit $\vec v\perp\vec B$: Die Lorentzkraft wirkt als Zentripetalkraft, $QvB=\frac{mv^2}r$:
$$r=\frac{mv}{QB},\qquad f=\frac{QB}{2\pi m}\ (\text{unabhängig von }v!).$$
Anwendungen: Zyklotron, Massenspektrometer, Polarlichter (Teilchen spiralen um Erdfeldlinien).
:::

## Elektrisches vs. magnetisches Feld

| Eigenschaft | elektrostatisch | magnetostatisch |
|---|---|---|
| Feldlinien | beginnen/enden auf Ladungen | immer geschlossen |
| Quellen | Ladungen | keine (keine Monopole) |
| Wirbel | keine (wirbelfrei) | Ströme erzeugen Wirbel |
| Potential | als Gradient darstellbar | nicht darstellbar |
| ⇒ | **Quellenfeld, wirbelfrei** | **quellenfrei, Wirbelfeld** |

(Mathe 2: div und rot!)

## Magnetischer Fluss

$$\Phi=\int_A\vec B\cdot\d\vec A\quad(\text{homogen: }\Phi=BA\cos\alpha),\qquad[\Phi]=\mathrm{Vs}=\mathrm{Wb}\ (\text{Weber}).$$
Quellenfreiheit: $\oint_A\vec B\cdot\d\vec A=0$ für jede geschlossene Fläche (vgl. Gauß: $\oint\vec D\cdot\d\vec A=Q$).

## Magnetische Feldstärke und Durchflutungsgesetz

$\vec H$ beschreibt die Fähigkeit eines Stroms, ein Magnetfeld zu erzeugen; im Vakuum $\vec B=\mu_0\vec H$, $[H]=\frac{\mathrm A}{\mathrm m}$. Gerader Leiter: $H=\frac{I}{2\pi r}$.

:::satz Durchflutungsgesetz (Ampère)
Das Umlaufintegral der Feldstärke längs eines geschlossenen Weges ist gleich dem umschlossenen Strom (der **Durchflutung**):
$$\Theta=N\cdot I=\oint\vec H\cdot\d\vec s.$$
(Vergleich Elektrostatik: $\oint\vec E\cdot\d\vec s=0$.) Nützlich bei Zylinder-, Ebenen-, **Toroid**-Symmetrie.
:::

:::formel Lange Spule ($N$ Windungen, Länge $l$)
Innen homogen, außen $\approx0$: $\displaystyle H=\frac{NI}{l},\quad B=\mu_0\mu_rH$.
:::

**Toroid/Tokamak** (Vertiefung): Kreisweg mit Radius $r$: $H\cdot2\pi r=NMI\Rightarrow H(r)=\frac{NMI}{2\pi r}$ – fällt mit $\frac1r$ ab. ITER: 18 Spulen à 134 Windungen, 68 kA ⇒ $B\approx5{,}3\,$T bei 6,2 m.

## Materie im Magnetfeld

Elektronen sind winzige magnetische Dipole (Spin, Bahnbewegung). Die **Magnetisierung** $\vec M$ (Dipolmoment pro Volumen) ist $\vec M=\chi_m\vec H$:
$$\vec B=\mu_0(\vec H+\vec M)=\mu_0\mu_r\vec H,\qquad\mu_r=1+\chi_m.$$
Konvention: $\vec H$ beschreibt das Feld der **freien Ströme** – das Durchflutungsgesetz gilt unverändert $\oint\vec H\cdot\d\vec s=I_{frei}$.

| Typ | $\chi_m$, $\mu_r$ | Mechanismus | Beispiele |
|---|---|---|---|
| **Diamagnetismus** | $\chi_m<0$, $\mu_r$ knapp < 1 | induzierte Bahnänderung gegen das Feld; in allen Stoffen | Cu, Ag, Au, Wasser (Frosch schwebt im 16-T-Feld) |
| **Paramagnetismus** | $\chi_m>0$ klein, $\mu_r$ knapp > 1 | permanente Dipole, teilweise ausgerichtet | **Aluminium**, Platin, Sauerstoff |
| **Ferromagnetismus** | $\mu_r\gg1$ (bis $10^5$) | Austauschwechselwirkung, **Weißsche Bezirke** | Fe, Co, Ni |

:::achtung Praxis
**Aluminium ist nicht ferromagnetisch** – ein Elektromagnet hebt keine Alu-Platten (Flugzeugstruktur!).
:::

### Hysterese

Bei Ferromagneten richten sich Weißsche Bezirke im Feld aus; ohne Feld bleiben sie teilweise ausgerichtet. $B(H)$ hängt von der **Vorgeschichte** ab (keine eindeutige Funktion):
1. **Sättigung**: alle Bezirke ausgerichtet.
2. **Remanenz** $B_r$: verbleibende Flussdichte bei $H=0$.
3. **Koerzitivfeldstärke** $H_c$: Gegenfeld zum Entmagnetisieren.

- **Weichmagnetisch** (schmale Hystereseschleife, kleines $H_c$): leicht ummagnetisierbar, geringe Ummagnetisierungsverluste → **Transformatoren, Elektromagnete**.
- **Hartmagnetisch** (breite Schleife, großes $B_r$ und $H_c$): behalten Magnetisierung → **Permanentmagnete**, Motoren, Lautsprecher.

## Aufgaben (Aufgaben 11 und 12 der Folien)

:::aufgabe 1
Lange Spule, $N=500$, $l=25\,$cm, $I=1\,$A, Luft. $H$, $B$? Vergleich mit Erdfeld.
:::loesung
$H=\frac{500\cdot1}{0{,}25}=2000\,$A/m, $B=\mu_0H\approx2{,}5\,$mT – etwa 50-mal das Erdfeld.
:::
:::

:::aufgabe 2
Doppelleitung (Hin- und Rückleiter), Achsabstand $a=25\,$cm, $I=100\,$A. $H$ auf der Verbindungslinie allgemein und in der Mitte?
:::loesung
Im Abstand $x$ vom ersten Leiter addieren sich beide Beiträge (entgegengesetzte Ströme ⇒ zwischen den Leitern gleiche Richtung): $H(x)=\frac{I}{2\pi x}+\frac{I}{2\pi(a-x)}$. Mitte: $H=\frac{2I}{\pi a}=\frac{200}{\pi\cdot0{,}25}\approx255\,$A/m.
:::
:::

:::aufgabe 3
(a) Kann ein Elektromagnet Aluminium- bzw. Stahlplatten heben? (b) Welche Eigenschaft braucht ein Permanentmagnet, welche ein Trafokern? (c) Warum ist $B$ im Eisenkern nach Abschalten nicht null?
:::loesung
(a) Alu nein (paramagnetisch, $\mu_r\approx1$), Stahl ja (ferromagnetisch). (b) Permanentmagnet: große Remanenz **und** große Koerzitivfeldstärke (breite Schleife). Trafo: schmale Schleife (kleine Koerzitivfeldstärke → geringe Verluste) und hohes $\mu_r$. (c) Remanenz – die Weißschen Bezirke bleiben teilweise ausgerichtet.
:::
:::

:::aufgabe 4
Ein Elektron ($m=9{,}11\cdot10^{-31}\,$kg) fliegt mit $v=10^7\,$m/s senkrecht in ein Feld $B=1\,$mT. Bahnradius?
:::loesung
$r=\frac{mv}{eB}=\frac{9{,}11\cdot10^{-31}\cdot10^7}{1{,}602\cdot10^{-19}\cdot10^{-3}}\approx5{,}7\,$cm.
:::
:::

## Karteikarten

:::karte
Lorentzkraft?
???
$\vec F=Q\vec v\times\vec B$; am Leiter $\vec F=I\vec l\times\vec B$ ($F=IlB$).
:::

:::karte
Flussdichte des geraden Leiters?
???
$B=\frac{\mu_0I}{2\pi r}$
:::

:::karte
Durchflutungsgesetz?
???
$\oint\vec H\cdot\d\vec s=\Theta=NI$
:::

:::karte
Feld in der langen Spule?
???
$H=\frac{NI}{l}$, $B=\mu_0\mu_rH$.
:::

:::karte
Dia-, Para-, Ferromagnetismus – $\mu_r$?
???
$<1$ (knapp), $>1$ (knapp), $\gg1$.
:::

:::karte
Remanenz, Koerzitivfeldstärke?
???
Restflussdichte bei $H=0$; Gegenfeldstärke zum Entmagnetisieren.
:::
