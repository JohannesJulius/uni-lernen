---
title: Inverse Matrizen – Invertierbarkeit & Gauß-Jordan
chapter: 2 Lineare Algebra
minutes: 75
sources: Mathe 1/IngMath1_slides_2_linalg_09_matrizen_inverse_determinante.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#150
---

:::ziel
- Verstehen, wann eine quadratische Matrix invertierbar ist (Bijektivität, Rang, Determinante).
- Inverse mit dem **Gauß-Jordan-Verfahren** berechnen; Formel für $2\times2$.
- Rechenregeln: $(AB)^{-1}=B^{-1}A^{-1}$, $(A^T)^{-1}=(A^{-1})^T$; LGS mit $A^{-1}$ lösen.
:::

## Motivation: Komplexe Zahlen als Matrizen

Die Matrizen der Form $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ verhalten sich genau wie $a+\mathrm ib$: Addition und Multiplikation passen zusammen ($\varphi(a+\mathrm ib)=\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ ist ein Isomorphismus). In dieser Menge ist die Multiplikation **kommutativ**, $E$ ist neutral, und jede Matrix außer $0$ hat ein Inverses:
$$\begin{pmatrix}a&-b\\b&a\end{pmatrix}\cdot\frac1{a^2+b^2}\begin{pmatrix}a&b\\-b&a\end{pmatrix}=E.$$
**Frage:** Welche dieser Eigenschaften gelten allgemein für Matrizen? **Antwort:** Nur das neutrale Element $E_n$ (für quadratische Matrizen). Kommutativität fehlt, und viele Matrizen haben **kein** Inverses, z. B. $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ (für jedes $X$ ist die zweite Zeile von $\begin{pmatrix}1&0\\0&0\end{pmatrix}X$ null, kann also nie $E$ sein).

## Definition und Kriterien

:::def Inverse Matrix
$A\in\R^{n\times n}$ heißt **invertierbar** (regulär), wenn es $A^{-1}\in\R^{n\times n}$ gibt mit
$$AA^{-1}=A^{-1}A=E_n.$$
Andernfalls heißt $A$ **singulär**. Die Inverse ist eindeutig.
:::

Geometrisch: $A$ ist eine lineare Abbildung $\R^n\to\R^n$; umkehrbar heißt **bijektiv**. Dann löst $\vec x=A^{-1}\vec b$ das LGS $A\vec x=\vec b$.

:::satz Invertierbarkeitskriterien (alle äquivalent)
$A$ invertierbar $\iff\Rang A=n\iff\Kern A=\{\vec0\}\iff$ Spalten linear unabhängig $\iff A\vec x=\vec b$ für jedes $\vec b$ eindeutig lösbar $\iff\det A\ne0$.
:::

:::satz Rechenregeln
- $(A^{-1})^{-1}=A$
- $(AB)^{-1}=B^{-1}A^{-1}$ (Reihenfolge dreht sich – „Socken und Schuhe")
- $(A^T)^{-1}=(A^{-1})^T$
- $(\lambda A)^{-1}=\frac1\lambda A^{-1}$
- $\det(A^{-1})=\frac1{\det A}$
:::

## Gauß-Jordan-Verfahren

$AX=E$ sind $n$ LGS gleichzeitig (eines pro Spalte von $X$), alle mit derselben Matrix $A$. Darum schreibt man alle rechten Seiten zusammen:

:::rezept Inverse mit Gauß-Jordan
1. Schreibe $(A\mid E)$.
2. Bringe die linke Seite mit Zeilenumformungen auf **Zeilenstufenform** (Nullen unter der Diagonale).
3. Mache weiter (Jordan-Teil): Nullen **über** der Diagonale erzeugen und jede Zeile durch ihr Diagonalelement teilen, bis links $E$ steht.
4. Rechts steht dann $A^{-1}$: $(A\mid E)\to(E\mid A^{-1})$.
5. Entsteht links eine Nullzeile, ist $A$ **nicht** invertierbar.
6. **Probe:** $AA^{-1}=E$.
:::

:::bsp $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$
$$\left(\begin{array}{cc|cc}1&1&1&0\\0&1&0&1\end{array}\right)\xrightarrow{Z_1-Z_2}\left(\begin{array}{cc|cc}1&0&1&-1\\0&1&0&1\end{array}\right)\Rightarrow A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}.$$
(Als 4 einzelne Gleichungen: $x_{11}+x_{21}=1$, $x_{21}=0$, $x_{12}+x_{22}=0$, $x_{22}=1$ – gleiches Ergebnis.)
:::

