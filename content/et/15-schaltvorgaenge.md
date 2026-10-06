---
title: 8 Schaltvorgänge – RC- und RL-Kreise, Zeitkonstante, Universalformel
chapter: 8 Schaltvorgänge
minutes: 100
sources: Elektrotechnik/Elektrotechnik - 8 Schaltvorgänge.pdf
---

:::ziel
- Verstehen, warum $u_C$ und $i_L$ stetig sind (Energie kann nicht springen).
- Lade- und Entladevorgänge an C und L berechnen und skizzieren; Zeitkonstante $\tau$.
- Die **Universalformel** $x(t)=x_\infty+(x_0-x_\infty)\e^{-t/\tau}$ mit Anfangswert, Endwert und Ersatzwiderstand anwenden.
- Gefahren: Einschaltstromstoß (C), Abschaltüberspannung (L).
:::

## Grundidee

Bisher: eingeschwungene Zustände (Gleichstrom konstant, Wechselstrom sinusförmig). Dazwischen – im **Schaltmoment** – gibt es Übergänge (Kamerablitz, Zündspule, Abschaltfunke an Relais).

| Element | Energie | stetige Größe | darf springen |
|---|---|---|---|
| Kondensator | $\frac12Cu_C^2$ | **Spannung $u_C$** | Strom $i_C$ |
| Spule | $\frac12Li_L^2$ | **Strom $i_L$** | Spannung $u_L$ |

:::merke
**Kondensatorspannung und Spulenstrom sind stetig** – sie behalten im Schaltmoment ihren Wert. Der Übergang in den neuen Zustand erfolgt **exponentiell** mit der Zeitkonstanten $\tau$.
:::

## Kondensator aufladen

$U_0$, $R$, $C$ in Reihe, Schalter schließt bei $t=0$, $C$ ungeladen. Masche: $U_0=RC\frac{\d u_C}{\d t}+u_C$ – eine lineare DGL 1. Ordnung (Mathe 2!). Lösung:
$$u_C(t)=U_0\left(1-\e^{-t/\tau}\right),\qquad i_C(t)=\frac{U_0}R\e^{-t/\tau},\qquad\tau=RC.$$
- $u_C$ startet stetig bei 0 und strebt gegen $U_0$.
- $i_C$ **springt** auf $\frac{U_0}R$ – der ungeladene Kondensator wirkt anfangs wie ein **Kurzschluss** – und klingt ab (am Ende: Unterbrechung).

:::satz Zeitkonstante
$\tau=RC$ ($[\tau]=\Omega\cdot\mathrm F=\mathrm s$). Die **Anfangstangente** erreicht den Endwert genau bei $t=\tau$. Nach $\tau$: 63 % des Endwerts; nach $3\tau$: 95 %; nach $5\tau$: > 99 % – praktisch abgeschlossen.
:::

*Herleitung (Trennung der Variablen):* $\frac{\d u_C}{U_0-u_C}=\frac{\d t}{RC}\Rightarrow-\ln(U_0-u_C)=\frac t{RC}+c$; mit $u_C(0)=0$: $U_0-u_C=U_0\e^{-t/RC}$.

## Kondensator entladen

Auf $U_0$ geladen, bei $t=0$ über $R$ kurzgeschlossen:
$$u_C(t)=U_0\e^{-t/\tau},\qquad i_C(t)=-\frac{U_0}R\e^{-t/\tau}\quad(\text{Strom fließt rückwärts}).$$
Achtung: Laden und Entladen über **verschiedene Widerstände** ⇒ verschiedene $\tau$.

## Spule einschalten

$U_0=Ri_L+L\frac{\d i_L}{\d t}$:
$$i_L(t)=\frac{U_0}R\left(1-\e^{-t/\tau}\right),\qquad u_L(t)=U_0\e^{-t/\tau},\qquad\tau=\frac LR.$$
Spiegelbild zum Kondensator (Rollen von $u$ und $i$ vertauscht): Die Spule wirkt anfangs wie eine **Unterbrechung**, am Ende wie ein **Kurzschluss** (vgl. $\omega\to0$).

## Spule ausschalten

Stromdurchflossene Spule ($i_L(0)$) wird bei $t=0$ auf einen Widerstand $R$ geschaltet:
$$i_L(t)=i_L(0)\,\e^{-t/\tau},\qquad u_L(t)=-R\,i_L(0)\,\e^{-t/\tau},\qquad\tau=\frac LR.$$

:::achtung Abschaltüberspannung ⚡
Der Spulenstrom **muss stetig weiterfließen** – die Spule erzwingt ihn mit jeder nötigen Spannung: $|u_L(0)|=R\,i_L(0)$. Großes $R$ (oder offener Schalter, $R\to\infty$) ⇒ riesige Überspannung, **Lichtbogen** am Schaltkontakt. Genutzt in der Zündspule; Schutz von Transistoren durch **Freilaufdiode**.
:::

## Das allgemeine Lösungsrezept

