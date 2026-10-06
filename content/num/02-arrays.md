---
title: 2 Arbeiten mit Arrays – Erzeugen, Indizieren, Slicing, Operatoren
chapter: 2 Arbeiten mit Arrays
minutes: 90
sources: Numerik/Numerik - 02 Arrays.pdf
---

:::ziel
- Arrays erzeugen (`[ ]`, `zeros`, `ones`, `eye`, `rand`, Colon-Operator, `linspace`).
- Elemente und Teilbereiche indizieren (Zeile/Spalte, `end`, `:`, linear, **logisch**).
- **Matrixoperationen** (`*`) von **elementweisen** (`.*`, `./`, `.^`) unterscheiden; Dimensionsregeln und Implicit Expansion kennen.
- Vektoren für `plot` erzeugen.
:::

## Begriffe

| Begriff | Dimension | Zugriff |
|---|---|---|
| Array | n-dimensional | `A(k1,…,kn)` |
| Matrix | $n\times m$ | `A(zeile,spalte)` |
| Zeilenvektor | $1\times n$ | `x(k)` |
| Spaltenvektor | $n\times1$ | `x(k)` |
| Skalar | $1\times1$ | `a` |

Eine Matrix kann zwei Rollen haben: **mathematisches Objekt** (Drehmatrix $R_z(\theta)$ mit $\det R=1$, $R^{-1}=R^T$; Koeffizientenmatrix eines LGS – Rang, Determinante, Eigenwerte sind sinnvoll) oder **Datenspeicher** (Messreihe: Spalten $t$, $I$, $U$, $T$ – hier sind Rang usw. bedeutungslos).

## Arrays erzeugen

```matlab
A = [1, 2, 3; 4, 5, 6]   % 2x3
x = [1 4 8]              % Zeilenvektor
y = [2; 5; 9]            % Spaltenvektor
Z = zeros(3,4); O = ones(2); I = eye(3); R = rand(2,3);
x = 1:5                  % [1 2 3 4 5]
x = 1:2:10               % [1 3 5 7 9]
x = 10:-1:1              % rückwärts
x = linspace(0, pi, 100) % 100 Werte inkl. beider Enden
T = cat(3, A, A)         % 3D-Array (2x3x2)
```
**Tipp:** große Matrizen mit `zeros` **vorallokieren** und dann befüllen (schneller als schrittweises Wachsen).

## Indizieren

```matlab
A(2,3)          % ein Element
A(2,:)          % ganze Zeile 2
A(:,3)          % ganze Spalte 3
A(1:2, 2:3)     % Teilmatrix
A(end, :)       % letzte Zeile
A(1:2:end, :)   % jede zweite Zeile
A(:, [1 3])     % Spalten 1 und 3
x(3:5) = []     % Elemente löschen
A'              % transponieren (bei komplex: konjugiert!)
A.'             % nur transponieren
A(:)            % alle Elemente als Spaltenvektor
```

**Linear Indexing:** MATLAB nummeriert **spaltenweise** von oben nach unten. Für $A=\begin{pmatrix}1&4&7&10\\2&5&8&11\\3&6&9&12\end{pmatrix}$ gilt `A(2,3) == A(8) == 8`.

**Logische Indizierung:**
```matlab
F = [0, 420, 850, 1240, 830, 0];
F(F > 800)          % [850 1240 830]
F(F == max(F))      % 1240
x(x > 4) = 0        % Werte ersetzen
sum(F > 800)        % Anzahl Treffer: 3
```

| MATLAB | Python/NumPy |
|---|---|
| Index ab **1** | ab 0 |
| `1:3` → 1,2,3 (Ende **inklusiv**) | `0:3` → 0,1,2 |
| `A(i,j)` | `A[i,j]` |
| `end` | `-1` |
| `start:step:end` | `start:stop:step` |

## Nützliche Funktionen
`length` (längste Dimension), `numel`, `size`, `sum`, `prod`, `cumsum`, `min`/`max` (auch `[m,k]=max(x)` mit Index), `mean`, `sort`, `find`, `any`, `all`. Bei Matrizen wirken sie **spaltenweise** (`mean(A)` = Zeilenvektor der Spaltenmittel; `mean(A,'all')` bzw. `mean(A,2)` zeilenweise).

## Operatoren

