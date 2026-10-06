---
title: Reelle Zahlen ℝ – Irrationalität, Intervalle, Betrag, Ungleichungen
chapter: 1 Grundlagen
minutes: 75
sources: Mathe 1/IngMath1_slides_1_basics_3_zahlenmengen_2_R.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#31; Mathe 1 + 2 neu/skript_m1_m2.pdf#36
---

:::ziel
- Verstehen, warum ℚ „Löcher" hat und ℝ diese schließt (Vollständigkeit).
- Den Beweis $\sqrt2\notin\Q$ selbst führen können.
- Intervallschreibweise, offene/abgeschlossene/beschränkte Intervalle.
- Betrag, Dreiecksungleichung und **Betragsungleichungen** mit Fallunterscheidung lösen.
- ℝ als **angeordneten, vollständigen Körper** beschreiben.
:::

## ℚ hat Löcher: √2

Wie lang ist die Diagonale eines Quadrats mit Seitenlänge 1? Pythagoras: $x^2=1^2+1^2=2$. Die Lösung heißt $\sqrt2\approx1{,}41421$. Sie ist **kein Bruch**.

:::satz
$\sqrt2\notin\Q$.
:::

:::beweis Widerspruchsbeweis
**Annahme:** $\sqrt2\in\Q$. Dann gibt es $p\in\Z$, $q\in\N$ mit $\sqrt2=\frac pq$, und wir dürfen annehmen, der Bruch ist **vollständig gekürzt** ($p,q$ teilerfremd).
1. Quadrieren: $2=\frac{p^2}{q^2}\Rightarrow p^2=2q^2$. Also ist $p^2$ gerade.
2. Dann ist auch $p$ gerade (wäre $p=2k+1$ ungerade, so wäre $p^2=4k^2+4k+1$ ungerade). Also $p=2k$.
3. Einsetzen: $2q^2=(2k)^2=4k^2\Rightarrow q^2=2k^2$ ⇒ $q^2$ gerade ⇒ $q$ gerade.
4. $p$ und $q$ sind beide gerade – **Widerspruch** zur Teilerfremdheit.

Also war die Annahme falsch: $\sqrt2\notin\Q$. ∎
:::

Logischer Hintergrund: Wir haben gezeigt „$\sqrt2\in\Q\Rightarrow$ Widerspruch". Da ein Widerspruch falsch ist, muss nach der Kontraposition ($A\Rightarrow B\equiv\neg B\Rightarrow\neg A$) die Annahme falsch sein.

Weitere irrationale Zahlen: $\sqrt3$, $\pi$ (Kreisumfang/Durchmesser), $\e$. $\pi$ kann man z. B. durch Umfänge einbeschriebener Vielecke annähern: Der Umfang des $2^{k+1}$-Ecks im Einheitskreis nähert sich $2\pi\approx6{,}2832$ (5,6569; 6,1229; 6,2429; … ; 6,2832).

## Die reellen Zahlen

ℝ erhält man, indem man zu ℚ alle „Grenzwerte" hinzunimmt – anschaulich: **alle Dezimalzahlen**, auch unendliche nichtperiodische. Z. B. ist $\sqrt3$ Grenzwert der Folge $1;\ 1{,}7;\ 1{,}73;\ 1{,}732;\ \dots$

:::def ℝ ist ein angeordneter, vollständiger Körper
1. **Körper**: $(\R,+)$ und $(\R\setminus\{0\},\cdot)$ kommutative Gruppen, Distributivgesetz.
2. **Angeordnet** (für $a,b,c\in\R$):
   - Trichotomie: genau eins von $a<b$, $a=b$, $b<a$
   - Transitiv: $a<b$ und $b<c\Rightarrow a<c$
   - $a<b\Rightarrow a+c<b+c$
   - $a<b$ und $c>0\Rightarrow ac<bc$
3. **Vollständig** (Vollständigkeitsaxiom): Jede Cauchy-Folge hat in ℝ einen Grenzwert – „alle Löcher sind gestopft". (Details bei *Folgen*.)
:::

## Intervalle

Für $a<b$:

| Intervall | Menge | Typ |
|---|---|---|
| $[a,b]$ | $\{x\in\R\mid a\le x\le b\}$ | abgeschlossen, beschränkt (= **kompakt**) |
| $(a,b)$ | $\{x\in\R\mid a<x<b\}$ | offen |
| $[a,b)$, $(a,b]$ | $a\le x<b$ bzw. $a<x\le b$ | halboffen |
| $[a,\infty)$, $(-\infty,b]$ | $x\ge a$ bzw. $x\le b$ | abgeschlossen, unbeschränkt |
| $(a,\infty)$, $(-\infty,b)$ | $x>a$ bzw. $x<b$ | offen, unbeschränkt |

