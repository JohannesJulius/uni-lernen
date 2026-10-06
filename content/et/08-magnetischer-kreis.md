---
title: 4.2 Magnetismus II – Der magnetische Kreis, Luftspalt, Kraft am Luftspalt
chapter: 4 Magnetismus
minutes: 90
sources: Elektrotechnik/Elektrotechnik - 4.2 Magnetismus II.pdf
---

:::ziel
- Magnetische Kreise mit der Analogie zum Stromkreis berechnen: $\Theta=R_m\Phi$.
- Magnetischen Widerstand $R_m=\frac{l}{\mu_0\mu_rA}$ und Leitwert (Permeanz) bestimmen.
- Reihen/Parallel magnetischer Widerstände; Ersatzschaltbild.
- **Dominanz des Luftspalts**; Kraft am Luftspalt $F=\frac{B^2A}{2\mu_0}$; Elektromagnet dimensionieren.
:::

## Idee

Ein **magnetischer Kreis** ist ein geschlossener Pfad aus ferromagnetischem Material, der den Fluss führt (Motoren, Generatoren, Transformatoren, induktives Laden, Relais, Aktuatoren). Statt aufwändiger 3D-Feldrechnung (FEM) nutzt man eine eindimensionale Näherung – gültig, wenn der Fluss hauptsächlich im Eisen verläuft.

:::satz „Ohmsches Gesetz" des magnetischen Kreises
Homogener Abschnitt (Länge $l$, Querschnitt $A$, Permeabilität $\mu_r$): $\Theta=Hl$, $\Phi=BA=\mu_0\mu_rHA$ ⇒
$$\Theta=R_m\Phi,\qquad R_m=\frac{l}{\mu_0\mu_rA},\qquad[R_m]=\frac{\mathrm A}{\mathrm{Vs}}=\mathrm H^{-1}.$$
Magnetischer Leitwert (Permeanz): $\Lambda=\frac1{R_m}=\frac{\mu_0\mu_rA}{l}$, $[\Lambda]=\mathrm H$; $\Phi=\Lambda\Theta$.
:::

