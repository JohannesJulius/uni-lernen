---
title: 2.1 Ebener Spannungszustand – Transformation, Hauptspannungen, Hauptschubspannungen
chapter: 2 Grundlagen der Festigkeitslehre
minutes: 100
sources: Technische Mechanik 2/tm2_02_grundlagen.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#51; Technische Mechanik 2/Uebung_01_Aufgaben.pdf
---

:::ziel
- Den **ebenen Spannungszustand** erkennen und mit $\sigma_x,\sigma_y,\tau_{xy}$ beschreiben.
- Die **Transformationsformeln** für ein um $\varphi$ gedrehtes Schnittsystem herleiten und anwenden.
- **Hauptspannungen** $\sigma_{1,2}$, **Hauptrichtungen** $\varphi^*$, **Hauptschubspannung** $\tau_{max}$ und $\varphi^{**}$ berechnen.
- **Invarianten** zur Kontrolle nutzen.
:::

## Ebener Spannungszustand

In **dünnen, flächigen** Bauteilen (Bleche, Scheiben, dünne Rohrwände) wirken nur Spannungen in der Ebene ($x$-$y$); $\sigma_z=\tau_{xz}=\tau_{yz}=0$. Der Spannungszustand in einem Punkt ist dann durch **drei** Größen vollständig bestimmt:
$$\boldsymbol\sigma=\begin{pmatrix}\sigma_x&\tau_{xy}\\\tau_{xy}&\sigma_y\end{pmatrix}.$$

**Leitfrage:** Wie groß sind Normal- und Schubspannung in einem **schräg** geschnittenen Element? Unter welchem Winkel werden sie **extremal**?

## Transformationsformeln

Wir drehen das Koordinatensystem um $\varphi$ (**positiv gegen den Uhrzeigersinn**) zum $\xi$-$\eta$-System. Gleichgewicht an einem dreieckigen Element (Schnittfläche $\d A$ mit Normale $\xi$, Seitenflächen $\d A\cos\varphi$ und $\d A\sin\varphi$):

$$\sum F_\xi=0:\ \sigma_\xi\,\d A=\sigma_x\d A\cos^2\varphi+\sigma_y\d A\sin^2\varphi+2\tau_{xy}\d A\sin\varphi\cos\varphi$$

Mit $\cos^2\varphi=\frac12(1+\cos2\varphi)$, $\sin^2\varphi=\frac12(1-\cos2\varphi)$, $2\sin\varphi\cos\varphi=\sin2\varphi$:

:::formel Transformation des ebenen Spannungszustands
$$\begin{aligned}\sigma_\xi&=\tfrac12(\sigma_x+\sigma_y)+\tfrac12(\sigma_x-\sigma_y)\cos2\varphi+\tau_{xy}\sin2\varphi\\\sigma_\eta&=\tfrac12(\sigma_x+\sigma_y)-\tfrac12(\sigma_x-\sigma_y)\cos2\varphi-\tau_{xy}\sin2\varphi\\\tau_{\xi\eta}&=-\tfrac12(\sigma_x-\sigma_y)\sin2\varphi+\tau_{xy}\cos2\varphi\end{aligned}$$
$\varphi$ = Winkel von der $x$-Achse zur $\xi$-Achse (= Normale der Schnittfläche), gegen den Uhrzeigersinn positiv. $\sigma_\eta$ erhält man aus $\sigma_\xi$ mit $\varphi+\frac\pi2$.
:::

:::achtung Häufige Fehler
- $\varphi$ ist der Winkel der **Normalen** der Schnittfläche, nicht der Schnittlinie! „Schnitt unter 60° zur $x$-Achse" ⇒ Normale bei $60°-90°=-30°$.
- Im Uhrzeigersinn gedreht ⇒ $\varphi$ **negativ**.
- In den Formeln steht **$2\varphi$**.
:::

