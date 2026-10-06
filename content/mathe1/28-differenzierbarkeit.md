---
title: Differenzierbarkeit – Ableitung, Ableitungsregeln, Umkehrfunktion, implizites Differenzieren, Mittelwertsatz
chapter: 3 Analysis
minutes: 140
sources: Mathe 1/IngMath1_slides_3_ana_05_differenzierbarkeit.pdf; Mathe 1/IngMath1_slides_3_ana_05_UE_funktionen_differentiation_umkehrabbildung_implizit.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#58; Mathe 1 + 2 neu/skript_m1_m2.pdf#60; Mathe 1 + 2 neu/skript_m1_m2.pdf#62
---

:::ziel
- Ableitung als Grenzwert des Differenzenquotienten: Tangentensteigung, Änderungsrate, **Linearisierung**.
- Ableitungen elementarer Funktionen **auswendig**, Summen-, Faktor-, Produkt-, Quotienten-, **Kettenregel** sicher anwenden.
- Ableitung der Umkehrfunktion ($\ln$, $\arcsin$, $\arctan$, …) und **implizites Differenzieren**.
- Differenzierbar ⇒ stetig (nicht umgekehrt); höhere Ableitungen; Satz von Rolle und **Mittelwertsatz**.
:::

## Motivation

- **Physik:** Geschwindigkeit ist die zeitliche Änderung des Ortes, $v(t)=\dot s(t)$; Beschleunigung $a(t)=\dot v(t)=\ddot s(t)$. (Raketenstart, Lithografie-Maschinen von ASML, Lenkflugkörper – überall stecken Ableitungen in Regelung und Bahnplanung.)
- **Geometrie:** Steigung der **Tangente** an den Graphen.
- **Ingenieurpraxis:** Die Ableitung **linearisiert** eine komplizierte Funktion lokal: $f(x)\approx f(x_0)+f'(x_0)(x-x_0)$.

## Definition

:::def Ableitung
$f:D\to\R$ heißt **differenzierbar in $x_0$**, wenn der Grenzwert des **Differenzenquotienten** existiert:
$$f'(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}.$$
Er heißt **Differentialquotient** oder **Ableitung**. Ist $f$ überall differenzierbar, ist $f':D\to\R$ die **Ableitungsfunktion**.
:::

Schreibweisen: $f'(x)$, $\frac{\d f}{\d x}$, $\frac{\d}{\d x}f(x)$, $Df(x)$; für Zeitableitungen $\dot f(t)$.

Geometrisch: Der Differenzenquotient ist die Steigung der **Sekante** durch $(x_0,f(x_0))$ und $(x_0+h,f(x_0+h))$; für $h\to0$ wird daraus die **Tangente** $t(x)=f(x_0)+f'(x_0)(x-x_0)$.

:::bsp Ableitungen aus der Definition
- $f(x)=c$: $\frac{c-c}h=0\Rightarrow f'=0$.
- $f(x)=x^2$: $\frac{(x_0+h)^2-x_0^2}h=\frac{2x_0h+h^2}h=2x_0+h\to2x_0$.
- $f(x)=x^n$: Binomialsatz $(x_0+h)^n=x_0^n+nx_0^{n-1}h+h^2(\dots)$ ⇒ $f'(x_0)=nx_0^{n-1}$.
- $f(x)=\frac1x$: $\frac{1}{h}\left(\frac1{x_0+h}-\frac1{x_0}\right)=\frac{-1}{x_0(x_0+h)}\to-\frac1{x_0^2}$.
- $\sin$: $\frac{\sin(x+h)-\sin x}{h}=\sin x\frac{\cos h-1}h+\cos x\frac{\sin h}h\to\cos x$ (mit $\frac{\sin h}h\to1$, $\frac{\cos h-1}h\to0$).
:::

