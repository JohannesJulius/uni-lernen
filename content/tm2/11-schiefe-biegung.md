---
title: 5.2 Schiefe Biegung – Spannungsformel, Spannungsnulllinie, maximale Spannung
chapter: 5 Technische Biegelehre
minutes: 120
sources: Technische Mechanik 2/tm2_05_biegung.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#156; Technische Mechanik 2/Uebung_04_Aufgaben.pdf
---

:::ziel
- Erkennen, wann **schiefe Biegung** vorliegt.
- Die allgemeine Biegespannungsformel (beliebiges Schwerpunktsystem, $I_{yz}\neq0$) anwenden.
- **Spannungsnulllinie** bestimmen und den Punkt maximaler Spannung finden (größter Abstand zur SNL).
- Schiefe Biegung + Normalkraft überlagern.
:::

## Definition

**Schiefe Biegung** liegt vor, wenn der Momentenvektor **nicht** in Richtung einer Hauptträgheitsachse zeigt – entweder weil $M_y$ **und** $M_z$ wirken (z. B. geneigte Dachpfette unter Schnee) oder weil der Querschnitt unsymmetrisch ist ($I_{yz}\ne0$, L-, Z-Profile). Folge: Der Balken biegt sich **schräg zur Lastrichtung** durch!

## Herleitung

Ansatz (Bernoulli: Querschnitt bleibt eben ⇒ Spannung ist eine Ebene): $\sigma(y,z)=C_1y+C_2z+C_3$. Äquivalenz:
$$N=\int\sigma\,\d A=0,\qquad M_y=\int z\,\sigma\,\d A,\qquad M_z=-\int y\,\sigma\,\d A.$$
Im Schwerpunktsystem ($\int y\,\d A=\int z\,\d A=0$) folgt $C_3=0$ und mit $I_y,I_z,I_{yz}=-\int yz\,\d A$:
$$M_y=-C_1I_{yz}+C_2I_y,\qquad M_z=-C_1I_z+C_2I_{yz}.$$

:::satz Biegespannung bei schiefer Biegung
$$\sigma(y,z)=\frac{(M_yI_z-M_zI_{yz})\,z+(-M_zI_y+M_yI_{yz})\,y}{I_yI_z-I_{yz}^2}$$
**Im Hauptachsensystem** ($I_{yz}=0$) vereinfacht sich das zu
$$\sigma(y,z)=\frac{M_y}{I_y}z-\frac{M_z}{I_z}y.$$
(Jede schiefe Biegung = Überlagerung zweier gerader Biegungen um die Hauptachsen.)
:::

:::satz Spannungsnulllinie (SNL)
Aus $\sigma=0$:
$$z(y)=-\frac{M_yI_{yz}-M_zI_y}{M_yI_z-M_zI_{yz}}\,y\qquad(\text{Gerade durch den Schwerpunkt}).$$
Die SNL steht im Allgemeinen **nicht** senkrecht zur Lastebene! Die **größte Spannung** tritt im Punkt $P_0$ mit dem **größten senkrechten Abstand** von der SNL auf (bei Polygonquerschnitten immer an einer Ecke – alle Ecken einsetzen und vergleichen).
:::

| Fall | $I_{yz}$ | Momente | $\sigma$ | SNL |
|---|---|---|---|---|
| gerade Biegung um $y$ | 0 | $M_y$ | $\frac{M_y}{I_y}z$ | $z=0$ |
| gerade Biegung um $z$ | 0 | $M_z$ | $-\frac{M_z}{I_z}y$ | $y=0$ |
| Biegung um beide Hauptachsen | 0 | $M_y,M_z$ | $\frac{M_y}{I_y}z-\frac{M_z}{I_z}y$ | $z=\frac{M_zI_y}{M_yI_z}y$ |
| allgemein | $\neq0$ | beliebig | Formel oben | Formel oben |

:::rezept Schiefe Biegung – Klausurfahrplan
1. Schwerpunkt, $I_y$, $I_z$, $I_{yz}$ (Lektion 4).
2. $M_y$, $M_z$ an der kritischen Stelle $x$ (TM 1-Schnittgrößen, **Vorzeichen** sorgfältig; Momentvektor in Komponenten zerlegen: $M_y=M\cos\alpha$, $M_z=\pm M\sin\alpha$ je nach Skizze).
3. $\sigma(y,z)=c_1z+c_2y$ aufstellen.
4. SNL $z=-\frac{c_2}{c_1}y$ einzeichnen, Winkel $\gamma=\arctan(-c_2/c_1)$.
5. Alle Eckpunkte einsetzen ⇒ $\sigma_{max}$ (Zug) und $\sigma_{min}$ (Druck).
6. Ggf. $+\frac NA$ (und $\pm\frac{N e}{I}$ bei Exzentrizität) addieren.
:::

