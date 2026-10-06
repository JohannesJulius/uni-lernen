---
title: 2.3 Dünnwandige Kessel und Festigkeitshypothesen (NH, SH/Tresca, GEH/von Mises)
chapter: 2 Grundlagen der Festigkeitslehre
minutes: 90
sources: Technische Mechanik 2/tm2_02_grundlagen.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#66; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#87
---

:::ziel
- Die **Kesselformeln** für Zylinder und Kugel aus dem Gleichgewicht herleiten.
- Erklären, warum Rohre/Würstchen **längs** aufplatzen.
- Sicherheitsfaktor, zulässige Spannung und **Vergleichsspannung** verstehen.
- Je nach Werkstoff die richtige **Festigkeitshypothese** wählen: Normalspannungs- (NH), Schubspannungs- (SH, Tresca), Gestaltänderungsenergiehypothese (GEH, von Mises).
:::

## Dünnwandiger zylindrischer Kessel

Zylinder mit Radius $r$, Wandstärke $t\ll r$, Innendruck $p$. Wegen $t\ll r$ sind die Spannungen über die Wanddicke konstant und die Radialspannung ($|\sigma_r|\le p$) ist vernachlässigbar ⇒ **ebener Spannungszustand** in der Wand.

**Schnitt 1 – senkrecht zur Achse (Längsspannung $\sigma_x$):** Der Druck wirkt auf die Kreisfläche $\pi r^2$, die Wand (Ringfläche $2\pi rt$) hält dagegen:
$$\sigma_x\cdot2\pi rt=p\cdot\pi r^2\ \Rightarrow\ \sigma_x=\frac{pr}{2t}.$$

**Schnitt 2 – längs durch die Achse (Umfangsspannung $\sigma_\varphi$):** Halbschale der Länge $\Delta l$. Druckkraft auf die projizierte Fläche $2r\Delta l$, gehalten von zwei Wandstreifen $t\Delta l$:
$$2\sigma_\varphi t\Delta l=p\cdot2r\Delta l\ \Rightarrow\ \sigma_\varphi=\frac{pr}{t}.$$

