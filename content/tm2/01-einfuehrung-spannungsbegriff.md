---
title: 1 Einführung – Aufgabe der Elastostatik, Spannungsbegriff, Spannungstensor
chapter: 1–2 Einführung & Spannungen
minutes: 75
sources: Technische Mechanik 2/tm2_01_intro.pdf; Technische Mechanik 2/tm2_02_grundlagen.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#48
---

:::ziel
- Verstehen, was TM 2 (Elastostatik) über TM 1 (Statik) hinaus leistet.
- Die Grundannahmen (kleine Verformungen, linear-elastisch, homogen, isotrop) kennen.
- Den **Spannungsvektor**, Normal- und Schubspannung, die **Indexschreibweise** und den **Spannungstensor** sicher beherrschen.
- Die **Gleichheit der zugeordneten Schubspannungen** begründen können.
:::

## Wo stehen wir?

| Gebiet | Körper | Frage |
|---|---|---|
| **Statik (TM 1)** | starr, in Ruhe | Welche Kräfte wirken (Lager, Schnittgrößen)? |
| **Elastostatik (TM 2)** | verformbar, in Ruhe | Wie stark wird das Material beansprucht (**Spannungen**) und wie stark verformt es sich (**Verformungen**)? |
| Dynamik (TM 3/4) | bewegt | Kinematik und Kinetik |

Aus TM 1 bleibt das wichtigste Werkzeug erhalten: das **Schnittprinzip**. Neu kommt hinzu, dass Kräfte nicht mehr linienflüchtig sind (wo eine Kraft angreift, verändert die Verformung) und dass wir mit Stoffgesetzen auch **statisch unbestimmte Systeme** lösen können.

:::merke Die drei Säulen der Elastostatik
1. **Gleichgewicht** (Statik, wie in TM 1)
2. **Kinematik / Verträglichkeit** (Geometrie: wie hängen Verschiebungen und Dehnungen zusammen?)
3. **Stoffgesetz** (Hooke: wie hängen Spannungen und Dehnungen zusammen?)

Für jede Aufgabe in TM 2 werden diese drei Gleichungsgruppen kombiniert.
:::

### Annahmen in TM 2
- **Kleine Verformungen** gegenüber den Abmessungen ⇒ Gleichgewicht darf am **unverformten** System aufgestellt werden (Theorie 1. Ordnung). Ausnahme: Knickung (Kapitel 7).
- **Linear-elastisches** Material: Verformungen proportional zur Last, verschwinden beim Entlasten.
- **Homogen** (überall gleich) und **isotrop** (richtungsunabhängig).
- Daraus folgt: das **Superpositionsprinzip** gilt – Lastfälle dürfen addiert werden.

### Die vier Leitbeispiele der Vorlesung
| Bauteil | Beanspruchung | Leitformel |
|---|---|---|
| Flugzeugtragfläche (Kragträger unter Streckenlast) | **Biegung** | $\sigma_x=\frac{M_y}{I_y}z$, $EI_yw''=-M_y$ |
| Antriebswelle | **Torsion** | $\tau=\frac{M_T}{I_p}r$, $\varphi=\frac{M_Tl}{GI_p}$ |
| Druckbehälter | **mehrachsiger Spannungszustand** | Kesselformel $\sigma_\varphi=\frac{pr}{t}$, von Mises |
| Hydraulikstange | **Knickung** | $F_K=\frac{\pi^2EI_{min}}{s^2}$ |

Diese vier Formeln sind der „rote Faden" – am Ende des Semesters sollst du jede davon herleiten und anwenden können.

## Der Spannungsbegriff

Schneidet man einen belasteten Körper, so wirken in der Schnittfläche **innere Kräfte**, flächig verteilt. Auf ein kleines Flächenelement $\Delta A$ wirkt die Kraft $\Delta\vec F$.

