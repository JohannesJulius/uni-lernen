---
title: 12 Schraubenverbindungen III – Verspannungsschaubild, Nachgiebigkeiten, Betriebskraft, Setzen, Temperatur
chapter: Kap. 9 Schraubenverbindungen
minutes: 140
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#92; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#95; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#96
---

:::ziel
- Das **Verspannungsschaubild** im Montagezustand und unter Betriebslast zeichnen und deuten.
- Die **Nachgiebigkeit der Schraube** (Kopf, Schaftabschnitte, Gewinde, Mutter) und der **Platten** (Ersatzzylinder) berechnen.
- Mit dem **Kraftverhältnis** $\Phi$ die Schraubenzusatzkraft $F_{SA}$, die Plattenentlastung $F_{PA}$, die **Restklemmkraft** und die **Abhebekraft** bestimmen.
- Vorspannkraftverlust durch **Setzen** und **Temperatur** berechnen.
- Den Einfluss der **Krafteinleitung** ($n$) und **dynamischer** Betriebskräfte kennen.
:::

## 1 Grundidee: zwei Federn gegeneinander

Zieht man die Mutter an, wird die **Schraube gedehnt** (um $f_{SM}$) und die **Platten werden zusammengedrückt** (um $f_{PM}$). In beiden wirkt dieselbe **Montagevorspannkraft** $F_M$ – in der Schraube als Zug, in den Platten als Druck (= **Klemmkraft**). Beide verhalten sich (elastisch) wie **Federn**:

:::formel Federsteifigkeit und Nachgiebigkeit (Gl. 9.29–9.31)
$$c_S=\frac{F_M}{f_{SM}}=\tan\gamma_S,\quad\delta_S=\frac1{c_S};\qquad c_P=\frac{F_M}{f_{PM}}=\tan\gamma_P,\quad\delta_P=\frac1{c_P};\qquad\delta=\frac fF=\frac{L}{E\,A}.$$
:::

**Verspannungsschaubild (Abb. 9.20):** Kennlinie der Schraube (Kraft über Verlängerung, flach) und – gespiegelt – Kennlinie der Platten (Kraft über Verkürzung, **steiler**, weil die Platten meist steifer sind) werden so zusammengesetzt, dass sie sich bei $F_M$ schneiden. Die horizontale Strecke links ist $f_{SM}$, rechts $f_{PM}$.

## 2 Nachgiebigkeit der Schraube (Kap. 9.11.1.1)

Die Schraube ist eine **Reihenschaltung** von Federn (Nachgiebigkeiten addieren sich):

:::formel Schraubennachgiebigkeit (Gl. 9.32–9.41, nach VDI 2230)
$$\delta_S=\delta_{SK}+\delta_1+\delta_2+\dots+\delta_G+\delta_M,\qquad\delta_i=\frac{L_i}{E_S\,A_i}.$$
Ersatzlängen (als Zylinder gedacht):
- **Kopf:** $\delta_{SK}=\dfrac{0{,}5\,d}{E_S\,A_N}$ (Sechskant), $\dfrac{0{,}4\,d}{E_SA_N}$ (Zylinderkopf); $A_N=\frac\pi4d^2$.
- **Eingeschraubtes Gewinde:** $\delta_G=\dfrac{0{,}5\,d}{E_S\,A_{d3}}$.
- **Mutter:** $\delta_M=\dfrac{0{,}4\,d}{E_M\,A_N}$; im **Sackloch** $\dfrac{0{,}33\,d}{E_MA_N}$.
- **Freies (nicht eingeschraubtes) Gewinde:** Kernquerschnitt $A_{d3}=\frac\pi4d_3^2$.
:::

## 3 Nachgiebigkeit der Platten (Kap. 9.11.1.2)

Die Druckspannung breitet sich vom Kopf aus **kegel- bis tonnenförmig** in die Platten aus. Ersatz: ein **Hohlzylinder** mit Querschnitt $A_{ers}$.

:::formel Ersatzquerschnitt (Gl. 9.42–9.46)
$d_W$ = Kopfauflagedurchmesser, $d_h$ = Bohrung, $D_A$ = Außendurchmesser des verfügbaren Bauteils, $L_K$ = Klemmlänge.
- **Fall 1** ($D_A<d_W$, dünne Hülse): $A_{ers}=\frac\pi4(D_A^2-d_h^2)$.
- **Fall 2** ($d_W<D_A<L_K+d_W$):
$$A_{ers}=\frac\pi4(d_W^2-d_h^2)+\frac\pi8d_W(D_A-d_W)\left[\left(\sqrt[3]{\frac{L_Kd_W}{D_A^2}}+1\right)^2-1\right].$$
- **Fall 3** ($D_A>L_K+d_W$): wie Fall 2 mit $D_A$ ersetzt durch $L_K+d_W$ (der Druckkegel wird nicht breiter).
$$\delta_P=\frac{L_K}{E_P\,A_{ers}},\qquad c_P=\frac{E_PA_{ers}}{L_K}.$$
Verschiedene E-Moduli (z. B. Al- und Stahlplatte): Nachgiebigkeiten **addieren** (Reihenschaltung).
:::

