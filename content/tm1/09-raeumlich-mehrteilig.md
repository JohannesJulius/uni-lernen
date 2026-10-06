---
title: §5 Räumliche und mehrteilige Tragwerke – Dreigelenkbogen, Gelenkbalken, kinematische Bestimmtheit
chapter: §5 Lagerreaktionen
minutes: 120
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#132; Technische Mechanik 1/978-3-662-59157-4.pdf#135
---

:::ziel
- Lagerreaktionen **räumlicher** Tragwerke (6 Gleichungen).
- **Mehrteilige** Tragwerke: Verbindungselemente (Gelenk, Stab, Parallelführung), Abzählkriterium $f=3n-(r+v)$.
- **Dreigelenkbogen** und **Gelenkbalken (Gerberträger)** berechnen.
- Kinematische Bestimmtheit prüfen (Polplan-Idee).
:::

## Räumliche Tragwerke

Ein starrer Körper im Raum hat **6 Freiheitsgrade** (3 Verschiebungen, 3 Drehungen). Statisch bestimmt ist er (notwendig) mit $r=6$ Lagerreaktionen.

| Lager im Raum | Reaktionen |
|---|---|
| Kugelgelenk (festes Lager) | 3 Kräfte |
| Loslager auf Ebene | 1 Kraft (senkrecht zur Ebene) |
| Zylindergelenk/Querlager (Welle) | 2 Kräfte (quer zur Achse) |
| Pendelstab | 1 Kraft |
| Einspannung | 3 Kräfte + 3 Momente |

:::bsp Tisch mit drei Beinen
Ein dreibeiniger Tisch (Loslager = 3 vertikale Reaktionen) trägt vertikale Lasten: Nur 3 Gleichungen sind nicht trivial ($\sum F_z$, $\sum M_x$, $\sum M_y$) – statisch bestimmt für vertikale Lasten. Ein **vierbeiniger** Tisch ist statisch **unbestimmt** (wackelt, wenn der Boden uneben ist!).
:::

Vorgehen wie in der Ebene, aber geschickte **Momentenachsen** wählen: Achse durch möglichst viele unbekannte Lagerkräfte legen (diese schneiden die Achse ⇒ kein Moment).

## Mehrteilige Tragwerke

Mehrere starre Körper werden durch **Verbindungselemente** gekoppelt:

| Verbindung | überträgt | Wertigkeit $v$ |
|---|---|---|
| **Gelenk** | 2 Kräfte (kein Moment!) | 2 |
| Pendelstab zwischen zwei Körpern | 1 Kraft (Stabrichtung) | 1 |
| Parallelführung / Querkraftgelenk | 1 Kraft + 1 Moment | 2 |
| starre Verbindung | 2 Kräfte + 1 Moment | 3 |

:::def Abzählkriterium für $n$ Körper (eben)
$$f=3n-(r+v),$$
$r$ = Lagerreaktionen, $v$ = Verbindungsreaktionen. $f=0$: notwendig für statische Bestimmtheit; $f<0$: statisch unbestimmt; $f>0$: beweglich.
:::

:::rezept Mehrteilige Tragwerke berechnen
1. Gesamtsystem und **jeden Teilkörper** freischneiden; an inneren Gelenken die Gelenkkräfte auf beiden Seiten **entgegengesetzt** (actio = reactio) eintragen.
2. Bei $n$ Körpern stehen $3n$ Gleichungen zur Verfügung.
3. Geschickt: **Momentengleichung um das Gelenk** für einen Teilkörper (Gelenk überträgt kein Moment) liefert eine zusätzliche Bedingung.
:::

## Dreigelenkbogen

Zwei Körper, je ein Festlager ($A$, $B$) am Boden, oben durch ein Gelenk $G$ verbunden: $n=2$, $r=4$, $v=2$ ⇒ $f=6-6=0$ ✓ (Ausnahme: $A$, $G$, $B$ auf einer Geraden).

:::bsp Symmetrischer Dreigelenkbogen
Spannweite $2a$, Gelenk $G$ in der Mitte auf Höhe $h$, Lager $A$ und $B$ auf gleicher Höhe. Vertikale Last $F$ im linken Teil bei horizontalem Abstand $a/2$ von $A$.
- Gesamtsystem, $\sum M^{(A)}$: $B_v\cdot2a-F\frac a2=0\Rightarrow B_v=\frac F4$; $\sum F_y$: $A_v=\frac34F$.
- Rechter Teil (unbelastet), $\sum M^{(G)}$: $B_v\cdot a-B_h\cdot h=0\Rightarrow B_h=\frac{a}{h}B_v=\frac{aF}{4h}$ (nach innen gerichtet).
- Gesamt $\sum F_x$: $A_h=B_h=\frac{aF}{4h}$ (entgegengesetzt).
Der unbelastete Teil ist eine **Pendelstütze** (zwei Gelenke, keine Last) ⇒ seine Lagerkraft zeigt in Richtung $B\to G$ – das ergibt sofort $B_h/B_v=a/h$.
Bogen erzeugen **Horizontalschub** – flache Bögen ($h$ klein) drücken stark nach außen.
:::

