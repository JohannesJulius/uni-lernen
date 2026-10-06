---
title: Determinanten – Berechnung, Regeln, geometrische Bedeutung
chapter: 2 Lineare Algebra
minutes: 100
sources: Mathe 1/IngMath1_slides_2_linalg_09_matrizen_inverse_determinante.pdf; Mathe 1/IngMath1_slides_2_linalg_10_analytgeom_determinanten.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#153
---

:::ziel
- Determinanten von $2\times2$, $3\times3$ (Sarrus) und $n\times n$ (Laplace-Entwicklung) berechnen.
- Determinantenregeln (Zeilenumformungen, Multiplikationssatz, Transponieren, Dreiecksmatrix) gezielt zur Vereinfachung nutzen.
- Bedeutung: $\det A\ne0\iff$ invertierbar; $|\det A|$ = Flächen-/Volumenfaktor.
- Kreuzprodukt und Spatprodukt als Determinante.
:::

## Woher kommt die Determinante?

Sind $\vec u,\vec v\in\R^2$ linear unabhängig bzw. ist $A=(\vec u\ \vec v)$ invertierbar? Gauß auf $\left(\begin{array}{cc|cc}u_1&v_1&1&0\\u_2&v_2&0&1\end{array}\right)$ liefert in der zweiten Zeile den Faktor $\frac{u_1v_2-u_2v_1}{u_1}$. Eine eindeutige Lösung gibt es genau dann, wenn $u_1v_2-u_2v_1\ne0$. Diese Zahl ist die **Determinante**.

## 2×2 und 3×3

:::formel 2×2
$$\det\begin{pmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{pmatrix}=\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21}$$
„Hauptdiagonale minus Nebendiagonale."
:::

:::formel 3×3 – Regel von Sarrus
$$\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$$
Merkhilfe: Die ersten zwei Spalten rechts daneben schreiben; drei Diagonalen „nach rechts unten" addieren, drei „nach links unten" subtrahieren. **Achtung: Sarrus gilt nur für 3×3!**
:::

:::bsp
$$\det\begin{pmatrix}1&2&3\\0&1&4\\5&6&0\end{pmatrix}=1\cdot1\cdot0+2\cdot4\cdot5+3\cdot0\cdot6-3\cdot1\cdot5-1\cdot4\cdot6-2\cdot0\cdot0=0+40+0-15-24-0=1.$$
:::

## n×n: Laplace-Entwicklung

:::def Determinante (rekursiv, Entwicklung nach der 1. Spalte)
$n=1$: $\det(a_{11})=a_{11}$. Für $n\ge2$:
$$\det A=\sum_{i=1}^n(-1)^{i+1}a_{i1}\det A_{i1},$$
wobei $A_{i1}$ die $(n-1)\times(n-1)$-Matrix ist, die durch **Streichen von Zeile $i$ und Spalte 1** entsteht (Untermatrix/Minor).
:::

:::satz Entwicklung nach beliebiger Zeile oder Spalte
Man darf nach **jeder** Zeile $i$ oder Spalte $j$ entwickeln:
$$\det A=\sum_{j=1}^n(-1)^{i+j}a_{ij}\det A_{ij}\quad\text{(Zeile }i)\qquad=\sum_{i=1}^n(-1)^{i+j}a_{ij}\det A_{ij}\quad\text{(Spalte }j).$$
Vorzeichen nach dem **Schachbrettmuster** $\begin{pmatrix}+&-&+&\cdots\\-&+&-\\+&-&+\\\vdots&&&\ddots\end{pmatrix}$.
**Tipp:** Nach der Zeile/Spalte mit den **meisten Nullen** entwickeln.
:::

:::bsp 4×4 mit vielen Nullen
$$\det\begin{pmatrix}2&0&0&1\\1&3&0&0\\0&0&1&0\\4&0&0&2\end{pmatrix}$$
Entwicklung nach Spalte 3 (nur $a_{33}=1$, Vorzeichen $(-1)^{3+3}=+$):
$$=1\cdot\det\begin{pmatrix}2&0&1\\1&3&0\\4&0&2\end{pmatrix}\overset{\text{Spalte 2}}{=}3\cdot(-1)^{2+2}\det\begin{pmatrix}2&1\\4&2\end{pmatrix}=3\cdot(4-4)=0.$$
(Spalte 1 und 4 der Ausgangsmatrix sind ja auch linear abhängig: Zeilen 1 und 4 proportional.)
:::

## Rechenregeln

:::satz Eigenschaften der Determinante
1. **Dreiecksmatrix:** $\det$ = Produkt der Diagonalelemente. Insbesondere $\det E=1$.
2. **Zeilentausch** (oder Spaltentausch) ändert das **Vorzeichen**.
3. **Linearität in jeder Zeile/Spalte:** Multipliziert man **eine** Zeile mit $\mu$, multipliziert sich $\det$ mit $\mu$. Daher $\det(\lambda A)=\lambda^n\det A$ für $A\in\R^{n\times n}$!
4. **Vielfaches einer Zeile zu einer anderen addieren** ändert $\det$ **nicht**.
5. Zwei gleiche (oder proportionale) Zeilen, oder eine Nullzeile ⇒ $\det=0$.
6. $\det A^T=\det A$ (alles für Zeilen gilt auch für Spalten).
7. **Multiplikationssatz:** $\det(AB)=\det A\cdot\det B$. Folglich $\det A^{-1}=\frac1{\det A}$.
8. $\det A\ne0\iff A$ invertierbar $\iff$ Spalten linear unabhängig.
9. **Achtung:** $\det(A+B)\ne\det A+\det B$ im Allgemeinen.
:::

