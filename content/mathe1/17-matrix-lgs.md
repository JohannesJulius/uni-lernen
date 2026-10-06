---
title: Matrizen & LGS in a Nutshell – Lösbarkeit über den Rang, Zeilenumformungen als Matrizen
chapter: 2 Lineare Algebra
minutes: 60
sources: Mathe 1/IngMath1_slides_2_linalg_05_matrizen_3_MatrixLGS_NUTSHELL.pdf; Mathe 1/IngMath1_slides_2_linalg_06_matrizen_4_MatrixLGS_ZeilenMatrixOperationen_OPTIONAL.pdf; Mathe 1/IngMath1_slides_2_linalg_UE_Matrizen_LGS.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#143
---

:::ziel
- LGS in Matrix-Vektor-Form $A\vec x=\vec b$ und die Lösbarkeit über $\Rang A$ und $\Rang(A\mid\vec b)$ beurteilen.
- Zusammenhang Kern ↔ homogenes LGS, Bild ↔ Lösbarkeit.
- (Optional) Zeilenumformungen als Multiplikation mit Elementarmatrizen.
:::

## Homogene LGS: $A\vec x=\vec0$

- Lösungsmenge $=\Kern A$, ein Untervektorraum des $\R^n$.
- $\vec x=\vec0$ ist immer Lösung (triviale Lösung).
- $\dim\Kern A=n-\Rang A$ = Anzahl freier Parameter.
- Nur triviale Lösung ⇔ $\Rang A=n$ ⇔ Spalten linear unabhängig.

## Inhomogene LGS: $A\vec x=\vec b$

$A\vec x=x_1\vec a_1+\dots+x_n\vec a_n$ (Spalten $\vec a_j$). Also: **lösbar ⇔ $\vec b$ ist Linearkombination der Spalten ⇔ $\vec b\in\Bild A$.**

:::satz Lösbarkeitskriterium (Rangkriterium)
| Bedingung | Lösungen |
|---|---|
| $\Rang A<\Rang(A\mid\vec b)$ | **keine** ($\vec b\notin\Bild A$) |
| $\Rang A=\Rang(A\mid\vec b)=n$ | **genau eine** ($\Kern A=\{\vec0\}$) |
| $\Rang A=\Rang(A\mid\vec b)<n$ | **unendlich viele**, $n-\Rang A$ freie Parameter |
:::

Der Rang der erweiterten Matrix ist größer genau dann, wenn beim Gauß eine Zeile $(0\cdots0\mid c\ne0)$ entsteht.

:::satz Lösungsmenge
Sind $\vec x_1,\vec x_2$ Lösungen, so ist $\vec x_1-\vec x_2\in\Kern A$. Ist $\vec x_p$ eine Lösung, so ist
$$L=\{\vec x_p+\vec x_0\mid\vec x_0\in\Kern A\}=\vec x_p+\Kern A.$$
:::

:::merke Quadratische Matrizen ($n\times n$)
Folgende Aussagen sind **äquivalent**:
1. $A\vec x=\vec b$ ist für jedes $\vec b$ eindeutig lösbar.
2. $A\vec x=\vec0$ hat nur die triviale Lösung.
3. $\Rang A=n$.
4. Die Spalten (Zeilen) sind linear unabhängig.
5. $A$ ist invertierbar (nächste Woche).
6. $\det A\ne0$ (nächste Woche).
:::

## Zeilenumformungen als Matrixmultiplikation (optional)

Jede elementare Zeilenumformung entspricht der Multiplikation **von links** mit einer **Elementarmatrix** (= Einheitsmatrix, auf die man dieselbe Umformung angewandt hat):

| Umformung (2×2) | Matrix |
|---|---|
| Zeilen tauschen | $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$: $PA=\begin{pmatrix}a_{21}&a_{22}\\a_{11}&a_{12}\end{pmatrix}$ |
| Zeile 1 mal $\mu\ne0$ | $\begin{pmatrix}\mu&0\\0&1\end{pmatrix}$ |
| Zeile 2 mal $\nu\ne0$ | $\begin{pmatrix}1&0\\0&\nu\end{pmatrix}$ |
| Zeile 2 − $\frac{a_{21}}{a_{11}}$·Zeile 1 | $L=\begin{pmatrix}1&0\\-\frac{a_{21}}{a_{11}}&1\end{pmatrix}$: $LA=\begin{pmatrix}a_{11}&a_{12}\\0&a_{22}-\frac{a_{21}a_{12}}{a_{11}}\end{pmatrix}$ |

Für $4\times4$ analog, z. B. „Zeile 4 + ν·Zeile 2": $E$ mit zusätzlichem Eintrag $\nu$ an Position $(4,2)$. Tausch Zeile 1 und 3: $E$ mit vertauschten Zeilen 1 und 3.

Wendet man dieselben Matrizen auf $\vec b$ an, wird die rechte Seite korrekt mittransformiert: $A\vec x=\vec b\iff (MA)\vec x=M\vec b$ für invertierbares $M$. Vorteil: Man kann über die Umformungen „Buch führen" und sie auf **mehrere rechte Seiten** anwenden – Grundlage der **LU-Zerlegung** (Numerik!).

## Übungsaufgaben (aus dem UE-Foliensatz)

