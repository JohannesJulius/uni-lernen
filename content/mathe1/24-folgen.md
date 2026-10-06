---
title: Folgen – Konvergenz, Grenzwert, Monotonie, Grenzwertsätze, Cauchy-Folgen
chapter: 3 Analysis
minutes: 130
sources: Mathe 1/IngMath1_slides_3_ana_01_Folgen (1).pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#31; Mathe 1 + 2 neu/skript_m1_m2.pdf#36
---

:::ziel
- Folgen explizit und rekursiv angeben; Beispiele (π-Approximation, Heron-Verfahren für √2, Fibonacci).
- Die **ε-Definition der Konvergenz** verstehen und für einfache Folgen anwenden.
- Nullfolgen, divergente und alternierende Folgen, Teilfolgen, Häufungspunkte.
- Beschränktheit, Monotonie, **Monotoniekriterium**, **Majorantenkriterium**, **Grenzwertsätze**.
- Grenzwerte gebrochenrationaler Folgen schnell bestimmen.
- Cauchy-Folgen und Vollständigkeit von ℝ.
:::

## Motivation

Folgen sind der Kern der Analysis:
- **Irrationale Zahlen** wie $\pi$, $\sqrt2$, $\e$ lassen sich nur als Grenzwerte von Folgen exakt fassen.
- **Numerische Verfahren** (Newton, Heron, Iterationen in MATLAB) erzeugen Folgen von Näherungslösungen – sie sollen konvergieren.
- Ableitung und Integral werden über Grenzwerte definiert.

### Erste Beispiele

**Kreiszahl:** Man approximiert den Einheitskreis durch regelmäßige $2^n$-Ecke. Für die Seitenlänge gilt die Rekursion (Pythagoras im Teildreieck)
$$s_{2^{n+1}}=\sqrt{2-\sqrt{4-s_{2^n}^2}},\qquad s_4=\sqrt2,\ s_8=\sqrt{2-\sqrt2},\ s_{16}=\sqrt{2-\sqrt{2+\sqrt2}},\dots$$
Der Umfang $2^n s_{2^n}$ nähert sich $2\pi$.

**Wurzel aus 2 (Heron-Verfahren):** $a_0=1$, $a_{n+1}=\frac12\left(a_n+\frac{2}{a_n}\right)$: $1;\ 1{,}5;\ 1{,}41\overline6;\ 1{,}414215\dots$ Idee: Ist $a_n$ zu groß, ist $\frac2{a_n}$ zu klein – der Mittelwert ist besser. Für $x=\sqrt2$ gilt $\frac12(x+\frac2x)=x$ (Fixpunkt). Allgemein: $\sqrt a$ über $x_{n+1}=\frac12(x_n+\frac a{x_n})$, $\sqrt[k]a$ über $x_{n+1}=\frac1k\left((k-1)x_n+\frac a{x_n^{k-1}}\right)$.

**Fibonacci:** $F_1=F_2=1$, $F_n=F_{n-1}+F_{n-2}$: $1,1,2,3,5,8,13,21,\dots$ – wächst unbeschränkt ($F_n\to\infty$), aber $\frac{F_{n+1}}{F_n}\to\phi=\frac{1+\sqrt5}2\approx1{,}618$ (Goldener Schnitt).

## Definition

:::def Folge
Eine **(reelle) Folge** ist eine Abbildung $\N\to\R$, $n\mapsto a_n$. Schreibweise $(a_n)_{n\in\N}=(a_1,a_2,a_3,\dots)$. Startindex auch $0$ oder $k\in\Z$.
- **explizit:** $a_n=\frac1n$, $a_n=2n$, $a_n=\frac{n}{2^n}$
- **rekursiv:** $a_0=1$, $a_{n+1}=f(a_n)$
:::

Beispiele: konstante Folge $(a,a,a,\dots)$; gerade Zahlen $2n$; ungerade $2n-1$; harmonische Folge $\frac1n$; $\frac{n}{2^n}=(\frac12,\frac24,\frac38,\dots)$; **geometrische Folge** $x^n$ (diskretes dynamisches System), auch für $z\in\C$.

## Konvergenz

:::def Konvergenz, Grenzwert
$(a_n)$ **konvergiert** gegen $a\in\R$ (bzw. $\C$), wenn
$$\forall\varepsilon>0\ \ \exists N\in\N\ \ \forall n\ge N:\ |a_n-a|<\varepsilon.$$
Schreibweise: $\lim_{n\to\infty}a_n=a$ oder $a_n\to a$ $(n\to\infty)$. Eine Folge mit Grenzwert 0 heißt **Nullfolge**. Eine nicht konvergente Folge heißt **divergent**.
:::

