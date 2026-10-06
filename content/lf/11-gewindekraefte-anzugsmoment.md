---
title: 11 Schraubenverbindungen II – Kräfte am Gewinde, Anzugsmoment, Selbsthemmung, Anziehfaktor
chapter: Kap. 9 Schraubenverbindungen
minutes: 100
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#87; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#90
---

:::ziel
- Die Kräfte am **Flach-** und **Spitzgewinde** mit und ohne Reibung herleiten (schiefe Ebene!).
- Den **Reibwinkel** $\rho$ und den **scheinbaren Reibwinkel** $\rho'$ des Spitzgewindes berechnen.
- Den **Wirkungsgrad** eines Schraubtriebs angeben.
- Das **Anzugsmoment** $M_G$ aus Gewinde- und Kopfreibung (plus Überdrehmoment) für eine gewünschte Vorspannkraft berechnen – und umgekehrt.
- **Selbsthemmung** und **Lösemoment** bestimmen.
- Den **Anziehfaktor** $\alpha_A$ nach VDI 2230 kennen und aus der Reibwertstreuung berechnen.
:::

## 1 Das Gewinde als schiefe Ebene

Wickelt man einen Gewindegang ab, ist er eine **schiefe Ebene** mit Neigung $\varphi$ (Steigungswinkel). Die Mutter ist ein Klotz, der mit der **Umfangskraft** $F_U$ (am Flankendurchmesser $d_2$) die **Längskraft** $F_V$ (Vorspannkraft) die Ebene „hinaufschiebt".

:::formel Flachgewinde ohne Reibung (Gl. 9.2–9.5)
$$F_U=F_V\tan\varphi,\qquad\tan\varphi=\frac{P}{\pi d_2}\ \Rightarrow\ F_U=F_V\frac{P}{\pi d_2}$$
$$M_t=F_U\frac{d_2}2=F_V\frac{P}{2\pi}\qquad(\text{reine Hubarbeit: }M_t\cdot2\pi=F_V\cdot P).$$
:::

:::formel Mit Reibung (Gl. 9.6–9.12)
Reibwinkel: $\mu=\tan\rho$. Die resultierende Kraft auf die Flanke ist um $\rho$ gegen die Normale geneigt:
$$\text{Last heben (anziehen): }F_U=F_V\tan(\varphi+\rho),\qquad M_t=F_V\tan(\varphi+\rho)\frac{d_2}2$$
$$\text{Last senken (lösen): }F_U=F_V\tan(\varphi-\rho),\qquad M_t=F_V\tan(\varphi-\rho)\frac{d_2}2$$
:::

## 2 Spitzgewinde (Kap. 9.10.2)

Beim Spitzgewinde (Flankenwinkel $\alpha$, metrisch $60°$) steht die Flanke schräg. Die **Normalkraft** auf die Flanke ist größer als $F_V$: $F_N=\dfrac{F_V}{\cos(\alpha/2)}$. Damit ist bei gleicher Längskraft die **Reibkraft größer** als beim Flachgewinde – gut für **Befestigung** (Selbsthemmung).

