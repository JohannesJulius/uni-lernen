---
title: Funktionen, Grenzwerte & Stetigkeit – Zwischenwertsatz, Polynome, Horner-Schema
chapter: 3 Analysis
minutes: 130
sources: Mathe 1/IngMath1_slides_3_ana_04_funktionen_stetigkeit.pdf; Mathe 1/IngMath1_slides_3_ana_04_UE_funktionen_grenzwert_stetigkeit.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#45; Mathe 1 + 2 neu/skript_m1_m2.pdf#53
---

:::ziel
- Reelle Funktionen: Definitionsbereich, Bild, Graph, Beschränktheit, Monotonie, Symmetrie, Umkehrfunktion.
- Polynome: Nullstellen abspalten (Polynomdivision), **Horner-Schema**.
- **Grenzwerte von Funktionen** (auch einseitig, im Unendlichen) berechnen.
- **Stetigkeit** über Folgen und mit dem **ε-δ-Kriterium**; Sprungstellen, stetige Ergänzung.
- **Zwischenwertsatz**, Nullstellensatz, Satz vom Maximum/Minimum; Kompaktheit; gleichmäßige und Lipschitz-Stetigkeit.
:::

## Reelle Funktionen

:::def
Eine reelle Funktion ist eine Abbildung $f:D\to\R$, $D\subset\R$. $D$ = **Definitionsbereich** (nur $x$, für die $f(x)$ auswertbar ist!), $f(D)$ = **Bild**, $\Gamma_f=\{(x,f(x))\mid x\in D\}$ = **Graph**.
:::

Beispiele: Polynome $p(x)=a_nx^n+\dots+a_0$; Betrag $|x|$; positiver Anteil $(x)_+=\frac{x+|x|}2$; $\frac1x$ auf $\R\setminus\{0\}$.

**Eigenschaften:**
- **beschränkt**: $|f(x)|\le K$ für alle $x\in D$ (bzw. nach oben/unten beschränkt).
- **monoton wachsend**: $x_1<x_2\Rightarrow f(x_1)\le f(x_2)$; **streng**: $<$. Analog fallend.
- **gerade** (achsensymmetrisch): $f(-x)=f(x)$, z. B. $x^2,\cos x,|x|$. **Ungerade** (punktsymmetrisch): $f(-x)=-f(x)$, z. B. $x^3,\sin x$.
- **Umkehrfunktion** $f^{-1}$ existiert, wenn $f:D\to W$ bijektiv ist: $f^{-1}(f(x))=x$, $f(f^{-1}(y))=y$. Graph: Spiegelung an $y=x$. **Streng monotone Funktionen sind injektiv**, also auf ihr Bild umkehrbar. Achtung: $f^{-1}\ne\frac1f$!

Beispiele für Umkehrfunktionen: $\sqrt[k]x$ zu $x^k$ auf $[0,\infty)$; $\ln$ zu $\exp$; $x^p:=\e^{p\ln x}$ für $x>0$.

:::bsp Walkthrough (Skript 3.8): $f:\R\setminus\{1\}\to\R\setminus\{1\}$, $f(x)=\frac{x+1}{x-1}$
**Injektiv:** $\frac{x_1+1}{x_1-1}=\frac{x_2+1}{x_2-1}\Rightarrow(x_1+1)(x_2-1)=(x_2+1)(x_1-1)\Rightarrow-x_1+x_2=-x_2+x_1\Rightarrow x_1=x_2$.
**Surjektiv:** $y=\frac{x+1}{x-1}\Rightarrow x(y-1)=y+1\Rightarrow x=\frac{y+1}{y-1}$ – existiert für $y\ne1$, und $x\ne1$ (sonst $y+1=y-1$). ⇒ bijektiv, $f^{-1}(y)=\frac{y+1}{y-1}$ (also $f^{-1}=f$!).
:::

## Polynome und das Horner-Schema

Ist $x_1$ Nullstelle eines Polynoms $p_n$ vom Grad $n$, gilt $p_n(x)=(x-x_1)p_{n-1}(x)$; $p_{n-1}$ erhält man per **Polynomdivision**.

:::bsp $p_3(x)=x^3-2x-1$
Raten: $x_1=-1$ ($-1+2-1=0$). $(x^3+0x^2-2x-1):(x+1)=x^2-x-1$. Dessen Nullstellen $\frac{1\pm\sqrt5}2$. Also $p_3(x)=(x+1)\left(x-\frac{1+\sqrt5}2\right)\left(x-\frac{1-\sqrt5}2\right)$.
:::

