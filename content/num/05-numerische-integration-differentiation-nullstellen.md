---
title: 4.2 Analysis II – Numerische Integration (trapz, cumtrapz, integral), Ableitung, Nullstellen
chapter: 4 Analysis
minutes: 100
sources: Numerik/Numerik - 05 Analysis II.pdf; Mathe 1/IngMath1_slides_3_ana_11_integration_numerik_trapezregel.pdf; Mathe 1/IngMath1_slides_3_ana_12_integration_numerik_Kepler_Fassregel.pdf
---

:::ziel
- Messdaten mit Rechteck- und **Trapezregel** integrieren (`trapz`, `cumtrapz`), auch bei ungleichen Abständen.
- Analytische Funktionen mit `integral` (adaptiv) integrieren; Simpson/Keplersche Fassregel einordnen.
- Wissen, wann `trapz` und wann `integral`.
- Ergänzend: numerische Ableitung (`diff`, Differenzenquotienten) und Nullstellen (`fzero`, Newton).
:::

## Warum numerisch integrieren?

`polyint` hilft nur bei Polynomen. Für $U(z)=3{,}6+0{,}3\tanh(5z-2{,}5)$, $e^{-x^2}$ oder **Messdaten** $I(t)$ gibt es keine (brauchbare) Stammfunktion.

**Batterie:** Ladezustand $z=\frac Q{Q_{max}}\in[0,1]$, $I=\frac{\d Q}{\d t}$ ⇒ $Q=\int_{t_0}^{t_1}I\,\d t$ – Grundlage jedes Batteriemanagementsystems.

## Messdaten: Rechteck- und Trapezregel

Ladestrom alle 10 s: $I=[5{,}0;\,4{,}8;\,4{,}2;\,3{,}5;\,2{,}8;\,1{,}5;\,0{,}5]\,$A.

- **Rechteckregel:** $Q\approx\sum I_i\Delta t=(5+4{,}8+4{,}2+3{,}5+2{,}8+1{,}5)\cdot10=218\,$As (letzter Punkt ignoriert, systematischer Fehler).
- **Trapezregel:** Gerade zwischen den Punkten:
$$Q\approx\sum_{i=1}^{n-1}\frac{I_i+I_{i+1}}2(t_{i+1}-t_i)=195{,}5\,\mathrm{As}.$$
Funktioniert direkt auch für **ungleichmäßige** Zeitabstände.

```matlab
t = 0:10:60;  I = [5.0 4.8 4.2 3.5 2.8 1.5 0.5];
Qr = sum(I(1:end-1)*10)     % 218  Rechteck
Q  = trapz(t, I)            % 195.5 Trapez
Q_Ah = Q/3600               % in Ah
Qk = cumtrapz(t, I);        % kumulierte Ladung, Qk(1)=0, Qk(end)=Q
plot(t, Qk)
```
`trapz(y)` ohne $t$ nimmt $\Delta t=1$ an.

:::merke Fehlerordnung (Mathe 1)
Trapezregel: Fehler $\sim h^2$ (exakt für Geraden). Simpson-Regel (Parabeln durch je 3 Punkte): Fehler $\sim h^4$, exakt bis Grad 3:
$$\int_a^bf\,\d x\approx\frac{b-a}6\Big(f(a)+4f\big(\tfrac{a+b}2\big)+f(b)\Big)\quad(\text{Keplersche Fassregel: }V=\tfrac h6(A_1+4A_m+A_2)).$$
:::

## Funktionen: integral

```matlab
U = @(z) 3.6 + 0.3*tanh(5*z - 2.5);
E = 3 * integral(U, 0, 1)      % Energie in Wh bei Q = 3 Ah -> 10.8 Wh
```
`integral(f,a,b)` wählt die Stützstellen selbst, schätzt den Fehler und verfeinert **adaptiv** (Gauß-Kronrod) – sehr genau. `f` muss **vektorisiert** sein. Auch uneigentliche Integrale: `integral(@(x) exp(-x.^2), -Inf, Inf)` = $\sqrt\pi$.

| | `trapz` | `integral` |
|---|---|---|
| Eingabe | Messdaten (Vektoren) | Function Handle |
| Stützstellen | durch Messung vorgegeben | automatisch, adaptiv |
| Genauigkeit | hängt von Abtastrate ab | hoch |
| Einsatz | Sensordaten | physikalische Modelle |

## Ergänzung: numerische Ableitung

