---
title: 5.2 Lineare Algebra II – Eigenwertprobleme, eig, gekoppelte Schwingungen
chapter: 5 Lineare Algebra
minutes: 100
sources: Numerik/Numerik - 07 Lineare Algebra II.pdf
---

:::ziel
- Eigenwerte/-vektoren definieren und geometrisch deuten.
- `eig(A)` und `[V,D] = eig(A)` benutzen; $AV=VD$ prüfen.
- Schwingungssysteme auf das **verallgemeinerte Eigenwertproblem** $K\mathbf v=\omega^2M\mathbf v$ zurückführen und mit `eig(K,M)` lösen.
- Eigenfrequenzen und Eigenformen physikalisch interpretieren (Resonanz!).
:::

## Definition

:::def
$\mathbf x\ne\mathbf 0$ heißt **Eigenvektor** der quadratischen Matrix $A$ zum **Eigenwert** $\lambda$, wenn
$$A\mathbf x=\lambda\mathbf x.$$
Geometrisch: Die Abbildung $A$ ändert die **Richtung** von $\mathbf x$ nicht, sie streckt/staucht nur (bzw. kehrt um bei $\lambda<0$). Von Hand: $\det(A-\lambda I)=0$ (Mathe 1).
:::

**Eigenschaften:**
- **Symmetrische** Matrizen ($A=A^T$): alle Eigenwerte **reell**, $n$ orthogonale Eigenvektoren (Hauptachsen – vgl. TM 2: Hauptspannungen, Hauptträgheitsmomente!).
- Nicht symmetrisch: evtl. komplexe Eigenwerte, evtl. weniger als $n$ unabhängige Eigenvektoren.
- $\det A=\lambda_1\lambda_2\cdots\lambda_n$, $\operatorname{spur}A=\lambda_1+\ldots+\lambda_n$.

## eig in MATLAB

```matlab
A = [4 -5 1; 2 -3 1; 1 -2 2];
lambda = eig(A)          % Spaltenvektor der Eigenwerte: -0.618, 2, 1.618
[V, D] = eig(A)          % Spalten von V = Eigenvektoren (normiert), D = diag(λ)
A*V - V*D                % ≈ 0
A*V(:,3) - D(3,3)*V(:,3) % Probe für einen Eigenvektor
```
Eigenvektoren sind nur bis auf einen Faktor bestimmt (MATLAB normiert auf Länge 1, Vorzeichen beliebig).

## Anwendung: Schwingungen

:::bsp Gitarrensaite (diskretisiert)
$n$ Massen $m$, Saitenspannung $T$, Abstand $h$: $m\ddot u_i=\frac Th(u_{i-1}-2u_i+u_{i+1})$. Ansatz $u_i=v_i\cos\omega t$ ⇒
$$K\mathbf v=\omega^2m\,\mathbf v,\qquad K=\frac Th\begin{pmatrix}2&-1&&\\-1&2&-1&\\&\ddots&\ddots&\ddots\\&&-1&2\end{pmatrix}.$$
Eigenwerte = erlaubte $\omega^2$ (Töne), Eigenvektoren = **Schwingungsformen**: Grundton (alle gleichphasig, $\mathbf v_1\approx(0{,}5;\,0{,}87;\,1;\,0{,}87;\,0{,}5)$), 1. Oberton ≈ Oktave $2\omega_1$ mit Knoten in der Mitte.
:::

:::bsp Flügel + Triebwerk (Turboprop)
2-Massen-Modell $K\mathbf v=\omega^2M\mathbf v$. Liegt die Propellerdrehfrequenz auf einer Eigenfrequenz ⇒ **Resonanz**. Historisch: Lockheed L-188 Electra (1959) – „Whirl Flutter" führte zum Bruch von Tragflächen. Auslegungsziel: Eigenfrequenzen **außerhalb** des Betriebsdrehzahlbereichs.
:::

### 2-Massen-Feder-System
$$m_1\ddot x_1=-c_1x_1+c_2(x_2-x_1),\qquad m_2\ddot x_2=-c_2(x_2-x_1).$$
Ansatz $x_i=A_i\cos\omega t$ ⇒
$$\underbrace{\begin{pmatrix}c_1+c_2&-c_2\\-c_2&c_2\end{pmatrix}}_{K}\mathbf A=\omega^2\underbrace{\begin{pmatrix}m_1&0\\0&m_2\end{pmatrix}}_{M}\mathbf A\qquad(\text{verallgemeinertes EWP }A\mathbf x=\lambda B\mathbf x).$$

