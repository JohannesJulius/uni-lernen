---
title: 9 Augenverbindungen – Wangenbruch, Scheitelbruch, Querlast, Bolzen, einschnittige Augen
chapter: Kap. 8 Augenverbindungen
minutes: 140
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#61; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#65; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#68
---

:::ziel
- Die **sechs Versagensarten** einer Augenverbindung nennen.
- Die ertragbare **Axiallast** $F_{AL}$ (Wangenbruch, Scheitelbruch, Fließen) und **Querlast** $F_{AQ}$ eines zweischnittigen Auges berechnen.
- Beide zur ertragbaren Last bei **schrägem Lastangriff** kombinieren.
- Den **Bolzen** auf Scherung, Biegebruch und Fließen sowie die **Buchse** nachweisen.
- **Einschnittige** (gestützte und ungestützte) Augen mit Korrekturfaktoren behandeln und **Gestaltungsrichtlinien** anwenden.
:::

## 1 Was ist eine Augenverbindung?

Ein **Auge** (engl. *lug*) ist ein Blech- oder Schmiedeteil mit einer **Bohrung**, durch die ein **Bolzen** geht. Typisch: **Gabel** (zwei Wangen, außen) + **Auge** (Mitte) + Bolzen = **zweischnittige** Verbindung.
- **Beweglich:** Klappenanschlüsse, Ansteuerhebel.
- **Fest:** Flügelanschluss, Streben – hier dient das Auge vor allem dazu, **Biegemomente in der Strebe zu vermeiden** (es gleicht kleine elastische Verformungen aus, wirkt wie ein Gelenk).

:::merke Sechs Versagensarten (Abb. 8.3)
**Auge:** 1. **Zugbruch (Wangenbruch)** im Nettoquerschnitt neben der Bohrung · 2. **Ausscheren im Scheitel** (vor der Bohrung) · 3. **Fließen/Ovalisieren** der Bohrung.
**Bolzen:** 4. **Biegung** · 5. **Scherung**.
**Buchse:** 6. **Fließen** der Buchse.
:::

**Bezeichnungen:** $D$ = Bohrungsdurchmesser des Auges, $d$ = Bolzendurchmesser (gleich $D$ ohne Buchse), $b$ = Augenbreite, $h$ = Abstand Bohrungsmitte–Augenende (in Lastrichtung), $s$ = Augendicke. $R_{mA}$, $R_{p0,2A}$ = Festigkeit des Augenwerkstoffs, Index **X** = jeweils der **kleinere** Wert der beiden Richtungen in der Augenebene (Faserrichtung L, LT, ST beachten!).

:::info Vorgehen (Nachrechenverfahren, kein Entwurfsverfahren)
1. Ertragbare Last bei **reiner Axiallast** $F_{AL}$.
2. Ertragbare Last bei **reiner Querlast** $F_{AQ}$.
3. **Kombination** für schrägen Lastangriff → $F_A$.
4. Bolzen und Buchse nachweisen.
5. RF = ertragbar / vorhanden.
Die Diagramme (aus HSB/Bruhn/Niu) zeigen auch die **Trends** zu günstiger Gestaltung. Abweichende Augenformen werden auf das idealisierte Auge vereinfacht (Abb. 8.5).
:::

## 2 Axiale Belastung, zweischnittig (Kap. 8.2.3)

Die Werkstoffe werden über **Tab. 8.1** den Kurven in den Diagrammen zugeordnet (z. B. 7075-T651-Platte ≤ 12 mm: $K_W$-Kurve 1 in L/LT, 6 in ST; $K_{qB}$-Kurve 2).

:::formel Wangenbruch (Abb. 8.6)
$$F_W=K_W\,(b-D)\,s\,R_{mA-I}$$
$K_W$ = Abminderungsfaktor über $b/D$ (Kerbwirkung, ungleichmäßige Spannungsverteilung). $(b-D)s$ = Nettoquerschnitt.
:::

