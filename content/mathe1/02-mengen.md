---
title: Mengenlehre – Mengen, Venn-Diagramme, Quantoren
chapter: 1 Grundlagen
minutes: 70
sources: Mathe 1/IngMath1_slides_1_basics_2_mengen_1_def_venndiag_logik.pdf; Mathe 1/IngMath1_worksheet_1_basics_mengen_1 (1).pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#16
---

:::ziel
- Mengen in aufzählender und beschreibender Form notieren.
- Teilmenge, Schnitt, Vereinigung, Differenz, Komplement, symmetrische Differenz kennen und im Venn-Diagramm darstellen.
- Mengenoperationen in Aussagenlogik übersetzen.
- **All- und Existenzquantor** lesen, schreiben und korrekt **verneinen**.
- Eine Mengengleichheit beweisen (zwei Inklusionen zeigen).
:::

## Was ist eine Menge?

:::def Menge (Cantor, 1895)
Eine **Menge** ist die Zusammenfassung bestimmter, wohlunterschiedener Objekte unserer Anschauung oder unseres Denkens zu einem Ganzen. Die Objekte heißen **Elemente** der Menge.
:::

Zwei Schreibweisen:
- **aufzählend:** $A=\{a,b,c\}$, $\;\N=\{1,2,3,\dots\}$
- **beschreibend** (über eine Eigenschaft): $A=\{n\in\N \mid 1\le n\le 7\}$ – lies: „die Menge aller $n$ aus $\N$, für die gilt $1\le n\le 7$".

Reihenfolge und Wiederholung spielen keine Rolle: $\{1,2,3\}=\{3,1,2\}=\{1,1,2,3\}$.

## Grundbegriffe

| Schreibweise | Bedeutung |
|---|---|
| $a\in A$ | $a$ ist Element von $A$ |
| $a\notin A$ | $a$ ist kein Element von $A$ (= $\neg(a\in A)$) |
| $A\subset B$ (oft $A\subseteq B$) | $A$ ist **Teilmenge** von $B$: $\forall x\in A: x\in B$ |
| $A\subsetneq B$ | echte Teilmenge: $A\subset B$ und $A\ne B$ |
| $A=B$ | $A\subset B$ **und** $B\subset A$ |
| $\emptyset=\{\}$ | leere Menge (kein Element); $\emptyset\subset A$ für jede Menge $A$ |
| $\lvert A\rvert$ | **Mächtigkeit**: Anzahl der Elemente (falls endlich), sonst $\infty$ |

## Mengenoperationen

| Operation | Definition | in Worten |
|---|---|---|
| Schnitt | $A\cap B=\{x\mid x\in A\land x\in B\}$ | in beiden |
| Vereinigung | $A\cup B=\{x\mid x\in A\lor x\in B\}$ | in mindestens einer |
| Differenz | $A\setminus B=\{x\mid x\in A\land x\notin B\}$ | in $A$, aber nicht in $B$ |
| Komplement (bzgl. $X$) | $A^C=X\setminus A$ | alles in $X$, was nicht in $A$ ist |
| symm. Differenz | $A\,\triangle\,B=(A\cup B)\setminus(A\cap B)$ | in genau einer |
| kartes. Produkt | $A\times B=\{(a,b)\mid a\in A\land b\in B\}$ | alle geordneten Paare |

