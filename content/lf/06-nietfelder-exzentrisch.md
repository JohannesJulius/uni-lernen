---
title: 6 Niet- und Bolzenfelder I – außermittiger Kraftangriff in der Ebene
chapter: Kap. 7 Niet- und Bolzenfelder
minutes: 110
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#42; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#45
---

:::ziel
- Den **Bolzenfeld-Schwerpunkt** berechnen.
- Eine außermittige Kraft in den Schwerpunkt **verschieben** und das **Ersatzmoment** $M_0$ bestimmen.
- Kraft- und Momentanteile auf die einzelnen Bolzen **aufteilen** (gleiche und unterschiedliche Querschnitte) und **vektoriell** zur resultierenden Bolzenkraft addieren.
- Den **höchstbelasteten Bolzen** finden.
- Das **teilgrafische Verfahren** (reduzierter Schwerpunkt $O$) kennen.
:::

**Grundidee:** Ein Beschlag ist mit mehreren Nieten/Bolzen an einer Struktur befestigt. Eine Kraft greift **nicht im Mittelpunkt** des Feldes an. Wie viel Kraft bekommt jeder einzelne Bolzen? Die günstigste Verteilung ist die, bei der **alle Bolzen gleich ausgenutzt** werden – das gelingt aber nur bei zentrischer Last.

:::info Voraussetzungen (Verfahren mit Kraftzerlegung, Kap. 7.1.1)
- Nur **Scherfelder** (Kräfte in der Ebene des Feldes, 2D).
- Die Bauteile sind im Bereich der Verbindungselemente **starr**; Bolzen mit leichtem Presssitz tragen gleichmäßig.
- Bolzensteifigkeit ∝ **Querschnittsfläche** $A_i$ (gleiches Material) – alternativ ∝ ertragbarer Scherkraft $Q_{E,i}$.
:::

Das ist genau die Statik aus TM 1 (Kraft parallel verschieben → Versatzmoment) kombiniert mit einer Verteilungsannahme.

## Schritt 1 – Bolzenschwerpunkt

:::formel Schwerpunkt des Bolzenfeldes (Gl. 7.1)
$$x_0=\frac{\sum A_i\,x_i}{\sum A_i},\qquad y_0=\frac{\sum A_i\,y_i}{\sum A_i}.$$
Bei gleichen Querschnitten einfach der Mittelwert der Bolzenkoordinaten.
:::

## Schritt 2 – Ersatzsystem

Die Kräfte $F_x$, $F_y$ werden in den Schwerpunkt $S$ **parallel verschoben**. Dafür muss man ein **Ersatzmoment** $M_0$ hinzufügen (Abb. 7.2/7.3):

:::formel Ersatzmoment (Gl. 7.2)
$$M_0=+F_x\cdot b+F_y\cdot a$$
$a$, $b$ = Hebelarme der Kraftkomponenten bezogen auf $S$; das Vorzeichen ergibt sich aus der **Drehrichtung** (im Skript: linksdrehend positiv). Allgemein mit dem Kraftangriffspunkt $(x_P,y_P)$ relativ zu $S$: $M_0=x_P F_y-y_P F_x$.
:::

## Schritt 3 – Aufteilung der Kräfte

:::formel Anteil aus $F_x$, $F_y$ (Gl. 7.3–7.6)
$$R_{ix}=-F_x\frac{A_i}{\sum A_i},\qquad R_{iy}=-F_y\frac{A_i}{\sum A_i};\qquad\text{gleiche Bolzen: }R_{ix}=-\frac{F_x}{n},\ R_{iy}=-\frac{F_y}{n}.$$
Das Minuszeichen: $R$ sind die **Reaktionskräfte der Bolzen auf den Beschlag** (entgegen der Last). Die Kraft **auf den Bolzen** ist gleich groß und entgegengesetzt.
:::

