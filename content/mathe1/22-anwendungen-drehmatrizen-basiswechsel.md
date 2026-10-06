---
title: Anwendungen – Zeilen/Spaltenvektoren, Drehmatrizen, Spiegelungen, Basiswechsel, Spannungstensor
chapter: 2 Lineare Algebra
minutes: 100
sources: Mathe 1/IngMath1_slides_2_linalg_A_anwendungen_1_zeilen_vs_spaltenvektoren.pdf; Mathe 1/IngMath1_slides_2_linalg_A_anwendungen_2_drehmatrizen.pdf; Mathe 1/IngMath1_slides_2_linalg_UE_Matrizen_Basiswechsel.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#201
---

:::ziel
- Zeilen- vs. Spaltenvektoren in Programmen (MATLAB/Python) korrekt handhaben; inneres vs. äußeres (dyadisches) Produkt.
- Komplexe Zahlen als $2\times2$-Matrizen; **Drehmatrizen** im $\R^2$ herleiten und verketten; **Spiegelungen**.
- Drehungen im $\R^3$ um die Koordinatenachsen und um beliebige Achsen.
- **Koordinatentransformation / Basiswechsel** und Darstellungsmatrix $\tilde A=S^{-1}AS$.
- Ausblick Spannungstensor (TM 2).
:::

## 1. Zeilen- oder Spaltenvektor?

Ursprünglich ist $\R^n=\R\times\dots\times\R$ die Menge der $n$-Tupel $(x_1,\dots,x_n)$ – ohne „Ausrichtung". Sobald man Vektoren als **Matrizen** behandelt (in MATLAB/Python ist das Standard!), muss man sich entscheiden:
- Spaltenvektor $\vec x\in\R^{n\times1}$ – Standard in der linearen Algebra: $A\vec x=\vec b$.
- Zeilenvektor $\vec x^T\in\R^{1\times n}$: dann schreibt man $\vec x^TA^T=\vec b^T$.

| Produkt | Ergebnis |
|---|---|
| Zeile · Spalte: $\vec u^T\vec v=\sum u_kv_k$ | **Zahl** (Skalarprodukt, inneres Produkt); nur für gleiche Länge definiert |
| Spalte · Zeile: $\vec u\vec v^T=(u_iv_j)$ | **Matrix** $n\times n$ (dyadisches/äußeres Produkt); für Längen $n,m$: $n\times m$ |

:::bsp
$\vec u=(1,2)^T$, $\vec v=(3,4)^T$: $\vec u^T\vec v=11$, aber $\vec u\vec v^T=\begin{pmatrix}3&4\\6&8\end{pmatrix}$ (Rang 1).
In MATLAB: `u'*v` → 11, `u*v'` → Matrix, `u.*v` → komponentenweise `[3;8]`.
:::

## 2. Komplexe Zahlen als Matrizen

$$\varphi:\C\to\R^{2\times2},\quad a+\mathrm ib\mapsto\begin{pmatrix}a&-b\\b&a\end{pmatrix}$$
ist bijektiv auf die Menge $M_\C$ dieser Matrizen und **verträglich** mit Addition und Multiplikation:
$\varphi(z_1+z_2)=\varphi(z_1)+\varphi(z_2)$, $\varphi(z_1z_2)=\varphi(z_1)\varphi(z_2)$ (nachrechnen: beide ergeben $\begin{pmatrix}ac-bd&-(ad+bc)\\ad+bc&ac-bd\end{pmatrix}$). Man nennt so etwas einen **Isomorphismus**: $M_\C$ ist „dasselbe" wie ℂ. Insbesondere entspricht $\mathrm i$ der Drehung um 90°: $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

## 3. Drehmatrizen im $\R^2$

**Weg 1 (über ℂ):** Multiplikation mit $\e^{\mathrm i\varphi}=\cos\varphi+\mathrm i\sin\varphi$ ist eine Drehung um $\varphi$. Als Matrix:
$$R_\varphi=\begin{pmatrix}\cos\varphi&-\sin\varphi\\\sin\varphi&\cos\varphi\end{pmatrix}.$$
**Weg 2 (Bilder der Basis):** $R_\varphi\vec e_1=(\cos\varphi,\sin\varphi)^T$, $R_\varphi\vec e_2=(-\sin\varphi,\cos\varphi)^T$ → das sind die Spalten.

