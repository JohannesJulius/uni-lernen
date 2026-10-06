---
title: Reihen – Partialsummen, Konvergenzkriterien, absolute Konvergenz
chapter: 3 Analysis
minutes: 130
sources: Mathe 1/IngMath1_slides_3_ana_02_Reihen.pdf; Mathe 1/IngMath1_slides_3_ana_03_UE_aufgaben_haftmann.pdf; Mathe 1/IngMath1_slides_3_ana_03_UE_visualisierung.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#75
---

:::ziel
- Verstehen, warum man mit unendlichen Summen vorsichtig sein muss, und Reihen über **Partialsummen** definieren.
- Geometrische Reihe, harmonische Reihe, $\sum\frac1{n^k}$, Teleskopsummen.
- Kriterien: **Nullfolgenkriterium** (notwendig), **Leibniz**, **Majoranten/Minoranten**, **Quotienten-** und **Wurzelkriterium**.
- Absolute Konvergenz, Umordnung, Cauchy-Produkt; Dezimal- und Binärdarstellung als Reihe.
:::

## Vorsicht mit unendlichen Summen

Was ist $1-1+1-1+\dots$?
- Klammerung $(1-1)+(1-1)+\dots=0$.
- Klammerung $1+(-1+1)+(-1+1)+\dots=1$.
- Formal mit $\frac1{1-x}=1+x+x^2+\dots$ bei $x=-1$: $\frac12$.

Drei „Ergebnisse" – die Rechnung ist sinnlos, weil die Summe gar nicht existiert. Ausweg: Man betrachtet die **Folge der Partialsummen** $S_n=\sum_{k=0}^n(-1)^k=1,0,1,0,\dots$ – sie konvergiert **nicht**.

## Definition

:::def Reihe
Zu einer Folge $(a_k)$ bildet man die **Partialsummen** $S_n=\sum_{k=1}^na_k$. Die **Reihe** $\sum_{k=1}^\infty a_k$ ist die Folge $(S_n)$. Konvergiert $S_n\to S$, so heißt die Reihe **konvergent** mit **Wert** (Summe)
$$\sum_{k=1}^\infty a_k:=\lim_{n\to\infty}S_n=S.$$
Andernfalls **divergent**.
:::

- $\sum_{k=1}^\infty k$ divergiert: $S_n=\frac{n(n+1)}2\to\infty$.
- Summen und Vielfache konvergenter Reihen konvergieren: $\sum(a_k+b_k)=\sum a_k+\sum b_k$, $\sum\lambda a_k=\lambda\sum a_k$.

## Die geometrische Reihe

:::satz Geometrische Reihe
$$\sum_{k=0}^\infty q^k=1+q+q^2+\dots=\frac1{1-q}\quad\text{für }|q|<1;\qquad\text{divergent für }|q|\ge1.$$
:::
Beweis: $S_n=\frac{1-q^{n+1}}{1-q}$ und $q^{n+1}\to0$ für $|q|<1$.