:::merke Matrix- vs. elementweise Operation
| Ausdruck | Bedeutung | NumPy |
|---|---|---|
| `c*A` | Skalar mal Matrix | `c*A` |
| `A*B` | **Matrizenprodukt** ($n\times k$ mal $k\times m$) | `A @ B` |
| `A.*B` | elementweise Multiplikation | `A*B` |
| `A./B` | elementweise Division | `A/B` |
| `A.^n` | elementweise Potenz | `A**n` |
| `A^2` | $A\cdot A$ (Matrixpotenz!) | `matrix_power` |
Funktionen (`sin`, `exp`, …) und `+ -` wirken elementweise.
:::

$C(p,q)=\sum_iA(p,i)B(i,q)$; i. A. $AB\neq BA$.

**Dimensionsregeln:** Elementweise Operationen brauchen gleiche Größe – **oder** Implicit Expansion (seit R2016b): In jeder Dimension gleich groß oder eine davon 1.
```matlab
A = [1,2; 3,4];
A + [2, 7]       % Zeilenvektor wird zu jeder Zeile addiert
A + [1; 2; 3]    % Fehler: Matrix dimensions must agree
```

## Plotten
```matlab
x = 2.0:0.02:4.7;        % length(x) = 136
y = sin(x)./x;           % elementweise!
plot(x, y), grid on, xlabel('x'), ylabel('sin(x)/x')
hold on, plot(x, exp(-x).*cos(x)), legend('sin(x)/x','e^{-x}cos x')
```

:::achtung Häufige Fehler
`A*B` statt `A.*B`; Index 0; Lesen außerhalb der Matrix; ungewolltes Wachsen beim Schreiben; Zeilen- statt Spaltenvektor (`[1,2,3]` vs. `[1;2;3]`).
:::

## Aufgaben

:::aufgabe 1 (Folien-Übung)
`x = [3, 7, 2, 9, 1, 6]`. Je zwei Ausdrücke für: (a) letztes Element, (b) umgekehrte Reihenfolge, (c) Elemente > 5, (d) Mittelwert.
:::loesung
(a) `x(end)`, `x(6)`, `x(length(x))`. (b) `x(end:-1:1)`, `fliplr(x)`. (c) `x(x>5)`, `x(find(x>5))`. (d) `mean(x)`, `sum(x)/numel(x)` → 4.6667.
:::
:::

:::aufgabe 2 (Folien-Übung)
Erzeuge: (a) $(1\ 2\ 3\ 4\ 5)$, (b) Spaltenvektor mit 4 Nullen, (c) $3\times3$ Einsen, (d) $(10\ 8\ 6\ 4\ 2)$.
:::loesung
(a) `1:5`, `linspace(1,5,5)`; (b) `zeros(4,1)`, `[0;0;0;0]`; (c) `ones(3)`, `ones(3,3)`; (d) `10:-2:2`, `fliplr(2:2:10)`.
:::
:::

:::aufgabe 3 (Folien-Übung – Code annotieren)
```matlab
x = linspace(0, 1.5, 6);  F = [0, 420, 850, 1240, 830, 0];
F_max = max(F); x_max = x(F == F_max);
F_norm = F / F_max; x_krit = x(F > 0.8*F_max);
```
:::loesung
`x`: 6 Messpositionen 0…1,5 m (Abstand 0,3 m). `F`: gemessene Kräfte in N. `F_max` = 1240 N. `x_max` = 0,9 m (Position der Maximalkraft). `F_norm`: auf das Maximum normierte Kräfte (0…1). `x_krit` = Positionen mit $F>992\,$N → nur 0,9 m.
:::
:::

:::aufgabe 4
`A=[1 2;3 4]`. Was ergeben `A*A`, `A.*A`, `A^2`, `A.^2`, `A'`?
:::loesung
`A*A` = `A^2` = `[7 10; 15 22]`; `A.*A` = `A.^2` = `[1 4; 9 16]`; `A'` = `[1 3; 2 4]`.
:::
:::

## Karteikarten

:::karte
Unterschied `*` und `.*`?
???
`*` Matrizenprodukt, `.*` elementweise Multiplikation.
:::

:::karte
Wie zählt das lineare Indexing?
???
Spaltenweise von oben nach unten, ab 1.
:::

:::karte
`linspace(a,b,n)` vs. `a:h:b`?
???
linspace: n Werte, Schrittweite berechnet; Colon: feste Schrittweite h.
:::

:::karte
Was ist Implicit Expansion?
???
Automatische Erweiterung bei elementweisen Operationen, wenn in jeder Dimension gleich groß oder 1.
:::

:::karte
Logische Indizierung – Beispiel?
???
`x(x>5)` liefert alle Elemente größer 5.
:::