```matlab
m1 = 1; m2 = 1; c1 = 1; c2 = 1;
K = [c1+c2, -c2; -c2, c2];  M = diag([m1 m2]);
[V, D] = eig(K, M);           % NICHT eig(inv(M)*K)
omega = sqrt(diag(D))         % [0.618; 1.618] rad/s
f = omega/(2*pi)              % in Hz
V                             % Mode 1 gleichphasig, Mode 2 gegenphasig
t = linspace(0, 20, 500);
plot(t, V(1,1)*cos(omega(1)*t), t, V(2,1)*cos(omega(1)*t))
```
- **Mode 1** ($\omega_1=0{,}618$): beide Massen **in Phase** ($\mathbf v_1\propto(0{,}53;\,0{,}85)$).
- **Mode 2** ($\omega_2=1{,}618$): **gegenphasig** ($\mathbf v_2\propto(0{,}85;\,-0{,}53)$).
- Anfangsauslenkung = Eigenvektor ⇒ nur diese Mode schwingt (reine Eigenschwingung); sonst Überlagerung beider Moden.
(Nett: $\omega_{1,2}$ sind der Goldene Schnitt $\frac{\sqrt5\mp1}2$.)

## Aufgaben

:::aufgabe 1 (Folien-Übung)
`A = [3 1; 1 3]`: Eigenwerte, Eigenvektoren, Probe, Auffälligkeit, Zusammenhang mit `det(A)`.
:::loesung
$\lambda=2$ und $4$ (reell – symmetrisch); $\mathbf v_1=\frac1{\sqrt2}(1,-1)$, $\mathbf v_2=\frac1{\sqrt2}(1,1)$ (orthogonal). `A*V(:,1)` = `2*V(:,1)` ✓. $\det A=8=2\cdot4$, Spur $6=2+4$.
:::
:::

:::aufgabe 2 (Folien-Übung)
$m_1=2$, $m_2=1$, $c_1=2$, $c_2=3$. Eigenfrequenzen, Eigenformen, welche Anfangsbedingung regt nur Mode 1 an? Was passiert bei $c_1=0$?
:::loesung
$K=\begin{pmatrix}5&-3\\-3&3\end{pmatrix}$, $M=\operatorname{diag}(2,1)$. $\det(K-\lambda M)=2\lambda^2-11\lambda+6=0$ ⇒ $\lambda_{1,2}=0{,}614;\ 4{,}886$ ⇒ $\omega_1=0{,}78$, $\omega_2=2{,}21\,$rad/s.
Mode 1: $(5-1{,}228)A_1=3A_2$ ⇒ $A_2=1{,}26A_1$ (gleichphasig). Mode 2: $A_2=-1{,}59A_1$ (gegenphasig).
Nur Mode 1: `x0 = V(:,1)` (bzw. $x_0\propto(1;\,1{,}26)$, Startgeschwindigkeit 0).
$c_1=0$: $K$ singulär, $\lambda_1=0$ ⇒ $\omega_1=0$: **Starrkörpermode** – das System kann frei verschoben werden (keine Verankerung); $\omega_2=\sqrt{4{,}5}=2{,}12$.
:::
:::

:::aufgabe 3
Warum `eig(K,M)` statt `eig(inv(M)*K)`?
:::loesung
`inv(M)*K` ist i. A. nicht mehr symmetrisch (Eigenwerte evtl. numerisch komplex, Eigenvektoren nicht orthogonal) und die Inverse kostet Genauigkeit; `eig(K,M)` nutzt Symmetrie und Definitheit beider Matrizen direkt.
:::
:::

## Karteikarten

:::karte
Eigenwertgleichung?
???
$A\mathbf x=\lambda\mathbf x$, $\mathbf x\ne0$; von Hand $\det(A-\lambda I)=0$.
:::

:::karte
Was liefert `[V,D] = eig(A)`?
???
V: Eigenvektoren als Spalten, D: Diagonalmatrix der Eigenwerte, $AV=VD$.
:::

:::karte
Eigenwerte symmetrischer Matrizen?
???
Reell, Eigenvektoren orthogonal.
:::

:::karte
Schwingungssystem als Eigenwertproblem?
???
$K\mathbf v=\omega^2M\mathbf v$ → `[V,D]=eig(K,M)`, $\omega=\sqrt{\operatorname{diag}D}$.
:::

:::karte
Zusammenhang det und Eigenwerte?
???
$\det A=\prod\lambda_i$, $\operatorname{spur}A=\sum\lambda_i$.
:::
