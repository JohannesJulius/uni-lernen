---
title: 6.2 Differentialgleichungen II – Standardform, Systeme, Runge-Kutta, ode45
chapter: 6 Differentialgleichungen
minutes: 110
sources: Numerik/Numerik - 09 Differentialgleichungen II.pdf
---

:::ziel
- Gekoppelte DGLs und DGLs höherer Ordnung in die **Standardform** $\dot{\mathbf y}=f(t,\mathbf y)$ bringen.
- Die Schwächen des Euler-Verfahrens (Energiezuwachs) erklären.
- Modifiziertes Euler-Verfahren, RK3, **RK4** formulieren (Analogie zu Mittelpunkt- und Simpsonregel).
- `ode45` korrekt aufrufen und die Ausgabe interpretieren.
:::

## Standardform

Alle numerischen Löser arbeiten mit
$$\dot{\mathbf y}=f(t,\mathbf y),\qquad\mathbf y(t_0)=\mathbf y_0,\qquad\mathbf y\in\mathbb R^n\ (\text{Zustandsvektor}).$$

**Gekoppelte DGLs 1. Ordnung** (zwei thermisch gekoppelte Zellen):
$C\dot T_1=P_1-\lambda(T_1-T_\infty)-\mu(T_1-T_2)$, $C\dot T_2=P_2-\lambda(T_2-T_\infty)-\mu(T_2-T_1)$ ⇒ mit $\mathbf y=(T_1,T_2)^T$ schon Standardform. Euler funktioniert unverändert mit Vektoren.

:::rezept DGL n-ter Ordnung → System 1. Ordnung
1. Nach der höchsten Ableitung auflösen: $\ddot x=g(t,x,\dot x)$.
2. Neue Variablen: $y_1:=x$, $y_2:=\dot x$ (… bis $y_n:=x^{(n-1)}$).
3. System: $\dot y_1=y_2$, $\dot y_2=g(t,y_1,y_2)$.
4. Anfangswerte als Vektor $\mathbf y_0=(x(0),\dot x(0))^T$.
Ordnung $n$ ⇒ $n$ Zustände ⇒ $n$ Anfangsbedingungen.
:::

:::bsp Federschwinger
$m\ddot x+kx=0$ ⇒ $\mathbf y=(x,v)$, $\dot{\mathbf y}=\begin{pmatrix}v\\-\frac kmx\end{pmatrix}$.
:::

## Grenzen des Euler-Verfahrens

Test $\ddot x+x=0$, $x(0)=1$, exakt $x=\cos t$. Euler: $\mathbf y_{n+1}=\begin{pmatrix}1&h\\-h&1\end{pmatrix}\mathbf y_n$; Betrag der Eigenwerte $\sqrt{1+h^2}>1$ ⇒ die Amplitude **wächst** in jedem Schritt, Energie wird künstlich erzeugt (physikalisch falsch!). Kleines $h$ hilft nur langsam (Ordnung 1).

## Runge-Kutta-Verfahren

Idee: mehrere Steigungen im Intervall auswerten und gewichtet mitteln – wie bei den Integrationsregeln.

| Verfahren | Steigungen | Schritt | Analogie | Ordnung |
|---|---|---|---|---|
| Euler | $k_1=f(t_i,y_i)$ | $y_i+hk_1$ | Rechteck | 1 |
| modifiziertes Euler | $k_2=f(t_i+\frac h2,y_i+\frac h2k_1)$ | $y_i+hk_2$ | Mittelpunktregel | 2 |
| RK3 | $k_3=f(t_i+h,y_i+hk_2)$ (Folienvariante) | $y_i+\frac h6(k_1+4k_2+k_3)$ | Simpson | 3 |
| **RK4** | s. u. | $y_i+\frac h6(k_1+2k_2+2k_3+k_4)$ | Simpson | 4 |

:::formel Klassisches Runge-Kutta-Verfahren (RK4)
$$\begin{aligned}k_1&=f(t_i,y_i),&k_2&=f(t_i+\tfrac h2,\ y_i+\tfrac h2k_1),\\k_3&=f(t_i+\tfrac h2,\ y_i+\tfrac h2k_2),&k_4&=f(t_i+h,\ y_i+hk_3),\end{aligned}$$
$$y_{i+1}=y_i+\frac h6\,(k_1+2k_2+2k_3+k_4).$$
Halbierte Schrittweite ⇒ Fehler $\frac1{16}$. Vier Funktionsauswertungen pro Schritt, aber viel größere Schritte möglich.
:::