:::formel Anteil aus dem Moment $M_0$ (Gl. 7.7–7.15)
Annahme: Der Beschlag dreht sich starr um $S$. Dann ist die Verschiebung eines Bolzens ∝ seinem Abstand $r_i$ von $S$, die Kraft ∝ $r_i\cdot A_i$, und sie steht **senkrecht auf $r_i$**. Aus $M_0=\sum F_{Mi}\,r_i$:
$$F_{Mi}=\frac{M_0\cdot r_i\cdot A_i}{\sum_{k=1}^n r_k^2\,A_k}\qquad\text{gleiche Bolzen: }\boxed{F_{Mi}=\frac{M_0\cdot r_i}{\sum r_k^2}}$$
Bei **unterschiedlichem Bolzenmaterial**: Steifigkeit ≈ ertragbare Kraft $Q_{ertr,i}$:
$$F_{Mi}=\frac{M_0\cdot r_i\cdot Q_{ertr,i}}{\sum r_k^2\,Q_{ertr,k}}.$$
:::

:::merke Herleitung in drei Zeilen
1. Starre Drehung um $S$ um den kleinen Winkel $\varphi$ → Bolzenverschiebung $v_i=r_i\varphi$.
2. Bolzen = Feder mit Steifigkeit $\propto A_i$ → $F_{Mi}=c\,A_i\,r_i\,\varphi$.
3. Momentengleichgewicht $M_0=\sum F_{Mi}r_i=c\varphi\sum A_ir_i^2$ → $c\varphi$ eliminieren → Formel oben.
:::

## Schritt 4 – Überlagern

Für jeden Bolzen die **Vektoren** addieren: Anteil aus $F_x$, $F_y$ (für alle Bolzen gleich gerichtet) + Anteil aus $M_0$ (senkrecht zu $r_i$, Richtung durch die Drehrichtung von $M_0$). Der Bolzen, bei dem beide Anteile **in dieselbe Richtung** zeigen, ist am höchsten belastet – meist der **am weitesten vom Schwerpunkt entfernte Bolzen auf der Seite der Last**.

:::bsp Vier Bolzen im Quadrat
Vier gleiche Bolzen an den Ecken eines Quadrats mit 40 mm Kantenlänge, Koordinaten relativ zu $S$: $(\pm20;\pm20)\,$mm. Eine Kraft $F_y=10\,$kN (nach oben) greift bei $x=100\,$mm, $y=0$ an.

**1. Schwerpunkt:** Mitte, $S=(0;0)$.
**2. Ersatzmoment:** $M_0=x_P F_y=100\cdot10\,000=1{,}0\cdot10^6\,$N·mm (linksdrehend).
**3a. Direkter Anteil:** je $10\,000/4=2500\,$N nach oben (Kraft auf den Bolzen).
**3b. Momentenanteil:** $r_i=\sqrt{20^2+20^2}=28{,}28\,$mm, $\sum r_k^2=4\cdot800=3200\,$mm².
$$F_{Mi}=\frac{10^6\cdot28{,}28}{3200}=8839\,\text{N},$$
senkrecht zu $r_i$, linksdrehend: Richtung $(-y_i;\,x_i)/r_i$ → Komponenten $\pm6250\,$N.
**4. Überlagerung:**
| Bolzen | Moment-Anteil $(x;y)$ [N] | + direkt | Resultierende | Betrag |
|---|---|---|---|---|
| $(20;20)$ | $(-6250;\ 6250)$ | $(0;2500)$ | $(-6250;\ 8750)$ | **10 753 N** |
| $(20;-20)$ | $(6250;\ 6250)$ | $(0;2500)$ | $(6250;\ 8750)$ | **10 753 N** |
| $(-20;20)$ | $(-6250;\,-6250)$ | $(0;2500)$ | $(-6250;\,-3750)$ | 7 289 N |
| $(-20;-20)$ | $(6250;\,-6250)$ | $(0;2500)$ | $(6250;\,-3750)$ | 7 289 N |
Die beiden **rechten** Bolzen (Seite der Last) tragen 10,75 kN – mehr als **das Vierfache** der 2,5 kN, die sie bei zentrischer Last tragen würden. Das Moment dominiert!
:::

