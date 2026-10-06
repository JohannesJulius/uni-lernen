---
title: Fakultät, Binomialkoeffizienten & binomischer Lehrsatz
chapter: 1 Grundlagen
minutes: 60
sources: Mathe 1/IngMath1_slides_1_basics_5_induktion_2_Binomialtheorem_ADDENDUM.pdf; Mathe 1/IngMath1_worksheet_1_basics_4_beweise_binomialkoeffizienten.pdf
---

:::ziel
- Fakultät und Binomialkoeffizient kombinatorisch deuten.
- Pascalsches Dreieck und die Eigenschaften $\binom nk=\binom n{n-k}$, $\binom nk+\binom n{k-1}=\binom{n+1}k$.
- $(a+b)^n$ mit dem binomischen Lehrsatz ausmultiplizieren und den Satz per Induktion beweisen.
- Potenzmenge: $|\mathcal P(X)|=2^n$.
:::

## Fakultät

$$0!=1,\qquad n!=n\cdot(n-1)!\quad\Big(=\prod_{k=1}^nk=1\cdot2\cdots n\Big)$$

:::satz Anordnungen
Die Elemente einer $n$-elementigen Menge lassen sich auf genau $n!$ Arten **anordnen** (Permutationen).
:::
Begründung: Für den ersten Platz gibt es $n$ Möglichkeiten, für den zweiten $n-1$, … für den letzten 1. Beispiel: 3 Bücher $A,B,C$: $ABC, ACB, BAC, BCA, CAB, CBA$ – $3!=6$.

## Binomialkoeffizienten

:::def Binomialkoeffizient
Für $n,k\in\N_0$, $0\le k\le n$:
$$\binom nk=\frac{n!}{k!\,(n-k)!}\qquad(\text{„}n\text{ über }k\text{“}),\qquad \binom nk=0\text{ sonst}.$$
:::

:::satz Kombinatorische Bedeutung
$\binom nk$ ist die Anzahl der $k$-elementigen **Teilmengen** einer $n$-elementigen Menge (Auswahl von $k$ aus $n$ **ohne** Reihenfolge, ohne Wiederholung).
:::
Begründung: Wählt man $k$ Elemente **mit** Reihenfolge aus, gibt es $n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}$ Möglichkeiten. Jede Teilmenge wurde dabei $k!$-mal (in allen Reihenfolgen) gezählt ⇒ $\frac{n!}{k!(n-k)!}$.

:::bsp Lotto
6 aus 49: $\binom{49}6=\frac{49\cdot48\cdot47\cdot46\cdot45\cdot44}{6!}=13\,983\,816$ Möglichkeiten.
:::

Praktisch rechnen: $\binom nk=\frac{n(n-1)\cdots(n-k+1)}{k!}$, z. B. $\binom52=\frac{5\cdot4}{2}=10$. Spezialfälle: $\binom n0=\binom nn=1$, $\binom n1=n$.

## Pascalsches Dreieck

Jede Zahl ist die Summe der beiden Zahlen darüber:

```
n=0:            1
n=1:          1   1
n=2:        1   2   1
n=3:      1   3   3   1
n=4:    1   4   6   4   1
n=5:  1   5  10  10   5   1
n=6: 1  6  15  20  15   6  1
n=7: 1 7 21  35  35  21  7  1
```
Die $k$-te Zahl (ab $k=0$ gezählt) in Zeile $n$ ist $\binom nk$.

:::satz Eigenschaften
1. **Symmetrie:** $\binom nk=\binom n{n-k}$
2. **Pascal-Regel:** $\binom nk+\binom n{k-1}=\binom{n+1}k$
:::

:::beweis
1. Einsetzen: $\binom n{n-k}=\frac{n!}{(n-k)!\,(n-(n-k))!}=\frac{n!}{(n-k)!\,k!}$.
2. Hauptnenner $k!\,(n-k+1)!$:
$$\frac{n!}{k!(n-k)!}+\frac{n!}{(k-1)!(n-k+1)!}=\frac{n!\,(n-k+1)+n!\,k}{k!\,(n-k+1)!}=\frac{(n+1)!}{k!\,(n+1-k)!}=\binom{n+1}k.\ ∎$$
:::

## Binomischer Lehrsatz

:::satz Binomischer Lehrsatz
Für $a,b\in\R$ (auch $\C$) und $n\in\N_0$:
$$(a+b)^n=\sum_{k=0}^n\binom nk a^k\,b^{n-k}.$$
:::

