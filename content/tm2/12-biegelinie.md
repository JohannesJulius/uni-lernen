---
title: 5.3 Biegelinie I – Differentialgleichung, Integration, Rand- und Übergangsbedingungen
chapter: 5 Technische Biegelehre
minutes: 130
sources: Technische Mechanik 2/tm2_05_biegung.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#118; Technische Mechanik 2/Uebung_05_Aufgaben.pdf
---

:::ziel
- Die **DGL der Biegelinie** $EIw''=-M$ herleiten (Krümmung, Kleinwinkel).
- Die Kette $q\to Q\to M\to w'\to w$ durch **Integration** abarbeiten.
- **Rand- und Übergangsbedingungen** für alle Lagerarten sicher aufstellen.
- Durchbiegungen und Neigungen der Standardfälle herleiten; Verläufe $Q,M,w',w$ qualitativ zeichnen.
:::

## Herleitung

Die **Biegelinie** $w(x)$ ist die Verschiebung der Schwerpunktsachse ($w$ nach unten positiv, wie $z$). Neigung $w'=\frac{\d w}{\d x}$, Neigungswinkel $\varphi\approx-w'$ (Kleinwinkel).

Aus der Biegelehre: $\frac1\rho=\frac{M}{EI}$. Geometrie: Für die Kurve $w(x)$ gilt exakt $\frac1\rho=\frac{-w''}{(1+w'^2)^{3/2}}$ (Krümmung aus Mathe 2, Kurvenlehre!). Für kleine Neigungen $w'^2\ll1$:

:::satz Differentialgleichung der Biegelinie (Euler-Bernoulli)
$$EI\,w''=-M\qquad(EI=\text{Biegesteifigkeit}).$$
Mit $M'=Q$ und $Q'=-q$ (TM 1) folgen für $EI=$ const:
$$EI\,w'''=-Q,\qquad EI\,w^{IV}=q.$$
| Ableitung | proportional zu |
|---|---|
| $w$ | Durchbiegung |
| $w'$ | Neigung |
| $w''$ | Krümmung ∝ Moment |
| $w'''$ | Querkraft |
| $w^{IV}$ | Streckenlast |
:::

## Integration

:::rezept Lösungsweg
**Statisch bestimmt:** $M(x)$ aus Gleichgewicht (TM 1), dann zweimal integrieren:
$$EIw'=-\int M\,\d x+C_1,\qquad EIw=\int EIw'\,\d x+C_2.$$
**Allgemein (auch statisch unbestimmt):** von $q$ aus viermal integrieren:
$$Q=-\int q\,\d x+C_1,\quad M=\int Q\,\d x+C_2,\quad EIw'=-\int M\,\d x+C_3,\quad EIw=\int EIw'\,\d x+C_4,$$
Konstanten aus **Randbedingungen** (kinematisch: $w$, $w'$; kinetisch/statisch: $M$, $Q$).
Bei **Unstetigkeiten** (Einzelkraft → Sprung in $Q$, Einzelmoment → Sprung in $M$, Gelenk → Knick/Sprung in $w'$, Parallelführung → Sprung in $w$, Lastbeginn/-ende) **Bereiche** bilden und **Übergangsbedingungen** formulieren – oder Föppl-Klammern verwenden (nächste Lektion).
:::

### Randbedingungen

| Lager | $w$ | $w'$ | $M$ | $Q$ |
|---|---|---|---|---|
| Gelenklager (fest oder verschieblich) | $=0$ | $\ne0$ | $=0$ | $\ne0$ |
| Parallelführung (Schiebehülse) | $\ne0$ | $=0$ | $\ne0$ | $=0$ |
| feste Einspannung | $=0$ | $=0$ | $\ne0$ | $\ne0$ |
| freies Ende | $\ne0$ | $\ne0$ | $=0$ | $=0$ |

Jedes Lager liefert genau **zwei** Bedingungen (an den Nullen erkennbar). Freie Enden mit Einzellast: $Q=\pm F$ statt 0; mit Einzelmoment: $M=\pm M_0$.

**Übergangsbedingungen** zwischen zwei Bereichen I/II an der Stelle $x_0$ (ohne Gelenk): $w_I=w_{II}$, $w_I'=w_{II}'$, $M_I=M_{II}$ (bzw. Sprung um ein Einzelmoment), $Q_I=Q_{II}$ (bzw. Sprung um eine Einzelkraft). An einem **Zwischenlager**: $w_I=w_{II}=0$, $w'_I=w'_{II}$, $M_I=M_{II}$.

## Standardbeispiele

:::bsp 1 Kragträger mit Endlast (Folienbeispiel 1)
Einspannung bei $x=0$, Kraft $F$ (nach unten) bei $x=L$. $M(x)=-F(L-x)$.
$EIw''=F(L-x)$ ⇒ $EIw'=F(Lx-\frac{x^2}2)+C_1$, $EIw=F(\frac{Lx^2}2-\frac{x^3}6)+C_1x+C_2$.
RB: $w(0)=0$, $w'(0)=0$ ⇒ $C_1=C_2=0$.
$$w(x)=\frac{F}{6EI}(3Lx^2-x^3),\qquad w_{max}=w(L)=\frac{FL^3}{3EI},\qquad w'(L)=\frac{FL^2}{2EI}.$$
Maximale Spannung an der Einspannung: $\sigma_{max}=\frac{FL}{W_b}$.
:::

:::bsp 2 Einfeldträger mit Endmoment (Folienbeispiel 2)
Gelenkig in $A$ ($x=0$) und $B$ ($x=L$), Moment $M_0$ in $B$. Lager $A=-B=\frac{M_0}L$ (Kräftepaar) ⇒ $M(x)=M_0\frac xL$ (Vorzeichen wie $M_0$ angreift).
$EIw''=-M_0\frac xL$ ⇒ $EIw=-\frac{M_0x^3}{6L}+C_1x+C_2$; $w(0)=0$ ⇒ $C_2=0$; $w(L)=0$ ⇒ $C_1=\frac{M_0L}6$.
$$w(x)=\frac{M_0L^2}{6EI}\left(\frac xL-\frac{x^3}{L^3}\right),\qquad x_0=\frac L{\sqrt3},\quad w_{max}=\frac{M_0L^2}{9\sqrt3\,EI}.$$
Neigungen: $w'(0)=\frac{M_0L}{6EI}$, $w'(L)=-\frac{M_0L}{3EI}$.
:::

:::bsp 3 Einfeldträger mit Gleichstreckenlast
$M(x)=\frac{q_0}2(lx-x^2)$ ⇒ $EIw=-\frac{q_0}{2}(\frac{lx^3}6-\frac{x^4}{12})+C_1x$; $w(l)=0$ ⇒ $C_1=\frac{q_0l^3}{24}$:
$$w(x)=\frac{q_0l^4}{24EI}\left(\xi-2\xi^3+\xi^4\right),\ \xi=\tfrac xl,\qquad w_{max}=w(\tfrac l2)=\frac{5q_0l^4}{384EI},\qquad w'(0)=\frac{q_0l^3}{24EI}.$$
:::

:::merke Die wichtigsten Formeln (Durchbiegung)
| System | $w_{max}$ |
|---|---|
| Kragträger, Endlast $F$ | $\frac{FL^3}{3EI}$ |
| Kragträger, Gleichlast $q_0$ | $\frac{q_0L^4}{8EI}$ |
| Kragträger, Endmoment $M_0$ | $\frac{M_0L^2}{2EI}$ |
| Einfeldträger, Mittellast $F$ | $\frac{FL^3}{48EI}$ |
| Einfeldträger, Gleichlast $q_0$ | $\frac{5q_0L^4}{384EI}$ |
:::

### Verläufe qualitativ zeichnen
Von oben nach unten $q\to Q\to M\to w'\to w$: jede Kurve ist (bis auf Vorzeichen und Faktor) die **Ableitung der darunterliegenden**:
- $Q$ springt bei Einzelkräften; $M$ hat dort einen Knick; $M$ ist extremal, wo $Q=0$.
- $w'$ ist extremal, wo $M=0$; $w$ hat einen Wendepunkt, wo $M=0$; $w$ extremal, wo $w'=0$.
- Gleiche Krümmungsrichtung: $M>0$ ⇒ $w''<0$ ⇒ Biegelinie „hängt durch" (konvex nach unten im $z$-nach-unten-System).

## Aufgaben

:::aufgabe 1 (Übung 5, Aufgabe 23)
Balken der Länge $3a$, gelenkig in $A$ ($x=0$) und $B$ ($x=3a$), Kraft $F$ bei $x=2a$. (a) Biegelinie, (b) $w(2a)$, (c) Verläufe.
:::loesung
Lager: $A=\frac F3$, $B=\frac{2F}3$.
Bereich I ($0\le x\le2a$): $M=\frac F3x$; Bereich II ($2a\le x\le3a$): $M=\frac{2F}3(3a-x)$.
Mit Föppl-Schreibweise (vorgegriffen) in einer Zeile: $EIw''=-\frac F3x+F\langle x-2a\rangle$.
$EIw'=-\frac F6x^2+\frac F2\langle x-2a\rangle^2+C_1$, $EIw=-\frac F{18}x^3+\frac F6\langle x-2a\rangle^3+C_1x+C_2$.
$w(0)=0$ ⇒ $C_2=0$; $w(3a)=0$: $-\frac{27}{18}Fa^3+\frac16Fa^3+3aC_1=0$ ⇒ $C_1=\frac49Fa^2$.
(b) $w(2a)=\frac1{EI}\left(-\frac8{18}+\frac89\right)Fa^3=\frac{4Fa^3}{9EI}$ (Kontrolle mit Tabellenformel $\frac{Fa_1^2b_1^2}{3EIl}=\frac{F(2a)^2a^2}{3EI\cdot3a}$ ✓).
(c) $Q$: $+\frac F3$ bis $2a$, Sprung auf $-\frac{2F}3$. $M$: Dreieck, Spitze $\frac23Fa$ bei $2a$. $w'$: Parabeln, $w'(0)=\frac{4Fa^2}{9EI}>0$, Nulldurchgang links von $2a$ ($x=\sqrt{8/3}\,a\approx1{,}63a$, dort $w_{max}$). $w$: positiv (nach unten), maximal bei $1{,}63a$.
:::
:::

:::aufgabe 2
Kragträger (Länge $L$) mit Gleichstreckenlast $q_0$: Biegelinie und Enddurchbiegung herleiten.
:::loesung
$M=-\frac{q_0}2(L-x)^2$. $EIw''=\frac{q_0}2(L-x)^2$ ⇒ $EIw'=-\frac{q_0}6(L-x)^3+C_1$, $w'(0)=0$ ⇒ $C_1=\frac{q_0L^3}6$. $EIw=\frac{q_0}{24}(L-x)^4+\frac{q_0L^3}6x+C_2$, $w(0)=0$ ⇒ $C_2=-\frac{q_0L^4}{24}$.
$w(L)=\frac1{EI}\left(\frac{q_0L^4}6-\frac{q_0L^4}{24}\right)=\frac{q_0L^4}{8EI}$.
:::
:::

:::aufgabe 3
Flugzeugflügel als Kragträger: $L=6\,$m, Auftrieb näherungsweise $q_0=4\,$kN/m, $EI=2\cdot10^{12}\,$Nmm² (Holm-Ersatz). Spitzendurchbiegung? Wurzelmoment?
:::loesung
$q_0=4\,$N/mm, $L=6000\,$mm: $w=\frac{4\cdot6000^4}{8\cdot2\cdot10^{12}}=\frac{4\cdot1{,}296\cdot10^{15}}{1{,}6\cdot10^{13}}=324\,$mm (nach oben, da Auftrieb). Wurzelmoment $\frac{q_0L^2}2=72\,$kNm.
:::
:::

:::aufgabe 4
Zähle für einen beidseitig eingespannten Balken mit Mittellast die Unbekannten und Bedingungen. Ist er statisch bestimmt?
:::loesung
Lager: je 2 Reaktionen (Kraft, Moment; Längskraft ohne Belang) = 4 > 2 Gleichgewichtsbedingungen ⇒ 2-fach statisch unbestimmt. Mit der DGL kein Problem: 2 Bereiche × 4 Konstanten = 8; RB: 4 ($w=w'=0$ an beiden Enden), Übergang: 4 ($w$, $w'$, $M$ stetig, $Q$ springt um $F$). Ergebnis: $w_{max}=\frac{FL^3}{192EI}$ – ein Viertel des gelenkig gelagerten Balkens.
:::
:::

## Karteikarten

:::karte
DGL der Biegelinie?
???
$EIw''=-M$ (bzw. $EIw'''=-Q$, $EIw^{IV}=q$).
:::

:::karte
Randbedingungen feste Einspannung / Gelenk / freies Ende / Parallelführung?
???
Einspannung: $w=0$, $w'=0$. Gelenk: $w=0$, $M=0$. Freies Ende: $M=0$, $Q=0$. Parallelführung: $w'=0$, $Q=0$.
:::

:::karte
Kragträger mit Endlast: $w_{max}$, Endneigung?
???
$\frac{FL^3}{3EI}$, $\frac{FL^2}{2EI}$
:::

:::karte
Einfeldträger mit Gleichlast: $w_{max}$?
???
$\frac{5q_0L^4}{384EI}$
:::

:::karte
Einfeldträger mit Mittellast: $w_{max}$?
???
$\frac{FL^3}{48EI}$
:::

:::karte
Wo hat die Biegelinie einen Wendepunkt?
???
Wo $M=0$ (Krümmung null).
:::
