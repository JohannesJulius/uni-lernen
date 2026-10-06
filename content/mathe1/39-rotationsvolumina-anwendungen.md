---
title: Anwendungen der Integration – Rotationskörper, Hohlkörper, Bogenlänge, Schwerpunkt
chapter: 4 Integralrechnung
minutes: 75
sources: Mathe 1/IngMath1_slides_3_ana_15_integration_uebungen_rotationsvolumina (1).pdf; Mathe 1/IngMath1_slides_3_ana_12_integration_numerik_Kepler_Fassregel.pdf
---

:::ziel
- Volumen von Rotationskörpern (Scheibenmethode) berechnen – auch für **Hohlkörper**.
- Volumen über die Querschnittsfläche $q(z)$.
- Ausblick: Mantelfläche, Bogenlänge, Flächenschwerpunkt (wichtig für TM 1).
:::

## Rotationsvolumen

Dreht man den Graphen von $r(z)\ge0$, $z\in[a,b]$, um die $z$-Achse, entsteht ein Rotationskörper. Jede Scheibe der Dicke $\d z$ ist ein dünner Zylinder mit Volumen $\pi r(z)^2\,\d z$:
$$\boxed{V=\pi\int_a^br(z)^2\,\d z}\qquad\text{bzw. allgemein}\qquad V=\int_a^bq(z)\,\d z\quad(q=\text{Querschnittsfläche}).$$
(Prinzip von Cavalieri: Körper mit gleichen Querschnitten haben gleiches Volumen.)

:::bsp Grundkörper
- **Zylinder:** $r=R$ konstant: $V=\pi R^2h$.
- **Kegel:** $r(z)=\frac Rhz$: $V=\pi\frac{R^2}{h^2}\int_0^hz^2\d z=\frac13\pi R^2h$.
- **Kugel:** $r(z)=\sqrt{R^2-z^2}$, $z\in[-R,R]$: $V=\pi\int_{-R}^R(R^2-z^2)\d z=\pi\left(2R^3-\frac23R^3\right)=\frac43\pi R^3$.
- **Paraboloid:** $r(z)=\sqrt z$, $z\in[0,h]$: $V=\pi\frac{h^2}2$ (halbes umschreibendes Zylindervolumen).
:::

## Hohlkörper: Beispiel hohle Halbkugel

Gesucht: Volumen einer Halbkugelschale mit Außenradius $R_a$ und Innenradius $R_i$ ($R_a>R_i>0$). Volumen = äußerer Körper − innerer Körper.

**Variante 1** (Ursprung im Kugelmittelpunkt, $z^2+r^2=R^2$, also $r(z)=\sqrt{R^2-z^2}$, $z\in[0,R]$):
$$V=\pi\int_0^{R_a}(R_a^2-z^2)\,\d z-\pi\int_0^{R_i}(R_i^2-z^2)\,\d z=\pi\left(R_a^3-\tfrac13R_a^3\right)-\pi\left(R_i^3-\tfrac13R_i^3\right)=\frac23\pi\left(R_a^3-R_i^3\right).$$

**Variante 2** (Ursprung am „Pol", $(R-z)^2+r^2=R^2$, also $r(z)=\sqrt{2Rz-z^2}$, $z\in[0,R]$):
$$\pi\int_0^R(2Rz-z^2)\,\d z=\pi\left(R^3-\tfrac13R^3\right)=\tfrac23\pi R^3$$
– gleiches Ergebnis. Die Wahl des Koordinatensystems ändert das Volumen nicht, kann aber die Rechnung vereinfachen.

:::bsp Zahlenbeispiel
$R_a=10\,$cm, $R_i=9\,$cm: $V=\frac23\pi(1000-729)=\frac23\pi\cdot271\approx567{,}6\,$cm³. Bei Stahl ($\rho=7{,}85\,$g/cm³): $m\approx4{,}46\,$kg.
:::

:::rezept Hohlkörper
Bei Rotation einer Fläche zwischen $r_{außen}(z)$ und $r_{innen}(z)$: $V=\pi\int_a^b\left(r_a(z)^2-r_i(z)^2\right)\d z$ – **nicht** $\pi\int(r_a-r_i)^2$!
:::

## Ausblick: Weitere Anwendungen

| Größe | Formel |
|---|---|
| Bogenlänge von $y=f(x)$ | $L=\int_a^b\sqrt{1+f'(x)^2}\,\d x$ |
| Mantelfläche (Rotation um $x$-Achse) | $M=2\pi\int_a^bf(x)\sqrt{1+f'(x)^2}\,\d x$ |
| Flächenschwerpunkt | $x_S=\frac1A\int_a^bx\,f(x)\,\d x$, $y_S=\frac1{2A}\int_a^bf(x)^2\,\d x$ |
| Arbeit | $W=\int_{s_1}^{s_2}F(s)\,\d s$ |
| Mittelwert/Effektivwert | $\bar f=\frac1T\int_0^Tf$, $f_{eff}=\sqrt{\frac1T\int_0^Tf^2}$ |

Schwerpunkte brauchst du in **TM 1 §4**, Bogenlängen in **Mathe 2 (Kurven)**, Effektivwerte in **Elektrotechnik (Wechselstrom)**.

:::bsp Schwerpunkt der Fläche unter $y=x^2$ auf $[0,1]$
$A=\frac13$; $x_S=3\int_0^1x^3=\frac34$; $y_S=\frac32\int_0^1x^4=\frac3{10}$.
:::

## Aufgaben

:::aufgabe 1
Volumen des Körpers, der entsteht, wenn $y=\sqrt x$, $x\in[0,4]$, um die $x$-Achse rotiert.
:::loesung
$V=\pi\int_0^4x\,\d x=8\pi$.
:::
:::

:::aufgabe 2
Ein Rohr (Länge $L$) hat Außenradius $R$ und Wandstärke $t$. Volumen?
:::loesung
$V=\pi\int_0^L(R^2-(R-t)^2)\,\d z=\pi L(2Rt-t^2)$.
:::
:::

:::aufgabe 3
Volumen eines Kegelstumpfs (Radien $r_1,r_2$, Höhe $h$).
:::loesung
$r(z)=r_1+\frac{r_2-r_1}hz$. $V=\pi\int_0^hr(z)^2\d z=\frac{\pi h}3(r_1^2+r_1r_2+r_2^2)$.
:::
:::

:::aufgabe 4
Bogenlänge von $y=\cosh x$ auf $[0,1]$.
:::loesung
$\sqrt{1+\sinh^2x}=\cosh x$ ⇒ $L=\int_0^1\cosh x\,\d x=\sinh1\approx1{,}175$.
:::
:::

## Karteikarten

:::karte
Volumen eines Rotationskörpers um die $z$-Achse?
???
$V=\pi\int_a^br(z)^2\,\d z$
:::

:::karte
Volumen einer Halbkugelschale?
???
$\frac23\pi(R_a^3-R_i^3)$
:::

:::karte
Bogenlänge von $y=f(x)$?
???
$L=\int_a^b\sqrt{1+f'(x)^2}\,\d x$
:::
