---
title: 4 Berechnung von Nietverbindungen auf Schub – Lochleibung, Scherung, F-s-Diagramm, Senkniet
chapter: Kap. 6 Nietverbindung
minutes: 120
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#28; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#30
---

:::ziel
- **Scherfestigkeit** $R_C$ und **Lochleibungsfestigkeit** $\sigma_{LX}$ aus $R_m$ und $R_{p0,2}$ abschätzen – inkl. Einfluss des **Randabstands** $e/d$.
- Die drei **Versagensarten** einer schubbelasteten Nietverbindung berechnen: Lochleibung, Scherbruch des Schafts, Zugbruch des Bauteils.
- Das **F-s-Diagramm** mit den Faktoren $U$, $V$, $T$ konstruieren und ablesen (Lochleibungs-, Übergangs-, Scherbereich).
- **Ein- und mehrschnittige** Verbindungen unterscheiden.
- Die **Abminderung beim Senkniet** ($\alpha$, $\Delta s$, $F_A$) anwenden.
:::

## 1 Wie versagt ein Niet unter Schub?

Zwei überlappende Bleche werden mit der Kraft $F$ auseinandergezogen. Der Niet überträgt die Kraft **quer zu seiner Achse** (Abb. 6.8). Es gibt drei Möglichkeiten zu versagen:

1. **Lochleibung** – der Schaft drückt sich in die Lochwand des (dünnen) Blechs, das Loch wird oval gedrückt bzw. reißt aus. Die gedrückte Fläche ist die **projizierte** Fläche $d\cdot s$.
2. **Scherbruch des Nietschafts** – der Niet wird in der Fuge zwischen den Blechen abgeschert (bei **dicken** Blechen).
3. **Zugbruch des Bauteils** – das durch die Bohrungen geschwächte Blech reißt im Nettoquerschnitt.

:::formel Grundsätzliche Versagenskriterien (Gl. 6.8–6.10)
$$F_{LB}=d_R\cdot s\cdot\sigma_{LX}\qquad\text{(Lochleibung)}$$
$$F_{SB}=R_C\cdot\frac{\pi d_R^2}{4}\qquad\text{(Scherbruch des Schafts, je Schnitt)}$$
$$F_Z=R_m\cdot A\qquad\text{(Zugbruch des Bauteils, } A=\text{Nettoquerschnitt)}$$
$d_R$ = **rechnerischer Nietdurchmesser**; bei geschlagenen Vollnieten $d_R=d+0{,}05\,$mm (der Niet füllt die etwas größere Bohrung aus). $s$ = Blechdicke.
:::

:::merke Dick oder dünn?
- **Dünnes Blech** → Lochleibung maßgebend → das **Bauteil** versagt.
- **Dickes Blech** → Scherung maßgebend → der **Niet** versagt.
:::

## 2 Werkstoffdaten abschätzen (Kap. 6.3.1)

Liegen keine Messwerte vor:

:::formel Scherfestigkeit des Niets (Pass- und Vollniete)
$$R_C=\min\left(R_{C1},R_{C2}\right),\qquad R_{C1}=0{,}6\cdot R_m,\qquad R_{C2}=0{,}9\cdot R_{p0,2}.$$
Bei **Blindnieten** sind die Scherkräfte aus Herstellerangaben/Versuchen zu nehmen.
:::