:::idee ε-Schlauch
Egal wie schmal man den Streifen $(a-\varepsilon,a+\varepsilon)$ (die **ε-Umgebung**) um $a$ wählt: **ab einem Index $N$** liegen **alle** Folgenglieder darin. Vorne dürfen beliebig viele „Ausreißer" sein. Je kleiner $\varepsilon$, desto größer ist i. A. $N=N(\varepsilon)$. In ℂ ist die ε-Umgebung eine Kreisscheibe.
:::

:::bsp $a_n=\frac1n\to0$
Sei $\varepsilon>0$. ℝ ist **archimedisch**: Es gibt $N\in\N$ mit $N>\frac1\varepsilon$. Für $n\ge N$: $|\frac1n-0|=\frac1n\le\frac1N<\varepsilon$. ∎
:::

:::bsp $a_n=2+\frac1n\to2$ (Skript)
$|a_n-2|=\frac1n<\varepsilon\iff n>\frac1\varepsilon$. Wähle $N(\varepsilon)=\lceil\frac1\varepsilon\rceil+1$. Zum Beispiel $\varepsilon=0{,}01$: ab $N=101$ liegen alle Glieder in $(1{,}99;2{,}01)$.
:::

:::bsp $a_n=\frac{n}{2^n}\to0$
Per Induktion gilt $n^2\le2^n$ für $n\ge4$, also $\frac n{2^n}\le\frac1n$. Zu $\varepsilon$ wähle $N>\max(3,\frac1\varepsilon)$, dann $|\frac n{2^n}|\le\frac1n<\varepsilon$.
:::

:::satz Geometrische Folge $x^n$
$$\lim_{n\to\infty}x^n=\begin{cases}0,&|x|<1\\1,&x=1\\\text{divergent},&x=-1\text{ oder }|x|>1\ (|x^n|\to\infty)\end{cases}$$
:::
*Beweisidee* mit **Bernoulli** $(1+d)^n\ge1+nd$: Für $|x|=1+d>1$ ist $|x^n|\ge1+nd\to\infty$. Für $0<|x|<1$ wende das auf $\frac1{|x|}>1$ an: $\frac1{|x|^n}\ge1+nd$, also $|x|^n\le\frac1{1+nd}\to0$.

## Divergenz, alternierende Folgen, Teilfolgen

- **Bestimmt divergent** gegen $\infty$: $\forall K\ \exists N\ \forall n\ge N: a_n>K$. Beispiele: $2n$, $n^2$, $2^n$, $kn$ ($k>0$). Schreibweise $\lim a_n=\infty$ (aber: kein Grenzwert im eigentlichen Sinn!).
- **Alternierend:** Vorzeichen wechselt. $(-1)^n$ springt zwischen $\pm1$ – divergent. $(-1)^n n$ divergent ($|a_n|\to\infty$). $\frac{(-1)^n}{n}\to0$ – konvergent!

:::def Teilfolge, Häufungspunkt
Ist $n_1<n_2<n_3<\dots$, so ist $(a_{n_k})_k$ eine **Teilfolge**. $a$ heißt **Häufungspunkt** von $(a_n)$, wenn eine Teilfolge gegen $a$ konvergiert.
:::

:::bsp
$a_n=(-1)^n(1+\frac1n)$: Die geraden Glieder $a_{2k}=1+\frac1{2k}\to1$, die ungeraden $\to-1$. Häufungspunkte $\pm1$ ⇒ nicht konvergent.
:::

:::satz
- Der Grenzwert einer konvergenten Folge ist **eindeutig**.
- Konvergiert $(a_n)$ gegen $a$, so konvergiert **jede** Teilfolge gegen $a$; $a$ ist der einzige Häufungspunkt.
- Hat eine Folge zwei verschiedene Häufungspunkte, ist sie divergent.
- **Bolzano-Weierstraß:** Jede beschränkte Folge hat (mindestens) eine konvergente Teilfolge.
:::

*Beweis Eindeutigkeit (Widerspruch):* Seien $a\ne\tilde a$ Grenzwerte, $d=|a-\tilde a|>0$. Mit $\varepsilon=\frac d2$ gilt für große $n$: $d\le|a-a_n|+|a_n-\tilde a|<\frac d2+\frac d2=d$. Widerspruch.

## Beschränktheit und Monotonie

:::def
$(a_n)$ heißt
- **nach oben beschränkt**, wenn $\exists K: a_n\le K\ \forall n$; **nach unten beschränkt**, wenn $\exists K: a_n\ge K$; **beschränkt**, wenn $\exists K\ge0: |a_n|\le K$.
- **monoton wachsend** ($a_n\le a_{n+1}$), **streng monoton wachsend** ($<$), **monoton fallend** ($\ge$), **streng monoton fallend** ($>$).
Die kleinste obere Schranke heißt **Supremum**, die größte untere **Infimum**.
:::