Statt runder Klammern sieht man auch $]a,b[$. $\infty$ ist **keine Zahl**, daher immer runde Klammer an der Unendlichkeitsseite. $\R=(-\infty,\infty)$.

## Betrag und Dreiecksungleichung

:::def Betrag
$$|x|=\begin{cases}x,& x\ge0\\-x,& x<0\end{cases}$$
Geometrisch: Abstand von $x$ zu 0; $|x-a|$ ist der Abstand von $x$ zu $a$.
:::

Eigenschaften: $|x|\ge0$, $|x|=0\Leftrightarrow x=0$, $|xy|=|x||y|$, $|{-x}|=|x|$, $\sqrt{x^2}=|x|$.

:::satz Dreiecksungleichung
$$|a+b|\le|a|+|b|\qquad\text{für alle }a,b\in\R.$$
:::
*Begründung* durch Fallunterscheidung: Sind $a,b\ge0$, steht $a+b\le a+b$ da. Sind $a,b<0$, gilt $|a+b|=-a-b=|a|+|b|$. Haben sie verschiedene Vorzeichen, heben sie sich teilweise auf, und die linke Seite ist kleiner. Beispiel: $a=3, b=-5$: $|a+b|=2\le 8=|a|+|b|$. Name: Im Dreieck aus $\vec a,\vec b,\vec a+\vec b$ ist eine Seite nie länger als die beiden anderen zusammen.

Nützlich: $|x-a|<\varepsilon\iff a-\varepsilon<x<a+\varepsilon\iff x\in(a-\varepsilon,a+\varepsilon)$ (die **ε-Umgebung** von $a$).

## Walkthrough: Betragsungleichungen lösen

:::rezept Betragsungleichung
1. **Kritische Punkte**: Wo wird der Ausdruck im Betrag null?
2. Zahlengerade in **Fälle** zerlegen; in jedem Fall den Betrag ohne Betragsstriche schreiben.
3. In jedem Fall die Ungleichung lösen und mit der **Fallbedingung schneiden**.
4. Teillösungen **vereinigen**.
:::

:::bsp $|2x-4|\le x+1$
1. $2x-4=0\Leftrightarrow x=2$.
2. **Fall 1: $x<2$.** Dann $2x-4<0$, also $|2x-4|=-2x+4$: $\ -2x+4\le x+1\Leftrightarrow 3\le3x\Leftrightarrow x\ge1$. Mit $x<2$: $L_1=[1,2)$.
3. **Fall 2: $x\ge2$.** $|2x-4|=2x-4$: $\ 2x-4\le x+1\Leftrightarrow x\le5$. Mit $x\ge2$: $L_2=[2,5]$.
4. $L=L_1\cup L_2=[1,5]$.
:::

## Aufgaben

:::aufgabe 1
Zeige: $\sqrt3\notin\Q$.
:::loesung
Annahme $\sqrt3=\frac pq$ gekürzt. Dann $p^2=3q^2$, also ist $p^2$ durch 3 teilbar. Dann ist auch $p$ durch 3 teilbar (sonst $p=3k\pm1$, $p^2=9k^2\pm6k+1$ nicht durch 3 teilbar). Mit $p=3k$: $9k^2=3q^2\Rightarrow q^2=3k^2$ ⇒ $q$ durch 3 teilbar. Widerspruch zur Teilerfremdheit. ∎
:::
:::

:::aufgabe 2
Löse (a) $|x-3|<2$, (b) $|x+1|\ge 4$, (c) $|x-1|+|x+2|\le5$.
:::loesung
(a) $-2<x-3<2\Leftrightarrow 1<x<5$: $L=(1,5)$.
(b) $x+1\ge4$ oder $x+1\le-4$: $L=(-\infty,-5]\cup[3,\infty)$.
(c) Kritische Punkte $1$ und $-2$.
- $x<-2$: $-(x-1)-(x+2)=-2x-1\le5\Leftrightarrow x\ge-3$ ⇒ $[-3,-2)$.
- $-2\le x<1$: $-(x-1)+(x+2)=3\le5$ immer wahr ⇒ $[-2,1)$.
- $x\ge1$: $(x-1)+(x+2)=2x+1\le5\Leftrightarrow x\le2$ ⇒ $[1,2]$.
$L=[-3,2]$.
:::
:::

:::aufgabe 3
Schreibe als Intervall bzw. Vereinigung: $\{x\in\R: x^2<9\}$, $\{x\in\R: x^2\ge 9\}$, $\{x\in\R: 0<|x|\le1\}$.
:::loesung
$(-3,3)$; $(-\infty,-3]\cup[3,\infty)$; $[-1,0)\cup(0,1]$.
:::
:::

## Karteikarten

:::karte
Beweisidee $\sqrt2\notin\Q$?
???
Annahme $\sqrt2=p/q$ gekürzt ⇒ $p^2=2q^2$ ⇒ $p$ gerade ⇒ $q^2=2k^2$ ⇒ $q$ gerade ⇒ Widerspruch zu gekürzt.
:::

:::karte
Dreiecksungleichung?
???
$|a+b|\le|a|+|b|$
:::

:::karte
Rezept Betragsungleichung?
???
Nullstellen der Beträge → Fälle → je Fall ohne Betrag lösen und mit Fallbedingung schneiden → Teillösungen vereinigen.
:::

:::karte
Was unterscheidet ℝ von ℚ?
???
ℝ ist **vollständig**: Jede Cauchy-Folge konvergiert in ℝ (keine Löcher wie $\sqrt2$). Beide sind angeordnete Körper.
:::

:::karte
Was ist ein kompaktes Intervall?
???
Ein abgeschlossenes und beschränktes Intervall $[a,b]$.
:::
