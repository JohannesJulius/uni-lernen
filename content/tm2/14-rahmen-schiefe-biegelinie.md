---
title: 5.5 Biegelinie III – Rahmen mit biegesteifen Ecken, Biegelinie bei schiefer Biegung, Gültigkeitsgrenzen
chapter: 5 Technische Biegelehre
minutes: 110
sources: Technische Mechanik 2/tm2_05_biegung.pdf; Technische Mechanik 2/Uebung_06_Aufgaben.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#156
---

:::ziel
- Rahmen in Balken zerlegen und an **biegesteifen Ecken** Übergangsbedingungen formulieren.
- Verschiebungen von Rahmenpunkten durch **Superposition** (Starrkörperdrehung + Eigenverformung) bestimmen.
- Die **Biegelinie bei schiefer Biegung** aus zwei geraden Biegungen zusammensetzen.
:::

## Rahmen

Ein Rahmen besteht aus Balken, die in **biegesteifen Ecken** verbunden sind. Jeder Balken bekommt ein **lokales Koordinatensystem** ($x_i$ längs, $z_i$ quer). Meist wird **Dehnstarrheit** angenommen (Längsdehnung vernachlässigt).

:::rezept Übergangsbedingungen an einer biegesteifen 90°-Ecke
- **Kinematik:**
  - Die Ecke dreht sich als Ganzes: **Neigungswinkel beider Balken gleich** (mit Vorzeichen der lokalen Systeme).
  - Verschiebungen passen zusammen: Querverschiebung des einen Balkens = Längsverschiebung des anderen (bei Dehnstarrheit: Längsverschiebung = 0 ⇒ Querverschiebung des anderen Balkens an der Ecke = 0).
