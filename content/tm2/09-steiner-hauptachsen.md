---
title: 4.2 Satz von Steiner, Drehung, Hauptträgheitsachsen, Mohrscher Trägheitskreis, zusammengesetzte Querschnitte
chapter: 4 Flächenträgheitsmomente
minutes: 130
sources: Technische Mechanik 2/tm2_04_ftm.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#104; Technische Mechanik 2/Uebung_03_Aufgaben.pdf
---

:::ziel
- Den **Satz von Huygens-Steiner** fehlerfrei anwenden (auch für $I_{yz}$ mit Vorzeichen).
- Trägheitsmomente bei **Drehung** des Koordinatensystems berechnen; **Hauptträgheitsmomente** $I_{1,2}$ und Hauptachsenwinkel $\alpha^*$.
- Den **Mohrschen Trägheitskreis** zeichnen.
- Den **4-Schritt-Algorithmus** für zusammengesetzte (auch dünnwandige) Profile beherrschen.
:::

## Parallelverschiebung: Satz von Huygens-Steiner

$y$-$z$ sei das **Schwerpunktsystem**, $\bar y$-$\bar z$ parallel dazu verschoben, sodass der Schwerpunkt im neuen System bei $(\bar y_S,\bar z_S)$ liegt ($\bar y=y+\bar y_S$, $\bar z=z+\bar z_S$). Da die statischen Momente im Schwerpunktsystem null sind:

:::satz Steiner
$$I_{\bar y}=I_y+\bar z_S^2A,\qquad I_{\bar z}=I_z+\bar y_S^2A,\qquad I_{\bar y\bar z}=I_{yz}-\bar y_S\bar z_SA.$$
:::

:::achtung Steiner-Fallen
- Steiner gilt **nur vom Schwerpunktsystem aus** (bzw. zu ihm hin). Nie von einer beliebigen Achse zu einer anderen beliebigen Achse springen – immer über den Schwerpunkt!
- Beim Deviationsmoment zählen die **Vorzeichen** der Abstände ($\bar y_S$, $\bar z_S$ mit Vorzeichen).
- Daraus folgt: Axiale Trägheitsmomente sind **bezüglich der Schwerachse minimal**.
:::

## Drehung des Koordinatensystems

System $\eta$-$\zeta$ um den Winkel $\alpha$ gegenüber $y$-$z$ gedreht. Mit $\eta=y\cos\alpha+z\sin\alpha$, $\zeta=-y\sin\alpha+z\cos\alpha$:

:::formel Transformation der Trägheitsmomente
$$\begin{aligned}I_\eta&=\tfrac12(I_y+I_z)+\tfrac12(I_y-I_z)\cos2\alpha+I_{yz}\sin2\alpha\\I_\zeta&=\tfrac12(I_y+I_z)-\tfrac12(I_y-I_z)\cos2\alpha-I_{yz}\sin2\alpha\\I_{\eta\zeta}&=-\tfrac12(I_y-I_z)\sin2\alpha+I_{yz}\cos2\alpha\end{aligned}$$
**Exakt dieselbe Struktur** wie beim ebenen Spannungszustand ($\sigma_x\to I_y$, $\sigma_y\to I_z$, $\tau_{xy}\to I_{yz}$) – genau deshalb wurde $I_{yz}$ mit Minuszeichen definiert. Alle Erkenntnisse übertragen sich.
:::

:::formel Hauptträgheitsmomente
$$I_{1,2}=\frac{I_y+I_z}2\pm\sqrt{\left(\frac{I_y-I_z}2\right)^2+I_{yz}^2},\qquad\tan2\alpha^*=\frac{2I_{yz}}{I_y-I_z}.$$
- In den **Hauptachsen** verschwindet das Deviationsmoment; $I_1$ ist das größte, $I_2$ das kleinste aller axialen Trägheitsmomente durch den Punkt.
- Zuordnung: $\alpha^*$ in $I_\eta$ einsetzen.
- $I_{\eta\zeta}$ wird extremal unter $\alpha^{**}=\alpha^*\pm45°$.
- Invarianten: $I_y+I_z=I_1+I_2=I_p$, $I_yI_z-I_{yz}^2$.
- **Jede Symmetrieachse ist Hauptachse.** Bei Punktsymmetrie dritter oder höherer Ordnung (Kreis, Quadrat, regelmäßiges Vieleck) sind **alle** Achsen Hauptachsen ($I_1=I_2$, Kreis ist ein Punkt).
:::

