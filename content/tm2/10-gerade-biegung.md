---
title: 5.1 Technische Biegelehre I – Bernoulli-Hypothese, gerade Biegung, Biegespannung, Widerstandsmoment
chapter: 5 Technische Biegelehre
minutes: 110
sources: Technische Mechanik 2/tm2_05_biegung.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#92
---

:::ziel
- Die **Bernoulli-Hypothese** und ihre Folgen (lineare Dehnungs- und Spannungsverteilung) verstehen.
- Die Biegespannung $\sigma=\frac{M_y}{I_y}z$ über die drei **Äquivalenzbeziehungen** herleiten.
- Mit dem **Widerstandsmoment** $W=\frac{I}{|z|_{max}}$ Bauteile dimensionieren.
- Biegung und Normalkraft überlagern.
:::

## Wozu?

Schlanke Bauteile (Balken) tragen Normalkräfte, Querkräfte, Biege- und Torsionsmomente. In fast allen Tragwerken – Brücken, Kranbahnen, **Flugzeugflügel** (einseitig eingespannter Kragträger unter Auftrieb) – ist die **Biegung** die dominierende Beanspruchung. Anders als beim Stab ist $\sigma$ über den Querschnitt **nicht konstant**: oben gestaucht, unten gedehnt (bei positivem $M_y$), dazwischen die **neutrale Faser**.

## Voraussetzungen

- Gerade oder schwach gekrümmte, **prismatische** Balken; homogener, isotroper, linear-elastischer Werkstoff.
- Zunächst **reine Biegung** (Querkraft-Schub später).
- **Bernoulli-Hypothese:** Querschnitte bleiben **eben** und **senkrecht** zur verformten Balkenachse.
- Querdehnung wird vernachlässigt; einachsiger Spannungszustand $\sigma_x$.

## Herleitung der Biegespannung

**Kinematik.** Ein Balkenelement krümmt sich zu einem Kreisbogen (Krümmungsradius $\rho$, Öffnungswinkel $\d\alpha$). Neutrale Faser: $\d s_0=\rho\,\d\alpha$; Faser im Abstand $z$: $\d s=(\rho+z)\,\d\alpha$. Also
$$\varepsilon(z)=\frac{\d s-\d s_0}{\d s_0}=\frac{z}{\rho}\qquad\text{– linear in }z.$$
**Stoffgesetz.** $\sigma=E\varepsilon=\frac E\rho z$ – ebenfalls linear.

**Äquivalenz** (die Spannungen müssen den Schnittgrößen entsprechen):
1. $N=\int\sigma\,\d A=\frac E\rho\int z\,\d A=0$ ⇒ $S_y=0$ ⇒ die **neutrale Faser geht durch den Schwerpunkt**.
2. $M_y=\int z\,\sigma\,\d A=\frac E\rho\int z^2\,\d A=\frac{EI_y}\rho$ ⇒ $\boxed{\frac1\rho=\frac{M_y}{EI_y}}$.
3. $M_z=-\int y\,\sigma\,\d A=-\frac E\rho\int yz\,\d A=\frac E\rho I_{yz}=0$ ⇒ nur erfüllt, wenn $I_{yz}=0$, d. h. **$y$ und $z$ sind Hauptachsen**.

:::satz Biegespannung bei gerader Biegung
$$\sigma(z)=\frac{M_y}{I_y}\,z\qquad(z\text{ vom Schwerpunkt, nach unten positiv}).$$
**Gerade Biegung** liegt vor, wenn der Momentenvektor mit einer **Hauptträgheitsachse** zusammenfällt. Die Spur der neutralen Schicht im Querschnitt heißt **Spannungsnulllinie (SNL)** – hier die $y$-Achse.
:::

