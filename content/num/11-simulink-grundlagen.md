---
title: 7.1 Simulink I – Vom Anfangswertproblem zum Signalflussplan
chapter: 7 Einführung in Simulink
minutes: 90
sources: Numerik/Numerik - 11 Simulink I.pdf
---

:::ziel
- Verstehen, was Simulink ist: ein **Signalflussplan** = grafische for-Schleife des Euler-Verfahrens.
- Die Grundblöcke Integrator ($\frac1s$), Gain, Sum, Constant, Product, Scope, Mux, MATLAB Function kennen.
- Eine DGL 1. Ordnung (Batteriezelle) in Simulink aufbauen – mit MATLAB-Function-Block und mit Elementarblöcken.
- Subsysteme, Workspace-Parameter, From/To Workspace nutzen.
:::

## Was ist Simulink?

Blockbasierte, grafische Simulationsumgebung in MATLAB. Statt einen Algorithmus zu schreiben, beschreibt man das **System**: Blöcke berechnen Operationen, Linien transportieren **Signale**. Einsatz in der Industrie (Regelungstechnik, Luftfahrt, Automotive) – Modelle lassen sich direkt in **C-Code** für eingebettete Hardware übersetzen.

**Dynamisches System:** Der Ausgang hängt von einem gespeicherten **Zustand** ab (Batterie: Eingänge $P(t)$, $T_\infty$; Zustand und Ausgang $T(t)$).

## Vom Euler-Schritt zum Signalflussplan

Der Euler-Schritt besteht aus zwei Operationen:
$$\dot y_n=f(t_n,y_n)\quad(\text{Block }f),\qquad y_{n+1}=y_n+\Delta t\,\dot y_n\quad(\text{Integrator}).$$
$y$ steht auf beiden Seiten ⇒ **Rückkopplung**:

<svg viewBox="0 0 460 120" width="460" style="max-width:100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="14">
<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<rect x="110" y="25" width="90" height="44" rx="6" fill="none" stroke="#7a4fc4" stroke-width="2"/><text x="130" y="52">f(t, y)</text>
<rect x="260" y="25" width="70" height="44" rx="6" fill="none" stroke="#7a4fc4" stroke-width="2"/><text x="285" y="47">1</text><line x1="278" y1="51" x2="300" y2="51" stroke="currentColor"/><text x="285" y="64">s</text>
<line x1="200" y1="47" x2="258" y2="47" stroke="currentColor" marker-end="url(#ar)"/><text x="222" y="40">ẏ</text>
<line x1="330" y1="47" x2="420" y2="47" stroke="currentColor" marker-end="url(#ar)"/><text x="400" y="40">y</text>
<polyline points="380,47 380,100 60,100 60,47 108,47" fill="none" stroke="currentColor" marker-end="url(#ar)"/>
<text x="170" y="95">Rückkopplung</text>
</svg>

**Ein Signalflussplan ist eine grafische for-Schleife.**
- Der $f$-Block hat **keinen** Zustand (rechnet direkt).
- Der **Integrator** speichert den Zustand $y_n$ (Ausgang) und schreibt ihn fort (Eingang: $\dot y$). Parameter: **Anfangsbedingung** $y_0$. Symbol $\frac1s$ (Laplace: Integration ≙ Division durch $s$).
- Der **Solver** treibt die Schleife an (Zeitschritte): ode1 = Euler, ode4 = RK4 (fest), **ode45** (variabel, Standard).

## Wichtige Blöcke

| Block | Funktion |
|---|---|
| Integrator $\frac1s$ | Zustand; Eingang Ableitung, Ausgang Größe |
| Constant | fester Wert ($P$, $\lambda$, $T_\infty$) |
| Gain | Signal × Konstante |
| Sum | addieren/subtrahieren (Vorzeichen `+-` einstellbar) |
| Product | Signal × Signal (z. B. $v^2$) |
| MATLAB Function | beliebige Funktion `function ydot = f(y)` |
| Scope | Zeitverlauf anzeigen |
| Mux | Signale zu Vektor bündeln (mehrere Kurven in einem Scope) |
| Sine Wave, Step | Anregungen |
| From / To Workspace | Daten aus/in den MATLAB-Workspace |

