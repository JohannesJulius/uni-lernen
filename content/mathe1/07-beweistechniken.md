---
title: Beweistechniken – direkt, indirekt, Widerspruch
chapter: 1 Grundlagen
minutes: 45
sources: Mathe 1/IngMath1_slides_1_basics_4_beweise (1).pdf
---

:::ziel
- Die drei Grundtypen von Beweisen kennen und **selbst anwenden**: direkter Beweis, indirekter Beweis (Kontraposition), Widerspruchsbeweis.
- Fallunterscheidungen sauber führen.
- Gegenbeispiele zum Widerlegen von Allaussagen nutzen.
:::

## Was ist ein Beweis?

Ein Beweis ist eine lückenlose Kette logischer Schlüsse von bekannten wahren Aussagen (Voraussetzungen, Definitionen, Axiome, bereits bewiesene Sätze) zur Behauptung. Typische Gestalt einer Behauptung: $A\Rightarrow B$ („Wenn Voraussetzung, dann Behauptung").

Für $A,B$ aus $\Z$ brauchen wir oft die Definitionen:
- $x$ **gerade** $\iff \exists n\in\Z: x=2n$
- $x$ **ungerade** $\iff\exists n\in\Z: x=2n+1$
- Für ganze Zahlen gilt: $\neg(x\text{ gerade})\equiv x\text{ ungerade}$.

## 1. Direkter Beweis

Man startet bei $A$ und folgert Schritt für Schritt $B$: $A\Rightarrow A_1\Rightarrow A_2\Rightarrow\dots\Rightarrow B$.

:::bsp $x\in\Z$ gerade $\Rightarrow x^2$ gerade
Sei $x$ gerade, also $x=2n$ mit $n\in\Z$. Dann $x^2=4n^2=2\cdot(2n^2)$, und $2n^2\in\Z$. Also ist $x^2$ gerade. ∎
:::

:::bsp $\forall x\in\R: x^2\ge0$ (mit Fallunterscheidung)
- Fall $x=0$: $x^2=0\ge0$.
- Fall $x>0$: Multiplikation von $x>0$ mit $x>0$ ergibt $x\cdot x>0\cdot x=0$.
- Fall $x<0$: Dann $-x>0$, also $x^2=(-x)(-x)>0$.
Alle Fälle abgedeckt (Trichotomie). ∎
:::

## 2. Indirekter Beweis (Kontraposition)

Statt $A\Rightarrow B$ zeigt man die logisch gleichwertige Aussage $\neg B\Rightarrow\neg A$.

| $A$ | $B$ | $A\Rightarrow B$ | $\neg B\Rightarrow\neg A$ |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 |

:::bsp $x^2$ ungerade $\Rightarrow x$ ungerade
Kontraposition: $x$ **nicht** ungerade (= gerade) $\Rightarrow x^2$ **nicht** ungerade (= gerade). Das haben wir oben direkt bewiesen. ∎
:::

:::merke Wann indirekt?
Wenn sich aus $\neg B$ leichter etwas folgern lässt als aus $A$ – z. B. wenn $\neg B$ eine konkrete Form liefert („$x=2n$"), $A$ aber nur eine Eigenschaft eines Quadrats ist.
:::

## 3. Widerspruchsbeweis

Man nimmt an, die Behauptung sei **falsch**, und folgert daraus einen **Widerspruch** (etwas offensichtlich Falsches, z. B. „gerade = ungerade" oder $0=1$). Da aus Wahrem nur Wahres folgt, muss die Annahme falsch sein – also gilt die Behauptung.

:::bsp $\sqrt2\notin\Q$ (Variante aus den Folien)
Annahme $\sqrt2=\frac pq$ gekürzt. Dann $2q^2=p^2$ ⇒ $p$ gerade, $p=2m$. Da gekürzt, ist $q$ ungerade, $q=2n+1$. Einsetzen: $\frac{(2m)^2}{(2n+1)^2}=2\Rightarrow4m^2=2(4n^2+4n+1)\Rightarrow\underbrace{2m^2}_{\text{gerade}}=\underbrace{4n^2+4n+1}_{\text{ungerade}}$. Widerspruch! ∎
:::

## 4. Gegenbeispiel

Eine **Allaussage** $\forall x: P(x)$ widerlegt man durch **ein einziges** Gegenbeispiel (denn die Verneinung ist $\exists x:\neg P(x)$).

:::bsp
„Für alle $n\in\N$ ist $n^2+n+41$ eine Primzahl." Für $n=1,\dots,39$ stimmt das tatsächlich, aber $n=40$: $1600+40+41=1681=41^2$. Widerlegt.
:::

:::achtung Beispiele beweisen keine Allaussage
Noch so viele geprüfte Fälle beweisen $\forall n$ nicht (siehe oben). Dafür braucht man einen allgemeinen Beweis – z. B. **vollständige Induktion** (nächste Lektion).
:::

## Überblick

| Technik | Man zeigt | typisches Signal |
|---|---|---|
| direkt | $A\Rightarrow\dots\Rightarrow B$ | Definition einsetzen und umformen |
| indirekt | $\neg B\Rightarrow\neg A$ | Verneinung von $B$ ist „handlicher" |
| Widerspruch | $A\land\neg B\Rightarrow$ Widerspruch | „… ist nicht …", Irrationalität, „es gibt unendlich viele …" |
| Gegenbeispiel | $\exists x:\neg P(x)$ | Allaussage widerlegen |
| Induktion | $A(n_0)$ und $A(n)\Rightarrow A(n+1)$ | Aussage für alle $n\in\N$ |

## Aufgaben

:::aufgabe 1
Beweise direkt: Die Summe zweier ungerader Zahlen ist gerade.
:::loesung
$x=2m+1$, $y=2n+1$ ⇒ $x+y=2m+2n+2=2(m+n+1)$, gerade. ∎
:::
:::

:::aufgabe 2
Beweise indirekt: Ist $x\cdot y$ ungerade (für $x,y\in\Z$), so sind $x$ und $y$ ungerade.
:::loesung
Kontraposition: Ist $x$ oder $y$ gerade, so ist $xy$ gerade. O. B. d. A. $x=2m$: $xy=2(my)$ gerade. ∎ (De Morgan: $\neg(x\text{ ung.}\land y\text{ ung.})=x\text{ gerade}\lor y\text{ gerade}$.)
:::
:::

:::aufgabe 3
Beweise durch Widerspruch: Es gibt keine größte natürliche Zahl.
:::loesung
Annahme: $N$ ist die größte natürliche Zahl. Dann ist $N+1\in\N$ und $N+1>N$ – Widerspruch zur Maximalität. ∎
:::
:::

:::aufgabe 4
Widerlege: „Für alle $x\in\R$ gilt $x^2>x$."
:::loesung
Gegenbeispiel $x=\frac12$: $\frac14>\frac12$ ist falsch. (Auch $x=0$ oder $x=1$.)
:::
:::

## Karteikarten

:::karte
Was zeigt man beim indirekten Beweis von $A\Rightarrow B$?
???
Die Kontraposition $\neg B\Rightarrow\neg A$.
:::

:::karte
Ablauf eines Widerspruchsbeweises?
???
Annehmen, die Behauptung sei falsch → logisch folgern → Widerspruch erhalten → Annahme falsch, Behauptung wahr.
:::

:::karte
Wie widerlegt man eine Allaussage?
???
Mit einem einzigen Gegenbeispiel.
:::