:::def Spannungsvektor
$$\vec t=\lim_{\Delta A\to0}\frac{\Delta\vec F}{\Delta A}=\frac{\d\vec F}{\d A}\qquad[\vec t]=\frac{\mathrm N}{\mathrm{mm}^2}=\mathrm{MPa}.$$
Zerlegt in
- **Normalspannung** $\sigma$: senkrecht zur Schnittfläche (Zug positiv, Druck negativ),
- **Schubspannung** $\tau$: tangential in der Schnittfläche.
:::

Die Spannung hängt **vom Ort und von der Schnittrichtung** ab! Im selben Punkt liefert ein schräger Schnitt andere $\sigma$ und $\tau$ als ein gerader (→ nächste Lektion).

Modellannahmen: **Kontinuum** (Material lückenlos verteilt), **Kohäsion** (keine Risse).

:::bsp Größenordnung
Ein Stahlseil mit $A=100\,\mathrm{mm}^2$ trägt $F=10\,$kN: $\sigma=\frac{F}{A}=100\,$MPa. Baustahl S235 fließt bei 235 MPa – Sicherheit $\approx2{,}35$.
:::

### Schnittgrößen in der Schnittfläche (Wiederholung TM 1)
Die Spannungen über eine Schnittfläche zusammengefasst liefern eine resultierende Kraft $\vec F_R$ und ein Moment $\vec M_R$ (bezogen auf den Schwerpunkt):
- $\vec F_R$ → **Normalkraft** $N$ (senkrecht) und **Querkraft** $Q$ (in der Fläche),
- $\vec M_R$ → **Torsionsmoment** $M_T$ (um die Normale) und **Biegemoment** $M_b$ (in der Fläche).

Jede Schnittgröße erzeugt typische Spannungen: $N$ → $\sigma$ (Kapitel 3), $M_b$ → $\sigma$ (Kapitel 5), $M_T$ → $\tau$ (Kapitel 6), $Q$ → $\tau$ (Ergänzung zu Kapitel 5).

## Indexschreibweise und Spannungstensor

Schneidet man aus dem Körper einen **infinitesimalen Würfel** mit Kanten parallel zu $x,y,z$, so wirken auf jeder Fläche eine Normal- und zwei Schubspannungen:

:::def Indexkonvention
$\tau_{xy}$: **1. Index** = Richtung der **Flächennormale** (Schnittfläche $\perp x$), **2. Index** = Richtung der **Spannung** (zeigt in $y$).
Normalspannungen: $\sigma_x=\sigma_{xx}$ usw.

**Vorzeichen:** Am **positiven** Schnittufer (Normale zeigt in $+$Koordinatenrichtung) zeigen positive Spannungen in $+$Richtung, am **negativen** Schnittufer in $-$Richtung.
:::

:::def Spannungstensor (Cauchy)
$$\boldsymbol\sigma=\begin{pmatrix}\sigma_x&\tau_{xy}&\tau_{xz}\\\tau_{yx}&\sigma_y&\tau_{yz}\\\tau_{zx}&\tau_{zy}&\sigma_z\end{pmatrix}$$
Er beschreibt den **Spannungszustand in einem Punkt** vollständig: Für jede Schnittrichtung mit Normalen-Einheitsvektor $\vec n$ gilt $\vec t=\boldsymbol\sigma^T\vec n$ (wegen Symmetrie $=\boldsymbol\sigma\vec n$).
Spannungen sind daher **keine Vektoren**, sondern **Tensoren 2. Stufe** – sie hängen von zwei Richtungen ab (Fläche und Kraft).
:::

### Gleichheit der zugeordneten Schubspannungen

:::satz
$$\tau_{xy}=\tau_{yx},\qquad\tau_{xz}=\tau_{zx},\qquad\tau_{yz}=\tau_{zy}.$$
Der Spannungstensor ist **symmetrisch** – er hat nur **6 unabhängige** Komponenten (3 Normal-, 3 Schubspannungen).
:::