:::formel Lochleibungsfestigkeit des Blechs
$$\sigma_{LX}=\min\left(\sigma_{LB},\ 1{,}5\cdot\sigma_{L2}\right),\qquad\sigma_{LB}=f_B\cdot R_m,\qquad\sigma_{L2}=f_{0,2}\cdot R_{p0,2}.$$
Gültig bis $d/s=5{,}5$. Faktoren $f_B$, $f_{0,2}$ aus Tab. 6.4, abhängig vom Werkstoff und vom Randabstand $e/d$ ($e$ = Abstand Lochmitte–Blechrand in Kraftrichtung):
| Werkstoff | $f_B$ ($e/d=1{,}5$) | $f_{0,2}$ ($1{,}5$) | $f_B$ ($\ge2{,}0$) | $f_{0,2}$ ($\ge2{,}0$) |
|---|---|---|---|---|
| unlegierte Stähle | 1,35 | 1,3 | 1,65 | 1,5 |
| nichtrostende Stähle ($R_m\le1400$) | 1,5 | 1,4 | 2,0 | 1,65 |
| Messing | 1,1 | 1,1 | 1,2 | 1,2 |
| Kupfer-Beryllium | 1,0 | 1,0 | 1,08 | 1,1 |
| **Al-Cu (3.1…)** | **1,5** | **1,2** | **2,0** | **1,45** |
| Al-Si (3.2…) | 1,3 | – | 1,7 | – |
| Al-Zn (3.4…) | 1,25 | – | 1,65 | – |
| Mg-Legierungen | 1,0 | – | 1,0 | – |
| Titanlegierungen | 1,4 | 1,35 | 1,7 | 1,5 |
:::

:::formel Einfluss des Randabstands (Gl. 6.5–6.7)
Anzustreben ist $e/d\ge2{,}0$.
$$\frac ed\ge2{,}0:\quad\sigma_{LX}=\sigma_{LX,2{,}0}$$
$$1{,}5\le\frac ed\le2{,}0:\quad\sigma_{LX}=\sigma_{LX,1{,}5}+\left(\sigma_{LX,2{,}0}-\sigma_{LX,1{,}5}\right)\cdot2\left(\frac ed-1{,}5\right)\quad(\text{lineare Interpolation})$$
$$1{,}0\le\frac ed\le1{,}5:\quad\sigma_{LX}=\sigma_{LX,1{,}5}\cdot\left(\frac ed-0{,}5\right)\quad(\text{nur in begründeten Ausnahmefällen})$$
:::

:::bsp Skript-Beispiel: Al-Cu-Werkstoff
$R_m=420$, $R_{p0,2}=300\,$N/mm², Randabstand $e/d>2$.
- Scherbruchgrenze: $R_{C1}=0{,}6\cdot420=252$, $R_{C2}=0{,}9\cdot300=270$ → $R_C=252\,$N/mm².
- Lochleibung: Al-Cu (Gruppe 3.1…), Spalte $e/d\ge2$: $f_B=2{,}0$, $f_{0,2}=1{,}45$. $\sigma_{LB}=2{,}0\cdot420=840$, $\sigma_{L2}=1{,}45\cdot300=435$ → $1{,}5\,\sigma_{L2}=652{,}5$ → $\sigma_{LX}=\min(840;\,652{,}5)=652{,}5\,$N/mm².
:::

:::achtung Rechenfehler im Skript
Im Skript steht $\sigma_{L2}=1{,}45\cdot300=425$ und daraus $\sigma_{LX}=637{,}5$. Richtig ist $1{,}45\cdot300=435$ und damit $\sigma_{LX}=652{,}5\,$N/mm². Am Rechenweg ändert das nichts. In den folgenden Beispielen rechnen wir mit dem Skriptwert $637{,}5$ weiter, damit du die Zahlen mit eventuellen Übungslösungen vergleichen kannst.
:::

:::bsp Einfluss eines kleinen Randabstands
Gleicher Werkstoff, aber $e/d=1{,}75$. Spalte $e/d=1{,}5$: $f_B=1{,}5$, $f_{0,2}=1{,}2$ → $\sigma_{LB}=630$, $1{,}5\sigma_{L2}=1{,}5\cdot360=540$ → $\sigma_{LX,1{,}5}=540$. Mit $\sigma_{LX,2{,}0}=652{,}5$:
$$\sigma_{LX}=540+(652{,}5-540)\cdot2\cdot(1{,}75-1{,}5)=540+56{,}3=596{,}3\ \text{N/mm}^2.$$
:::

## 3 Ein- und mehrschnittige Verbindungen

