---
title: 5.4 Biegelinie II – Föppl-Klammern, Superposition, Biegelinientafel, statisch unbestimmte Balken
chapter: 5 Technische Biegelehre
minutes: 150
sources: Technische Mechanik 2/tm2_05_biegung.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#133; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#135; Technische Mechanik 2/Uebung_05_Aufgaben.pdf
---

:::ziel
- Unstetige Belastungen mit **Föppl-Klammern** in **einer** Gleichung beschreiben und integrieren.
- Gelenke und Parallelführungen als Sprünge in $w'$ bzw. $w$ einbauen.
- Mit dem **Superpositionsprinzip** und der **Biegelinientafel** Verschiebungen schnell berechnen.
- **Statisch unbestimmte Balken** durch Superposition („0"- und „1"-System) lösen.
:::

## Föppl-Klammern

:::def
$$\langle x-x_0\rangle^n=\begin{cases}0,&x<x_0\\(x-x_0)^n,&x\ge x_0\end{cases}\qquad(n\ge0;\ \langle x-x_0\rangle^0=\text{Sprungfunktion}).$$
**Integration:** $\displaystyle\int\langle x-x_0\rangle^n\,\d x=\frac{\langle x-x_0\rangle^{n+1}}{n+1}$ (ohne neue Konstante – die Klammer ist bei $x_0$ null).
:::

So lässt sich jede abschnittsweise definierte Belastung in **einer** Formel schreiben – keine Bereichseinteilung, keine Übergangsbedingungen, nur 4 Konstanten!

| Belastung bei $x_i$ | Beitrag |
|---|---|
| Streckenlast $q_0$ ab $x_1$ bis $x_2$ | $q=q_0\langle x-x_1\rangle^0-q_0\langle x-x_2\rangle^0$ |
| Dreieckslast, ab $x_1$ mit Steigung $\frac{q_0}{l_1}$ | $q=\frac{q_0}{l_1}\langle x-x_1\rangle^1$ (zum Beenden Gegenterme) |
| Einzelkraft $F$ (nach unten) | $Q\ \text{enthält}\ -F\langle x-x_i\rangle^0$ |
| Einzelmoment $M_i$ | $M\ \text{enthält}\ -M_i\langle x-x_i\rangle^0$ (Vorzeichen nach Drehsinn) |
| Gelenk (Winkelsprung $\Delta\varphi$) | $w'\ \text{enthält}\ +\Delta\varphi\langle x-x_i\rangle^0$ |
| Parallelführung (Absenkungssprung $\Delta w$) | $w\ \text{enthält}\ +\Delta w\langle x-x_i\rangle^0$ |

:::formel Integrationsformeln (EI = const)
$$\begin{aligned}Q(x)&=-\int q\,\d x-\sum F_i\langle x-x_i\rangle^0+C_1\\M(x)&=\int Q\,\d x-\sum M_i\langle x-x_i\rangle^0+C_2\\w'(x)&=-\frac1{EI}\int M\,\d x+\sum\Delta\varphi_i\langle x-x_i\rangle^0+C_3\\w(x)&=\int w'\,\d x+\sum\Delta w_i\langle x-x_i\rangle^0+C_4\end{aligned}$$
Lagerkräfte, die nicht vorab bekannt sind (statisch unbestimmt), werden als unbekannte Einzelkräfte mitgeführt und zusammen mit den Konstanten aus den RB bestimmt.
:::

