---
title: Aussagenlogik – Junktoren & Wahrheitstafeln
chapter: 1 Grundlagen
minutes: 60
sources: Mathe 1/IngMath1_slides_1_basics_1_logik.pdf; Mathe 1/IngMath1_worksheet_1_basics_logic_1_tables.pdf; Mathe 1/IngMath1_worksheet_1_basics_logic_2_laws.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#15
---

:::ziel
- Wissen, was eine **Aussage** ist und was ein **Wahrheitswert** ist.
- Die Junktoren ¬, ∧, ∨, ⇒, ⇔ (und XOR) sicher lesen und anwenden.
- **Wahrheitstafeln** aufstellen und damit Rechenregeln (Distributivgesetz, De Morgan) beweisen.
- Den Zusammenhang zu Schaltungen (Boolesche Algebra) verstehen.
:::

## Warum Logik?

In Mathematik und Technik müssen Zusammenhänge **exakt** formuliert werden – ohne Missverständnisse. Größere Argumentationen bestehen immer aus kleinen logischen Bausteinen. Die Aussagenlogik ist das Werkzeug, um diese Bausteine korrekt zu verknüpfen. Gleichzeitig ist sie die Grundlage der Digitaltechnik: Jeder Computer besteht aus UND-, ODER- und NICHT-Gattern.

## Aussagen

:::def Aussage
Eine **Aussage** ist ein Satz (eine Feststellung), der **entweder wahr (w, 1, true)** oder **falsch (f, 0, false)** ist – nie beides und nie keines von beiden. Man nennt das den **Wahrheitswert** der Aussage.
:::

:::bsp Aussagen und Nicht-Aussagen
- „1 ist kleiner als 2." → Aussage, **wahr**.
- „1 ist größer als 2." → Aussage, **falsch**.
- „Auto A fährt schneller als Auto B." → Aussage (wahr oder falsch, je nach Autos).
- „Es gibt warmes Wasser." / „Es gibt kein warmes Wasser." → Aussagen (die zweite ist die Verneinung der ersten).
- „Wie spät ist es?" → **keine** Aussage (Frage).
- „$x > 3$" → **keine** Aussage, solange $x$ nicht festgelegt ist (man nennt so etwas *Aussageform*).
:::

:::idee Paradoxien
Der Kreter Epimenides sagt: „Alle Kreter sind Lügner." Wäre der Satz wahr, so lügt Epimenides (er ist ja Kreter) – also wäre der Satz falsch. Solche selbstbezüglichen Sätze zeigen, dass man aufpassen muss, was man als Aussage zulässt. In der Mathematik vermeiden wir solche Konstruktionen.
:::

## Junktoren – Aussagen verknüpfen

Aus vorhandenen Aussagen $A, B$ bildet man durch **Junktoren** (logische Operatoren) neue Aussagen:

| Junktor | Zeichen | gesprochen | wahr genau dann, wenn … |
|---|---|---|---|
| Negation | $\neg A$ | „nicht A" | $A$ falsch ist |
| Konjunktion | $A \land B$ | „A und B" | **beide** wahr sind |
| Disjunktion | $A \lor B$ | „A oder B" | **mindestens eine** wahr ist |
| Exklusives Oder | $A \text{ xor } B$ | „entweder A oder B" | **genau eine** wahr ist |
| Implikation | $A \Rightarrow B$ | „wenn A, dann B" | nicht ($A$ wahr und $B$ falsch) |
| Äquivalenz | $A \Leftrightarrow B$ | „A genau dann, wenn B" | $A$ und $B$ denselben Wahrheitswert haben |

:::achtung „Oder" ist in der Mathematik immer einschließend
$A \lor B$ ist auch dann wahr, wenn **beide** wahr sind. Das umgangssprachliche „entweder … oder" heißt XOR.
:::

## Wahrheitstafeln

Eine Wahrheitstafel listet **alle** Kombinationen der Wahrheitswerte auf (bei $n$ Aussagen sind das $2^n$ Zeilen) und gibt für jede Kombination den Wert der zusammengesetzten Aussage an.

| $A$ | $B$ | $\neg A$ | $A\land B$ | $A\lor B$ | $A$ xor $B$ | $A\Rightarrow B$ | $A\Leftrightarrow B$ |
|---|---|---|---|---|---|---|---|
| w | w | f | w | w | f | w | w |
| w | f | f | f | w | w | **f** | f |
| f | w | w | f | w | w | w | f |
| f | f | w | f | f | f | w | w |