:::bsp
- $\varphi=\frac\pi2$: $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, $\vec e_1\mapsto\vec e_2$, $\vec e_2\mapsto-\vec e_1$.
- $\varphi=\frac\pi4$: $R=\frac{\sqrt2}2\begin{pmatrix}1&-1\\1&1\end{pmatrix}$, $\vec e_1\mapsto\frac{\sqrt2}2(1,1)^T$.
:::

:::satz Eigenschaften von Drehmatrizen
- **Verkettung:** $R_\varphi R_\psi=R_{\varphi+\psi}$ (Beweis: ausmultiplizieren + Additionstheoreme). Drehungen in der Ebene kommutieren.
- $R_\varphi^{-1}=R_{-\varphi}=R_\varphi^T$ – **orthogonale Matrix** ($R^TR=E$).
- $\det R_\varphi=\cos^2\varphi+\sin^2\varphi=1$ (Flächen und Orientierung bleiben erhalten).
- Spalten (und Zeilen) bilden eine Orthonormalbasis; Längen und Winkel bleiben erhalten.
:::

## 4. Spiegelungen im $\R^2$

Spiegelung an der Ursprungsgeraden mit Winkel $\varphi$ zur $x$-Achse:
$$M_\varphi=\begin{pmatrix}\cos2\varphi&\sin2\varphi\\\sin2\varphi&-\cos2\varphi\end{pmatrix},\qquad\det M_\varphi=-1,\quad M_\varphi^2=E.$$

| Achse | Winkel | Matrix |
|---|---|---|
| $x_1$-Achse | $0$ | $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ |
| $x_2$-Achse | $\frac\pi2$ | $\begin{pmatrix}-1&0\\0&1\end{pmatrix}$ |
| Hauptdiagonale $y=x$ | $\frac\pi4$ | $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ |
| Nebendiagonale $y=-x$ | $-\frac\pi4$ | $\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$ |

Orthogonale Matrizen ($Q^TQ=E$) sind genau die Drehungen ($\det=+1$) und Spiegelungen bzw. Drehspiegelungen ($\det=-1$).

## 5. Drehungen im $\R^3$

Drehung um die Koordinatenachsen (die Achse bleibt fest, in der Ebene senkrecht dazu wird wie im $\R^2$ gedreht):
$$R_x(\alpha)=\begin{pmatrix}1&0&0\\0&\cos\alpha&-\sin\alpha\\0&\sin\alpha&\cos\alpha\end{pmatrix},\quad R_y(\beta)=\begin{pmatrix}\cos\beta&0&\sin\beta\\0&1&0\\-\sin\beta&0&\cos\beta\end{pmatrix},\quad R_z(\gamma)=\begin{pmatrix}\cos\gamma&-\sin\gamma&0\\\sin\gamma&\cos\gamma&0\\0&0&1\end{pmatrix}.$$
(Beachte das Vorzeichen bei $R_y$ – kommt von der zyklischen Reihenfolge $z\to x$.)

:::achtung Drehungen im Raum kommutieren nicht
$R_xR_y\ne R_yR_x$. Die Reihenfolge zählt! Darum sind z. B. Roll-, Nick- und Gierwinkel (Euler-/Kardanwinkel) bei Fahrzeugen und Flugzeugen genau mit Reihenfolge definiert (Literatur: Isermann, *Automotive Control*).
:::

:::rezept Drehung um eine beliebige Achse $\vec e_a$ um den Winkel $\phi$
Idee: Achse auf $\vec e_1$ zurückdrehen, um $\vec e_1$ drehen, zurückdrehen. Entsteht $\vec e_a$ aus $\vec e_1$ durch $R_z(\gamma_a)R_y(\beta_a)$, dann
$$R_{\vec e_a}(\phi)=R_z(\gamma_a)\,R_y(\beta_a)\,R_x(\phi)\,R_y(-\beta_a)\,R_z(-\gamma_a).$$
Beispiel der Folien: $\vec e_a=R_y(\frac\pi4)\vec e_1=\frac{\sqrt2}2(1,0,-1)^T$ (Achse in der $x$-$z$-Ebene, $\gamma_a=0$, $\beta_a=\frac\pi4$). Für $\phi=\pi$ liefert $R_y(\frac\pi4)R_x(\pi)R_y(-\frac\pi4)$ die Matrix $\begin{pmatrix}0&0&-1\\0&-1&0\\-1&0&0\end{pmatrix}$ (Kontrolle: Halbe Drehung um $\vec e_a$ ist $2\vec e_a\vec e_a^T-E$). Dreimalige Drehung um $\frac\pi3$ ergibt dieselbe Matrix: $R_{\vec e_a}(\frac\pi3)^3=R_{\vec e_a}(\pi)$.
:::