:::rezept Determinante großer Matrizen effizient
Mit Gauß auf Dreiecksform bringen (Regel 4 ändert nichts, Zeilentausch → Vorzeichen merken, Zeile skalieren → Faktor merken), dann Diagonale multiplizieren.
:::

:::bsp Mit Gauß
$$\begin{vmatrix}1&2&1\\2&5&3\\1&3&3\end{vmatrix}=\begin{vmatrix}1&2&1\\0&1&1\\0&1&2\end{vmatrix}=\begin{vmatrix}1&2&1\\0&1&1\\0&0&1\end{vmatrix}=1\cdot1\cdot1=1.$$
:::

:::bsp Zeilentausch als Matrixmultiplikation
$P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\det P=-1$. $\tilde A=PA$ vertauscht die Zeilen, und $\det\tilde A=\det P\det A=-\det A$. Mit $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$: $\det A=-2$, $\det\tilde A=\det\begin{pmatrix}3&4\\1&2\end{pmatrix}=2$ ✓.
:::

## Geometrische Bedeutung

- $|\det(\vec u\ \vec v)|$ = **Fläche** des von $\vec u,\vec v$ aufgespannten Parallelogramms im $\R^2$.
- $|\det(\vec u\ \vec v\ \vec w)|$ = **Volumen** des Spats im $\R^3$ (= Spatprodukt).
- Allgemein: Die lineare Abbildung $A$ multipliziert Flächen/Volumina mit $|\det A|$. Das **Vorzeichen** sagt, ob die Orientierung erhalten bleibt ($+$) oder gespiegelt wird ($-$).
- $\det A=0$: $A$ quetscht den Raum in eine niedrigere Dimension (nicht umkehrbar).

Ausblick: In Mathe 2 (Koordinatentransformation bei Mehrfachintegralen) tritt $|\det|$ der Jacobi-Matrix als Flächenverzerrungsfaktor auf, z. B. $r$ bei Polarkoordinaten.

## Kreuz- und Spatprodukt als Determinante

$$\vec u\times\vec v=\det\begin{pmatrix}\vec e_1&u_1&v_1\\\vec e_2&u_2&v_2\\\vec e_3&u_3&v_3\end{pmatrix}=\vec e_1\begin{vmatrix}u_2&v_2\\u_3&v_3\end{vmatrix}-\vec e_2\begin{vmatrix}u_1&v_1\\u_3&v_3\end{vmatrix}+\vec e_3\begin{vmatrix}u_1&v_1\\u_2&v_2\end{vmatrix}$$
(formal – in der ersten Spalte stehen Vektoren). Die Komponenten des Kreuzprodukts sind also $2\times2$-Determinanten.

$$\langle\vec u,\vec v\times\vec w\rangle=\det(\vec u\ \vec v\ \vec w)=u_1\begin{vmatrix}v_2&w_2\\v_3&w_3\end{vmatrix}-u_2\begin{vmatrix}v_1&w_1\\v_3&w_3\end{vmatrix}+u_3\begin{vmatrix}v_1&w_1\\v_2&w_2\end{vmatrix}.$$

## Aufgaben

:::aufgabe 1
Berechne $\begin{vmatrix}3&-1\\4&2\end{vmatrix}$, $\begin{vmatrix}2&0&1\\1&3&2\\1&1&1\end{vmatrix}$.
:::loesung
$6+4=10$. Sarrus: $2\cdot3\cdot1+0\cdot2\cdot1+1\cdot1\cdot1-1\cdot3\cdot1-2\cdot2\cdot1-0\cdot1\cdot1=6+0+1-3-4-0=0$.
:::
:::

:::aufgabe 2
Für welche $t$ ist $\begin{pmatrix}1&t&0\\t&1&0\\0&0&2\end{pmatrix}$ singulär?
:::loesung
Entwicklung nach Zeile 3: $2(1-t^2)=0\iff t=\pm1$.
:::
:::

:::aufgabe 3
$\det A=3$, $A\in\R^{3\times3}$. Berechne $\det(2A)$, $\det(A^{-1})$, $\det(A^TA)$, $\det(-A)$.
:::loesung
$2^3\cdot3=24$; $\frac13$; $9$; $(-1)^3\cdot3=-3$.
:::
:::

:::aufgabe 4
Berechne $\begin{vmatrix}1&2&0&0\\3&4&0&0\\0&0&5&6\\0&0&7&8\end{vmatrix}$.
:::loesung
Blockdiagonal: $\det=\begin{vmatrix}1&2\\3&4\end{vmatrix}\cdot\begin{vmatrix}5&6\\7&8\end{vmatrix}=(-2)(-2)=4$. (Oder Laplace nach Zeile 1.)
:::
:::

## Karteikarten

:::karte
Determinante 2×2?
???
$ad-bc$
:::

:::karte
Wie ändert sich $\det$ bei Zeilentausch, Zeile·μ, Zeile+Vielfaches einer anderen?
???
Vorzeichenwechsel; Faktor μ; keine Änderung.
:::

:::karte
$\det(\lambda A)$ für $A\in\R^{n\times n}$?
???
$\lambda^n\det A$
:::

:::karte
Determinantenmultiplikationssatz?
???
$\det(AB)=\det A\det B$
:::

:::karte
Geometrische Bedeutung von $|\det A|$?
???
Faktor, um den $A$ Flächen (2D) bzw. Volumina (3D) skaliert; Fläche/Volumen des von den Spalten aufgespannten Parallelogramms/Spats.
:::

:::karte
Laplace-Entwicklung – Vorzeichen?
???
$(-1)^{i+j}$ – Schachbrettmuster, oben links „+".
:::
