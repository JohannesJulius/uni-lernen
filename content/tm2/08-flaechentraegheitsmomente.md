---
title: 4.1 Flächenträgheitsmomente – Definition, Grundflächen (Rechteck, Kreis, Ring, Dreieck)
chapter: 4 Flächenträgheitsmomente
minutes: 90
sources: Technische Mechanik 2/tm2_04_ftm.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#93; Technische Mechanik 2/Uebung_03_Aufgaben.pdf
---

:::ziel
- Statische Momente, axiale Flächenträgheitsmomente, Deviationsmoment und polares Trägheitsmoment **definieren**.
- Die Werte für **Rechteck, Kreis, Kreisring, dünnen Ring, Dreieck, Halbkreis** herleiten bzw. auswendig kennen.
- Verstehen, **warum** I-Träger und Rohre so effizient sind ($z^2$-Hebel).
:::

## Wozu?

Ob ein Träger sich unter Biegung stark durchbiegt, hängt nicht nur vom Werkstoff ($E$), sondern vor allem von der **Querschnittsgeometrie** ab. Material **weit weg** von der Schwerachse trägt quadratisch mehr zur Steifigkeit bei. Ein I-Profil hat bei gleicher Fläche (Masse) ein **vielfach** höheres $I_y$ als ein Vollquadrat – das Grundprinzip des Leichtbaus (Flugzeugholme, Stringer).

## Definitionen

Querschnitt in der $y$-$z$-Ebene (Balkenkoordinaten wie in TM 1: $x$ längs, $z$ nach unten).

:::def Flächenmomente
- **1. Ordnung (statische Momente):** $S_y=\int_Az\,\d A$, $S_z=\int_Ay\,\d A$. Sie verschwinden im **Schwerpunktsystem** (daraus: $y_S=\frac{S_z}A$, $z_S=\frac{S_y}A$, vgl. TM 1).
- **2. Ordnung – axiale Flächenträgheitsmomente:**
$$I_y=\int_Az^2\,\d A,\qquad I_z=\int_Ay^2\,\d A.$$
- **Deviations-/Zentrifugalmoment** (Konvention dieser Vorlesung, Gross):
$$I_{yz}=-\int_Ayz\,\d A.$$
- **Polares Flächenträgheitsmoment** (bzgl. des Ursprungs, $r^2=y^2+z^2$):
$$I_p=\int_Ar^2\,\d A=I_y+I_z.$$
Einheit: Länge⁴ (mm⁴, cm⁴).
:::

:::merke Eigenschaften
- $I_y>0$, $I_z>0$ immer; $I_{yz}$ kann positiv, negativ oder null sein.
- **Ist $y$ oder $z$ eine Symmetrieachse, so ist $I_{yz}=0$** (Beiträge $\pm yz$ heben sich auf).
- Bezüglich des **Schwerpunkts** sind die axialen Trägheitsmomente **am kleinsten** (Steiner, nächste Lektion).
- Achtung, $I_y$ ist das Moment **um** die $y$-Achse – es enthält aber $z^2$!
:::

## Grundflächen

:::bsp Rechteck (Breite $b$, Höhe $h$, Schwerpunktsystem)
$$I_y=\int_{-h/2}^{h/2}\int_{-b/2}^{b/2}z^2\,\d y\,\d z=b\left[\frac{z^3}3\right]_{-h/2}^{h/2}=\frac{bh^3}{12},\qquad I_z=\frac{hb^3}{12},\qquad I_{yz}=0.$$
Bezüglich der **unteren Kante** ($\bar z$ von 0 bis $h$): $I_{\bar y}=b\frac{h^3}3=\frac{bh^3}3$ – viermal so groß.
:::

:::bsp Kreis (Radius $R$) – über das polare Moment
Kreisring der Dicke $\d r$: $\d A=2\pi r\,\d r$:
$$I_p=\int_0^Rr^2\,2\pi r\,\d r=\frac{\pi R^4}2.$$
Symmetrie: $I_y=I_z=\frac12I_p=\frac{\pi R^4}4=\frac{\pi d^4}{64}$, $I_{yz}=0$.
:::

