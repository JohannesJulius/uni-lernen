---
title: §6 Fachwerke II – Rittersches Schnittverfahren und Cremona-Plan
chapter: §6 Fachwerke
minutes: 100
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#165; Technische Mechanik 1/978-3-662-59157-4.pdf#169
---

:::ziel
- Einzelne Stabkräfte schnell mit dem **Ritterschen Schnittverfahren** bestimmen.
- Den **Cremona-Plan** als grafisches Verfahren verstehen und zeichnen können.
- Wissen, wann welches Verfahren sinnvoll ist.
:::

## Rittersches Schnittverfahren

Will man nur **einzelne** Stabkräfte (z. B. im Feld mit der größten Belastung), ist das Knotenpunktverfahren umständlich. Ritter schneidet das Fachwerk mit einem Schnitt in **zwei Teile**, wobei höchstens **drei** Stäbe geschnitten werden, die **nicht alle durch einen Punkt** gehen (und nicht alle parallel sind).

:::rezept Rittersches Schnittverfahren
1. Lagerreaktionen am Gesamtsystem berechnen.
2. **Ritterschnitt**: durch genau 3 Stäbe (darunter der gesuchte).
3. Einen Teil betrachten (den mit weniger Kräften), geschnittene Stabkräfte als **Zug** eintragen.
4. Für die gesuchte Stabkraft $S_i$: **Momentengleichung um den Schnittpunkt der beiden anderen** geschnittenen Stäbe (**Ritterpunkt**) – deren Kräfte haben dort kein Moment ⇒ eine Gleichung, eine Unbekannte.
5. Sind die beiden anderen Stäbe **parallel** (Ritterpunkt im Unendlichen): Kraftgleichung **senkrecht** zu ihnen.
:::