### Invarianten
Addiert man die ersten beiden Gleichungen bzw. bildet die Determinante, so erhält man Größen, die **unabhängig von $\varphi$** sind:
$$\sigma_\xi+\sigma_\eta=\sigma_x+\sigma_y,\qquad\sigma_\xi\sigma_\eta-\tau_{\xi\eta}^2=\sigma_x\sigma_y-\tau_{xy}^2.$$
**Nutzen:** Rechenkontrolle! (Spur und Determinante der Matrix bleiben bei Drehung gleich – vgl. Mathe 1, Eigenwerte.)

### Hydrostatischer Spannungszustand
$\sigma_x=\sigma_y=\sigma_0$, $\tau_{xy}=0$ ⇒ $\sigma_\xi=\sigma_\eta=\sigma_0$, $\tau_{\xi\eta}=0$ für **jeden** Winkel (wie der Druck in einer ruhenden Flüssigkeit).

## Hauptspannungen und Hauptrichtungen

Extremwerte von $\sigma_\xi$: $\frac{\d\sigma_\xi}{\d\varphi}=-(\sigma_x-\sigma_y)\sin2\varphi+2\tau_{xy}\cos2\varphi=0$ ⇒

:::formel Hauptspannungen
$$\tan2\varphi^*=\frac{2\tau_{xy}}{\sigma_x-\sigma_y},\qquad\sigma_{1,2}=\frac{\sigma_x+\sigma_y}2\pm\sqrt{\left(\frac{\sigma_x-\sigma_y}2\right)^2+\tau_{xy}^2},\qquad\sigma_1\ge\sigma_2.$$
- Wegen der Periode von $\tan$ gibt es **zwei senkrechte Hauptrichtungen** $\varphi^*$ und $\varphi^*+90°$.
- Bemerkenswert: Die Bedingung $\frac{\d\sigma_\xi}{\d\varphi}=0$ ist genau $\tau_{\xi\eta}=0$. **In den Hauptrichtungen verschwinden die Schubspannungen.**
- **Zuordnung:** $\varphi^*$ in $\sigma_\xi$ einsetzen – kommt $\sigma_1$ oder $\sigma_2$ heraus?
:::

*Mathe-1-Verbindung:* $\sigma_{1,2}$ sind die **Eigenwerte** der symmetrischen Matrix $\boldsymbol\sigma$, die Hauptrichtungen ihre (orthogonalen) **Eigenvektoren**. Charakteristisches Polynom: $\lambda^2-(\sigma_x+\sigma_y)\lambda+(\sigma_x\sigma_y-\tau_{xy}^2)=0$ – Spur und Determinante sind genau die Invarianten.

## Hauptschubspannungen

$\frac{\d\tau_{\xi\eta}}{\d\varphi}=0$ ⇒

:::formel Hauptschubspannung
$$\tan2\varphi^{**}=-\frac{\sigma_x-\sigma_y}{2\tau_{xy}},\qquad\tau_{max}=\pm\sqrt{\left(\frac{\sigma_x-\sigma_y}2\right)^2+\tau_{xy}^2}=\pm\frac12(\sigma_1-\sigma_2).$$
- $\tan2\varphi^{**}=-1/\tan2\varphi^*$ ⇒ $2\varphi^{**}\perp2\varphi^*$ ⇒ **$\varphi^{**}=\varphi^*\pm45°$**.
- In diesen Schnitten sind die Normalspannungen **nicht** null, sondern gleich der mittleren Spannung
$$\sigma_M=\tfrac12(\sigma_x+\sigma_y)=\tfrac12(\sigma_1+\sigma_2).$$
:::

| | Schnittwinkel | Normalspannung | Schubspannung |
|---|---|---|---|
| Hauptachsensystem | $\varphi^*$ | extremal: $\sigma_1,\sigma_2$ | **0** |
| System der Hauptschubspannungen | $\varphi^*\pm45°$ | $\sigma_M$ (beide gleich) | extremal: $\pm\tau_{max}$ |