:::def Schnittigkeit
Die Anzahl der **Scherflächen** im Niet. **Einschnittig**: zwei überlappende Bleche (eine Fuge). **Zweischnittig**: Mittelblech zwischen zwei Laschen (zwei Fugen), Abb. 6.8. Die Scherbruchkraft wächst mit der Schnittzahl $n_s$:
$$F_{SB,n_s}=n_s\cdot F_{SB,\text{einschnittig}}.$$
Bei der Lochleibung zählt das jeweils **maßgebende Blech** (bei zweischnittig: das Mittelblech mit $F$ oder die Laschen mit je $F/2$).
:::

## 4 Das F-s-Diagramm (Kap. 6.3.2.2–6.3.2.4)

**Nietberechnungstabellen** (Abb. 6.6) geben die **Bruchkraft pro Niet** über Nietdurchmesser und Blechdicke an. Erstellt werden sie aus dem **F-s-Diagramm**: Bruchkraft $F_B$ über der Blechdicke $s$.

- Für kleine $s$ steigt $F_B$ **linear** (Lochleibung: $F_{LB}=d_R s\sigma_{LX}$).
- Für große $s$ ist $F_B$ **konstant** = $F_{SB}$ (der Schaft schert ab, egal wie dick das Blech ist).
- Dazwischen liegt ein **Übergangsbereich**: In Wirklichkeit gehen die Versagensarten nicht scharf ineinander über.

:::formel Konstruktion mit $U$, $V$, $T$ (Abb. 6.9)
Schnittpunkt der Lochleibungsgeraden mit der Scherkraft:
$$\bar s=\frac{F_{SB}}{\sigma_{LX}\cdot d_R}.$$
- **Lochleibungsbereich** bis $s=U\cdot\bar s$ (dort $F=U\cdot F_{SB}$),
- **Übergangsbereich** als Gerade von $(U\bar s;\ U F_{SB})$ bis $(V\bar s;\ F_{SB})$,
- **Scherbereich** ab $s=V\cdot\bar s$: $F=F_{SB}$.
- $T$ = **Schlupf**: Verschiebung der Lochleibungsgeraden (nur bei Blindnieten, $T=0{,}05\,d_R$).

| | $U$ | $V$ | $T$ |
|---|---|---|---|
| Passniete | 0,85 | 1,3 | 0 |
| **Vollniete** | **0,75** | **1,5** | 0 |
| Blindniete | 0,6 | 1,7 | $0{,}05\,d_R$ |
Die Faktoren sind meist konservativ; bessere Daten dürfen verwendet werden. Für zweischnittige Verbindungen gilt dasselbe mit $2F_{SB}$ und $2\bar s$.
:::

**Dimensionslose Darstellung** ($F_B/F_{SB}$ über $s/d_R$, Abb. 6.7 rechts): Kurven verschiedener Durchmesser fallen oft zusammen → gut für die Vordimensionierung. Nur gleiche Niet-/Blech-Kombinationen in ein Diagramm zeichnen. Auf jedem Nietberechnungsblatt Niet, Bauteilwerkstoff und **Quelle** angeben.

:::bsp F-s-Diagramm für einen Dk-Niet in Al-Cu-Blech
Vollniet AD/Dk, $d=4{,}0\,$mm → $d_R=4{,}05\,$mm, $R_C=200\,$N/mm² (Tab. 6.3). Blech Al-Cu mit $\sigma_{LX}=637{,}5\,$N/mm², einschnittig.
1. $F_{SB}=200\cdot\frac{\pi\cdot4{,}05^2}{4}=2576\,$N.
2. $\bar s=\frac{2576}{637{,}5\cdot4{,}05}=0{,}998\,$mm.
3. Knickpunkte: $U\bar s=0{,}748\,$mm bei $U F_{SB}=1932\,$N; $V\bar s=1{,}497\,$mm bei $2576\,$N.
4. Ablesen:
| $s$ [mm] | Bereich | $F_B$ [N] |
|---|---|---|
| 0,6 | Lochleibung: $4{,}05\cdot0{,}6\cdot637{,}5$ | 1549 |
| 0,8 | Übergang | 1977 |
| 1,0 | Übergang | 2149 |
| 1,2 | Übergang | 2321 |
| ≥ 1,5 | Scherung | 2576 |
Übergang: $F=U F_{SB}+(1-U)F_{SB}\cdot\dfrac{s-U\bar s}{(V-U)\bar s}$, z. B. $s=1{,}2$: $1932+644\cdot\frac{1{,}2-0{,}748}{0{,}748}=2321\,$N.
:::

