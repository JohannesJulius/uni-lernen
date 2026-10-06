---
title: 4.1 Analysis I – Polynome, Function Handles, anonyme Funktionen, Kurvenanpassung (polyfit)
chapter: 4 Analysis
minutes: 100
sources: Numerik/Numerik - 04 Analysis.pdf
---

:::ziel
- Polynome als **Koeffizientenvektor** (absteigend!) darstellen; `polyval`, `roots`, `polyder`, `polyint` einsetzen.
- **Function Handles** (`@sin`, `@(x) …`) und **Closures** verstehen; Funktionen an Funktionen übergeben; `fplot`.
- Messdaten mit `polyfit` (Methode der kleinsten Quadrate) annähern und die Gradwahl beurteilen (Runge!).
:::

## Warum Analysis in der Numerik?

| Ingenieurfrage | Mathematik | MATLAB |
|---|---|---|
| Wo wird eine Kennlinie null (Versagen)? | Nullstelle | `roots`, `fzero` |
| Wie viel Energie wurde verbraucht? | Integral | `polyint`, `trapz`, `integral` |
| Wie stark ändert sich die Kraft? | Ableitung | `polyder`, `diff` |
| Modell aus Messdaten | Kurvenanpassung | `polyfit` |

## Polynome

:::achtung Reihenfolge!
MATLAB (und NumPy) speichern die Koeffizienten **absteigend** (höchster Grad zuerst) – so, wie man das Polynom liest:
$p(x)=3x^2-2x+1$ → `p = [3, -2, 1]`; $F(x)=500x-80x^2$ → `[-80, 500, 0]` (die 0 für $a_0$ nicht vergessen!). Grad = `length(p)-1`.
:::

```matlab
p  = [-80, 500, 0];          % Federkennlinie F(x) = -80x^2 + 500x
x  = 0:0.01:6;
F  = polyval(p, x);          % auswerten (beliebiger Grad)
r  = roots(p)                % Nullstellen: 6.25 und 0
dp = polyder(p)              % [-160, 500]  -> F'(x)
P  = polyint(p)              % [-26.667, 250, 0, 0] (Konstante 0)
E  = polyval(P,3) - polyval(P,0)   % bestimmtes Integral 0..3
c  = conv([1 -1],[1 1])      % Produkt (x-1)(x+1) = [1 0 -1]
```
`roots` berechnet intern die **Eigenwerte der Begleitmatrix** (→ Lineare Algebra) und liefert alle $n$ Nullstellen, auch komplexe.

## Function Handles und anonyme Funktionen

```matlab
f = @sin;  f(pi/2)               % Handle auf eingebaute Funktion -> 1
g = @(x) x.^2 + 1;  g([1 2 3])   % [2 5 10]
h = @(x,y) sqrt(x.^2 + y.^2);  h(3,4)   % 5
fplot(@(x) exp(-x).*sin(x), [0, 2*pi])  % adaptiv geplottet
```
- **Punkt-Operatoren sind Pflicht:** `fplot`, `integral`, … übergeben Vektoren. Faustregel: jedes `*`, `/`, `^` bekommt einen Punkt.
- Handles sind normale Variablen: speichern, übergeben, zurückgeben.

:::merke Closure – Parameter werden eingefroren
```matlab
rho = 1.225; g = 9.81;
druck = @(h) rho*g*h;        % rho, g werden beim Erzeugen KOPIERT
rho = 0;  druck(100)         % 1201.7 – die Änderung wirkt nicht!
```
So übergibt man Funktionen mit mehreren Parametern an Löser, die nur ein Argument erwarten (`integral`, `fzero`, `ode45`). Will man neue Parameterwerte, muss man das Handle **neu erzeugen**.
:::

**Funktion als Argument:**
```matlab
function y = auswerten(f, x)
y = f(x);
end
auswerten(@sin, pi/2)        % 1
auswerten(@(x) x.^2, 3)      % 9
```

## Kurvenanpassung mit polyfit

Gesucht: Polynom $p$ vom Grad $n$, das Messpunkte $(x_i,y_i)$ bestmöglich beschreibt – **Methode der kleinsten Quadrate**:
$$\min_{\mathbf a}\sum_i\big(p(x_i)-y_i\big)^2.$$
(Das ist ein lineares Ausgleichsproblem – Mathe 2, Kapitel 12!)