:::bsp Einfeldträger mit Teil-Streckenlast (Folienbeispiel 3)
Gelenkig in $A$ ($0$) und $B$ ($L$), $q_0$ auf $[a,b]$.
$q(x)=q_0\langle x-a\rangle^0-q_0\langle x-b\rangle^0$
$Q=-q_0\langle x-a\rangle^1+q_0\langle x-b\rangle^1+C_1$
$M=-\frac{q_0}2\langle x-a\rangle^2+\frac{q_0}2\langle x-b\rangle^2+C_1x+C_2$
$EIw'=\frac{q_0}6\langle x-a\rangle^3-\frac{q_0}6\langle x-b\rangle^3-\frac{C_1}2x^2-C_2x+C_3$
$EIw=\frac{q_0}{24}\langle x-a\rangle^4-\frac{q_0}{24}\langle x-b\rangle^4-\frac{C_1}6x^3-\frac{C_2}2x^2+C_3x+C_4$
RB: $M(0)=0$ ⇒ $C_2=0$; $w(0)=0$ ⇒ $C_4=0$; $M(L)=0$ ⇒ $C_1=\frac{q_0}{2L}[(L-a)^2-(L-b)^2]$ (= Lagerkraft $A$); $w(L)=0$ ⇒ $C_3$.
:::

:::bsp Gelenk im Balken (Folienbeispiel 4, Prinzip)
Beidseitig eingespannter Balken ($3a$) mit Gelenk bei $x=a$: Im Ansatz $EIw'$ den Term $EI\,\Delta\varphi\langle x-a\rangle^0$ ergänzen; zusätzliche Bedingung $M(a)=0$ (Gelenk überträgt kein Moment). Unbekannte: $C_1\ldots C_4$, $\Delta\varphi$ – Bedingungen: 4 RB ($w=w'=0$ an beiden Enden) + $M(a)=0$.
:::

## Superposition

Die Biegelinien-DGL ist **linear** ⇒ Biegelinien verschiedener Lastfälle dürfen addiert werden:
$$w(x)=w^{(1)}(x)+w^{(2)}(x)+\ldots$$
Mit einer **Biegelinientafel** (Lastfälle 1–10 auf den Folien) lassen sich so auch komplizierte Systeme ohne Integration lösen.

### Biegelinientafel (Auszug, $EI$ = const, $w$ nach unten)

| Nr. | System | $EIw'$ am Rand | $EIw$ (Stelle) |
|---|---|---|---|
| 1 | Einfeldträger, $F$ bei $a$ ($b=l-a$) | $EIw'_A=\frac{Fab(l+b)}{6l}$, $EIw'_B=-\frac{Fab(l+a)}{6l}$ | unter der Last: $\frac{Fa^2b^2}{3l}$; Mitte bei $a=b$: $\frac{Fl^3}{48}$ |
| 2 | Einfeldträger, Gleichlast $q_0$ | $\pm\frac{q_0l^3}{24}$ | Mitte: $\frac{5q_0l^4}{384}$ |
| 4 | Einfeldträger, Dreieck 0 → $q_0$ (bei B) | $EIw'_A=\frac{7q_0l^3}{360}$, $EIw'_B=-\frac{q_0l^3}{45}$ | max: $0{,}00652\,q_0l^4$ bei $x=0{,}519l$ |
| 5 | Einfeldträger, Moment $M_0$ bei B | $EIw'_A=\frac{M_0l}6$, $EIw'_B=-\frac{M_0l}3$ | max: $\frac{M_0l^2}{9\sqrt3}$ |
| 6 | Kragträger, $F$ am Ende | $EIw'_B=\frac{Fl^2}2$ | Ende: $\frac{Fl^3}3$ |
| 7 | Kragträger, Gleichlast | $\frac{q_0l^3}6$ | Ende: $\frac{q_0l^4}8$ |
| 9 | Kragträger, Dreieck 0 → $q_0$ (am freien Ende) | $\frac{q_0l^3}8$ | Ende: $\frac{11q_0l^4}{120}$ |
| 9′ | Kragträger, Dreieck $q_0$ (Einspannung) → 0 | $\frac{q_0l^3}{24}$ | Ende: $\frac{q_0l^4}{30}$ |
| 10 | Kragträger, Moment $M_0$ am Ende | $M_0l$ | Ende: $\frac{M_0l^2}2$ |

Für Lasten im Feld eines Kragträgers bei $a$: Durchbiegung am Ende = $w(a)+w'(a)\cdot(l-a)$ (das unbelastete Reststück bleibt gerade).

