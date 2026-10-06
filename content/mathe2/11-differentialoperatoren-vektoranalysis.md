---
title: 16.3 Ergänzung aus den Folien – Differentialoperatoren (grad, div, rot, Δ), Vektoridentitäten, Maxwell → Wellengleichung, Flächenintegrale (Ausblick)
chapter: 16 Kurvenintegrale
minutes: 90
sources: Mathe 2/IM2_slides_T3_vectorcalc_01_differentialoperators.pdf; Mathe 2/IM2_slides_T3_vectorcalc_02_differentialoperators_expl_maxwell2wave.pdf; Mathe 2/IM2_slides_T3_vectorcalc_05_surfintegrals_outlook.pdf
---

:::abgleich
Divergenz, Laplace-Operator, Vektoridentitäten, die Maxwell-Herleitung und Flächenintegrale stehen in den Mathe-2-Folien, im Skript nur die Rotation (Kap. 16). Diese Lektion fasst die Folien zusammen – wichtig auch für Strömungsmechanik und Elektrotechnik.
:::

:::ziel
- Die vier Differentialoperatoren **grad, div, rot, Δ** berechnen und physikalisch deuten.
- Rechenregeln und wichtige Identitäten ($\operatorname{rot}\operatorname{grad}=0$, $\operatorname{div}\operatorname{rot}=0$, $\operatorname{rot}\operatorname{rot}=\operatorname{grad}\operatorname{div}-\Delta$) anwenden.
- Die Wellengleichung aus den Maxwell-Gleichungen herleiten.
- Flächenintegrale und Integralsätze (Gauß, Stokes, Green) einordnen.
:::

## Skalar- und Vektorfelder

Skalarfeld $f:D\subset\mathbb R^n\to\mathbb R$ (Temperatur, Druck, Potential); Vektorfeld $\mathbf v:D\subset\mathbb R^n\to\mathbb R^m$ (Geschwindigkeit, Kraft, elektrisches Feld), meist $n,m\in\{2,3\}$ ($n=4$ mit Zeit).

## Die Operatoren (kartesisch)

| Operator | wirkt auf | Ergebnis | Formel | Deutung |
|---|---|---|---|---|
| $\operatorname{grad}f=\nabla f$ | Skalarfeld | Vektorfeld | $(\partial_1f,\ldots,\partial_nf)$ | steilster Anstieg |
| $\operatorname{div}\mathbf v=\nabla\cdot\mathbf v$ | Vektorfeld | Skalarfeld | $\partial_1v_1+\ldots+\partial_nv_n$ | **Quellstärke** (Ausfluss pro Volumen) |
| $\operatorname{rot}\mathbf v=\nabla\times\mathbf v$ | Vektorfeld (3D) | Vektorfeld | s. Lektion 16.2 | **Wirbelstärke** (doppelte lokale Winkelgeschwindigkeit) |
| $\Delta f=\nabla\cdot\nabla f$ | Skalarfeld | Skalarfeld | $\partial_1^2f+\ldots+\partial_n^2f$ | Abweichung vom Mittelwert der Umgebung |

**2D-Rotation** (skalar): $\operatorname{rot}\mathbf v=\partial_xv_2-\partial_yv_1$.
**Laplace auf Vektorfelder** komponentenweise: $\Delta\mathbf v=(\Delta v_1,\Delta v_2,\Delta v_3)$.

:::bsp
- $\mathbf v=(x,y,z)$: $\operatorname{div}=3$ (Quelle überall), $\operatorname{rot}=\mathbf 0$.
- $\mathbf v=(-y,x,0)$: $\operatorname{div}=0$ (quellenfrei), $\operatorname{rot}=(0,0,2)$ (starre Drehung mit $\omega=1$).
- $f=x^2+y^2+z^2$: $\Delta f=6$; $f=\frac1r$ (außer 0): $\Delta f=0$ (harmonisch – Gravitations-/Coulombpotential).
- Inkompressible Strömung: $\operatorname{div}\mathbf v=0$; Potentialströmung: zusätzlich $\operatorname{rot}\mathbf v=0$ ⇒ $\mathbf v=\nabla\Phi$ mit $\Delta\Phi=0$.
:::

## Rechenregeln und Identitäten

- Linearität: $\nabla(af+bg)=a\nabla f+b\nabla g$ (ebenso div, rot).
- Produktregel: $\nabla(fg)=g\nabla f+f\nabla g$; $\operatorname{div}(f\mathbf v)=\nabla f\cdot\mathbf v+f\operatorname{div}\mathbf v$.
- Quotientenregel: $\nabla\frac1g=-\frac{\nabla g}{g^2}$.

:::satz Wichtige Identitäten ($C^2$-Felder, Satz von Schwarz)
$$\operatorname{rot}\operatorname{grad}f=\mathbf 0,\qquad\operatorname{div}\operatorname{rot}\mathbf v=0,\qquad\operatorname{rot}\operatorname{rot}\mathbf v=\operatorname{grad}\operatorname{div}\mathbf v-\Delta\mathbf v.$$
Die erste erklärt, warum Gradientenfelder wirbelfrei sind.
:::

*Beweis der dritten (Folien):* Komponentenweise ausschreiben, z. B. 1. Komponente von $\nabla\times(\nabla\times\mathbf v)$: $\partial_2(\partial_1v_2-\partial_2v_1)-\partial_3(\partial_3v_1-\partial_1v_3)$; $\partial_1^2v_1$ addieren und abziehen ⇒ $\partial_1(\partial_1v_1+\partial_2v_2+\partial_3v_3)-\Delta v_1$.

## Anwendung: Von Maxwell zur Wellengleichung