:::satz Differenzierbar ⇒ stetig
Ist $f$ in $a$ differenzierbar, so ist $f$ in $a$ stetig: $f(x)-f(a)=\frac{f(x)-f(a)}{x-a}(x-a)\to f'(a)\cdot0=0$.
**Umkehrung falsch:** $|x|$ ist stetig, aber in 0 nicht differenzierbar (links Steigung −1, rechts +1 – „Knick").
:::

## Ableitungen elementarer Funktionen

| $f(x)$ | $f'(x)$ | | $f(x)$ | $f'(x)$ |
|---|---|---|---|---|
| $c$ | $0$ | | $\e^x$ | $\e^x$ |
| $x^n$ | $nx^{n-1}$ | | $a^x$ | $a^x\ln a$ |
| $x^r$ ($r\in\R$, $x>0$) | $rx^{r-1}$ | | $\ln x$ | $\frac1x$ |
| $\sqrt x$ | $\frac1{2\sqrt x}$ | | $\log_ax$ | $\frac1{x\ln a}$ |
| $\frac1x$ | $-\frac1{x^2}$ | | $\sin x$ | $\cos x$ |
| $\tan x$ | $\frac1{\cos^2x}=1+\tan^2x$ | | $\cos x$ | $-\sin x$ |
| $\arcsin x$ | $\frac1{\sqrt{1-x^2}}$ | | $\arctan x$ | $\frac1{1+x^2}$ |
| $\arccos x$ | $-\frac1{\sqrt{1-x^2}}$ | | $\sinh x$, $\cosh x$ | $\cosh x$, $\sinh x$ |

## Ableitungsregeln

:::satz Ableitungsregeln
Seien $f,g$ differenzierbar.
1. **Linearität:** $(\mu f+\nu g)'=\mu f'+\nu g'$
2. **Produktregel:** $(fg)'=f'g+fg'$
3. **Quotientenregel:** $\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}$ (für $g\ne0$) – Merkspruch „NAZ minus ZAN durch N-Quadrat"
4. **Kettenregel:** $(f\circ g)'(x)=f'(g(x))\cdot g'(x)$ – „äußere Ableitung (an der inneren Stelle) mal innere Ableitung". In Differentialschreibweise $\frac{\d u}{\d x}=\frac{\d u}{\d v}\cdot\frac{\d v}{\d x}$.
:::

Folgerungen: Polynome sind überall differenzierbar, $p'(x)=\sum_{k=1}^nka_kx^{k-1}$. Mit der Kettenregel: $\left(\frac1{x^n}\right)'=n\left(\frac1x\right)^{n-1}\cdot\left(-\frac1{x^2}\right)=-nx^{-n-1}$. Die Quotientenregel folgt aus Produktregel und $\left(\frac1g\right)'=-\frac{g'}{g^2}$.

:::bsp Rechenbeispiele
- $(x^3\sin x)'=3x^2\sin x+x^3\cos x$
- $\left(\dfrac{x^2+1}{x-1}\right)'=\dfrac{2x(x-1)-(x^2+1)}{(x-1)^2}=\dfrac{x^2-2x-1}{(x-1)^2}$
- $(\e^{-3x^2})'=\e^{-3x^2}\cdot(-6x)$
- $(\sin^2(5x))'=2\sin(5x)\cdot\cos(5x)\cdot5$ (dreifache Kette)
- $(\ln(1+x^2))'=\frac{2x}{1+x^2}$
- $(x^x)'$: $x^x=\e^{x\ln x}$ ⇒ $(x^x)'=\e^{x\ln x}(\ln x+1)=x^x(\ln x+1)$ (**logarithmisches Ableiten**)
:::

:::achtung Häufige Fehler
- $(fg)'\ne f'g'$!
- Innere Ableitung vergessen: $(\sin(2x))'=2\cos(2x)$, nicht $\cos(2x)$.
- $(a^x)'\ne xa^{x-1}$ (das gilt nur für $x^a$!).
- $\left(\frac1{x^2}\right)'$: als $x^{-2}$ ableiten ⇒ $-2x^{-3}$.
:::

## Ableitung der Umkehrfunktion

:::satz
Ist $f$ streng monoton und differenzierbar mit $f'(x)\ne0$, so ist $f^{-1}$ differenzierbar und
$$\left(f^{-1}\right)'(y)=\frac1{f'(f^{-1}(y))}.$$
:::
*Herleitung:* $f(f^{-1}(y))=y$ ableiten (Kettenregel): $f'(f^{-1}(y))\cdot(f^{-1})'(y)=1$.

