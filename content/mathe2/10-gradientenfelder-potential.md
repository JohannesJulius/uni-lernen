---
title: 16.2 Gradientenfelder (konservative Felder) – Wegunabhängigkeit, Rotation, Stammfunktion, Zirkulation und Auftrieb
chapter: 16 Kurvenintegrale
minutes: 120
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#348; Mathe 2/IM2_slides_T3_vectorcalc_03_vectorfields_expls.pdf; Mathe 2/IM2_slides_T3_vectorcalc_04_curveintegrals.pdf
---

:::ziel
- Gradientenfeld, Stammfunktion, Potential definieren.
- **Hauptsatz für Kurvenintegrale**: $\int_\gamma\nabla f\cdot\d\mathbf s=f(\text{Ende})-f(\text{Anfang})$.
- Ein Feld mit **Integrabilitätsbedingung / $\operatorname{rot}\mathbf v=\mathbf 0$** und **einfachem Zusammenhang** als Gradientenfeld erkennen.
- Stammfunktionen schrittweise bestimmen; Topologie-Fallen (Wirbelfeld) und Anwendung **Kutta-Joukowski** verstehen.
:::

## Gradientenfelder

:::def (Def. 16.5)
$\mathbf v:D\subset\mathbb R^n\to\mathbb R^n$ heißt **Gradientenfeld** (Potentialfeld, **konservativ**), wenn es ein Skalarfeld $f$ gibt mit $\operatorname{grad}f=\mathbf v$, d. h. $f_{x_i}=v_i$. $f$ heißt **Stammfunktion**, $-f$ **Potential** (Physik: Kraft $=-\nabla$ potentielle Energie).
:::

- $\mathbf v=(x,y)$: Gradientenfeld mit $f=\frac12(x^2+y^2)$.
- $\mathbf v=(-y,x)$: **kein** Gradientenfeld. Annahme $f_x=-y$, $f_y=x$ ⇒ $f=-xy+h_1(y)=xy+h_2(x)$ ⇒ $2xy=h_1(y)-h_2(x)$ – Widerspruch.

:::satz Kurvenintegrale in Gradientenfeldern (Satz 16.8)
Ist $\mathbf v=\nabla f$ stetig, so gilt für jede stückweise glatte Kurve
$$\int_\gamma\mathbf v\cdot\d\mathbf s=f(\gamma(b))-f(\gamma(a)).$$
⇒ **wegunabhängig**; über **geschlossene** Kurven stets $\oint\mathbf v\cdot\d\mathbf s=0$. Zwei Stammfunktionen unterscheiden sich nur um eine Konstante.
:::
*Beweis:* Kettenregel: $\frac{\d}{\d t}f(\gamma(t))=\nabla f\cdot\dot\gamma$, dann Hauptsatz der Differential- und Integralrechnung (Mathe 1).
Physik: Hubarbeit im Schwerefeld hängt nur vom Höhenunterschied ab; mit Reibung (nicht konservativ) hängt sie vom Weg ab.

## Wann ist ein Feld ein Gradientenfeld?

