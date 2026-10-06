---
title: 5.1 Lineare Algebra I – Lineare Gleichungssysteme, Rang, Kondition, Backslash, Least Squares
chapter: 5 Lineare Algebra
minutes: 100
sources: Numerik/Numerik - 06 Lineare Algebra I.pdf
---

:::ziel
- Ein technisches Problem (Kirchhoff) als $A\mathbf x=\mathbf b$ aufstellen.
- `det`, `rank`, `inv`, `cond` zur Analyse nutzen; quadratische, über- und unterbestimmte Systeme unterscheiden.
- Mit dem **Backslash-Operator** `A\b` lösen und die Lösung über das **Residuum** prüfen.
- Exakte Lösung vs. **Least-Squares**-Lösung; schlechte Kondition erkennen.
:::

## Motivation: Batteriezellen parallel

Drei Zellen ($U_i$, Innenwiderstand $R_i$) parallel an einer Last $R_0$. Maschen: $U_i-I_iR_i-I_0R_0=0$ ($i=1,2,3$), Knoten: $I_1+I_2+I_3=I_0$:
$$\begin{pmatrix}R_1&0&0&R_0\\0&R_2&0&R_0\\0&0&R_3&R_0\\1&1&1&-1\end{pmatrix}\begin{pmatrix}I_1\\I_2\\I_3\\I_0\end{pmatrix}=\begin{pmatrix}U_1\\U_2\\U_3\\0\end{pmatrix}.$$

```matlab
R = [0.02 0.03 0.025]; R0 = 1; U = [4.10; 4.05; 4.00];
A = [R(1) 0 0 R0; 0 R(2) 0 R0; 0 0 R(3) R0; 1 1 1 -1];
b = [U; 0];
x = A\b        % [3.928; 0.952; -0.858; 4.021]
```
$I_3<0$: die schwächste Zelle wird von den anderen **geladen** (Ausgleichsströme – ein reales Problem in Batteriepacks!).

## Matrixoperationen (Wiederholung)

`A+B`, `A*B` (Matrixprodukt!), `A.*B`, `A.'` (transponiert), `A'` (transponiert **und konjugiert**), `det(A)`, `inv(A)`, `rank(A)`, `cond(A)`, `norm(x)`, `eye(n)`, `trace(A)`.

## Lösbarkeit

$A$: $m\times n$ – $m$ Gleichungen, $n$ Unbekannte. Quadratisch $m=n$, **überbestimmt** $m>n$, **unterbestimmt** $m<n$.

**Rang** = Anzahl linear unabhängiger Zeilen (= Spalten), $\operatorname{rank}A\le\min(m,n)$ – die Anzahl der „echten" Gleichungen.

| System | Bedingung | Lösung |
|---|---|---|
| quadratisch | $\det A\ne0$ ($\operatorname{rank}=n$) | genau eine |
| quadratisch | $\det A=0$ (singulär) | keine oder unendlich viele |
| überbestimmt | $\mathbf b$ im Spaltenraum (selten) | exakt |
| überbestimmt | sonst | keine exakte ⇒ **Least Squares** |
| unterbestimmt | $\operatorname{rank}=m$ | unendlich viele |

Geometrisch (2×2): zwei Geraden – Schnittpunkt, parallel (keine Lösung) oder identisch (unendlich viele). 3×3: drei Ebenen.

### Kondition
$$\kappa(A)=\|A\|\,\|A^{-1}\|\ \ (\texttt{cond(A)}).$$
Relative Fehler in $\mathbf b$ (Messfehler, Rundung) können sich in $\mathbf x$ um bis zu den Faktor $\kappa$ verstärken: bei $\kappa=10^6$ können **6 Dezimalstellen** verloren gehen.
Faustregel: $\kappa<100$ gut; $\kappa>10^{10}$ schlecht; $\kappa=\infty$ singulär.

```matlab
cond([1 2; 2 4])        % Inf   – singulär (Zeile 2 = 2·Zeile 1)
cond([1 2; 2 4.001])    % ≈ 2.5e4 – schlecht konditioniert, det = 0.001
cond([1 1; 1 1.0001])   % ≈ 4e4
```
**Singulär** = mathematisch keine eindeutige Lösung; **schlecht konditioniert** = Lösung existiert, ist aber numerisch instabil (fast parallele Geraden).

## Der Backslash-Operator