:::rezept Universalformel (ein Energiespeicher)
$$x(t)=x_\infty+(x_0-x_\infty)\,\e^{-t/\tau}$$
| Schritt | Wie? |
|---|---|
| Anfangswert $x_0$ | Stetigkeit: $u_C$ bzw. $i_L$ aus dem Zustand **vor** dem Schalten |
| Endwert $x_\infty$ | Gleichstrombild: **C = Unterbrechung, L = Kurzschluss** |
| Zeitkonstante $\tau$ | $\tau=R_{ers}C$ bzw. $\tau=\frac L{R_{ers}}$, $R_{ers}$ von den Klemmen des Speichers aus gesehen (Quellen deaktiviert – Zweipoltheorie!) |
Damit lassen sich alle Verläufe ohne DGL hinschreiben und skizzieren (Anfangswert, Endwert, Tangente durch $\tau$).
:::

| | Kondensator (RC) | Spule (RL) |
|---|---|---|
| stetig | $u_C$ | $i_L$ |
| $\tau$ | $RC$ | $L/R$ |
| Einschalten | $u_C=U_0(1-\e^{-t/\tau})$ | $i_L=\frac{U_0}R(1-\e^{-t/\tau})$ |
| Ausschalten | $u_C=U_0\e^{-t/\tau}$ | $i_L=i_L(0)\e^{-t/\tau}$ |
| $t\to\infty$ | Unterbrechung | Kurzschluss |
| Gefahr | Einschaltstromstoß | Abschaltüberspannung |

## Aufgaben (Aufgaben 24 und 25 der Folien)

:::aufgabe 1
(a) $C=0{,}1\,$µF wird über $R=5\,\Omega$ entladen. Wann ist $u_C$ auf 10 % gefallen? (b) Speicher eines Taschenrechners (Last $R=2{,}2\,$MΩ) soll beim Batteriewechsel aus einem Kondensator versorgt werden: $U_B=3\,$V, nach $t_W=30\,$s mindestens $U_{min}=0{,}8\,$V. $C$?
:::loesung
(a) $\tau=0{,}5\,$µs; $\e^{-t/\tau}=0{,}1\Rightarrow t=\tau\ln10\approx1{,}15\,$µs.
(b) $0{,}8=3\e^{-30/(RC)}\Rightarrow RC=\frac{30}{\ln3{,}75}=22{,}7\,$s ⇒ $C=\frac{22{,}7}{2{,}2\cdot10^6}\approx10{,}3\,$µF (gewählt z. B. 12 µF).
:::
:::

:::aufgabe 2
Spule $L=250\,$mH mit Wicklungswiderstand $R_S=5\,\Omega$ an $U_0=100\,$V. Bei $t=0$ wird sie von der Quelle getrennt und auf $R=50\,\Omega$ geschaltet. (a) Ersatzschaltbild vorher/nachher. (b) Gespeicherte Energie? (c) Maximale Spannung? (d) Verläufe?
:::loesung
(a) Vorher: Quelle – $R_S$ – $L$. Nachher: $L$ – $R_S$ – $R$ im Kreis.
(b) $i_L(0)=\frac{100}5=20\,$A, $W=\frac12\cdot0{,}25\cdot400=50\,$J.
(c) Der Strom 20 A muss durch $R_S+R=55\,\Omega$: induzierte Spannung $|u_{ind}(0)|=55\cdot20=1100\,$V (an den Klemmen bzw. über $R$: $1000\,$V) – **das 10- bis 11-fache von $U_0$!**
(d) $i_L(t)=20\,\mathrm A\,\e^{-t/\tau}$, $\tau=\frac{0{,}25}{55}\approx4{,}5\,$ms; Spannung springt auf −1100 V und klingt mit derselben $\tau$ ab; nach ≈ 23 ms vorbei.
:::
:::

:::aufgabe 3
Ein RC-Glied ($R=10\,$kΩ, $C=100\,$µF) wird an 12 V geschaltet. $u_C$ nach 1 s und nach 5 s?
:::loesung
$\tau=1\,$s: $u_C(1)=12(1-\e^{-1})=7{,}6\,$V; $u_C(5)=11{,}9\,$V.
:::
:::

## Karteikarten

:::karte
Welche Größen sind bei Schaltvorgängen stetig?
???
Kondensatorspannung $u_C$ und Spulenstrom $i_L$.
:::

:::karte
Zeitkonstanten RC und RL?
???
$\tau=RC$; $\tau=L/R$.
:::

:::karte
Universalformel?
???
$x(t)=x_\infty+(x_0-x_\infty)\e^{-t/\tau}$
:::

:::karte
Wie viel Prozent nach τ, 3τ, 5τ?
???
63 %, 95 %, > 99 %.
:::

:::karte
Warum gefährlich: Spule abschalten?
???
Strom muss weiterfließen ⇒ Spannung $R\,i_L(0)$, bei offenem Schalter extrem hoch (Lichtbogen); Abhilfe Freilaufdiode.
:::