## 4 Betriebskraft (Kap. 9.11.2.1)

Kommt eine äußere **Zug-Betriebskraft** $F_A$ hinzu (vereinfachend unter Kopf und Mutter eingeleitet), wird die Schraube **weiter gedehnt** und die Platten werden um **denselben** Betrag **entlastet** ($f_{SA}=f_{PA}$):

:::formel Kraftaufteilung (Gl. 9.47–9.57)
**Kraftverhältnis**
$$\Phi=\frac{F_{SA}}{F_A}=\frac{\delta_P}{\delta_S+\delta_P}.$$
$$F_{SA}=\Phi\,F_A\ (\text{Schraubenzusatzkraft}),\qquad F_{PA}=(1-\Phi)\,F_A\ (\text{Plattenentlastung})$$
$$F_S=F_V+F_{SA}\ (\text{Schraubenkraft}),\qquad F_{KR}=F_V-F_{PA}=F_S-F_A\ (\text{Restklemmkraft})$$
**Abheben (Klaffen)**, wenn $F_{KR}=0$:
$$F_{A,abh}=\frac{F_V}{1-\Phi}.$$
:::

:::merke Warum Vorspannen so gut ist
Weil die Platten meist **viel steifer** sind als die Schraube, ist $\Phi$ klein (oft 0,1–0,3). Die Schraube „spürt" dann nur einen **kleinen Teil** der Betriebskraft – der Rest baut nur Klemmkraft ab. Bei **schwingender** Last schwingt die Schraube deshalb nur mit $\Phi\cdot F_{Aa}$ → **Dehnschrauben** (schlanker Schaft, großes $\delta_S$, kleines $\Phi$) sind ideal für dynamisch belastete Verbindungen. Solange die Fuge **nicht klafft**, bleibt die Gesamtverformung konstant.
:::

## 5 Setzen und Temperatur (Kap. 9.11.2.2, 9.11.6)

:::def Setzen
Unter Last **ebnen sich Rauheitsspitzen** in den Trennfugen, im Gewinde und unter Kopf/Mutter ein (Kriechvorgang, v. a. in der ersten Betriebszeit). Der Setzbetrag $f_Z$ hängt ab von der **Anzahl der Trennfugen**, der **Rauheit** und der **Oberflächenbehandlung** (Lack!).
:::

:::formel Setzbeträge (Tab. 9.10, in µm, Zug/Druck)
| $R_Z$ | Gewinde | je Kopf-/Mutterauflage | je innere Trennfuge |
|---|---|---|---|
| < 10 µm | 3 | 2,5 | 1,5 |
| 10–40 µm | 3 | 3 | 2 |
| 40–160 µm | 3 | 4 | 2 |
(Unter Schub höhere Werte.)
$$F_Z=\frac{f_Z}{\delta_S+\delta_P}=f_Z\frac{\Phi}{\delta_P},\qquad F_V=F_{M\,min}-F_Z.$$
$F_V$ muss mindestens die **erforderliche Vorspannkraft** (Mindest-Restklemmkraft im Betrieb) sein.
:::

:::formel Temperatureinfluss (Gl. 9.67–9.68)
Verschiedene Wärmeausdehnungskoeffizienten von Schraube und Platten wirken wie ein (reversibles) Setzen:
$$\Delta F_V=\frac{L_K(\alpha_P-\alpha_S)\,\Delta T}{\delta_S+\delta_P}.$$
| Werkstoff | $\alpha$ [1/K] |
|---|---|
| Stahl | $11\ldots12\cdot10^{-6}$ |
| Al-Leg. | $21\ldots24\cdot10^{-6}$ |
| Titan | $10{,}4\cdot10^{-6}$ |
**Stahlschraube in Al-Platten bei Kälte** (in Reiseflughöhe!): Al schrumpft stärker → **Vorspannung sinkt**. Bei Wärme steigt sie – Gefahr der **Plastifizierung**.
:::

**Plastischer Bereich (Kap. 9.11.5):** Wird die Schraube über die Dehngrenze belastet, bleibt eine plastische Verlängerung $f_{Spl}$; die Kennlinie verschiebt sich, die Vorspannkraft sinkt um $F_{Zpl}$. Im Betrieb ist Plastifizierung zu **vermeiden**.

