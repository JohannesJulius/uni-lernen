---
title: Kurvendiskussion – Extrema, Monotonie, Krümmung, Konvexität, Pole
chapter: 3 Analysis
minutes: 100
sources: Mathe 1/IngMath1_slides_3_ana_08_differenzierbarkeit_kurvendiskussion.pdf; Mathe 1/IngMath1_slides_3_ana_08_EXTRA_konvexitaet.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#64
---

:::ziel
- Lokale und globale Extrema definieren; notwendige und hinreichende Bedingungen.
- Monotonie über $f'$, Krümmung/Konvexität über $f''$, Wendepunkte, Sattel-/Terrassenpunkte.
- Definitionslücken klassifizieren: Pol, hebbare Lücke, Sprungstelle; Asymptoten.
- Eine vollständige Kurvendiskussion strukturiert durchführen.
:::

## Extrema

:::def Lokale und globale Extrema
$f$ hat in $x_e$ ein **lokales Maximum** (Minimum), wenn es $\varepsilon>0$ gibt mit $f(x)\le f(x_e)$ (bzw. $\ge$) für alle $x\in(x_e-\varepsilon,x_e+\varepsilon)\cap D$. **Global**, wenn das für alle $x\in D$ gilt. $x_e$ heißt Extremstelle, $f(x_e)$ Extremwert.
:::

:::satz Notwendige Bedingung (Fermat)
Ist $f$ differenzierbar und hat ein lokales Extremum an einer **inneren** Stelle $x_e$, so gilt $f'(x_e)=0$.
:::
*Beweis* (Maximum): Für $x<x_e$ ist $\frac{f(x)-f(x_e)}{x-x_e}\ge0$ (Zähler ≤ 0, Nenner < 0), für $x>x_e$ ist er $\le0$. Da $f$ differenzierbar ist, sind beide einseitigen Grenzwerte gleich ⇒ $f'(x_e)=0$.

:::achtung $f'(x_e)=0$ ist nicht hinreichend
$f(x)=x^3$: $f'(0)=0$, aber kein Extremum (Terrassenpunkt). Außerdem können Extrema an **Randpunkten** oder **Knickstellen** (wo $f$ nicht differenzierbar ist, z. B. $|x|$) liegen – dort gilt $f'=0$ nicht!
:::

## Monotonie

:::satz
Ist $f$ stetig auf $[a,b]$, differenzierbar auf $(a,b)$:
$f'\ge0$ ⇒ monoton wachsend, $f'>0$ ⇒ streng wachsend, $f'\le0$ ⇒ monoton fallend, $f'<0$ ⇒ streng fallend. (Folgt aus dem Mittelwertsatz.)
:::

:::satz Hinreichende Bedingung: Vorzeichenwechsel von $f'$
Ist $f'(x_e)=0$ und wechselt $f'$ bei $x_e$ das Vorzeichen
- von $+$ nach $-$: **Maximum**,
- von $-$ nach $+$: **Minimum**,
- kein Vorzeichenwechsel: kein Extremum (Sattel-/Terrassenpunkt).
:::

## Krümmung und Konvexität

:::def Konvex / konkav
$f$ heißt **konvex** auf $I$, wenn für alle $x_1,x_2\in I$, $\lambda\in[0,1]$:
$$f((1-\lambda)x_1+\lambda x_2)\le(1-\lambda)f(x_1)+\lambda f(x_2)$$
(die Sehne liegt **über** dem Graphen; äquivalent: der **Epigraph** $\{(x,y):y\ge f(x)\}$ ist eine konvexe Menge). $f$ heißt **konkav**, wenn $-f$ konvex ist.
:::

:::satz Krümmungskriterium
$f''\ge0$ auf $I$ ⇒ $f$ konvex (**linksgekrümmt**, Graph liegt über den Tangenten, „lächelt"). $f''\le0$ ⇒ konkav (**rechtsgekrümmt**, „traurig").
:::

