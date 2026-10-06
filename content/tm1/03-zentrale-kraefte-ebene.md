---
title: §2 Kräfte mit gemeinsamem Angriffspunkt – Ebene (Zusammensetzen, Zerlegen, Gleichgewicht)
chapter: §2 Zentrale Kräftegruppen
minutes: 110
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#29; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#5
---

:::ziel
- Zentrale Kräftegruppe erkennen.
- Kräfte **grafisch** (Parallelogramm, Kräftepolygon) und **rechnerisch** (Komponenten) zusammensetzen und zerlegen.
- Gleichgewicht $\sum F_{ix}=0$, $\sum F_{iy}=0$ aufstellen und lösen; geschlossenes Krafteck.
- Typische Aufgaben: Seil-/Stabsysteme, Körper auf schiefen Ebenen, Rollen.
:::

## Zentrale Kräftegruppe

:::def
Eine Gruppe von Kräften, die **einen gemeinsamen Angriffspunkt** haben oder deren **Wirkungslinien sich in einem Punkt schneiden**, heißt **zentrale Kräftegruppe** (zentrales Kräftesystem). Am starren Körper kann man alle Kräfte längs ihrer Wirkungslinie in den Schnittpunkt verschieben.
:::

## Zusammensetzen: die Resultierende

:::satz Parallelogrammaxiom
Zwei Kräfte $\vec F_1,\vec F_2$ mit gemeinsamem Angriffspunkt sind gleichwertig zu einer einzigen Kraft, der **Resultierenden** $\vec R=\vec F_1+\vec F_2$ (Diagonale des Kräfteparallelogramms).
:::

Für $n$ Kräfte: **Kräftepolygon** (Krafteck) – Kräfte maßstäblich aneinanderhängen, $\vec R$ zeigt vom Anfang der ersten zur Spitze der letzten. Die Reihenfolge ist egal.

**Rechnerisch:**
$$R_x=\sum_iF_{ix}=\sum_iF_i\cos\alpha_i,\quad R_y=\sum_iF_{iy}=\sum_iF_i\sin\alpha_i,\quad R=\sqrt{R_x^2+R_y^2},\quad\tan\alpha_R=\frac{R_y}{R_x}.$$

**Mit Trigonometrie** (Kräftedreieck aus zwei Kräften mit Zwischenwinkel $\varphi$ im Parallelogramm):
- Kosinussatz: $R^2=F_1^2+F_2^2+2F_1F_2\cos\varphi$ ($\varphi$ = Winkel **zwischen** den Kräften).
- Sinussatz im Kräftedreieck: $\frac{F_1}{\sin\beta_1}=\frac{F_2}{\sin\beta_2}=\frac R{\sin\gamma}$.

:::bsp
$F_1=3\,$kN unter $0°$, $F_2=4\,$kN unter $90°$, $F_3=2\,$kN unter $210°$.
$R_x=3+0+2\cos210°=3-1{,}732=1{,}268\,$kN, $R_y=0+4+2\sin210°=4-1=3\,$kN.
$R=\sqrt{1{,}268^2+9}\approx3{,}26\,$kN, $\alpha_R=\arctan\frac{3}{1{,}268}\approx67{,}1°$.
:::

## Zerlegen

Umgekehrt lässt sich eine Kraft in Komponenten entlang **zwei vorgegebener Richtungen** zerlegen (in der Ebene eindeutig, wenn die Richtungen nicht parallel sind). Häufigste Zerlegung: in $x$- und $y$-Komponenten. Auf einer schiefen Ebene (Neigung $\alpha$): Gewicht $G$ zerfällt in $G\sin\alpha$ (hangabwärts) und $G\cos\alpha$ (senkrecht zur Ebene).

## Gleichgewicht in der Ebene

:::satz Gleichgewichtsbedingungen der ebenen zentralen Kräftegruppe
Gleichgewicht herrscht, wenn die Resultierende verschwindet:
$$\vec R=\sum\vec F_i=\vec0\qquad\Longleftrightarrow\qquad\sum F_{ix}=0,\quad\sum F_{iy}=0.$$
Zwei Gleichungen ⇒ höchstens **zwei Unbekannte** bestimmbar. Grafisch: Das **Krafteck ist geschlossen**.
:::

Sonderfälle: **Zwei Kräfte** im Gleichgewicht müssen gleich groß, entgegengesetzt und auf derselben Wirkungslinie sein. **Drei Kräfte** im Gleichgewicht: Wirkungslinien schneiden sich in einem Punkt, Krafteck = geschlossenes Dreieck.

:::rezept Gleichgewichtsaufgaben (zentral)
1. Punkt/Körper wählen, an dem die Kräfte angreifen; **freischneiden**.
2. Alle Kräfte eintragen (Seile: Zugkraft vom Körper **weg**, in Seilrichtung; Stäbe: Kraft in Stabrichtung, Zug positiv annehmen; glatte Kontakte: senkrecht zur Berührfläche).
3. Koordinatensystem wählen (geschickt: eine Achse senkrecht zu einer Unbekannten).
4. $\sum F_x=0$, $\sum F_y=0$ aufstellen, lösen.
5. Vorzeichen deuten (negativ ⇒ Richtung umgekehrt; bei Stäben ⇒ Druck), Plausibilität prüfen.
:::