- **Kinetik (Gleichgewicht am Eckknoten):**
  - Biegemomente gleich (Moment „läuft um die Ecke").
  - Querkraft des einen Balkens = Normalkraft des anderen (Vorzeichen über Freischnitt der Ecke).
:::

:::rezept Superposition bei Rahmen („Kragträger auf Kragträger")
1. Rahmen am Kraftangriff beginnend „rückwärts" zerlegen: der äußere Balken ist ein Kragträger, der an der Ecke eingespannt ist.
2. Seine Lasten werden als Kraft und **Moment** auf die Ecke übertragen.
3. Der innere Balken verformt sich unter diesen Eckenlasten ⇒ Verschiebung und **Drehung der Ecke**.
4. Der äußere Balken macht die Eckdrehung als **Starrkörperdrehung** mit (Weg = Winkel × Hebel) und verformt sich zusätzlich selbst.
5. Alles vektoriell addieren (globale Richtungen beachten).
:::

## Aufgaben

:::aufgabe 1 (Übung 6, Aufgabe 27)
Balken 1 (Länge $l$) bei $A$ eingespannt, waagrecht; am Ende $B$ biegesteif Balken 2 (Länge $h$) senkrecht nach oben; in $C$ (oben) wirkt $F$ waagrecht nach rechts. Beide $EI$, dehnstarr. Verschiebung $\vec u_C$ im globalen $x$-$y$-System ($y$ nach oben)?
:::loesung
**Balken 2** als Kragträger, an $B$ eingespannt: Querlast $F$ am Ende ⇒ $\frac{Fh^3}{3EI}$ nach rechts (relativ zur Ecke).
Eckenlasten auf Balken 1: Längskraft $F$ (keine Verformung, dehnstarr) und Moment $M_B=Fh$ (im Uhrzeigersinn).
**Balken 1** (Kragträger mit Endmoment): Absenkung $w_B=\frac{Fhl^2}{2EI}$ (nach unten), Drehung $\varphi_B=\frac{Fhl}{EI}$ (im Uhrzeigersinn).
**Starrkörperdrehung** von Balken 2 um $\varphi_B$: $C$ wandert um $\varphi_Bh=\frac{Fh^2l}{EI}$ nach rechts.
$$u_{C,x}=\frac{Fh^2l}{EI}+\frac{Fh^3}{3EI}=\frac{Fh^2(3l+h)}{3EI},\qquad u_{C,y}=-\frac{Fhl^2}{2EI}.$$
:::
:::

:::aufgabe 2 (Übung 6, Aufgabe 28)
Wie Aufgabe 1, aber $B$ zusätzlich auf einem senkrechten Stab (Länge $b$, $EA$) gelenkig abgestützt. $\vec u_C$ und $\vec u_B$?
:::loesung
1-fach statisch unbestimmt. Stabkraft $X$ (Zug positiv, zieht $B$ nach unten).
Verträglichkeit: Absenkung von $B$ aus Balken 1 = Stauchung des Stabes:
$$\frac{Fhl^2}{2EI}+\frac{Xl^3}{3EI}=-\frac{Xb}{EA}\ \Rightarrow\ X=-\frac{\frac{Fhl^2}{2EI}}{\frac{l^3}{3EI}+\frac b{EA}}\quad(\text{Druck}).$$
$u_{B,y}=\frac{Xb}{EA}$ (nach unten: $-u_{B,y}=\frac{|X|b}{EA}$), $u_{B,x}=0$.
Eckdrehung (Uhrzeigersinn): $\varphi_B=\frac{Fhl}{EI}+\frac{Xl^2}{2EI}$ (kleiner als ohne Stab).
$u_{C,x}=\varphi_Bh+\frac{Fh^3}{3EI}$, $u_{C,y}=u_{B,y}$.
Grenzfälle: $EA\to\infty$ (starres Lager): $X=-\frac{3Fh}{2l}$, $\varphi_B=\frac{Fhl}{4EI}$. $EA\to0$: Aufgabe 1.
:::
:::

:::aufgabe 3 (Übung 6, Aufgabe 26 – nur Bedingungen)
Waagrechter Balken 1 (Länge $l$, $EI$, dehnstarr) in $A$ eingespannt, Streckenlast $q_0$ auf $[0,\frac l2]$, dann linear auf 0 bei $l$. Biegesteife Ecke, senkrechter Balken 2 (Länge $l$, $EI$, $EA$) nach unten zu einem Festlager $B$. Koordinaten: $x_1$ nach rechts, $z_1$ nach unten; $x_2$ nach unten, $z_2$ nach links. Stelle alle Rand- und Übergangsbedingungen für $w_1$, $w_2$, $u_2$ auf.
:::loesung
Unbekannt: 4 Konstanten in $w_1$, 4 in $w_2$, 2 in $u_2$, dazu Normalkraft $N_1$ (dehnstarr, aber nicht kraftfrei) ⇒ 11 Bedingungen:
- Einspannung $A$: $w_1(0)=0$, $w_1'(0)=0$.
- Festlager $B$: $w_2(l)=0$, $M_2(l)=0$, $u_2(l)=0$.
- Ecke, Kinematik: $w_2(0)=0$ (Balken 1 dehnstarr ⇒ Ecke bewegt sich nicht waagrecht); $w_1(l)=u_2(0)$ (senkrechte Eckverschiebung); $w_1'(l)=w_2'(0)$ (gleiche Drehung; die lokalen Systeme sind um 90° gegeneinander gedreht, $y$-Achsen gleich).
- Ecke, Gleichgewicht: $M_1(l)=M_2(0)$, $N_2(0)=Q_1(l)$, $Q_2(0)=-N_1$.
DGLs: $EIw_1^{IV}=q(x_1)$, $EIw_2^{IV}=0$, $EAu_2''=0$.
:::
:::

:::aufgabe 4 (Übung 6, Aufgabe 29 – Vorgehen)
Balken 1 ($2l$) gelenkig in $A$, Gelenk in $B$ (Mitte), biegesteif in $C$ mit Balken 2 (Länge $l$, unten in $D$ eingespannt) verbunden; Dreieckslast 0 → $q_0$ von $A$ nach $C$, $F$ waagrecht in der Mitte von $CD$.
:::loesung
1. **AB** ist ein Einfeldträger zwischen $A$ und dem Gelenk $B$ (Last 0 → $\frac{q_0}2$): Gelenkkraft $G=\frac{q_0l}6$ (Momente um $A$: $Gl=\int_0^l\frac{q_0x}{2l}x\,\d x$), $A_V=\frac{q_0l}{12}$.
2. **BC** ist ein an $C$ eingespannter Kragträger mit Trapezlast ($q_0$ bei $C$, $\frac{q_0}2$ bei $B$) und Endlast $G=\frac{q_0l}6$ nach unten. Eckenlasten auf $CD$: senkrechte Kraft $\frac{11}{12}q_0l$ (dehnstarr – keine Verformung), Moment $M_C=\frac{q_0l^2}3+\frac{q_0l^2}6=\frac{q_0l^2}2$.
3. **CD** (Kragträger ab $D$) unter $M_C$, $F$ (bei $\frac l2$) und ggf. einer waagrechten Kraft aus Balken 1 (wenn $A$ waagrecht unverschieblich ist, ist das System 1-fach unbestimmt; Bedingung: waagrechte Verschiebung von $C$ = 0).
   Ohne waagrechte Bindung: $u_C=\frac{M_Cl^2}{2EI}+\frac{5Fl^3}{48EI}$, $\varphi_C=\frac{M_Cl}{EI}+\frac{Fl^2}{8EI}$.
4. **Absenkung von $B$** = Starrkörperdrehung $\varphi_Cl$ + Kragträgerverformung von $BC$: $\left(\frac1{16}+\frac1{60}+\frac1{18}\right)\frac{q_0l^4}{EI}=\frac{97q_0l^4}{720EI}$ (Gleichlast $\frac{q_0}2$ + Dreieck $\frac{q_0}2$→0 + Endlast $G$).
5. **Winkelsprung** im Gelenk = Neigung von $BC$ an $B$ minus Neigung von $AB$ an $B$ (die Starrkörperdrehung von $AB$ ist $\frac{w_B}l$ plus die Biegeneigung aus der Dreieckslast).
:::
:::

## Biegelinie bei schiefer Biegung

Im **Hauptachsensystem** zerfällt die schiefe Biegung in zwei gerade Biegungen:
$$\text{x-z-Ebene: }EI_yw''=-M_y,\qquad\text{x-y-Ebene: }EI_zv''=M_z.$$
Gesamtdurchbiegung $f=\sqrt{v^2+w^2}$, Richtung $\tan\vartheta=\frac vw$ (bzw. gegen die $y$-Achse $\tan\beta=\frac wv$).

:::bsp Kragträger mit schräger Endlast
Rechteck $b=40$, $h=80\,$mm ($I_y=1{,}71\cdot10^6$, $I_z=0{,}427\cdot10^6\,$mm⁴), Stahl, $L=1\,$m, $F=2\,$kN unter 30° gegen die Senkrechte ($F_z=1{,}73\,$kN, $F_y=1\,$kN).
$w=\frac{F_zL^3}{3EI_y}=\frac{1732\cdot10^9}{3\cdot210\,000\cdot1{,}71\cdot10^6}=1{,}61\,$mm, $v=\frac{F_yL^3}{3EI_z}=\frac{1000\cdot10^9}{3\cdot210\,000\cdot0{,}427\cdot10^6}=3{,}72\,$mm.
$f=4{,}05\,$mm unter $\arctan\frac{3{,}72}{1{,}61}=66{,}6°$ gegen die Senkrechte – obwohl die Last nur um 30° geneigt ist! Der Balken weicht in die „weiche" Richtung aus.
:::

:::merke Wann sind $v$ und $w$ gekoppelt?
Nur wenn man **nicht** im Hauptachsensystem rechnet ($I_{yz}\ne0$): dann
$w''=\frac{M_zI_{yz}-M_yI_z}{E(I_yI_z-I_{yz}^2)}$, $v''=\frac{M_zI_y-M_yI_{yz}}{E(I_yI_z-I_{yz}^2)}$ – eine Last in $z$ erzeugt auch $v\ne0$ (L-Profil biegt seitlich aus).
:::

## Grenzen des Euler-Bernoulli-Balkens

- **Querkraftschub:** Querkräfte erzeugen Schubspannungen (→ nächste Lektion), verwölben den Querschnitt und liefern eine zusätzliche **Schubdurchbiegung** (bei kurzen, hohen Balken relevant – Timoshenko-Balken).
- Lasten, die nicht durch den **Schubmittelpunkt** gehen, verursachen zusätzlich **Torsion** (offene Profile!).
- Große Verformungen ⇒ Theorie 2. Ordnung (Knickung).

## Karteikarten

:::karte
Übergangsbedingungen an einer biegesteifen Ecke?
???
Gleiche Drehung beider Balken, verträgliche Verschiebungen; Momente gleich, Querkraft ↔ Normalkraft.
:::

:::karte
Superposition am Rahmen – Kernidee?
???
Äußeren Balken als Kragträger an der Ecke; Eckenlasten verformen den inneren Balken; Eckdrehung × Hebel als Starrkörperanteil addieren.
:::

:::karte
Biegelinie bei schiefer Biegung (Hauptachsen)?
???
$EI_yw''=-M_y$, $EI_zv''=M_z$; $f=\sqrt{v^2+w^2}$.
:::

:::karte
Warum weicht ein schräg belasteter Rechteckbalken stärker seitlich aus?
???
Weil $I_z<I_y$: die Durchbiegung ist in Richtung des kleineren Trägheitsmoments größer – Durchbiegung nicht parallel zur Last.
:::
