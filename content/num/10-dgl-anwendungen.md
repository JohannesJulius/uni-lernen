---
title: 6.3 Differentialgleichungen III – Anwendungen: Fallschirm, Pendel, Fußball, thermische Kette, Biegelinie
chapter: 6 Differentialgleichungen
minutes: 110
sources: Numerik/Numerik - 10 Differentialgleichungen III.pdf
---

:::ziel
- Das Schema **Standardform → Handle → `ode45` → Spalten extrahieren → plotten** auf verschiedene Probleme anwenden.
- Mit `subplot` mehrere Größen übersichtlich darstellen.
- Nichtlineare, gekoppelte und ortsabhängige Probleme numerisch lösen und mit analytischen Grenzwerten kontrollieren.
:::

## Subplots

```matlab
t = 0:0.01:20;
subplot(2,1,1), plot(t, cos(t), 'b'), title('Federschwinger'), ylabel('x [m]'), grid on
subplot(2,1,2), plot(t, -sin(t), 'r'), xlabel('t [s]'), ylabel('v [m/s]'), grid on
```
`subplot(m,n,k)`: $m$ Zeilen, $n$ Spalten, $k$-tes Feld (zeilenweise gezählt). Moderne Alternative: `tiledlayout(2,1); nexttile`.

## Anwendungen