### Mohrscher Trägheitskreis
Abszisse: axiale Momente $I_y,I_z$; Ordinate: Deviationsmoment. $I_{yz}$ **vorzeichenrichtig über $I_y$**, mit umgekehrtem Vorzeichen über $I_z$; Kreis durch beide Punkte, Mittelpunkt $\frac{I_y+I_z}2$. Schnittpunkte mit der Abszisse: $I_1$, $I_2$. Der Winkel $2\alpha$ wird aus dem Kreis entnommen und **mit halbem Betrag im entgegengesetzten Drehsinn** in die Lageskizze übertragen (wie beim Spannungskreis).
Sonderfall schlanker Rechteckstreifen ($I_y\ll I_z$, $I_{yz}=0$): Kreis berührt die Ordinate ($I_2\approx0$).

## Zusammengesetzte Querschnitte

:::rezept 4-Schritt-Algorithmus
1. **Zerlegen** in Grundflächen $A_i$ (Löcher als **negative** Flächen). Hilfskoordinatensystem $\bar y,\bar z$ wählen.
2. **Gesamtschwerpunkt:** $\bar y_S=\frac{\sum\bar y_iA_i}{\sum A_i}$, $\bar z_S=\frac{\sum\bar z_iA_i}{\sum A_i}$.
3. **Eigenträgheitsmomente** $I_{y,i},I_{z,i},I_{yz,i}$ der Teile bzgl. ihrer eigenen Schwerpunkte (Tabelle; bei gedrehten Teilen Drehformeln).
4. **Steiner** mit den Abständen $y_{Si}$, $z_{Si}$ der Teilschwerpunkte vom **Gesamtschwerpunkt**:
$$I_y=\sum(I_{y,i}+z_{Si}^2A_i),\quad I_z=\sum(I_{z,i}+y_{Si}^2A_i),\quad I_{yz}=\sum(I_{yz,i}-y_{Si}z_{Si}A_i).$$
5. Falls nötig: **Hauptachsen** und $I_{1,2}$.
Eine **Tabelle** (Spalten $A_i$, $y_i$, $z_i$, $y_iA_i$, …, Steiner-Anteile) verhindert Fehler.
:::

:::merke Dünnwandige Profile ($t\ll$ Abmessungen)
Profil durch seine **Mittellinie** ersetzen; Terme mit $t^3$ vernachlässigen. Ein dünner Streifen der Länge $l$ (Dicke $t$) hat:
- parallel zur Achse liegend: Eigenanteil $\approx0$, nur Steiner $l\,t\,e^2$;
- senkrecht zur Achse: $\frac{tl^3}{12}$;
- schräg unter dem Winkel $\beta$ zur $y$-Achse: $I_y=\frac{tl^3}{12}\sin^2\beta$, $I_z=\frac{tl^3}{12}\cos^2\beta$, $I_{yz}=-\frac{tl^3}{12}\sin\beta\cos\beta$ (Vorzeichen je nach Lage, Vorlesung: Integration entlang der Mittellinie).
:::

:::bsp Doppel-T mit ungleichen Gurten (Folienbeispiel, Maße: Obergurt $5d\times d$, Steg $d\times3d$, Untergurt $3d\times d$)
$\bar z$ von der Oberkante nach unten. $A=5d^2+3d^2+3d^2=11d^2$.
$\bar z_S=\frac{5\cdot0{,}5+3\cdot2{,}5+3\cdot4{,}5}{11}d=2{,}136d$ (symmetrisch zu $z$ ⇒ $y_S=0$, $I_{yz}=0$).
| Teil | $A_i$ | $I_{y,i}$ | $z_{Si}$ | $z_{Si}^2A_i$ |
|---|---|---|---|---|
| Obergurt | $5d^2$ | $0{,}417d^4$ | $-1{,}636d$ | $13{,}39d^4$ |
| Steg | $3d^2$ | $2{,}25d^4$ | $0{,}364d$ | $0{,}40d^4$ |
| Untergurt | $3d^2$ | $0{,}25d^4$ | $2{,}364d$ | $16{,}76d^4$ |
$I_y=2{,}917+30{,}55=33{,}46\,d^4$; $I_z=\frac{d(5d)^3}{12}+\frac{3d\cdot d^3}{12}+\frac{d(3d)^3}{12}=12{,}92\,d^4$.
:::

## Aufgaben

