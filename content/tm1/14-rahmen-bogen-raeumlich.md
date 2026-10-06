---
title: §7 Schnittgrößen III – Rahmen, Bogen und räumliche Tragwerke
chapter: §7 Balken, Rahmen, Bogen
minutes: 100
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#208; Technische Mechanik 1/978-3-662-59157-4.pdf#214; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#12
---

:::ziel
- Schnittgrößen in **Rahmen** (abgewinkelte Balken) mit lokalen Koordinaten bestimmen; Eckgleichgewicht.
- Schnittgrößen im **Bogen** (gekrümmte Achse) in Abhängigkeit vom Winkel.
- Räumliche Tragwerke: sechs Schnittgrößen inkl. **Torsionsmoment**.
:::

## Rahmen

Ein Rahmen besteht aus biegesteif verbundenen Balkenstücken (Stiele, Riegel). Jedes Stück bekommt ein **eigenes lokales Koordinatensystem** ($x$ entlang der Achse, gestrichelte Faser innen oder außen festlegen). Schnittgrößen werden bereichsweise wie beim Balken bestimmt.

:::merke Rahmenecken
An einer **biegesteifen Ecke ohne äußeres Moment** ist das Biegemoment auf beiden Seiten **gleich** (es „läuft um die Ecke"). Querkraft des einen Stabes wird Normalkraft des anderen (bei 90°-Ecke). Kontrolle: Freikörperbild der Ecke im Gleichgewicht.
:::

:::bsp L-Rahmen (Kragrahmen)
Ein Stiel (Höhe $h$) ist unten eingespannt, oben biegesteif mit einem horizontalen Riegel (Länge $a$) verbunden. Am Riegelende greift $F$ nach unten an.
- **Riegel** (lokales $x$ vom freien Ende nach links, Schnitt bei Abstand $s$ vom Ende): $Q=\pm F$ (konstant), $M=-Fs$ (oben Zug), $N=0$.
- **Ecke:** $M=-Fa$ auf beiden Seiten.
- **Stiel**: Die Kraft $F$ wirkt jetzt längs: $N=-F$ (Druck); Querkraft $0$; Moment konstant $|M|=Fa$ (die außenliegende Faser wird gezogen).
- Einspannung: $A_v=F$, $M_A=Fa$.
:::

Bei Rahmen mit Gelenken (z. B. **Dreigelenkrahmen**) erst Lagerreaktionen wie beim Dreigelenkbogen (Kap. 5), dann Schnittgrößen; im Gelenk ist $M=0$.

## Bogen

Beim Bogen ändert sich die Richtung der Achse stetig. Man schneidet unter dem Winkel $\varphi$ und zerlegt die Kräfte in **tangentiale** ($N$) und **radiale** ($Q$) Richtung.

:::bsp Viertelkreisbogen (Kragbogen)
Radius $r$, unten eingespannt, oben am freien Ende eine horizontale Kraft $F$ (tangential am Scheitel). Schnitt beim Winkel $\varphi$ (vom freien Ende gemessen), Teil vom Schnitt bis zum Ende:
- Kraft $F$ in Komponenten bzgl. der Schnittrichtung: $N(\varphi)=-F\cos\varphi$, $Q(\varphi)=F\sin\varphi$ (Vorzeichen je nach Konvention).
- Hebelarm von $F$ zum Schnittpunkt: vertikaler Abstand $r(1-\cos\varphi)$ ⇒ $M(\varphi)=-Fr(1-\cos\varphi)$.
- An der Einspannung ($\varphi=90°$): $N=0$, $|Q|=F$, $|M|=Fr$.
:::

:::bsp Halbkreisbogen auf Fest- und Loslager mit Scheitellast
Radius $r$, Last $F$ im Scheitel. Lager je $\frac F2$. Schnitt bei $\varphi$ (vom linken Lager aus gemessen, Mittelpunktswinkel): $M(\varphi)=\frac F2r(1-\cos\varphi)$ für die linke Hälfte, Maximum $\frac{Fr}2$ im Scheitel.
:::

Ein **Stützlinienbogen** (Form angepasst an die Last, z. B. Parabel bei Gleichlast) hat $M\equiv0$ und nur Druck-Normalkraft – deshalb sind Steinbögen tragfähig.

## Räumliche Tragwerke

Im Raum hat der Querschnitt **sechs** Schnittgrößen: $N$, $Q_y$, $Q_z$, $M_T=M_x$ (**Torsionsmoment**), $M_y$, $M_z$. Beziehungen (Skript):
$$Q_z'=-q_z,\quad M_y'=Q_z,\qquad Q_y'=-q_y,\quad M_z'=-Q_y.$$

:::bsp Abgewinkelter Kragarm im Raum
Ein Balken entlang $x$ (Länge $a$) ist bei $x=0$ eingespannt; am Ende knickt ein zweiter Balken in $y$-Richtung (Länge $b$) ab, an dessen Ende die Kraft $F$ in $-z$ wirkt (z. B. Kurbel, Fahrradpedal).
- Zweiter Balken: Querkraft $F$, Biegemoment bis $Fb$ an der Ecke.
- Erster Balken: $Q_z=F$, Biegemoment $M_y$ linear bis $Fa$ an der Einspannung, **Torsionsmoment** $M_T=Fb$ konstant – die Kraft „verdreht" den ersten Balken.
Torsion wird in TM 2 (Kap. 5) zur Schubspannung verarbeitet.
:::

## Aufgaben

:::aufgabe 1
U-förmiger Rahmen: zwei Stiele der Höhe $h$, Riegel der Länge $l$; links Festlager, rechts Loslager (unten). Horizontale Kraft $H$ an der oberen linken Ecke. Lagerreaktionen und Moment in den Ecken?
:::loesung
$\sum M^{(A)}$: $B\,l-H\,h=0\Rightarrow B=\frac{Hh}l$ (↑), $A_v=-\frac{Hh}l$ (↓), $A_h=H$ (entgegen). Rechter Stiel: nur $B$ (vertikal, längs) ⇒ $M=0$ im rechten Stiel, also $M=0$ in der rechten Ecke. Linker Stiel: $A_h$ erzeugt Moment, an der linken oberen Ecke $|M|=A_h h=Hh$. Riegel: $M$ linear von $Hh$ (links) auf 0 (rechts) – passt zu $Q_{Riegel}=B$: $Bl=Hh$ ✓.
:::
:::

:::aufgabe 2
Viertelkreis-Kragbogen ($r=1\,$m), am freien Ende vertikale Last $F=2\,$kN. Moment an der Einspannung?
:::loesung
Hebelarm = horizontaler Abstand zwischen Lastangriff und Einspannung $=r$ ⇒ $|M|=Fr=2\,$kNm.
:::
:::

## Karteikarten

:::karte
Was gilt an einer unbelasteten biegesteifen Rahmenecke?
???
Biegemoment ist auf beiden Seiten gleich; Querkraft des einen Stabs wird (bei 90°) zur Normalkraft des anderen.
:::

:::karte
Sechs Schnittgrößen im Raum?
???
$N$, $Q_y$, $Q_z$, $M_T$ (Torsion), $M_y$, $M_z$.
:::

:::karte
Wie zerlegt man Kräfte beim Bogen?
???
Tangential (→ Normalkraft) und radial (→ Querkraft) bezüglich der Schnittstelle beim Winkel φ.
:::