## 5 Nietverbindung mit gesenkten Köpfen (Kap. 6.3.2.5)

Beim **Senkniet** hat das obere Blech einen **zylindrischen** Teil (Dicke $s-k$) und einen **kegeligen** Teil (Senkkopfhöhe $k$). Im kegeligen Teil wird weniger Kraft übertragen (Abb. 6.10):
$$F_{1,LB}=d_R\,(s-k)\,\sigma_{LX}\quad(\text{zylindrisch}),\qquad F_{2,LB}=d_R\,k\,\sigma_{LX}\cdot\alpha\quad(\text{konisch}),\ \alpha<1.$$

:::formel Senkniet: Verschiebung des F-s-Diagramms (Gl. 6.15–6.18)
Der Kegel wirkt wie ein um $\Delta s$ **dünneres** Blech:
$$\Delta s=k\,(1-\alpha),\qquad F_A=d_R\,k\,\sigma_{LX}\,\alpha.$$
Das F-s-Diagramm des Senkniets entsteht aus dem des Niets mit überstehendem Kopf, indem man es **ab der Kraft $F_A$ um $\Delta s$ nach rechts verschiebt**.
Abminderungsfaktor (aus MIL-HDBK-5-Tabellen):
$$\text{Vollniet: }\alpha=\frac23\cdot\frac{R_C}{\sigma_{LX}}+0{,}2,\qquad\text{Pass- und Blindniet: }\alpha=\frac23\cdot\frac{R_C}{\sigma_{LX}}.$$
Harter Blechwerkstoff (großes $\sigma_{LX}$) → kleineres $\alpha$ → stärkere Abminderung.
:::

:::bsp Senkniet
Wie oben ($R_C=200$, $\sigma_{LX}=637{,}5$, $d_R=4{,}05$), Senkkopfhöhe $k=1{,}3\,$mm.
$\alpha=\frac23\cdot\frac{200}{637{,}5}+0{,}2=0{,}409$, $\Delta s=1{,}3\cdot(1-0{,}409)=0{,}77\,$mm, $F_A=4{,}05\cdot1{,}3\cdot637{,}5\cdot0{,}409=1373\,$N.
Ab $F=1373\,$N liegt die Kurve um 0,77 mm weiter rechts: Für die volle Scherkraft 2576 N braucht der Senkniet $s\approx1{,}50+0{,}77=2{,}27\,$mm statt 1,50 mm. Außerdem muss $s\ge k+0{,}2=1{,}5\,$mm sein (keine Messerschneide).
:::

:::merke
Senkniete sind bei **dünnen** Bauteilen weniger tragfähig als Niete mit überstehendem Kopf.
:::

## Übungsaufgaben

:::aufgabe 1
Titanblech $R_m=900$, $R_{p0,2}=830\,$N/mm², $e/d=2{,}5$. Bestimme $\sigma_{LX}$. Wie ändert sich der Wert bei $e/d=1{,}5$?
:::loesung
$e/d\ge2$: $f_B=1{,}7$, $f_{0,2}=1{,}5$ → $\sigma_{LB}=1530$, $1{,}5\sigma_{L2}=1{,}5\cdot1245=1867{,}5$ → $\sigma_{LX}=1530\,$N/mm².
$e/d=1{,}5$: $f_B=1{,}4$, $f_{0,2}=1{,}35$ → $\sigma_{LB}=1260$, $1{,}5\cdot1120{,}5=1680{,}8$ → $\sigma_{LX}=1260\,$N/mm² (−18 %).
:::
:::

:::aufgabe 2
Werkstoff mit $R_m=470$, $R_{p0,2}=325\,$N/mm². Wie groß ist die Scherfestigkeit $R_C$, wenn daraus ein Passniet gefertigt wird?
:::loesung
$R_{C1}=0{,}6\cdot470=282$, $R_{C2}=0{,}9\cdot325=292{,}5$ → $R_C=282\,$N/mm².
:::
:::

