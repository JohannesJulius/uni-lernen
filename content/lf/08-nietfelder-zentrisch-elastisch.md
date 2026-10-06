---
title: 8 Niet- und Bolzenfelder III – zentrische Belastung, Elastizitäten, Nietteilung bei Querkraftbiegung
chapter: Kap. 7 Niet- und Bolzenfelder
minutes: 120
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#50; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#52; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#59
---

:::ziel
- Kraftverteilung im **zentrischen** Nietfeld berechnen – starr (gleich/verschieden große Bolzen) und **elastisch**.
- **Kraftverläufe** in Träger und Beschlag zwischen den Nietreihen angeben und kritische Schnitte finden.
- Das **lineare Gleichungssystem** des elastischen Nietfelds aufstellen und lösen; **Nachgiebigkeiten** von Blech und Niet berechnen.
- Verstehen, warum die **Randniete** am stärksten belastet sind und wie man das vermeidet.
- Die erforderliche **Nietteilung** genieteter Träger unter **Querkraftbiegung** bestimmen.
:::

## 1 Zentrisch, starr betrachtet (Kap. 7.2.1–7.2.2)

Zwei Bleche überlappen, $n$ Niete hintereinander in Kraftrichtung, die Kraft $F$ geht durch den Schwerpunkt.

:::formel Gleiche Durchmesser, ohne Elastizitäten
$$Q_{\text{Bolzen}}=\frac Fn.$$
Kraft im Schnitt $i$ (zwischen Niet $i$ und $i+1$; Träger = Blech, in das die Kraft eingeleitet wird, Beschlag = Blech, das sie abnimmt):
$$F_{iT}=\frac{n+1-i}{n}\,F\ \ (\text{vor Niet } i),\qquad F_{iB}=\frac in\,F.$$
:::

:::formel Verschiedene Durchmesser
Bei richtiger Auslegung und im Bereich der **Bruchlast** verteilt sich die Last näherungsweise **proportional zu den ertragbaren Scherlasten** $Q_{Ei}$:
$$Q_i=F\cdot\frac{Q_{Ei}}{\sum_{k=1}^nQ_{Ek}},\qquad F_{Ti}=F-\sum_{k=0}^{i-1}Q_k,\qquad F_{Bi}=\sum_{k=1}^iQ_k.$$
Für kleinere Lasten gilt das nicht mehr – die Verteilung hängt dann von Passung, Anzugsmoment, Lochverformung, Schub- und Axialverformung der Bolzen ab. **Immer überprüfen!**
:::

Aufgabe des Konstrukteurs: Für jeden Schnitt den **RF im Verbindungselement und in den Bauteilen** nachweisen. Kritisch ist oft der Schnitt, in dem das Blech **noch die volle Kraft** trägt, aber schon durch eine **Bohrung geschwächt** ist.

:::bsp Drei Bolzen mit verschiedenen Durchmessern
$Q_E=(10;10;15)\,$kN, $F=20\,$kN: $Q_i=20\cdot\frac{(10;10;15)}{35}=(5{,}71;\ 5{,}71;\ 8{,}57)\,$kN. Träger: vor Bolzen 1 20 kN, zwischen 1 und 2 14,29 kN, zwischen 2 und 3 8,57 kN. Beschlag: 5,71 → 11,43 → 20 kN.
:::

## 2 Zentrisch, elastisch (Kap. 7.2.3)

In Wirklichkeit sind **Bleche und Niete Federn**. Das obere Blech (A) dehnt sich anders als das untere (B) – und die Niete müssen die Differenz durch ihre eigene Verformung ausgleichen. Folge: **Die äußeren Niete tragen mehr, die inneren weniger.**

:::def Nachgiebigkeit
$\delta=\dfrac{\Delta f}{F}=\dfrac1c$ (Verformung pro Kraft, Kehrwert der Federrate).
- Blech zwischen zwei Nieten (Länge $l$, Querschnitt $A_p$): $\delta_p=\dfrac{l}{E_p\,A_p}$.
- Verbindungselement: $\delta_f=\dfrac{\Delta f_f}{Q_f}$ (siehe unten).
:::