:::rezept Hauptspannungen bestimmen
1. $\sigma_x,\sigma_y,\tau_{xy}$ **mit Vorzeichen** ablesen.
2. $\sigma_M=\frac{\sigma_x+\sigma_y}2$, $r=\sqrt{(\frac{\sigma_x-\sigma_y}2)^2+\tau_{xy}^2}$.
3. $\sigma_{1,2}=\sigma_M\pm r$, $\tau_{max}=r$.
4. $\tan2\varphi^*=\frac{2\tau_{xy}}{\sigma_x-\sigma_y}$; $\varphi^*$ in $\sigma_\xi$ einsetzen ⇒ zuordnen.
5. $\varphi^{**}=\varphi^*\pm45°$.
6. Kontrolle: $\sigma_1+\sigma_2=\sigma_x+\sigma_y$. Element mit **wirklichen** Richtungen skizzieren.
:::

:::bsp Gross Beispiel 2.1 (Folienbeispiel)
Blech: $\sigma_x=-64$, $\sigma_y=32$, $\tau_{xy}=-20$ (alle in MPa).

**a) Schnitt unter 60° zur $x$-Achse.** Normale um 30° im Uhrzeigersinn gedreht: $\varphi=-30°$, $2\varphi=-60°$:
$\sigma_\xi=-16+(-48)\cdot0{,}5+(-20)(-0{,}866)=-16-24+17{,}3=-22{,}7\,$MPa
$\tau_{\xi\eta}=-(-48)(-0{,}866)+(-20)(0{,}5)=-41{,}6-10=-51{,}6\,$MPa.

**b) Hauptspannungen:** $\sigma_M=-16$, $r=\sqrt{48^2+20^2}=52$ ⇒ $\sigma_1=36\,$MPa, $\sigma_2=-68\,$MPa.
$\tan2\varphi^*=\frac{-40}{-96}=0{,}417$ ⇒ $\varphi^*=11{,}3°$. Einsetzen: $\sigma_\xi(11{,}3°)=-16-48\cos22{,}6°-20\sin22{,}6°=-68=\sigma_2$. Also wirkt $\sigma_2$ unter 11,3°, $\sigma_1$ senkrecht dazu (101,3°).

**c)** $\tau_{max}=52\,$MPa unter $\varphi^{**}=11{,}3°+45°=56{,}3°$, dort $\sigma=\sigma_M=-16\,$MPa.
Kontrolle: $36+(-68)=-32=-64+32$ ✓.
:::

## Aufgaben

:::aufgabe 1 (Übung 1, Aufgabe 3 rechnerisch)
$\sigma_x=70$, $\sigma_y=-10$, $\tau_{xy}=-30$ (N/mm²). (a) $\sigma_1,\sigma_2,\tau_{max}$. (b) $\varphi^*$ und $\varphi^{**}$. (c) $\sigma$ und $\tau$ in der Richtung, die um 30° gegenüber der Richtung maximaler Schubspannung (gegen den Uhrzeigersinn) gedreht ist.
:::loesung
(a) $\sigma_M=30$, $r=\sqrt{40^2+30^2}=50$ ⇒ $\sigma_1=80$, $\sigma_2=-20$, $\tau_{max}=50$ N/mm².
(b) $\tan2\varphi^*=\frac{-60}{80}=-0{,}75$ ⇒ $2\varphi^*=-36{,}9°$, $\varphi^*=-18{,}4°$. Einsetzen: $\sigma_\xi=30+40\cdot0{,}8+(-30)(-0{,}6)=80=\sigma_1$ ✓. $\sigma_2$ wirkt bei $71{,}6°$.
$\varphi^{**}=\varphi^*+45°=26{,}6°$ (dort $\tau_{\xi\eta}=-40\sin53{,}1°-30\cos53{,}1°=-50$) bzw. $-63{,}4°$ ($\tau=+50$).
(c) $\varphi=26{,}6°+30°=56{,}6°$, $2\varphi=113{,}1°$: $\sigma_\xi=30+40\cos113{,}1°-30\sin113{,}1°=30-15{,}7-27{,}6=-13{,}3$ N/mm²; $\tau_{\xi\eta}=-40\sin113{,}1°-30\cos113{,}1°=-36{,}8+11{,}8=-25$ N/mm².
Kontrolle am Kreis: Um 60° vom τ-Extrempunkt weitergedreht ⇒ $\sigma=\sigma_M-r\sin60°=-13{,}3$, $|\tau|=r\cos60°=25$ ✓.
:::
:::