:::formel Scheitelbruch / Ausreißen (Abb. 8.7)
$$F_S=K_S\cdot D\cdot s\cdot R_{mA-X}$$
$K_S$ über $h/D$, Kurvenschar mit Parameter $D/s$ (je dicker das Auge relativ zur Bohrung, desto günstiger). Für dicke Al-Platten/Stangen ($>12{,}7\,$mm) $K_S\le2{,}0$.
:::

:::formel Fließen/Ovalisieren (Abb. 8.8)
Annahme: Bei **sicherer Last** keine plastische Verformung.
$$F_{FL}=K_F\cdot\frac{R_{p0,2A-X}}{R_{mA-X}}\cdot F_{min},\qquad F_{min}=\min(F_W,F_S),$$
$K_F$ aus Abb. 8.8 über $\dfrac{F_{min}}{D\,s\,R_{mA-X}}$.
:::

:::formel Ertragbare axiale Bruchlast
$$F_{AL}=\min\left(F_W;\ F_S;\ F_{FL}\cdot j\right),\qquad j=1{,}5.$$
Die Fließlast darf mit $j$ multipliziert werden, weil die Bauvorschrift (z. B. CS 23.301(a)) gegen Fließen keine zusätzliche Sicherheit fordert – Fließen ist bei **sicherer** Last verboten, Bruch bei **Bruchlast** = $j$·sichere Last.
:::

:::achtung CS 23.305
Die Bauvorschrift fordert sogar mehr: (a) keine schädliche bleibende Verformung bis zur sicheren Last **und** keine Verformung (auch elastisch!), die den sicheren Betrieb gefährdet.
:::

## 3 Querbelastung, zweischnittig (Kap. 8.2.4, $\alpha=90°$)

:::formel Bezugsquerschnitt (Abb. 8.9)
$$A_m=\frac{6}{\dfrac3{A_1}+\dfrac1{A_2}+\dfrac1{A_3}+\dfrac1{A_4}}$$
$A_1$ = Querschnitt auf der Lastseite, $A_2$, $A_4$ = Querschnitte unter 45°, $A_3$ = geringster Querschnitt am Auge. (Gewichtetes harmonisches Mittel: der Querschnitt auf der Lastseite zählt dreifach.)
:::

:::formel Bruch und Fließen quer (Abb. 8.10)
$$F_{qB}=K_{qB}\,D\,s\,R_{mA-X},\qquad F_{qF}=K_{qF}\,D\,s\,R_{p0,2A-X},$$
$K_{qB}$, $K_{qF}$ über $\dfrac{A_m}{D\,s}$. Ertragbar: $F_{AQ}=\min(F_{qB};\ F_{qF}\cdot j)$.
:::

## 4 Schräger Lastangriff (Kap. 8.2.5)

:::formel Interaktion Längs/Quer
$$F_A=\left[\frac{1}{\left(\dfrac{\cos\alpha}{F_{AL}}\right)^{1{,}6}+\left(\dfrac{\sin\alpha}{F_{AQ}}\right)^{1{,}6}}\right]^{0{,}625},\qquad\sigma_L=\frac{F_A}{D\,s}.$$
($0{,}625=1/1{,}6$.) $\sigma_L$ ist eine **ertragbare Flächenbelastung** – sie sieht aus wie Lochleibung, die tatsächliche Versagensform kann aber auch Wangen- oder Scheitelbruch sein. Wichtig: $\sigma_L$ ist ein Maß für die **Einspannsteifigkeit des Bolzens** und geht in dessen Biegenachweis ein.
:::

## 5 Bolzen und Buchse (Kap. 8.2.6–8.2.7)

Zweischnittig versagt der Bolzen meist durch **Scherung**. Ist der seitliche Spalt $u$ (zwischen Gabelwange und Auge) groß und der Augenwerkstoff weich, kann er durch **Biegung** versagen.