:::bsp
- **ln:** $\e^{\ln x}=x$ ⇒ $\e^{\ln x}\cdot(\ln x)'=1$ ⇒ $(\ln x)'=\frac1x$.
- **arcsin:** $\sin$ ist auf $[-\frac\pi2,\frac\pi2]$ streng wachsend. $\sin(\arcsin x)=x$ ⇒ $\cos(\arcsin x)\cdot(\arcsin x)'=1$. Mit $\cos(\arcsin x)=\sqrt{1-\sin^2(\arcsin x)}=\sqrt{1-x^2}$ (positiv auf dem Intervall): $(\arcsin x)'=\frac1{\sqrt{1-x^2}}$ für $|x|<1$.
- **arctan:** $\tan'=\frac1{\cos^2}>0$. $\tan(\arctan x)=x$ ⇒ $(\arctan x)'=\cos^2(\arctan x)$. Wegen $x^2=\tan^2=\frac{1-\cos^2}{\cos^2}=\frac1{\cos^2}-1$ ist $\cos^2(\arctan x)=\frac1{1+x^2}$. Also $(\arctan x)'=\frac1{1+x^2}$.
- **Wurzel:** $(\sqrt x)'=\frac1{2\sqrt x}$ (Umkehrung von $x^2$ auf $x>0$).
:::

## Implizites Differenzieren

Manchmal ist $y$ nur **implizit** durch eine Gleichung $F(x,y)=0$ gegeben. Man fasst $y=y(x)$ auf, leitet die ganze Gleichung nach $x$ ab (Kettenregel bei jedem $y$!) und löst nach $y'$ auf.

:::bsp Tangentensteigung am Einheitskreis $x^2+y^2=1$
Ableiten: $2x+2y\,y'=0$ ⇒ $y'=-\frac xy$ (für $y\ne0$).
Kontrolle mit expliziter Darstellung: oberer Halbkreis $y_1=\sqrt{1-x^2}$, $y_1'=\frac{-2x}{2\sqrt{1-x^2}}=-\frac x{y_1}$ ✓; unterer $y_2=-\sqrt{1-x^2}$, $y_2'=\frac{x}{\sqrt{1-x^2}}=-\frac x{y_2}$ ✓.
Im Punkt $(\frac35,\frac45)$: $y'=-\frac34$.
:::

:::bsp
$x^3+y^3=6xy$ (Kartesisches Blatt): $3x^2+3y^2y'=6y+6xy'$ ⇒ $y'=\frac{2y-x^2}{y^2-2x}$. Im Punkt $(3,3)$: $y'=\frac{6-9}{9-6}=-1$.
:::

Ausblick: In Mathe 2 wird das mit dem **Satz über implizite Funktionen** und partiellen Ableitungen präzisiert: $y'=-\frac{F_x}{F_y}$.

## Höhere Ableitungen