:::merke Horner-Schema
Statt $a_nx^n+\dots+a_1x+a_0$ (naiv: $n$ Additionen, $\frac{n(n+1)}2$ Multiplikationen) rechnet man
$$p(x)=a_0+x\big(a_1+x(a_2+\dots+x(a_{n-1}+xa_n)\dots)\big)$$
– nur $n$ Multiplikationen und $n$ Additionen, und weniger Rundungsfehler. Für $n=10$: 55 statt 10 Multiplikationen.
Tabellarisch: Koeffizienten in eine Zeile; „runterholen, mal $x$, addieren". Die letzte Zahl ist $p(x)$, die anderen sind die Koeffizienten von $p(x):(x-x_0)$!
:::

:::bsp Horner für $p(x)=2x^3-3x^2+0x+5$ an $x_0=2$
| | 2 | −3 | 0 | 5 |
|---|---|---|---|---|
| $+x_0\cdot$ | | 4 | 2 | 4 |
| | 2 | 1 | 2 | **9** |
$p(2)=9$ (Probe: $16-12+0+5=9$ ✓). Außerdem $p(x)=(x-2)(2x^2+x+2)+9$.
:::

## Grenzwerte von Funktionen

:::def Grenzwert einer Funktion
$\lim_{x\to a}f(x)=c$, falls für **jede** Folge $x_n\to a$ (mit $x_n\in D$, $x_n\ne a$) gilt $f(x_n)\to c$.
- **Einseitig:** $\lim_{x\nearrow a}$ (von links, $x_n<a$), $\lim_{x\searrow a}$ (von rechts).
- **Im Unendlichen:** $\lim_{x\to\infty}f(x)=c$, falls $f(x_n)\to c$ für jede Folge $x_n\to\infty$.
:::

Für Grenzwerte von Funktionen gelten dieselben Grenzwertsätze wie für Folgen (Summe, Produkt, Quotient mit Nenner $\ne0$).

:::rezept Grenzwerte berechnen
1. **Einsetzen** – klappt bei stetigen Funktionen.
2. „$\frac00$" bei rationalen Funktionen: **Faktorisieren und kürzen** (gemeinsame Nullstelle).
3. „$\infty-\infty$": auf **einen Bruch** bringen.
4. $x\to\infty$ bei rationalen Funktionen: durch höchste Potenz des Nenners teilen.
5. Beschränkt mal Nullfolge → 0 (**Einschnürung**).
6. Später: **L'Hospital** und Taylor.
:::

:::satz Wichtiger Standardgrenzwert
$$\lim_{x\to0}\frac{\sin x}{x}=1\qquad\left(\text{geometrisch: }\sin x\le x\le\tan x\text{ für kleine }x>0\right).$$
:::

## Stetigkeit

:::def Stetigkeit (Folgenkriterium)
$f:D\to\R$ ist **stetig in $a\in D$**, wenn für jede Folge $x_n\to a$ in $D$ gilt $f(x_n)\to f(a)$, kurz
$$\lim_{x\to a}f(x)=f(a).$$
$f$ heißt stetig, wenn es in jedem Punkt von $D$ stetig ist. Anschaulich: Graph ohne Absetzen zeichnen (auf Intervallen).
:::

:::def ε-δ-Kriterium (äquivalent)
$f$ ist stetig in $a$, wenn
$$\forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:\ |x-a|<\delta\Rightarrow|f(x)-f(a)|<\varepsilon.$$
Bild: Zu jedem noch so schmalen Toleranzschlauch $f(a)\pm\varepsilon$ gibt es ein Intervall $a\pm\delta$, dessen Funktionswerte im Schlauch bleiben. An einer Sprungstelle scheitert das.
:::

:::bsp
- Konstante, Identität: stetig. $f(x)=\lambda x$: $|f(x)-f(a)|=|\lambda||x-a|<\varepsilon$ für $\delta=\frac\varepsilon{|\lambda|}$.
- $f(x)=2x+1$: $\delta=\frac\varepsilon2$.
- $|x|$ ist stetig (auch in 0), da $\big||x|-|a|\big|\le|x-a|$.
- **Heaviside** $H(x)=1$ für $x>0$, $0$ sonst: in 0 **unstetig** (links Grenzwert 0, rechts 1).
- **Dirichlet** $\mathbb 1_\Q(x)$ (1 für rationale, 0 für irrationale $x$): nirgends stetig.
- Treppenfunktionen $\sum f_k\mathbb 1_{[a_k,b_k)}$: unstetig an den Sprungstellen.
:::