## Batterie-DGL in Simulink

$\dot T=\frac{P-\lambda(T-T_\infty)}{C_{th}}$, $P=125\,$W, $T_\infty=25\,$°C, $C_{th}=100\,$J/K, $\lambda=2\,$W/K, $T_0=25\,$°C.

:::rezept Variante A – MATLAB Function
1. Neues Modell; Blöcke MATLAB Function, Integrator, Scope platzieren.
2. Im Function-Block: `function T_dot = f(T)` … `T_dot = (P - lam*(T - Tinf))/Cth;` (Parameter aus dem Workspace bzw. als Block-Parameter).
3. Verbinden: f → Integrator → Scope, **Integrator-Ausgang zurück auf f** (Rückkopplung!).
4. Integrator: Initial Condition = 25.
5. Stoppzeit 360 s, simulieren. Ergebnis: Anstieg Richtung 87,5 °C mit $\tau=50\,$s.
:::

**Variante B – Elementarblöcke:** $T\to[\text{Sum: }-T_\infty]\to[\text{Gain }\lambda]\to[\text{Sum: }P-\ldots]\to[\text{Gain }\frac1{C_{th}}]\to\dot T\to[\frac1s]\to T$ (zurück an den Anfang). Macht die Rechenoperationen sichtbar und eignet sich direkt zur Codegenerierung.

**Subsystem:** Markieren → „Create Subsystem" ⇒ Block „Zelle" mit Eingang $P(t)$, Ausgang $T(t)$; zwei thermisch gekoppelte Zellen = zwei Subsysteme verbinden (Komposition).

**Parameter und Schnittstellen:**
```matlab
Cth = 100; lam = 2; P = 125; Tinf = 25;      % Workspace – Blöcke lesen sie
t = [0 600 1200 1800 2400 3600];  Pm = [50 200 800 400 100 0];
lastprofil = timeseries(Pm, t);              % From Workspace: "lastprofil"
```
Simulink interpoliert zwischen den Stützstellen. „Simulink modelliert, MATLAB analysiert."

## Aufgaben

:::aufgabe 1
Zeichne den Signalflussplan für $\dot y=-2y+\sin t$, $y(0)=1$ aus Elementarblöcken.
:::loesung
Sine Wave ($\sin t$) → Sum (+) ; Integrator-Ausgang $y$ → Gain (−2) → Sum (+); Sum-Ausgang = $\dot y$ → Integrator (IC = 1) → $y$ → Scope, und zurück auf den Gain.
:::
:::

:::aufgabe 2
Welche Simulink-Größe entspricht in der Euler-Schleife `T(n+1) = T(n) + dt*f(t(n),T(n))` (a) `T(n)`, (b) `f(...)`, (c) `dt`, (d) die Schleife selbst?
:::loesung
(a) Integrator-Ausgang (Zustand), (b) Ausgang des f-Blocks = Integrator-Eingang, (c) Solver-Schrittweite, (d) der Solver.
:::
:::

## Karteikarten

:::karte
Was ist ein Signalflussplan?
???
Grafische Form der Integrationsschleife: Blöcke = Operationen, Linien = Signale, Integrator speichert den Zustand.
:::

:::karte
Was bedeutet 1/s am Integratorblock?
???
Integration (Laplace-Notation); Parameter: Anfangsbedingung.
:::

:::karte
Wozu Mux?
???
Mehrere Signale zu einem Vektorsignal bündeln, z. B. für ein gemeinsames Scope.
:::

:::karte
Wie bringt man Messdaten in Simulink?
???
`timeseries` im Workspace + From-Workspace-Block.
:::
