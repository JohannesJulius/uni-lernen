---
title: §4 Schwerpunkt – parallele Kräfte, Körper-, Flächen- und Linienschwerpunkt
chapter: §4 Schwerpunkt
minutes: 110
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#99; Technische Mechanik 1/978-3-662-59157-4.pdf#107
---

:::ziel
- Mittelpunkt paralleler Kräfte und **Schwerpunkt** als Angriffspunkt der resultierenden Gewichtskraft.
- Schwerpunkt, Massenmittelpunkt, Volumenmittelpunkt; homogene Körper.
- **Flächenschwerpunkt** per Integral und für **zusammengesetzte Flächen** (Tabellenverfahren, auch mit Aussparungen).
- Symmetrieargumente; Linienschwerpunkt.
- Streckenlasten durch Einzelresultierende ersetzen.
:::

## Mittelpunkt paralleler Kräfte

Für parallele Kräfte $F_i$ (alle z. B. in $-z$-Richtung) an Punkten $x_i$ liefert der Momentensatz (Moment der Resultierenden = Summe der Momente) die Lage der Resultierenden $R=\sum F_i$:
$$x_R=\frac{\sum x_iF_i}{\sum F_i},\qquad y_R=\frac{\sum y_iF_i}{\sum F_i}.$$
Dieser Punkt hängt nicht von der Richtung der (parallelen) Kräfte ab – er heißt **Mittelpunkt** des parallelen Kraftsystems.

## Schwerpunkt eines Körpers

Zerlegt man einen Körper in Massenelemente $\d m$ mit Gewicht $\d G=g\,\d m$, so greift die resultierende Gewichtskraft $G=\int\d G$ im **Schwerpunkt** $S$ an:
$$x_S=\frac1G\int x\,\d G,\quad y_S=\frac1G\int y\,\d G,\quad z_S=\frac1G\int z\,\d G.$$
Bei konstantem $g$ ist das der **Massenmittelpunkt** $x_S=\frac1m\int x\,\d m$; bei **homogenem** Material ($\rho=$ konst.) der **Volumenmittelpunkt** $x_S=\frac1V\int x\,\d V$.

:::merke Symmetrie
Hat ein homogener Körper (oder eine Fläche) eine **Symmetrieachse/-ebene**, so liegt der Schwerpunkt **auf** ihr. Bei zwei Symmetrieachsen: im Schnittpunkt. Das spart viel Rechnung.
:::

## Flächenschwerpunkt

Für eine ebene Fläche $A$ (dünne homogene Scheibe):
$$x_S=\frac1A\int_Ax\,\d A=\frac{S_y}{A},\qquad y_S=\frac1A\int_Ay\,\d A=\frac{S_x}{A},$$
mit den **statischen Momenten** $S_y=\int x\,\d A$, $S_x=\int y\,\d A$ (Einheit m³). Wichtig in TM 2 (Biegung, Schub)!

:::bsp Dreieck per Integration
Rechtwinkliges Dreieck mit Ecken $(0,0)$, $(a,0)$, $(0,h)$. Streifen parallel zur $y$-Achse bei $x$ mit Höhe $y(x)=h(1-\frac xa)$: $\d A=h(1-\frac xa)\d x$, $A=\frac{ah}2$.
$$x_S=\frac2{ah}\int_0^axh\left(1-\frac xa\right)\d x=\frac2a\left[\frac{x^2}2-\frac{x^3}{3a}\right]_0^a=\frac2a\cdot\frac{a^2}6=\frac a3.$$
Analog $y_S=\frac h3$. **Merke:** Dreiecksschwerpunkt im Abstand $\frac13$ der Höhe von der Grundseite (Schnittpunkt der Seitenhalbierenden).
:::

| Fläche | Fläche $A$ | Schwerpunkt |
|---|---|---|
| Rechteck $b\times h$ | $bh$ | Mitte, $\frac b2,\frac h2$ |
| Dreieck (Grundseite $b$, Höhe $h$) | $\frac12bh$ | $\frac h3$ über der Grundseite |
| Halbkreis (Radius $r$) | $\frac\pi2r^2$ | $y_S=\frac{4r}{3\pi}$ über dem Durchmesser |
| Viertelkreis | $\frac\pi4r^2$ | $x_S=y_S=\frac{4r}{3\pi}$ |
| Kreissektor (Öffnungswinkel $2\alpha$) | $\alpha r^2$ | $\frac{2r\sin\alpha}{3\alpha}$ vom Mittelpunkt |
| Parabelfläche unter $y=kx^2$, $0\le x\le a$ | $\frac13ah$ | $x_S=\frac34a$, $y_S=\frac3{10}h$ |

## Zusammengesetzte Flächen

:::rezept Tabellenverfahren
1. Fläche in **Teilflächen** $A_i$ mit bekannten Schwerpunkten $(x_i,y_i)$ zerlegen. **Aussparungen (Löcher)** als **negative** Flächen.
2. Koordinatensystem festlegen (Symmetrie nutzen!).
3. Tabelle: $A_i$, $x_i$, $y_i$, $x_iA_i$, $y_iA_i$.
4. $$x_S=\frac{\sum x_iA_i}{\sum A_i},\qquad y_S=\frac{\sum y_iA_i}{\sum A_i}.$$
:::

