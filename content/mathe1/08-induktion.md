---
title: Vollständige Induktion
chapter: 1 Grundlagen
minutes: 75
sources: Mathe 1/IngMath1_slides_1_basics_5_induktion.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#29
---

:::ziel
- Das Prinzip der vollständigen Induktion verstehen (Dominosteine, Peano-Axiom 5).
- Induktionsbeweise **formal sauber** aufschreiben: Anfang, Annahme, Schritt.
- Summenformeln (Gauß, geometrische Summe), Ungleichungen (Bernoulli) und Teilbarkeitsaussagen per Induktion beweisen.
:::

## Motivation: Der kleine Gauß

Summe $1+2+\dots+100$? Schreibe die Zahlen einmal aufsteigend und einmal absteigend untereinander:

| aufsteigend | 1 | 2 | 3 | … | 98 | 99 | 100 |
|---|---|---|---|---|---|---|---|
| absteigend | 100 | 99 | 98 | … | 3 | 2 | 1 |
| Summe | 101 | 101 | 101 | … | 101 | 101 | 101 |

100 Spalten à 101, das ist die doppelte Summe: $\sum_{k=1}^{100}k=\frac{100\cdot101}{2}=5050$. Allgemein vermuten wir
$$\sum_{k=1}^{n}k=\frac{n(n+1)}{2}.$$
Wie beweist man das für **alle unendlich vielen** $n$? → Induktion.

## Das Prinzip

:::idee Dominosteine
Stehen Dominosteine so, dass jeder fallende Stein den nächsten umwirft (**Induktionsschritt**), und wird der erste Stein umgestoßen (**Induktionsanfang**), dann fallen **alle**. Stößt man erst den fünften um, fallen alle ab dem fünften – über die ersten vier weiß man nichts.
:::

:::rezept Vollständige Induktion
Behauptung: $A(n)$ gilt für alle $n\ge n_0$.
1. **Induktionsanfang (IA):** Zeige, dass $A(n_0)$ gilt (konkret einsetzen und **beide Seiten** ausrechnen).
2. **Induktionsannahme/-voraussetzung (IV):** Nimm an, $A(n)$ gilt für ein beliebiges, festes $n\ge n_0$.
3. **Induktionsschritt (IS) $n\to n+1$:** Zeige unter Benutzung der IV, dass $A(n+1)$ gilt.

Dann gilt $A(n)$ für alle $n\ge n_0$.
:::

:::merke Der Trick im Induktionsschritt
Schreibe den Ausdruck für $n+1$ so um, dass der Ausdruck für $n$ darin vorkommt – bei Summen: **letzten Summanden abspalten**: $\sum_{k=1}^{n+1}a_k=\sum_{k=1}^{n}a_k+a_{n+1}$. Dann IV einsetzen. Schreib dir vorher auf, was am Ende herauskommen **soll** ($A(n+1)$ ausformulieren!).
:::

## Beispiel 1: Gaußsche Summenformel

:::bsp $\sum_{k=1}^{n}k=\frac{n(n+1)}2$ für alle $n\in\N$
**IA** ($n=1$): linke Seite $\sum_{k=1}^1k=1$, rechte Seite $\frac{1\cdot2}2=1$. ✓

**IV:** Für ein $n\in\N$ gelte $\sum_{k=1}^nk=\frac{n(n+1)}2$.

**IS:** Zu zeigen: $\sum_{k=1}^{n+1}k=\frac{(n+1)(n+2)}2$.
$$\sum_{k=1}^{n+1}k=\underbrace{\sum_{k=1}^{n}k}_{\text{IV}}+(n+1)=\frac{n(n+1)}2+(n+1)=\frac{n(n+1)+2(n+1)}2=\frac{(n+1)(n+2)}2.\ ∎$$
:::

## Beispiel 2: Geometrische Summe

Durch Probieren: $1+q=\frac{1-q^2}{1-q}$ (weil $(1+q)(1-q)=1-q^2$), $1+q+q^2=\frac{1-q^3}{1-q}$ (weil $(1+q+q^2)(1-q)=1-q^3$). Vermutung:

:::satz Geometrische Summe
Für $n\in\N_0$ und $q\in\R\setminus\{1\}$:
$$\sum_{k=0}^{n}q^k=1+q+q^2+\dots+q^n=\frac{1-q^{n+1}}{1-q}.$$
:::

:::beweis
**IA** ($n=0$): $\sum_{k=0}^0q^k=q^0=1$ und $\frac{1-q}{1-q}=1$. ✓
**IV:** $\sum_{k=0}^nq^k=\frac{1-q^{n+1}}{1-q}$ für ein $n$.
**IS:**
$$\sum_{k=0}^{n+1}q^k=\frac{1-q^{n+1}}{1-q}+q^{n+1}=\frac{1-q^{n+1}+(1-q)q^{n+1}}{1-q}=\frac{1-q^{n+1}+q^{n+1}-q^{n+2}}{1-q}=\frac{1-q^{n+2}}{1-q}.\ ∎$$
:::

Diese Formel brauchen wir später ständig (geometrische **Reihe**: für $|q|<1$ geht $q^{n+1}\to0$, also $\sum_{k=0}^\infty q^k=\frac1{1-q}$).

## Beispiel 3: Ungleichung (Bernoulli)

