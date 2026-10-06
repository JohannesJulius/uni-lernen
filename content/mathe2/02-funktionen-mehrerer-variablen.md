---
title: 13.1 Funktionen mehrerer Variablen – Typen, Visualisierung, Stetigkeit
chapter: 13 Funktionen von mehreren Variablen
minutes: 90
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#271; Mathe 2/IM2_slides_T2_anamv_01_functions.pdf; Mathe 2/IM2_slides_T2_anamv_02_functions_mv_continuity.pdf; Mathe 2/IM2_wrksheet_T2_anamv_01_continuity.pdf
---

:::ziel
- Funktionen $f:\mathbb R^n\to\mathbb R^m$ auswerten und die wichtigen Spezialfälle (Kurve, Fläche, Skalarfeld, Vektorfeld) unterscheiden.
- Skalarfelder als Graph, Farbbild und **Höhenlinien** darstellen; Vektorfelder als Pfeilbild.
- **Stetigkeit** im Mehrdimensionalen über Folgen definieren, nachweisen (Rückführung auf 1D) und widerlegen (zwei Annäherungswege).
:::

## Was ist neu?

Bisher: $f:\mathbb R\to\mathbb R$. Jetzt: $f:\mathbb R^n\to\mathbb R^m$ – $n$ Eingänge, $m$ Ausgänge. Grundsätzlich nichts Neues:
- $f(x_1,x_2,x_3)=x_1(x_2+x_3)$: $f(2,1,-5)=-8$.
- $g(x_1,\ldots,x_4)=\big(x_4\sin x_1,\ \frac{x_1x_3}{x_2}\big)$: $g(\frac\pi2,2,-3,5)=(5,-\frac{3\pi}4)$.
- **Lineare** Funktionen $f(\mathbf x)=A\mathbf x$ ($A\in\mathbb R^{m\times n}$) kennen wir aus Mathe 1 – sie lassen Geraden gerade (sie strecken, scheren, drehen); nichtlineare Abbildungen **krümmen** Geraden (Bild des „Strudels" im Skript: Drehung um den Winkel $\|\mathbf x\|$).

Eine Funktion mit $m$-dimensionalem Output besteht aus $m$ **Komponentenfunktionen** $f_i:\mathbb R^n\to\mathbb R$, die man einzeln untersuchen kann. Daher beginnt man mit **skalarwertigen** Funktionen.

## Spezialfälle und Visualisierung

| Fall | Name | Bild | Beispiel |
|---|---|---|---|
| $n=1$ | **Kurve** $\gamma:\mathbb R\to\mathbb R^{2,3}$ | Linie (Durchlaufsinn nicht sichtbar!) | $\gamma(t)=(\sin t,\sin2t)$, Schraube $(t\cos t,0{,}1t\sin t,t)$ → Kap. 15 |
| $n=2$, $m=3$ | **Fläche** im Raum | gekrümmte Fläche | Kugelstück $(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$ |
| $m=1$ | **Skalarfeld** | Graph $z=f(x,y)$, Farbcode, **Höhenlinien** | Temperatur, Druck, Potential |
| $n=m$ | **Vektorfeld** | Pfeile an Rasterpunkten | Kraftfeld, Strömung → Kap. 16 |

:::def Niveaumenge / Höhenlinie
$N_c=\{\mathbf x\in\mathbb R^n:f(\mathbf x)=c\}$. Für $n=2$: Höhenlinien (Isolinien) wie auf der Wanderkarte; für $n=3$: Niveauflächen.
:::

:::bsp Höhenlinien
- $f(x,y)=x^2+y^2$: Kreise mit Radius $\sqrt c$ – Paraboloid, Linien rücken nach außen zusammen (wird steiler).
- $f(x,y)=\sqrt{x^2+y^2}$: Kreise mit Radius $c$, gleich verteilt – Kegel (überall gleich steil).
- $f(x,y)=|x|+|y|$: Quadrate (auf der Spitze); $\max\{x,y\}=c$: rechte Winkel mit Ecke bei $(c,c)$.
- $f(x,y)=\frac14x^2+y^2$: Ellipsen mit Halbachsen $2\sqrt c$, $\sqrt c$.
- $f(x,y)=\sin2x\cos y$: „Eierkarton".
:::

## Stetigkeit

:::def Stetigkeit (Folgenkriterium)
$f:\mathbb R^n\to\mathbb R^m$ ist **stetig in $\mathbf x$**, wenn für **alle** Folgen $\mathbf x_i\to\mathbf x$ gilt $f(\mathbf x_i)\to f(\mathbf x)$. (Vektorfolgen konvergieren, wenn $\|\mathbf x_i-\mathbf x\|\to0$ ⇔ jede Komponente konvergiert.)
Gehört $\mathbf x$ nicht zum Definitionsbereich, aber alle Grenzwerte existieren und sind gleich, heißt $f$ dort **stetig ergänzbar**.
:::

**Anschaulich:** Kleine Änderung des Inputs ⇒ kleine Änderung des Outputs; die Fläche hat keine Sprünge, Risse oder Löcher.

:::achtung Der Unterschied zu 1D
In $\mathbb R$ kann man sich einem Punkt nur von links und rechts nähern. In $\mathbb R^2$ gibt es **unendlich viele Wege** (Geraden aus jeder Richtung, Parabeln, Spiralen …). Stetigkeit verlangt denselben Grenzwert auf **jedem** Weg.
:::

:::rezept Stetigkeit nachweisen: Rückführung auf 1D
Zwischenwert einschieben (nur eine Variable ändert sich pro Schritt) + Dreiecksungleichung:
$$|f(x_n,y_n)-f(x,y)|\le|f(x_n,y_n)-f(x,y_n)|+|f(x,y_n)-f(x,y)|\to0.$$
Praktisch: Summen, Produkte, Quotienten (Nenner ≠ 0) und Verkettungen stetiger Funktionen sind stetig – Polynome in mehreren Variablen, $\sin(xy)$, $e^{x^2+y}$ … sind überall stetig.
:::

:::bsp Volumen eines Druckbehälters (Skript Bsp. 13.6)
$V(r,h)=\pi r^2h$: $|V(r_n,h_n)-V(r,h)|\le\pi|h_n|\,|r_n+r|\,|r_n-r|+\pi r^2|h_n-h|\to0$ – stetig. Physikalisch wichtig: Fertigungstoleranzen erzeugen keine Volumensprünge.
:::

:::rezept Unstetigkeit nachweisen
Zwei Annäherungswege mit **verschiedenen** Grenzwerten finden (z. B. entlang $y=0$, $x=0$, $y=kx$, $y=x^2$) – oder einen Weg, auf dem der Grenzwert nicht existiert.
:::

:::bsp Klassiker
$f(x,y)=\frac{xy}{x^2+y^2}$, $f(0,0)=0$. Entlang der Achsen: $f=0$. Entlang $y=kx$: $f=\frac{k}{1+k^2}$ – hängt von der Richtung ab ⇒ **nicht stetig** in $(0,0)$ (obwohl auf jeder Achse stetig!).
$f(x,y)=\frac{x^2y}{x^2+y^2}$: $|f|\le\frac{x^2}{x^2+y^2}|y|\le|y|\to0$ ⇒ stetig ergänzbar durch 0.
$\frac1{x^2+y^2}$: stetig auf $\mathbb R^2\setminus\{0\}$, in 0 nicht ergänzbar ($\to\infty$); Höhenlinien Kreise.
$x\sin\frac1y$: abseits $y=0$ stetig, auf $y=0$ nicht ergänzbar – aber entlang $y=x$ gegen 0 ergänzbar (Skript Bsp. 13.8).
:::

**Trick Polarkoordinaten:** $x=r\cos\varphi$, $y=r\sin\varphi$. Lässt sich $|f-c|\le g(r)$ mit $g(r)\to0$ **unabhängig von $\varphi$** abschätzen, ist $f$ in 0 stetig (mit Wert $c$).

## Aufgaben

:::aufgabe 1 (Skript 13.1)
Skizziere Niveaumengen von $f=|x|+|y|$, $g=\max\{x,y\}$, $h=\sqrt{x^2+y^2}$.
:::loesung
$f=c$: Quadrat mit Ecken $(\pm c,0)$, $(0,\pm c)$. $g=c$: Halbgeraden $x=c,\ y\le c$ und $y=c,\ x\le c$ (rechter Winkel, Ecke $(c,c)$). $h=c$: Kreis mit Radius $c$.
:::
:::

:::aufgabe 2
Ist $f(x,y)=\frac{x^2-y^2}{x^2+y^2}$ in $(0,0)$ stetig ergänzbar?
:::loesung
Entlang $y=0$: $f=1$; entlang $x=0$: $f=-1$ ⇒ nein. (In Polarkoordinaten $f=\cos2\varphi$ – hängt nur von der Richtung ab.)
:::
:::

:::aufgabe 3
Zeige mit Polarkoordinaten: $f(x,y)=\frac{x^3+y^3}{x^2+y^2}$ ist durch $f(0,0)=0$ stetig ergänzbar.
:::loesung
$f=r\,(\cos^3\varphi+\sin^3\varphi)$, $|f|\le2r\to0$ unabhängig von $\varphi$.
:::
:::

## Karteikarten

:::karte
Kurve, Skalarfeld, Vektorfeld – welche Dimensionen?
???
Kurve n = 1; Skalarfeld m = 1; Vektorfeld n = m.
:::

:::karte
Stetigkeit im ℝⁿ (Definition)?
???
Für alle Folgen $\mathbf x_i\to\mathbf x$ gilt $f(\mathbf x_i)\to f(\mathbf x)$.
:::

:::karte
Wie zeigt man Unstetigkeit in 2D?
???
Zwei Annäherungswege mit verschiedenen Grenzwerten (z. B. y = kx mit k-abhängigem Ergebnis).
:::

:::karte
Ist $\frac{xy}{x^2+y^2}$ in 0 stetig ergänzbar?
???
Nein: entlang y = kx Grenzwert $\frac{k}{1+k^2}$.
:::

:::karte
Was ist eine Niveaumenge?
???
$\{\mathbf x: f(\mathbf x)=c\}$ – Höhenlinie (2D) bzw. Niveaufläche (3D).
:::