:::formel Bolzen-Nachweise
**Scherung:** $F_{BS}=n_s\cdot F_{BSE}$, $F_{BSE}=\dfrac{\pi d^2}{4}R_C$ (meist $n_s=2$).
**Biegebruch:**
$$F_{BBB}=F_{BS}\cdot2{,}1\cdot\frac{\sqrt{\left(\frac ud\right)^2+\frac c3\cdot\frac{R_{mB}}{\sigma^*_{L1}}\left(1+\frac{\sigma^*_{L1}}{\sigma^*_{L2}}\right)}-\frac ud}{\frac{R_{mB}}{\sigma^*_{L1}}\left(1+\frac{\sigma^*_{L1}}{\sigma^*_{L2}}\right)}$$
$\sigma^*_L=\sigma_L\cdot\frac Dd$ (bei Buchsen auf den Bolzendurchmesser umgerechnet), Index 1 = Gabelwange(n), 2 = Mittelauge.
Anzugsbeiwert $c$: 1,0 Mutter nicht angezogen; 1,5 bei ca. 25 % Vorspannung; 1,8 bei ca. 40 % (bez. auf $R_{p0,2}$); interpolieren erlaubt, **nicht** über 1,8 extrapolieren.
**Fließen:** $F_{BBF}=0{,}6\cdot\dfrac{R_{p0,2B}}{R_{mB}}\cdot F_{BBB}$.
**Ertragbar:** $F_B=\min\left(F_{BS};\ F_{BBB};\ F_{BBF}\cdot j\right)$.
**Buchse:** $F_{Bu}=1{,}85\cdot R_{p0,2Bu}\cdot A_{Bu}$, $A_{Bu}=\min(D\,s_{BuD};\ d\,s_{Bud})$. Die Lochleibung der Buchse ist getrennt nachzuweisen.
:::

## 6 Durchgerechnetes Beispiel

:::bsp Zweischnittiges Auge aus 7075-T651
Platte 7075-T651, $s=10\,$mm ($\le12$), Last in L-Richtung; $R_m=538$, $R_{p0,2}=476\,$N/mm². $D=d=12\,$mm (ohne Buchse), $b=30\,$mm, $h=15\,$mm. Diagrammwerte (abgelesen, hier vorgegeben): $K_W=0{,}93$ (Kurve 1, $b/D=2{,}5$), $K_S=1{,}15$ ($h/D=1{,}25$, $D/s=1{,}2<2$).

**Axial:**
- $F_W=0{,}93\cdot(30-12)\cdot10\cdot538=90\,061\,$N
- $F_S=1{,}15\cdot12\cdot10\cdot538=74\,244\,$N → $F_{min}=74\,244\,$N
- $\frac{F_{min}}{D\,s\,R_m}=\frac{74\,244}{64\,560}=1{,}15$ → $K_F\approx1{,}08$ → $F_{FL}=1{,}08\cdot\frac{476}{538}\cdot74\,244=70\,943\,$N, $\cdot1{,}5=106\,415\,$N
- $F_{AL}=\min(90\,061;\ 74\,244;\ 106\,415)=$ **74 244 N – Scheitelbruch** maßgebend.

**Quer:** angenommen $A_1=A_2=A_3=A_4=90\,$mm² → $A_m=90$, $\frac{A_m}{Ds}=0{,}75$ → $K_{qB}\approx0{,}62$ (Kurve 2), $K_{qF}\approx0{,}72$.
- $F_{qB}=0{,}62\cdot120\cdot538=40\,027\,$N, $F_{qF}=0{,}72\cdot120\cdot476=41\,126\,$N, $\cdot1{,}5=61\,690\,$N
- $F_{AQ}=40\,027\,$N.

**Schräg, $\alpha=45°$:**
$$F_A=\left[\frac1{\left(\frac{0{,}707}{74\,244}\right)^{1{,}6}+\left(\frac{0{,}707}{40\,027}\right)^{1{,}6}}\right]^{0{,}625}=46\,451\,\text N,\qquad\sigma_L=\frac{46\,451}{120}=387\,\text{N/mm}^2.$$