Maxwell-Gleichungen im Vakuum:
$$\operatorname{rot}\mathbf E=-\mu_0\partial_t\mathbf H,\quad\operatorname{rot}\mathbf H=\varepsilon_0\partial_t\mathbf E,\quad\operatorname{div}\mathbf E=0,\quad\operatorname{div}\mathbf H=0.$$
Rotation der ersten Gleichung, Zeitableitung der zweiten (Schwarz: $\operatorname{rot}$ und $\partial_t$ vertauschen):
$$\operatorname{rot}\operatorname{rot}\mathbf E=-\mu_0\operatorname{rot}\partial_t\mathbf H=-\mu_0\varepsilon_0\partial_t^2\mathbf E.$$
Identität und $\operatorname{div}\mathbf E=0$:
$$\Delta\mathbf E=\mu_0\varepsilon_0\,\partial_t^2\mathbf E\qquad(\text{Wellengleichung, Ausbreitung mit }c=\tfrac1{\sqrt{\mu_0\varepsilon_0}}).$$
Analog $\Delta\mathbf H=\mu_0\varepsilon_0\partial_t^2\mathbf H$. (Zusammenhang mit E-Technik: elektromagnetische Wellen, Antennen, Radar.)

## Ausblick: Flächenintegrale und Integralsätze

**Parametrisierte Fläche** $\Phi:D\subset\mathbb R^2\to\mathbb R^3$, $(u,v)\mapsto\Phi(u,v)$ (Rang 2). Normalenvektor $\mathbf n_\Phi=\partial_u\Phi\times\partial_v\Phi$.
- Flächeninhalt: $A=\iint_D\|\partial_u\Phi\times\partial_v\Phi\|\,\d(u,v)$.
- Skalares Flächenintegral: $\iint_Df(\Phi)\|\partial_u\Phi\times\partial_v\Phi\|\,\d(u,v)$.
- **Fluss** eines Vektorfelds: $\iint_D\mathbf v(\Phi)\cdot(\partial_u\Phi\times\partial_v\Phi)\,\d(u,v)$.

:::bsp Kugeloberfläche
$\Phi(\theta,\phi)=R(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$: $\|\partial_\theta\Phi\times\partial_\phi\Phi\|=R^2\sin\theta$ ⇒ $A=\int_0^{2\pi}\int_0^\pi R^2\sin\theta\,\d\theta\,\d\phi=4\pi R^2$.
:::

| Satz | Aussage | Bedeutung |
|---|---|---|
| **Gauß** (Divergenzsatz) | $\oiint_{\partial V}\mathbf v\cdot\d\mathbf A=\iiint_V\operatorname{div}\mathbf v\,\d V$ | Fluss durch die Hülle = Summe der Quellen innen |
| **Stokes** | $\oint_{\partial F}\mathbf v\cdot\d\mathbf s=\iint_F\operatorname{rot}\mathbf v\cdot\d\mathbf A$ | Zirkulation = Wirbelfluss durch die Fläche |
| **Green** (eben) | $\oint_{\partial B}\mathbf v\cdot\d\mathbf s=\iint_B(\partial_xv_2-\partial_yv_1)\,\d A$ | → Kapitel 17 |

**Konservative Felder** (Zusammenfassung, einfach zusammenhängendes Gebiet): äquivalent sind (1) $\nabla\times\mathbf v=\mathbf 0$, (2) Kurvenintegrale wegunabhängig, (3) $\oint=0$ für jede geschlossene Kurve, (4) es gibt ein Potential $\mathbf v=\nabla\varphi$.

## Aufgaben

:::aufgabe 1
$\mathbf v=(x^2y,\ yz,\ xz^2)$: $\operatorname{div}\mathbf v$, $\operatorname{rot}\mathbf v$ und Probe $\operatorname{div}\operatorname{rot}\mathbf v=0$.
:::loesung
$\operatorname{div}=2xy+z+2xz$. $\operatorname{rot}=(0-y,\ 0-z^2,\ 0-x^2)=(-y,-z^2,-x^2)$. $\operatorname{div}\operatorname{rot}=0+0+0=0$ ✓.
:::
:::

:::aufgabe 2
Zeige $\operatorname{rot}\operatorname{grad}f=\mathbf 0$ für $C^2$-Funktionen.
:::loesung
1. Komponente: $\partial_2\partial_3f-\partial_3\partial_2f=0$ nach Schwarz, analog die anderen.
:::
:::

:::aufgabe 3
Gradient, Laplace von $f=\frac1r$, $r=\sqrt{x^2+y^2+z^2}$.
:::loesung
$\nabla\frac1r=-\frac{\mathbf x}{r^3}$ (Quotientenregel, $\nabla r=\frac{\mathbf x}r$). $\Delta\frac1r=\operatorname{div}\big(-\frac{\mathbf x}{r^3}\big)=-\frac3{r^3}+3\frac{r^2}{r^5}=0$ für $r\ne0$.
:::
:::

## Karteikarten

:::karte
Divergenz – Formel und Bedeutung?
???
$\nabla\cdot\mathbf v=\sum\partial_iv_i$; Quellstärke (div = 0: quellenfrei/inkompressibel).
:::

:::karte
Laplace-Operator?
???
$\Delta f=\operatorname{div}\operatorname{grad}f=\sum\partial_i^2f$
:::

:::karte
rot grad f und div rot v?
???
Beide null (für C²-Felder).
:::

:::karte
rot rot v?
???
grad div v − Δv
:::

:::karte
Satz von Gauß?
???
Fluss durch die geschlossene Hülle = Volumenintegral der Divergenz.
:::

:::karte
Wellengleichung aus Maxwell?
???
$\Delta\mathbf E=\mu_0\varepsilon_0\,\partial_t^2\mathbf E$, $c=1/\sqrt{\mu_0\varepsilon_0}$.
:::