- $A$ und $B$ heißen **disjunkt**, wenn $A\cap B=\emptyset$. Dann schreibt man die Vereinigung manchmal als $A\,\dot\cup\, B$ („disjunkte Vereinigung", z. B. um Doppelzählungen zu vermeiden).
- Für das Komplement gilt: $A\cap A^C=\emptyset$ und $A\cup A^C=X$.

<figure><svg class="fig" viewBox="0 0 640 150" width="640" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="13">
<defs>
<clipPath id="vB1"><circle cx="100" cy="70" r="42"/></clipPath>
<mask id="vM3"><rect x="300" y="0" width="160" height="150" fill="white"/><circle cx="420" cy="70" r="42" fill="black"/></mask>
<mask id="vM4"><rect x="480" y="0" width="160" height="150" fill="white"/><circle cx="580" cy="70" r="42" fill="black" clip-path="url(#vA4)"/></mask>
<clipPath id="vA4"><circle cx="540" cy="70" r="42"/></clipPath>
</defs>
<circle cx="60" cy="70" r="42" fill="#3b6fd8" fill-opacity=".5" clip-path="url(#vB1)"/>
<circle cx="220" cy="70" r="42" fill="#3b6fd8" fill-opacity=".5"/><circle cx="260" cy="70" r="42" fill="#3b6fd8" fill-opacity=".5"/>
<circle cx="380" cy="70" r="42" fill="#3b6fd8" fill-opacity=".5" mask="url(#vM3)"/>
<g mask="url(#vM4)"><circle cx="540" cy="70" r="42" fill="#3b6fd8" fill-opacity=".5"/><circle cx="580" cy="70" r="42" fill="#3b6fd8" fill-opacity=".5"/></g>
<g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="60" cy="70" r="42"/><circle cx="100" cy="70" r="42"/><circle cx="220" cy="70" r="42"/><circle cx="260" cy="70" r="42"/><circle cx="380" cy="70" r="42"/><circle cx="420" cy="70" r="42"/><circle cx="540" cy="70" r="42"/><circle cx="580" cy="70" r="42"/></g>
<g fill="currentColor" text-anchor="middle"><text x="80" y="135">A ∩ B</text><text x="240" y="135">A ∪ B</text><text x="400" y="135">A \ B</text><text x="560" y="135">A △ B</text><text x="40" y="22">A</text><text x="120" y="22">B</text></g>
</svg><figcaption>Venn-Diagramme: blau = Ergebnismenge</figcaption></figure>

## Mengen und Aussagenlogik

Die Behauptung „$x$ ist Element von $M$" ist eine **Aussage** (wahr oder falsch). Darum lassen sich Mengenoperationen genau wie Junktoren behandeln:

| Menge | Aussage |
|---|---|
| $x\in A\cap B$ | $(x\in A)\land(x\in B)$ |
| $x\in A\cup B$ | $(x\in A)\lor(x\in B)$ |
| $x\in A^C$ | $\neg(x\in A)$ |
| $A\subset B$ | $\forall x: (x\in A\Rightarrow x\in B)$ |

Deshalb gelten für Mengen dieselben Rechenregeln, z. B. **De Morgan für Mengen**:
$$(A\cap B)^C=A^C\cup B^C,\qquad (A\cup B)^C=A^C\cap B^C.$$

:::bsp Wahrheitstafel für den Schnitt
| $x\in A$ | $x\in B$ | $(x\in A)\land(x\in B)$ | $x\in A\cap B$ |
|---|---|---|---|
| w | w | w | w |
| w | f | f | f |
| f | w | f | f |
| f | f | f | f |
:::

## Quantoren

Oft will man sagen, dass **alle** Elemente einer Menge eine Eigenschaft haben, oder dass **mindestens eines** sie hat.

| Symbol | Bedeutung |
|---|---|
| $\forall$ | „für alle", „für jedes" (**Allquantor**) |
| $\exists$ | „es gibt (mindestens) ein" (**Existenzquantor**) |
| $\exists!$ | „es gibt genau ein" |
| $\nexists$ | „es gibt kein" |

:::bsp
- $\forall x\in\R: x^2\ge 0$ – Für alle reellen Zahlen ist das Quadrat nichtnegativ. (wahr)
- $\exists x\in\R: x^2=4$ – Es gibt eine reelle Zahl mit Quadrat 4 (z. B. $x=2$). (wahr)
- $\exists!\,x\in\R: x+1=5$ – genau eine Lösung, $x=4$. (wahr)
- $\nexists\, x\in\R: x^2=-1$ – keine reelle Zahl hat negatives Quadrat. (wahr)
- „Alle Schwäne sind weiß": $\forall x\in\text{Schwäne}: x \text{ ist weiß}$.
:::

### Quantoren verneinen

:::satz Verneinung von All- und Existenzaussagen
$$\neg\big(\forall x: P(x)\big)\;\equiv\;\exists x: \neg P(x)$$
$$\neg\big(\exists x: P(x)\big)\;\equiv\;\forall x: \neg P(x)$$
:::

:::merke Rezept zum Verneinen
1. Jeden $\forall$ durch $\exists$ ersetzen und umgekehrt.
2. Die Aussage hinter den Quantoren verneinen (mit De Morgan, $\neg(a<b)\equiv a\ge b$ usw.).
:::

:::bsp
- „Alle Schwäne sind weiß." → Verneinung: „Es gibt mindestens einen Schwan, der **nicht** weiß ist." ($\exists x: \neg(x\text{ weiß})$) – **nicht** „Alle Schwäne sind nicht weiß"!
- „Es gibt schwarze Schwäne." → „Kein Schwan ist schwarz": $\forall x\in\text{Schwäne}: \neg(x\text{ schwarz})$.
- $A\subset X$ heißt $\forall x\in A: x\in X$. Verneinung $A\not\subset X$: $\exists x\in A: x\notin X$.
- $\forall \varepsilon>0\;\exists N\;\forall n\ge N: |a_n-a|<\varepsilon$ wird verneint zu $\exists\varepsilon>0\;\forall N\;\exists n\ge N: |a_n-a|\ge\varepsilon$.
:::

:::achtung Reihenfolge der Quantoren
$\forall x\,\exists y: y>x$ („zu jeder Zahl gibt es eine größere") ist wahr. $\exists y\,\forall x: y>x$ („es gibt eine Zahl, die größer als alle ist") ist falsch. **Vertauschen von ∀ und ∃ ändert die Bedeutung!**
:::

## Walkthrough: Mengengleichheit beweisen

Um $M_1=M_2$ zu zeigen, zeigt man **zwei Inklusionen**: $M_1\subset M_2$ und $M_2\subset M_1$. Dazu nimmt man ein beliebiges Element der einen Menge und zeigt, dass es in der anderen liegt.

:::bsp Distributivgesetz $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$
**„⊂":** Sei $x\in A\cap(B\cup C)$. Dann $x\in A$ und $x\in B\cup C$, also $x\in B$ oder $x\in C$.
- Fall $x\in B$: Mit $x\in A$ folgt $x\in A\cap B\subset(A\cap B)\cup(A\cap C)$.
- Fall $x\in C$: Mit $x\in A$ folgt $x\in A\cap C\subset(A\cap B)\cup(A\cap C)$.

**„⊃":** Sei $y\in(A\cap B)\cup(A\cap C)$.
- Fall $y\in A\cap B$: $y\in A$ und $y\in B\subset B\cup C$, also $y\in A\cap(B\cup C)$.
- Fall $y\in A\cap C$: analog.

Beide Inklusionen gelten ⇒ Gleichheit. ∎
:::

## Aufgaben

:::aufgabe 1 – Mengenoperationen
$A=\{1,2,3,4\}$, $B=\{3,4,5\}$, Grundmenge $X=\{1,\dots,6\}$. Bestimme $A\cap B$, $A\cup B$, $A\setminus B$, $B\setminus A$, $A\,\triangle\, B$, $A^C$, $|A\times B|$.
:::loesung
$A\cap B=\{3,4\}$, $A\cup B=\{1,2,3,4,5\}$, $A\setminus B=\{1,2\}$, $B\setminus A=\{5\}$, $A\triangle B=\{1,2,5\}=(A\setminus B)\cup(B\setminus A)$, $A^C=\{5,6\}$, $|A\times B|=4\cdot 3=12$.
:::
:::

:::aufgabe 2 – Symmetrische Differenz
Zeige mit einer Wahrheitstafel: $A\triangle B=(A\cup B)\setminus(A\cap B)=(A\setminus B)\cup(B\setminus A)$.
:::loesung
Schreibe $a=(x\in A)$, $b=(x\in B)$:

| $a$ | $b$ | $a\lor b$ | $a\land b$ | $(a\lor b)\land\neg(a\land b)$ | $a\land\neg b$ | $b\land\neg a$ | $(a\land\neg b)\lor(b\land\neg a)$ |
|---|---|---|---|---|---|---|---|
| w | w | w | w | f | f | f | f |
| w | f | w | f | w | w | f | w |
| f | w | w | f | w | f | w | w |
| f | f | f | f | f | f | f | f |

Spalten 5 und 8 stimmen überein, und sie sind genau dann wahr, wenn $x$ in genau einer Menge liegt. ∎
:::
:::

:::aufgabe 3 – Verneinen
Verneine formal und in Worten: (a) $\forall x\in\R: x^2\ge 0$, (b) $\exists n\in\N: n>100$, (c) „Jeder Student hat ein Fahrrad oder ein Auto."
:::loesung
(a) $\exists x\in\R: x^2<0$ – „Es gibt eine reelle Zahl mit negativem Quadrat." (falsch)
(b) $\forall n\in\N: n\le 100$. (falsch)
(c) „Es gibt einen Studenten, der weder ein Fahrrad noch ein Auto hat." (De Morgan: $\neg(F\lor A)=\neg F\land\neg A$.)
:::
:::

:::aufgabe 4 – Autos
$F_{VW}$ = Menge aller VW-Fahrzeuge, $F_{Toyota}$ = Menge aller Toyotas. Fahrzeuge: $x_1$ blauer Corolla, $x_2$ weißer Prius, $x_3$ gelber Golf, $x_4$ roter Up, $x_5$ roter Ferrari. Ordne zu und bestimme $F_{VW}\cap F_{Toyota}$.
:::loesung
$x_1,x_2\in F_{Toyota}$; $x_3,x_4\in F_{VW}$; $x_5$ in keiner der Mengen. $F_{VW}\cap F_{Toyota}=\emptyset$ (disjunkt). Bei **Motoren** in VW- und Seat-Fahrzeugen ist das anders: Der Konzern verbaut dieselben Motoren, die Mengen $M_{VW}$ und $M_{Seat}$ (als Motortypen) haben also einen nichtleeren Schnitt.
:::
:::

## Karteikarten

:::karte
Wie beweist man $M_1=M_2$ für zwei Mengen?
???
Zwei Inklusionen zeigen: $M_1\subset M_2$ (beliebiges $x\in M_1$ liegt in $M_2$) und $M_2\subset M_1$.
:::

:::karte
Verneinung von $\forall x: P(x)$ und von $\exists x: P(x)$?
???
$\exists x:\neg P(x)$ bzw. $\forall x:\neg P(x)$. Quantor tauschen, Aussage verneinen.
:::

:::karte
Definition $A\setminus B$ und $A\triangle B$?
???
$A\setminus B=\{x\mid x\in A\land x\notin B\}$; $\;A\triangle B=(A\cup B)\setminus(A\cap B)$ = Elemente in genau einer der Mengen.
:::

:::karte
De Morgan für Mengen?
???
$(A\cap B)^C=A^C\cup B^C$, $\;(A\cup B)^C=A^C\cap B^C$
:::

:::karte
Wann heißen zwei Mengen disjunkt?
???
Wenn $A\cap B=\emptyset$.
:::
