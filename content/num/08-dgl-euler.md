---
title: 6.1 Differentialgleichungen I – Motivation, Begriffe, analytische Lösung, Euler-Verfahren
chapter: 6 Differentialgleichungen
minutes: 100
sources: Numerik/Numerik - 08 Differentialgleichungen I.pdf
---

:::ziel
- Erkennen, wann aus einer Bilanz eine **Differentialgleichung** wird (Batterie-Erwärmung).
- Begriffe: Ordnung, Anfangswertproblem, gewöhnliche/partielle DGL.
- Eine lineare DGL 1. Ordnung analytisch lösen; Gleichgewicht und Zeitkonstante deuten.
- Das **explizite Euler-Verfahren** implementieren und den Einfluss der Schrittweite (Genauigkeit, **Stabilität**) verstehen.
:::

## Motivation: Schnellladen einer Batteriezelle

Verlustleistung $P=I^2R_{innen}$; Werte: $C_{th}=100\,$J/K, $R=0{,}05\,\Omega$, $I=50\,$A ⇒ $P=125\,$W, $T_0=25\,$°C.

1. **Konstante Leistung, keine Wärmeabgabe:** $C_{th}\dot T=P$ ⇒ $T=T_0+\frac P{C_{th}}t$ – 1,25 K/s, nach 60 s schon +75 K (unrealistisch, es fehlt die Kühlung).
2. **Variabler Strom:** $T(t)=T_0+\frac1{C_{th}}\int_0^tP\,\d\tau$ – mit `trapz` lösbar.
3. **Mit Wärmeabgabe** $P_{ab}=\lambda(T-T_\infty)$: Die Abgabe hängt vom **gesuchten** $T(t)$ ab – Integrieren allein reicht nicht mehr:

:::def Differentialgleichung der Batteriezelle
$$C_{th}\,\dot T=P-\lambda\,(T-T_\infty),\qquad T(0)=T_0\quad(\lambda=2\,\mathrm{W/K},\ T_\infty=25\,°\mathrm C).$$
Eine algebraische Gleichung hat eine **Zahl** als Lösung, eine DGL eine **Funktion** $T(t)$, die die Gleichung für alle $t$ erfüllt.
:::

## Analytische Lösung

$\dot T=-\frac\lambda{C_{th}}T+\frac{P+\lambda T_\infty}{C_{th}}$ – lineare DGL 1. Ordnung mit konstanten Koeffizienten (Mathe 2, Kap. 19). Ansatz $T=A+Be^{\alpha t}$:
$$T(t)=T_\infty+\frac P\lambda+\Big(T_0-T_\infty-\frac P\lambda\Big)e^{-\frac\lambda{C_{th}}t}.$$
- **Gleichgewicht** ($\dot T=0$): $T^*=T_\infty+\frac P\lambda=25+\frac{125}2=87{,}5\,$°C (bei doppeltem Strom: $4P$ ⇒ 275 °C!).
- **Zeitkonstante** $\tau=\frac{C_{th}}\lambda=50\,$s (vgl. RC-Glied in E-Technik).

## Begriffe

| Begriff | Bedeutung |
|---|---|
| **Ordnung** | höchste Ableitung: $\dot T=\ldots$ (1), $m\ddot x+kx=0$ (2), $EIw^{IV}=q$ (4) |
| **Anfangswertproblem (AWP)** | alle $n$ Bedingungen zum selben Zeitpunkt $t_0$ ($n$ = Ordnung) |
| Randwertproblem | Bedingungen an verschiedenen Stellen (Balken!) – hier nicht |
| **gewöhnliche DGL (ODE)** | eine unabhängige Variable |
| partielle DGL (PDE) | mehrere, z. B. Wärmeleitung $\rho c\frac{\partial T}{\partial t}=\lambda\nabla^2T$ – hier nicht |

## Numerische Lösung: Euler-Verfahren

Bei gemessenem $I(t)$ gibt es keine geschlossene Lösung ⇒ Näherung als Zahlenfolge $T_0,T_1,T_2,\ldots$ zu $t_0,t_1,\ldots$