:::bsp $3\times3$
$$A=\begin{pmatrix}1&2&0\\0&1&1\\1&0&1\end{pmatrix}:\ \left(\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&1&0&1&0\\1&0&1&0&0&1\end{array}\right)\xrightarrow{Z_3-Z_1}\left(\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&1&0&1&0\\0&-2&1&-1&0&1\end{array}\right)$$
$$\xrightarrow{Z_3+2Z_2}\left(\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&1&0&1&0\\0&0&3&-1&2&1\end{array}\right)\xrightarrow{Z_3/3}\left(\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&1&0&1&0\\0&0&1&-\frac13&\frac23&\frac13\end{array}\right)$$
$$\xrightarrow{Z_2-Z_3}\left(\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&0&\frac13&\frac13&-\frac13\\0&0&1&-\frac13&\frac23&\frac13\end{array}\right)\xrightarrow{Z_1-2Z_2}\left(\begin{array}{ccc|ccc}1&0&0&\frac13&-\frac23&\frac23\\0&1&0&\frac13&\frac13&-\frac13\\0&0&1&-\frac13&\frac23&\frac13\end{array}\right)$$
$A^{-1}=\frac13\begin{pmatrix}1&-2&2\\1&1&-1\\-1&2&1\end{pmatrix}$. Probe Zeile 1 von $A$ mal Spalte 1: $\frac13(1+2+0)=1$ ✓.
:::

## Die Formel für 2×2-Matrizen

Gauß-Jordan allgemein für $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ (mit $a\ne0$) ergibt:

:::formel Inverse einer 2×2-Matrix
$$A^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix},\qquad\text{existiert genau dann, wenn }\det A=ad-bc\ne0.$$
**Merke:** Diagonale tauschen, Nebendiagonale negieren, durch Determinante teilen.
:::

Probe: $\frac1{ad-bc}\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}=\frac1{ad-bc}\begin{pmatrix}ad-bc&0\\0&ad-bc\end{pmatrix}=E$ ✓.

:::bsp
$\begin{pmatrix}2&1\\5&3\end{pmatrix}^{-1}=\frac1{6-5}\begin{pmatrix}3&-1\\-5&2\end{pmatrix}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$.
:::

:::achtung
- Nur **quadratische** Matrizen können (beidseitig) invertierbar sein.
- $(A+B)^{-1}\ne A^{-1}+B^{-1}$!
- Zum Lösen eines einzelnen LGS ist Gauß schneller als erst $A^{-1}$ zu berechnen. $A^{-1}$ lohnt sich bei vielen rechten Seiten oder für theoretische Umformungen.
:::

## Aufgaben

:::aufgabe 1
Invertiere $\begin{pmatrix}4&7\\2&6\end{pmatrix}$ und $\begin{pmatrix}1&2\\2&4\end{pmatrix}$.
:::loesung
$\det=24-14=10$: $\frac1{10}\begin{pmatrix}6&-7\\-2&4\end{pmatrix}$. Die zweite hat $\det=4-4=0$ ⇒ singulär (Zeilen linear abhängig).
:::
:::

:::aufgabe 2
Invertiere $A=\begin{pmatrix}2&0&0\\0&3&0\\0&0&-1\end{pmatrix}$ und $B=\begin{pmatrix}1&0&0\\2&1&0\\3&0&1\end{pmatrix}$.
:::loesung
$A^{-1}=\operatorname{diag}(\frac12,\frac13,-1)$ (Diagonalelemente einzeln invertieren). $B^{-1}=\begin{pmatrix}1&0&0\\-2&1&0\\-3&0&1\end{pmatrix}$ (Elementarmatrix: Vorzeichen der Einträge unter der Diagonale umdrehen – gilt, weil nur eine Spalte besetzt ist).
:::
:::

:::aufgabe 3
Löse mit der Inversen aus dem $3\times3$-Beispiel: $A\vec x=(3,2,2)^T$.
:::loesung
$\vec x=A^{-1}\vec b=\frac13\begin{pmatrix}3-4+4\\3+2-2\\-3+4+2\end{pmatrix}=\begin{pmatrix}1\\1\\1\end{pmatrix}$. Probe: $(1+2, 1+1, 1+1)=(3,2,2)$ ✓.
:::
:::

:::aufgabe 4
Zeige: Ist $A$ invertierbar, so auch $A^T$, und $(A^T)^{-1}=(A^{-1})^T$.
:::loesung
$A^T(A^{-1})^T=(A^{-1}A)^T=E^T=E$ (Regel $(XY)^T=Y^TX^T$), analog von der anderen Seite. ∎
:::
:::

## Karteikarten

:::karte
Inverse einer 2×2-Matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$?
???
$\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$, falls $ad-bc\ne0$.
:::

:::karte
Gauß-Jordan-Verfahren für $A^{-1}$?
???
$(A\mid E)$ durch Zeilenumformungen in $(E\mid A^{-1})$ überführen.
:::

:::karte
$(AB)^{-1}=\,?$
???
$B^{-1}A^{-1}$
:::

:::karte
Nenne vier äquivalente Bedingungen für die Invertierbarkeit einer $n\times n$-Matrix.
???
$\Rang A=n$; $\Kern A=\{\vec0\}$; Spalten linear unabhängig; $\det A\ne0$ (auch: $A\vec x=\vec b$ stets eindeutig lösbar).
:::