:::bsp Kreisring und dünner Ring
Ring ($R_a$, $R_i$): $I_p=\frac\pi2(R_a^4-R_i^4)$, $I_y=I_z=\frac\pi4(R_a^4-R_i^4)$.
Dünner Ring (mittlerer Radius $R_m$, Wanddicke $t\ll R_m$): $R_a^4-R_i^4\approx4R_m^3t$ ⇒
$$I_p\approx2\pi R_m^3t,\qquad I_y=I_z\approx\pi R_m^3t.$$
:::

### Tabelle (Schwerpunktsachsen) – auswendig lernen!

| Fläche | $A$ | Schwerpunkt | $I_y$ | $I_z$ | $I_{yz}$ |
|---|---|---|---|---|---|
| Rechteck $b\times h$ | $bh$ | Mitte | $\frac{bh^3}{12}$ | $\frac{hb^3}{12}$ | 0 |
| Kreis $R$ | $\pi R^2$ | Mitte | $\frac{\pi R^4}4$ | $\frac{\pi R^4}4$ | 0 |
| Kreisring | $\pi(R_a^2-R_i^2)$ | Mitte | $\frac\pi4(R_a^4-R_i^4)$ | gleich | 0 |
| dünner Ring | $2\pi R_mt$ | Mitte | $\pi R_m^3t$ | gleich | 0 |
| rechtwinkliges Dreieck (Katheten $b$ in $y$, $h$ in $z$) | $\frac{bh}2$ | $\frac b3$, $\frac h3$ von der rechtwinkligen Ecke | $\frac{bh^3}{36}$ | $\frac{hb^3}{36}$ | $\pm\frac{b^2h^2}{72}$ |
| Halbkreis $R$ (gerade Seite ∥ $y$) | $\frac{\pi R^2}2$ | $\frac{4R}{3\pi}$ von der geraden Seite | $\frac{(9\pi^2-64)R^4}{72\pi}\approx0{,}110R^4$ | $\frac{\pi R^4}8$ | 0 |
| Ellipse (Halbachsen $a$ in $y$, $b$ in $z$) | $\pi ab$ | Mitte | $\frac{\pi ab^3}4$ | $\frac{\pi a^3b}4$ | 0 |

*Dreieck, Vorzeichen von $I_{yz}=-\int yz\,\d A$:* Liegt der größere Flächenanteil in den Quadranten mit $yz<0$, ist $I_{yz}>0$. Für die Ecke im Bereich ($y$ und $z$ minimal) gilt $\int yz\,\d A=-\frac{b^2h^2}{72}$, also $I_{yz}=+\frac{b^2h^2}{72}$.

**Trägheitsradius:** $i=\sqrt{I/A}$ (wird bei Knickung gebraucht).

:::bsp Effizienz-Vergleich
Gleiche Fläche $A=2000\,$mm²:
- Vollquadrat $44{,}7\times44{,}7$: $I_y=\frac{44{,}7^4}{12}=3{,}33\cdot10^5\,$mm⁴.
- Rechteck hochkant $20\times100$: $I_y=\frac{20\cdot100^3}{12}=16{,}7\cdot10^5\,$mm⁴ (5-fach) – flach gelegt nur $0{,}67\cdot10^5$!
- I-Profil (Gurte $100\times8$, Steg $6\times70$; $A=2020$): $I_y\approx2\cdot\left(\frac{100\cdot8^3}{12}+800\cdot39^2\right)+\frac{6\cdot70^3}{12}\approx26{,}1\cdot10^5\,$mm⁴ (8-fach).
:::

## Aufgaben

:::aufgabe 1
Leite $I_y$ für ein Dreieck (Grundseite $b$ auf der $\bar y$-Achse, Höhe $h$) bezüglich der **Grundseite** her und rechne dann auf den Schwerpunkt um.
:::loesung
Breite in der Höhe $\bar z$ (von der Grundseite gemessen): $b(\bar z)=b(1-\frac{\bar z}h)$.
$I_{\bar y}=\int_0^h\bar z^2b(1-\frac{\bar z}h)\d\bar z=b(\frac{h^3}3-\frac{h^3}4)=\frac{bh^3}{12}$.
Steiner rückwärts (Schwerpunkt bei $z_S=\frac h3$): $I_y=I_{\bar y}-z_S^2A=\frac{bh^3}{12}-\frac{h^2}9\cdot\frac{bh}2=\frac{bh^3}{36}$ ✓.
:::
:::