:::bsp Lampe an zwei Seilen
Eine Lampe (Gewicht $G$) hängt an zwei Seilen, die unter $\alpha_1=30°$ und $\alpha_2=60°$ gegen die Horizontale zu den Wänden führen. Knoten freischneiden:
$$\to:\ -S_1\cos30°+S_2\cos60°=0,\qquad\uparrow:\ S_1\sin30°+S_2\sin60°-G=0.$$
Aus der ersten: $S_2=S_1\frac{\cos30°}{\cos60°}=\sqrt3S_1$. Einsetzen: $S_1\left(\frac12+\sqrt3\cdot\frac{\sqrt3}2\right)=G\Rightarrow S_1=\frac G2$, $S_2=\frac{\sqrt3}2G\approx0{,}87G$.
Kontrolle mit dem Kräftedreieck: Die Seilrichtungen stehen senkrecht aufeinander (30° + 60° = 90°) ⇒ rechtwinkliges Dreieck, $S_1=G\sin30°$, $S_2=G\cos30°$ ✓.
:::

:::bsp Walze auf schiefer Ebene, durch Seil gehalten
Walze (Gewicht $G$) auf glatter schiefer Ebene (Neigung $\alpha$), parallel zur Ebene durch ein Seil gehalten. Koordinaten parallel ($\nearrow$) und senkrecht zur Ebene:
$$\parallel:\ S-G\sin\alpha=0\Rightarrow S=G\sin\alpha,\qquad\perp:\ N-G\cos\alpha=0\Rightarrow N=G\cos\alpha.$$
Bei horizontalem Seil statt parallel: $S=G\tan\alpha$, $N=\frac G{\cos\alpha}$ (selbst nachrechnen!).
:::

:::bsp Rolle
Über eine reibungsfreie Rolle läuft ein Seil mit Last $G$. Die Seilkraft ist auf beiden Seiten **gleich** $S=G$. Bilden die Seilstränge den Winkel $2\beta$ miteinander, so ist die Lagerkraft der Rolle $A=2G\cos\beta$ (Winkelhalbierende).
:::

:::achtung Häufige Fehler
- Seile können nur **ziehen** (Seilkraft immer vom freigeschnittenen Körper weg).
- Winkel falsch zugeordnet (sin/cos vertauscht) – Skizze mit eingezeichneten Winkeln, Kontrolle für Grenzfälle ($\alpha=0°$, $90°$).
- Zu viele Unbekannte für 2 Gleichungen ⇒ statisch unbestimmt (oder anderes Schnittsystem wählen).
:::

## Aufgaben

:::aufgabe 1
Zwei Kräfte $F_1=5\,$kN und $F_2=8\,$kN schließen den Winkel $60°$ ein. Berechne $R$ und den Winkel zwischen $R$ und $F_1$.
:::loesung
$R=\sqrt{25+64+2\cdot40\cdot0{,}5}=\sqrt{129}\approx11{,}36\,$kN. Mit $F_1$ entlang $x$: $R_y=8\sin60°=6{,}93$, $R_x=5+4=9$ ⇒ $\arctan\frac{6{,}93}9\approx37{,}6°$.
:::
:::

:::aufgabe 2
Ein Gewicht $G=1\,$kN hängt an einem Knoten, der durch ein horizontales Seil (an einer Wand) und einen Stab (unter $45°$ von unten an der Wand gelenkig) gehalten wird. Stab- und Seilkraft?
:::loesung
Stab von unten-Wand schräg nach oben zum Knoten. Knoten: Seilkraft $S$ zur Wand (← ), Stabkraft $D$ (Zug positiv angenommen, zeigt vom Knoten zum Stabfußpunkt, also nach unten-links bei 45°). $\uparrow$: $-D\sin45°-G=0\Rightarrow D=-\sqrt2G=-1{,}41\,$kN (**Druck**). $\to$: $-S-D\cos45°=0\Rightarrow S=-D\cos45°=G=1\,$kN (Zug).
:::
:::

:::aufgabe 3
Eine Kiste ($G=600\,$N) wird auf einer glatten Rampe ($30°$) durch eine horizontale Kraft $F$ gehalten. $F$ und Normalkraft?
:::loesung
Achsen parallel/senkrecht zur Rampe: $\parallel$: $F\cos30°-G\sin30°=0\Rightarrow F=G\tan30°\approx346\,$N. $\perp$: $N-G\cos30°-F\sin30°=0\Rightarrow N=\frac{G}{\cos30°}\approx693\,$N.
:::
:::

## Karteikarten

:::karte
Gleichgewichtsbedingungen der ebenen zentralen Kräftegruppe?
???
$\sum F_{ix}=0$, $\sum F_{iy}=0$ (geschlossenes Krafteck) – 2 Unbekannte bestimmbar.
:::

:::karte
Wann sind drei Kräfte im Gleichgewicht?
???
Wenn sich ihre Wirkungslinien in einem Punkt schneiden und das Kräftedreieck geschlossen ist.
:::

:::karte
Zerlegung der Gewichtskraft auf der schiefen Ebene (Winkel α)?
???
Hangabtrieb $G\sin\alpha$, Normalkomponente $G\cos\alpha$.
:::

:::karte
Seilkraft über eine reibungsfreie Rolle?
???
Auf beiden Seiten gleich groß.
:::