:::formel Verträglichkeit zwischen Niet $j$ und $j+1$ (Gl. 7.46–7.49)
Kraft im Blech A nach Niet $j$: $F_{Aj}=\sum_{i=1}^jQ_i$; im Blech B: $F_{Bj}=F-\sum_{i=1}^jQ_i=\sum_{k=j+1}^nQ_k$.
Die Verschiebungen über den Weg „Niet $j$ + Blech A" und „Niet $j+1$ + Blech B" müssen gleich sein:
$$Q_j\,\delta_{fj}+F_{Aj}\,\delta_{pAj}=Q_{j+1}\,\delta_{f,j+1}+F_{Bj}\,\delta_{pBj}.$$
Das gibt für $n$ Niete $n-1$ Gleichungen; dazu kommt das Gleichgewicht $\sum Q_i=F$.
:::

:::formel Gleichungssystem (Gl. 7.50/7.51)
$$\begin{aligned}
(\delta_{f1}+\delta_{pA1})Q_1-(\delta_{f2}+\delta_{pB1})Q_2-\delta_{pB1}Q_3-\dots-\delta_{pB1}Q_n&=0\\
\delta_{pA2}Q_1+(\delta_{f2}+\delta_{pA2})Q_2-(\delta_{f3}+\delta_{pB2})Q_3-\dots-\delta_{pB2}Q_n&=0\\
&\ \,\vdots\\
Q_1+Q_2+\dots+Q_n&=F
\end{aligned}$$
Bis 3 Unbekannte von Hand (Einsetzen, Determinanten), darüber **Gauß** oder numerisch (MATLAB: `Q = A\b` – siehe Numerik!).
:::

:::formel Nachgiebigkeit des Verbindungselements (Gl. 7.53–7.55, Tab. 7.1)
$$\delta_f=\frac{8}{s\,E_f}\left\{B_1\left(\frac sd\right)^2\left[B_2+\left(\frac sd\right)^2\right]+B_3\right\}$$
$s$ = mittlere Dicke: einschnittig $s=\frac{s_1+s_2}2$, zweischnittig $s=\frac{2s_1+s_2}2$.
| Plate | Strap | Niet | $B_1$ | $B_2$ | $B_3$ |
|---|---|---|---|---|---|
| Al | Al | Al | 0,13 | 2,12 | 1,0 |
| Stahl | Stahl | Stahl | 0,13 | 2,12 | 1,0 |
| Al | Al | Stahl | 0,13 | 2,12 | 1,87 |
| Al | Stahl | Stahl | 0,13 | 2,12 | 1,43 |
| Al | Stahl | Al | 0,13 | 2,12 | 0,84 |
| Al | Al | Titan | 0,133 | 2,06 | 1,242 |
| Al | Titan | Titan | 0,1325 | 2,06 | 1,1125 |
Bei abgestuften Blechen jeweils die **örtliche** mittlere Dicke verwenden.
:::

:::bsp Drei Niete, gleiche Bleche, $\delta_f=\delta_p$
Mit $\delta_f=\delta_p=\delta$ (alle gleich):
- $j=1$: $2Q_1-2Q_2-Q_3=0$
- $j=2$: $Q_1+2Q_2-2Q_3=0$
- $Q_1+Q_2+Q_3=F$

Aus Symmetrie $Q_1=Q_3$: $2Q_1-2Q_2-Q_1=0$ → $Q_1=2Q_2$ → $5Q_2=F$ → $\boxed{Q_1=Q_3=0{,}4F,\ Q_2=0{,}2F}$. Der mittlere Niet trägt nur **halb so viel** wie die äußeren!
Mit steiferen Blechen ($\delta_f=3\delta_p$): $0{,}36/0{,}27/0{,}36$; $\delta_f=10\delta_p$: $0{,}34/0{,}31/0{,}34$ – je **nachgiebiger die Niete** relativ zu den Blechen, desto gleichmäßiger.
Vier Niete, $\delta_f=\delta_p$: $0{,}375/0{,}125/0{,}125/0{,}375$.
:::