```matlab
T = [20 40 60 80 100];  e = [1.2 2.5 4.1 6.0 8.3];
p1 = polyfit(T, e, 1)        % [0.0885  -0.890]
p2 = polyfit(T, e, 2)        % [4.107e-4  0.03921  0.260]
Tf = linspace(10, 110, 200);
scatter(T, e, 'k', 'filled'), hold on
plot(Tf, polyval(p1,Tf), '--', Tf, polyval(p2,Tf), '-'), grid on
roots(p2 - [0 0 7])          % wo wird e = 7 mm/m?  -> T ≈ 89.0 °C
```

:::achtung Gradwahl und Runge-Phänomen
Zu niedriger Grad: schlechte Anpassung. Zu hoher Grad: **Überanpassung** – Rauschen wird mitgefittet; bei äquidistanter Interpolation mit hohem Grad oszilliert das Polynom an den Rändern stark (**Runge-Funktion** $\frac1{1+x^2}$ auf $[-5,5]$). Außerhalb der Daten laufen Polynome immer nach $\pm\infty$ – **nicht extrapolieren!** Mit $n+1$ Punkten und Grad $n$ geht das Polynom exakt durch alle Punkte (Interpolation, vgl. Mathe 1).
:::

| Operation | MATLAB | NumPy |
|---|---|---|
| auswerten | `polyval(p,x)` | `np.polyval(p,x)` |
| Nullstellen | `roots(p)` | `np.roots(p)` |
| Ableitung | `polyder(p)` | `np.polyder(p)` |
| Stammfunktion | `polyint(p)` | `np.polyint(p)` |
| Fit | `polyfit(x,y,n)` | `np.polyfit(x,y,n)` |

## Aufgaben

:::aufgabe 1 (Folien)
$p(x)=4x^3-6x^2+2$. Ableitung von Hand, `polyder([4 -6 0 2])`, `roots(polyder(...))` – Bedeutung?
:::loesung
$p'(x)=12x^2-12x$ ⇒ `[12 -12 0]`. Nullstellen 0 und 1 = **Stellen der Extrema** (waagrechte Tangente): $p(0)=2$ Maximum, $p(1)=0$ Minimum.
:::
:::

:::aufgabe 2 (Folien – Federkennlinie $F=500x-80x^2$)
(1) Plot auf $[0,6]$, (2) Nullstellen, (3) Steigung bei $x=2$, (4) Energie $\int_0^3F\,\d x$.
:::loesung
```matlab
p = [-80 500 0];
fplot(@(x) polyval(p,x), [0 6])
roots(p)                         % 6.25, 0
polyval(polyder(p), 2)           % 180 N/m
P = polyint(p); polyval(P,3) - polyval(P,0)   % 1530 J
```
($-\frac{80}3\cdot27+250\cdot9=-720+2250=1530$.)
:::
:::

:::aufgabe 3 (Folien – Closures)
`a=2; f=@(x) a*x; a=10; f(3)` und `b=5; g=@(x) x+b; b=b+1; g(0)`?
:::loesung
`f(3)` = 6 und `g(0)` = 5 – Variablen werden beim **Erzeugen** des Handles ausgelesen und eingefroren.
:::
:::

:::aufgabe 4 (Folien)
Gedämpfte Schwingung $f(x)=e^{-0{,}3x}\sin x$: Handle, `fplot` auf $[0,4\pi]$, Funktion `maximum_suchen(f,a,b,n)`.
:::loesung
```matlab
f = @(x) exp(-0.3*x).*sin(x);
fplot(f, [0 4*pi])
function [xm, fm] = maximum_suchen(f, a, b, n)
x = linspace(a, b, n);
[fm, k] = max(f(x));
xm = x(k);
end
[xm, fm] = maximum_suchen(f, 0, 4*pi, 1000)   % xm ≈ 1.28, fm ≈ 0.651
```
(Exakt: $f'=0$ ⇒ $\tan x=\frac1{0{,}3}$ ⇒ $x=1{,}279$.)
:::
:::

## Karteikarten

:::karte
Wie speichert MATLAB $p(x)=2x^3-x+5$?
???
`[2 0 -1 5]` (absteigend, fehlende Grade als 0).
:::

:::karte
Wie berechnet `roots` die Nullstellen?
???
Als Eigenwerte der Begleitmatrix.
:::

:::karte
Was macht `polyfit(x,y,n)`?
???
Least-Squares-Polynom vom Grad n; liefert Koeffizienten absteigend.
:::

:::karte
Was ist eine Closure bei anonymen Funktionen?
???
Workspace-Variablen werden beim Erzeugen des Handles kopiert (eingefroren).
:::

:::karte
Runge-Phänomen?
???
Starke Oszillation von Interpolationspolynomen hohen Grads an den Rändern bei äquidistanten Stützstellen.
:::