**Bolzen** (Stahl, $R_{mB}=1100$, $R_{p0,2B}=990$, $R_C=0{,}6\cdot1100=660\,$N/mm²): $F_{BSE}=\frac{\pi\cdot12^2}4\cdot660=74\,644\,$N, $F_{BS}=149\,288\,$N.
Biegung mit $u/d=0{,}1$, $c=1{,}0$ und – zur Übung – $\sigma^*_{L1}=\sigma^*_{L2}=600\,$N/mm²: $\frac{R_{mB}}{\sigma^*_{L1}}(1+1)=3{,}667$; Zähler $\sqrt{0{,}01+\frac13\cdot3{,}667}-0{,}1=1{,}010$ → $F_{BBB}=149\,288\cdot2{,}1\cdot\frac{1{,}010}{3{,}667}=86\,361\,$N. $F_{BBF}=0{,}6\cdot0{,}9\cdot86\,361=46\,635\,$N, $\cdot1{,}5=69\,953\,$N.
$F_B=\min(149\,288;\ 86\,361;\ 69\,953)=$ **69 953 N – Fließen durch Biegung**. Obwohl der Bolzen 149 kN Scherkraft könnte, begrenzt die Biegung!
:::

## 7 Einschnittige Augen (Kap. 8.3)

Setzt immer die Rechnung des **zweischnittigen** Auges voraus; die Exzentrizität $e$ (Abstand der Lastvektoren) wird über **Korrekturfaktoren** berücksichtigt.

:::formel Ungestütztes Auge (Abb. 8.14–8.16)
$$F_{Ae}=K_{A1}\cdot\frac{\sigma_L}{R_{mA-I}}\cdot F_A,\qquad F_{B1}=K_{B1}\cdot F_{BSE}.$$
$K_{A1}$ über $e/s$ mit Parameter $\mu d/s$ (Reibung $\mu=0{,}05$ geschmiert, $0{,}2$ ungeschmiert); $K_{B1}$ über $e/s$ mit Parameter $d/s$. Die Tragfähigkeit des Auges sinkt auf bis zu **1/10**, die des Bolzens auf bis zu **15 %** des zweischnittigen Werts! Günstig: kleines $e/s$, großes $d/s$ (steifer Bolzen, weiches Auge).
:::

:::formel Gestütztes Auge (Abb. 8.17–8.19)
Durch eine **Kröpfung (Stützung)** wird der Abstand der Lastvektoren verringert – deutlich geringere Abminderung:
$$F_{Ae}=K_{A2}\cdot\frac{\sigma_L}{R_{mA-I}}\cdot F_A,\qquad F_{Be}=K_{B2}\cdot F_{BSE},$$
$K_{A2}$ über $e/s$ mit dem Geometrieparameter $T$ (Kurven $T=0{,}75$; $1{,}25$; $2{,}0$, Definition nach Abb. 8.17), $K_{B2}$ über $e/s$ mit Parameter $d/s$; für $e/s$ gilt der kleinere Wert aus $e/s$ und $e_1/s$. Gültig für $1{,}25\le b/d\le2{,}0$ und $1{,}0\le d/s\le5{,}0$.
:::

## 8 Gestaltungsrichtlinien (Kap. 8.4)

:::merke
- Bei zweischnittigen **Gabeln** dürfen die Gabelwangen beim Anziehen der Mutter **nicht gegeneinander verspannt** werden – die Biegespannungen würden schnell plastisch → Bruchgefahr, drastisch reduzierte Lebensdauer.
- Lösungen (Abb. 8.20/8.21): eine Wange bleibt frei (Buchse/Distanzbuchse stützt gegen den **Innenring des Kugellagers**), Gabel mit Freimaßtoleranzen fertigbar.
- **Kugellager in den Ösenkopf der Stange** statt ins Hebelauge verlegen → bei Verschleiß einfach den Ösenkopf tauschen (billige, schnelle Wartung).
- Variante 1: viele Demontagen ohne Beschädigung der Wangenbohrungen (hohe Lebensdauer). Variante 2: weniger Teile (billiger), aber Schiebesitz → Verschleiß der Wangenbohrung, ggf. Übermaßbuchse.
- Allgemein: **zweischnittig statt einschnittig**, große Radien, Faserrichtung L in Lastrichtung (Lektion 15).
:::

## Übungsaufgaben

