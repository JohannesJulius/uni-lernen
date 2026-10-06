---
title: Potenzreihen – Exponentialfunktion, Sinus, Kosinus, Logarithmus, allgemeine Potenzen
chapter: 3 Analysis
minutes: 110
sources: Mathe 1/IngMath1_slides_3_ana_03_Potenzreihen_1_Exponentialreihe.pdf; Mathe 1/IngMath1_slides_3_ana_07_differenzierbarkeit_exponentialreihe.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#78
---

:::ziel
- Potenzreihen und ihren **Konvergenzradius** verstehen und berechnen.
- Die **Exponentialreihe** definieren, ihre Konvergenz zeigen und die **Funktionalgleichung** $\e^{x+y}=\e^x\e^y$ (Cauchy-Produkt) herleiten.
- Sinus und Kosinus als Potenzreihen; Euler-Formel.
- Natürlicher Logarithmus als Umkehrfunktion, Logarithmengesetze, $a^x$ und $\log_a$, Hyperbelfunktionen.
- Funktionswerte mit Partialsummen annähern.
:::

## Potenzreihen

:::def Potenzreihe
$$\sum_{k=0}^\infty a_k(x-x_0)^k=a_0+a_1(x-x_0)+a_2(x-x_0)^2+\dots$$
heißt Potenzreihe mit **Koeffizienten** $a_k$ und **Entwicklungspunkt** $x_0$ (meist $x_0=0$). Auch mit $z\in\C$.
:::

Eine Potenzreihe ist ein „unendlich langes Polynom". Beispiel: die geometrische Reihe $\sum x^k=\frac1{1-x}$ für $|x|<1$.

:::satz Konvergenzradius
Konvergiert eine Potenzreihe für ein $x_1\ne x_0$, dann konvergiert sie absolut für alle $|x-x_0|<|x_1-x_0|$. Daher gibt es einen **Konvergenzradius** $r\in[0,\infty]$:
- $|x-x_0|<r$: absolut konvergent,
- $|x-x_0|>r$: divergent,
- $|x-x_0|=r$ (Rand): keine allgemeine Aussage, einzeln prüfen!

Im Komplexen ist der Konvergenzbereich eine Kreisscheibe (daher „Radius").
:::

:::formel Berechnung des Konvergenzradius
$$r=\lim_{k\to\infty}\left|\frac{a_k}{a_{k+1}}\right|\qquad\text{oder}\qquad r=\frac1{\lim\sqrt[k]{|a_k|}}$$
(falls die Grenzwerte existieren; folgt aus Quotienten-/Wurzelkriterium). Achtung: Beim Quotienten steht $a_k$ **oben**!
:::

:::bsp
- $\sum\frac{x^k}{k}$: $r=\lim\frac{k+1}k=1$. Rand $x=1$: harmonische Reihe, divergent; $x=-1$: Leibniz, konvergent. Konvergenzbereich $[-1,1)$.
- $\sum k!\,x^k$: $r=\lim\frac1{k+1}=0$ – konvergiert nur in $x=0$.
- $\sum\frac{(x+2)^k}{2^k}$: $r=2$ um $x_0=-2$, also auf $(-4,0)$.
:::

## Die Exponentialreihe

:::def Exponentialfunktion
$$\exp(x)=\sum_{n=0}^\infty\frac{x^n}{n!}=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+\dots$$
:::

:::satz Konvergenz für alle $x$
Quotientenkriterium: $\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x|^{n+1}n!}{(n+1)!\,|x|^n}=\frac{|x|}{n+1}\le\frac12$ für $n\ge2|x|$. Also konvergiert die Reihe für **jedes** $x\in\R$ (und $\C$) absolut: Konvergenzradius $r=\infty$.
:::

:::satz Funktionalgleichung
$$\exp(x)\cdot\exp(y)=\exp(x+y)\qquad\text{für alle }x,y.$$
:::
*Beweis* mit Cauchy-Produkt und binomischem Lehrsatz:
$$c_n=\sum_{k=0}^n\frac{x^k}{k!}\cdot\frac{y^{n-k}}{(n-k)!}=\frac1{n!}\sum_{k=0}^n\binom nkx^ky^{n-k}=\frac{(x+y)^n}{n!}.\ ∎$$