:::aufgabe 3
Ein Vollniet $d=3{,}2\,$mm ($d_R=3{,}25$, $R_C=260\,$N/mm²) verbindet zweischnittig ein Mittelblech $s=1{,}6\,$mm ($\sigma_{LX}=600\,$N/mm²) mit zwei Laschen. Welches Versagen ist maßgebend und welche Bruchkraft trägt der Niet? (Vereinfacht: nur Mittelblech auf Lochleibung prüfen, F-s-Diagramm für zweischnittig.)
:::loesung
$F_{SB}=260\cdot\frac{\pi\cdot3{,}25^2}4=2157\,$N je Schnitt → $2F_{SB}=4314\,$N.
Zweischnittig: $2\bar s=\frac{4314}{600\cdot3{,}25}=2{,}21\,$mm. $U\cdot2\bar s=1{,}66\,$mm. $s=1{,}6<1{,}66$ → **Lochleibungsbereich**: $F_B=3{,}25\cdot1{,}6\cdot600=3120\,$N. Das Mittelblech versagt auf Lochleibung bei ca. 3,1 kN.
:::
:::

:::aufgabe 4
Erkläre, warum die Kurve im F-s-Diagramm für große Blechdicken waagerecht verläuft und warum bei Blindnieten ein Schlupf $T$ berücksichtigt wird.
:::loesung
Bei großen Dicken schert der Schaft ab; dessen Scherkraft $F_{SB}$ hängt nur vom Nietquerschnitt und $R_C$ ab, nicht von $s$. Blindniete füllen die Bohrung nicht so passgenau aus wie gestauchte Vollniete; bevor sie tragen, verschieben sie sich etwas (Spiel) – das wird durch die Verschiebung $T=0{,}05d_R$ berücksichtigt.
:::
:::

## Karteikarten

:::karte
Drei Versagensarten einer schubbelasteten Nietverbindung?
???
Lochleibung $F_{LB}=d_Rs\sigma_{LX}$, Scherbruch $F_{SB}=R_C\frac{\pi d_R^2}4$, Zugbruch des Bauteils $F_Z=R_mA$.
:::

:::karte
Abschätzung $R_C$?
???
$R_C=\min(0{,}6R_m;\ 0{,}9R_{p0,2})$ (Pass- und Vollniete).
:::

:::karte
Abschätzung $\sigma_{LX}$?
???
$\sigma_{LX}=\min(f_BR_m;\ 1{,}5f_{0,2}R_{p0,2})$, Faktoren nach Werkstoff und $e/d$ (Tab. 6.4).
:::

:::karte
Empfohlener Randabstand?
???
$e/d\ge2{,}0$; zwischen 1,5 und 2,0 linear interpolieren; unter 1,5 nur in Ausnahmefällen (bei Faserverbund $e/d>3$).
:::

:::karte
Rechnerischer Durchmesser geschlagener Vollniete?
???
$d_R=d+0{,}05\,$mm.
:::

:::karte
Was ist $\bar s$ im F-s-Diagramm?
???
Schnittpunkt Lochleibungsgerade/Scherkraft: $\bar s=\frac{F_{SB}}{\sigma_{LX}d_R}$.
:::

:::karte
$U$, $V$ für Vollniete?
???
$U=0{,}75$ (Ende Lochleibungsbereich), $V=1{,}5$ (Beginn Scherbereich), $T=0$.
:::

:::karte
Mehrschnittig – Scherkraft?
???
$F_{SB,n_s}=n_s\cdot F_{SB,\text{einschnittig}}$.
:::

:::karte
Senkniet: $\alpha$, $\Delta s$, $F_A$?
???
Vollniet $\alpha=\frac23\frac{R_C}{\sigma_{LX}}+0{,}2$; $\Delta s=k(1-\alpha)$; $F_A=d_Rk\sigma_{LX}\alpha$; Diagramm ab $F_A$ um $\Delta s$ nach rechts verschieben.
:::

:::karte
Dünnes vs. dickes Bauteil – was versagt?
???
Dünn: Bauteil (Lochleibung). Dick: Verbindungselement (Abscheren).
:::