:::rezept „Verkleidete" geometrische Reihen
1. Summanden in die Form $c\cdot q^k$ bringen (Potenzgesetze).
2. Startindex beachten: $\sum_{k=m}^\infty q^k=\frac{q^m}{1-q}$ („erstes Glied durch $1-q$").
3. Bei Indexverschiebung $k\to k+1$ im Summanden **und** in den Grenzen anpassen.
:::

:::bsp Skript Bsp. 2.6: $\sum_{k=1}^\infty\frac{2^k}{5^{k+1}}$
$=\frac15\sum_{k=1}^\infty\left(\frac25\right)^k=\frac15\cdot\frac{2/5}{1-2/5}=\frac15\cdot\frac23=\frac2{15}$.
:::

### Dezimal- und Binärzahlen sind Reihen

$0{,}\overline3=\sum_{k=1}^\infty3\cdot10^{-k}=3\cdot\frac{1/10}{1-1/10}=\frac13$. Und $0{,}\overline9=\sum9\cdot10^{-k}=1$ – exakt gleich 1!

Allgemein (**b-adische Darstellung**, Basis $b$): $x=d_n b^n+\dots+d_1b+d_0+d_{-1}b^{-1}+d_{-2}b^{-2}+\dots$ mit Ziffern $d_k\in\{0,\dots,b-1\}$.
- $b=10$: Dezimalzahlen. Rationale Zahlen haben endliche oder **periodische** Darstellungen, irrationale unendliche nichtperiodische.
- $b=2$: Binärzahlen, z. B. $\sum_{n=1}^\infty\frac1{2^n}=0{,}\overline1_{(2)}=1$.
- $b=16$: Hexadezimal mit Ziffern $0,\dots,9,A,\dots,F$.

## Die harmonische Reihe

:::satz
$\sum_{k=1}^\infty\frac1k=1+\frac12+\frac13+\dots$ **divergiert** (gegen $\infty$), obwohl $\frac1k\to0$.
:::
*Beweis* durch Gruppieren in Blöcke der Länge $2^{j-1}$:
$$1+\frac12+\underbrace{\frac13+\frac14}_{\ge2\cdot\frac14=\frac12}+\underbrace{\frac15+\dots+\frac18}_{\ge4\cdot\frac18=\frac12}+\dots\quad\Rightarrow\quad S_{2^k}\ge1+\frac k2\to\infty.$$

:::satz Wichtige Vergleichsreihen
$$\sum_{n=1}^\infty\frac1{n^k}\ \text{konvergiert für }k>1,\ \text{divergiert für }k\le1.$$
:::

:::satz Nullfolgenkriterium (Trivialkriterium)
Konvergiert $\sum a_k$, dann ist $(a_k)$ eine **Nullfolge**. Kontraposition: Ist $(a_k)$ **keine** Nullfolge, divergiert die Reihe.
**Achtung:** Die Bedingung ist nur **notwendig, nicht hinreichend** (harmonische Reihe!).
:::

## Alternierende Reihen: Leibniz

:::satz Leibniz-Kriterium
Ist $(a_n)$ **monoton fallend**, $a_n\ge0$ und $a_n\to0$, so konvergiert $\sum_{n=0}^\infty(-1)^na_n$.
:::

:::bsp
$\sum_{k=1}^\infty\frac{(-1)^{k-1}}k=1-\frac12+\frac13-\dots=\ln2$ (konvergiert!), und $\sum_{k=0}^\infty\frac{(-1)^k}{2k+1}=1-\frac13+\frac15-\dots=\frac\pi4$. (Die Werte beweist man später mit Taylor-Reihen.)
:::

## Absolute Konvergenz

:::def
$\sum a_n$ heißt **absolut konvergent**, wenn $\sum|a_n|$ konvergiert.
:::

:::satz
- Absolut konvergent ⇒ konvergent. (Umkehrung falsch: $\sum\frac{(-1)^{n-1}}n$ konvergiert, aber nicht absolut.)
- Absolut konvergente Reihen darf man beliebig **umordnen** – der Wert bleibt.
- Bei nur bedingt konvergenten Reihen kann eine Umordnung den Wert ändern oder sogar Divergenz erzeugen (Riemannscher Umordnungssatz). Beispiel: Ordnet man $1-\frac12+\frac13-\dots$ so um, dass auf jeden negativen Summanden immer längere Blöcke positiver Summanden folgen (jeder Block $>\frac14$), werden die Partialsummen unbeschränkt.
:::

## Konvergenzkriterien

:::satz Majorantenkriterium
Ist $|a_n|\le c_n$ (für $n\ge N$) und $\sum c_n$ konvergent, so ist $\sum a_n$ **absolut konvergent**.
**Minorantenkriterium:** Ist $a_n\ge d_n\ge0$ und $\sum d_n$ divergent, so divergiert $\sum a_n$.
:::

:::satz Quotientenkriterium
Gibt es $\theta<1$ mit $\left|\frac{a_{n+1}}{a_n}\right|\le\theta$ für alle $n\ge n_0$, so konvergiert $\sum a_n$ absolut. Grenzwertform: Existiert $q=\lim\left|\frac{a_{n+1}}{a_n}\right|$, dann
$$q<1:\ \text{absolut konvergent},\qquad q>1:\ \text{divergent},\qquad q=1:\ \text{keine Aussage}.$$
:::
*Beweisidee:* $|a_n|\le|a_{n_0}|\theta^{n-n_0}$ – Vergleich mit der geometrischen Reihe.

:::satz Wurzelkriterium
Existiert $\rho=\lim\sqrt[n]{|a_n|}$, dann: $\rho<1$ absolut konvergent, $\rho>1$ divergent, $\rho=1$ keine Aussage.
:::

:::merke Wann welches Kriterium?
- **Fakultäten**, Produkte, $n!$, $c^n$ → **Quotientenkriterium**.
- Ausdrücke „hoch $n$" wie $\left(\frac{n}{n+1}\right)^{n^2}$ → **Wurzelkriterium**.
- Gebrochenrationale Terme ($\frac{n+1}{n^3+2}$) → **Vergleich** mit $\sum\frac1{n^k}$ (Quotienten- und Wurzelkriterium liefern hier $q=1$!).
- Alternierend mit fallenden Beträgen → **Leibniz**.
- Immer zuerst: Ist $a_n$ überhaupt eine Nullfolge?
:::

:::bsp Walkthrough Quotientenkriterium: $\sum_{n=1}^\infty\frac{n^2}{2^n}$
$\left|\frac{a_{n+1}}{a_n}\right|=\frac{(n+1)^2}{2^{n+1}}\cdot\frac{2^n}{n^2}=\frac12\left(1+\frac1n\right)^2\to\frac12<1$ ⇒ absolut konvergent.
:::

:::bsp Wurzelkriterium
- $\sum\frac1{2^n}$: $\sqrt[n]{1/2^n}=\frac12<1$ ⇒ konvergent (Wert 2 über geometrische Reihe – das Kriterium liefert den Wert **nicht**).
- $\sum\left(\frac1{n-1}\right)^n$ (ab $n=2$): $\sqrt[n]{|a_n|}=\frac1{n-1}\to0$ ⇒ konvergent.
- $\sum\left(\frac{n}{n+1}\right)^{n^2}$: $\sqrt[n]{a_n}=\left(\frac{n}{n+1}\right)^n=\frac1{(1+1/n)^n}\to\frac1\e<1$ ⇒ konvergent.
:::

:::bsp Teleskopreihe
$\sum_{n=1}^\infty\frac1{n(n+1)}=\sum\left(\frac1n-\frac1{n+1}\right)$: $S_N=1-\frac1{N+1}\to1$.
:::

## Das Cauchy-Produkt

:::satz Cauchy-Produkt
Sind $\sum a_n$ und $\sum b_n$ absolut konvergent, so ist mit $c_n=\sum_{k=0}^na_kb_{n-k}=a_0b_n+a_1b_{n-1}+\dots+a_nb_0$ auch $\sum c_n$ absolut konvergent und
$$\sum_{n=0}^\infty c_n=\Big(\sum_{n=0}^\infty a_n\Big)\Big(\sum_{n=0}^\infty b_n\Big).$$
:::
Anschaulich: Ausmultiplizieren und nach „Gesamtgrad" $n$ sortieren – wie beim Multiplizieren von Polynomen. Damit beweist man die Funktionalgleichung der Exponentialfunktion (nächste Lektion).

## Aufgaben (nach Haftmann 9.10–9.33)

:::aufgabe 1 – Folgen (9.10)
Konvergenz? (a) $(-0{,}99999)^n$ (b) $(-1{,}00001)^n$ (c) $(1{,}00001)^n$ (d) $\frac{0{,}01n^6+0{,}1n^5}{100n^5+500n^4+200}$ (e) $\frac{2n^5+3n^4+4n^2+7}{(3n+1)^2(4n^3-3n^2+n+3)}$ (f) $(2^n+(-2)^n)3^{-n}$ (g) $(2^n+(-2)^n)2^{-n}$ (h) $(2^{2n}+(-2)^{2n})2^{-2n}$ (i) $(2^{2n+1}+(-2)^{2n+1})2^{-(2n+1)}$
:::loesung
(a) $|q|<1$ ⇒ $0$. (b) $|q|>1$ ⇒ divergent (alternierend, unbeschränkt). (c) divergent ($\to\infty$) – auch wenn es *sehr* langsam wächst. (d) Grad 6 > 5 ⇒ $\to\infty$. (e) Nenner Grad 5, Leitkoeff. $9\cdot4=36$ ⇒ $\frac2{36}=\frac1{18}$. (f) $(\frac23)^n+(-\frac23)^n\to0$. (g) $1+(-1)^n$: Häufungspunkte 0 und 2 ⇒ divergent. (h) $1+1=2$ ⇒ $2$. (i) $1+(-1)=0$ ⇒ $0$.
:::
:::

:::aufgabe 2 – „∞ − ∞" (9.15–9.17)
(a) $\lim\frac{3n^2}{(n+1)(n+2)}$ (b) $\lim\left(\frac{n^2}{n+1}-\frac{n^3}{(n+1)(n+2)}\right)$ (c) $\lim\left(n-5-\frac{n^3}{n^2+5}\right)$ (d) $\lim\left(\frac{4n^4+2n^3+n^2}{2n^2+n}-2n^2\right)$
:::loesung
(a) $3$. (b) Hauptnenner: $\frac{n^2(n+2)-n^3}{(n+1)(n+2)}=\frac{2n^2}{(n+1)(n+2)}\to2$. (c) $\frac{(n-5)(n^2+5)-n^3}{n^2+5}=\frac{-5n^2+5n-25}{n^2+5}\to-5$. (d) $\frac{4n^4+2n^3+n^2-2n^2(2n^2+n)}{2n^2+n}=\frac{n^2}{2n^2+n}\to\frac12$.
**Merke:** Bei „$\infty-\infty$" erst auf einen Bruch bringen!
:::
:::

:::aufgabe 3 – Geometrische Summen (9.28/9.29)
(a) $\sum_{n=0}^8(\frac12)^n$ (b) $\sum_{n=1}^8(\frac12)^n$ (c) $\sum_{n=9}^{16}(\frac12)^n$ (d) $\sum_{n=0}^\infty(\frac12)^n$ (e) $\sum_{m=2}^\infty2^{-2m}3^m$ (f) $\sum_{m=2}^{50}2^{2m}3^{-m}$
:::loesung
(a) $\frac{1-(1/2)^9}{1/2}=2-\frac1{256}=\frac{511}{256}$. (b) $\frac{511}{256}-1=\frac{255}{256}$. (c) $(\frac12)^9\cdot\frac{1-(1/2)^8}{1/2}=\frac{255}{65536}$. (d) $2$. (e) $\sum_{m\ge2}(\frac34)^m=\frac{(3/4)^2}{1/4}=\frac94$. (f) $\sum_{m=2}^{50}(\frac43)^m=(\frac43)^2\frac{(4/3)^{49}-1}{1/3}=\frac{16}3\left((\tfrac43)^{49}-1\right)$.
:::
:::

:::aufgabe 4 – Folge vs. Reihe (9.33)
Konvergiert die Folge $(a_n)$, konvergiert $\sum a_n$? (a) $(\frac12)^n$ (b) $\frac{100}n$ (c) $\frac{100}{n^2}$ (d) $\frac1{(n+1)(n+2)}$ (e) $\sin(n\frac\pi2)$ (f) $\sqrt{n+1}-\sqrt n$ (g) $n(\sqrt{n+1}-\sqrt n)$
:::loesung
(a) Folge → 0, Reihe konvergiert (2). (b) → 0, Reihe divergiert (Vielfaches der harmonischen). (c) → 0, Reihe konvergiert ($k=2>1$). (d) → 0, Reihe konvergiert (Teleskop, Wert $\sum_{n\ge0}=1$). (e) Folge $0,1,0,-1,\dots$ divergiert ⇒ Reihe divergiert. (f) $=\frac1{\sqrt{n+1}+\sqrt n}\to0$, aber Reihe divergiert (Teleskop: $S_N=\sqrt{N+1}-1\to\infty$). (g) $=\frac{n}{\sqrt{n+1}+\sqrt n}\to\infty$ ⇒ beides divergent.
:::
:::

:::aufgabe 5 – Kriterien
Untersuche (a) $\sum\frac{n!}{n^n}$, (b) $\sum\frac{3^n}{n!}$, (c) $\sum\frac{n+1}{n^3+2}$, (d) $\sum\frac{(-1)^n}{\sqrt n}$.
:::loesung
(a) Quotient: $\frac{(n+1)!\,n^n}{(n+1)^{n+1}n!}=\left(\frac n{n+1}\right)^n\to\frac1\e<1$ ⇒ konvergent. (b) Quotient $\frac3{n+1}\to0$ ⇒ konvergent (Wert $\e^3-1$ ab $n=1$). (c) $\frac{n+1}{n^3+2}\le\frac{2n}{n^3}=\frac2{n^2}$ ⇒ Majorante konvergent. (d) Leibniz: $\frac1{\sqrt n}$ fallend → 0 ⇒ konvergent, aber nicht absolut ($\sum\frac1{\sqrt n}$, $k=\frac12\le1$).
:::
:::

## Karteikarten

:::karte
Wert der geometrischen Reihe $\sum_{k=0}^\infty q^k$?
???
$\frac1{1-q}$ für $|q|<1$, sonst divergent.
:::

:::karte
Ist $a_n\to0$ hinreichend für die Konvergenz von $\sum a_n$?
???
Nein, nur notwendig. Gegenbeispiel: harmonische Reihe $\sum\frac1n$.
:::

:::karte
Für welche $k$ konvergiert $\sum\frac1{n^k}$?
???
Für $k>1$.
:::

:::karte
Quotientenkriterium (Grenzwertform)?
???
$q=\lim|a_{n+1}/a_n|$: $q<1$ absolut konvergent, $q>1$ divergent, $q=1$ keine Aussage.
:::

:::karte
Leibniz-Kriterium?
???
$a_n\ge0$ monoton fallend, $a_n\to0$ ⇒ $\sum(-1)^na_n$ konvergiert.
:::

:::karte
Was bringt absolute Konvergenz?
???
Konvergenz, beliebige Umordnung erlaubt, Cauchy-Produkt anwendbar.
:::

:::karte
Wert von $0{,}\overline9$?
???
Genau 1 (geometrische Reihe $\sum9\cdot10^{-k}$).
:::