### Die Implikation verstehen

:::merke
Eine Implikation $A \Rightarrow B$ ist **nur dann falsch, wenn $A$ wahr und $B$ falsch** ist. Ist die Voraussetzung $A$ falsch, ist die Implikation immer wahr („ex falso quodlibet" – aus Falschem folgt Beliebiges).
:::

:::bsp Versprechen
„Wenn es regnet ($A$), nehme ich einen Schirm mit ($B$)."
- Regen und Schirm: Versprechen gehalten (w).
- Regen, kein Schirm: Versprechen gebrochen (**f**).
- Kein Regen, Schirm trotzdem dabei: kein Bruch (w).
- Kein Regen, kein Schirm: kein Bruch (w).
:::

Sprechweisen für $A \Rightarrow B$: „aus A folgt B", „A ist **hinreichend** für B", „B ist **notwendig** für A".

### Die Äquivalenz

„$A$ gilt genau dann, wenn $B$ gilt" bedeutet: Aus $A$ folgt $B$ **und** aus $B$ folgt $A$:

$$A \Leftrightarrow B \quad\text{ist gleichwertig zu}\quad (A\Rightarrow B)\land(B\Rightarrow A).$$

| $A$ | $B$ | $A\Rightarrow B$ | $B\Rightarrow A$ | $(A\Rightarrow B)\land(B\Rightarrow A)$ | $A\Leftrightarrow B$ |
|---|---|---|---|---|---|
| w | w | w | w | w | w |
| w | f | f | w | f | f |
| f | w | w | f | f | f |
| f | f | w | w | w | w |

Die beiden letzten Spalten stimmen überein – damit ist die Gleichwertigkeit **bewiesen**. Genau so beweist man mit Wahrheitstafeln: Man vergleicht die Spalten zweier Ausdrücke.

### Implikation durch NICHT und ODER

| $A$ | $B$ | $\neg A$ | $\neg A \lor B$ | $A\Rightarrow B$ |
|---|---|---|---|---|
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 |

$$\boxed{A \Rightarrow B \;\equiv\; \neg A \lor B}$$

Damit kann man eine Implikation als Schaltung aus einem NICHT- und einem ODER-Gatter bauen.

## Boolesche Algebra und Schaltungen

Schreibt man **1** für „wahr/Strom fließt/Schalter geschlossen" und **0** für „falsch/kein Strom", wird Logik zu Schaltungstechnik:

- **Reihenschaltung** zweier Schalter $S_1, S_2$: Die Lampe brennt nur, wenn beide geschlossen sind → $S_1 \land S_2$ (UND).
- **Parallelschaltung**: Die Lampe brennt, wenn mindestens einer geschlossen ist → $S_1 \lor S_2$ (ODER).

<figure><svg class="fig" viewBox="0 0 520 130" width="520" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="13" fill="none" stroke="currentColor" stroke-width="1.6"><text x="10" y="18" fill="currentColor" stroke="none">Reihe: S1 ∧ S2</text><path d="M10 60 H50 M50 60 L80 45 M85 60 H130 M130 60 L160 45 M165 60 H210"/><circle cx="225" cy="60" r="14"/><path d="M215 50 L235 70 M235 50 L215 70"/><text x="55" y="85" fill="currentColor" stroke="none">S1</text><text x="135" y="85" fill="currentColor" stroke="none">S2</text><text x="290" y="18" fill="currentColor" stroke="none">Parallel: S1 ∨ S2</text><path d="M290 70 H320 V45 H345 L375 30 M380 45 H405 V70 M320 70 V95 H345 L375 80 M380 95 H405 V70 H440"/><circle cx="455" cy="70" r="14"/><path d="M445 60 L465 80 M465 60 L445 80"/><text x="350" y="62" fill="currentColor" stroke="none">S1</text><text x="350" y="115" fill="currentColor" stroke="none">S2</text></svg><figcaption>Reihenschaltung = UND, Parallelschaltung = ODER</figcaption></figure>

## Rechenregeln der Aussagenlogik

Zwei Ausdrücke heißen **logisch äquivalent** ($\equiv$), wenn sie für alle Belegungen denselben Wahrheitswert haben.

:::satz Wichtige Gesetze
- Kommutativ: $A\land B \equiv B\land A$, $\;A\lor B\equiv B\lor A$
- Assoziativ: $(A\land B)\land C \equiv A\land(B\land C)$, analog für $\lor$
- **Distributiv:** $A\land(B\lor C) \equiv (A\land B)\lor(A\land C)$ und $A\lor(B\land C)\equiv(A\lor B)\land(A\lor C)$
- **De Morgan:** $\neg(A\land B)\equiv \neg A\lor\neg B$ und $\neg(A\lor B)\equiv\neg A\land\neg B$
- Doppelte Verneinung: $\neg\neg A \equiv A$
- **Kontraposition:** $(A\Rightarrow B)\equiv(\neg B\Rightarrow\neg A)$
:::

:::bsp Beweis De Morgan mit Wahrheitstafel
| $A$ | $B$ | $A\land B$ | $\neg(A\land B)$ | $\neg A$ | $\neg B$ | $\neg A\lor\neg B$ |
|---|---|---|---|---|---|---|
| w | w | w | f | f | f | f |
| w | f | f | w | f | w | w |
| f | w | f | w | w | f | w |
| f | f | f | w | w | w | w |

Spalte 4 = Spalte 7 ⇒ die Aussagen sind äquivalent. ∎
:::

:::merke De Morgan in Worten
„Nicht (A und B)" = „nicht A **oder** nicht B". Beim Verneinen dreht sich ∧ zu ∨ und umgekehrt.
:::

## Aufgaben

:::aufgabe 1 – Wahrheitstafel XOR
Stelle die Wahrheitstafel für $A$ xor $B$ auf und zeige, dass $A \text{ xor } B \equiv (A\lor B)\land\neg(A\land B)$.
:::loesung
| $A$ | $B$ | $A\lor B$ | $A\land B$ | $\neg(A\land B)$ | $(A\lor B)\land\neg(A\land B)$ | xor |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |

Die beiden letzten Spalten stimmen überein. ∎
:::
:::

:::aufgabe 2 – Distributivgesetz
Zeige mit einer Wahrheitstafel: $A\lor(B\land C)\equiv(A\lor B)\land(A\lor C)$.
:::loesung
Bei drei Aussagen gibt es $2^3=8$ Zeilen:

| $A$ | $B$ | $C$ | $B\land C$ | $A\lor(B\land C)$ | $A\lor B$ | $A\lor C$ | $(A\lor B)\land(A\lor C)$ |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Spalte 5 = Spalte 8. ∎
:::
:::

:::aufgabe 3 – Verneinen
Verneine: „Die Straße ist nass und die Sonne scheint."
:::loesung
Mit De Morgan: „Die Straße ist **nicht** nass **oder** die Sonne scheint **nicht**."
:::
:::

:::aufgabe 4 – Kontraposition
Beweise per Wahrheitstafel $(A\Rightarrow B)\equiv(\neg B\Rightarrow\neg A)$ und formuliere die Kontraposition von „Wenn ein Bauteil überlastet ist, dann versagt es."
:::loesung
| $A$ | $B$ | $A\Rightarrow B$ | $\neg B$ | $\neg A$ | $\neg B\Rightarrow\neg A$ |
|---|---|---|---|---|---|
| w | w | w | f | f | w |
| w | f | f | w | f | f |
| f | w | w | f | w | w |
| f | f | w | w | w | w |

Kontraposition: „Wenn ein Bauteil nicht versagt, dann ist es nicht überlastet."
:::
:::

## Karteikarten

:::karte
Wann ist die Implikation $A\Rightarrow B$ falsch?
???
**Nur** wenn $A$ wahr und $B$ falsch ist. In allen anderen Fällen ist sie wahr.
:::

:::karte
Wie kann man $A\Rightarrow B$ nur mit ¬ und ∨ schreiben?
???
$A\Rightarrow B \equiv \neg A\lor B$
:::

:::karte
Gesetze von De Morgan?
???
$\neg(A\land B)\equiv\neg A\lor\neg B$, $\quad\neg(A\lor B)\equiv\neg A\land\neg B$
:::

:::karte
Wie lässt sich die Äquivalenz $A\Leftrightarrow B$ durch Implikationen ausdrücken?
???
$(A\Rightarrow B)\land(B\Rightarrow A)$
:::

:::karte
Welche Schaltung entspricht UND, welche ODER?
???
Reihenschaltung = UND ($S_1\land S_2$), Parallelschaltung = ODER ($S_1\lor S_2$).
:::

:::karte
Was ist die Kontraposition von $A\Rightarrow B$?
???
$\neg B\Rightarrow\neg A$ (logisch gleichwertig zu $A\Rightarrow B$).
:::