:::satz Weitere Eigenschaften
1. $\exp'(x)=\exp(x)$ (gliedweise ableiten, s. u.) und $\exp(0)=1$; $\exp$ ist die **einzige** Funktion mit dieser Eigenschaft.
2. $\exp(-x)=\frac1{\exp(x)}$ (denn $\exp(x)\exp(-x)=\exp(0)=1$).
3. $\exp(x)>0$ für alle $x$; streng monoton wachsend; $\exp(x)>1+x$ für $x>0$; $\lim_{x\to\infty}\exp x=\infty$, $\lim_{x\to-\infty}\exp x=0$.
4. **Eulersche Zahl** $\e:=\exp(1)=\sum\frac1{n!}=2{,}71828\dots$ (stimmt mit $\lim(1+\frac1n)^n$ überein).
5. $\exp(n)=\e^n$, $\exp(\frac mn)=\e^{m/n}$ – deshalb **definiert** man für alle reellen $x$: $\e^x:=\exp(x)$.
:::

:::bsp Walkthrough: $\e$ mit vier Gliedern
$\e\approx\frac1{0!}+\frac1{1!}+\frac1{2!}+\frac1{3!}=1+1+0{,}5+0{,}1\overline6=2{,}\overline6$. Fehler ≈ 0,05. Wegen der Fakultäten werden die Glieder sehr schnell klein: das nächste ist $\frac1{24}\approx0{,}042$; mit 10 Gliedern hat man schon 7 korrekte Stellen. So rechnen Taschenrechner.
:::

## Gliedweises Differenzieren

:::satz
Eine Potenzreihe $f(x)=\sum a_kx^k$ mit Radius $r$ ist auf $(-r,r)$ stetig und differenzierbar, und man darf **gliedweise** ableiten:
$$f'(x)=\sum_{k=1}^\infty ka_kx^{k-1}\quad(\text{gleicher Konvergenzradius}).$$
:::

:::bsp
- $\exp'(x)=\sum_{n\ge1}\frac{nx^{n-1}}{n!}=\sum_{n\ge1}\frac{x^{n-1}}{(n-1)!}=\exp(x)$.
- $\sin'(x)=\cos x$ (gliedweise, s. u.).
- Trick: $\sum_{n\ge0}q^n=\frac1{1-q}$ ableiten ⇒ $\sum_{n\ge1}nq^{n-1}=\sum_{n\ge0}(n+1)q^n=\frac1{(1-q)^2}$ für $|q|<1$.
:::

## Sinus und Kosinus

:::def
$$\sin x=\sum_{k=0}^\infty(-1)^k\frac{x^{2k+1}}{(2k+1)!}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\dots,\qquad\cos x=\sum_{k=0}^\infty(-1)^k\frac{x^{2k}}{(2k)!}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\dots$$
Beide konvergieren für alle $x$ (Quotientenkriterium wie bei exp).
:::

- Mit $\mathrm i^2=-1$ folgt durch Einsetzen von $\mathrm ix$ in die Exponentialreihe die **Euler-Formel** $\e^{\mathrm ix}=\cos x+\mathrm i\sin x$.
- Je mehr Terme, desto besser die Näherung: $\sin x\approx x$ (kleine Winkel – **Pendel-Linearisierung**!), $\sin x\approx x-\frac{x^3}6$, … Auch in der Optik (Seidel-Aberrationen).
- Die komplexe Exponentialfunktion $\exp(z)=\sum\frac{z^n}{n!}$ ist für alle $z\in\C$ definiert.

## Der natürliche Logarithmus

$\exp:\R\to(0,\infty)$ ist streng monoton und surjektiv, also **bijektiv**. Die Umkehrfunktion heißt **natürlicher Logarithmus**:
$$\ln:(0,\infty)\to\R,\qquad\ln(\e^x)=x,\quad\e^{\ln y}=y\ (y>0).$$

:::satz Logarithmengesetze
$\ln1=0$, $\ln\e=1$, $\ln(ab)=\ln a+\ln b$, $\ln\frac ab=\ln a-\ln b$, $\ln(a^n)=n\ln a$, $\ln\frac1a=-\ln a$. Ableitung: $\ln'(y)=\frac1y$.
:::
*Beweis* von $\ln(ab)=\ln a+\ln b$: $\e^{\ln a+\ln b}=\e^{\ln a}\e^{\ln b}=ab$; anwenden von $\ln$ auf beiden Seiten.

## Allgemeine Potenzen und Logarithmen

