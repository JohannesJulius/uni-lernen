---
title: 5.6 Ergänzung – Schubspannungen durch Querkraft
chapter: 5 Technische Biegelehre
minutes: 60
sources: Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#145; Technische Mechanik 2/tm2_05_biegung.pdf
---

:::ziel
- Verstehen, dass Querkräfte Schubspannungen $\tau_{xz}$ im Querschnitt erzeugen.
- Die Formel $\tau(z)=\frac{Q\,S(z)}{I\,b(z)}$ anwenden (Rechteck, I-Profil).
- Einschätzen, wann Querkraftschub für die Auslegung wichtig ist.
:::

:::info
Auf den Folien wird der Querkraftschub nur als „Einfluss der Schubspannung" erwähnt; die Herleitung steht im Buch (Gross, TM 2, Abschnitt 4.6). Da du laut Plan „nichts weglassen" willst, ist sie hier kompakt aufbereitet.
:::

## Herleitung (Idee)

Schneidet man aus einem Balkenelement $\d x$ den Teil unterhalb der Höhe $z$ heraus, so sind die Normalspannungen links und rechts verschieden ($M$ ändert sich um $\d M=Q\,\d x$). Das Kräftegleichgewicht in $x$-Richtung verlangt eine Schubkraft in der Längsschnittfläche (Breite $b(z)$):
$$\tau\,b\,\d x=\frac{\d M}{I}\int_{A^*}\bar z\,\d A=\frac{Q\,\d x}{I}S(z).$$

:::satz Schubspannung aus Querkraft
$$\tau_{xz}(z)=\frac{Q\,S(z)}{I_y\,b(z)},\qquad S(z)=\int_{A^*}\bar z\,\d A\ \ (\text{statisches Moment der abgetrennten Fläche bzgl. der Schwerachse}).$$
Wegen $\tau_{xz}=\tau_{zx}$ ist $\tau$ am oberen und unteren Rand null.
:::

:::bsp Rechteck $b\times h$
$S(z)=\frac b2\left(\frac{h^2}4-z^2\right)$ ⇒ $\tau(z)=\frac{3Q}{2A}\left(1-\frac{4z^2}{h^2}\right)$ – Parabel, Maximum in der neutralen Faser:
$$\tau_{max}=\frac32\frac QA.$$
Kreis: $\tau_{max}=\frac43\frac QA$. Dünnwandiges I-Profil: Der Steg trägt fast die ganze Querkraft, $\tau_{max}\approx\frac{Q}{A_{Steg}}$.
:::

:::merke Wann wichtig?
Bei schlanken Balken ist $\tau_{max}\ll\sigma_{max}$ (Verhältnis ≈ $\frac h{L}$). Wichtig bei **kurzen, hohen** Trägern, dünnen Stegen, **Klebe- und Schweißnähten** in der Schwerachse (Längsschubkraft pro Länge $T=\frac{QS}I$ – z. B. Nietabstand bei genieteten Gurten im Flugzeugbau!), Holz (geringe Schubfestigkeit längs der Faser).
Zusätzlich: Liegt die Last nicht im **Schubmittelpunkt** (bei U-Profilen außerhalb des Querschnitts!), entsteht Torsion.
:::

## Aufgaben

:::aufgabe 1
Holzbalken $b=10$, $h=20\,$cm, Einfeldträger $l=4\,$m, $q=3\,$kN/m. $\tau_{max}$ und Vergleich mit $\sigma_{max}=9\,$MPa.
:::loesung
$Q_{max}=\frac{ql}2=6\,$kN; $\tau_{max}=1{,}5\cdot\frac{6000}{20\,000\,\mathrm{mm^2}}=0{,}45\,$MPa – 1/20 von $\sigma_{max}$.
:::
:::

:::aufgabe 2
Zwei Bretter ($100\times50$ mm) werden zu einem $100\times100$-Balken verleimt. $Q=10\,$kN. Schubspannung in der Leimfuge?
:::loesung
Fuge in der Schwerachse: $\tau=\tau_{max}=1{,}5\cdot\frac{10\,000}{10\,000}=1{,}5\,$MPa.
:::
:::

## Karteikarten

:::karte
Schubspannung aus Querkraft?
???
$\tau(z)=\frac{Q\,S(z)}{I\,b(z)}$
:::

:::karte
$\tau_{max}$ im Rechteck?
???
$\frac32\frac QA$ in der neutralen Faser.
:::