### Statisch unbestimmte Balken

:::rezept Kraftgrößenverfahren
1. Überzähliges Lager entfernen ⇒ statisch bestimmtes Grundsystem, Lagerkraft $X$ als unbekannte äußere Last.
2. **„0"-System:** nur die gegebenen Lasten ⇒ $w^{(0)}$ an der Lagerstelle.
3. **„1"-System:** nur $X$ ⇒ $w^{(1)}=X\cdot\delta$.
4. **Verträglichkeit:** $w^{(0)}+w^{(1)}=0$ (starres Lager) bzw. $=-\frac{Xl_S}{EA}$ (elastischer Stab), bzw. $=$ Federweg $\frac Xc$.
5. $X$ ⇒ restliche Lagerkräfte aus Gleichgewicht ⇒ beliebige Verschiebungen durch Superposition.
:::

:::bsp Eingespannter Balken auf zusätzlichem Lager (Folienbeispiel 6)
$A$ eingespannt, $B$ bei $x=2a$, Gleichlast $q_0$ auf $[a,2a]$.
„0": Kragträger. $w^{(0)}(a)=\frac{7q_0a^4}{12EI}$, $w'^{(0)}(a)=\frac{q_0a^3}{EI}$ (aus der Resultierenden $q_0a$ bei $1{,}5a$), Endstück als Kragträger mit Gleichlast: $\frac{q_0a^4}{8EI}$ ⇒ $w^{(0)}(2a)=\left(\frac7{12}+1+\frac18\right)\frac{q_0a^4}{EI}=\frac{41}{24}\frac{q_0a^4}{EI}$.
„1": $X$ nach oben am Ende: $w^{(1)}=-\frac{X(2a)^3}{3EI}=-\frac{8Xa^3}{3EI}$.
**Fall 1** (starres Lager): $X=\frac{41}{64}q_0a$; Einspannung: $A_V=\frac{23}{64}q_0a$, $M_A=\frac7{32}q_0a^2$.
**Fall 2** (Stab $EA$, Länge $l$): $\frac{41q_0a^4}{24EI}-\frac{8Xa^3}{3EI}=\frac{Xl}{EA}$ ⇒ $X=\dfrac{\frac{41q_0a^4}{24EI}}{\frac{8a^3}{3EI}+\frac l{EA}}$ (weicherer Stab ⇒ kleinere Lagerkraft).
:::

:::bsp Durchlaufträger auf drei Stützen (Folienbeispiel 5; Geometrie: $A$ bei 0, $F$ bei $\frac a2$, $B$ bei $a$, $q_0=\frac Fa$ auf $[a,2a]$, $C$ bei $2a$)
Mittellager $B$ entfernen ⇒ Einfeldträger $l=2a$.
„0": $F$ bei $\frac a2$ ⇒ (Maxwell: gleich der Durchbiegung bei $\frac a2$ infolge Mittellast) $w=\frac{11Fa^3}{96EI}$; halbe Gleichlast ⇒ halbe Mittendurchbiegung $\frac12\cdot\frac{5q_0(2a)^4}{384EI}=\frac{5Fa^3}{48EI}$. Summe $\frac{7Fa^3}{32EI}$.
„1": $-\frac{X(2a)^3}{48EI}=-\frac{Xa^3}{6EI}$ ⇒ $X=B=\frac{21}{16}F$.
Gleichgewicht: $A=C=\frac{11}{32}F$.
:::

## Aufgaben