Für Messdaten oder Funktionen ohne einfache Ableitung (Gliederungspunkt „Ableitung"):
$$f'(x)\approx\frac{f(x+h)-f(x)}h\ (\text{vorwärts},\ O(h)),\qquad f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}\ (\text{zentral},\ O(h^2)).$$
```matlab
t = 0:0.1:5;  s = 4.9*t.^2;          % Weg
v = diff(s)./diff(t);                 % Vorwärtsdifferenzen, ein Element kürzer!
v2 = gradient(s, 0.1);                % zentral, gleiche Länge
```
:::achtung
$h$ nicht zu klein wählen: Rundungsfehler ($\sim\varepsilon/h$, $\varepsilon\approx2{,}2\cdot10^{-16}$) wachsen – optimal $h\approx10^{-8}$ (vorwärts) bzw. $10^{-5}$ (zentral). Messrauschen wird durch Ableiten **verstärkt**.
:::

## Ergänzung: Nullstellen

```matlab
f = @(x) cos(x) - x;
x0 = fzero(f, 1)          % 0.7391 (Startwert)
x0 = fzero(f, [0 1])      % Intervall mit Vorzeichenwechsel (sicher)
```
Prinzipien: **Bisektion** (Intervall halbieren, Vorzeichenwechsel – langsam, sicher), **Newton** $x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}$ (quadratisch schnell, braucht guten Startwert und $f'$ – vgl. Mathe-1-Lektion Newton-Verfahren). `fzero` kombiniert sicher und schnell.

## Aufgaben

:::aufgabe 1 (Folien-Übung trapz)
Entladung einer 10-Ah-Batterie: `t = 0:600:3600`, `I = [8.0 7.5 6.8 5.9 4.5 2.8 0.5]`. (1) Ladung in As/Ah, (2) Prozent entladen, (3) `cumtrapz`-Plot.
:::loesung
`Q = trapz(t,I)` $=600\,(4+7{,}5+6{,}8+5{,}9+4{,}5+2{,}8+0{,}25)=19\,050\,$As $=5{,}29\,$Ah ⇒ **52,9 %** entladen. `plot(t, cumtrapz(t,I)/3600)`.
:::
:::

:::aufgabe 2 (Folien-Denkaufgabe – adaptives Sampling)
Sensor speichert nur bei Stromänderung > 100 mA: `t=[0 1800 3600]`, `I=[2 8 8]`, Laststrom springt bei 30 min. `trapz` liefert 6,5 Ah. Was war wirklich?
:::loesung
Bis 1800 s war $I=2\,$A konstant (keine Änderung ⇒ kein Messpunkt), dann Sprung auf 8 A. Wirklich: $2\cdot1800+8\cdot1800=18\,000\,$As $=5\,$Ah. Die Trapezregel unterstellt einen linearen Anstieg und überschätzt um 30 %. Passend ist hier die **Rechteckregel mit „Wert halten" bis zum nächsten Punkt** (Zero-Order-Hold): `sum(I(1:end-1).*diff(t))`.
:::
:::

:::aufgabe 3 (Folien-Übung integral)
LFP-Zelle $U(z)=3{,}3+0{,}2\tanh(5z-1{,}5)$, $Q=10\,$Ah. (2) Restenergie bei 20 %, (3) Energie voll geladen.
:::loesung
```matlab
U = @(z) 3.3 + 0.2*tanh(5*z - 1.5);
fplot(U, [0 1])
E20  = 10*integral(U, 0, 0.2)   % Restenergie bei 20 %  ≈ 6.30 Wh
Evoll = 10*integral(U, 0, 1)    % ≈ 33.8 Wh
```
Exakt mit $\int\tanh(5z-1{,}5)\,\d z=\frac15\ln\cosh(5z-1{,}5)$: $E_{voll}=10\,(3{,}3+0{,}2\cdot0{,}3905)=33{,}8\,$Wh; zwischen 20 % und 100 % stecken $27{,}5\,$Wh, also bei 20 % Ladezustand noch $33{,}8-27{,}5=6{,}3\,$Wh.
:::
:::

:::aufgabe 4
Berechne $\int_0^1e^{-x^2}\d x$ mit Trapezregel ($h=0{,}25$) und vergleiche mit `integral`.
:::loesung
Werte: 1; 0,9394; 0,7788; 0,5698; 0,3679. Trapez: $0{,}25\,(0{,}5+0{,}9394+0{,}7788+0{,}5698+0{,}1839)=0{,}7430$. `integral` → 0,7468. Fehler 0,5 %.
:::
:::

## Karteikarten

:::karte
Trapezregel (allgemein, ungleiche Abstände)?
???
$\sum\frac{y_i+y_{i+1}}2(x_{i+1}-x_i)$ – `trapz(x,y)`.
:::

:::karte
trapz oder integral?
???
trapz für Messdaten (feste Stützstellen), integral für Function Handles (adaptiv, genau).
:::

:::karte
Was liefert cumtrapz?
???
Das kumulierte Integral an jeder Stützstelle (Startwert 0).
:::

:::karte
Zentraler Differenzenquotient und Ordnung?
???
$\frac{f(x+h)-f(x-h)}{2h}$, Fehler $O(h^2)$.
:::

:::karte
Wie findet man in MATLAB eine Nullstelle von f?
???
`fzero(f, x0)` bzw. `fzero(f, [a b])` mit Vorzeichenwechsel; Polynome: `roots`.
:::