:::satz Explizites Euler-Verfahren (Polygonzug)
AWP $\dot y=f(t,y)$, $y(t_0)=y_0$. Ableitung durch Vorwärtsdifferenz ersetzen:
$$y_{n+1}=y_n+\Delta t\cdot f(t_n,y_n).$$
Man läuft in jedem Schritt ein Stück entlang der **Tangente** am Anfang des Intervalls (Analogie: Rechteckregel). Fehler pro Gesamtintervall $\sim\Delta t$ (Ordnung 1).
:::

```matlab
C = 100; lam = 2; P = 125; Tinf = 25; T0 = 25;
f  = @(t, T) (P - lam*(T - Tinf)) / C;
dt = 10;  t = 0:dt:600;
T  = zeros(size(t));  T(1) = T0;
for n = 1:length(t)-1
    T(n+1) = T(n) + dt * f(t(n), T(n));
end
Tex = Tinf + P/lam + (T0 - Tinf - P/lam)*exp(-lam/C*t);
plot(t, T, 'o-', t, Tex, '-'), legend('Euler','exakt'), grid on
```

:::achtung Schrittweite und Stabilität
Für $\dot T=-\frac1\tau(T-T^*)$ gilt beim Euler-Schritt $T_{n+1}-T^*=\left(1-\frac{\Delta t}\tau\right)(T_n-T^*)$.
- $\Delta t=10\,$s: Faktor 0,8 – gute Näherung.
- $\Delta t=100\,$s: Faktor $-1$ – die Lösung **springt** um $T^*$ hin und her und konvergiert nie.
- $\Delta t=500\,$s: Faktor $-9$ – die Lösung **explodiert**.
Stabil nur für $\Delta t<2\tau$. Explizite Verfahren brauchen kleine Schritte bei schnellen Vorgängen („steife" Systeme).
:::

## Aufgaben

:::aufgabe 1 (Folien)
Plotte die analytische Lösung mit $T^*$ als Linie und für $C_{th}=50$ und 200. Beobachtung?
:::loesung
```matlab
t = 0:1:400; hold on
for C = [50 100 200]
    plot(t, Tinf + P/lam + (T0-Tinf-P/lam)*exp(-lam/C*t))
end
yline(Tinf + P/lam, '--'); legend('C=50','C=100','C=200','T^*')
```
Alle laufen auf **dieselbe** $T^*=87{,}5\,$°C zu (unabhängig von $C_{th}$); größere Wärmekapazität ⇒ größere Zeitkonstante ⇒ langsamere Erwärmung.
:::
:::

:::aufgabe 2 (Folien)
(a) Wie lautet $f(t,y)$ für die Batterie-DGL? (c) Ladeprofil $I=I_0e^{-t/\tau_I}$ ($I_0=50\,$A, $\tau_I=1800\,$s) – Unterschied zu konstantem $P$?
:::loesung
(a) $f(t,T)=\frac{P-\lambda(T-T_\infty)}{C_{th}}$.
(c) `f = @(t,T) (0.05*(50*exp(-t/1800)).^2 - lam*(T-Tinf))/C;` – die Temperatur steigt anfangs fast gleich schnell (folgt mit $\tau=50\,$s dem Quasi-Gleichgewicht $T_\infty+P(t)/\lambda$), erreicht ein Maximum knapp unter 87,5 °C und **fällt** dann wieder, weil $P\propto e^{-2t/\tau_I}$ abklingt.
:::
:::

## Karteikarten

:::karte
Euler-Verfahren (Formel)?
???
$y_{n+1}=y_n+\Delta t\,f(t_n,y_n)$
:::

:::karte
Was ist ein Anfangswertproblem?
???
DGL plus alle n Anfangsbedingungen zum selben Zeitpunkt t0.
:::

:::karte
Gleichgewicht und Zeitkonstante von $C\dot T=P-\lambda(T-T_\infty)$?
???
$T^*=T_\infty+P/\lambda$, $\tau=C/\lambda$.
:::

:::karte
Stabilitätsgrenze Euler bei $\dot y=-y/\tau$?
???
$\Delta t<2\tau$; sonst Oszillation bzw. Explosion.
:::

:::karte
ODE vs. PDE?
???
ODE: eine unabhängige Variable; PDE: mehrere (z. B. Ort und Zeit).
:::