:::aufgabe 1 (Übung 5, Aufgabe 24)
Balken ($2a$) bei $A$ eingespannt, bei $B$ ($x=a$) Loslager, Dreieckslast von 0 (bei $B$) auf $q_0$ (bei $C$, $x=2a$). (a) Zerlegung, (b) Lagerreaktionen, (c) Absenkung von $C$.
:::loesung
(a) Lager $B$ entfernen ⇒ Kragträger $2a$. „0": Dreieckslast; „1": $X$ nach oben bei $x=a$.
(b) „0" bei $x=a$: Resultierende $R=\frac{q_0a}2$ bei $x=\frac53a$ ⇒ $EIw''=R(\frac53a-x)$ auf $[0,a]$: $EIw^{(0)}(a)=R(\frac56a^3-\frac16a^3)=\frac{q_0a^4}3$, $EIw'^{(0)}(a)=\frac76Ra^2=\frac7{12}q_0a^3$.
„1": $w^{(1)}(a)=-\frac{Xa^3}{3EI}$. Verträglichkeit ⇒ $X=B=q_0a$.
Einspannung: $A_V=R-B=-\frac{q_0a}2$ (also nach **unten**), $|M_A|=\frac{q_0a^2}6$.
(c) „0" am Ende: $w(a)+w'(a)\,a+\frac{11q_0a^4}{120EI}=\left(\frac13+\frac7{12}+\frac{11}{120}\right)\frac{q_0a^4}{EI}=\frac{121}{120}\frac{q_0a^4}{EI}$.
„1" am Ende: $-\frac{Xa^3}{3EI}-\frac{Xa^2}{2EI}a=-\frac56\frac{q_0a^4}{EI}$.
$$w_C=\frac{121-100}{120}\frac{q_0a^4}{EI}=\frac{7q_0a^4}{40EI}.$$
(Numerisch durch direkte Integration bestätigt.)
:::
:::

:::aufgabe 2 (Übung 5, Aufgabe 21 + 25 – Balkenwaage)
Balken $6a$: $A$ ($x=0$, Masse $m_1$), Festlager $B$ ($2a$), Kalibriermasse $m_2$ bei $C$ ($3a$), Loslager $D$ ($4a$), Ende $G$ ($6a$) mit Kontakt bei Absenkung $d$. (a) Lager, (b) Biegelinie, (c) $w_G$, (d) $m_{1,min}$ ohne $m_2$, (e) $m_2$, sodass der Kontakt bei doppelter Masse auslöst.
:::loesung
(a) $\sum M_B$: $D=\left(\frac{m_2}2-m_1\right)g$, $B=\left(2m_1+\frac{m_2}2\right)g$ (beide nach oben positiv).
(b) $EIw''=-M$, $M=-m_1gx+B\langle x-2a\rangle-m_2g\langle x-3a\rangle+D\langle x-4a\rangle$:
$$w=\frac g{6EI}\Big(m_1x^3-\big(2m_1+\tfrac{m_2}2\big)\langle x-2a\rangle^3+m_2\langle x-3a\rangle^3+\big(m_1-\tfrac{m_2}2\big)\langle x-4a\rangle^3+\big(-20m_1+\tfrac32m_2\big)a^2x+(32m_1-3m_2)a^3\Big)$$
(Konstanten aus $w(2a)=w(4a)=0$; identisch mit der in Aufgabe 25 gegebenen Lösung.)
(c) $w_G=w(6a)=\frac{ga^3}{6EI}(8m_1-3m_2)$.
(d) $m_2=0$: $\frac{8m_1ga^3}{6EI}=d$ ⇒ $m_{1}^*=\frac{3EId}{4ga^3}$.
(e) $\frac{ga^3}{6EI}(16m_1^*-3m_2)=d=\frac{ga^3}{6EI}8m_1^*$ ⇒ $m_2=\frac83m_1^*=\frac{2EId}{ga^3}$.
Aufgabe 25: $w_C=w(3a)=\frac{ga^3}{6EI}(m_2-3m_1)$, $w_A=w(0)=\frac{ga^3}{6EI}(32m_1-3m_2)$. Mit der Tafel: Feld $BD$ als Einfeldträger mit $m_2g$ in der Mitte und Randmoment $2m_1ga$ (aus dem Kragarm) + starre Drehung der Kragarme mit den Endneigungen.
:::
:::

