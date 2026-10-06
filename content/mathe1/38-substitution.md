---
title: Integration durch Substitution, logarithmische Integration, Partialbruchzerlegung
chapter: 4 Integralrechnung
minutes: 120
sources: Mathe 1/IngMath1_slides_3_ana_13_integration_integrationstechniken_substitution (2).pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#221
---

:::ziel
- Die Substitutionsregel als „Kettenregel rückwärts" verstehen und anwenden (mit **Grenzen umrechnen** oder Rücksubstitution).
- Lineare Substitution, $\frac{f'}{f}$ (logarithmische Integration), $f'(x)\cdot g(f(x))$, trigonometrische Substitution.
- **Partialbruchzerlegung** für rationale Funktionen.
:::

## Die Substitutionsregel

Kettenregel: $\frac{\d}{\d t}F(\varphi(t))=f(\varphi(t))\varphi'(t)$, wenn $F'=f$. Integriert:

:::satz Substitutionsregel
Für stetiges $f$ und stetig differenzierbares $\varphi$:
$$\int_a^bf(\varphi(t))\,\varphi'(t)\,\d t=\int_{\varphi(a)}^{\varphi(b)}f(x)\,\d x,\qquad\text{unbestimmt: }\int f(\varphi(t))\varphi'(t)\,\d t=F(\varphi(t))+C.$$
:::

:::rezept Substitution in 4 Schritten
1. **Wählen:** $u=\varphi(x)$ – meist die „innere Funktion" oder der Ausdruck, dessen Ableitung als Faktor dasteht.
2. **Differential:** $\frac{\d u}{\d x}=\varphi'(x)$ ⇒ $\d x=\frac{\d u}{\varphi'(x)}$ (man darf so tun, als wäre $\frac{\d u}{\d x}$ ein Bruch).
3. **Ersetzen:** Integrand und $\d x$ vollständig durch $u$ ausdrücken (es darf kein $x$ übrig bleiben!). Bei bestimmten Integralen **Grenzen mit umrechnen**: $u_1=\varphi(a)$, $u_2=\varphi(b)$.
4. **Integrieren** und (bei unbestimmten Integralen) **rücksubstituieren**.
:::

## Lineare Substitution

$$\int f(ax+b)\,\d x=\frac1aF(ax+b)+C.$$

:::bsp
- $\int_0^\pi\sin(2x)\,\d x=\frac12[-\cos2x]_0^\pi=0$; $\;\int_0^\pi\sin\frac x2\,\d x=2[-\cos\frac x2]_0^\pi=2$.
- Walkthrough (Skript): $\int\cos(3x+1)\,\d x$: $s=3x+1$, $\d x=\frac13\d s$ ⇒ $\frac13\int\cos s\,\d s=\frac13\sin(3x+1)+C$.
- $\int\e^{-2x}\d x=-\frac12\e^{-2x}+C$; $\int\frac{\d x}{(4x-1)^3}=\frac14\cdot\frac{(4x-1)^{-2}}{-2}=-\frac1{8(4x-1)^2}+C$.
:::

## Die Ableitung der inneren Funktion steht da

:::bsp $\int x\sin(3x^2+1)\,\d x$
$u=3x^2+1$, $\d u=6x\,\d x$ ⇒ $x\,\d x=\frac16\d u$: $\int\sin u\cdot\frac16\d u=-\frac16\cos(3x^2+1)+C$.
:::

:::bsp $\int_0^{\sqrt\pi}x\sin(x^2)\,\d x$ – zwei Varianten
**Variante 1 (Grenzen substituieren):** $u=x^2$, $\d u=2x\,\d x$, $u(0)=0$, $u(\sqrt\pi)=\pi$: $\frac12\int_0^\pi\sin u\,\d u=\frac12[-\cos u]_0^\pi=1$.
**Variante 2 (Rücksubstitution):** $\int x\sin x^2\d x=-\frac12\cos(x^2)+C$ ⇒ $[-\frac12\cos x^2]_0^{\sqrt\pi}=\frac12+\frac12=1$.
:::

