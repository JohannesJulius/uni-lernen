---
title: 7 Niet- und Bolzenfelder II – räumliche Belastung (Schub + Zug, Kontakt)
chapter: Kap. 7 Niet- und Bolzenfelder
minutes: 120
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#46; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#48
---

:::ziel
- Beliebige räumliche Lasten (3 Kräfte, 3 Momente) auf einen **Bezugspunkt $U$** in der Feldebene umrechnen.
- Die Last in **Schub** (in der Feldebene) und **Zug** (senkrecht dazu) trennen und auf die Bolzen verteilen.
- Den **Zugschwerpunkt** und die **Hauptachsen** des Feldes bestimmen (schiefe Biegung).
- **Druckkräfte** an Bolzen erkennen und den **Kontakt** mit einem fiktiven Ersatzniet berücksichtigen.
- Jeden Bolzen mit der **Interaktionskurve** nachweisen.
:::

## Die Idee

Ein Winkelbeschlag sitzt mit mehreren Bolzen an einer Wand (Feldebene = $y$-$z$-Ebene, $x$ senkrecht zur Wand). Eine Last greift irgendwo im Raum an, im Punkt $P$. Dann gibt es zwei Arten Bolzenbelastung:

- **Schub** (Kräfte in der Feldebene): aus $F_y$, $F_z$ und dem Moment $M_x$ (Drehung **in** der Ebene) – genau wie in Lektion 6.
- **Zug** (senkrecht zur Ebene): aus $F_x$ und den Momenten $M_y$, $M_z$ (Kippen des Beschlags) – das Bolzenbündel wirkt wie ein **Balken unter schiefer Biegung** (vgl. TM 2!).

Voraussetzung wieder: Bauteile im Bereich der Verbindungselemente **starr**. Der Reservefaktor für kombinierte Last folgt dann aus der **Interaktionskurve** (Lektion 5).

## Schritt 1 – Lasten in den Bezugspunkt $U$ (Gl. 7.18–7.20)

$U$ liegt in der Feldebene (am einfachsten: Projektion von $P$ auf die Ebene oder die Feldmitte). $P$ hat relativ zu $U$ die Koordinaten $(x_P,y_P,z_P)$. Kräfte bleiben gleich; die Momente ändern sich um $\vec r_P\times\vec F$:

:::formel Transformation nach $U$
$$M_{xU}=M_{xP}-F_y\,z_P+F_z\,y_P$$
$$M_{yU}=M_{yP}+F_x\,z_P-F_z\,x_P$$
$$M_{zU}=M_{zP}-F_x\,y_P+F_y\,x_P$$
:::

## Schritt 2 – Schubbelastung in der Feldebene (Gl. 7.21–7.25)

:::formel Schubschwerpunkt und Bolzenschub
Schwerpunkt gewichtet mit den **ertragbaren Scherkräften** $Q_{Ei}$:
$$y_{SQ}=\frac{\sum Q_{Ei}y_i}{\sum Q_{Ei}},\qquad z_{SQ}=\frac{\sum Q_{Ei}z_i}{\sum Q_{Ei}}.$$
Moment um diesen Schwerpunkt: $M_{xSQ}=M_{xU}+F_y\,z_{SQ}-F_z\,y_{SQ}$.
Mit $\Delta y_i=y_i-y_{SQ}$, $\Delta z_i=z_i-z_{SQ}$ und $J_Q=\sum Q_{Ei}(\Delta y_i^2+\Delta z_i^2)$:
$$Q_{yi}=F_y\frac{Q_{Ei}}{\sum Q_{Ei}}-M_{xSQ}\frac{Q_{Ei}\,\Delta z_i}{J_Q},\qquad Q_{zi}=F_z\frac{Q_{Ei}}{\sum Q_{Ei}}+M_{xSQ}\frac{Q_{Ei}\,\Delta y_i}{J_Q},$$
$$Q_i=\sqrt{Q_{yi}^2+Q_{zi}^2}.$$
:::

