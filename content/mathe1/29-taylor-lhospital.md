---
title: Taylorpolynome & die Regel von L'Hospital
chapter: 3 Analysis
minutes: 110
sources: Mathe 1/IngMath1_slides_3_ana_06_differenzierbarkeit_taylorapprox_lhospital.pdf; Mathe 1/IngMath1_slides_3_ana_07_differenzierbarkeit_exponentialreihe.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#231
---

:::ziel
- Linearisierung $f(x)\approx f(x_0)+f'(x_0)(x-x_0)$ und ihr Fehlerverhalten verstehen.
- **Taylorpolynome** beliebigen Grades aufstellen; Restglied (Lagrange-Form) zur **Fehlerabschätzung** nutzen.
- Standard-Taylorreihen ($\e^x$, $\sin$, $\cos$, $\ln(1+x)$, $\frac1{1-x}$, $(1+x)^\alpha$) kennen.
- Grenzwerte vom Typ $\frac00$, $\frac\infty\infty$ (und umformbare Typen) mit **L'Hospital** berechnen.
:::

## Die Ableitung als Linearisierung

Definiert man $\varphi(x)=f(x)-f(x_0)-f'(x_0)(x-x_0)$, so gilt
$$f(x)=\underbrace{f(x_0)+f'(x_0)(x-x_0)}_{\text{Tangente}}+\varphi(x),\qquad\lim_{x\to x_0}\frac{\varphi(x)}{x-x_0}=\lim\frac{f(x)-f(x_0)}{x-x_0}-f'(x_0)=0.$$
Der Fehler geht **schneller** gegen 0 als $x-x_0$ (man schreibt $o(x-x_0)$). Die Tangente ist die beste Gerade. Eine Parabel, die zusätzlich die Krümmung trifft, ist noch besser – usw.

## Taylorpolynom

:::def Taylorpolynom
Ist $f$ $n$-mal differenzierbar in $x_0$, so heißt
$$T_n(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\dots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$
das **$n$-te Taylorpolynom** von $f$ im **Entwicklungspunkt** $x_0$. Es stimmt mit $f$ in $x_0$ in Funktionswert und den ersten $n$ Ableitungen überein.
:::

:::satz Satz von Taylor (mit Restglied)
Ist $f$ $(n+1)$-mal stetig differenzierbar, dann gilt $f(x)=T_n(x)+R_{n+1}(x)$ mit
$$R_{n+1}(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}\quad\text{für ein }\xi\text{ zwischen }x_0\text{ und }x\quad\text{(Lagrange-Form)}$$
oder in Integralform $R_{n+1}(x)=\frac1{n!}\int_{x_0}^x(x-t)^nf^{(n+1)}(t)\,\d t$.
**Fehlerabschätzung:** $|R_{n+1}(x)|\le\frac{\max|f^{(n+1)}|}{(n+1)!}|x-x_0|^{n+1}$ – klein, wenn $x$ nahe $x_0$ und $n$ groß.
:::

Ist $f$ selbst ein Polynom vom Grad $k$, so ist $T_k=f$ (Restglied 0). Für $\exp$ ist $T_n$ genau die $n$-te Partialsumme der Exponentialreihe.

:::rezept Taylorpolynom berechnen
1. Ableitungen $f,f',f'',\dots,f^{(n)}$ bilden (Muster suchen!).
2. In $x_0$ auswerten.
3. Koeffizienten $a_k=\frac{f^{(k)}(x_0)}{k!}$.
4. $T_n(x)=\sum a_k(x-x_0)^k$ – **nicht ausmultiplizieren**, die Form $(x-x_0)^k$ stehen lassen.
:::

:::bsp Walkthrough: $\cos x$ in $x_0=0$, Grad 3
$f(0)=1$, $f'(0)=-\sin0=0$, $f''(0)=-\cos0=-1$, $f'''(0)=\sin0=0$ ⇒ $T_3(x)=1-\frac{x^2}2$ (gleich $T_2$, weil $f'''(0)=0$).
:::

:::bsp $\ln x$ in $x_0=1$
$f^{(n)}(x)=(-1)^{n+1}(n-1)!\,x^{-n}$, also $f^{(n)}(1)=(-1)^{n+1}(n-1)!$ und $\frac{f^{(n)}(1)}{n!}=\frac{(-1)^{n+1}}n$:
$$T_n(x)=(x-1)-\frac{(x-1)^2}2+\frac{(x-1)^3}3-\dots+(-1)^{n+1}\frac{(x-1)^n}n.$$
$\ln(1{,}1)\approx T_5(1{,}1)=0{,}1-0{,}005+0{,}000\overline3-0{,}000025+0{,}000002=0{,}0953103$ (exakt $0{,}0953102$).
:::

:::bsp Linearisierung in der Flugmechanik
Kleine Winkel (Small Perturbation Theory): $\sin\alpha\approx\alpha$, $\cos\alpha\approx1$ (Taylor Grad 1 um 0). Damit werden nichtlineare Bewegungsgleichungen linear und regelungstechnisch behandelbar. Ebenso beim **Pendel**: $\ddot\varphi=-\frac gl\sin\varphi\approx-\frac gl\varphi$.
:::

:::merke Wichtige Taylorreihen um 0 (Maclaurin)
| Funktion | Reihe | gültig für |
|---|---|---|
| $\e^x$ | $1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\dots$ | alle $x$ |
| $\sin x$ | $x-\frac{x^3}{3!}+\frac{x^5}{5!}-\dots$ | alle $x$ |
| $\cos x$ | $1-\frac{x^2}{2!}+\frac{x^4}{4!}-\dots$ | alle $x$ |
| $\ln(1+x)$ | $x-\frac{x^2}2+\frac{x^3}3-\dots$ | $-1<x\le1$ |
| $\frac1{1-x}$ | $1+x+x^2+x^3+\dots$ | $\lvert x\rvert<1$ |
| $(1+x)^\alpha$ | $1+\alpha x+\binom\alpha2x^2+\dots$ | $\lvert x\rvert<1$ |
| $\sqrt{1+x}$ | $1+\frac x2-\frac{x^2}8+\dots$ | $\lvert x\rvert<1$ |
| $\arctan x$ | $x-\frac{x^3}3+\frac{x^5}5-\dots$ | $\lvert x\rvert\le1$ |
Daraus: $\ln2=1-\frac12+\frac13-\dots$ und $\frac\pi4=\arctan1=1-\frac13+\frac15-\dots$ (Leibniz-Reihen).
:::

:::info Taylorreihe
Lässt man $n\to\infty$, erhält man die **Taylorreihe** $\sum_{k=0}^\infty\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$ – eine Potenzreihe. Ob sie konvergiert **und** gegen $f$ konvergiert, muss man prüfen (Restglied → 0?). Für exp, sin, cos klappt es überall.
:::

## Die Regel von L'Hospital

:::satz Regel von L'Hospital
Seien $f,g$ differenzierbar nahe $x_0$, $g'(x)\ne0$, und es liege ein unbestimmter Ausdruck vor: $\lim f=\lim g=0$ oder $\lim|f|=\lim|g|=\infty$. Dann gilt
$$\lim_{x\to x_0}\frac{f(x)}{g(x)}=\lim_{x\to x_0}\frac{f'(x)}{g'(x)},$$
**sofern der rechte Grenzwert existiert**. Gilt auch für $x\to\pm\infty$ und einseitige Grenzwerte.
:::

:::achtung
- Zähler und Nenner **getrennt** ableiten – **nicht** die Quotientenregel!
- Nur bei $\frac00$ oder $\frac\infty\infty$ anwenden. Vorher immer prüfen!
- Ggf. mehrfach anwenden.
:::

:::bsp
- $\lim_{x\to0}\frac{\sin x}x\overset{0/0}=\lim\frac{\cos x}1=1$
- $\lim_{x\to0}\frac{1-\cos x}{x^2}\overset{0/0}=\lim\frac{\sin x}{2x}\overset{0/0}=\lim\frac{\cos x}{2}=\frac12$
- $\lim_{x\to\infty}\frac{x^2}{\e^x}\overset{\infty/\infty}=\lim\frac{2x}{\e^x}=\lim\frac2{\e^x}=0$ – **e-Funktion schlägt jede Potenz**
- $\lim_{x\to\infty}\frac{\ln x}{x}=\lim\frac{1/x}1=0$ – **jede Potenz schlägt den Logarithmus**
:::

:::rezept Andere unbestimmte Formen umformen
- „$0\cdot\infty$": $f\cdot g=\frac{f}{1/g}$. Beispiel: $\lim_{x\searrow0}x\ln x=\lim\frac{\ln x}{1/x}=\lim\frac{1/x}{-1/x^2}=\lim(-x)=0$.
- „$\infty-\infty$": auf einen Bruch bringen. $\lim_{x\to0}\left(\frac1{\sin x}-\frac1x\right)=\lim\frac{x-\sin x}{x\sin x}\overset{0/0}=\lim\frac{1-\cos x}{\sin x+x\cos x}\overset{0/0}=\lim\frac{\sin x}{2\cos x-x\sin x}=0$.
- „$1^\infty$, $0^0$, $\infty^0$": $f^g=\e^{g\ln f}$, Grenzwert des Exponenten berechnen. Beispiel: $\lim_{x\to\infty}(1+\frac1x)^x=\e^{\lim x\ln(1+1/x)}$; $\lim\frac{\ln(1+1/x)}{1/x}\overset{0/0}=1$ ⇒ $\e^1=\e$.
:::

Alternative zu L'Hospital: **Taylor einsetzen**, z. B. $\frac{1-\cos x}{x^2}=\frac{1-(1-\frac{x^2}2+\dots)}{x^2}=\frac12-\frac{x^2}{24}+\dots\to\frac12$.

## Ausblick: exp als Lösung einer Differentialgleichung

Die Exponentialreihe darf gliedweise abgeleitet werden: $(S_N)'=S_{N-1}$ ⇒ $\exp'=\exp$. (Dass man Grenzwert und Ableitung vertauschen darf, ist ein wiederkehrendes Thema der Analysis.) Andersherum: $\exp$ ist die eindeutige Lösung des **Anfangswertproblems** $y'=y$, $y(0)=1$ – „Sneak Peek" auf Differentialgleichungen in Mathe 2.

## Aufgaben

:::aufgabe 1
Bestimme $T_3$ von $f(x)=\e^{2x}$ in $x_0=0$ und von $g(x)=\sqrt x$ in $x_0=4$.
:::loesung
$f^{(k)}(0)=2^k$: $T_3=1+2x+2x^2+\frac43x^3$.
$g(4)=2$, $g'=\frac1{2\sqrt x}\to\frac14$, $g''=-\frac14x^{-3/2}\to-\frac1{32}$, $g'''=\frac38x^{-5/2}\to\frac3{256}$: $T_3=2+\frac14(x-4)-\frac1{64}(x-4)^2+\frac1{512}(x-4)^3$.
:::
:::

:::aufgabe 2
Schätze den Fehler, wenn man $\sin(0{,}1)$ durch $0{,}1$ ersetzt.
:::loesung
$T_2(x)=x$ (da $\sin''(0)=0$), Restglied $R_3=\frac{-\cos\xi}{3!}x^3$ ⇒ $|R_3|\le\frac{0{,}001}6\approx1{,}7\cdot10^{-4}$. (Tatsächlich $\sin0{,}1=0{,}0998334$, Fehler $1{,}67\cdot10^{-4}$.)
:::
:::

:::aufgabe 3
Berechne mit L'Hospital: (a) $\lim_{x\to0}\frac{\e^x-1-x}{x^2}$ (b) $\lim_{x\to1}\frac{\ln x}{x-1}$ (c) $\lim_{x\to\infty}x^{1/x}$ (d) $\lim_{x\searrow0}x^x$.
:::loesung
(a) $\frac00\to\frac{\e^x-1}{2x}\to\frac{\e^x}2=\frac12$. (b) $\frac{1/x}1\to1$. (c) $\e^{\ln x/x}\to\e^0=1$. (d) $\e^{x\ln x}\to\e^0=1$.
:::
:::

:::aufgabe 4
Wie viele Glieder der Exponentialreihe braucht man für $\e$ auf $10^{-6}$ genau?
:::loesung
$|R_{n+1}(1)|\le\frac{\e}{(n+1)!}<\frac3{(n+1)!}<10^{-6}$ ⇒ $(n+1)!>3\cdot10^6$ ⇒ $n+1=10$ ($10!=3\,628\,800$), also $n=9$ (Glieder bis $\frac1{9!}$).
:::
:::

## Karteikarten

:::karte
Taylorpolynom $n$-ten Grades?
???
$T_n(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$
:::

:::karte
Lagrange-Restglied?
???
$R_{n+1}(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$, $\xi$ zwischen $x_0$ und $x$.
:::

:::karte
Regel von L'Hospital – Voraussetzung?
???
Typ $\frac00$ oder $\frac\infty\infty$; dann $\lim\frac fg=\lim\frac{f'}{g'}$ (falls rechts existiert). Getrennt ableiten!
:::

:::karte
Taylorreihe von $\ln(1+x)$?
???
$x-\frac{x^2}2+\frac{x^3}3-\frac{x^4}4+\dots$ für $-1<x\le1$.
:::

:::karte
Wie behandelt man „$0\cdot\infty$" und „$1^\infty$"?
???
$fg=\frac f{1/g}$; $f^g=\e^{g\ln f}$ und dann L'Hospital auf den Exponenten.
:::

:::karte
Kleinwinkelnäherungen?
???
$\sin\alpha\approx\alpha$, $\cos\alpha\approx1-\frac{\alpha^2}2$ (bzw. $\approx1$), $\tan\alpha\approx\alpha$.
:::
