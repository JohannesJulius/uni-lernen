---
title: 3 Skripte, Funktionen und Kontrollstrukturen
chapter: 3 Funktionen und Kontrollstrukturen
minutes: 90
sources: Numerik/Numerik - 03 Funktionen Kontrollstrukturen.pdf
---

:::ziel
- Skripte und Funktionen unterscheiden (eigener Workspace, Call by Value).
- Funktionen mit mehreren Ein-/Ausgaben, lokale Funktionen und anonyme Funktionen schreiben.
- `if/elseif/else`, `for`, `while`, `break`, `continue` sicher einsetzen.
- Logische Operatoren für Skalare (`&& || ~`) und Arrays (`& | ~`) richtig wählen; vektorisieren statt Schleifen.
:::

## Skripte und Funktionen

**Skript** (`.m`-Datei mit Befehlsfolge) teilt den Workspace mit dem Command Window – es kann Variablen lesen, überschreiben, löschen.
**Funktion** hat einen **eigenen Workspace**; Ein-/Ausgaben nur über Parameter (**Call by Value** – Änderungen an Parametern wirken nicht nach außen).

```matlab
% kreis.m   (Dateiname = Funktionsname!)
function [umf, fl] = kreis(r)
% KREIS  Umfang und Fläche eines Kreises
%   [umf, fl] = kreis(r)   r: Radius (auch Vektor)
umf = 2*pi*r;
fl  = pi*r.^2;          % .^ damit Vektoren funktionieren
end
```
```matlab
>> [u, f] = kreis(3)    % u = 18.8496, f = 28.2743
>> [~, f] = kreis(3)    % erste Ausgabe ignorieren
```
Die Kommentarzeilen direkt unter dem Kopf erscheinen bei `help kreis`.

**Lokale Funktionen** stehen in einem Skript (ab R2024a beliebig, vorher am Ende) und sind nur dort aufrufbar. **Anonyme Funktionen** (sehr wichtig für die Numerik – `fzero`, `integral`, `ode45`!):
```matlab
f = @(x) x.^2 - 2;      % Funktions-Handle
f(3)                    % 7
g = @(t, y) -2*y;       % mehrere Argumente
```

:::bsp Was passiert hier? (Folien)
```matlab
function f1(x), x = 2*x, end     % lokal
a = [1 2]; f1(a); a               % a bleibt [1 2] – Call by Value
function y = quadrat(x), y = x^2; end
quadrat([1 2 3])                  % Fehler: ^ ist Matrixpotenz, 1x3 nicht quadratisch → x.^2!
function umf = umfang(r), r = 2*pi*r; umf = r; end
r = 10; umfang(3); r              % r bleibt 10 (eigener Workspace)
```
:::

## Kontrollstrukturen

| | Python | MATLAB |
|---|---|---|
| Verzweigung | `if c:` / `elif` / `else:` | `if c` / `elseif` / `else` … `end` |
| Zählschleife | `for k in range(1,n+1):` | `for k = 1:n` … `end` |
| Bedingte Schleife | `while c:` | `while c` … `end` |
| ungleich | `!=` | `~=` |
| und/oder/nicht | `and or not` | `&& \|\| ~` |

**Alle Blöcke enden mit `end`**, Einrückung ist nur Kosmetik.

```matlab
note = 2;
if note == 1
    disp('sehr gut')
elseif note <= 4
    disp('bestanden')
else
    disp('nicht bestanden')
end

summe = 0;
for k = 1:10, summe = summe + k; end     % 55

x = 5; xn = 10;                           % Heron-Verfahren für sqrt(5)
while abs(xn - x/xn) > 1e-10
    xn = 0.5*(xn + x/xn);
end

for k = 1:100, if k^2 > 50, break; end, end      % k = 8
for k = 1:10, if mod(k,2)==0, continue; end, disp(k), end  % 1 3 5 7 9
```

:::achtung Skalar- vs. Array-Logik
- Vergleiche (`<`, `==`, `~=` …) auf Arrays liefern **logische Arrays**.
- `if` auf ein Array ist nur wahr, wenn **alle** Elemente wahr sind – keine elementweise Verzweigung!
- In `if`/`while` immer `&&`/`||` (Short-Circuit): `~isempty(v) && v(1) > 10` ist sicher, `&` würde `v(1)` auswerten ⇒ Fehler.
- `&`, `|` nur für elementweise Array-Logik: `x(x>2 & x<6)`.
:::

**Vektorisieren:** `y = sin(x)` ist ~100-mal schneller als eine Schleife. Schleifen nur, wenn jeder Schritt vom vorigen abhängt (Iterationen wie Heron, Newton, Euler-Verfahren).

## Aufgaben

:::aufgabe 1 (Folien)
Übersetze nach MATLAB: `def widerstand(L, A): rho = 1.68e-8; return rho*L/A`. Dateiname? Aufruf für $L=10\,$m, $A=10^{-6}\,$m²? Funktioniert es für Vektoren?
:::loesung
```matlab
% widerstand.m
function R = widerstand(L, A)
rho = 1.68e-8;          % Kupfer, Ohm*m
R = rho .* L ./ A;
end
```
Datei `widerstand.m`; `widerstand(10, 1e-6)` = 0,168 Ω. Mit `.*`/`./` auch für Vektoren `L = [1 5 10]`.
:::
:::

:::aufgabe 2 (Folien)
`betrag.m` ohne `abs`. Warum funktioniert `betrag([1 -2 3])` mit `if` nicht?
:::loesung
```matlab
function y = betrag(x)
if x >= 0, y = x; else, y = -x; end
end
```
Für `[1 -2 3]` ist `x>=0` = `[1 0 1]`, nicht alle wahr ⇒ else-Zweig ⇒ `[-1 2 -3]`. Vektorisiert: `y = x; y(x<0) = -x(x<0);` oder `y = x.*sign(x)`.
:::
:::

:::aufgabe 3 (Folien)
`fakultaet.m` mit `for`. Was gibt `fakultaet(0)`? Ab wann `Inf`? Einzeilige Lösung?
:::loesung
```matlab
function f = fakultaet(n)
f = 1;
for k = 1:n, f = f*k; end
end
```
`fakultaet(0)` = 1 (Schleife läuft nicht) ✓. Ab $n=171$ ist $n!>1{,}8\cdot10^{308}$ ⇒ `Inf`. Einzeilig: `prod(1:n)` bzw. `factorial(n)`.
:::
:::

:::aufgabe 4
Was liefert `x=[1 5 3 8 2]; x(~(x>4))`, `x(x<2 | x>6)`?
:::loesung
`[1 3 2]` und `[1 8]`.
:::
:::

## Karteikarten

:::karte
Skript vs. Funktion?
???
Skript teilt den Workspace; Funktion hat eigenen Workspace, Parameter by Value.
:::

:::karte
Funktionskopf mit zwei Ausgaben?
???
`function [a, b] = name(x)` – Datei name.m.
:::

:::karte
Anonyme Funktion für f(x)=x²−2?
???
`f = @(x) x.^2 - 2;`
:::

:::karte
`&&` oder `&` im if?
???
`&&` (Short-Circuit, Skalare); `&` für elementweise Arrays.
:::

:::karte
Ungleich-Operator in MATLAB?
???
`~=`
:::