:::bsp Parallelgurtträger
Ein Fachwerkträger mit Obergurt (Höhe $h$) und Untergurt, Feldweite $a$, Lagerreaktion links $A$, in den Untergurtknoten Lasten. Schnitt durch Obergurtstab $O$, Diagonale $D$ und Untergurtstab $U$ im Feld $k$:
- **Obergurt:** Moment um den unteren Knoten, in dem $D$ und $U$ zusammentreffen (Abstand $x$ von $A$): $O\cdot h+M(x)=0\Rightarrow O=-\frac{M(x)}h$ – **Druck**, proportional zum Biegemoment!
- **Untergurt:** Moment um den oberen Knoten von $O$ und $D$: $U=+\frac{M(x')}h$ – **Zug**.
- **Diagonale:** $O$ und $U$ parallel ⇒ vertikales Gleichgewicht: $D\sin\alpha=\pm Q$ (Querkraft im Feld) ⇒ $D=\pm\frac{Q}{\sin\alpha}$.
Der Fachwerkträger wirkt wie ein Balken: Gurte nehmen das Biegemoment auf, Diagonalen die Querkraft. (→ Schnittgrößen, Kap. 7; I-Träger in TM 2 analog.)
:::

:::bsp Zahlenbeispiel
Parallelgurtträger mit Untergurtknoten bei $x=0,2,4,6,8\,$m ($y=0$) und Obergurtknoten darüber ($y=h=2\,$m), Pfosten an jedem Knoten, im 2. Feld eine Diagonale von $(2,0)$ nach $(4,2)$. Lager an den Enden, Last $F=10\,$kN am Untergurtknoten $(4,0)$ ⇒ $A=B=5\,$kN.
Ritterschnitt durch das 2. Feld: Obergurt $O$ (zwischen $(2,2)$ und $(4,2)$), Diagonale $D$, Untergurt $U$. Linker Teil, alle Stabkräfte als Zug (zeigen aus dem linken Teil heraus nach rechts), Momente ↺ positiv, $M=xF_y-yF_x$ relativ zum Bezugspunkt.
- **$O$:** Ritterpunkt = Schnitt von $D$ und $U$ = $(2,0)$. $A$ (bei relativ $(-2,0)$): $-2\cdot5=-10$; $O$ (bei relativ $(0,2)$): $-2O$. $\Rightarrow-10-2O=0\Rightarrow O=-5\,$kN (**Druck**).
- **$U$:** Ritterpunkt = Schnitt von $O$ und $D$ = $(4,2)$. $A$ (relativ $(-4,-2)$): $-4\cdot5=-20$; $U$ (z. B. bei relativ $(-2,-2)$): $-(-2)U=2U$. $\Rightarrow U=10\,$kN (**Zug**).
- **$D$:** $O\parallel U$ ⇒ vertikales Gleichgewicht: $A+D\sin45°=0\Rightarrow D=-7{,}07\,$kN (**Druck**).
Kontrolle mit Balkenanalogie: $M(2)=A\cdot2=10\,$kNm ⇒ $O=-\frac{10}2=-5$ ✓; $M(4)=20\,$kNm ⇒ $U=\frac{20}2=10$ ✓; Querkraft im Feld $Q=5\,$kN ⇒ $|D|=\frac5{\sin45°}$ ✓.
:::

## Cremona-Plan

Der **Cremona-Plan** ist das grafische Pendant zum Knotenpunktverfahren: Für jeden Knoten wird das **geschlossene Krafteck** gezeichnet. Trick: Die Kraftecke aller Knoten werden so in **eine** Figur gezeichnet, dass **jede Stabkraft nur einmal** vorkommt.

:::rezept Cremona-Plan zeichnen
1. Lagerreaktionen bestimmen, Nullstäbe streichen.
2. **Umlaufsinn** festlegen (z. B. im Uhrzeigersinn um das Fachwerk und um jeden Knoten).
3. **Krafteck der äußeren Kräfte** (Lasten und Lagerreaktionen in der Reihenfolge des Umlaufs) maßstäblich zeichnen – es muss sich schließen.
4. Knoten für Knoten (immer einer mit nur 2 Unbekannten): bekannte Kräfte im Umlaufsinn, dann Parallelen zu den zwei unbekannten Stäben ziehen, bis sich das Krafteck schließt.
5. **Zug oder Druck**: Pfeilrichtung der Stabkraft im Krafteck auf den Knoten übertragen – zeigt sie vom Knoten weg: Zug; zum Knoten hin: Druck.
6. Beträge mit dem Kräftemaßstab abmessen.
:::

Vorteile: schnell, anschauliche Kontrolle (der Plan muss sich schließen). Nachteil: Zeichengenauigkeit, heute durch Rechner ersetzt – aber in Klausuren mitunter gefragt.

## Welches Verfahren wann?

| Ziel | Verfahren |
|---|---|
| alle Stabkräfte | Knotenpunktverfahren (oder Cremona) |
| einzelne Stabkraft mitten im Fachwerk | Ritterschnitt |
| schnelle Kontrolle | Ritterschnitt an einer Stelle des Knotenverfahrens |
| große Fachwerke | Matrixverfahren am Rechner (Numerik!) |

## Aufgaben

:::aufgabe 1
Warum darf ein Ritterschnitt nicht durch drei Stäbe gehen, die sich in einem Punkt schneiden?
:::loesung
Dann haben alle drei Stabkräfte um diesen Punkt kein Moment; es bleiben nur 2 Kraftgleichungen für 3 Unbekannte – die Momentengleichung um den Schnittpunkt liefert keine Information über die Stabkräfte.
:::
:::

:::aufgabe 2
Zeige mit einem Ritterschnitt: In einem Parallelgurtträger mit Gleichlast ist die Untergurtkraft in der Feldmitte $U=\frac{M_{max}}h=\frac{ql^2}{8h}$.
:::loesung
Schnitt in Trägermitte, linker Teil: Moment um den Obergurtknoten in der Mitte: Lagerkraft $\frac{ql}2\cdot\frac l2$ minus Last $\frac{ql}2\cdot\frac l4$ ergibt $M=\frac{ql^2}8$; dieses wird vom Kräftepaar $U\cdot h$ aufgenommen ⇒ $U=\frac{ql^2}{8h}$ (Zug).
:::
:::

## Karteikarten

:::karte
Ritterschnitt – Bedingungen?
???
Höchstens 3 Stäbe schneiden, die nicht durch einen Punkt gehen; Momentengleichung um den Schnittpunkt zweier Stäbe (Ritterpunkt) liefert die dritte Stabkraft.
:::

:::karte
Was tun, wenn die beiden anderen Stäbe parallel sind?
???
Kraftgleichung senkrecht zu ihnen aufstellen (Ritterpunkt im Unendlichen).
:::

:::karte
Gurtkräfte im Parallelgurtträger?
???
$|O|=|U|\approx\frac{M}{h}$ (Obergurt Druck, Untergurt Zug bei Durchbiegung nach unten), Diagonale $\frac{Q}{\sin\alpha}$.
:::

:::karte
Wie liest man im Cremona-Plan Zug/Druck ab?
???
Pfeilrichtung der Stabkraft aus dem Krafteck auf den Knoten übertragen: vom Knoten weg = Zug, zum Knoten hin = Druck.
:::