:::bsp
- $(a+b)^2=a^2+2ab+b^2$ (Zeile 1 2 1)
- $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ (1 3 3 1)
- $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$ (1 4 6 4 1)
- $(x-2)^3=x^3+3x^2(-2)+3x(-2)^2+(-2)^3=x^3-6x^2+12x-8$
:::

Anschaulich: Beim Ausmultiplizieren von $(a+b)(a+b)\cdots(a+b)$ wählt man aus jedem der $n$ Faktoren $a$ oder $b$. Der Term $a^kb^{n-k}$ entsteht so oft, wie es Möglichkeiten gibt, die $k$ Faktoren für $a$ auszuwählen: $\binom nk$.

:::beweis Induktion über $n$
**IA** $n=1$: $\binom10a^0b^1+\binom11a^1b^0=a+b$ ✓.
**IV:** $(a+b)^n=\sum_{k=0}^n\binom nka^kb^{n-k}$.
**IS:**
$$(a+b)^{n+1}=(a+b)(a+b)^n=\sum_{k=0}^n\binom nka^{k+1}b^{n-k}+\sum_{k=0}^n\binom nka^kb^{n+1-k}.$$
Indexverschiebung in der ersten Summe ($k\to k-1$): $\sum_{k=1}^{n+1}\binom n{k-1}a^kb^{n+1-k}$. Mit $\binom n{-1}=0$ und $\binom n{n+1}=0$ laufen beide Summen von $0$ bis $n+1$:
$$(a+b)^{n+1}=\sum_{k=0}^{n+1}\left[\binom n{k-1}+\binom nk\right]a^kb^{n+1-k}=\sum_{k=0}^{n+1}\binom{n+1}ka^kb^{n+1-k}.\ ∎$$
:::

## Anwendung: Potenzmenge

:::def Potenzmenge
$\mathcal P(X)$ ist die Menge **aller Teilmengen** von $X$. Beispiel: $\mathcal P(\{1,2\})=\{\emptyset,\{1\},\{2\},\{1,2\}\}$.
:::

:::satz
$|X|=n\Rightarrow|\mathcal P(X)|=2^n$.
:::
Beweis: Anzahl Teilmengen = Summe über alle Größen $k$: $\sum_{k=0}^n\binom nk=\sum_{k=0}^n\binom nk1^k1^{n-k}=(1+1)^n=2^n$. (Alternativ: Jedes Element ist drin oder nicht – $2$ Möglichkeiten, $n$-mal.)

## Aufgaben

:::aufgabe 1
Berechne $\binom73$, $\binom{10}8$, $\binom{20}{1}$, $\binom{5}{0}$.
:::loesung
$\binom73=\frac{7\cdot6\cdot5}{6}=35$; $\binom{10}8=\binom{10}2=45$; $20$; $1$.
:::
:::

:::aufgabe 2
Multipliziere aus: $(2x+1)^4$ und $(1-y)^5$.
:::loesung
$(2x+1)^4=16x^4+4\cdot8x^3+6\cdot4x^2+4\cdot2x+1=16x^4+32x^3+24x^2+8x+1$.
$(1-y)^5=1-5y+10y^2-10y^3+5y^4-y^5$.
:::
:::

:::aufgabe 3
Welcher Koeffizient steht bei $x^3$ in $(x+2)^7$?
:::loesung
$\binom73x^3\cdot2^4=35\cdot16\,x^3=560\,x^3$.
:::
:::

:::aufgabe 4
Wie viele Möglichkeiten gibt es, aus 12 Studierenden ein Team aus 4 zu bilden? Wie viele, wenn zusätzlich ein Teamleiter bestimmt wird?
:::loesung
$\binom{12}4=495$. Mit Leiter: $495\cdot4=1980$ (oder $12\cdot\binom{11}3=12\cdot165=1980$).
:::
:::

## Karteikarten

:::karte
Definition und Bedeutung von $\binom nk$?
???
$\frac{n!}{k!(n-k)!}$ = Anzahl der $k$-elementigen Teilmengen einer $n$-elementigen Menge.
:::

:::karte
Binomischer Lehrsatz?
???
$(a+b)^n=\sum_{k=0}^n\binom nka^kb^{n-k}$
:::

:::karte
Pascal-Regel?
???
$\binom nk+\binom n{k-1}=\binom{n+1}k$
:::

:::karte
Wie viele Teilmengen hat eine $n$-elementige Menge?
???
$2^n$ (Potenzmenge).
:::

:::karte
$(a+b)^4=\,?$
???
$a^4+4a^3b+6a^2b^2+4ab^3+b^4$
:::
