---
title: 19.1 Separierbare DGL, Substitution, exakte DGL
chapter: 19 Separierbare und lineare DGL
minutes: 110
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#391; Mathe 2/IM2_slides_T4_DGL_02_separation.pdf; Mathe 2/IM2_slides_T4_DGL_03_substitution.pdf; Mathe 2/IM2_slides_T4_DGL_01_gewDGL_integrierbar_exakt.pdf; Mathe 2/IM2_slides_T4_DGL_13_ode_order2_reduction.pdf
---

:::ziel
- Separierbare DGL $\dot x=f(t)g(x)$ mit **Trennung der Variablen** lösen – inklusive Sonderfall $g(x)=0$ und Konstantenbehandlung.
- **Substitutionen** $u=\frac yx$ und $u=ax+by+c$ (Folien) anwenden.
- **Exakte DGL** $p+q\,y'=0$ erkennen ($p_y=q_x$) und über ein Potential lösen (Folien).
- DGL 2. Ordnung durch Reduktion der Ordnung vereinfachen (Folien).
:::

## Separierbare DGL

:::def (Def. 19.1)
$\dot x=f(t)\,g(x)$ heißt **separierbar** – Zeit- und Ortsabhängigkeit sind multiplikativ getrennt. Beispiel: $\dot x=2t\,x^2$, $\dot x=\sin t\cos x$; nicht separierbar: $\dot x=2t+x$ (aber linear, → nächste Lektion).
:::

:::rezept Trennung der Variablen
1. **Umschreiben:** $\frac{\d x}{\d t}=f(t)g(x)$.
2. **Trennen:** $\frac{\d x}{g(x)}=f(t)\,\d t$ (nur für $g(x)\ne0$!).
3. **Integrieren:** $\int\frac{\d x}{g(x)}=\int f(t)\,\d t+c$ (eine Konstante genügt).
4. **Auflösen** nach $x$.
5. **Sonderfall:** Nullstellen $x^*$ von $g$ liefern **konstante Lösungen** $x\equiv x^*$ – prüfen, ob sie in der allgemeinen Lösung enthalten sind.
6. Anfangswert einsetzen ⇒ $c$; **Definitionsbereich** der Lösung angeben.
:::

:::bsp Skript Bsp. 19.3/19.4
$\dot x=2x$: $\int\frac{\d x}{2x}=\int\d t$ ⇒ $\frac12\ln|x|=t+c$ ⇒ $|x|=e^{2c}e^{2t}$ ⇒ $x=Ce^{2t}$, $C\ne0$; zusammen mit $x\equiv0$: $x=Ce^{2t}$, $C\in\mathbb R$.
**Konstantentrick:** $\ln|x|=h(t)+c$ ⇒ $x=Ce^{h(t)}$ mit $C\in\mathbb R$ (Betrag, $\pm$ und Nulllösung in einem Schritt).
$\dot x=-2tx^2$: $\int\frac{\d x}{x^2}=\int-2t\,\d t$ ⇒ $-\frac1x=-t^2+c$ ⇒ $x=\frac1{t^2-c}$; zusätzlich $x\equiv0$ (nicht in der Formel enthalten!).
:::

## Substitution (Folien)

:::rezept Typ $y'=f\!\left(\frac yx\right)$ (Ähnlichkeits-DGL)
$u=\frac yx$ ⇒ $y=ux$, $y'=u'x+u$ ⇒ $u'=\frac{f(u)-u}x$ – separierbar.
Beispiel $y'=\frac{2y-x}x=2\frac yx-1$: $f(u)=2u-1$ ⇒ $u'=\frac{u-1}x$ ⇒ $\ln|u-1|=\ln|x|+C$ ⇒ $u=1+\tilde Cx$ ⇒ $y=x+\tilde Cx^2$.
:::

:::rezept Typ $y'=f(ax+by+c)$
$u=ax+by+c$ ⇒ $u'=a+b\,f(u)$ – separierbar.
Beispiel $y'=(x+y)^2$: $u'=1+u^2$ ⇒ $\arctan u=x+C$ ⇒ $y=\tan(x+C)-x$.
:::

## Exakte DGL (Folien)

:::def
$p(x,y)+q(x,y)\,y'=0$ heißt **exakt**, wenn es eine Funktion $F(x,y)$ gibt mit $F_x=p$, $F_y=q$ (d. h. $(p,q)$ ist ein **Gradientenfeld**, Kap. 16!). Kriterium (einfach zusammenhängendes Gebiet): $p_y=q_x$.
Dann gilt $\frac{\d}{\d x}F(x,y(x))=F_x+F_yy'=0$ ⇒ Lösungen sind die **Höhenlinien** $F(x,y)=C$.
:::

