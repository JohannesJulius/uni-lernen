---
title: §6 Fachwerke I – Idealisierung, statische Bestimmtheit, Aufbau, Nullstäbe, Knotenpunktverfahren
chapter: §6 Fachwerke
minutes: 120
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#153; Technische Mechanik 1/978-3-662-59157-4.pdf#159
---

:::ziel
- Idealisierungen eines Fachwerks kennen (gelenkige Knoten, Lasten nur in Knoten ⇒ reine Stabkräfte).
- Statische Bestimmtheit $f=2k-(s+r)$ prüfen; Bildungsgesetze (Dreiecksaufbau).
- **Nullstäbe** sofort erkennen.
- **Knotenpunktverfahren** systematisch durchführen.
:::

## Was ist ein Fachwerk?

Fachwerke sind Tragwerke aus **geraden Stäben**, die in **Knoten** verbunden sind (Brücken, Dachbinder, Kranausleger, Strommasten, Flugzeug-Rumpfgerüste früher). Idealisierungen:
1. Die Stäbe sind in den Knoten **gelenkig** (reibungsfrei) verbunden.
2. Äußere Kräfte greifen **nur in den Knoten** an.
3. Eigengewicht der Stäbe vernachlässigt (oder auf die Knoten verteilt).

:::satz Folge: Stäbe sind Zweigelenkstäbe
Jeder Stab ist ein unbelasteter Körper mit zwei Gelenken ⇒ er überträgt nur eine **Längskraft** $S$ in Stabrichtung. Vorzeichenkonvention: **Zugkraft positiv**; Stabkräfte im FKB zeigen vom Knoten **weg** (in den Stab hinein ist der Stab „gezogen"). Negatives Ergebnis ⇒ **Druckstab**.
:::

## Statische Bestimmtheit

Jeder Knoten liefert in der Ebene **2** Gleichgewichtsbedingungen (zentrale Kräftegruppe). Mit $k$ Knoten, $s$ Stäben, $r$ Lagerreaktionen:
$$f=2k-(s+r)\qquad f=0:\ \text{notwendig für statische Bestimmtheit};\ f<0:\ \text{innerlich/äußerlich unbestimmt};\ f>0:\ \text{beweglich}.$$
(Im Raum: $f=3k-(s+r)$.)

:::merke Bildungsgesetze für statisch bestimmte Fachwerke
1. **Dreiecksaufbau:** Ausgehend von einem Grunddreieck (3 Knoten, 3 Stäbe) wird jeder neue Knoten mit **zwei neuen Stäben** angeschlossen (die nicht auf einer Geraden liegen). Mit statisch bestimmter Lagerung ($r=3$) ist das Fachwerk statisch bestimmt und unverschieblich.
2. Zwei statisch bestimmte Fachwerke durch **drei Stäbe** (nicht zentral, nicht parallel) oder ein Gelenk + einen Stab verbinden.
3. Stabtausch-Verfahren (Henneberg) für komplexe Fälle.
Das Abzählkriterium allein reicht nicht – auch hier gibt es **Ausnahmefälle** (bewegliche Viereckfelder ohne Diagonale!).
:::

## Nullstäbe

Stäbe, die bei der gegebenen Belastung **keine Kraft** übertragen. Erkennen spart viel Arbeit:

:::satz Nullstabregeln
1. **Unbelasteter Knoten mit zwei Stäben** (nicht auf einer Geraden): **beide** Stäbe sind Nullstäbe.
2. **Belasteter Knoten mit zwei Stäben**, die Last wirkt in Richtung des einen Stabes: der **andere** ist Nullstab.
3. **Unbelasteter Knoten mit drei Stäben**, zwei davon auf einer Geraden: der **dritte** ist Nullstab (und die beiden anderen haben gleiche Kraft).
:::

Nullstäbe sind nicht überflüssig: Sie stabilisieren gegen Knicken, sorgen für Unverschieblichkeit und tragen bei anderen Lastfällen.

## Knotenpunktverfahren

:::rezept Knotenpunktverfahren
1. Abzählen ($f=0$?), Nullstäbe markieren.
2. **Lagerreaktionen** am Gesamtsystem berechnen (3 Gleichungen) – optional, aber gut zur Kontrolle.
3. Mit einem Knoten beginnen, an dem **höchstens zwei unbekannte** Stabkräfte angreifen.
4. Knoten freischneiden, alle Stabkräfte als **Zug** (vom Knoten weg) eintragen, $\sum F_x=0$, $\sum F_y=0$.
5. Zum nächsten Knoten mit ≤ 2 Unbekannten weitergehen (schon bekannte Stabkräfte mit Vorzeichen übernehmen!).
6. Die letzten Gleichungen dienen als **Kontrolle**.
7. Ergebnisse tabellieren (Zug +, Druck −).
:::

:::bsp Einfaches Dreiecksfachwerk
Knoten $I=(0,0)$ Festlager, $II=(4,0)$ Loslager, $III=(2,2)$ (m). Stäbe 1: I–II, 2: I–III, 3: II–III. Last $F=10\,$kN senkrecht nach unten in III.
- $f=2\cdot3-(3+3)=0$ ✓. Lager (Symmetrie): $A_y=B=5\,$kN, $A_x=0$.
- Knoten II (Kräfte: $B=5$ ↑, $S_1$ nach links Richtung I, $S_3$ Richtung III, also nach links oben unter 45°):
  $\uparrow$: $B+S_3\sin45°=0\Rightarrow S_3=-\frac{5}{\sin45°}=-7{,}07\,$kN (Druck).
  $\to$: $-S_1-S_3\cos45°=0\Rightarrow S_1=-S_3\cos45°=5\,$kN (Zug).
- Knoten I: aus Symmetrie $S_2=S_3=-7{,}07\,$kN.
- Kontrolle Knoten III ($\uparrow$ positiv): Die Stabkräfte zeigen (als Zug angesetzt) vom Knoten weg nach unten zu I bzw. II, ihre Vertikalkomponenten sind $-S_2\sin45°$ und $-S_3\sin45°$: $-(-7{,}07)\cdot0{,}707\cdot2-10=10-10=0$ ✓.
:::

:::achtung Häufige Fehler
- Stabkraft am einen Knoten als Zug, am anderen versehentlich als Druck angesetzt – **immer Zug ansetzen**, Vorzeichen ergibt sich.
- Winkel: sin/cos über die Stablängen-Verhältnisse (Δx/L, Δy/L) bestimmen statt über Gradzahlen – weniger Fehler.
- Lasten an Stäben (zwischen Knoten) passen nicht zur Fachwerkidealisierung.
:::

## Aufgaben

:::aufgabe 1
Prüfe ein rechteckiges Viereck-Fachwerk (4 Knoten, 4 Randstäbe, Festlager + Loslager). Was fehlt?
:::loesung
$f=2\cdot4-(4+3)=1>0$ – beweglich (Viereck verschiebt sich zum Parallelogramm). Eine **Diagonale** einfügen ⇒ $f=0$.
:::
:::

:::aufgabe 2
Ein Kranausleger: Knoten $A=(0,0)$ und $B=(0,3)$ an der Wand (beide Festlager), Knoten $C=(4,0)$. Stäbe $AC$ (horizontal) und $BC$. Last $F=12\,$kN senkrecht nach unten in $C$. Stabkräfte?
:::loesung
Knoten C: $S_{AC}$ nach links, $S_{BC}$ Richtung $(−4,3)/5$. $\uparrow$: $S_{BC}\cdot\frac35-12=0\Rightarrow S_{BC}=20\,$kN (Zug). $\to$: $-S_{AC}-S_{BC}\cdot\frac45=0\Rightarrow S_{AC}=-16\,$kN (Druck).
:::
:::

:::aufgabe 3
Ein Brückenfachwerk hat einen unbelasteten Knoten am Untergurt, an dem zwei Untergurtstäbe (auf einer Geraden) und ein Vertikalstab anschließen. Kraft im Vertikalstab?
:::loesung
Null (Nullstabregel 3).
:::
:::

## Karteikarten

:::karte
Abzählkriterium ebenes Fachwerk?
???
$f=2k-(s+r)$
:::

:::karte
Drei Nullstabregeln?
???
(1) Unbelasteter Zweistab-Knoten: beide null. (2) Zweistab-Knoten, Last in Richtung eines Stabes: anderer null. (3) Unbelasteter Dreistab-Knoten mit zwei Stäben auf einer Geraden: dritter null.
:::

:::karte
Vorzeichenkonvention Stabkräfte?
???
Zug positiv; im FKB zeigen Stabkräfte vom Knoten weg.
:::

:::karte
Mit welchem Knoten beginnt man beim Knotenpunktverfahren?
???
Mit einem, an dem höchstens zwei unbekannte Stabkräfte angreifen.
:::
