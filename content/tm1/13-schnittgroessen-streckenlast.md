---
title: §7 Schnittgrößen II – q-Q-M-Beziehungen, Integration, Übergangsbedingungen, Föppl-Symbol
chapter: §7 Balken, Rahmen, Bogen
minutes: 140
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#188; Technische Mechanik 1/978-3-662-59157-4.pdf#200; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#11
---

:::ziel
- Die **differentiellen Beziehungen** $Q'=-q$, $M'=Q$ herleiten und anwenden.
- Schnittgrößen durch **Integration** mit Rand- und Übergangsbedingungen bestimmen.
- Das **Föppl-Symbol** (Klammerfunktion) für mehrere Bereiche nutzen.
- Verläufe **qualitativ** skizzieren und $M_{max}$ finden ($Q=0$).
:::

## Zusammenhang Belastung – Schnittgrößen

Ein Balkenelement der Länge $\d x$ mit Streckenlast $q(x)$ (positiv in $+z$, also nach unten):
- $\sum F_z$: $-Q+q\,\d x+(Q+\d Q)=0\Rightarrow\d Q=-q\,\d x$
- $\sum M$ um das rechte Ende: $M+\d M-M-Q\,\d x+q\,\d x\frac{\d x}2=0\Rightarrow\d M=Q\,\d x$ (Glied 2. Ordnung vernachlässigt)

