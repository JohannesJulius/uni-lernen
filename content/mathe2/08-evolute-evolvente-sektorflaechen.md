---
title: 15.3 Ergänzung aus den Folien – Evolute, Evolvente (Zahnräder), Sektorflächen (Leibniz), Flächen zwischen Kurven
chapter: 15 Kurven im ℝᵐ
minutes: 80
sources: Mathe 2/IM2_slides_T1_curves_11_parametrizations_curvature_evolute.pdf; Mathe 2/IM2_slides_T1_curves_12_parametrizations_curvature_evolvente.pdf; Mathe 2/IM2_slides_T1_curves_13_areas_part1.pdf; Mathe 2/IM2_slides_T1_curves_14_areas_part2.pdf
---

:::abgleich
Diese Themen stehen in den Mathe-2-Folien (Prof. Graf), aber nicht im Skript. Sie bauen direkt auf Krümmung und Bogenlänge auf.
:::

:::ziel
- **Evolute** als Ort der Krümmungsmittelpunkte berechnen (Ellipse → Astroide).
- **Evolvente** („Fadenabwicklung") definieren; Kreisevolvente und Evolventenverzahnung.
- Von einem Ortsvektor überstrichene Flächen mit der **Leibnizschen Sektorformel** berechnen; Flächen unter parametrisierten Kurven.
:::

## Evolute

:::def
Die **Evolute** einer regulären ebenen Kurve ist die Kurve der **Krümmungsmittelpunkte**:
$$\gamma_{Ev}(t)=\gamma(t)+\frac1{\kappa(t)}\,\mathbf n(t).$$
:::

:::bsp Evolute der Ellipse
$\gamma=(a\cos t,b\sin t)$, $\kappa=\frac{ab}{(a^2\sin^2t+b^2\cos^2t)^{3/2}}$, Krümmungsradius $\rho=\frac{(a^2\sin^2t+b^2\cos^2t)^{3/2}}{ab}$. Krümmungsmittelpunkte:
$$M(t)=\begin{pmatrix}\frac{a^2-b^2}a\cos^3t\\\frac{b^2-a^2}b\sin^3t\end{pmatrix}\quad\text{bzw.}\quad M=\Big(\frac{a^2-b^2}{a^4}x^3,\ \frac{b^2-a^2}{b^4}y^3\Big).$$
Das ist eine gestreckte **Astroide** (Sternkurve mit vier Spitzen); die Spitzen gehören zu den Scheiteln der Ellipse (extreme Krümmung). Beim Kreis ($a=b$) schrumpft die Evolute auf den Mittelpunkt.
:::

## Evolvente

:::def
$$\gamma_E(t)=\gamma(t)-\frac{\dot\gamma(t)}{\|\dot\gamma(t)\|}\int_a^t\|\dot\gamma(\tau)\|\,\d\tau=\gamma(t)-s(t)\,\mathbf t(t).$$
Anschaulich: Ein auf der Kurve aufliegender, straff gehaltener **Faden wird abgewickelt** – das Fadenende beschreibt die Evolvente (Einheitstangente × abgewickelte Bogenlänge). Evolute und Evolvente sind zueinander „invers": Die Evolute einer Evolvente ist die Ausgangskurve.
:::

:::bsp Kreisevolvente
Kreis $R(\cos t,\sin t)$: $\mathbf t=(-\sin t,\cos t)$, $s=Rt$:
$$\gamma_E(t)=R\begin{pmatrix}\cos t+t\sin t\\\sin t-t\cos t\end{pmatrix}.$$
**Anwendung: Evolventenverzahnung** – fast alle Zahnräder im Maschinen- und Flugzeugbau (Getriebe, Turbofan-Getriebe) haben Zahnflanken in Form von Kreisevolventen: Die Zähne wälzen mit konstanter Übersetzung, der Eingriff ist unempfindlich gegen Achsabstandsfehler, und die Werkzeuge sind einfach (gerade Zahnstangenflanken). Weitere Verzahnungen: Zykloidenverzahnung (Uhren), Kreisbogenverzahnung.
:::

## Sektorflächen

**Polarkoordinaten:** Fläche, die der Fahrstrahl $r(\varphi)$ zwischen $\varphi=a$ und $b$ überstreicht (dünne Dreiecke $\frac12r\cdot r\Delta\varphi$):
$$A=\frac12\int_a^br(\varphi)^2\,\d\varphi.$$
Kreis: $\frac12r^2b$; ganzer Kreis $\pi r^2$.

**Parametrisierte Kurve:** Dreieck aus $\gamma(t)$ und $\gamma(t+\Delta t)$: $\frac12\det\big(\gamma(t),\gamma(t+\Delta t)-\gamma(t)\big)\approx\frac12\det(\gamma,\dot\gamma)\Delta t$:

:::satz Leibnizsche Sektorformel
Vom Ortsvektor $\gamma(t)=(x(t),y(t))$ überstrichene (orientierte) Fläche:
$$A=\frac12\int_a^b\big(x\dot y-y\dot x\big)\,\d t.$$
Für eine **geschlossene**, gegen den Uhrzeigersinn durchlaufene Kurve ist das der Flächeninhalt des umschlossenen Gebiets (Spezialfall des Satzes von Green, Kap. 17).
:::

:::bsp Ellipse
$x\dot y-y\dot x=a\cos t\cdot b\cos t+b\sin t\cdot a\sin t=ab$ ⇒ $A=\frac12\int_0^{2\pi}ab\,\d t=\pi ab$.
:::

**Fläche unter einer parametrisierten Kurve** (zwischen Kurve und $x$-Achse, $x$ monoton): $A=\int y(t)\dot x(t)\,\d t$ (Substitution $x=x(t)$ in $\int y\,\d x$). **Zwischen zwei Kurven:** die Begrenzung als **geschlossene** Kurve aus Teilstücken zusammensetzen ($\gamma_1$, senkrechte Verbindungen, $\gamma_2$ rückwärts) und $\oint y\dot x\,\d t$ (bzw. Leibniz) aufsummieren – Achtung Orientierung/Vorzeichen.

:::bsp Fläche unter einem Zykloidenbogen
$x=R(\varphi-\sin\varphi)$, $y=R(1-\cos\varphi)$: $A=\int_0^{2\pi}R^2(1-\cos\varphi)^2\d\varphi=R^2\int_0^{2\pi}(1-2\cos\varphi+\cos^2\varphi)\d\varphi=R^2(2\pi+\pi)=3\pi R^2$ – dreimal die Kreisfläche.
:::

## Aufgaben

:::aufgabe 1
Viertelkreissektor des Kreises um $(x_c,y_c)$ mit Radius $r$: Bestätige mit der Leibniz-Formel (geschlossene Kurve: Bogen $t\in[0,\frac\pi2]$, Radius zurück zum Mittelpunkt, Radius zum Startpunkt) $A=\frac{\pi r^2}4$.
:::loesung
Leibniz ist translationsinvariant für geschlossene Kurven. Bogen: $\frac12\int_0^{\pi/2}\big[(x_c+r\cos t)r\cos t+(y_c+r\sin t)r\sin t\big]\d t=\frac12\big[r^2\frac\pi2+rx_c+ry_c\big]$. Strecke $\gamma_2$: von $(x_c,y_c+r)$ nach $(x_c,y_c)$: $x=x_c$, $\dot x=0$, $\dot y=-r$ ⇒ Beitrag $\frac12\int_0^1x_c(-r)\d t=-\frac12rx_c$. Strecke $\gamma_3$: von $(x_c,y_c)$ nach $(x_c+r,y_c)$: $\dot y=0$, $\dot x=r$ ⇒ $-\frac12\int_0^1y_cr\,\d t=-\frac12ry_c$. Summe: $\frac{\pi r^2}4$ ✓.
:::
:::

:::aufgabe 2
Fläche der Kardioide $r(\varphi)=1+\cos\varphi$.
:::loesung
$A=\frac12\int_0^{2\pi}(1+\cos\varphi)^2\d\varphi=\frac12(2\pi+0+\pi)=\frac{3\pi}2$.
:::
:::

## Karteikarten

:::karte
Evolute?
???
Ort der Krümmungsmittelpunkte $\gamma+\frac1\kappa\mathbf n$.
:::

:::karte
Evolvente – Anschauung und Anwendung?
???
Abgewickelter Faden $\gamma-s\,\mathbf t$; Kreisevolvente = Zahnflanke der Evolventenverzahnung.
:::

:::karte
Leibnizsche Sektorformel?
???
$A=\frac12\int(x\dot y-y\dot x)\,\d t$
:::

:::karte
Sektorfläche in Polarkoordinaten?
???
$A=\frac12\int r(\varphi)^2\,\d\varphi$
:::