:::aufgabe 1
Im Beispiel soll die Last unter $\alpha=30°$ zur Längsachse wirken. Wie groß ist $F_A$? Und bei $\alpha=0°$ bzw. $90°$?
:::loesung
$\alpha=0°$: $F_A=F_{AL}=74\,244\,$N; $\alpha=90°$: $F_A=F_{AQ}=40\,027\,$N.
$\alpha=30°$: $\left(\frac{0{,}866}{74\,244}\right)^{1{,}6}=1{,}28\cdot10^{-8}$, $\left(\frac{0{,}5}{40\,027}\right)^{1{,}6}=1{,}43\cdot10^{-8}$ (Tipp: $x^{1{,}6}=e^{1{,}6\ln x}$) → Summe $2{,}71\cdot10^{-8}$ → $F_A=\left(\frac1{2{,}71\cdot10^{-8}}\right)^{0{,}625}\approx$ **53,7 kN**.
:::
:::

:::aufgabe 2
Ein Auge hat $A_1=80$, $A_2=100$, $A_3=70$, $A_4=100\,$mm². Bestimme $A_m$.
:::loesung
$A_m=\frac{6}{3/80+1/100+1/70+1/100}=\frac6{0{,}0375+0{,}01+0{,}01429+0{,}01}=\frac6{0{,}07179}=83{,}6\,$mm².
:::
:::

:::aufgabe 3
Warum ist bei der ertragbaren Axiallast die Fließlast mit $j=1{,}5$ zu multiplizieren, bevor man das Minimum bildet?
:::loesung
Alle Werte werden auf **Bruchlastniveau** verglichen. Fließen darf erst oberhalb der **sicheren** Last eintreten; die Bruchlast ist $j$-mal so groß. Eine Fließlast $F_{FL}$ entspricht daher einer zulässigen Bruchlast $j\cdot F_{FL}$.
:::
:::

:::aufgabe 4
Welche Maßnahmen erhöhen die Tragfähigkeit eines ungestützten, einschnittigen Auges am meisten?
:::loesung
Exzentrizität $e/s$ verkleinern (Stützung/Kröpfung → gestütztes Auge), besser noch zweischnittig ausführen; größeren, steiferen Bolzen ($d/s$ groß); Gelenk schmieren (kleines $\mu$).
:::
:::

## Karteikarten

:::karte
Sechs Versagensarten einer Augenverbindung?
???
Auge: Wangenbruch (Zug), Scheitelbruch (Ausscheren), Fließen/Ovalisieren. Bolzen: Scherung, Biegung. Buchse: Fließen.
:::

:::karte
Wangenbruch-Formel?
???
$F_W=K_W(b-D)sR_{mA-I}$, $K_W$ über $b/D$.
:::

:::karte
Scheitelbruch-Formel?
???
$F_S=K_SDsR_{mA-X}$, $K_S$ über $h/D$ und $D/s$.
:::

:::karte
Ertragbare Axiallast des Auges?
???
$F_{AL}=\min(F_W;F_S;j\cdot F_{FL})$ mit $F_{FL}=K_F\frac{R_{p0,2}}{R_m}F_{min}$.
:::

:::karte
Bezugsquerschnitt bei Querlast?
???
$A_m=\frac{6}{3/A_1+1/A_2+1/A_3+1/A_4}$; $F_{qB}=K_{qB}DsR_m$, $F_{qF}=K_{qF}DsR_{p0,2}$.
:::

:::karte
Schräger Lastangriff am Auge?
???
$F_A=\left[\left(\frac{\cos\alpha}{F_{AL}}\right)^{1{,}6}+\left(\frac{\sin\alpha}{F_{AQ}}\right)^{1{,}6}\right]^{-0{,}625}$.
:::

:::karte
Ertragbare Bolzenlast im Auge?
???
$F_B=\min(F_{BS};F_{BBB};j\cdot F_{BBF})$, $F_{BBF}=0{,}6\frac{R_{p0,2}}{R_m}F_{BBB}$.
:::

:::karte
Einschnittiges ungestütztes Auge – Abminderung?
???
Auge bis auf 1/10, Bolzen bis auf 15 % des zweischnittigen Werts; günstig: kleines $e/s$, großes $d/s$.
:::

:::karte
Gestaltungsregel Gabelverbindung?
???
Gabelwangen nicht durch Anziehen verspannen (Biegung, plastisch); eine Wange frei, Lager in den Ösenkopf der Stange.
:::