:::achtung Typische Fehler
- Momentenanteile **skalar** zum direkten Anteil addieren – falsch, immer **vektoriell**.
- Vergessen, dass $F_{Mi}$ **senkrecht zu $r_i$** steht (nicht parallel zur Last).
- Schwerpunkt bei **unterschiedlichen Durchmessern** ungewichtet berechnen.
:::

:::bsp Unterschiedliche Querschnitte
Drei Bolzen auf einer Linie bei $x=0$, $30$, $60\,$mm; die äußeren haben $A=20\,$mm², der mittlere $A=40\,$mm². Last $F_y=6\,$kN bei $x=130\,$mm.
- $x_0=\frac{20\cdot0+40\cdot30+20\cdot60}{80}=30\,$mm (symmetrisch).
- $M_0=(130-30)\cdot6000=6\cdot10^5\,$N·mm.
- Direkt: $R_{iy}\propto A_i$: außen je $6000\cdot\frac{20}{80}=1500\,$N, Mitte $3000\,$N.
- Moment: $\sum r_k^2A_k=30^2\cdot20\cdot2+0=36\,000\,$mm⁴; außen $F_M=\frac{6\cdot10^5\cdot30\cdot20}{36\,000}=10\,000\,$N, Mitte 0 (liegt im Schwerpunkt).
- Bolzen bei $x=60$: Momentenanteil zeigt (linksdrehend, rechts von $S$) nach **oben**, wie die Last → $1500+10\,000=11\,500\,$N. Bolzen bei $x=0$: $10\,000-1500=8500\,$N (nach unten). Mitte: 3000 N.
:::

## Teilgrafisches Verfahren (Kap. 7.1.2)