:::beweis Momentengleichgewicht am Scheibenelement
Scheibenelement $\d x\times\d y$, Dicke $t$. Momente um den Mittelpunkt: Die Schubspannungen $\tau_{xy}$ an den senkrechten Kanten (Fläche $t\,\d y$) bilden ein Kräftepaar mit Hebel $\d x$, die $\tau_{yx}$ an den waagrechten Kanten (Fläche $t\,\d x$) eines mit Hebel $\d y$:
$$\tau_{xy}\,(t\,\d y)\,\d x-\tau_{yx}\,(t\,\d x)\,\d y=0\ \Rightarrow\ \tau_{xy}=\tau_{yx}.$$
(Zuwächse $\frac{\partial\tau}{\partial x}\d x$ liefern Terme höherer Ordnung und fallen weg.)
:::

**Anschaulich:** Schubspannungen treten immer **paarweise** an senkrecht aufeinander stehenden Flächen auf; sie zeigen entweder beide **auf die gemeinsame Kante zu** oder beide **von ihr weg**.

:::merke Welche Beanspruchung ist gefährlich?
Bauteile werden häufig nach Normalspannungen beurteilt. **Schweißnähte** und **Klebeverbindungen** sind aber besonders schubempfindlich – hier ist $\tau$ entscheidend.
:::

## Aufgaben

:::aufgabe 1
Ein Rundstab ($d=20\,$mm) wird mit $F=31{,}4\,$kN auf Zug belastet. Wie groß ist die Normalspannung im Querschnitt?
:::loesung
$A=\frac{\pi d^2}4=314\,\mathrm{mm}^2$, $\sigma=\frac{F}{A}=100\,$MPa.
:::
:::

:::aufgabe 2
Wie viele unabhängige Komponenten hat der räumliche Spannungstensor, wie viele der ebene? Begründe.
:::loesung
Räumlich 9 Einträge, wegen $\tau_{ij}=\tau_{ji}$ nur **6** unabhängig. Eben ($\sigma_z=\tau_{xz}=\tau_{yz}=0$): $\sigma_x,\sigma_y,\tau_{xy}$, also **3**.
:::
:::

:::aufgabe 3
An einem Element wirkt am rechten Rand ($+x$-Ufer) $\tau_{xy}=-20\,$MPa. In welche Richtung zeigt die Schubspannung dort, und in welche am linken Rand?
:::loesung
Rechts (positives Ufer): $-20$ MPa in $+y$ ⇒ zeigt **nach unten** ($-y$). Links (negatives Ufer): positive Richtung ist $-y$, also zeigt sie **nach oben**. Beide bilden zusammen ein Kräftepaar (im Uhrzeigersinn), das von $\tau_{yx}$ an oberer/unterer Kante ausgeglichen wird.
:::
:::

## Karteikarten

:::karte
Die drei Gleichungsgruppen der Elastostatik?
???
Gleichgewicht, Kinematik (Verträglichkeit), Stoffgesetz (Hooke).
:::

:::karte
Definition Spannung, Einheit?
???
$\vec t=\d\vec F/\d A$; Normalspannung σ ⟂ Fläche, Schubspannung τ in der Fläche; N/mm² = MPa.
:::

:::karte
Bedeutung der Indizes in $\tau_{xy}$?
???
1. Index: Flächennormale (Schnitt ⟂ x), 2. Index: Richtung der Spannung (y).
:::

:::karte
Satz von den zugeordneten Schubspannungen?
???
$\tau_{xy}=\tau_{yx}$ usw. (Momentengleichgewicht am Element) ⇒ Spannungstensor symmetrisch, 6 unabhängige Komponenten.
:::

:::karte
Annahmen der linearen Elastostatik?
???
Kleine Verformungen (Theorie 1. Ordnung), linear-elastisch, homogen, isotrop ⇒ Superposition erlaubt.
:::