$$A\mathbf x=\mathbf b\quad\Rightarrow\quad\texttt{x = A\textbackslash b}\quad(\text{„A nach links teilen"}).$$
`b/A` löst dagegen $\mathbf xA=\mathbf b$ (Zeilenvektoren).

| $A$ | was `\` macht |
|---|---|
| quadratisch, regulär | exakte Lösung (Gauß/**LU-Zerlegung**; Spezialfälle: Dreieck, Cholesky) |
| quadratisch, singulär | Warnung „singular to working precision", Unsinn/`Inf` |
| überbestimmt | **Least Squares** (QR-Zerlegung) |
| unterbestimmt | eine Lösung mit höchstens $m$ Nicht-Null-Einträgen |

:::achtung Immer das Residuum prüfen!
`\` gibt bei überbestimmten Systemen **ohne Warnung** die Least-Squares-Lösung zurück.
```matlab
x = A\b;
r = norm(A*x - b);
if r < 1e-10, disp('exakt'), else, fprintf('Least Squares, Residuum %.3e\n', r), end
```
**Nicht** `inv(A)*b` verwenden: langsamer und ungenauer (Inverse nur, wenn man sie wirklich braucht).
:::

## Least Squares

Überbestimmt: Finde $\mathbf x$, das $\|A\mathbf x-\mathbf b\|_2$ minimiert (Summe der Fehlerquadrate). Mathematisch über die **Normalgleichungen** $A^TA\mathbf x=A^T\mathbf b$ (→ Mathe 2, Kap. 12); MATLAB nutzt die numerisch stabilere QR-Zerlegung.

:::bsp Ausgleichsgerade
Messpunkte $(0;1)$, $(1;2{,}1)$, $(2;2{,}9)$, $(3;4{,}2)$, Modell $y=c_0+c_1x$:
```matlab
x = [0 1 2 3]'; y = [1 2.1 2.9 4.2]';
A = [ones(4,1), x];        % 4 Gleichungen, 2 Unbekannte
c = A\y                    % [0.99; 1.04]
norm(A*c - y)              % 0.205 ≠ 0  -> Least Squares
polyfit(x, y, 1)           % [1.04 0.99] – dasselbe, absteigend
```
:::

## Aufgaben

:::aufgabe 1 (Folien)
Rang von `A1=[1 2 3;2 4 6;1 1 1]`, `A2=eye(3)`, `A3=[1 2;3 6;2 4]`?
:::loesung
A1: Zeile 2 = 2·Zeile 1, Zeile 3 unabhängig ⇒ Rang 2. A2: 3. A3: alle Zeilen Vielfache von $(1\ 2)$ ⇒ Rang 1.
:::
:::

:::aufgabe 2
Löse $-x+y=2$, $x+y=5$ in MATLAB und prüfe. Was liefert `inv(A)`?
:::loesung
`A=[-1 1;1 1]; b=[2;5]; x=A\b` → $[1{,}5;\ 3{,}5]$; `norm(A*x-b)` = 0. `inv(A)` = $\begin{pmatrix}-0{,}5&0{,}5\\0{,}5&0{,}5\end{pmatrix}$, `det(A)*det(inv(A))` = $(-2)(-0{,}5)=1$.
:::
:::

:::aufgabe 3
Warum liefert `[1 2;2 4]\[3;4]` eine Warnung, und was bedeutet das geometrisch?
:::loesung
$\det=0$: Die Geraden $x+2y=3$ und $2x+4y=4$ (⇔ $x+2y=2$) sind **parallel** – keine Lösung. MATLAB warnt „singular to working precision" und liefert `Inf`/`-Inf`.
:::
:::

## Karteikarten

:::karte
Wie löst man Ax = b in MATLAB?
???
`x = A\b` (Backslash), nicht `inv(A)*b`.
:::

:::karte
Was macht `\` bei überbestimmten Systemen?
???
Least-Squares-Lösung (QR) – ohne Warnung; Residuum prüfen.
:::

:::karte
Bedeutung der Konditionszahl?
???
Fehlerverstärkungsfaktor; κ = 10^k ⇒ bis zu k Stellen Verlust; ∞ = singulär.
:::

:::karte
Normalgleichungen?
???
$A^TA\mathbf x=A^T\mathbf b$
:::

:::karte
Wann hat ein quadratisches LGS genau eine Lösung?
???
Wenn $\det A\ne0$ bzw. rank A = n.
:::