:::merke Vorzeichen
Positives $M_y$ (TM 1: „unten gezogen", Bezugsfaser unten) ⇒ Zug für $z>0$ (unten), Druck oben. Bei Kragträgern (Flügel!) ist $M_y$ meist negativ: **oben Zug, unten Druck**.
:::

## Maximale Spannung und Widerstandsmoment

Die größte Spannung tritt in der **Randfaser** mit dem größten Abstand $|z|_{max}$ von der SNL auf, und zwar an der Stelle $x$ des betragsgrößten Moments:
$$|\sigma|_{max}=\frac{|M_y|_{max}}{I_y}|z|_{max}=\frac{|M_y|_{max}}{W_y},\qquad W_y=\frac{I_y}{|z|_{max}}.$$
**Dimensionierung:** $W_{erf}\ge\frac{|M|_{max}}{\sigma_{zul}}$.

| Querschnitt | $W_y$ |
|---|---|
| Rechteck $b\times h$ | $\frac{bh^2}6$ |
| Kreis $d$ | $\frac{\pi d^3}{32}$ |
| Rohr $d_a$, $d_i$ | $\frac{\pi(d_a^4-d_i^4)}{32d_a}$ |
| dünnes Rohr $R_m$, $t$ | $\pi R_m^2t$ |

:::achtung Unsymmetrische Querschnitte
Bei T- oder U-Profilen ist $|z|$ oben und unten verschieden ⇒ zwei Widerstandsmomente. Bei Werkstoffen mit unterschiedlicher Zug-/Druckfestigkeit (Guss) beide Ränder getrennt prüfen!
:::

:::bsp Rohr auf zwei Lagern mit Kragarm (Folienbeispiel, Geometrie wie skizziert angenommen)
Rohr ($d_a$, $d_i=\lambda d_a$), Länge $4a$: freies Ende links mit $F=qa$, nach $a$ das Lager $C$, nach weiteren $3a$ das Lager $B$; zwischen den Lagern Streckenlast $2q$.
Lager: $\sum M_C$: $B\cdot3a-6qa\cdot1{,}5a+qa\cdot a=0$ ⇒ $B=\frac83qa$, $C=7qa-B=\frac{13}3qa$.
Momente: über $C$: $M=-qa^2$; im Feld ($\xi$ ab $C$): $M(\xi)=-qa^2+\frac{10}3qa\xi-q\xi^2$, Maximum bei $\xi=\frac53a$: $M=\frac{16}9qa^2\approx1{,}78qa^2$ ⇒ $|M|_{max}=\frac{16}9qa^2$.
Dimensionierung: $W=\frac{\pi d_a^3}{32}(1-\lambda^4)\ge\frac{16qa^2}{9\sigma_{zul}}$ ⇒ $d_a\ge\sqrt[3]{\frac{512\,qa^2}{9\pi(1-\lambda^4)\sigma_{zul}}}$.
:::

## Biegung mit Normalkraft

Lineare Theorie ⇒ Spannungen addieren:
$$\sigma=\frac NA+\frac{M_y}{I_y}z.$$
Die SNL verschiebt sich aus dem Schwerpunkt heraus: $z_0=-\frac{N\,I_y}{A\,M_y}$. Exzentrische Normalkraft $N$ im Abstand $e$: zusätzliches Moment $M_y=N\,e$.

## Weitere Hinweise (Gültigkeit)
- **Stark gekrümmte Balken** ($h$ nicht $\ll\rho$): Spannung nichtlinear, SNL nicht im Schwerpunkt.
- **Breite Balken/Platten:** Querdehnung behindert ⇒ steifer.
- **Schichtwerkstoffe/Verbund:** SNL i. A. nicht im Schwerpunkt, Spannungssprünge an Materialgrenzen (→ Lektion Verbundquerschnitte).
- **Temperatur** erzeugt zusätzliche Dehnungen.

## Aufgaben

:::aufgabe 1
Ein Holzbalken $b=10\,$cm, $h=20\,$cm, Stützweite $l=4\,$m, Gleichstreckenlast $q=3\,$kN/m. $\sigma_{max}$? Wie ändert sich $\sigma_{max}$, wenn der Balken flach liegt?
:::loesung
$M_{max}=\frac{ql^2}8=6\,$kNm. Hochkant: $W=\frac{10\cdot20^2}6=667\,$cm³ ⇒ $\sigma=\frac{600\,000\,\mathrm{Ncm}}{667\,\mathrm{cm}^3}=900\,$N/cm² $=9\,$MPa. Flach: $W=\frac{20\cdot10^2}6=333\,$cm³ ⇒ 18 MPa (doppelt).
:::
:::

:::aufgabe 2
Kragträger (Länge $l=1{,}5\,$m, Stahl, $\sigma_{zul}=160\,$MPa) mit Einzellast $F=8\,$kN am Ende. Erforderlicher Durchmesser einer Vollwelle?
:::loesung
$|M|_{max}=Fl=12\,$kNm $=1{,}2\cdot10^7\,$Nmm. $W\ge\frac{1{,}2\cdot10^7}{160}=75\,000\,$mm³ $=\frac{\pi d^3}{32}$ ⇒ $d\ge91{,}4\,$mm.
:::
:::

:::aufgabe 3
T-Profil: Gurt $80\times10$ (oben), Steg $10\times70$; $M_y=+2\,$kNm. Spannungen an Ober- und Unterkante?
:::loesung
$A=800+700=1500$ mm²; $z'$ von oben: $z'_S=\frac{800\cdot5+700\cdot45}{1500}=23{,}7\,$mm.
$I_y=\frac{80\cdot10^3}{12}+800\cdot18{,}7^2+\frac{10\cdot70^3}{12}+700\cdot21{,}3^2=6667+279\,800+285\,800+317\,600\approx889\,800\,$mm⁴.
Oben ($z=-23{,}7$): $\sigma=\frac{2\cdot10^6}{889\,800}(-23{,}7)=-53\,$MPa; unten ($z=56{,}3$): $+127\,$MPa.
:::
:::

:::aufgabe 4
Ein Rechteckstab $20\times40$ mm (hochkant) trägt $N=16\,$kN Zug und $M_y=0{,}4\,$kNm. Randspannungen und Lage der SNL?
:::loesung
$\frac NA=20\,$MPa; $W=\frac{20\cdot40^2}6=5333\,$mm³ ⇒ $\frac MW=75\,$MPa. Unten $95\,$MPa, oben $-55\,$MPa. SNL: $20+\frac{4\cdot10^5}{106\,667}z=0$ ⇒ $z_0=-5{,}3\,$mm (über dem Schwerpunkt).
:::
:::

## Karteikarten

:::karte
Bernoulli-Hypothese?
???
Querschnitte bleiben eben und senkrecht zur verformten Balkenachse ⇒ Dehnung linear über die Höhe.
:::

:::karte
Biegespannung bei gerader Biegung?
???
$\sigma=\frac{M_y}{I_y}z$, maximal $\frac{M}{W}$ mit $W=\frac{I}{|z|_{max}}$.
:::

:::karte
Wodurch geht die neutrale Faser (ohne N)?
???
Durch den Flächenschwerpunkt (aus N = 0).
:::

:::karte
Krümmung und Biegemoment?
???
$\frac1\rho=\frac{M_y}{EI_y}$ (EI = Biegesteifigkeit).
:::

:::karte
Widerstandsmoment Rechteck und Kreis?
???
$W=\frac{bh^2}6$; $W=\frac{\pi d^3}{32}$.
:::

:::karte
Wann liegt gerade Biegung vor?
???
Wenn der Momentenvektor in Richtung einer Hauptträgheitsachse zeigt.
:::