## 6. Koordinatentransformation (Basiswechsel)

Ein Punkt $P$ habe bzgl. der Basis $\tilde B=\{\tilde{\vec b}_1,\tilde{\vec b}_2\}$ die Koordinaten $(\tilde x_1,\tilde x_2)$, d. h. $P=\tilde x_1\tilde{\vec b}_1+\tilde x_2\tilde{\vec b}_2$. Kennt man die neuen Basisvektoren in den alten Koordinaten $B=\{\vec b_1,\vec b_2\}$, also $\tilde{\vec b}_1=b_{11}\vec b_1+b_{21}\vec b_2$ usw., so folgt
$$\begin{pmatrix}x_1\\x_2\end{pmatrix}_{B}=\underbrace{\begin{pmatrix}b_{11}&b_{12}\\b_{21}&b_{22}\end{pmatrix}}_{S}\begin{pmatrix}\tilde x_1\\\tilde x_2\end{pmatrix}_{\tilde B}.$$

:::merke Transformationsmatrix
$S$ hat als **Spalten die neuen Basisvektoren (in alten Koordinaten)**. $S$ rechnet neue → alte Koordinaten um, $S^{-1}$ alte → neue.
:::

:::bsp 1 – zur Standardbasis
$\tilde{\vec b}_1=(1,1)^T$, $\tilde{\vec b}_2=(-1,1)^T$, $P=2\tilde{\vec b}_1+1\tilde{\vec b}_2$:
$$\vec x=\begin{pmatrix}1&-1\\1&1\end{pmatrix}\begin{pmatrix}2\\1\end{pmatrix}=\begin{pmatrix}1\\3\end{pmatrix}.$$
:::

:::bsp 2 – zwischen zwei Basen
Gesucht: Koordinaten desselben $P=(1,3)^T$ bzgl. $\{\vec a_1,\vec a_2\}$ mit $\vec a_1=(\frac{\sqrt3}2,\frac12)^T$, $\vec a_2=(-\frac12,\frac{\sqrt3}2)^T$ (um 30° gedrehte ONB). Löse $(\vec a_1\ \vec a_2)\bar{\vec x}=\vec x$. Da die Basis orthonormal ist, ist $(\vec a_1\ \vec a_2)^{-1}=(\vec a_1\ \vec a_2)^T$:
$$\bar x_1=\langle\vec x,\vec a_1\rangle=\frac{\sqrt3}2+\frac32,\qquad\bar x_2=\langle\vec x,\vec a_2\rangle=-\frac12+\frac{3\sqrt3}2.$$
:::

:::satz Darstellungsmatrix nach Basiswechsel
Ist $A$ die Matrix von $\varphi:\vec x\mapsto A\vec x$ bzgl. der Standardbasis und $S=(\vec b_1\cdots\vec b_n)$, so ist die Darstellungsmatrix bzgl. $\tilde B=\{\vec b_1,\dots,\vec b_n\}$:
$$\tilde A=S^{-1}AS.$$
(Lies von rechts: neue Koordinaten → alte ($S$) → abbilden ($A$) → zurück in neue ($S^{-1}$).) Matrizen $A$ und $\tilde A$ heißen **ähnlich**.
:::

:::bsp Basis aus Eigenvektoren (→ nächste Lektion)
Hat $\varphi$ die Eigenwerte $6,4,2$ mit Eigenvektoren $\vec u=(1,0,1)^T$, $\vec v=(1,1,0)^T$, $\vec w=(0,1,1)^T$, so ist die Darstellung bzgl. $\{\vec u,\vec v,\vec w\}$ diagonal: $D=\operatorname{diag}(6,4,2)$. Bzgl. der Standardbasis:
$$A=SDS^{-1}=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}\begin{pmatrix}6&0&0\\0&4&0\\0&0&2\end{pmatrix}\frac12\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}=\begin{pmatrix}5&-1&1\\1&3&-1\\2&-2&4\end{pmatrix}.$$
Probe: $A\vec u=(5+1,\ 1-1,\ 2+4)^T=(6,0,6)^T=6\vec u$ ✓.
:::

