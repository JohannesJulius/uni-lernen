---
title: 17.1 Bereichsintegrale – Rechtecke, Satz von Fubini, Normalbereiche, Masse und Schwerpunkt
chapter: 17 Bereichsintegrale
minutes: 120
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#361; Mathe 2/IM2_slides_T2_anamv_14_integration_0_recap1d.pdf; Mathe 2/IM2_slides_T2_anamv_15_integration_1_riemann2d.pdf; Mathe 2/IM2_slides_T2_anamv_16_integration_2_riemann2d_expl.pdf
---

:::ziel
- Doppel- und Dreifachintegrale über Rechtecke/Quader als **iterierte Integrale** berechnen; Satz von **Fubini**.
- **Normalbereiche** beschreiben und darüber integrieren; Integrationsreihenfolge **vertauschen** (Grenzen neu bestimmen!).
- Anwendungen: Fläche, Volumen, **Masse, Schwerpunkt**, Trägheitsmoment.
:::

## Idee

Riemann-Summe in 2D: Rechteck in kleine Rechtecke $R_{kl}$ zerlegen, Funktionswert × Fläche $\Delta x\Delta y$ summieren, verfeinern. Für $f\ge0$ ist $\iint f$ das **Volumen** unter dem Graphen. Andere Deutungen: Masse aus Flächendichte, Lichtleistung auf einem Detektor aus Intensität, Ladung aus Ladungsdichte.

**Berechnung durch Querschnitte:** Für festes $y$ ist $F(y)=\int_a^bf(x,y)\,\d x$ die Querschnittsfläche; Aufsummieren über $y$ ergibt das Volumen.

:::def Integral über Rechteck/Quader (Def. 17.1)
$$\iint_{[a,b]\times[c,d]}f\,\d x\,\d y=\int_{y=c}^d\left(\int_{x=a}^bf(x,y)\,\d x\right)\d y,\qquad\iiint_Qf=\int_e^f\!\!\int_c^d\!\!\int_a^bf\,\d x\,\d y\,\d z.$$
Innen integrieren (andere Variablen als Konstanten), dann außen.
:::

:::satz Fubini (Satz 17.2)
Für stetiges $f$ auf Rechtecken/Quadern ist die **Reihenfolge egal**. Spezialfall Produkt: $\iint g(x)h(y)\,\d x\,\d y=\int g\,\d x\cdot\int h\,\d y$.
:::

:::bsp Quader (Skript Bsp. 17.4)
$f=x+y+z$ über $[0,1]\times[1,2]\times[2,3]$. Schätzung: $|D|=1$, Mittelwert ≈ 4,5. Exakt:
$\int_2^3\int_1^2\int_0^1(x+y+z)\,\d x\,\d y\,\d z=\int_2^3\int_1^2(\tfrac12+y+z)\,\d y\,\d z=\int_2^3(2+z)\,\d z=\tfrac92$ ✓.
**Tipp:** Vorher grob schätzen (Mittelwert × Maß) – Sanity Check!
:::

## Normalbereiche

:::def (Def. 17.5)
**Typ I** (bezüglich $x$): $D=\{a\le x\le b,\ u(x)\le y\le o(x)\}$ – senkrechte Linien schneiden $D$ in einer Strecke.
**Typ II** (bezüglich $y$): $D=\{c\le y\le d,\ u(y)\le x\le o(y)\}$.
$$\iint_Df=\int_{x=a}^b\int_{y=u(x)}^{o(x)}f(x,y)\,\d y\,\d x\quad\text{(Typ I)}.$$
Die **äußeren** Grenzen sind Zahlen, die **inneren** dürfen von der äußeren Variablen abhängen. 3D analog: $a\le x\le b$, $u(x)\le y\le o(x)$, $\tilde u(x,y)\le z\le\tilde o(x,y)$.
Kompliziertere Gebiete zerlegt man in Normalbereiche und addiert. $\iint_D1=|D|$ (Fläche bzw. Volumen).
:::

:::rezept Integrationsgrenzen bestimmen
1. **Skizze** des Gebiets (unverzichtbar!).
2. Schnittpunkte der Randkurven berechnen.
3. Äußere Variable wählen; ihren Bereich als Zahlen ablesen.
4. Für festes äußeres $x$ eine senkrechte Linie durch $D$ legen: Eintritt = untere, Austritt = obere Grenze (Funktionen von $x$). Ändert sich die Randkurve unterwegs ⇒ aufteilen.
5. Zum **Vertauschen**: dasselbe Gebiet als Typ II neu beschreiben – **niemals** einfach die Grenzen vertauschen!
:::

:::bsp Skript Bsp. 17.6
$f=x+y$ über $D$ zwischen $y=x^2$ und $y=x$:
Typ I: $\int_0^1\int_{x^2}^x(x+y)\,\d y\,\d x=\int_0^1\big(\tfrac32x^2-x^3-\tfrac12x^4\big)\d x=\tfrac12-\tfrac14-\tfrac1{10}=\tfrac3{20}$.
Typ II: $\int_0^1\int_y^{\sqrt y}(x+y)\,\d x\,\d y=\int_0^1\big(\tfrac12y+y^{3/2}-\tfrac32y^2\big)\d y=\tfrac14+\tfrac25-\tfrac12=\tfrac3{20}$ ✓.
:::

