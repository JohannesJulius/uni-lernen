---
title: §8 Arbeit – Arbeitsbegriff, Potential, Prinzip der virtuellen Arbeit, Stabilität
chapter: §8 Arbeit
minutes: 120
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#221; Technische Mechanik 1/978-3-662-59157-4.pdf#239
---

:::ziel
- Arbeit einer Kraft und eines Moments berechnen; konservative Kräfte und **Potential**.
- Das **Prinzip der virtuellen Verrückungen (Arbeitssatz)** formulieren und für bewegliche Systeme (Mechanismen) anwenden.
- Reaktions- und Schnittkräfte mit dem Arbeitsprinzip bestimmen (Lager lösen → Mechanismus).
- **Stabilität** einer Gleichgewichtslage über das Potential beurteilen.
:::

## Arbeit

:::def Arbeit
Verschiebt sich der Angriffspunkt einer Kraft $\vec F$ um $\d\vec r$, so leistet sie die Arbeit
$$\d W=\vec F\cdot\d\vec r=F\,\d r\cos\alpha,\qquad W=\int_1^2\vec F\cdot\d\vec r.$$
Nur die Kraftkomponente **in Wegrichtung** leistet Arbeit. Einheit: $1\,\mathrm{Nm}=1\,\mathrm J$.
Ein **Moment** $M$ leistet bei einer Drehung um $\d\varphi$: $\d W=M\,\d\varphi$.
:::

- Konstante Kraft, gerader Weg: $W=\vec F\cdot\Delta\vec r$.
- Gewichtskraft: $W=-G\,\Delta z$ (Heben kostet Arbeit, nur der Höhenunterschied zählt).
- Feder (Steifigkeit $c$, Dehnung $x$): Federkraft $-cx$, $W=-\frac12c(x_2^2-x_1^2)$.

## Potential (konservative Kräfte)

:::def Potential
Hängt die Arbeit einer Kraft nur von Anfangs- und Endpunkt ab (nicht vom Weg), heißt die Kraft **konservativ**; dann gibt es ein **Potential** (potentielle Energie) $\Pi$ mit
$$W_{12}=-(\Pi_2-\Pi_1),\qquad\vec F=-\operatorname{grad}\Pi\ \ (\text{eindimensional: }F=-\tfrac{\d\Pi}{\d x}).$$
:::

| Kraft | Potential |
|---|---|
| Gewicht | $\Pi=Gz$ ($z$ nach oben) |
| Feder | $\Pi=\frac12cx^2$ |
| Drehfeder | $\Pi=\frac12c_T\varphi^2$ |

Reibungskräfte sind **nicht** konservativ.

## Prinzip der virtuellen Arbeit

Eine **virtuelle Verrückung** $\delta\vec r$ ist eine gedachte, infinitesimal kleine, mit den Bindungen **verträgliche** Verschiebung (sie muss nicht wirklich stattfinden, die Zeit läuft nicht). Die zugehörige Arbeit heißt virtuelle Arbeit $\delta W=\vec F\cdot\delta\vec r$.

:::satz Prinzip der virtuellen Verrückungen (Arbeitssatz der Statik)
Ein mechanisches System ist genau dann im **Gleichgewicht**, wenn die **virtuelle Arbeit der eingeprägten Kräfte** für jede mit den Bindungen verträgliche virtuelle Verrückung verschwindet:
$$\delta W=\sum_i\vec F_i\cdot\delta\vec r_i+\sum_jM_j\,\delta\varphi_j=0.$$
Reaktionskräfte leisten bei verträglichen Verrückungen **keine** Arbeit (ideale Bindungen) – sie tauchen gar nicht auf!
:::

Für konservative Systeme: $\delta W=-\delta\Pi=0$ – das **Potential ist stationär** in der Gleichgewichtslage.

:::rezept Arbeitsprinzip für ein System mit einem Freiheitsgrad
1. Lagekoordinate wählen (z. B. Winkel $\varphi$).
2. Lagen der Kraftangriffspunkte in Abhängigkeit von $\varphi$ aufschreiben (Koordinaten!).
3. Variieren (= ableiten): $\delta x_i=\frac{\partial x_i}{\partial\varphi}\delta\varphi$.
4. $\delta W=\sum F_i\,\delta x_i=(\dots)\delta\varphi=0$ ⇒ Klammer $=0$ (da $\delta\varphi$ beliebig).
:::

:::bsp Hebel
Waagbalken, Drehpunkt dazwischen, links Kraft $F_1$ am Hebelarm $a$, rechts $F_2$ am Arm $b$ (beide nach unten). Virtuelle Drehung um $\delta\varphi$ (gegen den Uhrzeigersinn): Das linke Ende senkt sich um $a\,\delta\varphi$, das rechte hebt sich um $b\,\delta\varphi$. Die nach unten wirkenden Kräfte leisten $\delta W=F_1\,a\,\delta\varphi-F_2\,b\,\delta\varphi=0\Rightarrow F_1a=F_2b$ – das Hebelgesetz, ohne die Lagerkraft zu berechnen (sie leistet keine Arbeit).
:::