:::satz Differentielle Gleichgewichtsbeziehungen
$$\frac{\d Q}{\d x}=-q(x),\qquad\frac{\d M}{\d x}=Q(x),\qquad\frac{\d^2M}{\d x^2}=-q(x).$$
Integriert:
$$Q(x)=-\int q(x)\,\d x+C_1,\qquad M(x)=\int Q(x)\,\d x+C_2.$$
(Normalkraft analog: $N'=-n$ bei Längslast $n$.)
:::

:::merke Folgerungen für die Verläufe
- Die **Streckenlast** ist (bis aufs Vorzeichen) die **Steigung** des $Q$-Verlaufs; die **Querkraft** ist die **Steigung** des $M$-Verlaufs.
- $q=0$: $Q$ konstant, $M$ linear. $q=$ konst.: $Q$ linear, $M$ **quadratische Parabel**. $q$ linear (Dreieck): $Q$ quadratisch, $M$ kubisch.
- **Extremum von $M$** dort, wo $Q=0$ (bzw. wo $Q$ das Vorzeichen wechselt – auch an Sprüngen!).
- Die **Änderung** von $M$ zwischen zwei Stellen = Fläche unter dem $Q$-Verlauf: $M(x_2)-M(x_1)=\int_{x_1}^{x_2}Q\,\d x$.
:::

## Integrationsverfahren

:::rezept Integration
1. $q(x)$ für jeden Bereich aufschreiben.
2. $Q=-\int q+C_1$, $M=\int Q+C_2$ – pro Bereich 2 Konstanten.
3. **Randbedingungen**: gelenkiges Lager/freies Ende: $M=0$; freies Ende: $Q=$ dort wirkende Einzelkraft (meist 0); Einspannung: nichts Bekanntes über $Q,M$ (dafür bei Verformung $w=w'=0$, TM 2).
4. **Übergangsbedingungen** zwischen Bereichen: Ohne Einzellast stetig ($Q$ und $M$ gleich); bei Einzelkraft $F$: $Q$ springt um $-F$ (nach unten gerichtet: $Q^+=Q^--F$); bei Einzelmoment springt $M$; an einem **Gelenk**: $M=0$.
5. Konstanten aus dem LGS bestimmen.
:::

:::bsp Einfeldträger mit Gleichstreckenlast $q_0$
$Q=-q_0x+C_1$, $M=-\frac{q_0}2x^2+C_1x+C_2$.
RB: $M(0)=0\Rightarrow C_2=0$; $M(l)=0\Rightarrow C_1=\frac{q_0l}2$.
$$Q(x)=q_0\left(\frac l2-x\right),\qquad M(x)=\frac{q_0}2x(l-x),\qquad M_{max}=M\!\left(\frac l2\right)=\frac{q_0l^2}8.$$
Die Lagerkräfte folgen nebenbei: $A=Q(0)=\frac{q_0l}2$, $B=-Q(l)=\frac{q_0l}2$.
:::

:::bsp Kragträger mit Gleichlast
Einspannung bei $x=0$, freies Ende bei $x=l$: RB am freien Ende $Q(l)=0$, $M(l)=0$.
$Q=-q_0x+C_1$, $Q(l)=0\Rightarrow C_1=q_0l$; $M=-\frac{q_0}2x^2+q_0lx+C_2$, $M(l)=0\Rightarrow C_2=-\frac{q_0l^2}2$.
$$Q(x)=q_0(l-x),\qquad M(x)=-\frac{q_0}2(l-x)^2,\qquad M(0)=-\frac{q_0l^2}2.$$
:::

:::bsp Dreieckslast auf Einfeldträger
$q(x)=q_0\frac xl$. $Q=-\frac{q_0}{2l}x^2+C_1$, $M=-\frac{q_0}{6l}x^3+C_1x$ (mit $M(0)=0$). $M(l)=0\Rightarrow C_1=\frac{q_0l}6$.
$Q=0$ bei $x=\frac l{\sqrt3}$ ⇒ $M_{max}=\frac{q_0l^2}{9\sqrt3}\approx0{,}064\,q_0l^2$.
:::

## Föppl-Symbol (Klammerfunktion)

Für Balken mit vielen Bereichen spart das Föppl-Symbol die Bereichsunterteilung:
$$\langle x-a\rangle^n=\begin{cases}0,&x<a\\(x-a)^n,&x\ge a\end{cases}\qquad\int\langle x-a\rangle^n\,\d x=\frac{\langle x-a\rangle^{n+1}}{n+1}.$$
Eine Einzelkraft $F$ bei $a$ wirkt in der Querkraft als $-F\langle x-a\rangle^0$ (Sprung), im Moment als $-F\langle x-a\rangle^1$; ein Einzelmoment $M_0$ (Uhrzeigersinn positiv im Sinne von $M$) als $+M_0\langle x-a\rangle^0$ in $M$; eine ab $a$ beginnende Gleichlast als $q_0\langle x-a\rangle^0$ in $q$.

:::bsp
Einfeldträger $l$, Kraft $F$ bei $a$: $Q(x)=A-F\langle x-a\rangle^0$, $M(x)=Ax-F\langle x-a\rangle^1$. Mit $M(l)=0$: $Al-F(l-a)=0\Rightarrow A=\frac{Fb}l$ ✓ – ein einziger Ausdruck für den ganzen Balken.
:::

## Punktweise Ermittlung und qualitative Verläufe

In der Praxis oft am schnellsten: Schnittgrößen nur an markanten Stellen (Lager, Lastangriffspunkte, $Q=0$) über Gleichgewicht am Teilsystem berechnen und dazwischen nach den Regeln (konstant/linear/parabelförmig, Steigungen) verbinden.

:::merke Checkliste für Verläufe
- Unter Gleichlast: $M$-Parabel, **gekrümmt in Lastrichtung** (Durchhang), Scheitel wo $Q=0$.
- An Einzelkraft: $Q$-Sprung, $M$-Knick (Spitze zeigt in Kraftrichtung).
- Summe der Sprünge und Flächen muss auf null am Ende zurückführen.
- Am Gelenk und freien (momentenfreien) Ende: $M=0$.
:::

## Aufgaben

:::aufgabe 1
Einfeldträger $l=8\,$m, Gleichlast $q_0=3\,$kN/m auf der **linken Hälfte**. $A$, $B$, $Q(x)$, $M_{max}$ und dessen Lage?
:::loesung
$R=12\,$kN bei $x=2$: $B=\frac{12\cdot2}8=3$, $A=9\,$kN. Linke Hälfte: $Q=9-3x$, null bei $x=3\,$m ⇒ $M_{max}=9\cdot3-\frac32\cdot9=13{,}5\,$kNm. Rechte Hälfte: $Q=-3$, $M$ linear von $M(4)=36-24=12$ auf 0.
:::
:::

:::aufgabe 2
Kragträger $l=3\,$m, Gleichlast $q_0=2\,$kN/m und Einzelkraft $F=4\,$kN am Ende. $Q(0)$, $M(0)$?
:::loesung
$Q(0)=q_0l+F=10\,$kN, $M(0)=-\frac{q_0l^2}2-Fl=-9-12=-21\,$kNm.
:::
:::

:::aufgabe 3
Schreibe $q$, $Q$, $M$ mit Föppl für: Einfeldträger $l=6$, $F=10$ bei $x=2$, Gleichlast $q_0=2$ von $x=3$ bis $x=6$.
:::loesung
$A$: $\sum M^{(B)}$: $6A=10\cdot4+6\cdot1{,}5\Rightarrow A=8{,}17\,$kN.
$Q(x)=A-10\langle x-2\rangle^0-2\langle x-3\rangle^1$, $M(x)=Ax-10\langle x-2\rangle^1-\langle x-3\rangle^2$. Kontrolle $M(6)=49-40-9=0$ ✓.
:::
:::

## Karteikarten

:::karte
Differentielle Beziehungen am Balken?
???
$Q'=-q$, $M'=Q$, $M''=-q$.
:::

:::karte
Wo liegt das maximale Biegemoment?
???
Wo $Q=0$ ist bzw. $Q$ das Vorzeichen wechselt (auch an Sprungstellen) – oder an Rändern/Einspannungen.
:::

:::karte
$M_{max}$ Einfeldträger mit Gleichlast? Einspannmoment Kragträger mit Gleichlast?
???
$\frac{q_0l^2}8$; $-\frac{q_0l^2}2$.
:::

:::karte
Föppl-Symbol?
???
$\langle x-a\rangle^n=0$ für $x<a$, $(x-a)^n$ für $x\ge a$; integriert wie eine Potenz.
:::

:::karte
Übergangsbedingungen an einer Einzelkraft und an einem Gelenk?
???
Einzelkraft: $Q$ springt um $F$, $M$ stetig. Gelenk: $M=0$.
:::