:::bsp Folienbeispiel (Übungsblatt MV3)
Volumen unter $f=y-x^3+2$ über dem Dreieck $(0,0),(1,-1),(1,1)$: Typ I mit $-x\le y\le x$:
$\int_0^1\int_{-x}^x(y-x^3+2)\,\d y\,\d x=\int_0^1(4x-2x^4)\,\d x=2-\tfrac25=\tfrac85$. Als Typ II müsste man $-1\le y\le1$, $|y|\le x\le1$ – und wegen $|y|$ aufteilen.
:::

## Anwendungen

Dichte $\rho$ (Masse pro Fläche/Volumen):
$$M=\int_D\rho,\qquad\text{Schwerpunkt }s_i=\frac1M\int_Dx_i\,\rho,\qquad\text{Trägheitsmoment bzgl. Achse }L:\ \Theta_L=\int_Dd_L(\mathbf x)^2\rho.$$
Bei $\rho=1$: geometrischer Schwerpunkt (vgl. TM 1!) und – in 2D – die Flächenträgheitsmomente aus TM 2: $I_y=\iint z^2\,\d A$.

## Aufgaben

:::aufgabe 1 (Skript 17.1 a)
$D$ zwischen $x=y^2$ und $y=\frac12x-\frac32$. $\iint_D(x+y)$ in beiden Reihenfolgen.
:::loesung
Schnittpunkte: $y^2=2y+3$ ⇒ $y=-1$, $y=3$ (Punkte $(1,-1)$, $(9,3)$).
Typ II (bequem): $\int_{-1}^3\int_{y^2}^{2y+3}(x+y)\,\d x\,\d y=\int_{-1}^3\big(4y^2+9y+\tfrac92-\tfrac{y^4}2-y^3\big)\d y=\tfrac{112}3+36+18-\tfrac{122}5-20=\tfrac{704}{15}\approx46{,}9$.
Typ I muss geteilt werden: $0\le x\le1$: $-\sqrt x\le y\le\sqrt x$; $1\le x\le9$: $\frac{x-3}2\le y\le\sqrt x$ – Summe ergibt ebenfalls $\frac{704}{15}$.
:::
:::

:::aufgabe 2 (Skript 17.1 b)
$\int_{-1}^1\int_{x^2}^1f\,\d y\,\d x$: Gebiet, vertauschte Reihenfolge, Wert für $f=2x\sin(x^2)$.
:::loesung
Gebiet zwischen Parabel $y=x^2$ und $y=1$. Vertauscht: $\int_0^1\int_{-\sqrt y}^{\sqrt y}f\,\d x\,\d y$. $f$ ist ungerade in $x$, das Gebiet symmetrisch ⇒ Integral $0$.
:::
:::

:::aufgabe 3 (Skript 17.2/17.3)
(a) $\iint x^2y^2$ über das Dreieck $(0,0),(1,0),(0,1)$. (b) Vertausche $\int_0^5\int_0^yf\,\d x\,\d y$.
:::loesung
(a) $\int_0^1\int_0^{1-x}x^2y^2\,\d y\,\d x=\frac13\int_0^1x^2(1-x)^3\,\d x=\frac13\cdot\frac1{60}=\frac1{180}$.
(b) Gebiet $0\le x\le y\le5$ ⇒ $\int_0^5\int_x^5f\,\d y\,\d x$.
:::
:::

:::aufgabe 4 (Skript 17.5)
Volumen des Körpers zwischen $y=0$, $y=4$, $z=x^3$, $z=8$, $x=0$.
:::loesung
$x$ von 0 bis 2 (dort $x^3=8$), Höhe $8-x^3$: $V=\int_0^4\int_0^2(8-x^3)\,\d x\,\d y=4\,(16-4)=48$.
:::
:::

:::aufgabe 5 (Skript 17.9)
Schwerpunkt eines Kegels (Höhe 5, Grundradius 1, Dichte 1).
:::loesung
Querschnitt in Höhe $z$: Radius $1-\frac z5$, Fläche $\pi(1-\frac z5)^2$. $V=\int_0^5\pi(1-\frac z5)^2\d z=\frac{5\pi}3$; $\int z\,\d V=\pi\int_0^5z(1-\frac z5)^2\d z=\pi\cdot\frac{25}{12}$ ⇒ $z_s=\frac{25/12}{5/3}=\frac54$ – ein Viertel der Höhe über der Grundfläche.
:::
:::

## Karteikarten

:::karte
Satz von Fubini?
???
Bei stetigem f über Rechteck/Quader darf die Integrationsreihenfolge vertauscht werden.
:::

:::karte
Normalbereich Typ I?
???
$a\le x\le b$, $u(x)\le y\le o(x)$; inneres Integral über y mit x-abhängigen Grenzen.
:::

:::karte
Wie vertauscht man die Reihenfolge bei Normalbereichen?
???
Gebiet skizzieren und als Typ II neu beschreiben – Grenzen neu bestimmen.
:::

:::karte
Schwerpunkt über Bereichsintegrale?
???
$s_i=\frac1M\int x_i\rho$, $M=\int\rho$.
:::