:::bsp
$2xy+(x^2+3y^2)y'=0$: $p_y=2x=q_x$ ✓. $F=\int2xy\,\d x=x^2y+h(y)$, $F_y=x^2+h'=x^2+3y^2$ ⇒ $h=y^3$. Lösungen implizit: $x^2y+y^3=C$.
:::

Direkt integrierbar ist der Spezialfall $y'=f(x)$ (Stammfunktion) – Ort aus Geschwindigkeit, Geschwindigkeit aus Beschleunigung.

## Reduktion der Ordnung (Folien)

- $\ddot y=f(t,\dot y)$ (kein $y$): $v=\dot y$ ⇒ $\dot v=f(t,v)$, 1. Ordnung.
- $\ddot y=f(y)$ (kein $t$, z. B. Pendel): mit $2\dot y$ multiplizieren ⇒ $\frac{\d}{\d t}\dot y^2=2\frac{\d}{\d t}F(y)$ ⇒ $\dot y^2=2F(y)+C$ (**Energieerhaltung**!) ⇒ $\dot y=\pm\sqrt{2F(y)+C}$, separierbar.

## Aufgaben

:::aufgabe 1 (Skript 19.1)
Allgemeine Lösungen: (a) $y'y^2+x^2-1=0$; (b) $y'=-\frac1y$; (c) $y'=e^y\sin x$; (d) $x^2y=(1+x)y'$.
:::loesung
(a) $y^2\d y=(1-x^2)\d x$ ⇒ $\frac{y^3}3=x-\frac{x^3}3+c$ ⇒ $y=\sqrt[3]{3x-x^3+C}$.
(b) $y\,\d y=-\d x$ ⇒ $y^2=C-2x$ ⇒ $y=\pm\sqrt{C-2x}$ ($x<\frac C2$).
(c) $e^{-y}\d y=\sin x\,\d x$ ⇒ $-e^{-y}=-\cos x-C$ ⇒ $y=-\ln(\cos x+C)$.
(d) $\frac{\d y}y=\frac{x^2}{1+x}\d x=\big(x-1+\frac1{1+x}\big)\d x$ ⇒ $y=C(1+x)e^{x^2/2-x}$ (inkl. $y\equiv0$).
:::
:::

:::aufgabe 2 (Skript 19.4.1)
$\dot y=2t\,y^2$, $y(0)=1$. Lösung und maximaler Definitionsbereich.
:::loesung
$-\frac1y=t^2+c$, $y(0)=1$ ⇒ $c=-1$ ⇒ $y=\frac1{1-t^2}$ auf $(-1,1)$ – die Lösung **explodiert** in endlicher Zeit (typisch für nichtlineare DGL).
:::
:::

:::aufgabe 3
Löse $y'=\frac{y^2+x^2}{xy}$ ($x,y>0$) mit $u=\frac yx$.
:::loesung
$f(u)=\frac{u^2+1}u=u+\frac1u$ ⇒ $u'x=\frac1u$ ⇒ $u\,\d u=\frac{\d x}x$ ⇒ $\frac{u^2}2=\ln x+C$ ⇒ $y=x\sqrt{2\ln x+2C}$.
:::
:::

:::aufgabe 4
Ist $(y\cos x+2x)+(\sin x+3y^2)y'=0$ exakt? Lösung?
:::loesung
$p_y=\cos x=q_x$ ✓. $F=y\sin x+x^2+h(y)$, $F_y=\sin x+h'=\sin x+3y^2$ ⇒ $h=y^3$. Lösung: $y\sin x+x^2+y^3=C$.
:::
:::

## Karteikarten

:::karte
Wann ist eine DGL separierbar?
???
Wenn $\dot x=f(t)\,g(x)$.
:::

:::karte
Was darf man bei Trennung der Variablen nicht vergessen?
???
Die konstanten Lösungen aus g(x) = 0 und den Definitionsbereich.
:::

:::karte
Substitution bei $y'=f(y/x)$?
???
$u=y/x$ ⇒ $u'=\frac{f(u)-u}{x}$, separierbar.
:::

:::karte
Exakte DGL – Kriterium und Lösung?
???
$p+qy'=0$ mit $p_y=q_x$; Potential F mit $F_x=p$, $F_y=q$; Lösungen $F(x,y)=C$.
:::

:::karte
Reduktion für $\ddot y=f(y)$?
???
Mit 2ẏ multiplizieren: $\dot y^2=2F(y)+C$ (Energieerhaltung).
:::