:::aufgabe 2
Rohr $d_a=40\,$mm, $d_i=30\,$mm: $I_y$, $I_p$, $A$? Vergleiche mit einem Vollkreis gleicher Fläche.
:::loesung
$I_y=\frac\pi{64}(40^4-30^4)=\frac\pi{64}\cdot1{,}75\cdot10^6=85\,900\,$mm⁴, $I_p=171\,800\,$mm⁴, $A=\frac\pi4(1600-900)=550\,$mm².
Vollkreis mit $A=550$: $d=26{,}5\,$mm, $I_y=\frac{\pi\,26{,}5^4}{64}=24\,200\,$mm⁴ – das Rohr ist 3,5-mal steifer.
:::
:::

:::aufgabe 3 (Übung 3, Aufgabe 13)
Rechteck $d\times e$ (Schwerpunkt in der Mitte) mit Aussparungen: zwei Halbkreise (Radius $r_1$, Mittelpunkt auf den senkrechten Rändern $y=\pm\frac d2$), vier Rechtecke $b\times a$ an Ober- und Unterkante im Bereich $\frac c2\le|y|\le\frac c2+b$, ein Kreisloch $r_2$ in der Mitte. Bestimme $I_z$.
:::loesung
Alle Teile sind symmetrisch zur $y$- und $z$-Achse angeordnet; $I_z=\int y^2\,\d A$ mit Steiner für jedes Teil:
- Rechteck: $\frac{ed^3}{12}$
- 4 Nuten: $-4\left[\frac{ab^3}{12}+ab\left(\frac{c+b}2\right)^2\right]$
- Kreisloch: $-\frac{\pi r_2^4}4$
- 2 Halbkreise: Bezüglich ihrer geraden Seite (senkrecht) ist $I=\frac{\pi r_1^4}8$; Schwerpunktabstand von dort $e_1=\frac{4r_1}{3\pi}$ (nach innen). Eigenmoment $\frac{\pi r_1^4}8-\frac{\pi r_1^2}2e_1^2$, Abstand des Schwerpunkts von der $z$-Achse $\frac d2-e_1$:
$$-2\left[\frac{\pi r_1^4}8-\frac{\pi r_1^2}2e_1^2+\frac{\pi r_1^2}2\left(\frac d2-e_1\right)^2\right]=-\pi r_1^2\left[\frac{r_1^2}4+\frac{d^2}4-\frac{4dr_1}{3\pi}\right].$$
$$I_z=\frac{ed^3}{12}-\frac{ab^3}3-ab(c+b)^2-\frac{\pi r_2^4}4-\frac{\pi r_1^2}4\left(r_1^2+d^2-\frac{16dr_1}{3\pi}\right).$$
:::
:::

## Karteikarten

:::karte
Definition $I_y$, $I_z$, $I_{yz}$, $I_p$?
???
$I_y=\int z^2\d A$, $I_z=\int y^2\d A$, $I_{yz}=-\int yz\,\d A$, $I_p=I_y+I_z=\int r^2\d A$.
:::

:::karte
Rechteck: $I_y$ um Schwerachse und um Kante?
???
$\frac{bh^3}{12}$; um Kante $\frac{bh^3}3$.
:::

:::karte
Kreis: $I_y$ und $I_p$?
???
$I_y=\frac{\pi R^4}4=\frac{\pi d^4}{64}$, $I_p=\frac{\pi R^4}2=\frac{\pi d^4}{32}$.
:::

:::karte
Dünner Ring: $I_y$, $I_p$?
???
$I_y\approx\pi R_m^3t$, $I_p\approx2\pi R_m^3t$.
:::

:::karte
Wann ist $I_{yz}=0$?
???
Wenn y- oder z-Achse Symmetrieachse ist (und im Hauptachsensystem).
:::

:::karte
Dreieck: $I_y$ um Schwerachse?
???
$\frac{bh^3}{36}$ (um die Grundseite $\frac{bh^3}{12}$).
:::
