---
title: 18 Einführung in gewöhnliche Differentialgleichungen – Modellierung, Klassifikation, Richtungsfeld, Euler, Heun, Runge-Kutta
chapter: 18 Einführung in gewöhnliche DGL
minutes: 110
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#379; Mathe 2/IM2_slides_T4_DGL_00_intro_pde_ode.pdf; Mathe 2/IM2_slides_T4_DGL_01_gewDGL_integrierbar_exakt.pdf; Mathe 2/IM2_slides_T4_DGL_06_ode2ndorder_pendulum.pdf
---

:::ziel
- Verstehen, was eine (gewöhnliche) DGL ist und wie sie aus Modellen entsteht (Pendel, Zerfall, Fall mit Luftwiderstand).
- DGLs klassifizieren: **Ordnung, linear/nichtlinear, homogen/inhomogen**; Anfangswertproblem.
- **Richtungsfeld** lesen; **Euler** (Ordnung 1), **Heun** (2), **klassisches Runge-Kutta** (4) anwenden.
:::

(Die numerische Seite mit MATLAB/`ode45` ist in Numerik, Kapitel 6, ausführlich – hier die mathematische Sicht.)

## Was ist eine Differentialgleichung?

Bei „normalen" Gleichungen sucht man **Zahlen**, bei Differentialgleichungen eine **Funktion** – also gewissermaßen unendlich viele Zahlen. **Gewöhnlich (ODE)**: die gesuchte Funktion hängt von **einer** Variablen ab; **partiell (PDE)**: von mehreren (Wärmeleitung, Wellengleichung, Maxwell – hier nicht).

:::bsp Modelle
- **Radioaktiver Zerfall:** In $\Delta t$ zerfällt ein zur Menge proportionaler Anteil: $m(t+\Delta t)-m(t)=-k\,m\,\Delta t$ ⇒ $\dot m=-km$, Lösung $m=m_0e^{-kt}$.
- **Ort aus Geschwindigkeit** (direkt integrierbar): $\dot r=v_0-gt$ ⇒ $r=r_0+v_0t-\frac g2t^2$.
- **Fadenpendel:** Tangentialkraft $mg\sin\varphi$, Tangentialbeschleunigung $l\ddot\varphi$ ⇒ $\ddot\varphi+\frac gl\sin\varphi=0$. Kleine Winkel ($\sin\varphi\approx\varphi$): $\ddot\varphi+\frac gl\varphi=0$, allgemeine Lösung $\varphi=c_1\sin\sqrt{g/l}\,t+c_2\cos\sqrt{g/l}\,t$ – zwei freie Konstanten, festgelegt durch Anfangsauslenkung **und** -geschwindigkeit.
- **Freier Fall mit Luftwiderstand:** $\dot v=g-cv^2$, $v(0)=0$; exakt $v=\sqrt{g/c}\tanh(\sqrt{gc}\,t)$, Grenzgeschwindigkeit $\sqrt{g/c}$ (mit $c=0{,}0375\,$m⁻¹: 16,2 m/s).
:::

:::def Klassifikation
- **Ordnung** = höchste vorkommende Ableitung.
- **Linear**, wenn $x,\dot x,\ldots$ nur linear vorkommen: $a_n(t)x^{(n)}+\ldots+a_0(t)x=s(t)$. Sonst nichtlinear ($\sin\varphi$, $x^2$, $\sqrt x$, $xy$ …).
- **Homogen**, wenn kein Term ohne die gesuchte Funktion vorkommt ($s\equiv0$), sonst inhomogen (Störfunktion).
- Standardform: alles auf eine Seite, nach Ableitungen sortiert.
- **Anfangswertproblem (AWP)**: DGL $n$-ter Ordnung + $n$ Anfangswerte $x(t_0),\ldots,x^{(n-1)}(t_0)$. Eindeutigkeit garantiert der **Satz von Picard-Lindelöf** (Kap. 21).
:::

## Richtungsfeld

Für $\dot x=f(t,x)$ zeichnet man in jedem Punkt $(t,x)$ ein kurzes **Linienelement** mit Steigung $f(t,x)$. Eine Lösungskurve verläuft überall **tangential** an die Linienelemente. Nützlich: **Isoklinen** (Kurven gleicher Steigung $f=c$), insbesondere $f=0$ (waagrechte Elemente, Gleichgewichte).

## Numerische Verfahren

Gitter $t_n=t_0+n\tau$ (Schrittweite $\tau$), Näherungen $x_n\approx x(t_n)$.