:::aufgabe 1 (Übung 3, Aufgabe 14 – L-Profil)
L-Profil, Stärke $c$, Breite $6c$ (oberer Schenkel), Höhe $8c$ (rechter Schenkel). Ursprung $y'$-$z'$ in der äußeren Ecke oben rechts, $y'$ nach links, $z'$ nach unten. (a) Schwerpunkt, (b) $I_y$, $I_z$, $I_{yz}$, (c) $I_{1,2}$ und Hauptachsenlage.
:::loesung
Teile: oberer Schenkel $6c\times c$ ($A_1=6c^2$, Schwerpunkt $(3c;\,0{,}5c)$), senkrechter Schenkel unterhalb $c\times7c$ ($A_2=7c^2$, $(0{,}5c;\,4{,}5c)$).
(a) $y'_S=\frac{18+3{,}5}{13}c=1{,}654c$, $z'_S=\frac{3+31{,}5}{13}c=2{,}654c$.
(b) Abstände zum Schwerpunkt: Teil 1 $(1{,}346c;\,-2{,}154c)$, Teil 2 $(-1{,}154c;\,1{,}846c)$.
$I_y=0{,}5c^4+6\cdot2{,}154^2c^4+\frac{7^3}{12}c^4+7\cdot1{,}846^2c^4=80{,}78\,c^4$
$I_z=18c^4+6\cdot1{,}346^2c^4+\frac7{12}c^4+7\cdot1{,}154^2c^4=38{,}78\,c^4$
$I_{yz}=-[6\cdot1{,}346\cdot(-2{,}154)+7\cdot(-1{,}154)\cdot1{,}846]c^4=+32{,}31\,c^4$
(c) $I_{1,2}=59{,}78\pm\sqrt{21^2+32{,}31^2}=59{,}78\pm38{,}53$ ⇒ $I_1=98{,}3\,c^4$, $I_2=21{,}2\,c^4$. $\tan2\alpha^*=\frac{64{,}62}{42}$ ⇒ $\alpha^*=28{,}5°$ (Einsetzen liefert $I_1$).
:::
:::

:::aufgabe 2 (Übung 3, Aufgabe 15 – abgeschrägte Scheibe)
Rechteck $6a$ breit, $9a$ hoch, oben rechts ist ein rechtwinkliges Dreieck (Katheten $3a$ waagrecht, $6a$ senkrecht) abgeschnitten. $y$ nach links, $z$ nach unten. (a) $I_y$, $I_z$, $I_{yz}$; (b) Hauptachsen.
:::loesung
Koordinaten von der rechten oberen Ecke ($y'$ nach links, $z'$ nach unten). Rechteck: $A=54a^2$, $(3a;4{,}5a)$. Dreieck (negativ): $A=-9a^2$, Schwerpunkt $(a;2a)$, $I_y=-\frac{3\cdot6^3}{36}a^4=-18a^4$, $I_z=-\frac{6\cdot3^3}{36}a^4=-4{,}5a^4$, $I_{yz}=-\frac{3^2\cdot6^2}{72}a^4=-4{,}5a^4$ (rechter Winkel in der Ecke mit minimalem $y'$, $z'$ ⇒ Eigen-$I_{yz}=+\frac{b^2h^2}{72}$, negativ gezählt).
Schwerpunkt: $A=45a^2$, $y'_S=\frac{162-9}{45}a=3{,}4a$, $z'_S=\frac{243-18}{45}a=5a$.
$I_y=\frac{6\cdot9^3}{12}a^4+54\cdot0{,}5^2a^4-18a^4-9\cdot3^2a^4=279\,a^4$
$I_z=\frac{9\cdot6^3}{12}a^4+54\cdot0{,}4^2a^4-4{,}5a^4-9\cdot2{,}4^2a^4=114{,}3\,a^4$
$I_{yz}=-[54\cdot(-0{,}4)(-0{,}5)]a^4-4{,}5a^4+9\cdot(-2{,}4)(-3)a^4=-10{,}8-4{,}5+64{,}8=49{,}5\,a^4$
(b) $I_{1,2}=196{,}65\pm\sqrt{82{,}35^2+49{,}5^2}=196{,}65\pm96{,}08$ ⇒ $I_1=292{,}7a^4$, $I_2=100{,}6a^4$; $\tan2\alpha^*=\frac{99}{164{,}7}$ ⇒ $\alpha^*=15{,}5°$.
:::
:::