**Wiederverwendbar als Funktion:**
```matlab
function [t, y] = ode_euler(f, tspan, y0, dt)
t = tspan(1):dt:tspan(2);
y = zeros(length(y0), length(t));   % für 1D und nD
y(:,1) = y0;
for i = 1:length(t)-1
    y(:,i+1) = y(:,i) + dt * f(t(i), y(:,i));
end
end
```
(RK4 analog mit vier `k`-Zeilen im Schleifenrumpf.)

## ode45

Runge-Kutta der Ordnung 4/5 (Dormand-Prince): zwei Verfahren parallel, die Differenz schätzt den Fehler, die **Schrittweite wird automatisch angepasst**.

```matlab
f = @(t, y) [y(2); -y(1)];          % Spaltenvektor zurückgeben!
[t, y] = ode45(f, [0 20], [1; 0]);  % tspan, y0 als Spalte
plot(t, y(:,1), t, y(:,2)), legend('x','v'), grid on
```

| Argument/Ausgabe | Bedeutung |
|---|---|
| `f` | Handle `@(t,y) …`, **beide Argumente**, Rückgabe **Spaltenvektor** |
| `tspan` | `[t0 tend]` (oder Vektor gewünschter Ausgabezeiten) |
| `y0` | Anfangszustand (Spalte) |
| `t` | Zeitpunkte (Spalte, ungleichmäßig!) |
| `y` | eine **Zeile pro Zeitpunkt**, Spalte $k$ = Zustand $k$ |
Achtung: Die eigene `ode_euler` liefert `y` mit Zuständen in **Zeilen** – `ode45` in **Spalten**.

Genauigkeit einstellen: `opts = odeset('RelTol',1e-8); ode45(f, tspan, y0, opts)`. Für steife Systeme: `ode15s`.

## Aufgaben

:::aufgabe 1 (Folien)
Standardform für $m\ddot x+d\dot x+kx=F_0\cos\omega t$, $x(0)=0$, $\dot x(0)=v_0$. Wie viele Komponenten?
:::loesung
$\mathbf y=(x,\dot x)$, zwei Komponenten:
$$\dot{\mathbf y}=\begin{pmatrix}y_2\\\frac1m\big(F_0\cos\omega t-dy_2-ky_1\big)\end{pmatrix},\qquad\mathbf y_0=\begin{pmatrix}0\\v_0\end{pmatrix}.$$
:::
:::

:::aufgabe 2 (Folien – ode45)
$m=1$, $d=0{,}2$, $k=4$, $F_0=1$, $\omega=2$, $\dot x(0)=1$, $t\in[0,30]$. Code und Langzeitverhalten?
:::loesung
```matlab
m=1; d=0.2; k=4; F0=1; w=2;
f = @(t,y) [y(2); (F0*cos(w*t) - d*y(2) - k*y(1))/m];
[t, y] = ode45(f, [0 30], [0; 1]);
plot(t, y(:,1), t, y(:,2)), legend('x','v')
```
$\omega=\sqrt{k/m}=2$: **Resonanz**. Die freie Schwingung klingt ab, die erzwungene wächst auf die stationäre Amplitude $\frac{F_0}{d\,\omega}=2{,}5$ an (Phase −90° zur Anregung); $v$ erreicht 5.
:::
:::

:::aufgabe 3
Ein RK4-Schritt mit $h=0{,}1$ für $\dot y=y$, $y(0)=1$.
:::loesung
$k_1=1$, $k_2=1{,}05$, $k_3=1{,}0525$, $k_4=1{,}10525$ ⇒ $y_1=1+\frac{0{,}1}6(1+2{,}1+2{,}105+1{,}10525)=1{,}1051708$; exakt $e^{0{,}1}=1{,}1051709$ – Fehler $10^{-7}$ (Euler: $1{,}1$, Fehler $5\cdot10^{-3}$).
:::
:::

## Karteikarten

:::karte
Wie bringt man $\ddot x=g(t,x,\dot x)$ in Standardform?
???
$y_1=x$, $y_2=\dot x$: $\dot y_1=y_2$, $\dot y_2=g(t,y_1,y_2)$.
:::

:::karte
RK4-Formel?
???
$y_{i+1}=y_i+\frac h6(k_1+2k_2+2k_3+k_4)$ mit Steigungen am Anfang, zweimal in der Mitte, am Ende.
:::

:::karte
Warum ist Euler für Schwingungen schlecht?
???
Verstärkungsfaktor $\sqrt{1+h^2}>1$: Amplitude/Energie wächst künstlich.
:::

:::karte
Aufruf und Ausgabeformat von ode45?
???
`[t,y]=ode45(f,[t0 tend],y0)`; y: eine Zeile pro Zeitpunkt, Spalte = Zustand.
:::

:::karte
Was macht ode45 intern?
???
Runge-Kutta 4/5 eingebettet, Fehlerschätzung, adaptive Schrittweite.
:::
