---
title: 6.1 Torsion von Wellen mit Kreis- und Kreisringquerschnitt
chapter: 6 Torsion
minutes: 110
sources: Technische Mechanik 2/tm2_06_torsion.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#177; Technische Mechanik 2/Uebung_07_Aufgaben.pdf
---

:::ziel
- Schubspannungsverteilung $\tau(r)=\frac{M_T}{I_p}r$ herleiten.
- Verdrehwinkel $\vartheta=\frac{M_Tl}{GI_p}$ und Torsionswiderstandsmoment $W_T$ berechnen.
- Wellen auslegen (Leistung, Drehzahl), Hohlwellen bewerten, statisch unbestimmte Wellen lösen.
:::

## Annahmen (Coulomb)
Gerade zylindrische Welle, linear-elastisch ($\tau=G\gamma$); **Querschnitte drehen sich wie starre Scheiben** und bleiben eben (gilt exakt nur für Kreis und Kreisring!). Zylinderkoordinaten: $x$ Achse, $r$ radial.

## Herleitung

**Kinematik:** Zwei Querschnitte im Abstand $\d x$ verdrehen sich gegeneinander um $\d\vartheta$. Eine Mantellinie im Radius $r$ wird um $\gamma$ geschert: $\gamma\,\d x=r\,\d\vartheta$ ⇒
$$\gamma=r\,\vartheta',\qquad\vartheta'=\frac{\d\vartheta}{\d x}\ (\text{Verwindung}).$$
**Stoffgesetz:** $\tau=G\gamma=Gr\vartheta'$ – linear in $r$.
**Äquivalenz:** $M_T=\int_Ar\,\tau\,\d A=G\vartheta'\int r^2\,\d A=GI_p\vartheta'$.