:::rezept Monotonie nachweisen
Differenz $a_{n+1}-a_n\ge0$ zeigen, oder (bei positiven Gliedern) Quotient $\frac{a_{n+1}}{a_n}\ge1$, oder per Induktion.
:::

## Konvergenzkriterien

:::satz Konvergente Folgen sind beschränkt
Jede konvergente Folge ist beschränkt. (Umkehrung falsch: $(-1)^n$.)
:::

:::satz Monotoniekriterium
Jede **monotone und beschränkte** Folge in ℝ konvergiert. (Wächst sie, konvergiert sie gegen ihr Supremum.)
:::

:::bsp
$1-\frac1n$: wachsend, $0\le a_n\le1$ ⇒ konvergent (gegen $\sup=1$). $1+\frac1n$: fallend, beschränkt ⇒ konvergent (gegen $\inf=1$). $(-1)^n(1-\frac1n)$: beschränkt, aber **nicht monoton** – und divergent.
**Eulersche Zahl:** $a_n=(1+\frac1n)^n$ ist monoton wachsend und beschränkt (durch 3) ⇒ konvergent; der Grenzwert heißt $\e\approx2{,}71828$. Die Konvergenz ist langsam ($a_{1000}\approx2{,}7169$), und im Computer bekommt man für riesige $n$ wegen Rundung sogar 1 heraus ($1+10^{-16}$ wird zu $1$ gerundet)!
:::

:::satz Majorantenkriterium (Vergleichskriterium)
Ist $(b_n)$ eine Nullfolge und gilt $|a_n-a|\le b_n$ für alle $n\ge N$, so konvergiert $a_n\to a$.
:::

:::bsp
$a_n=1+\frac1{n^2}$: $|a_n-1|=\frac1{n^2}\le\frac1n\to0$ ⇒ $a_n\to1$. Ebenso $c_n=1+\frac{(-1)^n}{n^2}$: $|c_n-1|=\frac1{n^2}\le\frac1n$. Auch $\frac{\sin n}{n}\to0$, da $|\frac{\sin n}n|\le\frac1n$.
:::

:::satz Grenzwertsätze
Seien $a_n\to a$, $b_n\to b$, $\lambda\in\R$. Dann:
- $a_n\pm b_n\to a\pm b$, $\quad\lambda a_n\to\lambda a$, $\quad\mu a_n+\nu b_n\to\mu a+\nu b$
- $a_n\cdot b_n\to a\cdot b$
- $\frac{a_n}{b_n}\to\frac ab$, falls $b\ne0$ (und $b_n\ne0$)
- $|a_n|\to|a|$, $\sqrt{a_n}\to\sqrt a$ (für $a_n\ge0$)
:::
*Beweis Summe:* Wähle $N$ so, dass $|a_n-a|<\frac\varepsilon2$ und $|b_n-b|<\frac\varepsilon2$; dann $|(a_n+b_n)-(a+b)|\le|a_n-a|+|b_n-b|<\varepsilon$ (Dreiecksungleichung).

:::achtung
Die Umkehrung gilt nicht: $a_n=n$, $b_n=\frac1n$ divergiert bzw. konvergiert, das Produkt $a_nb_n=1$ konvergiert. Grenzwertsätze nur anwenden, wenn **beide** Einzelgrenzwerte existieren!
:::

:::rezept Gebrochenrationale Folgen
Zähler und Nenner durch die **höchste Potenz von $n$ im Nenner** teilen, dann Grenzwertsätze. Allgemein für $\frac{a_rn^r+\dots}{b_sn^s+\dots}$:
- $r<s$: $\to0$
- $r=s$: $\to\frac{a_r}{b_s}$ (Verhältnis der Leitkoeffizienten)
- $r>s$: bestimmt divergent gegen $\pm\infty$ (Vorzeichen von $\frac{a_r}{b_s}$)
:::

:::bsp
- $\frac{n+1}{n^2+1}=\frac{\frac1n+\frac1{n^2}}{1+\frac1{n^2}}\to\frac{0+0}{1+0}=0$
- $\frac{2n^2+3n+1}{n^2+3}=\frac{2+\frac3n+\frac1{n^2}}{1+\frac3{n^2}}\to2$
- $\frac{3n^2+17n}{7n^2-5}\to\frac37$
- $\frac{n^2+1}{n}=n+\frac1n\to\infty$: Hier darf man den Quotientensatz **nicht** anwenden (Nenner $\frac1n\to0$ nach Teilen durch $n^2$); der Zähler bleibt beschränkt weg von 0, der Nenner geht gegen 0 ⇒ divergent.
:::

## Cauchy-Folgen und Vollständigkeit