:::satz Hinreichende Bedingung über $f''$
$f'(x_e)=0$ und $f''(x_e)<0$ ⇒ lokales **Maximum**; $f''(x_e)>0$ ⇒ lokales **Minimum**. Bei $f''(x_e)=0$ keine Aussage – dann Vorzeichenwechsel von $f'$ prüfen oder höhere Ableitungen:
Ist $f'(x_e)=\dots=f^{(n-1)}(x_e)=0$, $f^{(n)}(x_e)\ne0$: $n$ gerade ⇒ Extremum (Min bei $>0$), $n$ ungerade ⇒ Sattelpunkt.
:::

:::def Wendepunkt
Stelle, an der die Krümmung wechselt (konvex ↔ konkav). Notwendig: $f''(x_w)=0$; hinreichend z. B. $f''(x_w)=0$ und $f'''(x_w)\ne0$ (oder Vorzeichenwechsel von $f''$). Wendepunkt mit waagrechter Tangente heißt **Sattel-/Terrassenpunkt**.
:::

:::bsp
- $x^2$: $f'(0)=0$, $f''=2>0$ ⇒ globales Minimum, konvex.
- $x^3$: $f'(0)=f''(0)=0$, $f'''(0)=6\ne0$ ⇒ Terrassenpunkt; konkav auf $(-\infty,0)$, konvex auf $(0,\infty)$.
- $x^4$: $f'(0)=f''(0)=f'''(0)=0$, $f^{(4)}(0)=24>0$ ⇒ Minimum (und $f''=12x^2\ge0$ ⇒ konvex).
:::

## Definitionslücken

| Typ | Definition | Beispiele |
|---|---|---|
| **Polstelle** | $\lim_{x\to x_p}|f(x)|=\infty$ (von links und rechts) | $\frac1x$ (mit VZW), $\frac1{x^2}$, $\frac1{|x|}$, $\frac1{(x-1)^2}$ (ohne VZW) |
| **hebbare Lücke** | links- und rechtsseitiger Grenzwert existieren und sind gleich | $\frac{\sin x}x$, $\frac{x^2-1}{x-1}$ |
| **Sprungstelle** | einseitige Grenzwerte existieren, sind aber verschieden | Heaviside, Treppenfunktion, $\frac{|x|}x$ |

Bei rationalen Funktionen $\frac{p}{q}$: Nullstellen des Nenners, die keine (bzw. höherfache) Nullstellen des Zählers sind, sind Pole. Gemeinsame Nullstellen kürzen ⇒ evtl. hebbar.

**Asymptoten:** senkrecht an Polen; waagrecht/schräg für $x\to\pm\infty$: Polynomdivision $\frac pq=s(x)+\frac{r}{q}$ ⇒ $s(x)$ ist die Asymptote (Grad Zähler ≤ Grad Nenner + 1 ⇒ Gerade).

## Vollständige Kurvendiskussion