## 6 Krafteinleitung und dynamische Last (Kap. 9.11.3–9.11.4)

In der Praxis greift $F_A$ **innerhalb** der Platten an (zwischen Auflage und Trennfuge). Nur der Bereich zwischen den Krafteinleitungsstellen wird entlastet; die äußeren Bereiche zählen zur Schraube. **Klemmlängenfaktor** $n$ ($0<n\le1$):

:::formel
$$F_{SA}=n\,\Phi\,F_A,\qquad F_{PA}=(1-n\Phi)\,F_A.$$
Dynamisch mit $F_A$ zwischen $F_{Au}$ und $F_{Ao}$:
$$F_{SAa}=n\Phi\frac{F_{Ao}-F_{Au}}2\ (\text{Schraubenausschlagkraft}),\qquad F_{PAa}=(1-n\Phi)\frac{F_{Ao}-F_{Au}}2,$$
$$F_{Sm}=F_V+n\Phi\frac{F_{Ao}+F_{Au}}2\ (\text{Mittelkraft}).$$
:::

:::achtung
Durch Fertigung und Kerbwirkung kann die **Dauerfestigkeit im Gewinde** auf **weniger als 1/10 von $R_m$** sinken (Smith-Diagramm Abb. 9.31). Deshalb ist ein kleines $n\Phi$ so wichtig.
:::

> In der Skriptformel (9.66) steht $\frac{F_{Ao}-F_{Au}}2$; für die **Mittelkraft** muss es $\frac{F_{Ao}+F_{Au}}2$ heißen (Mittelwert von oberer und unterer Last).

## 7 Durchgerechnetes Beispiel

:::bsp Stahlschraube M10 in Aluminiumplatten
**Geometrie:** M10 ($P=1{,}5$, $A_N=78{,}54$, $A_{d3}=52{,}29\,$mm²), Sechskant, $E_S=210\,000$. Klemmlänge $L_K=26\,$mm = 20 mm Schaft + 6 mm freies Gewinde. Mutter aus Stahl. Platten Al, $E_P=70\,000$, $d_W=16$, $d_h=10{,}5$, $D_A=32\,$mm.

**Schraube:**
| Teil | Formel | $\delta$ [mm/N] |
|---|---|---|
| Kopf | $\frac{5}{210\,000\cdot78{,}54}$ | $3{,}03\cdot10^{-7}$ |
| Schaft 20 mm | $\frac{20}{210\,000\cdot78{,}54}$ | $1{,}213\cdot10^{-6}$ |
| freies Gewinde 6 mm | $\frac{6}{210\,000\cdot52{,}29}$ | $5{,}46\cdot10^{-7}$ |
| eingeschr. Gewinde | $\frac{5}{210\,000\cdot52{,}29}$ | $4{,}55\cdot10^{-7}$ |
| Mutter | $\frac{4}{210\,000\cdot78{,}54}$ | $2{,}43\cdot10^{-7}$ |
| **Summe** $\delta_S$ | | $\mathbf{2{,}76\cdot10^{-6}}$ |

**Platten:** Fall 2 ($16<32<42$): $\sqrt[3]{\frac{26\cdot16}{32^2}}=\sqrt[3]{0{,}406}=0{,}741$ →
$A_{ers}=\frac\pi4(256-110{,}25)+\frac\pi8\cdot16\cdot16\cdot(1{,}741^2-1)=114{,}5+204{,}1=318{,}5\,$mm².
$\delta_P=\frac{26}{70\,000\cdot318{,}5}=1{,}166\cdot10^{-6}\,$mm/N.

**Kraftverhältnis:** $\Phi=\frac{1{,}166}{2{,}760+1{,}166}=0{,}297$.

**Betrieb** mit $F_V=20\,$kN, $F_A=8\,$kN ($n=1$):
$F_{SA}=0{,}297\cdot8000=2376\,$N → $F_S=22\,376\,$N; $F_{PA}=5624\,$N → $F_{KR}=14\,376\,$N; Abheben bei $F_{A,abh}=\frac{20\,000}{0{,}703}=28{,}4\,$kN.

**Setzen** ($R_Z<10\,$µm, eine innere Trennfuge): $f_Z=3+2{,}5+2{,}5+1{,}5=9{,}5\,$µm → $F_Z=\frac{0{,}0095}{3{,}926\cdot10^{-6}}=2420\,$N.