:::bsp Realistische Zahlen
Al-Bleche $s_1=s_2=2\,$mm, Breite je Nietreihe 30 mm, Teilung $l=20\,$mm; Al-Niet $d=4{,}8\,$mm, $E=72\,000\,$N/mm², einschnittig.
- $s=2$, $s/d=0{,}417$: $\delta_f=\frac{8}{2\cdot72\,000}\{0{,}13\cdot0{,}174\cdot(2{,}12+0{,}174)+1\}=5{,}84\cdot10^{-5}\,$mm/N.
- $\delta_p=\frac{20}{72\,000\cdot60}=4{,}63\cdot10^{-6}\,$mm/N → $\delta_f\approx12{,}6\,\delta_p$.
- Drei Niete, $F=9\,$kN: $Q=(3075;\ 2849;\ 3075)\,$N – hier nur ca. 8 % Überhöhung am Rand, weil die Niete viel weicher sind als die Bleche.
:::

:::merke Konstruktive Folgerungen (Abb. 7.22–7.29)
- **Randniete** sind am stärksten belastet („Randanstieg").
- Der Effekt wächst mit der **Anzahl** der Niete und mit **steifen Nieten / weichen Blechen**.
- Durch **Abstufen der Bleche** (dünner zum Ende hin) kann der Randanstieg **völlig vermieden** werden (Abb. 7.29).
- Für viele Niete: Reihen zu **Ersatzfedern zusammenfassen** – am besten **in der Mitte** gruppieren, denn die kritischen Niete sitzen an den **Rändern**.
- Für die Vorauslegung gibt es Diagramme (2–5 Niete, gleiche und verschiedene Bleche, $\delta_F=\delta_P\ldots10\delta_P$).
:::

## 3 Zusammengesetzte Querschnitte unter Querkraftbiegung (Kap. 7.3)

Ein Träger aus mehreren **vernieteten** Teilen (z. B. Gurt + Steg) unter einer Querkraft $F$: Aus TM 2 kennst du die **zugeordneten Schubspannungen** in Längsrichtung. Ohne Verbindung würden die Teile aufeinander **gleiten** – die Niete müssen diese Längskraft übertragen.

:::formel Biegung und Schub (Gl. 7.56–7.58)
$$\sigma_b=\frac{M_b}{W_b}=\frac{M_b\,e}{I},\qquad\tau_b=\frac{F\cdot H}{I\cdot s},\qquad H_x=\int y\,\d A=\sum y_S\,\Delta A.$$
$H$ = **statisches Moment** der abgetrennten Teilfläche um die Schwerachse, $I$ = Flächenträgheitsmoment des Gesamtquerschnitts, $s$ = Breite im betrachteten Schnitt.
:::

:::formel Erforderliche Nietteilung (Gl. 7.59–7.60)
Längskraft pro Teilungsabschnitt $t$: $F_t=\tau_b\,s\,t=\dfrac{F\,H}{I}\,t$ (= Schubfluss $\cdot\,t$). Mit der ertragbaren Nietkraft $F_{ertr}$ (aus dem F-s-Diagramm, ggf. mal Nietzahl pro Reihe):
$$t=\frac{F_{ertr}\cdot I}{F\cdot H}.$$
:::

:::bsp Zwei aufeinandergenietete Flachstäbe
Zwei Flachstäbe $40\times10\,$mm übereinander (Gesamthöhe 20 mm), eine Nietreihe, Querkraft $F=1\,$kN. $I=\frac{40\cdot20^3}{12}=26\,667\,$mm⁴, Teilfläche oberhalb der Fuge: $H=40\cdot10\cdot5=2000\,$mm³.
Schubfluss $\frac{FH}I=\frac{1000\cdot2000}{26\,667}=75\,$N/mm. Mit $F_{ertr}=2576\,$N (Dk-Niet aus Lektion 4): $t=\frac{2576}{75}=34{,}4\,$mm → gewählt z. B. $t=30\,$mm. Zusätzlich gegen Inter-Rivet Buckling prüfen ($t\le4\ldots5\,d$ bei Druckgurten).
:::

## Übungsaufgaben

:::aufgabe 1
Zwei Niete, $\delta_f=\delta_p$, aber Blech A ist steifer: $\delta_{pA}=\frac23\delta_p$, $\delta_{pB}=\delta_p$. Wie verteilt sich $F$?
:::loesung
Eine Verträglichkeitsgleichung: $(\delta_f+\delta_{pA})Q_1=(\delta_f+\delta_{pB})Q_2$ → $\frac53Q_1=2Q_2$ → $Q_1=1{,}2\,Q_2$. Mit $Q_1+Q_2=F$: $Q_1=0{,}545F$, $Q_2=0{,}455F$.
:::
:::

:::aufgabe 2
Fünf gleiche Niete, starr gerechnet, $F=25\,$kN. Gib die Kraft in Träger und Beschlag zwischen den Nieten an. Wo liegt der kritische Schnitt für das Blech?
:::loesung
Je Niet 5 kN. Träger vor Niet 1…5: 25, 20, 15, 10, 5 kN; Beschlag nach Niet 1…5: 5, 10, 15, 20, 25 kN. Kritisch: der Träger an **Niet 1** (volle 25 kN im durch die Bohrung geschwächten Querschnitt) bzw. der Beschlag an **Niet 5**.
:::
:::

:::aufgabe 3
Ein I-Träger aus Gurtwinkeln und Stegblech hat $I=4{,}2\cdot10^6\,$mm⁴; das statische Moment des Gurts (inkl. Winkel) ist $H=48\,000\,$mm³. Querkraft $F=30\,$kN. Zwei Niete pro Teilung (beidseitig), je $F_{ertr}=6{,}5\,$kN. Erforderliche Teilung?
:::loesung
Schubfluss $\frac{30\,000\cdot48\,000}{4{,}2\cdot10^6}=342{,}9\,$N/mm. $F_{ertr}=2\cdot6{,}5=13\,$kN → $t=\frac{13\,000}{342{,}9}=37{,}9\,$mm → $t\le37\,$mm.
:::
:::

:::aufgabe 4
Stelle für vier gleiche Niete mit $\delta_f=\delta_p$ das Gleichungssystem auf und bestätige $Q=(0{,}375;\ 0{,}125;\ 0{,}125;\ 0{,}375)F$.
:::loesung
$j=1$: $2Q_1-2Q_2-Q_3-Q_4=0$; $j=2$: $Q_1+2Q_2-2Q_3-Q_4=0$; $j=3$: $Q_1+Q_2+2Q_3-2Q_4=0$; $\sum Q=F$.
Einsetzen $Q_1=Q_4=0{,}375F$, $Q_2=Q_3=0{,}125F$: $j=1$: $0{,}75-0{,}25-0{,}125-0{,}375=0$ ✓; $j=2$: $0{,}375+0{,}25-0{,}25-0{,}375=0$ ✓; $j=3$: $0{,}375+0{,}125+0{,}25-0{,}75=0$ ✓; Summe 1 ✓.
:::
:::

## Karteikarten

:::karte
Zentrisches Nietfeld mit verschiedenen Bolzen (starr)?
???
$Q_i=F\frac{Q_{Ei}}{\sum Q_E}$ (proportional zu den ertragbaren Scherlasten, gilt näherungsweise nahe Bruchlast).
:::

:::karte
Verträglichkeitsbedingung im elastischen Nietfeld?
???
$Q_j\delta_{fj}+F_{Aj}\delta_{pAj}=Q_{j+1}\delta_{f,j+1}+F_{Bj}\delta_{pBj}$; $n-1$ Gleichungen + $\sum Q=F$.
:::

:::karte
Nachgiebigkeit Blech zwischen zwei Nieten?
???
$\delta_p=\frac{l}{E_pA_p}$.
:::

:::karte
Drei gleiche Niete, $\delta_f=\delta_p$ – Verteilung?
???
40 % / 20 % / 40 % – Randniete am stärksten belastet.
:::

:::karte
Wie vermeidet man den Randanstieg?
???
Bleche abstufen; nachgiebigere Niete relativ zu den Blechen; nicht zu viele Reihen.
:::

:::karte
Erforderliche Nietteilung bei Querkraftbiegung?
???
$t=\frac{F_{ertr}I}{FH}$ ($FH/I$ = Schubfluss in der Fuge).
:::