:::rezept Schema
1. **Definitionsbereich**, Definitionslücken (Art klassifizieren).
2. **Symmetrie** (gerade/ungerade), ggf. Periodizität.
3. **Nullstellen** (und Schnittpunkt mit der $y$-Achse).
4. **Verhalten an den Rändern** ($x\to\pm\infty$, an Lücken), Asymptoten.
5. **Ableitungen** $f',f'',f'''$.
6. **Extrema:** $f'=0$, mit $f''$ oder VZW prüfen; $y$-Werte berechnen.
7. **Monotoniebereiche** (Vorzeichentabelle von $f'$).
8. **Wendepunkte** und Krümmungsbereiche ($f''$).
9. **Wertebereich**, Skizze.
:::

:::bsp $f(x)=\dfrac{x^2}{x-1}$
1. $D=\R\setminus\{1\}$. Bei $x=1$: Zähler $1\ne0$ ⇒ **Pol** mit Vorzeichenwechsel ($x\searrow1$: $+\infty$, $x\nearrow1$: $-\infty$).
2. Keine Symmetrie. 3. Nullstelle $x=0$ (doppelt).
4. Polynomdivision: $\frac{x^2}{x-1}=x+1+\frac1{x-1}$ ⇒ schräge Asymptote $y=x+1$.
5. $f'(x)=\frac{2x(x-1)-x^2}{(x-1)^2}=\frac{x^2-2x}{(x-1)^2}=\frac{x(x-2)}{(x-1)^2}$; $f''(x)=\frac{2}{(x-1)^3}$ (aus $f=x+1+(x-1)^{-1}$: $f''=2(x-1)^{-3}$).
6. $f'=0$: $x=0$ und $x=2$. $f''(0)=-2<0$ ⇒ **Max** $(0,0)$; $f''(2)=2>0$ ⇒ **Min** $(2,4)$.
7. $f'>0$ auf $(-\infty,0)$ und $(2,\infty)$ (wachsend); $f'<0$ auf $(0,1)$ und $(1,2)$ (fallend).
8. $f''\ne0$ ⇒ kein Wendepunkt; konkav für $x<1$, konvex für $x>1$.
9. Wertebereich $(-\infty,0]\cup[4,\infty)$.
:::

## Aufgaben

:::aufgabe 1
Diskutiere $f(x)=x^3-3x$.
:::loesung
$D=\R$, ungerade (punktsymmetrisch). Nullstellen $x(x^2-3)=0$: $0,\pm\sqrt3$. $f'=3x^2-3=0\Rightarrow x=\pm1$. $f''=6x$: $f''(1)=6>0$ ⇒ Min $(1,-2)$; $f''(-1)<0$ ⇒ Max $(-1,2)$. Wendepunkt $x=0$ ($f'''=6\ne0$), $(0,0)$. $x\to\pm\infty$: $f\to\pm\infty$.
:::
:::

:::aufgabe 2
Bestimme die Extrema von $f(x)=x\e^{-x}$.
:::loesung
$f'=(1-x)\e^{-x}=0\Rightarrow x=1$; $f''=(x-2)\e^{-x}$, $f''(1)=-\e^{-1}<0$ ⇒ Max $(1,\frac1\e)$. Wendepunkt bei $x=2$. $\lim_{x\to\infty}f=0$, $\lim_{x\to-\infty}f=-\infty$.
:::
:::

:::aufgabe 3
Klassifiziere die Definitionslücken von $f(x)=\frac{x^2-4}{x^2-x-2}$.
:::loesung
Nenner $(x-2)(x+1)$, Zähler $(x-2)(x+2)$. $x=2$: hebbar, $f(x)=\frac{x+2}{x+1}\to\frac43$. $x=-1$: Pol mit VZW. Waagrechte Asymptote $y=1$.
:::
:::

:::aufgabe 4
Zeige: $\e^x$ ist konvex, und folgere $\e^x\ge1+x$ für alle $x$.
:::loesung
$(\e^x)''=\e^x>0$ ⇒ konvex ⇒ Graph liegt über jeder Tangente, insbesondere über der Tangente in 0: $y=1+x$.
:::
:::

## Karteikarten

:::karte
Notwendige und hinreichende Bedingung für ein lokales Minimum (innen)?
???
Notwendig $f'(x_e)=0$; hinreichend zusätzlich $f''(x_e)>0$ (oder VZW von $f'$ von − nach +).
:::

:::karte
Was bedeutet $f''>0$ geometrisch?
???
Konvex/linksgekrümmt: Graph liegt oberhalb der Tangenten, Sehnen über dem Graphen.
:::

:::karte
Wendepunkt – Bedingungen?
???
$f''(x_w)=0$ und $f'''(x_w)\ne0$ (bzw. VZW von $f''$).
:::

:::karte
Pol vs. hebbare Lücke vs. Sprungstelle?
???
Pol: $|f|\to\infty$. Hebbar: beide einseitigen Grenzwerte gleich. Sprung: einseitige Grenzwerte verschieden.
:::

:::karte
Wo können Extrema außer bei $f'=0$ liegen?
???
An Randpunkten des Intervalls und an Stellen, an denen $f$ nicht differenzierbar ist.
:::