Gleiche Voraussetzungen, andere Rechenweise: Statt in Kraft + Moment zu zerlegen, sucht man den **Drehpol $O$** („reduzierter Bolzenschwerpunkt"), um den sich der Beschlag unter der Last $P$ dreht. $O$ liegt auf der **Senkrechten zur Wirkungslinie von $P$ durch $S$**, auf der anderen Seite von $S$:

:::formel Teilgrafisches Verfahren (Gl. 7.16–7.17)
$$\overline{OS}=\frac{\sum A_i r_i^2}{a\cdot\sum A_i},\qquad B_i=\frac{P\cdot a}{\sum A_i r_i^2}\cdot\rho_i\cdot A_i.$$
$a$ = Abstand der Wirkungslinie von $P$ zum Schwerpunkt $S$, $r_i$ = Abstand Bolzen–$S$, $\rho_i$ = Abstand Bolzen–$O$. Die Bolzenkraft $B_i$ steht **senkrecht auf $\rho_i$**.
:::

Vorteil: Man bekommt **Betrag und Richtung** direkt, ohne Vektoraddition – zeichnerisch sehr übersichtlich.

:::bsp Kontrolle am Quadrat
$a=100\,$mm, $\sum A_ir_i^2/\sum A_i=3200/4=800\,$mm² → $\overline{OS}=8\,$mm. $O$ liegt 8 mm links von $S$ (auf der lastabgewandten Seite), also $O=(-8;0)$. Bolzen $(20;20)$: $\rho=\sqrt{28^2+20^2}=34{,}41\,$mm, $B=\frac{10\,000\cdot100}{3200}\cdot34{,}41=10\,753\,$N ✓ – identisch mit der Kraftzerlegung.
:::

## Übungsaufgaben

:::aufgabe 1
Sechs gleiche Niete in zwei Reihen: $x=0, 25, 50\,$mm und $y=0, 30\,$mm. Horizontale Kraft $F_x=4{,}2\,$kN greift bei $y=90\,$mm an (über der oberen Reihe). Bestimme die maximale Nietkraft.
:::loesung
$S=(25;15)$. Hebelarm $b=90-15=75\,$mm. $F_x$ nach rechts oberhalb von $S$ dreht **rechts** herum: $M_0=-4200\cdot75=-315\,000\,$N·mm.
Direkt: $4200/6=700\,$N nach rechts.
$r_i^2$: Ecken $25^2+15^2=850$ (4×), Mitte $0+15^2=225$ (2×) → $\sum=3850\,$mm².
Ecke oben rechts $(25;15)$ relativ: $F_M=\frac{315\,000\cdot29{,}15}{3850}=2385\,$N, senkrecht zu $r$, rechtsdrehend: Richtung $(y;-x)/r=(15;-25)/29{,}15$ → $(1227;\,-2045)\,$N.
Obere Reihe: Momentenanteil in $x$ nach **rechts** (wie $F_x$). Oben rechts: $(1927;\,-2045)$ → **2810 N**. Oben links $(-25;15)$: Richtung $(15;25)/r$ → $(1227;\,2045)$ + $(700;0)$ → $(1927;2045)$ → **2810 N**. Oben Mitte $(0;15)$: $F_M=\frac{315\,000\cdot15}{3850}=1227\,$N in $+x$ → $1927\,$N.
Maximum: **2,81 kN** an den beiden oberen Ecknieten.
:::
:::

:::aufgabe 2
Warum ist das Verfahren mit Kraftzerlegung für **Zug** senkrecht zur Feldebene ungeeignet?
:::loesung
Es ist ein ebenes Scherverfahren: Es betrachtet nur Kräfte und ein Moment **in** der Feldebene. Kräfte senkrecht zur Ebene und Momente um Achsen **in** der Ebene führen zu Zug in den Bolzen und Kontaktdruck (schiefe Biegung) – dafür braucht man die 3D-Betrachtung (Lektion 7).
:::
:::

:::aufgabe 3
Zeige, dass bei vier gleichen Bolzen im Quadrat und einer Kraft **durch den Schwerpunkt** jeder Bolzen $F/4$ trägt, und berechne, ab welchem Hebelarm $a$ der Momentenanteil am Eckbolzen gleich dem direkten Anteil ist (Seitenlänge 40 mm).
:::loesung
Durch $S$: $M_0=0$ → nur direkter Anteil $F/4$. Gleichheit: $\frac{Fa\cdot28{,}28}{3200}=\frac F4$ → $a=\frac{3200}{4\cdot28{,}28}=28{,}3\,$mm. Schon bei einem Hebelarm in der Größe des Bolzenabstands ist das Moment ebenso wichtig wie die Kraft.
:::
:::

## Karteikarten

:::karte
Bolzenfeld-Schwerpunkt?
???
$x_0=\frac{\sum A_ix_i}{\sum A_i}$, $y_0=\frac{\sum A_iy_i}{\sum A_i}$.
:::

:::karte
Ersatzmoment beim exzentrischen Bolzenfeld?
???
Kraft in den Schwerpunkt verschieben + Versatzmoment $M_0=F_x b+F_y a$ (Vorzeichen nach Drehsinn).
:::

:::karte
Kraft am Bolzen $i$ aus $M_0$ (gleiche Bolzen)?
???
$F_{Mi}=\frac{M_0\,r_i}{\sum r_k^2}$, senkrecht zu $r_i$.
:::

:::karte
Kraft am Bolzen $i$ aus $M_0$ (verschiedene Querschnitte)?
???
$F_{Mi}=\frac{M_0\,r_iA_i}{\sum r_k^2A_k}$ (bei verschiedenem Material $Q_{ertr}$ statt $A$).
:::

:::karte
Annahmen des Verfahrens mit Kraftzerlegung?
???
Nur Scherfelder (2D), Bauteile starr, Bolzen mit Presssitz tragen gleichmäßig, Steifigkeit ∝ $A_i$.
:::

:::karte
Welcher Bolzen ist meist am höchsten belastet?
???
Der am weitesten vom Schwerpunkt entfernte auf der Seite der Last – dort addieren sich direkter und Momentenanteil.
:::

:::karte
Teilgrafisches Verfahren – Drehpol?
???
$\overline{OS}=\frac{\sum A_ir_i^2}{a\sum A_i}$ auf der Senkrechten zur Kraft durch $S$; $B_i=\frac{Pa}{\sum A_ir_i^2}\rho_iA_i$, senkrecht zu $\rho_i$.
:::