:::bsp Kniehebel/Kurbeltrieb
Zwei gleich lange Stäbe ($l$) bilden ein Gelenkviereck-Dreieck: links Festlager $A$, oben Gelenk mit vertikaler Last $F$, rechts ein auf horizontaler Bahn verschieblicher Kolben, an dem die horizontale Kraft $P$ angreift. Winkel $\varphi$ der Stäbe zur Horizontalen.
Koordinaten: Höhe des Gelenks $z_G=l\sin\varphi$, Lage des Kolbens $x_K=2l\cos\varphi$.
$\delta z_G=l\cos\varphi\,\delta\varphi$, $\delta x_K=-2l\sin\varphi\,\delta\varphi$.
$\delta W=-F\,\delta z_G+(-P)\,\delta x_K=(-Fl\cos\varphi+2Pl\sin\varphi)\delta\varphi=0\Rightarrow P=\frac{F}{2\tan\varphi}$.
Für flache Winkel wird $P$ sehr groß – Prinzip von Kniehebelpressen.
:::

## Reaktions- und Schnittkräfte mit dem Arbeitsprinzip

Um eine **Reaktionskraft** (oder Schnittgröße) zu bestimmen, entfernt man **gezielt die zugehörige Bindung** und ersetzt sie durch die Kraft. Das System wird zum Mechanismus mit einem Freiheitsgrad; dann Arbeitsprinzip anwenden.

:::bsp Lagerkraft eines Einfeldträgers
Einfeldträger $l$, Last $F$ bei $a$. Gesucht $B$: Loslager $B$ entfernen, $B$ als äußere Kraft. Der Balken kann um $A$ drehen: $\delta w(x)=x\,\delta\varphi$. $\delta W=-F\,a\,\delta\varphi+B\,l\,\delta\varphi=0\Rightarrow B=\frac{Fa}l$ ✓.
Für das **Biegemoment** an einer Stelle: dort ein Gelenk einbauen und das Momentenpaar $M$ als äußere Last eintragen – bei Gerberträgern sehr elegant.
:::

## Stabilität einer Gleichgewichtslage

Gleichgewicht heißt $\delta\Pi=0$ ($\Pi'(\varphi)=0$). Die **Art** des Gleichgewichts zeigt die zweite Ableitung:

:::satz Stabilitätskriterium (konservative Systeme, ein Freiheitsgrad)
- $\Pi''(\varphi_0)>0$: **stabil** (Potentialminimum – Kugel in der Mulde)
- $\Pi''(\varphi_0)<0$: **instabil** (Maximum – Kugel auf der Kuppe)
- $\Pi''(\varphi_0)=0$: **indifferent** bzw. höhere Ableitungen prüfen.
:::

:::bsp Pendelstab mit Feder (Vorstufe zum Knicken)
Ein senkrechter starrer Stab (Länge $l$), unten gelenkig mit Drehfeder $c_T$, oben die vertikale Last $F$ nach unten. Auslenkung $\varphi$:
$\Pi(\varphi)=\frac12c_T\varphi^2+Fl\cos\varphi$ (Last senkt sich um $l(1-\cos\varphi)$).
$\Pi'=c_T\varphi-Fl\sin\varphi=0$ ⇒ $\varphi=0$ ist immer Gleichgewicht.
$\Pi''(0)=c_T-Fl$ ⇒ **stabil für $F<\frac{c_T}l$**, instabil für $F>\frac{c_T}l$.
Die **kritische Last** $F_{krit}=\frac{c_T}l$ – Grundidee des Knickens (TM 2, Kap. 7: Euler-Stab).
:::

## Aufgaben

:::aufgabe 1
Eine Kiste ($G=500\,$N) wird eine $10\,$m lange Rampe ($30°$) hinaufgezogen. Arbeit der Gewichtskraft?
:::loesung
Höhenzuwachs $5\,$m ⇒ $W_G=-500\cdot5=-2500\,$J (unabhängig vom Weg, Gewicht ist konservativ).
:::
:::

:::aufgabe 2
Bestimme mit dem Arbeitsprinzip das Einspannmoment eines Kragträgers ($l$) mit Endlast $F$.
:::loesung
Einspannung durch Gelenk + Moment $M_A$ ersetzen; Drehung $\delta\varphi$ um $A$: Endpunkt senkt sich um $l\,\delta\varphi$. $\delta W=M_A\delta\varphi-Fl\,\delta\varphi=0\Rightarrow M_A=Fl$ ✓.
:::
:::

:::aufgabe 3
Ein Stab (Länge $l$, Gewicht $G$, Schwerpunkt Mitte) hängt unten gelenkig und wird oben durch eine horizontale Feder ($c$) gehalten, die bei $\varphi=0$ (senkrecht) entspannt ist. Für welche $c$ ist die senkrechte Lage stabil?
:::loesung
Federweg $l\sin\varphi$: $\Pi=\frac12c\,l^2\sin^2\varphi+G\frac l2\cos\varphi$. $\Pi''(0)=cl^2-G\frac l2>0\iff c>\frac{G}{2l}$.
:::
:::

## Karteikarten

:::karte
Arbeit einer Kraft, eines Moments?
???
$W=\int\vec F\cdot\d\vec r$; $W=\int M\,\d\varphi$.
:::

:::karte
Prinzip der virtuellen Verrückungen?
???
Gleichgewicht ⇔ $\delta W=0$ für alle verträglichen virtuellen Verrückungen; Reaktionskräfte leisten keine virtuelle Arbeit.
:::

:::karte
Wie bestimmt man eine Lagerkraft mit dem Arbeitsprinzip?
???
Zugehörige Bindung lösen, Lagerkraft als äußere Kraft ansetzen, System als Mechanismus virtuell bewegen, $\delta W=0$.
:::

:::karte
Stabilitätskriterium über das Potential?
???
$\Pi'=0$ Gleichgewicht; $\Pi''>0$ stabil, $\Pi''<0$ instabil.
:::

:::karte
Potential von Gewicht und Feder?
???
$\Pi=Gz$; $\Pi=\frac12cx^2$.
:::