:::formel Kesselformeln (Barlow)
| | Umfangsspannung | Längs-/Meridianspannung |
|---|---|---|
| **Zylinder** | $\sigma_\varphi=\dfrac{pr}{t}$ | $\sigma_x=\dfrac{pr}{2t}=\tfrac12\sigma_\varphi$ |
| **Kugel** | $\sigma=\dfrac{pr}{2t}$ (in jeder Richtung, „hydrostatisch" in der Wand) | |

Schubspannungen treten in diesen Schnitten nicht auf ⇒ $\sigma_1=\sigma_\varphi$, $\sigma_2=\sigma_x$ sind **Hauptspannungen**. Größte Schubspannung in der Ebene: $\tau_{max}=\frac12(\sigma_1-\sigma_2)=\frac{pr}{4t}$ unter 45°.
Da $r/t\gg1$, ist $\sigma\gg p$ – die Vernachlässigung von $\sigma_r$ ist gerechtfertigt.
:::

:::merke Warum platzt das Würstchen längs?
Die Umfangsspannung ist **doppelt so groß** wie die Längsspannung ⇒ der Riss öffnet sich senkrecht zu $\sigma_\varphi$, also **in Längsrichtung**. Eine Kugel ist bei gleichem $r$ und $t$ doppelt so tragfähig wie ein Zylinder – deshalb haben Druckbehälter halbkugelförmige Böden, und Flugzeugrümpfe werden auf die Umfangsspannung aus dem Kabinendruck ausgelegt.
:::

:::bsp Gastank
$r=500\,$mm, $t=5\,$mm, $p=2\,$MPa: $\sigma_\varphi=\frac{2\cdot500}5=200\,$MPa, $\sigma_x=100\,$MPa, $\tau_{max}=50\,$MPa.
:::

## Auslegung: Sicherheit und zulässige Spannung

- Die tatsächliche Belastung muss unter der **ertragbaren** liegen. Ertragbar wird über Werkstoffkennwerte aus dem **Zugversuch** definiert (Streckgrenze $R_e$ bzw. $R_{p0,2}$, Zugfestigkeit $R_m$).
- Wegen Fertigungs- und Werkstofffehlern, Lastspitzen, Umwelteinflüssen fordert man eine **Sicherheit**
$$S=\frac{\sigma_{vers}}{\sigma_{zul}}>1\qquad(\text{Werte in Normen}).$$
- **Einachsig:** Nachweis direkt $|\sigma|\le\sigma_{zul}$.
- **Mehrachsig:** Welcher Wert ist mit $\sigma_{zul}$ zu vergleichen? → Die mehrachsigen Spannungen werden in eine fiktive einachsige **Vergleichsspannung** $\sigma_V$ umgerechnet:
$$\sigma_V\le\sigma_{zul}.$$
Wie man umrechnet, hängt vom **Versagensmechanismus** ab – das ist die Aufgabe der **Festigkeitshypothesen**.

## Die drei klassischen Festigkeitshypothesen

:::formel Normalspannungshypothese (NH, Rankine) – spröde Werkstoffe
Versagen durch **Trennbruch** senkrecht zur größten Hauptspannung (Grauguss, Keramik, Glas, Beton; auch Ermüdungsbrüche).
$$\sigma_V=\sigma_1=\frac{\sigma_x+\sigma_y}2+\sqrt{\left(\frac{\sigma_x-\sigma_y}2\right)^2+\tau_{xy}^2}\quad\overset{\text{Balken }(\sigma_y=0)}{=}\quad\frac\sigma2+\sqrt{\frac{\sigma^2}4+\tau^2}.$$
:::

:::formel Schubspannungshypothese (SH, Tresca) – zähe Werkstoffe, Fließen
Versagen durch **Gleiten/Fließen**, maßgebend ist die größte Schubspannung.
$$\sigma_V=2\tau_{max}=\sigma_1-\sigma_2=\sqrt{(\sigma_x-\sigma_y)^2+4\tau_{xy}^2}\quad\overset{\text{Balken}}{=}\quad\sqrt{\sigma^2+4\tau^2}.$$
:::

:::achtung Tresca im ebenen Zustand
Die Formel $\sigma_V=\sigma_1-\sigma_2$ gilt, wenn $\sigma_1$ und $\sigma_2$ **verschiedene Vorzeichen** haben. Sind beide positiv (z. B. Kessel), ist die dritte Hauptspannung $\sigma_3=0$ (senkrecht zur Ebene) zu berücksichtigen: $\sigma_V=\max(|\sigma_1-\sigma_2|,|\sigma_1|,|\sigma_2|)$. Beim Zylinderkessel also $\sigma_V=\sigma_\varphi=\frac{pr}t$, nicht $\frac{pr}{2t}$.
:::

:::formel Gestaltänderungsenergiehypothese (GEH, von Mises) – Standard für zähe/duktile Werkstoffe
Spannungen ändern Volumen **und** Gestalt; nur die **Gestaltänderungsenergie** schädigt. Standard für Stahl, Aluminium.
$$\sigma_V=\sqrt{\sigma_1^2+\sigma_2^2-\sigma_1\sigma_2}=\sqrt{\sigma_x^2+\sigma_y^2-\sigma_x\sigma_y+3\tau_{xy}^2}\quad\overset{\text{Balken}}{=}\quad\sqrt{\sigma^2+3\tau^2}.$$
Räumlich: $\sigma_V=\sqrt{\frac12[(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2]}$.
:::

| Hypothese | Werkstoff | eben | Balken ($\sigma$, $\tau$) | reiner Schub $\tau$ |
|---|---|---|---|---|
| NH | spröde | $\sigma_1$ | $\frac\sigma2+\sqrt{\frac{\sigma^2}4+\tau^2}$ | $\tau$ |
| SH (Tresca) | zäh, Fließen | $\sigma_1-\sigma_2$ | $\sqrt{\sigma^2+4\tau^2}$ | $2\tau$ |
| **GEH (von Mises)** | **zäh (Standard)** | $\sqrt{\sigma_1^2+\sigma_2^2-\sigma_1\sigma_2}$ | $\sqrt{\sigma^2+3\tau^2}$ | $\sqrt3\,\tau$ |

**Folgerung für Schub:** Nach GEH ist die zulässige Schubspannung $\tau_{zul}=\frac{\sigma_{zul}}{\sqrt3}\approx0{,}58\,\sigma_{zul}$, nach Tresca $0{,}5\,\sigma_{zul}$ (konservativer).

:::bsp Kessel nach GEH
Gastank von oben: $\sigma_1=200$, $\sigma_2=100$ MPa: $\sigma_V=\sqrt{200^2+100^2-200\cdot100}=\sqrt{30\,000}=173\,$MPa. Allgemein für den Zylinderkessel: $\sigma_V=\frac{\sqrt3}2\frac{pr}t$.
:::

## Aufgaben

:::aufgabe 1 (Übung 1, Aufgabe 4 b)
$\sigma_1=41{,}5\,$MPa, $\sigma_2=-15\,$MPa. Vergleichsspannung nach NH, GEH und Tresca?
:::loesung
NH: $\sigma_V=\sigma_1=41{,}5\,$MPa. GEH: $\sqrt{41{,}5^2+15^2+41{,}5\cdot15}=\sqrt{2570}=50{,}7\,$MPa. Tresca: $41{,}5+15=56{,}5\,$MPa (= $2\tau_{max}$).
:::
:::

:::aufgabe 2
Ein Druckluftbehälter aus Stahl ($\sigma_{zul}=160\,$MPa), $r=300\,$mm, $p=1{,}6\,$MPa. Erforderliche Wandstärke als Zylinder (GEH) und als Kugel?
:::loesung
Zylinder: $\frac{\sqrt3}2\frac{pr}t\le160$ ⇒ $t\ge\frac{0{,}866\cdot1{,}6\cdot300}{160}=2{,}6\,$mm. (Mit Tresca: $t\ge\frac{pr}{\sigma_{zul}}=3{,}0\,$mm.)
Kugel: $\sigma_1=\sigma_2=\frac{pr}{2t}$ ⇒ GEH $\sigma_V=\frac{pr}{2t}$ ⇒ $t\ge1{,}5\,$mm – halb so viel.
:::
:::

:::aufgabe 3
Eine Welle ist durch $\sigma=120\,$MPa (Biegung) und $\tau=50\,$MPa (Torsion) beansprucht. Vergleichsspannungen nach NH, Tresca und GEH?
:::loesung
NH: $60+\sqrt{3600+2500}=60+78{,}1=138\,$MPa. Tresca: $\sqrt{14\,400+10\,000}=156\,$MPa. GEH: $\sqrt{14\,400+7500}=148\,$MPa.
:::
:::

:::aufgabe 4
Warum verwendet man für Grauguss die NH und für Baustahl die GEH?
:::loesung
Grauguss ist spröde, versagt durch Trennbruch senkrecht zur größten Zugspannung – maßgebend $\sigma_1$. Baustahl ist zäh, versagt durch plastisches Fließen (Gleiten), das von der Gestaltänderung bzw. den Schubspannungen gesteuert wird – GEH stimmt mit Versuchen am besten überein.
:::
:::

## Karteikarten

:::karte
Kesselformeln Zylinder?
???
$\sigma_\varphi=\frac{pr}{t}$ (Umfang), $\sigma_x=\frac{pr}{2t}$ (längs).
:::

:::karte
Kesselformel Kugel?
???
$\sigma=\frac{pr}{2t}$ in jeder Richtung.
:::

:::karte
Warum reißen Rohre in Längsrichtung?
???
Umfangsspannung doppelt so groß wie Längsspannung; Riss öffnet sich senkrecht zu $\sigma_\varphi$.
:::

:::karte
Vergleichsspannung nach GEH (eben und Balken)?
???
$\sqrt{\sigma_x^2+\sigma_y^2-\sigma_x\sigma_y+3\tau_{xy}^2}$; Balken $\sqrt{\sigma^2+3\tau^2}$.
:::

:::karte
Vergleichsspannung nach Tresca?
???
$\sigma_V=2\tau_{max}=\sigma_1-\sigma_2$; Balken $\sqrt{\sigma^2+4\tau^2}$.
:::

:::karte
Welche Hypothese für welchen Werkstoff?
???
NH: spröde (Guss, Glas, Keramik). SH/Tresca: zäh, Fließen (konservativ). GEH/von Mises: zäh, Standard (Stahl, Alu).
:::

:::karte
Definition Sicherheitsfaktor?
???
$S=\sigma_{vers}/\sigma_{zul}>1$
:::