**Verformung:** Durchbiegungen getrennt in den Hauptebenen berechnen ($EI_yw''=-M_y$, $EI_zv''=M_z$) und vektoriell addieren: $f=\sqrt{v^2+w^2}$ (→ nächste Lektionen). Allgemein (kein Hauptachsensystem):
$$w''=\frac{M_zI_{yz}-M_yI_z}{E(I_yI_z-I_{yz}^2)},\qquad v''=\frac{M_zI_y-M_yI_{yz}}{E(I_yI_z-I_{yz}^2)}.$$

## Aufgaben

:::aufgabe 1 (Übung 4, Aufgabe 20 = Folienbeispiel)
Dünnwandiges Dreiecksprofil (Lektion 4.2: $I_y=21\,000t^4$, $I_z=12\,000t^4$, $I_{yz}=-8000t^4$, $a=10t$, Ecken relativ zu $S$ mit $y$ nach links, $z$ nach unten: rechts unten $(-a;1{,}5a)$, links unten $(2a;1{,}5a)$, oben $(-a;-2{,}5a)$). Kragträger der Länge $80a$, eingespannt bei $x=0$, Streckenlasten $q_z=3q_0$ (in $+z$) und $q_y=2q_0$ (in $+y$). (a) Momente an der Einspannung, (b) SNL, (c, d) Orte und Werte der Extremspannungen.
:::loesung
(a) Schnitt bei $x$, rechtes Teil freigeschnitten: $M_y(0)=-\frac{q_z(80a)^2}2=-9600q_0a^2=-960\,000\,q_0t^2$; $M_z(0)=+\frac{q_y(80a)^2}2=+6400q_0a^2=+640\,000\,q_0t^2$ (Last in $+y$ staucht die Fasern auf der $+y$-Seite).
(b) $I_yI_z-I_{yz}^2=188\cdot10^6t^8$.
$M_yI_z-M_zI_{yz}=-11{,}52\cdot10^9+5{,}12\cdot10^9=-6{,}40\cdot10^9$; $-M_zI_y+M_yI_{yz}=-13{,}44\cdot10^9+7{,}68\cdot10^9=-5{,}76\cdot10^9$ (jeweils $q_0t^6$).
$$\sigma=\frac{q_0}{t}\left(-34{,}04\frac zt-30{,}64\frac yt\right).$$
SNL: $z=-0{,}9\,y$, $\gamma=-42°$.
(c, d) Ecken: rechts unten $(-10t;15t)$: $\sigma=-204\,q_0/t$; **links unten** $(20t;15t)$: $\sigma=-1123\,q_0/t$ (maximaler Druck, $P_{d,0}$); **oben** $(-10t;-25t)$: $\sigma=+1157\,q_0/t$ (maximaler Zug, $P_{z,0}$).
Plausibel: $q_z$ zieht oben, $q_y$ (nach links) staucht links.
:::
:::

:::aufgabe 2 (Übung 4, Aufgabe 18 – symmetrisches Profil, schräges Moment)
Profil: oben Rechteck $6a\times2a$, darunter Trapez (Breite von $6a$ auf $2a$, Höhe $6a$), symmetrisch zur $z$-Achse. $M$ unter $\alpha=30°$ zur $y$-Achse (nach links oben): $M_y=M\cos30°$, $M_z=-M\sin30°$. (a) Trägheitsmomente; (b–d) $\sigma(y,z)$, SNL, $\sigma_{max}$; (e) zusätzliche Normalkraft $N$ im Schwerpunkt – wie groß, damit $P$ spannungsfrei ist? (f) $N$ um $b=a$ nach unten versetzt.
:::loesung
(a) $A=36a^2$, Schwerpunkt $\frac{10}3a$ unter der Oberkante. Rechteck: $I_y=4a^4+12a^2(\frac73a)^2$; Trapez: Eigen-$I_y=\frac{h^3(b_1^2+4b_1b_2+b_2^2)}{36(b_1+b_2)}=66a^4$, Schwerpunkt $4{,}5a$ unter Oberkante, Steiner $24a^2(\frac76a)^2$ ⇒ $I_y=168a^4$. $I_z=36a^4+40a^4=76a^4$. $I_{yz}=0$ (Symmetrie).
(b) $\sigma=\frac{M_y}{I_y}z-\frac{M_z}{I_z}y=\frac M{a^3}\left(0{,}00516\frac za+0{,}00658\frac ya\right)$.
(c) SNL $z=-1{,}276y$. Ecken prüfen: maximal betragsmäßig in der **oberen rechten Ecke** $P(-3a;-\frac{10}3a)$.
(d) $\sigma_{b,max}=-\left(\frac{3}{152}+\frac{10\sqrt3}{1008}\right)\frac M{a^3}=-0{,}0369\frac M{a^3}$ (Druck).
(e) $\frac N{36a^2}=0{,}0369\frac M{a^3}$ ⇒ $N=1{,}33\frac Ma$.
(f) Zusatzmoment $N\,b$ um $y$: bei $P$ $\frac{Na\cdot(-\frac{10}3a)}{168a^4}=-0{,}0198\frac N{a^2}$ ⇒ $\sigma_P=0{,}0079\frac N{a^2}-0{,}0369\frac M{a^3}$; mit $N$ aus (e): $\sigma_P\approx-0{,}026\frac M{a^3}$.
:::
:::