:::def Cauchy-Folge
$(a_n)$ ist eine **Cauchy-Folge**, wenn $\forall\varepsilon>0\ \exists N\ \forall n,m\ge N: |a_n-a_m|<\varepsilon$ (die Glieder rücken beliebig eng zusammen – ohne dass man den Grenzwert kennen muss).
:::

:::satz
1. Jede konvergente Folge ist eine Cauchy-Folge: $|a_n-a_m|\le|a_n-a|+|a-a_m|<\frac\varepsilon2+\frac\varepsilon2$.
2. **Vollständigkeit:** In ℝ (und ℂ) konvergiert **jede** Cauchy-Folge. In ℚ nicht: Die Heron-Folge für $\sqrt2$ besteht aus rationalen Zahlen, ist Cauchy, aber ihr Grenzwert liegt nicht in ℚ.
:::

## Aufgaben

:::aufgabe 1
Bestimme die Grenzwerte: (a) $\frac{4n^3-n^2+5}{n^4-3}$, (b) $\frac{3n^2}{2n^2-2n-1}$, (c) $\frac{(n+2)^2(n-1)}{n(n+1)(n+2)}$, (d) $\left(\frac{2+n}{n}\right)^2$.
:::loesung
(a) $r=3<s=4$ ⇒ $0$. (b) $\frac32$. (c) Grad 3 / Grad 3, Leitkoeffizienten 1/1 ⇒ $1$. (d) $(\frac2n+1)^2\to1$.
:::
:::

:::aufgabe 2
Zeige mit der Definition: $a_n=\frac{(-1)^n}{n^2}\to0$. Wie geht es einfacher für $b_n=\frac1{n^2}$?
:::loesung
$|a_n-0|=\frac1{n^2}\le\frac1n<\varepsilon$ für $n>\frac1\varepsilon$. Für $b_n$: Produkt der Nullfolgen $\frac1n\cdot\frac1n$ (Grenzwertsatz) oder Majorante $\frac1n$.
:::
:::

:::aufgabe 3
$a_n=(-1)^n(1+\frac1n)$: Ist die Folge beschränkt? Gib eine konvergente Teilfolge an.
:::loesung
$|a_n|=1+\frac1n\le2$ ⇒ beschränkt. Teilfolge $a_{2k}=1+\frac1{2k}\to1$ (Bolzano-Weierstraß garantiert ihre Existenz).
:::
:::

:::aufgabe 4
Gegeben $(a_n)=(2,-4,8,-16,32,\dots)$. Gib eine explizite und eine rekursive Darstellung an. Konvergiert die Folge?
:::loesung
Explizit $a_n=(-1)^{n+1}2^n$ ($n\ge1$). Rekursiv $a_1=2$, $a_{n+1}=-2a_n$. Divergent ($|a_n|\to\infty$).
:::
:::

:::aufgabe 5
Zeige, dass $a_{n+1}=\sqrt{2+a_n}$, $a_1=\sqrt2$ konvergiert, und berechne den Grenzwert.
:::loesung
Per Induktion: $a_n<2$ (denn $a_n<2\Rightarrow a_{n+1}<\sqrt4=2$) und $a_{n+1}>a_n$ (denn $a_{n+1}^2-a_n^2=2+a_n-a_n^2=(2-a_n)(1+a_n)>0$). Monoton + beschränkt ⇒ konvergent. Grenzwert $a$ erfüllt $a=\sqrt{2+a}\Rightarrow a^2-a-2=0\Rightarrow a=2$ (die Lösung $-1$ scheidet aus, da $a_n>0$).
:::
:::

## Karteikarten

:::karte
ε-Definition der Konvergenz?
???
$\forall\varepsilon>0\ \exists N\ \forall n\ge N: |a_n-a|<\varepsilon$.
:::

:::karte
Monotoniekriterium?
???
Jede monotone und beschränkte reelle Folge konvergiert.
:::

:::karte
Wann konvergiert $x^n$?
???
Für $|x|<1$ gegen 0, für $x=1$ gegen 1; sonst divergent.
:::

:::karte
Grenzwert von $\frac{a_rn^r+\dots}{b_sn^s+\dots}$?
???
$r<s$: 0; $r=s$: $a_r/b_s$; $r>s$: $\pm\infty$.
:::

:::karte
Was ist ein Häufungspunkt?
???
Grenzwert einer Teilfolge. Zwei verschiedene Häufungspunkte ⇒ Folge divergent.
:::

:::karte
Was bedeutet „ℝ ist vollständig"?
???
Jede Cauchy-Folge in ℝ konvergiert (in ℝ).
:::

:::karte
Heron-Verfahren für $\sqrt a$?
???
$x_{n+1}=\frac12\left(x_n+\frac a{x_n}\right)$, $x_0>0$.
:::