:::def
Für $a>0$, $x\in\R$: $\quad a^x:=\e^{x\ln a},\qquad\log_a y:=\frac{\ln y}{\ln a}$.
:::
Das ist verträglich mit den bekannten Potenzgesetzen: $a^xa^y=a^{x+y}$, $(a^x)^y=a^{xy}$, $a^xb^x=(ab)^x$, $a^{1/n}=\sqrt[n]a$. $\log_a$ ist die Umkehrfunktion von $a^x$. Ableitung (Kettenregel): $(a^x)'=\ln a\cdot a^x$.

:::achtung
$a^x$ ist nur für $a>0$ so definiert. $\ln(a+b)\ne\ln a+\ln b$! $\ln$ ist nur für positive Argumente definiert.
:::

## Hyperbelfunktionen

$$\sinh x=\frac{\e^x-\e^{-x}}2,\qquad\cosh x=\frac{\e^x+\e^{-x}}2$$
sind der ungerade bzw. gerade Anteil von $\e^x$ ($\e^x=\cosh x+\sinh x$). Es gilt $\sinh'=\cosh$, $\cosh'=\sinh$ und $\cosh^2t-\sinh^2t=1$. (Seilkurve/Kettenlinie in der Statik: $y=a\cosh\frac xa$.)

## Aufgaben

:::aufgabe 1
Bestimme Konvergenzradius und -bereich von $\sum_{k=1}^\infty\frac{2k!+1}{k!}(x+2)^k$.
:::loesung
$a_k=\frac{2k!+1}{k!}=2+\frac1{k!}\to2$, also $\left|\frac{a_k}{a_{k+1}}\right|\to1$ ⇒ $r=1$ um $x_0=-2$: absolute Konvergenz auf $(-3,-1)$. Ränder: $x=-1$: $\sum a_k\cdot1^k$, Glieder $\to2\ne0$ ⇒ divergent; $x=-3$: $\sum a_k(-1)^k$, Glieder keine Nullfolge ⇒ divergent. Bereich $(-3,-1)$.
:::
:::

:::aufgabe 2
Zeige mit dem Quotientenkriterium, dass die Sinusreihe für alle $x$ konvergiert.
:::loesung
$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x|^{2n+3}(2n+1)!}{(2n+3)!\,|x|^{2n+1}}=\frac{x^2}{(2n+2)(2n+3)}\to0<1$. ∎
:::
:::

:::aufgabe 3
Vereinfache: $\ln(\e^3)$, $\e^{2\ln 5}$, $\log_2 32$, $\ln\sqrt{\e}$, $\log_{10}(0{,}001)$.
:::loesung
$3$; $25$; $5$; $\frac12$; $-3$.
:::
:::

:::aufgabe 4
Löse $3\cdot2^x=48$ und $\e^{2x}-3\e^x+2=0$.
:::loesung
$2^x=16\Rightarrow x=4$. Substitution $u=\e^x$: $u^2-3u+2=0\Rightarrow u\in\{1,2\}\Rightarrow x\in\{0,\ln2\}$.
:::
:::

:::aufgabe 5
Zeige $\cosh^2t-\sinh^2t=1$ und bestimme die Umkehrfunktion von $\sinh$.
:::loesung
$\cosh^2-\sinh^2=(\cosh-\sinh)(\cosh+\sinh)=\e^{-t}\e^t=1$.
Umkehrung: $y=\frac{\e^x-\e^{-x}}2$, mit $u=\e^x$: $u^2-2yu-1=0\Rightarrow u=y+\sqrt{y^2+1}$ (positive Lösung) ⇒ $\operatorname{arsinh}y=\ln\left(y+\sqrt{y^2+1}\right)$.
:::
:::

## Karteikarten

:::karte
Exponentialreihe?
???
$\e^x=\sum_{n=0}^\infty\frac{x^n}{n!}$, konvergiert für alle $x$.
:::

:::karte
Reihen für $\sin x$ und $\cos x$?
???
$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\dots$, $\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\dots$
:::

:::karte
Konvergenzradius einer Potenzreihe (Quotientenformel)?
???
$r=\lim\left|\frac{a_k}{a_{k+1}}\right|$; Ränder einzeln untersuchen.
:::

:::karte
Definition $a^x$ und $\log_a y$?
???
$a^x=\e^{x\ln a}$ ($a>0$); $\log_ay=\frac{\ln y}{\ln a}$.
:::

:::karte
Wie beweist man $\e^{x+y}=\e^x\e^y$?
???
Cauchy-Produkt der Exponentialreihen + binomischer Lehrsatz.
:::

:::karte
Darf man Potenzreihen gliedweise ableiten?
???
Ja, im Inneren des Konvergenzbereichs; der Konvergenzradius bleibt gleich.
:::