:::satz Torsion der Kreiswelle
$$\vartheta'=\frac{M_T}{GI_p},\qquad\tau(r)=\frac{M_T}{I_p}r,\qquad\tau_{max}=\frac{M_T}{W_T},\quad W_T=\frac{I_p}{R}.$$
Verdrehwinkel: $\vartheta(x)=\int_0^x\frac{M_T}{GI_p}\,\d\bar x$, bei konstanten Größen $\boxed{\vartheta=\frac{M_Tl}{GI_p}}$ (Bogenmaß!). $GI_p$ = **Torsionssteifigkeit**.
DGL mit Torsions-Streckenmoment $m_T$: $(GI_p\vartheta')'=-m_T$.
:::

| Querschnitt | $I_p$ | $W_T$ |
|---|---|---|
| Vollkreis $R$ ($d$) | $\frac{\pi R^4}2=\frac{\pi d^4}{32}$ | $\frac{\pi R^3}2=\frac{\pi d^3}{16}$ |
| Kreisring | $\frac\pi2(R_a^4-R_i^4)$ | $\frac{\pi(R_a^4-R_i^4)}{2R_a}$ |
| dünner Ring $R_m,t$ | $2\pi R_m^3t$ | $2\pi R_m^2t$ |

:::merke Konstruktive Folgerungen
- **Doppelter Durchmesser** ⇒ $\tau$ wird 8-mal kleiner, $\vartheta$ 16-mal kleiner.
- Das Material im Kern trägt kaum ⇒ **Hohlwellen** sparen viel Masse bei fast gleichem $W_T$ (Antriebswellen, Rotorwellen).
- Leistung: $P=M_T\,\omega$ ⇒ $M_T=\frac{P}{2\pi n}$ ($n$ in 1/s) $=\frac{30P}{\pi n}$ ($n$ in 1/min).
- Reiner Schub in der Mantelfläche ⇒ Hauptspannungen $\pm\tau$ unter 45° ⇒ **spröde** Werkstoffe (Kreide, Grauguss) brechen schraubenförmig unter 45°, zähe Werkstoffe glatt quer.
:::

:::bsp Abgesetzte Welle (Folienbeispiel)
Bereich I: Länge $L_1$, Durchmesser $d$; II: $L_2$, linear von $d$ auf $2d$; III: $L_3$, $2d$. Verdrehung von $B$ gegen $A$:
Bereich II: $d(x)=d(1+\frac x{L_2})$, $\int_0^{L_2}\frac{32\,\d x}{\pi d^4(1+x/L_2)^4}=\frac{32L_2}{\pi d^4}\cdot\frac13\left(1-\frac18\right)=\frac{32}{\pi d^4}\cdot\frac{7L_2}{24}$.
$$\vartheta_{AB}=\frac{32M_T}{\pi Gd^4}\left(L_1+\frac{7}{24}L_2+\frac{L_3}{16}\right).$$
:::

## Aufgaben

:::aufgabe 1 (Übung 7, Aufgabe 30)
Stahlrohrwelle $d_a=40$, $d_i=30\,$mm, $l=1\,$m, $G=80\,$GPa, $P=120\,$kW bei $4000\,$min⁻¹. (a) $M_T$, (b) $\tau_{max}$, (c) $\vartheta$, (d) Faktoren bei Aluminium ($G=25{,}5\,$GPa).
:::loesung
(a) $M_T=\frac{30\cdot120\,000}{\pi\cdot4000}=286{,}5\,$Nm.
(b) $I_p=\frac\pi{32}(40^4-30^4)=171\,800\,$mm⁴; $\tau_{max}=\frac{286\,500\cdot20}{171\,800}=33{,}4\,$MPa.
(c) $\vartheta=\frac{286\,500\cdot1000}{80\,000\cdot171\,800}=0{,}0208\,$rad $=1{,}19°$.
(d) $\tau_{max}$ unverändert (nur Geometrie!), $\vartheta$ um $\frac{80}{25{,}5}=3{,}14$ größer.
:::
:::

:::aufgabe 2
Vergleiche eine Vollwelle $d=40\,$mm mit einer Hohlwelle gleicher Masse und $d_a=50\,$mm: $W_T$?
:::loesung
Gleiche Fläche: $d_i^2=50^2-40^2=900$ ⇒ $d_i=30\,$mm. Voll: $W_T=\frac{\pi40^3}{16}=12\,570\,$mm³. Hohl: $\frac{\pi(50^4-30^4)}{16\cdot50}=21\,360\,$mm³ – 70 % mehr bei gleichem Gewicht.
:::
:::

:::aufgabe 3
Welle (Länge $a+b$, konstantes $GI_p$) an beiden Enden eingespannt, Moment $M_T$ an der Übergangsstelle. Einspannmomente?
:::loesung
Verträglichkeit: $\vartheta$ an der Lastangriffsstelle aus beiden Teilen gleich: $\frac{M_Aa}{GI_p}=\frac{M_Bb}{GI_p}$, Gleichgewicht $M_A+M_B=M_T$ ⇒ $M_A=\frac{b}{a+b}M_T$, $M_B=\frac a{a+b}M_T$ (der kürzere Teil trägt mehr).
:::
:::

## Karteikarten

:::karte
Schubspannung und Verdrehwinkel der Kreiswelle?
???
$\tau=\frac{M_T}{I_p}r$, $\tau_{max}=\frac{M_T}{W_T}$, $\vartheta=\frac{M_Tl}{GI_p}$
:::

:::karte
$I_p$ und $W_T$ der Vollwelle?
???
$\frac{\pi d^4}{32}$, $\frac{\pi d^3}{16}$
:::

:::karte
Torsionsmoment aus Leistung und Drehzahl (1/min)?
???
$M_T=\frac{30P}{\pi n}$
:::

:::karte
Warum Hohlwellen?
???
τ wächst linear mit r; der Kern trägt kaum – Hohlwellen sparen Masse bei fast gleicher Festigkeit/Steifigkeit.
:::

:::karte
Bruchbild spröder Werkstoffe bei Torsion?
???
Schraubenförmig unter 45° (senkrecht zur Hauptspannung σ1 = τ).
:::