:::bsp $(1+x)^n\ge1+nx$ für alle $n\in\N$, $x\ge-1$
**IA** ($n=1$): $1+x\ge1+x$. ✓
**IV:** $(1+x)^n\ge1+nx$.
**IS:** $(1+x)^{n+1}=(1+x)^n(1+x)\ge(1+nx)(1+x)$ – hier braucht man $1+x\ge0$, sonst würde sich das Zeichen umdrehen! – $=1+x+nx+nx^2\ge1+(n+1)x$, da $nx^2\ge0$. ∎
:::

## Beispiel 4: Teilbarkeit

:::bsp $3$ teilt $n^3-n$ für alle $n\in\N$
**IA** $n=1$: $0=3\cdot0$. ✓
**IV:** $n^3-n=3m$ für ein $m\in\Z$.
**IS:** $(n+1)^3-(n+1)=n^3+3n^2+3n+1-n-1=(n^3-n)+3n^2+3n=3m+3(n^2+n)=3(m+n^2+n)$. ✓ ∎
:::

## Beispiel 5: Rekursive Folge (Skript)

:::bsp $a_0=1$, $a_{n+1}=a_n+\left(\tfrac12\right)^{n+1}$. Zeige $a_n=\frac{2^{n+1}-1}{2^n}=2-\left(\tfrac12\right)^n$.
**IA** $n=0$: $\frac{2-1}{1}=1=a_0$. ✓
**IS:** $a_{n+1}=\frac{2^{n+1}-1}{2^n}+\frac{1}{2^{n+1}}=\frac{2(2^{n+1}-1)+1}{2^{n+1}}=\frac{2^{n+2}-1}{2^{n+1}}$. ∎ Insbesondere $a_n\to2$.
:::

:::achtung Häufige Fehler
- IA vergessen oder nur eine Seite berechnet.
- Im IS das Ergebnis $A(n+1)$ vorausgesetzt statt hergeleitet.
- IV nicht benutzt (dann ist es kein Induktionsbeweis).
- Bei Ungleichungen mit möglicherweise negativen Faktoren multipliziert.
:::

## Aufgaben

:::aufgabe 1
Zeige: $\sum_{k=1}^n(2k-1)=n^2$. In Worten? Berechne $\sum_{k=1}^{25}(2k-1)$.
:::loesung
IA: $1=1^2$ ✓. IS: $\sum_{k=1}^{n+1}(2k-1)=n^2+2(n+1)-1=n^2+2n+1=(n+1)^2$ ∎. In Worten: Die Summe der ersten $n$ ungeraden Zahlen ist $n^2$. $\sum_{k=1}^{25}(2k-1)=625$.
:::
:::

:::aufgabe 2
Zeige: $\sum_{k=1}^n k^2=\frac{n(n+1)(2n+1)}6$.
:::loesung
IA: $1=\frac{1\cdot2\cdot3}6$ ✓. IS: $\frac{n(n+1)(2n+1)}6+(n+1)^2=\frac{(n+1)[n(2n+1)+6(n+1)]}6=\frac{(n+1)(2n^2+7n+6)}6=\frac{(n+1)(n+2)(2n+3)}6$ ✓ (denn $(n+2)(2n+3)=2n^2+7n+6$). ∎
:::
:::

:::aufgabe 3
Zeige $n^2\le2^n$ für alle $n\ge4$.
:::loesung
IA $n=4$: $16\le16$ ✓. IS: $(n+1)^2=n^2+2n+1\le n^2+n^2=2n^2$ (da $2n+1\le n^2$ für $n\ge3$) $\le 2\cdot2^n=2^{n+1}$ (IV). ∎
:::
:::

:::aufgabe 4
Zeige $n!\ge2^{n-1}$ für alle $n\in\N$.
:::loesung
IA: $1!=1\ge2^0=1$ ✓. IS: $(n+1)!=(n+1)\,n!\ge(n+1)2^{n-1}\ge2\cdot2^{n-1}=2^n$, da $n+1\ge2$. ∎
:::
:::

:::aufgabe 5
$a_0=1$, $a_{n+1}=2a_n+1$. Berechne $a_0,\dots,a_4$, stelle eine Vermutung auf und beweise sie.
:::loesung
$1,3,7,15,31$ ⇒ Vermutung $a_n=2^{n+1}-1$. IA: $a_0=2-1=1$ ✓. IS: $a_{n+1}=2(2^{n+1}-1)+1=2^{n+2}-1$ ✓ ∎.
:::
:::

## Karteikarten

:::karte
Die drei Schritte der vollständigen Induktion?
???
1. Induktionsanfang $A(n_0)$. 2. Induktionsannahme: $A(n)$ gelte für ein $n\ge n_0$. 3. Induktionsschritt: daraus $A(n+1)$ folgern.
:::

:::karte
Gaußsche Summenformel?
???
$\sum_{k=1}^nk=\frac{n(n+1)}2$
:::

:::karte
Geometrische Summenformel?
???
$\sum_{k=0}^nq^k=\frac{1-q^{n+1}}{1-q}$ für $q\ne1$.
:::

:::karte
Bernoulli-Ungleichung?
???
$(1+x)^n\ge1+nx$ für $x\ge-1$, $n\in\N$.
:::

:::karte
Typischer Trick im Induktionsschritt bei Summen?
???
Letzten Summanden abspalten: $\sum_{k=1}^{n+1}a_k=\sum_{k=1}^na_k+a_{n+1}$, dann IV einsetzen.
:::