:::aufgabe 1
Löse $A\vec x=\vec b$ mit $A=\begin{pmatrix}1&2&1\\2&5&3\\1&3&3\end{pmatrix}$, $\vec b=\begin{pmatrix}2\\5\\5\end{pmatrix}$ und bestimme $\Rang A$.
:::loesung
$\left(\begin{array}{ccc|c}1&2&1&2\\2&5&3&5\\1&3&3&5\end{array}\right)\to\left(\begin{array}{ccc|c}1&2&1&2\\0&1&1&1\\0&1&2&3\end{array}\right)\to\left(\begin{array}{ccc|c}1&2&1&2\\0&1&1&1\\0&0&1&2\end{array}\right)$.
$x_3=2$, $x_2=-1$, $x_1=2+2-2=2$. $\vec x=(2,-1,2)^T$, $\Rang A=3$.
:::
:::

:::aufgabe 2
Für welche $t$ ist $\left(\begin{array}{ccc|c}1&1&1&1\\1&2&3&2\\2&3&4&t\end{array}\right)$ lösbar? Gib dann die Lösungsmenge an.
:::loesung
$Z_2-Z_1=(0,1,2|1)$, $Z_3-2Z_1=(0,1,2|t-2)$, $Z_3-Z_2=(0,0,0|t-3)$. Lösbar ⇔ $t=3$. Dann $x_3=s$, $x_2=1-2s$, $x_1=1-x_2-x_3=s$. $L=\{(0,1,0)^T+s(1,-2,1)^T\}$.
:::
:::

:::aufgabe 3
Schreibe die Umformung „Zeile 3 ← Zeile 3 − 2·Zeile 1" für eine $3\times3$-Matrix als Elementarmatrix.
:::loesung
$\begin{pmatrix}1&0&0\\0&1&0\\-2&0&1\end{pmatrix}$
:::
:::

:::aufgabe 4 – Lösungsmenge über Kern + partikuläre Lösung
(a) $A=\begin{pmatrix}1&-1\\0&0\end{pmatrix}$, $\vec b=\begin{pmatrix}11\\0\end{pmatrix}$. (b) $A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$, $\vec b=\begin{pmatrix}5\\3\end{pmatrix}$.
:::loesung
(a) $\Kern A=\{s(1,1)^T\}$, $\vec x_p=(11,0)^T$, $L=\{(11,0)^T+s(1,1)^T\}$.
(b) $\Kern A=\{s(1,-1,1)^T\}$, $\vec x_p=(5,0,3)^T$ (Probe: $5+0=5$, $0+3=3$ ✓), $L=\{(5,0,3)^T+s(1,-1,1)^T\}$.
:::
:::

:::aufgabe 5 – Kern, Bild, Rang ablesen
Bestimme Kern, Bild und Rang von $\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $\begin{pmatrix}1&1\\0&1\\0&2\end{pmatrix}$, $\begin{pmatrix}1&1\\1&1\\2&2\end{pmatrix}$, $\begin{pmatrix}1&1&1\\0&0&0\end{pmatrix}$.
:::loesung
- $\begin{pmatrix}1&1\\0&1\end{pmatrix}$: Kern $\{\vec0\}$, Rang 2, Bild $\R^2$.
- $\begin{pmatrix}1&1\\0&1\\0&2\end{pmatrix}$: Kern $\{\vec0\}$, Rang 2, Bild $\{(s+t,\ t,\ 2t)^T\}$ – eine Ebene im $\R^3$.
- $\begin{pmatrix}1&1\\1&1\\2&2\end{pmatrix}$: Kern $\{s(1,-1)^T\}$, Rang 1, Bild $\{s(1,1,2)^T\}$ – eine Gerade.
- $\begin{pmatrix}1&1&1\\0&0&0\end{pmatrix}$: Kern $\{(-(s+t),s,t)^T\}$ (2-dim.), Rang 1, Bild $\{(s,0)^T\}$.
Dimensionsformel jeweils erfüllt: $0+2=2$, $0+2=2$, $1+1=2$, $2+1=3$.
:::
:::

:::aufgabe 6 – Liegt ein Vektor im Bild?
$A=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$: Liegen $(2,1)^T$, $(3,3)^T$ im Bild? Und bei $A=\begin{pmatrix}1&-1\\1&-1\end{pmatrix}$: $(2,1)^T$, $(2,2)^T$?
:::loesung
Erste Matrix: $\det=-2\ne0$ ⇒ invertierbar ⇒ Bild $=\R^2$, beide liegen drin, Kern $=\{\vec0\}$. (Z. B. $(3,3)^T=A(3,0)^T$.)
Zweite Matrix: Bild $=\{s(1,1)^T\}$ ⇒ $(2,1)^T$ nein, $(2,2)^T$ ja ($=A(2,0)^T$). Kern $=\{s(1,1)^T\}$.
:::
:::

## Karteikarten

:::karte
Rangkriterium für die Lösbarkeit von $A\vec x=\vec b$?
???
Lösbar ⇔ $\Rang A=\Rang(A|\vec b)$. Eindeutig, wenn zusätzlich Rang $=n$; sonst $n-\Rang A$ freie Parameter.
:::

:::karte
Wann ist $A\vec x=\vec b$ lösbar (geometrisch)?
???
Wenn $\vec b\in\Bild A$, d. h. $\vec b$ Linearkombination der Spalten von $A$ ist.
:::

:::karte
Wie kann man eine Zeilenumformung als Matrix schreiben?
???
Dieselbe Umformung auf die Einheitsmatrix anwenden → Elementarmatrix $M$; dann ist $MA$ die umgeformte Matrix.
:::