Die Analogie ist **mathematisch**, nicht physikalisch (es „fließt" nichts), aber sie macht Magnetkreise so einfach wie Widerstandsnetze.

| elektrischer Kreis | magnetischer Kreis |
|---|---|
| Spannung $U=\int\vec E\cdot\d\vec s$ | Durchflutung $\Theta=NI=\oint\vec H\cdot\d\vec s$ |
| Strom $I=\int\vec J\cdot\d\vec A$ | Fluss $\Phi=\int\vec B\cdot\d\vec A$ |
| Widerstand $R=\frac{l}{\sigma A}$ | $R_m=\frac{l}{\mu_0\mu_rA}$ |
| Leitwert $G=\frac1R$ | $\Lambda=\frac1{R_m}$ |
| $U=RI$ | $\Theta=R_m\Phi$ |

- **Reihe** (Eisen + Luftspalt im selben Pfad, gleicher Fluss): $R_{m,ges}=\sum R_{m,i}$.
- **Parallel** (Fluss verzweigt sich auf mehrere Schenkel): $\frac1{R_{m,ges}}=\sum\frac1{R_{m,i}}$; Knotenregel $\sum\Phi_k=0$.
- **Ersatzschaltbild:** $\Theta=NI$ als Quelle, jeder Abschnitt als Widerstand.

## Elektromagnet mit Luftspalt

$$R_{m,ges}=\underbrace{\frac{l_E}{\mu_0\mu_rA}}_{\text{Eisen}}+\underbrace{\frac{\delta}{\mu_0A}}_{\text{Luftspalt}},\qquad\Phi=\frac{NI}{R_{m,ges}}.$$

:::bsp Dominanz des Luftspalts
$l_E=30\,$cm, $\mu_r=2000$, $\delta=1\,$mm: $\frac{R_{m,L}}{R_{m,E}}=\frac{\delta\mu_r}{l_E}=\frac{0{,}001\cdot2000}{0{,}3}\approx6{,}7$.
Der Luftspalt ist **7-mal wichtiger**, obwohl er 300-mal kürzer ist!
Näherung für $\mu_r\gg1$ (in Aufgaben „$\mu_r\to\infty$"): Eisenwiderstand vernachlässigen, $R_{m,ges}\approx R_{m,L}$.
:::

## Kraft am Luftspalt

:::formel Zugkraft pro Polfläche
$$F=\frac{B^2A}{2\mu_0}\qquad(B\text{ im Luftspalt},\ A\text{ Polfläche}).$$
(Herleitung über die Feldenergie, Kap. 5.) **Ein U-Kern hat zwei Polflächen/Luftspalte** ⇒ Gesamtkraft $2\cdot\frac{B^2A}{2\mu_0}$; jeder Spalt muss nur die halbe Last tragen.
:::

:::rezept Hubmagnet dimensionieren (rückwärts)
Geforderte Kraft → Kraft pro Spalt → $B=\sqrt{\frac{2\mu_0F}{A}}$ → $\Phi=BA$ → $\Theta=R_m\Phi$ → $I=\frac{\Theta}{N}$.
:::

## Aufgabe 13 der Folien

:::aufgabe 1
Elektromagnet am Roboterarm hebt Eisenbleche ($F_g=160\,$N). U-Kern, $A=8\,$cm² pro Pol, Luftspalt $d=0{,}5\,$mm pro Pol, $\mu_r\to\infty$, $N=1000$. Normierter Luftspalt (1 mm, 1 cm²): $R_m=8\cdot10^6\,$H⁻¹; $\mu_0=1{,}25\cdot10^{-6}\,$Vs/(Am).
(a) Ersatzschaltbild, $R_{m,ges}$? (b) Kraft pro Spalt, $B_{min}$? (c) Strom $I$? (d) Aluminium?
:::loesung
(a) Quelle $\Theta$ mit zwei Luftspaltwiderständen in Reihe. Pro Spalt: $R_m=8\cdot10^6\cdot\frac{0{,}5}{8}=5\cdot10^5\,$H⁻¹ (Länge halb, Fläche 8-fach). Gesamt $R_{m,ges}=10^6\,$H⁻¹.
(b) $F=80\,$N pro Spalt. $B=\sqrt{\frac{2\cdot1{,}25\cdot10^{-6}\cdot80}{8\cdot10^{-4}}}=\sqrt{0{,}25}=0{,}5\,$T.
(c) $\Phi=BA=4\cdot10^{-4}\,$Wb, $\Theta=R_m\Phi=400\,$A ⇒ $I=0{,}4\,$A.
(d) Nein – Aluminium ist nicht ferromagnetisch; es schließt den Magnetkreis nicht.
:::
:::

:::aufgabe 2
Ringkern (mittlerer Umfang 20 cm, $A=2\,$cm², $\mu_r=1000$) mit Luftspalt 0,5 mm, $N=200$. Welcher Strom erzeugt $B=0{,}8\,$T im Spalt?
:::loesung
$R_{m,E}=\frac{0{,}2}{4\pi\cdot10^{-7}\cdot1000\cdot2\cdot10^{-4}}\approx7{,}96\cdot10^5$; $R_{m,L}=\frac{5\cdot10^{-4}}{4\pi\cdot10^{-7}\cdot2\cdot10^{-4}}\approx1{,}99\cdot10^6$; Summe $2{,}79\cdot10^6\,$H⁻¹. $\Phi=0{,}8\cdot2\cdot10^{-4}=1{,}6\cdot10^{-4}\,$Wb ⇒ $\Theta\approx446\,$A ⇒ $I\approx2{,}2\,$A.
:::
:::

## Karteikarten

:::karte
Magnetischer Widerstand?
???
$R_m=\frac{l}{\mu_0\mu_rA}$; $\Theta=R_m\Phi$.
:::

:::karte
Warum dominiert der Luftspalt?
???
Weil $\mu_r$ des Eisens sehr groß ist: $R_{m,L}/R_{m,E}=\delta\mu_r/l_E$ – oft ≫ 1.
:::

:::karte
Kraft am Luftspalt?
???
$F=\frac{B^2A}{2\mu_0}$ pro Polfläche (U-Kern: zwei Spalte!).
:::