$f''=(f')'$, $f'''$, …, $f^{(n)}=\frac{\d^n f}{\d x^n}$. Beispiele: $(\sin x)''=-\sin x$, $(\e^{2x})^{(n)}=2^n\e^{2x}$, $(x^5)'''=60x^2$. Physik: $\ddot s=a$.

## Satz von Rolle und Mittelwertsatz

:::satz Satz von Rolle
$f$ stetig auf $[a,b]$, differenzierbar auf $(a,b)$, $f(a)=f(b)$ ⇒ es gibt $x_0\in(a,b)$ mit $f'(x_0)=0$ (waagrechte Tangente).
:::

:::satz Mittelwertsatz der Differentialrechnung
$f$ stetig auf $[a,b]$, differenzierbar auf $(a,b)$ ⇒ es gibt $x_0\in(a,b)$ mit
$$f'(x_0)=\frac{f(b)-f(a)}{b-a}.$$
Irgendwo ist die Tangente parallel zur Sekante. (Wer in einer Stunde 100 km fährt, war mindestens einmal genau 100 km/h schnell.)
:::

:::satz Folgerungen
- $f'=0$ auf einem Intervall ⇒ $f$ konstant.
- $f'>0$ ⇒ streng monoton wachsend; $f'<0$ ⇒ streng fallend; $f'\ge0$ ⇒ monoton wachsend.
- **Schrankensatz:** $|f'|\le L$ ⇒ $|f(x)-f(y)|\le L|x-y|$ (Lipschitz-stetig).
:::

## Aufgaben

:::aufgabe 1
Leite ab: (a) $(2x^3-x)^5$ (b) $x^2\e^{-x}$ (c) $\frac{\sin x}{x}$ (d) $\ln(\cos x)$ (e) $\sqrt{1+\e^{2x}}$ (f) $\arctan(3x)$ (g) $2^{x^2}$
:::loesung
(a) $5(2x^3-x)^4(6x^2-1)$ (b) $2x\e^{-x}-x^2\e^{-x}=x(2-x)\e^{-x}$ (c) $\frac{x\cos x-\sin x}{x^2}$ (d) $\frac{-\sin x}{\cos x}=-\tan x$ (e) $\frac{2\e^{2x}}{2\sqrt{1+\e^{2x}}}=\frac{\e^{2x}}{\sqrt{1+\e^{2x}}}$ (f) $\frac{3}{1+9x^2}$ (g) $2^{x^2}\ln2\cdot2x$
:::
:::

:::aufgabe 2
Leite $f(x)=x^2$ und $g(x)=\sqrt x$ über die Definition (Differenzenquotient) ab.
:::loesung
$f$: s. o., $2x$. $g$: $\frac{\sqrt{x+h}-\sqrt x}{h}=\frac{(x+h)-x}{h(\sqrt{x+h}+\sqrt x)}=\frac1{\sqrt{x+h}+\sqrt x}\to\frac1{2\sqrt x}$ (3. binomische Formel).
:::
:::

:::aufgabe 3
Bestimme $(\arccos x)'$ mit der Umkehrregel.
:::loesung
$\cos(\arccos x)=x$ ⇒ $-\sin(\arccos x)(\arccos x)'=1$. $\sin(\arccos x)=\sqrt{1-x^2}$ (da $\arccos x\in[0,\pi]$, $\sin\ge0$) ⇒ $(\arccos x)'=-\frac1{\sqrt{1-x^2}}$.
:::
:::

:::aufgabe 4
Die Ellipse $\frac{x^2}{4}+\frac{y^2}{9}=1$: Steigung der Tangente im Punkt $(1,\frac{3\sqrt3}2)$?
:::loesung
$\frac x2+\frac{2y}9y'=0$ ⇒ $y'=-\frac{9x}{4y}=-\frac{9}{4\cdot\frac{3\sqrt3}{2}}=-\frac{3}{2\sqrt3}=-\frac{\sqrt3}2$.
:::
:::

:::aufgabe 5
Zeige mit dem Mittelwertsatz: $|\sin x-\sin y|\le|x-y|$.
:::loesung
$\frac{\sin x-\sin y}{x-y}=\cos\xi$ für ein $\xi$ dazwischen, und $|\cos\xi|\le1$. ∎
:::
:::

## Karteikarten

:::karte
Definition der Ableitung?
???
$f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}$
:::

:::karte
Produkt-, Quotienten-, Kettenregel?
???
$(fg)'=f'g+fg'$; $(f/g)'=\frac{f'g-fg'}{g^2}$; $(f(g(x)))'=f'(g(x))g'(x)$.
:::

:::karte
Ableitung der Umkehrfunktion?
???
$(f^{-1})'(y)=\frac1{f'(f^{-1}(y))}$
:::

:::karte
$(\arcsin x)'$, $(\arctan x)'$, $(\ln x)'$?
???
$\frac1{\sqrt{1-x^2}}$, $\frac1{1+x^2}$, $\frac1x$.
:::

:::karte
$(a^x)'$ und $(x^a)'$?
???
$a^x\ln a$ bzw. $ax^{a-1}$.
:::

:::karte
Mittelwertsatz?
???
$\exists x_0\in(a,b): f'(x_0)=\frac{f(b)-f(a)}{b-a}$ (für $f$ stetig auf $[a,b]$, diffbar auf $(a,b)$).
:::

:::karte
Ist jede stetige Funktion differenzierbar?
???
Nein, z. B. $|x|$ in 0. Aber jede differenzierbare ist stetig.
:::

:::karte
Wie leitet man implizit ab?
???
Gleichung nach $x$ ableiten, dabei $y=y(x)$ (Kettenregel: $(y^2)'=2yy'$), dann nach $y'$ auflösen.
:::
