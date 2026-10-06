---
title: 6.2 Torsion dünnwandiger Profile – Bredtsche Formeln (geschlossen), offene Profile
chapter: 6 Torsion
minutes: 120
sources: Technische Mechanik 2/tm2_06_torsion.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#190; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#199; Technische Mechanik 2/Uebung_07_Aufgaben.pdf
---

:::ziel
- Den konstanten **Schubfluss** $T=\tau t$ in geschlossenen Profilen verstehen.
- **1. und 2. Bredtsche Formel** anwenden ($\tau$, $I_T$, $\vartheta'$).
- Offene dünnwandige Profile mit $I_T=\frac13\sum h_it_i^3$ berechnen.
- Den dramatischen Unterschied **geschlossen ↔ geschlitzt** quantifizieren (Leichtbau, Flugzeugrumpf, Flügelkasten).
:::

## Dünnwandige geschlossene Profile

Annahmen: Wanddicke $t(s)\ll$ Umfang $l_m$, Querschnitt konstant, keine Normalspannungen aus Torsion; $\tau$ über die Wanddicke konstant.

**Gleichgewicht** an einem Wandelement in Längsrichtung ⇒
$$T=\tau(s)\,t(s)=\text{const}\qquad(\text{Schubfluss – „fließt" wie Wasser in einem Kanal}).$$

:::satz 1. Bredtsche Formel
$M_T=\oint r_\perp\,T\,\d s=T\cdot2A_m$ ($r_\perp\,\d s$ = doppelte Dreiecksfläche) ⇒
$$\tau(s)=\frac{M_T}{2A_m\,t(s)},\qquad\tau_{max}=\frac{M_T}{2A_mt_{min}}=\frac{M_T}{W_T},\quad W_T=2A_mt_{min}.$$
$A_m$ = von der **Profilmittellinie** eingeschlossene Fläche. Größte Spannung an der **dünnsten** Stelle.
:::

:::satz 2. Bredtsche Formel
Aus $\gamma=\frac\tau G$ und der Verträglichkeit (Längsverschiebung ringsum eindeutig):
$$\vartheta'=\frac{M_T}{4GA_m^2}\oint\frac{\d s}{t(s)}=\frac{M_T}{GI_T},\qquad I_T=\frac{4A_m^2}{\oint\frac{\d s}{t}}.$$
Konstante Wanddicke: $I_T=\frac{4A_m^2t}{l_m}$. Dünnes Rohr: $I_T=2\pi R_m^3t=I_p$ ✓.
:::

## Dünnwandige offene Profile

Bei offenen Profilen (L, T, U, I, geschlitztes Rohr) kann der Schubfluss nicht umlaufen – er fließt in jeder Wand **hin und zurück**, $\tau$ ändert sich linear über die Wanddicke (Rand: $\pm\tau_{max}$). Für ein schmales Rechteck $h\times t$ ($t\ll h$):
$$I_T=\frac13ht^3,\qquad W_T=\frac13ht^2.$$

:::satz Offene Profile aus Rechtecken
$$I_T=\frac13\sum_ih_it_i^3,\qquad W_T=\frac{I_T}{t_{max}},\qquad\tau_{max}=\frac{M_T}{I_T}t_{max}\ (\text{in der dicksten Wand}).$$
Variable Dicke: $I_T=\frac13\int t(s)^3\,\d s$.
:::

| | Kreis(ring) | dünnwandig geschlossen | dünnwandig offen |
|---|---|---|---|
| $I_T$ | $I_p$ | $\frac{4A_m^2}{\oint\d s/t}$ | $\frac13\sum h_it_i^3$ |
| $W_T$ | $\frac{I_p}{R_a}$ | $2A_mt_{min}$ | $\frac{I_T}{t_{max}}$ |
| Verwölbung | keine | gering | stark |

Für alle gilt $\vartheta'=\frac{M_T}{GI_T}$, $\tau_{max}=\frac{M_T}{W_T}$.

:::bsp Rohr mit und ohne Schlitz (Folienbeispiel)
Dünnes Rohr $R$, $t$, Länge $L$.
Geschlossen: $I_{T1}=2\pi R^3t$, $W_{T1}=2\pi R^2t$. Geschlitzt: $I_{T2}=\frac13(2\pi R)t^3$, $W_{T2}=\frac23\pi Rt^2$.
$$\frac{\vartheta_2}{\vartheta_1}=\frac{I_{T1}}{I_{T2}}=3\frac{R^2}{t^2},\qquad\frac{\tau_2}{\tau_1}=3\frac Rt.$$
$R/t=20$: **1200-mal** weicher, 60-mal höhere Spannung! Deshalb sind Flugzeugrümpfe und Flügelkästen **geschlossene** Röhren, und Ausschnitte (Türen, Fenster) müssen aufwendig verstärkt werden.
:::

:::achtung Wölbkrafttorsion
Offene Profile verwölben sich stark. Wird die Verwölbung (z. B. an einer Einspannung) behindert, entstehen zusätzliche Normalspannungen – nicht Teil von TM 2, aber praktisch relevant. Offene Profile möglichst nicht auf Torsion belasten!
:::

## Aufgaben

:::aufgabe 1 (Übung 7, Aufgabe 31 – Rollladenwelle)
Regelmäßiges Sechseck (Seite $s=20\,$mm, Wand $d=1{,}5\,$mm), $l=1{,}2\,$m, $M_T=3\,$Nm, $G=25\,500\,$MPa. (a) $\tau_{max}$, (b) $\vartheta'$ und $\vartheta$, (c) $\vartheta$ bei geschlitztem Profil.
:::loesung
$A_m=\frac{3\sqrt3}2s^2=1039\,$mm², $l_m=120\,$mm.
(a) $\tau=\frac{3000}{2\cdot1039\cdot1{,}5}=0{,}96\,$MPa.
(b) $I_T=\frac{4\cdot1039^2\cdot1{,}5}{120}=54\,000\,$mm⁴; $\vartheta'=\frac{3000}{25\,500\cdot54\,000}=2{,}18\cdot10^{-6}\,$/mm $=2{,}18\cdot10^{-3}\,$rad/m; $\vartheta=2{,}6\cdot10^{-3}\,$rad $=0{,}15°$.
(c) $I_T=\frac13\cdot120\cdot1{,}5^3=135\,$mm⁴ ⇒ $\vartheta=\frac{3000\cdot1200}{25\,500\cdot135}=1{,}05\,$rad $\approx60°$ – 400-mal mehr.
:::
:::

:::aufgabe 2 (Folienbeispiel – zweiteilige dünnwandige Welle)
Bei $A$ und $C$ eingespannt; Bereich $AB$ (Länge $a$): Quadrat (Seite $k$), Bereich $BC$ (Länge $b$): gleichseitiges Dreieck (Seite $k$), Wand $d$; $M_T$ bei $B$. (a) $I_{T1}$, $I_{T2}$; (b) Einspannmomente; (c) $\vartheta_B$; (d) $\tau_1$, $\tau_2$; (e) $a/b$ für gleiche $\tau_{max}$.
:::loesung
(a) $I_{T1}=\frac{4k^4d}{4k}=k^3d$; $A_{m2}=\frac{\sqrt3}4k^2$ ⇒ $I_{T2}=\frac{4\cdot\frac3{16}k^4d}{3k}=\frac{k^3d}4$.
(b) $M_A+M_C=M_T$, $\frac{M_Aa}{GI_{T1}}=\frac{M_Cb}{GI_{T2}}$ ⇒ $M_A=\frac{4b}{a+4b}M_T$, $M_C=\frac a{a+4b}M_T$.
(c) $\vartheta_B=\frac{M_Aa}{Gk^3d}=\frac{4abM_T}{(a+4b)Gk^3d}$.
(d) $\tau_1=\frac{M_A}{2k^2d}$, $\tau_2=\frac{M_C}{2\frac{\sqrt3}4k^2d}=\frac{2M_C}{\sqrt3k^2d}$.
(e) $\frac{M_A}2=\frac{2M_C}{\sqrt3}$ ⇒ $\frac{2b}a=\frac2{\sqrt3}$ ⇒ $\frac ab=\sqrt3$.
:::
:::

:::aufgabe 3
Kastenträger $200\times100\,$mm (Mittellinie), Wände oben/unten 4 mm, seitlich 2 mm; $M_T=5\,$kNm, $G=27\,$GPa. $\tau$ in den Wänden, $\vartheta'$?
:::loesung
$A_m=20\,000\,$mm²; $T=\frac{5\cdot10^6}{40\,000}=125\,$N/mm. $\tau_{oben}=31{,}3\,$MPa, $\tau_{seite}=62{,}5\,$MPa.
$\oint\frac{\d s}t=2\cdot\frac{200}4+2\cdot\frac{100}2=200$ ⇒ $I_T=\frac{4\cdot4\cdot10^8}{200}=8\cdot10^6\,$mm⁴; $\vartheta'=\frac{5\cdot10^6}{27\,000\cdot8\cdot10^6}=2{,}3\cdot10^{-5}\,$/mm $=1{,}3°$/m.
:::
:::

## Karteikarten

:::karte
1. Bredtsche Formel?
???
$\tau=\frac{M_T}{2A_mt}$ (Schubfluss $T=\tau t$ konstant).
:::

:::karte
2. Bredtsche Formel / $I_T$ geschlossen?
???
$\vartheta'=\frac{M_T}{GI_T}$, $I_T=\frac{4A_m^2}{\oint\d s/t}$
:::

:::karte
$I_T$ offener dünnwandiger Profile?
???
$\frac13\sum h_it_i^3$; $\tau_{max}$ in der dicksten Wand.
:::

:::karte
Steifigkeitsverhältnis geschlossenes / geschlitztes Rohr?
???
$3R^2/t^2$ (z. B. 1200 bei R/t = 20).
:::

:::karte
Was ist $A_m$?
???
Die von der Profilmittellinie umschlossene Fläche.
:::