:::aufgabe 3 (Übung 5, Aufgabe 22 – nur aufstellen)
Balken $12a$: $A$ ($0$) und $B$ ($6a$) Loslager, $F=\frac43q_0a$ bei $3a$; Dreieckslast von 0 (bei $6a$) auf $q_0$ (bei $8a$) und wieder auf 0 (bei $12a$); bei $C$ ($12a$) Parallelführung (drehsteif, vertikal verschieblich). (a) RB, (c) $q(x)$, (d) Gleichungen mit Föppl.
:::loesung
(a) $w(0)=0$, $M(0)=0$; $w(6a)=0$; $w'(12a)=0$, $Q(12a)=0$ – 5 Bedingungen für 4 Konstanten + unbekannte Lagerkraft $B$.
(b) Ohne Föppl: Bereiche $[0,3a]$, $[3a,6a]$, $[6a,8a]$, $[8a,12a]$ ⇒ 16 Konstanten; an jeder Grenze $w$, $w'$, $M$ stetig, $Q$ stetig bzw. Sprung um $F$ (bei $3a$) bzw. um $B$ (bei $6a$, dort zusätzlich $w=0$).
(c) $q(x)=\frac{q_0}{2a}\langle x-6a\rangle^1-\frac{3q_0}{4a}\langle x-8a\rangle^1$.
(d) $Q=-\frac{q_0}{4a}\langle x-6a\rangle^2+\frac{3q_0}{8a}\langle x-8a\rangle^2-F\langle x-3a\rangle^0+B\langle x-6a\rangle^0+C_1$
$M=-\frac{q_0}{12a}\langle x-6a\rangle^3+\frac{q_0}{8a}\langle x-8a\rangle^3-F\langle x-3a\rangle^1+B\langle x-6a\rangle^1+C_1x+C_2$
$EIw'=\frac{q_0}{48a}\langle x-6a\rangle^4-\frac{q_0}{32a}\langle x-8a\rangle^4+\frac F2\langle x-3a\rangle^2-\frac B2\langle x-6a\rangle^2-\frac{C_1}2x^2-C_2x+C_3$
$EIw=\frac{q_0}{240a}\langle x-6a\rangle^5-\frac{q_0}{160a}\langle x-8a\rangle^5+\frac F6\langle x-3a\rangle^3-\frac B6\langle x-6a\rangle^3-\frac{C_1}6x^3-\frac{C_2}2x^2+C_3x+C_4$
($C_1$ = Lagerkraft $A$, $C_2=0$.)
:::
:::

## Karteikarten

:::karte
Föppl-Klammer: Definition und Integrationsregel?
???
$\langle x-x_0\rangle^n=0$ für $x<x_0$, sonst $(x-x_0)^n$; $\int\langle\cdot\rangle^n=\frac{\langle\cdot\rangle^{n+1}}{n+1}$.
:::

:::karte
Wie geht ein Gelenk in die Föppl-Biegelinie ein?
???
Sprung in der Neigung: $+\Delta\varphi\langle x-x_G\rangle^0$ in $w'$; zusätzliche Bedingung $M(x_G)=0$.
:::

:::karte
Superposition bei statisch unbestimmten Balken?
???
Lager entfernen, X ansetzen; $w^{(0)}+w^{(1)}(X)=0$ (bzw. Feder-/Stabnachgiebigkeit).
:::

:::karte
Kragträger mit Gleichlast: Endneigung, Enddurchbiegung?
???
$\frac{q_0l^3}{6EI}$, $\frac{q_0l^4}{8EI}$
:::

:::karte
Einfeldträger mit Endmoment: Neigungen?
???
$\frac{M_0l}{6EI}$ am anderen Ende, $\frac{M_0l}{3EI}$ am Momentenende.
:::

:::karte
Eingespannt–gelenkig mit Gleichlast: Lagerkraft am Gelenk?
???
$X=\frac38q_0l$ (aus $\frac{q_0l^4}{8EI}=\frac{Xl^3}{3EI}$).
:::