:::formel Scheinbarer Reibwert (Gl. 9.13–9.16)
$$\mu'=\tan\rho'=\frac{\mu}{\cos\frac\alpha2}\qquad(\text{metrisch: }\mu'=\mu/\cos30°=1{,}155\,\mu)$$
$$F_U=F_V\tan(\varphi\pm\rho'),\qquad M_t=F_V\tan(\varphi\pm\rho')\frac{d_2}2$$
**+** = anziehen (Last heben), **−** = lösen (Last senken).
:::

:::formel Wirkungsgrad (Gl. 9.17–9.18)
$$\eta=\frac{\tan\varphi}{\tan(\varphi+\rho')}\quad(\text{Drehmoment}\to\text{Längskraft}),\qquad\eta'=\frac{\tan(\varphi-\rho')}{\tan\varphi}\quad(\text{Längskraft}\to\text{Drehmoment}).$$
Bei Befestigungsgewinden ($\varphi\approx3°$, $\rho'\approx8°$) ist $\eta\approx0{,}27$: **nur gut ein Viertel** des Gewindemoments wird in Vorspannung umgesetzt – der Rest ist Reibung. Abb. 9.16: $\eta$ steigt mit $\varphi$ bis zu einem Maximum (bei $\varphi=45°-\rho'/2$) und fällt danach wieder.
:::

## 3 Anzugsmoment (Kap. 9.10.3)

Beim Anziehen reibt nicht nur das Gewinde, sondern auch der **Kopf bzw. die Mutter auf der Auflage**:

:::formel Gesamtes Anzugsmoment (Gl. 9.19–9.20)
$$M_A=\mu_A\,F_V\,\frac{d_A}2,\qquad d_A=\frac{D_a+D_i}2\ (\text{mittlerer Auflagedurchmesser})$$
$$\boxed{M_G=M_t+M_A+M_Ü=F_V\left(\frac{d_2}2\tan(\varphi+\rho')+\frac{d_A}2\mu_A\right)+M_Ü}$$
$M_Ü$ = **Überdrehmoment** der Stoppmutter (die Klemmung der selbstsichernden Mutter muss zusätzlich überwunden werden). $D_a$ ≈ Kopfauflage außen ($d_w$), $D_i$ ≈ Bohrung ($d_h$).
:::

:::formel Richtwerte Reibung (Tab. 9.8, Auszug)
| Oberfläche | ungeschmiert | geölt | MoS₂ |
|---|---|---|---|
| Mn-phosphatiert | 0,14–0,18 | 0,14–0,15 | 0,10–0,11 |
| Zn-phosphatiert | 0,14–0,21 | 0,14–0,17 | 0,10–0,12 |
| galv. verzinkt | 0,125–0,18 | 0,125–0,17 | – |
| galv. **kadmiert** | 0,08–0,12 | 0,08–0,11 | – |
Die **Streuung** ist groß – das ist der Grund für den Anziehfaktor.
:::

:::bsp Anzugsmoment für M10
M10, $d_2=9{,}026$, $P=1{,}5$ → $\varphi=3{,}03°$. $\mu=\mu_A=0{,}12$ → $\rho'=\arctan\frac{0{,}12}{\cos30°}=7{,}89°$. Auflage $d_w=16$, $d_h=10{,}5$ → $d_A=13{,}25\,$mm. Gewünscht $F_V=25\,$kN, keine Stoppmutter.
- Gewinde: $M_t=25\,000\cdot\tan(10{,}92°)\cdot4{,}513=21\,761\,$N·mm
- Auflage: $M_A=0{,}12\cdot25\,000\cdot6{,}625=19\,875\,$N·mm
- $M_G\approx41{,}6\,$N·m. Davon dienen nur $F_V\frac P{2\pi}=5{,}97\,$N·m der eigentlichen „Hubarbeit" (≈ 14 %)!
:::

## 4 Selbsthemmung (Kap. 9.10.4)

:::def Selbsthemmung
Die Schraube löst sich **nicht von selbst**, wenn die Längskraft kein Drehmoment erzeugen kann:
$$F_U=F_V\tan(\varphi-\rho')\le0\iff\boxed{\varphi\le\rho'}\iff\eta'\le0\iff\eta\le0{,}5.$$
Metrische Regelgewinde ($\varphi\approx2{,}5°$) sind selbsthemmend, solange $\mu>$ ca. **0,04**.
:::

:::formel Lösemoment (Gl. 9.22–9.25)
$$M_{Lt}=F_V\frac{d_2}2\tan(\rho'-\varphi),\qquad M_{LA}=F_V\frac{d_A}2\mu_A$$
$$M_{LG}=F_V\left(\frac{d_2}2\tan(\rho'-\varphi)+\frac{d_A}2\mu_A\right)+M_Ü.$$
Wird die Reibung durch **oszillierende Belastung (Vibration)** völlig aufgehoben:
$$M_L=-F_V\frac{P}{2\pi}+M_Ü$$
– die Vorspannkraft **dreht die Mutter von selbst auf**; nur das Überdrehmoment $M_Ü$ hält noch. Deshalb braucht man im Flugzeugbau **Sicherungen**!
:::

:::bsp Lösemoment M10 (Fortsetzung)
$M_{Lt}=25\,000\cdot4{,}513\cdot\tan(7{,}89°-3{,}03°)=9594\,$N·mm, $M_{LA}=19\,875\,$N·mm → $M_{LG}\approx29{,}5\,$N·m < $M_G=41{,}6\,$N·m. Bei Vibration ohne Reibung: $M_L=-25\,000\cdot\frac{1{,}5}{2\pi}=-5{,}97\,$N·m → die Mutter würde sich lösen.
:::

## 5 Anziehfaktor (Kap. 9.10.5)

Ein Drehmomentschlüssel misst das **Moment**, nicht die **Vorspannkraft**. Weil die Reibung streut, streut bei gleichem Moment auch $F_V$:

:::formel Anziehfaktor (Gl. 9.26)
$$\alpha_A=\frac{F_{M\,max}}{F_{M\,min}}$$
| Anziehverfahren | $\alpha_A$ | Streuung |
|---|---|---|
| streckgrenzen- oder drehwinkelgesteuert | 1,0 | ±5 … ±12 % |
| hydraulisch | 1,2–1,6 | ±9 … ±23 % |
| **Drehmomentschlüssel** | **1,4–1,6** | ±17 … ±23 % |
| Präzisionsschrauber (dyn. Messung) | 1,6–1,8 | ±23 … ±28 % |
| Drehschrauber | 1,7–2,5 | ±26 … ±43 % |
| Schlagschrauber | 2,5–4 | ±43 … ±60 % |
:::

:::bsp Skript-Beispiel M12 mit 100 N·m
$\mu=0{,}08\ldots0{,}12$; $d_2=10{,}863$, $P=1{,}75$ → $\varphi=2{,}936°$; $d_W=24$, $d_h=13{,}5$ → $d_A=18{,}75\,$mm.
- **Max. Vorspannung bei minimaler Reibung:** $\rho'_{min}=\arctan\frac{0{,}08}{\cos30°}=5{,}278°$
$$F_{V\,max}=\frac{100\,000}{5{,}4315\cdot\tan(8{,}214°)+9{,}375\cdot0{,}08}=65\,190\,\text N.$$
- **Min. Vorspannung bei maximaler Reibung:** $\rho'_{max}=7{,}889°$ → $F_{V\,min}=46\,220\,$N.
- $\alpha_A=\frac{65\,190}{46\,220}=1{,}41$ – passt zum Tabellenwert für den Drehmomentschlüssel.
:::

:::merke Folge für die Auslegung
Die Schraube muss $F_{M\,max}$ aushalten (Festigkeit), die Verbindung muss mit $F_{M\,min}$ noch funktionieren (Klemmkraft). Je größer $\alpha_A$, desto **dicker** muss die Schraube sein. Genauere Verfahren (Drehwinkel, PLI-/DTI-Scheiben, Dehnungsmessung) sparen Gewicht.
:::

## Übungsaufgaben

:::aufgabe 1
Eine M8-Schraube ($d_2=7{,}188$, $P=1{,}25$) soll mit $F_V=15\,$kN vorgespannt werden. $\mu=0{,}10$, $\mu_A=0{,}12$, $d_A=11\,$mm, Stoppmutter mit $M_Ü=1{,}5\,$N·m. Anzugsmoment?
:::loesung
$\varphi=\arctan\frac{1{,}25}{\pi\cdot7{,}188}=3{,}17°$; $\rho'=\arctan\frac{0{,}10}{0{,}866}=6{,}59°$.
$M_t=15\,000\cdot3{,}594\cdot\tan9{,}76°=9268\,$N·mm; $M_A=15\,000\cdot5{,}5\cdot0{,}12=9900\,$N·mm.
$M_G=9{,}27+9{,}90+1{,}5=20{,}7\,$N·m.
:::
:::

:::aufgabe 2
Ist ein Trapezgewinde Tr 20×4 ($d_2=18$, Flankenwinkel 30°) mit $\mu=0{,}1$ selbsthemmend? Wie groß ist sein Wirkungsgrad $\eta$?
:::loesung
$\varphi=\arctan\frac4{\pi\cdot18}=4{,}05°$; $\rho'=\arctan\frac{0{,}1}{\cos15°}=5{,}91°$ → $\varphi<\rho'$ → **selbsthemmend**. $\eta=\frac{\tan4{,}05°}{\tan9{,}96°}=\frac{0{,}0708}{0{,}1756}=0{,}40$.
:::
:::

:::aufgabe 3
Mit welchem Moment muss man im Skript-Beispiel (M12) anziehen, damit selbst bei **maximaler** Reibung $F_V\ge55\,$kN erreicht wird? Welche maximale Vorspannung entsteht dann bei minimaler Reibung?
:::loesung
Bei $\mu=0{,}12$ sind pro Newton Vorspannung $5{,}4315\cdot\tan10{,}825°+9{,}375\cdot0{,}12=1{,}0386+1{,}125=2{,}1636\,$mm nötig → $M_G=55\,000\cdot2{,}1636=119\,$N·m. Bei $\mu=0{,}08$: Faktor $5{,}4315\cdot\tan8{,}214°+0{,}75=1{,}534\,$mm → $F_{V\,max}=119\,000/1{,}534=77{,}6\,$kN (= $1{,}41\cdot55$ kN).
:::
:::

## Karteikarten

:::karte
Gewinde ohne Reibung: Moment und Vorspannkraft?
???
$M_t=F_V\frac{P}{2\pi}$ (Arbeit pro Umdrehung = $F_VP$).
:::

:::karte
Gewindemoment mit Reibung (Spitzgewinde)?
???
$M_t=F_V\frac{d_2}2\tan(\varphi\pm\rho')$, + anziehen, − lösen.
:::

:::karte
Scheinbarer Reibwert $\mu'$?
???
$\mu'=\tan\rho'=\frac{\mu}{\cos(\alpha/2)}$, metrisch $\mu/\cos30°$.
:::

:::karte
Gesamtes Anzugsmoment?
???
$M_G=F_V\left(\frac{d_2}2\tan(\varphi+\rho')+\frac{d_A}2\mu_A\right)+M_Ü$.
:::

:::karte
Bedingung für Selbsthemmung?
???
$\varphi\le\rho'$ (⇔ $\eta\le0{,}5$); metrisch bei $\mu>0{,}04$ gegeben.
:::

:::karte
Lösemoment bei völlig aufgehobener Reibung?
???
$M_L=-F_V\frac{P}{2\pi}+M_Ü$ – die Vorspannung dreht die Mutter auf; nur Sicherung/Überdrehmoment hält.
:::

:::karte
Anziehfaktor und typischer Wert Drehmomentschlüssel?
???
$\alpha_A=F_{M\,max}/F_{M\,min}$; Drehmomentschlüssel 1,4–1,6; streckgrenzen-/drehwinkelgesteuert 1,0; Schlagschrauber 2,5–4.
:::

:::karte
Wirkungsgrad Schraubtrieb?
???
$\eta=\frac{\tan\varphi}{\tan(\varphi+\rho')}$; bei Befestigungsgewinden nur ca. 0,25–0,3.
:::