:::bsp Weitere (Skript)
- $\int\frac{-x}{\sqrt{1-x^2}}\d x$: $y=1-x^2$ ⇒ $\int\frac{1}{2\sqrt y}\d y=\sqrt y=\sqrt{1-x^2}+C$.
- $\int\sin t\cos t\,\d t$: $s=\cos t$, $\d s=-\sin t\,\d t$ ⇒ $-\int s\,\d s=-\frac12\cos^2t+C$. (Mit $s=\sin t$ erhält man $\frac12\sin^2t+C$ – beides richtig, sie unterscheiden sich um eine Konstante!)
:::

## Logarithmische Integration

:::satz
Für $\varphi(x)\ne0$:
$$\int\frac{\varphi'(x)}{\varphi(x)}\,\d x=\ln|\varphi(x)|+C.$$
„Steht im Zähler die Ableitung des Nenners, kommt ln heraus."
:::

:::bsp
- $\int\tan x\,\d x=\int\frac{\sin x}{\cos x}\d x=-\int\frac{(\cos x)'}{\cos x}\d x=-\ln|\cos x|+C$.
- $\int\frac{2t}{t^2+1}\d t=\ln(t^2+1)+C$ (Betrag unnötig, da $t^2+1>0$).
- $\int\frac{x}{1-x^2}\d x=-\frac12\int\frac{-2x}{1-x^2}\d x=-\frac12\ln|1-x^2|+C$.
- $\int\frac{x^2}{x^3+5}\d x=\frac13\ln|x^3+5|+C$.
:::

## Partialbruchzerlegung

Rationale Funktionen $\frac{p(x)}{q(x)}$ integriert man, indem man sie in einfache Brüche zerlegt.

:::rezept Partialbruchzerlegung (PBZ)
1. Ist Grad $p\ge$ Grad $q$: erst **Polynomdivision**.
2. Nenner **faktorisieren** (Nullstellen).
3. **Ansatz:**
   - einfache reelle Nullstelle $x_0$: $\frac{A}{x-x_0}$
   - $k$-fache Nullstelle: $\frac{A_1}{x-x_0}+\frac{A_2}{(x-x_0)^2}+\dots+\frac{A_k}{(x-x_0)^k}$
   - irreduzibler quadratischer Faktor $x^2+px+q$: $\frac{Bx+C}{x^2+px+q}$
4. Koeffizienten bestimmen: Hauptnenner, **Koeffizientenvergleich** (LGS) oder **Nullstellen einsetzen** (Zuhaltemethode).
5. Einzeln integrieren: $\int\frac{A}{x-x_0}=A\ln|x-x_0|$, $\int\frac{A}{(x-x_0)^k}=\frac{A}{(1-k)(x-x_0)^{k-1}}$, quadratische Terme → ln und arctan.
:::

:::bsp $\int\frac{1}{1-x^2}\,\d x$
$\frac1{1-x^2}=\frac{\alpha}{1-x}+\frac{\beta}{1+x}=\frac{\alpha(1+x)+\beta(1-x)}{(1-x)(1+x)}=\frac{(\alpha+\beta)+(\alpha-\beta)x}{1-x^2}$.
Koeffizientenvergleich: $\alpha+\beta=1$, $\alpha-\beta=0$ ⇒ $\alpha=\beta=\frac12$.
$$\int\frac{\d x}{1-x^2}=\frac12\left(\int\frac{\d x}{1+x}+\int\frac{\d x}{1-x}\right)=\frac12\big(\ln|x+1|-\ln|x-1|\big)=\frac12\ln\left|\frac{x+1}{x-1}\right|+C.$$
(Gilt auf Intervallen ohne $\pm1$.)
:::

:::bsp Mit doppelter Nullstelle: $\int\frac{x+3}{x^2(x+1)}\d x$
Ansatz $\frac{A}{x}+\frac{B}{x^2}+\frac{C}{x+1}$: $x+3=Ax(x+1)+B(x+1)+Cx^2$.
$x=0$: $B=3$. $x=-1$: $C=2$. Koeffizient bei $x^2$: $0=A+C\Rightarrow A=-2$.
$\int=-2\ln|x|-\frac3x+2\ln|x+1|+C$.
:::

## Trigonometrische Substitution

Bei $\sqrt{1-x^2}$ hilft $x=\sin y$ (wegen $\sin^2+\cos^2=1$), bei $\sqrt{1+x^2}$ $x=\sinh y$.

:::bsp Fläche des Halbkreises (Skript Bsp. 10.16)
$\int\sqrt{1-x^2}\,\d x$ mit $x=\sin y$, $\d x=\cos y\,\d y$: $\int\cos^2y\,\d y=\frac12\left(y+\sin y\cos y\right)$. Rücksubstitution $y=\arcsin x$, $\cos y=\sqrt{1-x^2}$:
$$\int\sqrt{1-x^2}\,\d x=\frac12\left(x\sqrt{1-x^2}+\arcsin x\right)+C,\qquad\int_{-1}^1\sqrt{1-x^2}\,\d x=\frac12\left(\frac\pi2+\frac\pi2\right)=\frac\pi2.$$
Das ist die Fläche des Halbkreises – Kreisfläche $\pi r^2$ bestätigt.
:::

:::info Anwendung Aerodynamik (Skript 10.7)
Elliptische Auftriebsverteilung $l(y)=l_0\sqrt{1-(2y/b)^2}$ über die Spannweite $b$: Mit $x=\frac{2y}b$ wird $L=\int_{-b/2}^{b/2}l(y)\,\d y=\frac{l_0b}2\int_{-1}^1\sqrt{1-x^2}\,\d x=\frac{\pi}{4}l_0b$. Das Integral $\int y\,l(y)\,\d y$ wäre das **Biegemoment** um die Flügelwurzel (für einen Flügel).
:::

## Aufgaben

:::aufgabe 1
(a) $\int\frac{\e^x}{1+\e^x}\d x$ (b) $\int_0^1x\e^{x^2}\d x$ (c) $\int\frac{\ln x}{x}\d x$ (d) $\int\frac{x^2}{x^3+5}\d x$ (e) $\int\cos^3x\sin x\,\d x$
:::loesung
(a) $\ln(1+\e^x)+C$. (b) $\frac12[\e^{x^2}]_0^1=\frac{\e-1}2$. (c) $u=\ln x$: $\frac12\ln^2x+C$. (d) $\frac13\ln|x^3+5|+C$. (e) $u=\cos x$: $-\frac14\cos^4x+C$.
:::
:::

:::aufgabe 2
$\int\frac{3x+1}{x^2-x-2}\d x$
:::loesung
$x^2-x-2=(x-2)(x+1)$. $\frac{3x+1}{(x-2)(x+1)}=\frac A{x-2}+\frac B{x+1}$: $x=2$: $7=3A\Rightarrow A=\frac73$; $x=-1$: $-2=-3B\Rightarrow B=\frac23$. $\int=\frac73\ln|x-2|+\frac23\ln|x+1|+C$.
:::
:::

:::aufgabe 3
$\int\frac{x^3}{x^2-1}\d x$
:::loesung
Polynomdivision: $\frac{x^3}{x^2-1}=x+\frac{x}{x^2-1}$. $\int=\frac{x^2}2+\frac12\ln|x^2-1|+C$.
:::
:::

:::aufgabe 4
Berechne den Gesamtauftrieb $L$ für $l_0=2000\,$N/m, $b=12\,$m.
:::loesung
$L=\frac\pi4l_0b=\frac\pi4\cdot2000\cdot12\approx18\,850\,$N.
:::
:::

## Karteikarten

:::karte
Substitutionsregel?
???
$\int_a^bf(\varphi(t))\varphi'(t)\d t=\int_{\varphi(a)}^{\varphi(b)}f(x)\d x$
:::

:::karte
$\int f(ax+b)\,\d x=\,?$
???
$\frac1aF(ax+b)+C$
:::

:::karte
Logarithmische Integration?
???
$\int\frac{\varphi'}{\varphi}=\ln|\varphi|+C$
:::

:::karte
Ansatz der PBZ bei doppelter Nullstelle $x_0$?
???
$\frac{A_1}{x-x_0}+\frac{A_2}{(x-x_0)^2}$
:::

:::karte
$\int\frac{\d x}{1-x^2}=\,?$
???
$\frac12\ln\left|\frac{1+x}{1-x}\right|+C$
:::

:::karte
Was muss man bei der Substitution im bestimmten Integral beachten?
???
Grenzen mit umrechnen ($u(a)$, $u(b)$) – oder erst unbestimmt integrieren und rücksubstituieren.
:::