:::def Einfach zusammenhängend (Def. 16.9)
$D$ ist einfach zusammenhängend, wenn sich jede geschlossene Kurve in $D$ stetig auf einen Punkt zusammenziehen lässt („keine Löcher").
Nicht einfach zusammenhängend: $\mathbb R^2\setminus\{0\}$ (Kurve um das Loch); $\mathbb R^3\setminus\{\text{Gerade}\}$; Torus. **Aber** $\mathbb R^3\setminus\{0\}$ ist einfach zusammenhängend (man kann um einen Punkt herumziehen).
:::

:::satz Charakterisierung (Satz 16.11)
$\mathbf v$ stetig differenzierbar auf $D$. Ist
1. $D$ **einfach zusammenhängend** und
2. die **Integrabilitätsbedingung** $\frac{\partial v_i}{\partial x_j}=\frac{\partial v_j}{\partial x_i}$ für alle $i,j$ erfüllt,
so ist $\mathbf v$ ein Gradientenfeld. (Die Bedingung ist auch **notwendig** – Satz von Schwarz für $f$.)
:::

:::def Rotation (Def. 16.12)
$$\operatorname{rot}\mathbf v=\nabla\times\mathbf v=\begin{pmatrix}\partial_2v_3-\partial_3v_2\\\partial_3v_1-\partial_1v_3\\\partial_1v_2-\partial_2v_1\end{pmatrix}.$$
In 3D ist die Integrabilitätsbedingung $\operatorname{rot}\mathbf v=\mathbf 0$ („**wirbelfrei**"); in 2D (dritte Komponente 0 ergänzen): $\partial_xv_2-\partial_yv_1=0$.
:::

- $\mathbf v=(-y,x)$: $\operatorname{rot}\mathbf v=(0,0,2)\ne\mathbf 0$ – das Feld dreht sich (Name!).
- $\mathbf v=(e^xy+1,\ e^x+z,\ y)$: $\operatorname{rot}\mathbf v=(1-1,\ 0-0,\ e^x-e^x)=\mathbf 0$ auf $\mathbb R^3$ ⇒ Gradientenfeld.

:::achtung Das Wirbelfeld (Skript Bsp. 16.15)
$\mathbf v=\frac1{x^2+y^2}(-y,x)$ auf $\mathbb R^2\setminus\{0\}$ erfüllt die Integrabilitätsbedingung ($\partial_yv_1=\partial_xv_2=\frac{y^2-x^2}{(x^2+y^2)^2}$), aber $D$ hat ein Loch:
$\oint_{\text{Einheitskreis}}\mathbf v\cdot\d\mathbf s=\int_0^{2\pi}(\sin^2t+\cos^2t)\,\d t=2\pi\ne0$ ⇒ **kein** Gradientenfeld. Für Kurven, die den Nullpunkt **nicht** umlaufen, ist das Integral 0. (Lokal ist $\mathbf v=\nabla\varphi$ mit dem Polarwinkel $\varphi$ – der aber nach einem Umlauf um $2\pi$ springt.)
Umgekehrt kann ein Feld trotz Loch konservativ sein: $\mathbf v=\frac{(x,y)}{(x^2+y^2)^{3/2}}$ (Gravitation/Coulomb in 2D-Schnitt) hat die globale Stammfunktion $f=-\frac1{\sqrt{x^2+y^2}}$ (Folienbeispiel). Der Satz ist nur **hinreichend**.
:::

## Stammfunktion bestimmen

:::rezept Schrittweise Integration (Skript Bsp. 16.16)
$\mathbf v=(e^xy+1,\ e^x+z,\ y)$:
1. $f=\int v_1\,\d x=e^xy+x+g(y,z)$.
2. $f_y=e^x+g_y\overset!=e^x+z$ ⇒ $g_y=z$ ⇒ $g=yz+h(z)$.
3. $f_z=y+h'(z)\overset!=y$ ⇒ $h=c$.
$$f=e^xy+x+yz+c.$$
**Immer Probe:** $\nabla f=\mathbf v$. Hängt ein „Rest" noch von einer bereits erledigten Variablen ab ⇒ kein Gradientenfeld (Rechenfehler oder Bedingung verletzt).
:::

## Anwendung: Zirkulation und Auftrieb (Skript 16.11)

Satz von **Kutta-Joukowski**: Auftrieb pro Spannweite $L'=\rho_\infty v_\infty\Gamma$ mit der **Zirkulation** $\Gamma=\oint_\gamma\mathbf v\cdot\d\mathbf s$ um das Profil. Außerhalb der Grenzschicht ist die Strömung wirbelfrei ($\operatorname{rot}\mathbf v=\mathbf 0$) – müsste $\Gamma$ dann nicht 0 sein (d'Alembertsches Paradoxon)? Nein: Das Strömungsgebiet $\mathbb R^2\setminus\text{Profil}$ ist **nicht einfach zusammenhängend**. Modell: Parallelströmung + Potentialwirbel
$$\mathbf v=\begin{pmatrix}v_\infty\\0\end{pmatrix}+\frac\Gamma{2\pi(x^2+y^2)}\begin{pmatrix}-y\\x\end{pmatrix}.$$

:::aufgabe 1 (Skript 16.11)
(1) $\Gamma$ für einen Kreis vom Radius $R$ um das Profil. (2) Warum ist der Auftrieb unabhängig von der gewählten Kontur? (3) Kurve, die das Profil nicht umschließt?
:::loesung
(1) Parallelanteil: $\int_0^{2\pi}(v_\infty,0)\cdot(-R\sin t,R\cos t)\,\d t=-v_\infty R\int\sin t\,\d t=0$. Wirbelanteil: $\frac\Gamma{2\pi R^2}\int_0^{2\pi}(-R\sin t,R\cos t)\cdot(-R\sin t,R\cos t)\,\d t=\frac\Gamma{2\pi R^2}\cdot2\pi R^2=\Gamma$.
(2) Zwei Konturen, die das Profil je einmal umlaufen, begrenzen zusammen ein Ringgebiet ohne Loch, in dem $\operatorname{rot}\mathbf v=0$ – ihre Integrale sind gleich (Differenz = Integral über eine zusammenziehbare geschlossene Kurve = 0, bzw. Satz von Green). Deshalb kann man im Windkanal/CFD auf einer beliebigen fernen Kontur messen.
(3) $\oint_{\gamma_2}=0$. Wäre das Gebiet einfach zusammenhängend (kein Körper), gäbe es keine Zirkulation – und keinen Auftrieb.
:::
:::

## Weitere Aufgaben

:::aufgabe 2 (Skript 16.3)
$\int_\gamma\mathbf v\cdot\d\mathbf s$ für $\mathbf v=(2xy+z^3,\ x^2,\ 3xz^2)$, $\gamma=(t,1-t,1)$, $t\in[0,1]$.
:::loesung
$\operatorname{rot}\mathbf v=(0-0,\ 3z^2-3z^2,\ 2x-2x)=\mathbf 0$ ⇒ $f=x^2y+xz^3$. $f(1,0,1)-f(0,1,1)=1-0=1$.
:::
:::

:::aufgabe 3 (Skript 16.6)
$\mathbf v=(2x+y,\ x+2yz,\ y^2+2z)$, $\gamma=(\sin^2t+t,\ \cos t\sin t+\cos^2t,\ \sin t)$, $t\in[0,2\pi]$.
:::loesung
$\operatorname{rot}\mathbf v=(2y-2y,\ 0,\ 1-1)=\mathbf 0$, Stammfunktion $f=x^2+xy+y^2z+z^2$. Clever: nur Endpunkte! $\gamma(0)=(0,1,0)$, $\gamma(2\pi)=(2\pi,1,0)$ ⇒ $\int=4\pi^2+2\pi$.
:::
:::

:::aufgabe 4 (Skript 16.7)
$\mathbf v=(z^3+y^2\cos x,\ -4+2y\sin x,\ 2+3xz^2)$, $\gamma=(\tan t,\tan^2t,\tan^3t)$, $t\in[0,\frac\pi4]$.
:::loesung
$f=xz^3+y^2\sin x-4y+2z$ (Probe ✓). $\gamma(0)=\mathbf 0$, $\gamma(\frac\pi4)=(1,1,1)$ ⇒ $\int=1+\sin1-4+2=\sin1-1\approx-0{,}159$.
:::
:::

:::aufgabe 5 (Skript 16.8)
$\mathbf v=(yz\cos(xyz)+2xz,\ xz\cos(xyz)+2yz^2,\ xy\cos(xyz)+x^2+2y^2z)$: Definitionsbereich, Potentialfeld?
:::loesung
$D=\mathbb R^3$ (einfach zusammenhängend). Stammfunktion $f=\sin(xyz)+x^2z+y^2z^2$ (Probe: alle drei Ableitungen stimmen) ⇒ Potentialfeld.
:::
:::

:::aufgabe 6 (Skript 16.9)
Ein gezeichnetes Feld dreht sich gegen den Uhrzeigersinn um den Ursprung (rechts nach oben, links nach unten, oben nach links). Konservativ? Welcher Term passt: $\mathbf v_1=(-y,x^2)$, $\mathbf v_2=(-2y,x)$, $\mathbf v_3=(\cos x,2\sin x)$? $\int_\gamma\mathbf v_1\cdot\d\mathbf s$ längs der Strecke $(-2,-2)\to(1,-1)$?
:::loesung
Ein Kreis um 0 hat überall positive Tangentialkomponente ⇒ $\oint>0$ ⇒ nicht konservativ. $\mathbf v_2$ passt (bei $(-1,0)$ zeigt $\mathbf v_2=(0,-1)$ nach unten; $\mathbf v_1$ gäbe $(0,1)$; $\mathbf v_3$ hängt nicht von $y$ ab). Strecke $\gamma=(-2+3t,-2+t)$, $\dot\gamma=(3,1)$: $\mathbf v_1\cdot\dot\gamma=3(2-t)+(3t-2)^2=9t^2-15t+10$ ⇒ $\int_0^1=3-7{,}5+10=5{,}5$ (mit $\mathbf v_2$: $\int(10-3t)=8{,}5$ – beide positiv, wie die Skizze zeigt).
:::
:::

:::aufgabe 7 (Skript 16.10)
$\mathbf v=\frac1{x^2+y^2}(-y,x,0)$: maximales $D$, Gradientenfeld?, Kurven mit $\oint>0$ bzw. $=0$.
:::loesung
$D=\mathbb R^3\setminus\{z\text{-Achse}\}$ – nicht einfach zusammenhängend. Kein Gradientenfeld: Einheitskreis in der $xy$-Ebene gegen den Uhrzeigersinn liefert $2\pi>0$. Ein Kreis, der die $z$-Achse nicht umläuft (z. B. Mittelpunkt $(3,0,0)$, Radius 1), liefert 0.
:::
:::

## Karteikarten

:::karte
Hauptsatz für Kurvenintegrale?
???
In Gradientenfeldern: $\int_\gamma\nabla f\cdot\d\mathbf s=f(\gamma(b))-f(\gamma(a))$ – wegunabhängig, geschlossen = 0.
:::

:::karte
Hinreichende Bedingung für ein Gradientenfeld?
???
D einfach zusammenhängend und rot v = 0 (Integrabilitätsbedingung ∂v_i/∂x_j = ∂v_j/∂x_i).
:::

:::karte
Rotation in kartesischen Koordinaten?
???
$\nabla\times\mathbf v=(\partial_2v_3-\partial_3v_2,\ \partial_3v_1-\partial_1v_3,\ \partial_1v_2-\partial_2v_1)$
:::

:::karte
Warum ist das Wirbelfeld $\frac{(-y,x)}{x^2+y^2}$ kein Gradientenfeld?
???
D = ℝ²∖{0} hat ein Loch; ∮ um den Ursprung = 2π ≠ 0, obwohl rot v = 0.
:::

:::karte
Kutta-Joukowski?
???
$L'=\rho_\infty v_\infty\Gamma$, Γ = Zirkulation um das Profil (möglich, weil das Gebiet nicht einfach zusammenhängend ist).
:::

:::karte
Wie bestimmt man eine Stammfunktion?
???
Nach x integrieren (Rest g(y,z)), nach y ableiten und vergleichen, dann z; Probe ∇f = v.
:::