## Gelenkbalken (Gerberträger)

Ein langer Balken über mehrere Lager wird durch **Gelenke** in statisch bestimmte Teile zerlegt (z. B. Brücken).

:::bsp Gelenkbalken
Einspannung bei $A$ ($x=0$), Gelenk $G$ bei $x=2\,$m, Loslager $B$ bei $x=5\,$m. Last $F=9\,$kN bei $x=3{,}5\,$m. $n=2$, $r=3+1=4$, $v=2$ ⇒ $f=0$.
- Rechter Teil ($G$ bis $B$, Länge 3 m), $\sum M^{(G)}$: $3B-1{,}5\cdot9=0\Rightarrow B=4{,}5\,$kN; Gelenkkraft $G_y=4{,}5\,$kN.
- Linker Teil (Kragarm 2 m), am Gelenk wirkt $G_y=4{,}5\,$kN nach unten (actio = reactio): $A_y=4{,}5\,$kN, $M_A=4{,}5\cdot2=9\,$kNm.
:::

## Kinematische Bestimmtheit (Ausnahmefälle)

Auch bei $f=0$ kann ein System **beweglich** sein. Ein Gegenstück zur statischen Prüfung ist die **kinematische**: Lässt sich eine „infinitesimale" Bewegung finden, die mit allen Lagern verträglich ist? Hilfsmittel **Polplan**: Jeder bewegliche Körper dreht momentan um einen **Pol**; ein Festlager ist ein Pol, der Pol eines Körpers mit Loslager liegt auf der Normalen der Lagerbahn; bei zwei Körpern liegen Hauptpol 1, Nebenpol (Gelenk) 1,2 und Hauptpol 2 **auf einer Geraden**. Widersprüche im Polplan ⇒ unbeweglich (Tragwerk). Mathematisch: $\det$ der Koeffizientenmatrix $\ne0$.

## Aufgaben

:::aufgabe 1
Abzählen: (a) Zweigelenkrahmen (zwei Festlager, ein Körper), (b) Dreigelenkbogen, (c) Gerberträger mit Festlager, zwei Loslagern und einem Gelenk, (d) zwei Körper mit Gelenk, je ein Loslager und ein Festlager.
:::loesung
(a) $f=3-4=-1$ (unbestimmt). (b) $f=6-(4+2)=0$. (c) $n=2$, $r=2+1+1=4$, $v=2$: $f=0$. (d) $f=6-(3+2)=1$ – beweglich.
:::
:::

:::aufgabe 2
Dreigelenkbogen wie im Beispiel, aber $F$ horizontal am Gelenk $G$ (nach rechts). Lagerreaktionen?
:::loesung
Beide Teile sind unbelastet bis auf $F$ im Gelenk – beide wirken als Pendelstützen in Richtung $A\to G$ bzw. $B\to G$. Gesamt $\sum M^{(A)}$: $2aB_v-hF=0\Rightarrow B_v=\frac{hF}{2a}$ (↑), $A_v=-\frac{hF}{2a}$ (↓). Aus der Richtung: $B_h=\frac ahB_v=\frac F2$, $A_h=\frac F2$ (beide gegen $F$). Kontrolle $\sum F_x$: $F-\frac F2-\frac F2=0$ ✓.
:::
:::

## Karteikarten

:::karte
Abzählkriterium mehrteiliger ebener Tragwerke?
???
$f=3n-(r+v)$
:::

:::karte
Was überträgt ein Gelenk?
???
Zwei Kräfte, aber kein Moment ⇒ Momentengleichung um das Gelenk für einen Teilkörper = Zusatzbedingung.
:::

:::karte
Wie verhält sich ein unbelasteter Teil mit zwei Gelenken?
???
Wie eine Pendelstütze – Kraft wirkt entlang der Verbindungslinie der Gelenke.
:::

:::karte
Wie viele Lagerreaktionen braucht ein räumlicher Körper für statische Bestimmtheit?
???
Sechs.
:::