:::bsp T-Profil
Flansch $120\times20\,$mm oben, Steg $20\times100\,$mm darunter (symmetrisch). $y$ von der Unterkante des Stegs.

| Teil | $A_i$ [mm²] | $y_i$ [mm] | $y_iA_i$ [mm³] |
|---|---|---|---|
| Steg | 2000 | 50 | 100 000 |
| Flansch | 2400 | 110 | 264 000 |
| Σ | 4400 | | 364 000 |

$y_S=\frac{364\,000}{4400}\approx82{,}7\,$mm; $x_S$ auf der Symmetrieachse. (Den Schwerpunkt brauchst du in TM 2 für die Biegespannung!)
:::

:::bsp Rechteck mit Loch
Rechteck $200\times100\,$mm (Ursprung unten links), kreisförmiges Loch $\varnothing40\,$mm mit Mittelpunkt bei $(150,50)$.
$A_1=20\,000$, $x_1=100$; $A_2=-\pi\cdot20^2=-1256{,}6$, $x_2=150$.
$x_S=\frac{20\,000\cdot100-1256{,}6\cdot150}{20\,000-1256{,}6}=\frac{1\,811\,510}{18\,743{,}4}\approx96{,}6\,$mm; $y_S=50\,$mm (Symmetrie). Der Schwerpunkt wandert vom Loch weg ✓.
:::

## Körper und Linien

- **Zusammengesetzte Körper:** $x_S=\frac{\sum x_iV_i}{\sum V_i}$ (homogen) bzw. $\frac{\sum x_im_i}{\sum m_i}$.
- **Halbkugel** (massiv): $\frac38r$ über der Grundfläche; **Kegel**: $\frac h4$ über der Grundfläche.
- **Linienschwerpunkt** (dünner Draht konstanten Querschnitts): $x_S=\frac1L\int x\,\d s$. Halbkreisbogen: $y_S=\frac{2r}\pi$; Viertelkreisbogen: $\frac{2r}{\pi}$ von beiden Achsen.

## Streckenlasten

Eine Streckenlast $q(x)$ [N/m] ist statisch gleichwertig zu einer Einzelkraft
$$R=\int q(x)\,\d x\quad(\text{Fläche unter }q)\qquad\text{im Schwerpunkt der Lastfläche}\quad x_R=\frac{\int x\,q(x)\,\d x}{R}.$$
- Konstante Last $q_0$ über Länge $l$: $R=q_0l$ in der Mitte.
- Dreieckslast (0 bis $q_0$): $R=\frac12q_0l$ bei $\frac23l$ vom Nullende (also $\frac l3$ vom Maximum).

Achtung: Für Lagerreaktionen darf man so ersetzen, **nicht** aber für Schnittgrößen im Inneren der Last (Kap. 7)!

## Aufgaben

:::aufgabe 1
L-Profil: senkrechter Schenkel $10\times80$ (Breite 10, Höhe 80), waagrechter Schenkel $60\times10$ unten rechts daran, Gesamtbreite 70 (mm). Schwerpunkt (Ursprung unten links)?
:::loesung
Teil 1 (senkrecht): $A=800$, $x=5$, $y=40$. Teil 2 (waagrecht, $x$ von 10 bis 70): $A=600$, $x=40$, $y=5$.
$x_S=\frac{4000+24\,000}{1400}=20\,$mm, $y_S=\frac{32\,000+3000}{1400}=25\,$mm.
:::
:::

:::aufgabe 2
Schwerpunkt eines Halbkreises per Integration ($r$).
:::loesung
Streifen bei Höhe $y$, Breite $2\sqrt{r^2-y^2}$: $S_x=\int_0^ry\cdot2\sqrt{r^2-y^2}\,\d y=\left[-\frac23(r^2-y^2)^{3/2}\right]_0^r=\frac23r^3$. $y_S=\frac{\frac23r^3}{\frac\pi2r^2}=\frac{4r}{3\pi}\approx0{,}424r$.
:::
:::

:::aufgabe 3
Ein Balken (Länge 6 m) trägt eine Trapezlast von $q_1=2\,$kN/m (links) auf $q_2=5\,$kN/m (rechts). Ersatzkraft und Lage?
:::loesung
Rechteck $2\cdot6=12\,$kN bei 3 m + Dreieck $\frac12\cdot3\cdot6=9\,$kN bei 4 m. $R=21\,$kN, $x_R=\frac{36+36}{21}\approx3{,}43\,$m vom linken Ende.
:::
:::

## Karteikarten

:::karte
Formel Flächenschwerpunkt zusammengesetzter Flächen?
???
$x_S=\frac{\sum x_iA_i}{\sum A_i}$, $y_S=\frac{\sum y_iA_i}{\sum A_i}$ (Löcher mit negativem $A_i$).
:::

:::karte
Schwerpunkt Dreieck, Halbkreis?
???
Dreieck: $\frac h3$ über der Grundseite. Halbkreis: $\frac{4r}{3\pi}$ über dem Durchmesser.
:::

:::karte
Ersatzkraft einer Streckenlast?
???
Betrag = Fläche unter $q(x)$, Lage = Schwerpunkt der Lastfläche (konstant: Mitte; Dreieck: $\frac23$ vom Nullpunkt).
:::

:::karte
Statisches Moment $S_x$?
???
$S_x=\int y\,\d A=y_SA$
:::
