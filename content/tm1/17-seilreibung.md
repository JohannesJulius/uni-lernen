---
title: §9 Seilhaftung und Seilreibung (Euler-Eytelwein)
chapter: §9 Haftung und Reibung
minutes: 60
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#265
---

:::ziel
- Die Euler-Eytelweinsche Formel herleiten und anwenden.
- Haltekräfte an Pollern, Bandbremsen, Riementrieben berechnen.
:::

## Herleitung

Ein Seil liegt mit dem **Umschlingungswinkel** $\alpha$ (im Bogenmaß!) auf einer festen Trommel. An einem Ende zieht $S_1$, am anderen hält $S_2$. Ein Seilelement $\d\varphi$:
- radial: $\d N=S\,\d\varphi$ (Seilkraft drückt das Element auf die Trommel)
- tangential, Haftgrenzfall: $\d S=\d H=\mu_0\,\d N=\mu_0S\,\d\varphi$

⇒ $\frac{\d S}{S}=\mu_0\,\d\varphi$ ⇒ $\ln\frac{S_1}{S_2}=\mu_0\alpha$.

:::satz Euler-Eytelweinsche Formel
Haften, solange
$$S_2\,\e^{-\mu_0\alpha}\le S_1\le S_2\,\e^{\mu_0\alpha}.$$
Im Grenzfall (Seil rutscht gerade, in Richtung von $S_1$): $S_1=S_2\,\e^{\mu_0\alpha}$. Beim **Gleiten**: $S_1=S_2\,\e^{\mu\alpha}$ (mit Gleitreibungskoeffizient).
:::

:::merke
Die Haltekraft hängt **exponentiell** vom Umschlingungswinkel ab und **nicht** vom Trommelradius. Jede volle Umschlingung multipliziert das Kraftverhältnis mit $\e^{2\pi\mu_0}$ (für $\mu_0=0{,}3$: Faktor ≈ 6,6).
:::

## Anwendungen

:::bsp Poller
Ein Schiff zieht mit $S_1=50\,$kN. Ein Matrose hält mit $S_2=200\,$N. Wie viele Umschlingungen braucht er bei $\mu_0=0{,}25$?
$\e^{\mu_0\alpha}=\frac{50\,000}{200}=250\Rightarrow\alpha=\frac{\ln250}{0{,}25}=22{,}1\,$rad $\approx3{,}5$ Umschlingungen.
:::

:::bsp Bandbremse
Ein Bremsband umschlingt eine Trommel mit $\alpha=\frac{3\pi}2$, $\mu=0{,}3$. Das lose Ende wird mit $S_2=100\,$N gespannt. Bei Drehung ist $S_1=S_2\e^{\mu\alpha}=100\,\e^{1{,}414}=411\,$N. Bremsmoment $M_B=(S_1-S_2)r$; für $r=0{,}2\,$m: $62\,$Nm.
Die Drehrichtung ist wichtig: Je nachdem, welches Bandende am Hebel hängt, wirkt die Bremse „selbstverstärkend".
:::

:::bsp Riementrieb
Ein Riemen überträgt das Moment $M=(S_1-S_2)r$. Damit er nicht rutscht: $S_1\le S_2\e^{\mu_0\alpha}$. Mit gegebener Vorspannung ergibt sich das maximal übertragbare Moment. Größerer Umschlingungswinkel (Spannrolle) oder Keilriemen (größeres effektives $\mu$) erhöhen die Leistung.
:::

## Aufgaben

:::aufgabe 1
Ein Seil ist $1{,}5$-mal um einen Baum geschlungen ($\mu_0=0{,}4$). Mit welcher Kraft muss man halten, wenn am anderen Ende $2\,$kN ziehen?
:::loesung
$\alpha=3\pi$, $\e^{0{,}4\cdot3\pi}=\e^{3{,}77}\approx43{,}4$ ⇒ $S_2=\frac{2000}{43{,}4}\approx46\,$N.
:::
:::

:::aufgabe 2
Ein Gewicht $G=1\,$kN hängt an einem Seil, das über einen festen Zylinder ($\alpha=\pi$, $\mu_0=0{,}3$) läuft. In welchem Bereich muss die Kraft $F$ am anderen Ende liegen, damit Ruhe herrscht?
:::loesung
$\e^{0{,}3\pi}=2{,}57$: $\frac{G}{2{,}57}\le F\le2{,}57G$ ⇒ $389\,$N $\le F\le2{,}57\,$kN.
:::
:::

## Karteikarten

:::karte
Euler-Eytelwein-Formel?
???
$S_1=S_2\e^{\mu_0\alpha}$ (Haftgrenzfall), $\alpha$ im Bogenmaß; unabhängig vom Radius.
:::

:::karte
Bremsmoment einer Bandbremse?
???
$M_B=(S_1-S_2)r$ mit $S_1=S_2\e^{\mu\alpha}$.
:::