:::aufgabe 3 (Übung 3, Aufgabe 17 – dünnwandiges Dreieck)
Dünnwandiges geschlossenes Profil (Wanddicke $t\ll a$) in Form eines rechtwinkligen Dreiecks: Breite $3a$ (unten), Höhe $4a$ (rechts), Hypotenuse $5a$. (a) Schwerpunkt bzgl. der rechten unteren Ecke, (b) $I_y,I_z,I_{yz}$, (c) $I_{1,2}$.
:::loesung
(a) Mittellinienlängen 3a, 4a, 5a ($A=12at$). Schwerpunkte der Seiten (von der Ecke, $y'$ links, $z'$ nach oben gemessen): unten $(1{,}5a;0)$, rechts $(0;2a)$, Hypotenuse $(1{,}5a;2a)$ ⇒ $y'_S=\frac{4{,}5+7{,}5}{12}a=a$, $z'_S=\frac{8+10}{12}a=1{,}5a$ (über der Ecke).
(b) ($z$ nach unten):
$I_y$: unten $3at(1{,}5a)^2=6{,}75$; rechts $\frac t3[(1{,}5a)^3+(2{,}5a)^3]=6{,}33$; Hypotenuse $\frac{t\,5a(4a)^2}{12}+5at(0{,}5a)^2=7{,}92$ ⇒ $I_y=21\,a^3t$.
$I_z$: unten $\frac t3[(2a)^3+a^3]=3$; rechts $4at\,a^2=4$; Hypotenuse $\frac{t\,5a(3a)^2}{12}+5at(0{,}5a)^2=5$ ⇒ $I_z=12\,a^3t$.
$\int yz\,\d A=2{,}25+2+3{,}75=8a^3t$ ⇒ $I_{yz}=-8\,a^3t$.
Für $a=10t$: $I_y=21\,000t^4$, $I_z=12\,000t^4$, $I_{yz}=-8000t^4$ – genau die Werte aus dem Biegebeispiel der Folien.
(c) $I_{1,2}=16{,}5\pm\sqrt{4{,}5^2+8^2}=16{,}5\pm9{,}18$ ⇒ $I_1=25{,}7a^3t$, $I_2=7{,}3a^3t$; $\alpha^*=\frac12\arctan\frac{-16}9=-30{,}3°$.
:::
:::

:::aufgabe 4 (Übung 3, Aufgabe 16 – Dreieck mit Nut)
Gleichschenklig-rechtwinkliges Dreieck (Katheten $a$, rechter Winkel oben rechts, Ursprung dort, $y'$ nach links, $z'$ nach unten) mit rechteckiger Nut (Breite $b$ entlang der Hypotenuse, Tiefe $t$) mittig auf der Symmetrielinie. (a) Schwerpunkt, (b) $I_y$, $I_z$, (c) $I_p$.
:::loesung
Symmetrielinie $y'=z'$ ⇒ $y'_S=z'_S=s$.
Dreieck: $A_1=\frac{a^2}2$, Schwerpunkt $(\frac a3,\frac a3)$, $I_y=I_z=\frac{a^4}{36}$.
Nut: $A_2=-bt$. Abstand Ecke–Hypotenuse entlang der Diagonale $\frac a{\sqrt2}$; Nutmitte $\frac t2$ davor ⇒ Koordinaten $p=\frac a2-\frac t{2\sqrt2}$. Um 45° gedrehtes Rechteck: $I_y=I_z=\frac12\left(\frac{bt^3}{12}+\frac{tb^3}{12}\right)=\frac{bt(b^2+t^2)}{24}$.
(a) $s=\dfrac{\frac{a^3}6-bt\,p}{\frac{a^2}2-bt}$.
(b) $I_y=I_z=\frac{a^4}{36}+\frac{a^2}2\left(\frac a3-s\right)^2-\frac{bt(b^2+t^2)}{24}-bt\,(p-s)^2$.
(c) $I_p=I_y+I_z=2I_y$.
:::
:::

## Karteikarten

:::karte
Satz von Steiner (alle drei Formeln)?
???
$I_{\bar y}=I_y+\bar z_S^2A$, $I_{\bar z}=I_z+\bar y_S^2A$, $I_{\bar y\bar z}=I_{yz}-\bar y_S\bar z_SA$ – nur vom Schwerpunktsystem aus.
:::

:::karte
Hauptträgheitsmomente und Winkel?
???
$I_{1,2}=\frac{I_y+I_z}2\pm\sqrt{(\frac{I_y-I_z}2)^2+I_{yz}^2}$, $\tan2\alpha^*=\frac{2I_{yz}}{I_y-I_z}$
:::

:::karte
Warum $I_{yz}=-\int yz\,\d A$?
???
Damit die Drehformeln exakt wie beim Spannungszustand aussehen (Mohrscher Kreis übertragbar).
:::

:::karte
Algorithmus zusammengesetzte Querschnitte?
???
Zerlegen → Gesamtschwerpunkt → Eigenträgheitsmomente → Steiner-Anteile addieren → ggf. Hauptachsen.
:::

:::karte
Dünnwandige Profile – Vereinfachung?
???
Mittellinie verwenden, Terme mit $t^3$ vernachlässigen (Streifen parallel zur Achse: nur Steiner-Anteil).
:::

:::karte
Ist eine Symmetrieachse immer Hauptachse?
???
Ja ($I_{yz}=0$).
:::