:::aufgabe 3 (Übung 4, Aufgabe 19 – Z-ähnliches Profil)
Profil: Obergurt $6a\times a$ (ganz oben, nach rechts auskragend), Steg $a$ breit bis $6a$ Gesamthöhe (zweite Breite $a$–$2a$ von links), unten links ein Fuß $a\times a$. $M$ unter $\alpha=30°$ zur $y$-Achse (nach links unten): $M_y=M\cos30°$, $M_z=M\sin30°$.
:::loesung
(a) $A=12a^2$; von der linken oberen Ecke: $S=(\frac{13}6a;\frac{13}6a)$.
(b) $I_y=\frac{143}3a^4=47{,}7a^4$, $I_z=\frac{83}3a^4=27{,}7a^4$, $I_{yz}=-\frac{55}3a^4=-18{,}3a^4$ ($y$ nach links!).
(c) $\sigma=\frac M{a^3}\left(0{,}0337\frac za-0{,}0404\frac ya\right)$.
(d) SNL $z=1{,}199y$, $\gamma=50{,}2°$.
(e, f) Maximaler Zug in der rechten unteren Ecke des Stegs $P_z(\frac a6;\frac{23}6a)$: $\sigma=+0{,}122\frac M{a^3}$; maximaler Druck in der linken oberen Ecke $P_d(\frac{13}6a;-\frac{13}6a)$: $\sigma=-0{,}161\frac M{a^3}$.
:::
:::

:::aufgabe 4
Rechteckquerschnitt $b=60$, $h=120$ mm, Moment $M=10\,$kNm unter 20° gegen die $y$-Achse geneigt. $\sigma_{max}$? Vergleich mit gerader Biegung.
:::loesung
$M_y=9{,}40\,$kNm, $M_z=3{,}42\,$kNm. $W_y=\frac{60\cdot120^2}6=144\,000$, $W_z=\frac{120\cdot60^2}6=72\,000\,$mm³. In der Ecke: $\sigma=\frac{9{,}4\cdot10^6}{144\,000}+\frac{3{,}42\cdot10^6}{72\,000}=65{,}3+47{,}5=112{,}8\,$MPa – gegenüber $69{,}4\,$MPa bei gerader Biegung ein Plus von 62 %! Schon kleine Schiefstellungen sind bei schmalen Querschnitten gefährlich.
:::
:::

## Karteikarten

:::karte
Wann liegt schiefe Biegung vor?
???
Wenn der Momentenvektor nicht in einer Hauptträgheitsachse liegt.
:::

:::karte
Biegespannung im Hauptachsensystem mit $M_y$ und $M_z$?
???
$\sigma=\frac{M_y}{I_y}z-\frac{M_z}{I_z}y$
:::

:::karte
Allgemeine Biegespannung (beliebiges Schwerpunktsystem)?
???
$\sigma=\frac{(M_yI_z-M_zI_{yz})z+(-M_zI_y+M_yI_{yz})y}{I_yI_z-I_{yz}^2}$
:::

:::karte
Wo tritt die maximale Biegespannung auf?
???
Im Punkt mit dem größten Abstand zur Spannungsnulllinie (bei Polygonen: Ecke).
:::

:::karte
Steht die SNL senkrecht zur Lastebene?
???
Nur bei gerader Biegung bzw. $I_y=I_z$; bei schiefer Biegung im Allgemeinen nicht.
:::