**Temperatur** $\Delta T=-60\,$K: $\Delta F_V=\frac{26\cdot(23-11{,}5)\cdot10^{-6}\cdot(-60)}{3{,}926\cdot10^{-6}}=-4570\,$N. Zusammen mit dem Setzen verliert die Verbindung fast **7 kN** Vorspannung – das muss die Montagevorspannung abdecken!

**Dynamisch** $F_A=0\ldots8\,$kN: $F_{SAa}=0{,}297\cdot4000=1188\,$N → $\sigma_a=\frac{1188}{58{,}0}=20{,}5\,$N/mm² – klein, dank Vorspannung.
:::

## Übungsaufgaben

:::aufgabe 1
Im Beispiel wird statt der Al- eine Stahlplatte ($E_P=210\,000$) verwendet. Berechne $\Phi$, $F_{SA}$ für $F_A=8\,$kN und die Abhebekraft.
:::loesung
$\delta_P=\frac{26}{210\,000\cdot318{,}5}=3{,}89\cdot10^{-7}$; $\Phi=\frac{0{,}389}{2{,}760+0{,}389}=0{,}123$. $F_{SA}=987\,$N; $F_{A,abh}=\frac{20\,000}{0{,}877}=22{,}8\,$kN. Steifere Platten → kleineres $\Phi$, weniger Schraubenzusatzkraft, aber früheres Abheben.
:::
:::

:::aufgabe 2
Wie ändert sich $\Phi$, wenn der Schaft der Schraube im Beispiel auf 7 mm Durchmesser **abgedreht** wird (Dehnschraube)?
:::loesung
Schaft: $A=38{,}48\,$mm² → $\delta=\frac{20}{210\,000\cdot38{,}48}=2{,}475\cdot10^{-6}$ (statt $1{,}213\cdot10^{-6}$). $\delta_S=2{,}76+1{,}262=4{,}02\cdot10^{-6}$. $\Phi=\frac{1{,}166}{4{,}02+1{,}166}=0{,}225$. Die Schraubenausschlagkraft sinkt um ca. 24 %.
:::
:::

:::aufgabe 3
Welche Montagevorspannkraft $F_{M\,min}$ ist nötig, wenn nach Setzen und Abkühlen um 60 K noch $F_V=20\,$kN vorhanden sein sollen? Welches $F_{M\,max}$ folgt mit $\alpha_A=1{,}6$?
:::loesung
$F_{M\,min}=20\,000+2420+4570=26{,}99\,$kN ≈ 27 kN. $F_{M\,max}=1{,}6\cdot27=43{,}2\,$kN – das muss die M10 aushalten ($\sigma=43\,200/58=745\,$N/mm² nur aus Zug → hochfeste Schraube nötig, siehe Lektion 13).
:::
:::

## Karteikarten

:::karte
Kraftverhältnis $\Phi$?
???
$\Phi=\frac{\delta_P}{\delta_S+\delta_P}=\frac{F_{SA}}{F_A}$.
:::

:::karte
Schraubenzusatzkraft und Plattenentlastung?
???
$F_{SA}=\Phi F_A$ (mit Einleitung $n\Phi F_A$), $F_{PA}=(1-\Phi)F_A$.
:::

:::karte
Restklemmkraft und Abhebekraft?
???
$F_{KR}=F_V-F_{PA}=F_S-F_A$; Abheben bei $F_{A,abh}=\frac{F_V}{1-\Phi}$.
:::

:::karte
Nachgiebigkeit eines Schraubenabschnitts?
???
$\delta_i=\frac{L_i}{E_SA_i}$; Kopf $0{,}5d$, eingeschr. Gewinde $0{,}5d$ (mit $A_{d3}$), Mutter $0{,}4d$ als Ersatzlängen.
:::

:::karte
Plattennachgiebigkeit?
???
$\delta_P=\frac{L_K}{E_PA_{ers}}$ mit Ersatz-Hohlzylinder (Druckkegel), 3 Fälle je nach $D_A$.
:::

:::karte
Vorspannungsverlust durch Setzen?
???
$F_Z=\frac{f_Z}{\delta_S+\delta_P}$; $f_Z$ aus Tabelle (Gewinde + Auflagen + Trennfugen).
:::

:::karte
Temperatureinfluss auf die Vorspannung?
???
$\Delta F_V=\frac{L_K(\alpha_P-\alpha_S)\Delta T}{\delta_S+\delta_P}$; Stahlschraube in Al bei Kälte → Verlust.
:::

:::karte
Warum Dehnschrauben bei Schwinglast?
???
Großes $\delta_S$ → kleines $\Phi$ → die Schraube schwingt nur mit $n\Phi F_{Aa}$; die Gewindedauerfestigkeit ist sehr gering (< 0,1 $R_m$).
:::