| Beispiel | Ordnung | Zustand | Besonderheit |
|---|---|---|---|
| Fallschirm | 1 | $v$ | nichtlinear ($v^2$) |
| Pendel | 2 | $(\varphi,\dot\varphi)$ | nichtlinear ($\sin\varphi$) |
| Fußball | 4 | $(x,\dot x,y,\dot y)$ | gekoppelt, nichtlinear |
| thermische Kette | 3 | $(T_1,T_2,T_3)$ | gekoppelt, linear |
| Biegelinie | 2 | $(w,w')$ | Ort $x$ statt Zeit |

### Fallschirm
$m\dot v=mg-c_wv^2$ ⇒ $\dot v=g-\frac{c_w}mv^2$, $v_0=0$. Grenzgeschwindigkeit ($\dot v=0$): $v^*=\sqrt{\frac{mg}{c_w}}=\sqrt{\frac{80\cdot9{,}81}{0{,}5}}=39{,}6\,$m/s (143 km/h).
```matlab
m = 80; g = 9.81; cw = 0.5;
f = @(t, v) g - (cw/m)*v.^2;
[t, v] = ode45(f, [0 30], 0);
plot(t, v), yline(sqrt(m*g/cw), '--')
% Fallschirm öffnet bei t = 10 s:
f2 = @(t, v) g - ((0.5 + 19.5*(t >= 10))/m)*v.^2;
```
Mit $c_w=20\,$kg/m: $v^*=\sqrt{80\cdot9{,}81/20}=6{,}3\,$m/s. (Tipp bei Sprüngen in $f$: `ode45` in zwei Abschnitten aufrufen, sonst wählt es winzige Schritte.)

### Nichtlineares Pendel
$\ddot\varphi=-\frac gl\sin\varphi$ ⇒ $\mathbf y=(\varphi,\dot\varphi)$, $\dot y_1=y_2$, $\dot y_2=-\frac gl\sin y_1$. Linearisiert ($\sin\varphi\approx\varphi$): $\dot y_2=-\frac gly_1$ (harmonisch, Periode $2\pi\sqrt{l/g}$ unabhängig von der Amplitude).
```matlab
g = 9.81; l = 1; phi0 = 2.5;
f_nl  = @(t,y) [y(2); -(g/l)*sin(y(1))];
f_lin = @(t,y) [y(2); -(g/l)*y(1)];
[t1,y1] = ode45(f_nl,  [0 10], [phi0; 0]);
[t2,y2] = ode45(f_lin, [0 10], [phi0; 0]);
plot(t1, y1(:,1), t2, y2(:,1)), legend('nichtlinear','linearisiert')
```
Bei 0,3 rad praktisch gleich; ab etwa 1 rad (57°) läuft die nichtlineare Lösung merklich nach (längere Periode); bei 2,5 rad ist die Periode fast doppelt so lang.

### Fußball mit Luftwiderstand
$m\ddot x=-c_wv\dot x$, $m\ddot y=-mg-c_wv\dot y$, $v=\sqrt{\dot x^2+\dot y^2}$ – zwei DGLs 2. Ordnung ⇒ **4 Zustände** $\mathbf z=(x,\dot x,y,\dot y)$.
```matlab
m = 0.43; g = 9.81; cw = 0.01; v0 = 25; a = 30*pi/180;
f = @(t,z) [z(2); -cw/m*sqrt(z(2)^2+z(4)^2)*z(2); z(4); -g - cw/m*sqrt(z(2)^2+z(4)^2)*z(4)];
[~, z]  = ode45(f, [0 2.5], [0; v0*cos(a); 0; v0*sin(a)]);
[~, z0] = ode45(@(t,z) [z(2); 0; z(4); -g], [0 2.5], [0; v0*cos(a); 0; v0*sin(a)]);
plot(z(:,1), z(:,3), z0(:,1), z0(:,3)), ylim([0 inf])
```
Ohne Widerstand ist 45° optimal. Mit Widerstand liegt das Optimum **darunter** (hier etwa 35–40°): Bei steilen Bahnen ist der Ball länger in der Luft und verliert mehr horizontale Geschwindigkeit. (Tipp: `odeset('Events', …)` stoppt bei $y=0$.)

### Thermische Kette
$C\dot T_1=P-\lambda_{12}(T_1-T_2)$, $C\dot T_2=\lambda_{12}(T_1-T_2)-\lambda_{23}(T_2-T_3)$, $C\dot T_3=\lambda_{23}(T_2-T_3)-\lambda_3(T_3-T_\infty)$; $C=100$, $\lambda_{12}=\lambda_{23}=5$, $\lambda_3=2\,$W/K, $P=50\,$W, alle Anfangswerte 20 °C.
```matlab
C=100; L12=5; L23=5; L3=2; P=50; Tinf=20;
f = @(t,T) [(P - L12*(T(1)-T(2)))/C;
            (L12*(T(1)-T(2)) - L23*(T(2)-T(3)))/C;
            (L23*(T(2)-T(3)) - L3*(T(3)-Tinf))/C];
[t, T] = ode45(f, [0 500], [20; 20; 20]);
plot(t, T)
```
Reihenfolge der Erwärmung: 1, 2, 3. Gleichgewicht (alle 50 W fließen durch die Kette): $T_3=20+\frac{50}2=45$, $T_2=45+\frac{50}5=55$, $T_1=65\,$°C (nach 500 s noch nicht ganz erreicht – die langsamste Zeitkonstante ist groß). Mit Leistungsimpuls (300 W für 50 s): $T_1$ schießt hoch, die Wärme „wandert" durch die Kette, $T_3$ hat sein Maximum am spätesten.

### Biegelinie als AWP (Ort statt Zeit)
Kragarm mit Gleichlast, Durchbiegung $y$ nach **oben** positiv (daher anderes Vorzeichen als in TM 2): $EI\,y''(x)=-\frac q2(L-x)^2$. Standardform $\mathbf z=(y,y')$, Anfangswerte an der Einspannung $\mathbf z_0=(0,0)$.
```matlab
E = 210e9; I = 1e-6; L = 2; q = 1000; EI = E*I;
f = @(x,z) [z(2); -q*(L-x)^2/(2*EI)];
[x, z] = ode45(f, [0 L], [0; 0]);
plot(x, -z(:,1)*1e3)
q*L^4/(8*EI)*1e3        % analytisch: 9.524 mm
```
Doppelte Länge ⇒ $w\propto L^4$ ⇒ **16-fach**. (Vgl. TM 2: $w_{max}=\frac{qL^4}{8EI}$.)

## Aufgaben

:::aufgabe 1
Schreibe für jedes der fünf Beispiele die Anzahl der Anfangsbedingungen und deren physikalische Bedeutung auf.
:::loesung
Fallschirm 1 ($v_0$); Pendel 2 ($\varphi_0$, $\dot\varphi_0$); Fußball 4 (Startort $x_0,y_0$, Geschwindigkeitskomponenten $v_0\cos\alpha$, $v_0\sin\alpha$); Kette 3 (Starttemperaturen); Biegelinie 2 (Durchbiegung und Neigung an der Einspannung = 0).
:::
:::

:::aufgabe 2
Erzeuge für den Federschwinger ($m=1$, $k=4$, $x_0=1$) die beiden Subplots $x(t)$ und $v(t)$ aus der `ode45`-Lösung.
:::loesung
```matlab
f = @(t,y) [y(2); -4*y(1)];
[t, y] = ode45(f, [0 10], [1; 0]);
subplot(2,1,1), plot(t, y(:,1)), ylabel('x [m]'), grid on
subplot(2,1,2), plot(t, y(:,2)), ylabel('v [m/s]'), xlabel('t [s]'), grid on
```
Exakt: $x=\cos2t$, $v=-2\sin2t$.
:::
:::

## Karteikarten

:::karte
Allgemeines Schema der numerischen DGL-Lösung?
???
Standardform → Function Handle f(t,y) → ode45 → y(:,k) extrahieren → plotten.
:::

:::karte
Grenzgeschwindigkeit Fallschirm?
???
$v^*=\sqrt{mg/c_w}$
:::

:::karte
Wie viele Zustände hat der 2D-Wurf mit Luftwiderstand?
???
Vier: x, ẋ, y, ẏ.
:::

:::karte
`subplot(2,2,3)`?
???
2×2-Raster, drittes Feld = unten links.
:::
