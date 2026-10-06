---
title: Kartesisches Produkt – Paare, ℝ², Rechtecke, Torus
chapter: 1 Grundlagen
minutes: 35
sources: Mathe 1/IngMath1_slides_1_basics_3_zahlenmengen_3_KartesischesProdukt (1).pdf; Mathe 1/IngMath1_worksheet_1_basics_3_zahlenmengen_kartprodukt.pdf
---

:::ziel
- Das kartesische Produkt $A\times B$ definieren und berechnen.
- Produkte von Intervallen als Rechtecke/Quader im $\R^2$/$\R^3$ zeichnen.
- Ausblick: Produkt von Kreisen (Torus) als Konfigurationsraum.
:::

## Definition

:::def Kartesisches Produkt
$$A\times B=\{(a,b)\mid a\in A\land b\in B\}$$
Die Elemente sind **geordnete Paare**: $(a,b)\ne(b,a)$ (außer $a=b$). Allgemein: $A_1\times\dots\times A_n=\{(a_1,\dots,a_n)\mid a_i\in A_i\}$ ($n$-Tupel) und $A^n=A\times\dots\times A$.
:::

Es gilt $|A\times B|=|A|\cdot|B|$.

:::bsp
$A=\{a,b,c\}$, $B=\{x,y,z\}$:

| × | a | b | c |
|---|---|---|---|
| x | (a,x) | (b,x) | (c,x) |
| y | (a,y) | (b,y) | (c,y) |
| z | (a,z) | (b,z) | (c,z) |

9 Paare. Ebenso $\{1,2\}\times\{x,y\}=\{(1,x),(1,y),(2,x),(2,y)\}$.
:::

## Produkte von Intervallen

- $\R^2=\R\times\R$ ist die Ebene, $\R^3$ der Raum (Koordinaten).
- $[0{,}5;1]\times[0{,}5;1]$ ist ein **Quadrat** mit Ecken $(0{,}5;0{,}5)$ und $(1;1)$.
- $[0{,}5;1]\times[0;1]$ und $[0{,}5;1]\times[-1;1]$ sind Rechtecke (erste Komponente = $x$, zweite = $y$).
- $[0,1]\times[-1,1]$ ist ein hohes, $[-1,1]\times[0,1]$ ein breites Rechteck – Reihenfolge zählt!
- $[0,1]^3=[0,1]\times[0,1]\times[0,1]$ ist der **Einheitswürfel**.

<figure><svg class="fig" viewBox="0 0 520 190" width="520" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="12" stroke="currentColor" fill="none">
<g transform="translate(20,95)"><path d="M0 0 H200 M100 -85 V85" stroke-width="1"/><rect x="100" y="-80" width="60" height="160" fill="#3b6fd8" fill-opacity=".35" stroke="#3b6fd8"/><text x="105" y="-60" fill="currentColor" stroke="none">[0,1]×[−1,1]</text><text x="160" y="14" fill="currentColor" stroke="none">1</text><text x="104" y="-82" fill="currentColor" stroke="none" font-size="10">1</text></g>
<g transform="translate(290,95)"><path d="M0 0 H200 M100 -85 V85" stroke-width="1"/><rect x="40" y="-60" width="120" height="60" fill="#d9822b" fill-opacity=".35" stroke="#d9822b"/><text x="42" y="-66" fill="currentColor" stroke="none">[−1,1]×[0,1]</text></g>
</svg><figcaption>Erste Komponente auf der x-Achse, zweite auf der y-Achse (Maßstab: 1 = 60 px)</figcaption></figure>

## Ausblick: Kreis × Kreis = Torus

Der Einheitskreis $S^1=\{(x,y)\in\R^2\mid x^2+y^2=1\}=\{(\cos\varphi,\sin\varphi)\mid\varphi\in[0,2\pi)\}$.

$S^1\times S^1\subset\R^2\times\R^2$ lässt sich durch zwei Winkel $(\varphi,\psi)$ beschreiben. Die Abbildung
$$(\varphi,\psi)\mapsto\begin{pmatrix}(R+r\cos\varphi)\cos\psi\\(R+r\cos\varphi)\sin\psi\\ r\sin\varphi\end{pmatrix}$$
bettet das Produkt für $R>r$ injektiv als **Torus** (Donut) in den $\R^3$ ein.

:::info Anwendung: Konfigurationsraum
Die Stellung eines **Doppelpendels** oder eines **Roboterarms mit zwei Drehgelenken** wird durch zwei Winkel beschrieben – der Raum aller Stellungen ist genau $S^1\times S^1$, ein Torus. (Das Doppelpendel kommt in Mathe 2 bei den Differentialgleichungen wieder!)
:::

## Aufgaben

:::aufgabe 1
Berechne $\{0,1\}^3$. Wie viele Elemente hat es? Was ist eine technische Deutung?
:::loesung
$\{(0,0,0),(0,0,1),(0,1,0),(0,1,1),(1,0,0),(1,0,1),(1,1,0),(1,1,1)\}$ – $2^3=8$ Elemente. Deutung: alle Schalterstellungen von 3 Schaltern = Zeilen einer Wahrheitstafel mit 3 Aussagen.
:::
:::

:::aufgabe 2
Skizziere $[0,1]\times[0,1]$, $[0,1]\times[-1,1]$, $[-1,1]\times[0,1]$ und $\R\times\{2\}$.
:::loesung
Einheitsquadrat; Rechteck $x\in[0,1]$, $y\in[-1,1]$ (hoch); Rechteck $x\in[-1,1]$, $y\in[0,1]$ (breit); $\R\times\{2\}$ ist die waagrechte Gerade $y=2$.
:::
:::

:::aufgabe 3
Ist $A\times B=B\times A$?
:::loesung
Im Allgemeinen nein: $(a,b)\ne(b,a)$. Gleichheit gilt nur, wenn $A=B$ oder eine der Mengen leer ist.
:::
:::

## Karteikarten

:::karte
Definition kartesisches Produkt $A\times B$? Mächtigkeit?
???
$\{(a,b)\mid a\in A, b\in B\}$ (geordnete Paare); $|A\times B|=|A|\cdot|B|$.
:::

:::karte
Was ist $[0,1]^3$?
???
Der Einheitswürfel im $\R^3$.
:::

:::karte
Welcher geometrische Körper entsteht aus $S^1\times S^1$?
???
Ein Torus – z. B. Konfigurationsraum eines Doppelpendels/2-Gelenk-Roboters.
:::