:::achtung Vorzeichen
Im Skript steht in Gl. (7.24) vor dem Momentenanteil ebenfalls ein Minus. Physikalisch muss der Momentenanteil aber **senkrecht auf dem Radiusvektor** $(\Delta y_i;\Delta z_i)$ stehen, also $\propto(-\Delta z_i;\ +\Delta y_i)$ – so wie oben. Im Zweifel: Richtung über den **Drehsinn** von $M_x$ bestimmen (wie in Lektion 6).
:::

## Schritt 3 – Zugbelastung senkrecht zur Ebene (Gl. 7.26–7.39)

Bei Bolzen **ungleicher Werkstoffe** ist die zulässige Zugkraft $F_{Ei}$ im Verhältnis der E-Moduli umzurechnen (sie dient als „Steifigkeit").

:::formel Zugschwerpunkt und Momente
$$y_{SF}=\frac{\sum F_{Ei}y_i}{\sum F_{Ei}},\qquad z_{SF}=\frac{\sum F_{Ei}z_i}{\sum F_{Ei}}$$
$$M_{ySF}=M_{yU}-F_x\,z_{SF},\qquad M_{zSF}=M_{zU}+F_x\,y_{SF}.$$
:::

Die Zugkräfte verteilen sich wie die Spannungen bei **schiefer Biegung**: linear über das Feld. Ist das Feld **nicht symmetrisch**, muss man auf die **Hauptachsen** drehen:

:::formel Hauptachsen des Bolzenfeldes (Gl. 7.29–7.35)
$$\tan2\alpha=\frac{2\sum F_{Ei}\,\Delta y_i\,\Delta z_i}{\sum F_{Ei}\,\Delta y_i^2-\sum F_{Ei}\,\Delta z_i^2}\qquad(\Delta=\text{Abstand vom Zugschwerpunkt})$$
Koordinaten und Momente werden um $\alpha$ gedreht ($y_A=y\cos\alpha+z\sin\alpha$, $z_A=-y\sin\alpha+z\cos\alpha$, ebenso die Momentenvektoren). Das ist exakt dieselbe Rechnung wie Hauptträgheitsmomente in TM 2 – mit $F_{Ei}$ als „Flächen".
:::

:::formel Zugkraft je Bolzen (Hauptachsen, $\Delta y_{Ai}$, $\Delta z_{Ai}$ vom Zugschwerpunkt)
$$F_i=\underbrace{F_x\frac{F_{Ei}}{\sum F_{Ei}}}_{F_{1i}}+\underbrace{M_{y}\frac{F_{Ei}\,\Delta z_{Ai}}{\sum F_{Ei}\,\Delta z_{Ai}^2}}_{F_{2i}}-\underbrace{M_{z}\frac{F_{Ei}\,\Delta y_{Ai}}{\sum F_{Ei}\,\Delta y_{Ai}^2}}_{F_{3i}}$$
$F_i>0$: Zug im Bolzen. Bei doppelt symmetrischem Feld ist $\alpha=0$ und man rechnet direkt mit $y$, $z$.
:::

:::achtung Vorzeichen im Skript
Gl. (7.35) im Skript ergibt für $\alpha=0$ $M_{zSF_A}=-M_{zSF}$, und Gl. (7.31) heißt dort versehentlich noch einmal $y_{SF_A}$ (gemeint ist $z_{SF_A}$). Die Form oben folgt direkt aus $\vec r\times\vec F$: Eine Zugkraft $+F_x$ bei positivem $y$ erzeugt $M_z=-yF_x$, eine bei positivem $z$ erzeugt $M_y=+zF_x$. **Kontrolle:** Die Bolzen auf der Seite, zu der der Beschlag „abkippt", müssen Zug bekommen.
:::

## Schritt 4 – Kontakt (Kap. 7.1.3.4)

Ergeben sich **negative** Bolzenkräfte $F_i<0$ (Druck), stimmt die Annahme nicht: Ein Bolzen kann nicht drücken – stattdessen **liegen die Flächen aufeinander** (Kontakt im Punkt $C$). Zweiter Rechendurchlauf:

- Bolzen mit $F_i<0$ bekommen $F_{Ei}\approx0$ (z. B. 0,1 N aus numerischen Gründen); ihr $Q_{Ei}$ bleibt.
- Im Kontaktbereich wird ein **fiktiver Niet** eingeführt mit $Q_{Ei}\approx0$ (überträgt keinen Schub) und **sehr großem** $F_{Ei}$ (z. B. 9999 kN).
- Die Kraft im fiktiven Niet ist die **Kontaktkraft** $F_C$. Seine Lage (Projektion des Schwerpunkts des „Druckvolumens") wird aus den Steifigkeiten **abgeschätzt** – oft die Kante des Beschlags.

## Durchgerechnetes Beispiel

:::bsp Winkelbeschlag mit vier Bolzen
Vier gleiche Bolzen bei $(y;z)=(\pm30;\pm20)\,$mm, $U$ = Feldmitte. Last im Punkt $P=(x_P;y_P;z_P)=(40;0;25)\,$mm: $F_y=6000\,$N (in der Ebene), $F_x=2000\,$N (zieht vom Blech weg), keine Momente in $P$.

**1. Transformation:** $M_{xU}=-6000\cdot25=-150\,000$; $M_{yU}=2000\cdot25=50\,000$; $M_{zU}=6000\cdot40=240\,000\,$N·mm.

**2. Schub** ($S_Q=U$, $J_Q/Q_E=\sum(\Delta y^2+\Delta z^2)=4\cdot(900+400)=5200\,$mm²):
$Q_{yi}=1500+150\,000\cdot\frac{z_i}{5200}=1500+28{,}85\,z_i$, $Q_{zi}=-150\,000\cdot\frac{y_i}{5200}=-28{,}85\,y_i$.
| Bolzen $(y;z)$ | $Q_y$ | $Q_z$ | $Q$ |
|---|---|---|---|
| $(30;20)$ | 2077 | −865 | **2250** |
| $(-30;20)$ | 2077 | 865 | **2250** |
| $(30;-20)$ | 923 | −865 | 1265 |
| $(-30;-20)$ | 923 | 865 | 1265 |

**3. Zug, 1. Durchlauf** (symmetrisch: $S_F=U$, $\alpha=0$; $\sum\Delta z^2=4\cdot400=1600$, $\sum\Delta y^2=4\cdot900=3600$):
$F_i=\frac{2000}4+50\,000\frac{z_i}{1600}-240\,000\frac{y_i}{3600}=500+31{,}25\,z_i-66{,}7\,y_i$.
| Bolzen | $F_i$ [N] |
|---|---|
| $(30;20)$ | −875 |
| $(30;-20)$ | −2125 |
| $(-30;20)$ | 3125 |
| $(-30;-20)$ | 1875 |
Die beiden Bolzen bei $y=+30$ bekommen **Druck** → Kontakt! Der Beschlag kippt um seine Kante bei $y=+40\,$mm.

**4. Zug, 2. Durchlauf** – Kontaktpunkt $C=(40;0)$ (fiktiver Niet), nur die Bolzen bei $y=-30$ tragen Zug. Das System ist jetzt statisch bestimmt:
- Momente auf $C$ bezogen: $M_{zC}=M_{zU}+F_x\cdot40=320\,000$, $M_{yC}=M_{yU}=50\,000\,$N·mm.
- $\sum M_z$: $320\,000=70\,(F_1+F_2)$ → $F_1+F_2=4571\,$N.
- $\sum M_y$: $50\,000=20\,(F_1-F_2)$ → $F_1-F_2=2500\,$N.
- → $F_{(-30;20)}=3536\,$N, $F_{(-30;-20)}=1036\,$N; Kontaktkraft $F_C=F_1+F_2-F_x=2571\,$N.

**5. Nachweis** des kritischen Bolzens $(-30;20)$: $Q=2250\,$N und $F=3536\,$N → Interaktionskurve mit $R_S=Q/F_{SB}$, $R_Z=F/(F_{ZB}K)$.

Merke: Der Kontakt **erhöht** die Zugkraft im kritischen Bolzen (3536 statt 3125 N), weil der Hebelarm zum Kipppunkt kürzer ist als zum Feldschwerpunkt.
:::

## Übungsaufgaben

:::aufgabe 1
Rechne das Beispiel mit $F_x=6000\,$N (statt 2000 N) und sonst gleichen Werten (1. Durchlauf). Tritt noch Kontakt auf?
:::loesung
Jetzt $F_x/4=1500\,$N und $M_{yU}=6000\cdot25=150\,000\,$N·mm → $150\,000/1600=93{,}75$; $M_{zU}=240\,000$ bleibt.
$F_i=1500+93{,}75z_i-66{,}7y_i$: $(30;20)$: $1500+1875-2000=1375$; $(30;-20)$: $1500-1875-2000=-2375$; $(-30;20)$: $1500+1875+2000=5375$; $(-30;-20)$: $1500-1875+2000=1625$. Ein Bolzen ($(30;-20)$) hat noch Druck → Kontakt an der Ecke um $(y;z)\approx(40;-30)$, 2. Durchlauf nötig.
:::
:::

:::aufgabe 2
Erkläre, warum man den Schubschwerpunkt mit $Q_{Ei}$, den Zugschwerpunkt aber mit $F_{Ei}$ gewichtet. Wann fallen beide zusammen?
:::loesung
Die Gewichte stehen für die **Steifigkeit** des Bolzens in der jeweiligen Belastungsrichtung: Schubsteifigkeit ∝ ertragbare Scherkraft, Zugsteifigkeit ∝ ertragbare Zugkraft (bzw. E-Modul·Fläche). Bei **gleichen** Bolzen (oder wenn $Q_E$ und $F_E$ für alle Bolzen im gleichen Verhältnis stehen) fallen beide Schwerpunkte zusammen.
:::
:::

:::aufgabe 3
Ein Feld hat drei Bolzen bei $(0;0)$, $(40;0)$, $(0;30)\,$mm, alle gleich. Bestimme Zugschwerpunkt und Hauptachsenwinkel $\alpha$.
:::loesung
$y_{SF}=40/3=13{,}33$, $z_{SF}=30/3=10$. $\Delta y=(-13{,}33;\,26{,}67;\,-13{,}33)$, $\Delta z=(-10;\,-10;\,20)$.
$\sum\Delta y^2=177{,}8+711{,}1+177{,}8=1066{,}7$; $\sum\Delta z^2=100+100+400=600$; $\sum\Delta y\Delta z=133{,}3-266{,}7-266{,}7=-400$.
$\tan2\alpha=\frac{2\cdot(-400)}{1066{,}7-600}=-1{,}714$ → $2\alpha=-59{,}7°$ → $\alpha=-29{,}9°$.
:::
:::

## Karteikarten

:::karte
Welche Lasten erzeugen Schub, welche Zug im Bolzenfeld (Ebene y-z)?
???
Schub: $F_y$, $F_z$, $M_x$. Zug/Druck: $F_x$, $M_y$, $M_z$ (schiefe Biegung des Bolzenbündels).
:::

:::karte
Transformation $M_{zU}$?
???
$M_{zU}=M_{zP}-F_xy_P+F_yx_P$ (allgemein $\vec M_U=\vec M_P+\vec r_P\times\vec F$).
:::

:::karte
Womit gewichtet man Schub- bzw. Zugschwerpunkt?
???
Schub: ertragbare Scherkräfte $Q_{Ei}$; Zug: ertragbare Zugkräfte $F_{Ei}$ (ungleiche Werkstoffe: über E-Moduli umrechnen).
:::

:::karte
Wozu Hauptachsen im Bolzenfeld?
???
Zugverteilung = schiefe Biegung; bei unsymmetrischem Feld Koordinaten und Momente auf die Hauptachsen drehen ($\tan2\alpha$ wie beim Flächenträgheitsmoment).
:::

:::karte
Was tun bei negativen Bolzenzugkräften?
???
Kontakt: 2. Durchlauf mit $F_{Ei}\approx0$ für die gedrückten Bolzen und einem fiktiven Niet im Kontaktpunkt ($Q_E\approx0$, $F_E$ sehr groß); dessen Kraft = Kontaktkraft $F_C$.
:::

:::karte
Wie wird ein Bolzen unter Schub + Zug nachgewiesen?
???
$R_S=Q_i/F_{SB}$, $R_Z=F_i/(F_{ZB}K)$ in die Interaktionskurve; RF gilt nur für das Element.
:::