## 7. Ausblick: Spannungstensor (TM 2)

In der Festigkeitslehre wird der Spannungszustand in einem Punkt durch eine **symmetrische** $3\times3$-Matrix beschrieben:
$$\boldsymbol\sigma=\begin{pmatrix}\sigma_x&\tau_{xy}&\tau_{xz}\\\tau_{xy}&\sigma_y&\tau_{yz}\\\tau_{xz}&\tau_{yz}&\sigma_z\end{pmatrix}.$$
Der Spannungsvektor auf einer Schnittfläche mit Normale $\vec n$ ist $\vec t=\boldsymbol\sigma\vec n$ (Matrix mal Vektor!). Dreht man das Koordinatensystem mit einer Drehmatrix $Q$, transformiert sich der Tensor wie $\boldsymbol\sigma'=Q^T\boldsymbol\sigma Q$ (Basiswechsel!). Die **Hauptspannungen** sind die Eigenwerte, die Hauptrichtungen die (orthogonalen) Eigenvektoren – das lernst du in TM 2 beim Mohrschen Kreis wieder.

## Aufgaben

:::aufgabe 1
Zeige $R_\varphi R_\psi=R_{\varphi+\psi}$.
:::loesung
$R_\varphi R_\psi=\begin{pmatrix}\cos\varphi\cos\psi-\sin\varphi\sin\psi&-\cos\varphi\sin\psi-\sin\varphi\cos\psi\\\sin\varphi\cos\psi+\cos\varphi\sin\psi&-\sin\varphi\sin\psi+\cos\varphi\cos\psi\end{pmatrix}=\begin{pmatrix}\cos(\varphi+\psi)&-\sin(\varphi+\psi)\\\sin(\varphi+\psi)&\cos(\varphi+\psi)\end{pmatrix}$. ∎
:::
:::

:::aufgabe 2
Drehe $\vec v=(2,0)^T$ um 60° und spiegle das Ergebnis an der Hauptdiagonalen.
:::loesung
$R_{60°}\vec v=(2\cdot\frac12,\ 2\cdot\frac{\sqrt3}2)^T=(1,\sqrt3)^T$. Spiegelung $y=x$ vertauscht die Komponenten: $(\sqrt3,1)^T$.
:::
:::

:::aufgabe 3
Berechne $R_z(90°)R_x(90°)\vec e_2$ und $R_x(90°)R_z(90°)\vec e_2$.
:::loesung
$R_x(90°)\vec e_2=\vec e_3$, $R_z(90°)\vec e_3=\vec e_3$ ⇒ $\vec e_3$.
$R_z(90°)\vec e_2=-\vec e_1$, $R_x(90°)(-\vec e_1)=-\vec e_1$ ⇒ $-\vec e_1$. Verschieden ⇒ nicht kommutativ.
:::
:::

:::aufgabe 4
$A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$. Berechne $\tilde A=S^{-1}AS$ für $S=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.
:::loesung
$AS=\begin{pmatrix}3&1\\3&-1\end{pmatrix}$, $S^{-1}=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $\tilde A=\frac12\begin{pmatrix}6&0\\0&2\end{pmatrix}=\begin{pmatrix}3&0\\0&1\end{pmatrix}$ – diagonal, weil die Spalten von $S$ Eigenvektoren sind.
:::
:::

## Karteikarten

:::karte
Drehmatrix im $\R^2$ um $\varphi$?
???
$\begin{pmatrix}\cos\varphi&-\sin\varphi\\\sin\varphi&\cos\varphi\end{pmatrix}$; Inverse = Transponierte.
:::

:::karte
Was ist $\vec u^T\vec v$ und was $\vec u\vec v^T$?
???
$\vec u^T\vec v$: Zahl (Skalarprodukt). $\vec u\vec v^T$: Matrix (dyadisches Produkt).
:::

:::karte
Welche Spalten hat die Transformationsmatrix $S$ beim Basiswechsel?
???
Die neuen Basisvektoren, ausgedrückt in alten Koordinaten. $\vec x_{alt}=S\vec x_{neu}$.
:::

:::karte
Darstellungsmatrix nach Basiswechsel?
???
$\tilde A=S^{-1}AS$
:::

:::karte
Woran erkennt man eine orthogonale Matrix, und was bedeutet $\det=\pm1$?
???
$Q^TQ=E$; $\det=+1$ Drehung, $\det=-1$ Spiegelung.
:::