| Verfahren | Vorschrift | Ordnung („halbe Schrittweite ⇒") |
|---|---|---|
| **explizites Euler** | $x_{n+1}=x_n+\tau f(t_n,x_n)$ | 1 (halber Fehler) |
| **Heun** | $k_1=f(t_n,x_n)$, $k_2=f(t_n+\tau,x_n+\tau k_1)$, $x_{n+1}=x_n+\frac\tau2(k_1+k_2)$ | 2 (Viertel) |
| **klassisches Runge-Kutta** | $k_1,\ldots,k_4$ (Anfang, 2× Mitte, Ende), $x_{n+1}=x_n+\frac\tau6(k_1+2k_2+2k_3+k_4)$ | 4 (Sechzehntel) |

Fehlerordnung $p$: $\max_i|x_i-x(t_i)|=O(\tau^p)$. Heun = Trapezregel für die Steigung, RK4 ≈ Simpson.

*Warum überschätzt Euler beim Fall mit Luftwiderstand?* Die Lösung ist konkav (Steigung nimmt ab); Euler benutzt die Steigung am **Intervallanfang** – die größte – und schießt nach oben hinaus. Heun mittelt mit der (zu kleinen) Steigung am Prädiktorpunkt und liegt leicht darunter.

## Aufgaben

:::aufgabe 1 (Skript 18.2)
Klassifiziere: (1) $\ddot x+3\dot x+2x=\sin t$; (1b) $y'=x^2y^2$; (2) $\dot u+t^2u=0$; (4) $\dot z+\sqrt z=5$.
:::loesung
(1) 2. Ordnung, linear, inhomogen. (1b) 1. Ordnung, nichtlinear ($y^2$), homogen (kein Term ohne $y$). (2) 1. Ordnung, linear, homogen (variable Koeffizienten). (4) 1. Ordnung, nichtlinear, inhomogen.
:::
:::

:::aufgabe 2 (Skript 18.3)
$\dot x=2t-x$, $x(0)=1$, $\tau=0{,}5$: zwei Schritte Euler und Heun; Vergleich mit $x(t)=2t-2+3e^{-t}$.
:::loesung
Euler: $x_1=1+0{,}5(0-1)=0{,}5$; $x_2=0{,}5+0{,}5(1-0{,}5)=0{,}75$.
Heun: Schritt 1: $k_1=-1$, $k_2=f(0{,}5;\,0{,}5)=0{,}5$ ⇒ $x_1=1+0{,}25(-0{,}5)=0{,}875$. Schritt 2: $k_1=f(0{,}5;0{,}875)=0{,}125$, $k_2=f(1;\,0{,}9375)=1{,}0625$ ⇒ $x_2=0{,}875+0{,}25\cdot1{,}1875=1{,}1719$.
Exakt $x(1)=\frac3e=1{,}1036$. Fehler: Euler 0,354, Heun 0,068 – Heun bei gleicher Schrittweite ~5-mal genauer (Ordnung 2 vs. 1).
:::
:::

:::aufgabe 3 (Skript 18.4 – Stratosphärensprung)
$\dot v=g-\frac{\rho(h)c_wA}{2m}v^2$, $\dot h=-v$, $\rho=\rho_0e^{-h/H_s}$ ($m=120\,$kg, $A=0{,}45\,$m², $c_w=0{,}8$, $H_s=7200\,$m). (1) Grenzgeschwindigkeit $v_{term}(h)$ bei 0 m und 39 km. (2) Ein Euler- und ein Heun-Schritt ($\tau=2\,$s) ab $h_0=39\,$km, $v_0=0$. (3) Was passiert mit Euler bei $\tau=5\,$s unten in dichter Luft?
:::loesung
(1) $\dot v=0$ ⇒ $v_{term}=\sqrt{\frac{2mg}{\rho(h)c_wA}}$. $h=0$: $\sqrt{\frac{2354}{0{,}441}}=73\,$m/s. $h=39\,$km: $\rho=1{,}225e^{-5{,}42}=0{,}0054$ ⇒ $v_{term}\approx1100\,$m/s ≫ Schallgeschwindigkeit – nur in dieser Höhe kann man überhaupt Mach 1,25 erreichen.
(2) Euler: $v_1=0+2g=19{,}62\,$m/s, $h_1=39\,000\,$m (Höhenänderung verpasst, da $v_0=0$). Heun: Prädiktor $(19{,}62;\,39\,000)$, $k_{2,v}=9{,}81-8{,}2\cdot10^{-6}\cdot385\approx9{,}807$, $k_{2,h}=-19{,}62$ ⇒ $v_1=19{,}62\,$m/s, $h_1=38\,980\,$m (= exakter freier Fall $\frac g2t^2$). Für Zertifizierungsrechnungen nimmt man RK4 mit Schrittweitensteuerung.
(3) Unten ist $\frac{\partial\dot v}{\partial v}=-\frac{\rho c_wA}mv$ groß negativ (Steifheit). Ist $\tau\cdot\left|\frac{\partial\dot v}{\partial v}\right|>2$, schießt Euler über das Gleichgewicht hinaus – Oszillationen, unphysikalische (negative oder explodierende) Geschwindigkeiten.
:::
:::

## Karteikarten

:::karte
Ordnung, linear, homogen – Definitionen?
???
Ordnung = höchste Ableitung; linear = x und Ableitungen nur linear; homogen = keine Störfunktion s(t).
:::

:::karte
Wie viele Anfangswerte braucht eine DGL n-ter Ordnung?
???
n (x, ẋ, …, x^(n−1) zum Startzeitpunkt).
:::

:::karte
Heun-Verfahren?
???
$x_{n+1}=x_n+\frac\tau2\big(f(t_n,x_n)+f(t_n+\tau,x_n+\tau f(t_n,x_n))\big)$, Ordnung 2.
:::

:::karte
Konvergenzordnungen Euler / Heun / RK4?
???
1 / 2 / 4
:::

:::karte
Was ist ein Richtungsfeld?
???
Linienelemente mit Steigung f(t,x) in jedem Punkt; Lösungen verlaufen tangential.
:::
