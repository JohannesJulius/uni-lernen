---
title: 7.2 Simulink II – DGL 2. Ordnung, Schwingungen, Resonanz, nichtlineare DGL, Solver, Datenexport
chapter: 7 Einführung in Simulink
minutes: 90
sources: Numerik/Numerik - 12 Simulink II.pdf
---

:::ziel
- DGLs $n$-ter Ordnung mit $n$ **Integratoren in Reihe** modellieren.
- Gedämpfte und angeregte Schwingung inkl. **Resonanz** simulieren.
- Nichtlineare Terme (Product-Block) einbauen; Flugzeug-Bremsvorgang.
- Solver (ode1/ode4/ode45, Max Step Size) wählen; Ergebnisse mit To Workspace/Out exportieren und in MATLAB auswerten.
:::

## DGL 2. Ordnung: zwei Integratoren

$m\ddot x+kx=0$ ⇒ $\ddot x=-\frac kmx$. Euler hat zwei Akkumulationszeilen ($x$ und $\dot x$) ⇒ **zwei Integratoren**:
$$\ddot x\ \to\ \boxed{\tfrac1s}\ \to\ \dot x\ \to\ \boxed{\tfrac1s}\ \to\ x\ \to\ \boxed{-k/m}\ \to\ \ddot x\ (\text{zurück}).$$

:::rezept DGL n-ter Ordnung → Signalflussplan
1. Nach der höchsten Ableitung auflösen.
2. $n$ Integratoren in Reihe zeichnen.
3. Ausgänge benennen: $y^{(n-1)},\ldots,\dot y,y$.
4. Rechte Seite als Signalpfad aus diesen Signalen aufbauen (Gain, Sum, Product, Quellen).
5. Ergebnis in den **ersten** Integratoreingang zurückführen; **Anfangswerte** an jedem Integrator setzen ($\dot x(0)$ am ersten, $x(0)$ am zweiten).
:::

## Gedämpfte und angeregte Schwingung

$m\ddot x+d\dot x+kx=F_0\cos\omega t$ ⇒ $\ddot x=\frac1m(F_0\cos\omega t-d\dot x-kx)$: zwei Rückführungen (über $-d/m$ von $\dot x$, über $-k/m$ von $x$) plus Sine-Wave-Block in den Summierer.

Mit $m=1$, $d=0{,}1$, $k=1$, $F_0=1$:
- $\omega=0{,}5$: nach dem Einschwingen harmonische Antwort mit Amplitude $\frac{F_0}{\sqrt{(k-m\omega^2)^2+(d\omega)^2}}\approx1{,}33$, in Phase mit der Anregung.
- $\omega=\omega_0=\sqrt{k/m}=1$: **Resonanz** – Amplitude wächst langsam bis $\frac{F_0}{d\omega_0}=10$ (Phase −90°). Ohne Dämpfung wüchse sie unbegrenzt.
(Theorie dazu: Mathe 2, Kap. 20 – Feder-Masse-Dämpfer.)

## Nichtlineare DGL: Flugzeug bremst nach der Landung

$$\dot v=-c_1v-c_2v^2,\qquad v(0)=\frac{300}{3{,}6}=83{,}3\,\mathrm{m/s},\quad c_1=0{,}4\,\mathrm s^{-1},\ c_2=0{,}004\,\mathrm m^{-1}.$$
Signalfluss: Integrator-Ausgang $v$ → Gain($-c_1$) → Sum; $v$ und $v$ in einen **Product**-Block → $v^2$ → Gain($-c_2$) → Sum → $\dot v$ → Integrator (IC 83,3).
Für Simulink ist Nichtlinearität kein Problem – „analytisch schwer, numerisch trivial". (Diese Bernoulli-DGL ist sogar analytisch lösbar: $v(t)=\frac{c_1v_0e^{-c_1t}}{c_1+c_2v_0(1-e^{-c_1t})}$ ⇒ $v<5\,$m/s nach **≈ 5,6 s**.)

## Solver und Datenexport

Modeling → Model Settings → Solver:
| Solver | Eigenschaft |
|---|---|
| ode45 (variabel) | Standard, adaptive Schrittweite |
| ode4 (fest) | RK4, feste Schrittweite – vorhersehbar (Echtzeit) |
| ode1 (fest) | Euler – anschaulich, **instabil** bei großen Schritten (Federschwinger divergiert!) |
| Max Step Size | begrenzt die Schrittweite (glatte Scope-Kurven) |

**Export:** To-Workspace-Block (z. B. Variable `x_sim`) oder Out-Block + Data Import/Export ⇒ `tout`, `yout`. Danach in MATLAB auswerten:
```matlab
out = sim('federschwinger');            % Modell starten
t = out.tout;  x = out.x_sim;           % je nach Einstellung (Timeseries: x.Data, x.Time)
plot(t, x, t, cos(t), '--')
err = max(abs(x - cos(t)))              % halbe Schrittweite: ode1 -> Fehler halbiert, ode4 -> /16
```

## Aufgaben

:::aufgabe 1 (Folien)
Harmonischer Oszillator $m=k=1$, $x(0)=1$, $\dot x(0)=0$ in Simulink. Welche Blöcke, welche Anfangswerte, welches Ergebnis?
:::loesung
Zwei Integratoren (IC: erster 0 für $\dot x$, zweiter 1 für $x$), Gain $-k/m=-1$ vom Ausgang $x$ zurück zum ersten Eingang; Mux mit $x$, $\dot x$ → Scope. Ergebnis $x=\cos t$, $\dot x=-\sin t$. Mit `k`, `m` als Workspace-Variablen: Gain-Parameter `-k/m`.
:::
:::

:::aufgabe 2 (Folien – Bremsvorgang, Variante B)
MATLAB-Function-Block für den Bremsvorgang; wann ist $v<5\,$m/s?
:::loesung
```matlab
function v_dot = f(v)
c1 = 0.4; c2 = 0.004;
v_dot = -c1*v - c2*v^2;
end
```
Integrator IC 300/3.6. Auswertung in MATLAB: `t(find(v < 5, 1))` ≈ 5,6 s.
:::
:::

:::aufgabe 3
Warum divergiert der Federschwinger mit ode1 bei großer Schrittweite, mit ode45 aber nicht?
:::loesung
Euler verstärkt die Amplitude pro Schritt um $\sqrt{1+(\omega_0h)^2}>1$ (Lektion 6.2). ode45 ist von höherer Ordnung und regelt die Schrittweite über eine Fehlerschätzung – der Fehler bleibt unter der Toleranz.
:::
:::

## Karteikarten

:::karte
Wie viele Integratoren für eine DGL 3. Ordnung?
???
Drei, in Reihe; Anfangswerte an jedem Integrator.
:::

:::karte
Wie bildet man $v^2$ in Simulink?
???
Product-Block mit beiden Eingängen am Signal v (oder Math Function u²).
:::

:::karte
Resonanzamplitude des gedämpften Schwingers?
???
$\approx\frac{F_0}{d\,\omega_0}$ bei $\omega=\omega_0=\sqrt{k/m}$.
:::

:::karte
Wie kommen Simulink-Ergebnisse nach MATLAB?
???
To-Workspace- oder Out-Block (tout/yout bzw. out = sim(...)).
:::