:::aufgabe 2 (Übung 1, Aufgabe 4)
Bekannt: $\sigma_2=-15\,$MPa, $\tau_{max}=28{,}25\,$MPa. Gesucht: Normal- und Schubspannung in einem Schnitt, dessen Normale um $\varphi=60°$ gegen den Uhrzeigersinn gegenüber der Hauptachse 2 gedreht ist.
:::loesung
$\sigma_1=\sigma_2+2\tau_{max}=41{,}5\,$MPa. Hauptachse 2 als „$x$" wählen: $\sigma_x=-15$, $\sigma_y=41{,}5$, $\tau_{xy}=0$; $2\varphi=120°$:
$\sigma_\xi=13{,}25+(-28{,}25)\cos120°=13{,}25+14{,}13=27{,}4\,$MPa; $\tau_{\xi\eta}=-(-28{,}25)\sin120°=24{,}5\,$MPa.
(Vergleichsspannungen dazu → Lektion Festigkeitshypothesen.)
:::
:::

:::aufgabe 3
Zeige mit den Invarianten: Für $\sigma_x=50$, $\sigma_y=-20$, $\tau_{xy}=30$ (MPa) ist $\sigma_1\sigma_2=-1900\,\mathrm{MPa}^2$.
:::loesung
$\sigma_1\sigma_2=\sigma_x\sigma_y-\tau_{xy}^2=-1000-900=-1900$. Probe: $\sigma_{1,2}=15\pm46{,}1$ ⇒ $61{,}1\cdot(-31{,}1)\approx-1900$ ✓.
:::
:::

:::aufgabe 4
Einachsiger Zug $\sigma_x=\sigma_0$. Wie groß sind $\sigma$ und $\tau$ in einem Schnitt mit Normalenwinkel $\varphi$? Wo ist $\tau$ maximal?
:::loesung
$\sigma_\xi=\frac{\sigma_0}2(1+\cos2\varphi)=\sigma_0\cos^2\varphi$, $\tau_{\xi\eta}=-\frac{\sigma_0}2\sin2\varphi$. $|\tau|$ maximal bei $\varphi=45°$: $\tau_{max}=\frac{\sigma_0}2$, dort $\sigma=\frac{\sigma_0}2$. (Darum fließen zähe Metalle im Zugversuch unter 45° – „Gleitlinien".)
:::
:::

## Karteikarten

:::karte
Transformationsformel für $\sigma_\xi$?
???
$\sigma_\xi=\frac12(\sigma_x+\sigma_y)+\frac12(\sigma_x-\sigma_y)\cos2\varphi+\tau_{xy}\sin2\varphi$
:::

:::karte
Transformationsformel für $\tau_{\xi\eta}$?
???
$\tau_{\xi\eta}=-\frac12(\sigma_x-\sigma_y)\sin2\varphi+\tau_{xy}\cos2\varphi$
:::

:::karte
Hauptspannungen und Hauptrichtung?
???
$\sigma_{1,2}=\frac{\sigma_x+\sigma_y}2\pm\sqrt{(\frac{\sigma_x-\sigma_y}2)^2+\tau_{xy}^2}$, $\tan2\varphi^*=\frac{2\tau_{xy}}{\sigma_x-\sigma_y}$
:::

:::karte
Hauptschubspannung, Winkel, Normalspannung dort?
???
$\tau_{max}=\frac12(\sigma_1-\sigma_2)$, unter 45° zu den Hauptrichtungen, dort $\sigma=\sigma_M=\frac12(\sigma_1+\sigma_2)$.
:::

:::karte
Invarianten des ebenen Spannungszustands?
???
$\sigma_x+\sigma_y$ und $\sigma_x\sigma_y-\tau_{xy}^2$ (Spur und Determinante).
:::

:::karte
Was gilt für die Schubspannung in Hauptrichtung?
???
Sie ist null.
:::