:::merke Stetigkeit über einseitige Grenzwerte
$f$ ist stetig in $a$ ⇔ linksseitiger und rechtsseitiger Grenzwert existieren und sind beide gleich $f(a)$.
:::

:::satz Rechenregeln
Sind $f,g$ stetig in $a$, so auch $f+g$, $\lambda f$, $f\cdot g$, und $\frac fg$ (falls $g(a)\ne0$). Verkettungen stetiger Funktionen sind stetig. Damit sind **Polynome, rationale Funktionen (außerhalb der Nennernullstellen), exp, ln, sin, cos, Wurzeln, Betrag** und alle daraus zusammengesetzten Funktionen stetig auf ihrem Definitionsbereich. Die stetigen Funktionen auf einem Intervall bilden einen **Vektorraum**.
:::

### Stetige Ergänzung

Ist $a\notin D$, aber $\lim_{x\to a}f(x)=c$ existiert, kann man $f$ durch $f(a):=c$ **stetig ergänzen** (Definitionslücke „heben").

:::bsp
- $f(x)=\frac{x^2-1}{x-1}=x+1$ für $x\ne1$ ⇒ stetig ergänzbar durch $f(1)=2$.
- $\sin\frac1x$: in 0 **nicht** stetig ergänzbar (oszilliert zwischen ±1).
- $x\sin\frac1x$: $|x\sin\frac1x|\le|x|\to0$ ⇒ ergänzbar durch 0.
- $\frac{\sin x}x$: ergänzbar durch 1.
:::

## Die großen Sätze über stetige Funktionen

:::satz Lokale Vorzeichenbeständigkeit
Ist $f$ stetig in $a$ und $f(a)>0$, dann ist $f(x)>0$ in einer ganzen Umgebung $(a-\delta,a+\delta)$. (Wähle $\varepsilon=\frac{f(a)}2$.)
:::

:::satz Nullstellensatz (Bolzano)
$f:[a,b]\to\R$ stetig, $f(a)<0<f(b)$ (Vorzeichenwechsel) ⇒ es gibt $p\in(a,b)$ mit $f(p)=0$.
:::

:::satz Zwischenwertsatz
$f:[a,b]\to\R$ stetig ⇒ $f$ nimmt **jeden Wert $c$ zwischen $f(a)$ und $f(b)$** an. Folgerung: Stetige Funktionen bilden Intervalle auf Intervalle ab.
:::

Anwendung: **Bisektionsverfahren** (Intervallhalbierung) zur Nullstellensuche – siehe Numerik.

:::bsp
$f(x)=x^3+x-1$: $f(0)=-1<0$, $f(1)=1>0$ ⇒ Nullstelle in $(0,1)$. $f(0{,}5)=-0{,}375$ ⇒ in $(0{,}5;1)$. $f(0{,}75)\approx0{,}17$ ⇒ in $(0{,}5;0{,}75)$ usw.
:::

### Kompakte Mengen und Extremwerte

- $M\subset\R$ heißt **abgeschlossen**, wenn jede in $\R$ konvergente Folge aus $M$ ihren Grenzwert in $M$ hat. $[a,b]$ ist abgeschlossen; $(0,1)$ nicht ($\frac1n\to0\notin(0,1)$).
- **beschränkt**: $|x|\le K$ für alle $x\in M$. **Kompakt** (in ℝ bzw. $\R^n$): abgeschlossen **und** beschränkt.
- Supremum/Infimum = kleinste obere/größte untere Schranke. Gehören sie zur Menge, heißen sie **Maximum/Minimum**. Bei kompakten Mengen ist das immer so.

:::satz Satz vom Maximum und Minimum (Weierstraß)
Ist $f:[a,b]\to\R$ stetig, so ist $f([a,b])$ kompakt, und $f$ nimmt auf $[a,b]$ ein **Maximum und ein Minimum** an.
:::

:::bsp Warum die Voraussetzungen nötig sind
- $f(x)=x$ auf $(0,1)$: weder Max noch Min (Intervall nicht abgeschlossen).
- $f(x)=x+1$ für $x<0$, $x-1$ für $x\ge0$ auf $[-1,1]$: nimmt das Supremum 1 nicht an (nicht stetig).
:::

## Verschärfte Stetigkeitsbegriffe

- **Gleichmäßig stetig:** $\forall\varepsilon\ \exists\delta$ (unabhängig von der Stelle!) $\forall x,y: |x-y|<\delta\Rightarrow|f(x)-f(y)|<\varepsilon$. Beispiel: $x^2$ ist auf $[0,1]$ gleichmäßig stetig, auf $\R$ nicht.
- **Lipschitz-stetig:** $|f(x)-f(y)|\le L|x-y|$ mit Konstante $L$. (Wichtig in der Numerik/DGL: garantiert eindeutige Lösbarkeit von Anfangswertproblemen.)
- Lipschitz ⇒ gleichmäßig stetig ⇒ stetig.

## Aufgaben (u. a. UE 12.1)

:::aufgabe 1
Berechne: (a) $\lim_{x\to1}\frac{1-x}{1-x^2}$ (b) $\lim_{x\to2}\left(\frac1{x-2}-\frac{12}{x^3-8}\right)$ (c) $\lim_{x\to\infty}\frac{x^2+2x+3}{4x^2+5x+6}$ (d) $\lim_{x\to\infty}\frac{(2x-3)^{10}(3x+2)^5}{(2x+1)^{15}}$ (e) $\lim_{x\to\infty}\frac{2+\sin x}{\sqrt x}$ (f) $\lim_{x\to0}\frac{\sin(3x)}{x}$
:::loesung
(a) $\frac{1-x}{(1-x)(1+x)}=\frac1{1+x}\to\frac12$.
(b) $x^3-8=(x-2)(x^2+2x+4)$: $\frac{x^2+2x+4-12}{(x-2)(x^2+2x+4)}=\frac{(x-2)(x+4)}{(x-2)(x^2+2x+4)}=\frac{x+4}{x^2+2x+4}\to\frac6{12}=\frac12$.
(c) $\frac14$. (d) Leitkoeffizienten: $\frac{2^{10}3^5}{2^{15}}=\frac{243}{32}$.
(e) Zähler zwischen 1 und 3 (beschränkt), $\frac1{\sqrt x}\to0$ ⇒ $0$.
(f) $3\cdot\frac{\sin(3x)}{3x}\to3$.
:::
:::

:::aufgabe 2
Für welches $c$ ist $f(x)=\begin{cases}x^2+c,&x<1\\2x,&x\ge1\end{cases}$ stetig?
:::loesung
Links: $1+c$, rechts: $2$ ⇒ $c=1$.
:::
:::

:::aufgabe 3
Zeige, dass $x=\cos x$ eine Lösung in $[0,\frac\pi2]$ hat.
:::loesung
$f(x)=x-\cos x$ ist stetig, $f(0)=-1<0$, $f(\frac\pi2)=\frac\pi2>0$ ⇒ Nullstellensatz.
:::
:::

:::aufgabe 4
Werte $p(x)=x^4-3x^3+2x-5$ mit Horner an $x=3$ aus.
:::loesung
Koeffizienten $1,-3,0,2,-5$: $1\to1\cdot3-3=0\to0\cdot3+0=0\to0\cdot3+2=2\to2\cdot3-5=1$. $p(3)=1$ (Probe: $81-81+6-5=1$ ✓).
:::
:::

## Karteikarten

:::karte
Folgendefinition der Stetigkeit?
???
$f$ stetig in $a$ ⇔ für jede Folge $x_n\to a$ gilt $f(x_n)\to f(a)$, d. h. $\lim_{x\to a}f(x)=f(a)$.
:::

:::karte
ε-δ-Definition der Stetigkeit?
???
$\forall\varepsilon>0\ \exists\delta>0: |x-a|<\delta\Rightarrow|f(x)-f(a)|<\varepsilon$.
:::

:::karte
Zwischenwertsatz?
???
$f$ stetig auf $[a,b]$ ⇒ jeder Wert zwischen $f(a)$ und $f(b)$ wird angenommen.
:::

:::karte
Satz vom Maximum/Minimum?
???
Stetige Funktionen auf kompakten Intervallen $[a,b]$ nehmen Max und Min an.
:::

:::karte
$\lim_{x\to0}\frac{\sin x}x=\,?$
???
1
:::

:::karte
Was ist das Horner-Schema?
???
$p(x)=a_0+x(a_1+x(a_2+\dots+x a_n))$ – nur $n$ Multiplikationen; liefert nebenbei $p(x):(x-x_0)$.
:::

:::karte
Wann ist eine Definitionslücke stetig ergänzbar?
???
Wenn $\lim_{x\to a}f(x)$ existiert (endlich); dann $f(a):=$ Grenzwert.
:::
