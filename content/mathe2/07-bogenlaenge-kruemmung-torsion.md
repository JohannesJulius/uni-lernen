---
title: 15.2 Geometrie von Kurven – Bogenlänge, begleitendes Dreibein, Krümmung, Torsion, Krümmungskreis
chapter: 15 Kurven im ℝᵐ
minutes: 130
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#334; Mathe 2/IM2_slides_T1_curves_07_parametrizations_arclen.pdf; Mathe 2/IM2_slides_T1_curves_08_parametrizations_arclen_expl_circles.pdf; Mathe 2/IM2_slides_T1_curves_09_parametrizations_curvature.pdf; Mathe 2/IM2_slides_T1_curves_10_parametrizations_curvature_proofs.pdf; Mathe 2/IM2_wrksheet_T1_curves_05_arclen_unitcircle.pdf; Mathe 2/IM2_wrksheet_T1_curves_06_arclen_parabola.pdf
---

:::ziel
- **Bogenlänge** berechnen und nach der Bogenlänge parametrisieren.
- **Tangenten-, Hauptnormalen-, Binormalenvektor** (begleitendes Dreibein), Schmiegeebene.
- **Krümmung** $\kappa=\frac{\|\dot\gamma\times\ddot\gamma\|}{\|\dot\gamma\|^3}$ und **Torsion** berechnen; ebene Kurven und Funktionsgraphen.
- **Krümmungskreis** bestimmen; Anwendung Kurvenflug/Lastvielfaches.
:::

## Bogenlänge

Approximiert man die Kurve durch einen Polygonzug, geht jede Sehne in $\|\dot\gamma\|\Delta t$ über:

:::def Bogenlänge (Def. 15.8)
$$s(t)=\int_a^t\|\dot\gamma(\tau)\|\,\d\tau,\qquad L=\int_a^b\|\dot\gamma(t)\|\,\d t,\qquad\d s=\|\dot\gamma\|\,\d t\ (\text{Bogenelement}).$$
$\dot s=\|\dot\gamma\|$ = Tacho. Die Länge hängt **nicht** von der Parametrisierung ab (Substitutionsregel). Ebene Kurve: $L=\int\sqrt{\dot x^2+\dot y^2}\,\d t$; Graph $y=f(x)$: $L=\int_a^b\sqrt{1+f'(x)^2}\,\d x$.
:::

:::bsp
- Kreis $(r\cos t,r\sin t)$, $t\in[0,b]$: $s=rb$ (Bogenmaß!), Umfang $2\pi r$. Mit $\omega$: $\|\dot\gamma\|=r|\omega|$ – gleiche Länge, nur schneller.
- Helix $R$, $h$ für $t\in[0,4\pi]$: $L=4\pi\sqrt{R^2+h^2}$; $s(t)=t\sqrt{R^2+h^2}$ ⇒ **Bogenlängen-Parametrisierung** $\tilde\gamma(s)=\gamma\big(\frac s{\sqrt{R^2+h^2}}\big)$ mit $\|\tilde\gamma'\|=1$.
- Parabel $y=x^2$, $x\in[0,1]$ (Arbeitsblatt): $L=\int_0^1\sqrt{1+4x^2}\,\d x=\Big[\frac x2\sqrt{1+4x^2}+\frac14\ln\big(2x+\sqrt{1+4x^2}\big)\Big]_0^1=\frac{\sqrt5}2+\frac14\ln(2+\sqrt5)\approx1{,}479$.
- Zykloide ($r=R$), ein Bogen: $L=8R$.
:::

## Begleitendes Dreibein

Voraussetzung: $\gamma$ regulär (und zweimal differenzierbar, $\dot{\mathbf t}\ne0$).

:::def
- **Tangenteneinheitsvektor** $\mathbf t=\frac{\dot\gamma}{\|\dot\gamma\|}$ – Richtung, unabhängig vom Tempo.
- **Hauptnormalenvektor** $\mathbf n=\frac{\dot{\mathbf t}}{\|\dot{\mathbf t}\|}$ – zeigt zur Innenseite der Kurve ($\mathbf n\perp\mathbf t$, weil $\|\mathbf t\|=1$).
- **Binormalenvektor** $\mathbf b=\mathbf t\times\mathbf n$.
$\{\mathbf t,\mathbf n,\mathbf b\}$ ist ein Rechtssystem (Frenet-Dreibein). $\mathbf t,\mathbf n$ spannen die **Schmiegeebene** auf – die Ebene, in der sich die Kurve momentan bewegt (Grenzlage der Ebene durch drei benachbarte Punkte); $\mathbf b$ ist ihre Normale.
:::

## Krümmung und Torsion

:::def Krümmung (Def. 15.11)
Richtungsänderung pro Bogenlänge:
$$\kappa=\Big\|\frac{\d\mathbf t}{\d s}\Big\|=\frac{\|\dot{\mathbf t}\|}{\|\dot\gamma\|}.$$
$\kappa=0$ ⇔ Gerade. Krümmungsradius $\rho=\frac1\kappa$.
:::

:::def Torsion (Def. 15.13)
Änderung der Schmiegeebene pro Bogenlänge: $\frac1{\dot s}\dot{\mathbf b}=-\tau\,\mathbf n$ ($\dot{\mathbf b}\perp\mathbf b$ und $\dot{\mathbf b}\perp\mathbf t$ ⇒ $\dot{\mathbf b}\parallel\mathbf n$). $\tau=0$ ⇔ **ebene** Kurve.
:::

**Zerlegung der Beschleunigung:** $\dot\gamma=\dot s\,\mathbf t$ ⇒
$$\ddot\gamma=\ddot s\,\mathbf t+\dot s^2\kappa\,\mathbf n\qquad(\text{Bahnbeschleunigung}+\text{Zentripetalbeschleunigung }v^2/\rho).$$
Daraus $\dot\gamma\times\ddot\gamma=\dot s^3\kappa\,\mathbf b$:

:::formel Berechnungsformeln (Raumkurven)
$$\kappa=\frac{\|\dot\gamma\times\ddot\gamma\|}{\|\dot\gamma\|^3},\qquad\mathbf b=\frac{\dot\gamma\times\ddot\gamma}{\|\dot\gamma\times\ddot\gamma\|},\qquad\tau=\frac{\det(\dot\gamma,\ddot\gamma,\dddot\gamma)}{\|\dot\gamma\times\ddot\gamma\|^2}.$$
(Das Skript gibt $|\tau|$ mit Betrag an; das Vorzeichen zeigt Rechts-/Linksschraube.)
:::

:::formel Ebene Kurven $\gamma=(x(t),y(t))$
$$\kappa=\frac{|\dot x\ddot y-\ddot x\dot y|}{(\dot x^2+\dot y^2)^{3/2}},\qquad\text{Graph }y=f(x):\ \kappa=\frac{|f''|}{(1+f'^2)^{3/2}}.$$
**Die Krümmung ist nicht $f''$!** $f''$ misst die Steigungsänderung pro $\Delta x$, $\kappa$ pro Bogenlänge – daher der Korrekturfaktor. Ohne Betrag (vorzeichenbehaftete Krümmung): $>0$ Linkskurve, $<0$ Rechtskurve.
:::

:::bsp Krümmung typischer Kurven
- Kreis Radius $r$: $\kappa=\frac1r$ (überall gleich).
- Helix: $\dot\gamma\times\ddot\gamma=(hR\sin t,-hR\cos t,R^2)$, $\|\cdot\|=R\sqrt{R^2+h^2}$ ⇒ $\kappa=\frac R{R^2+h^2}$, $\tau=\frac{hR^2}{R^2(R^2+h^2)}=\frac h{R^2+h^2}$ (konstant). $h=0$: Kreis ($\kappa=\frac1R$, $\tau=0$).
- Ellipse $(a\cos t,b\sin t)$: $\kappa=\frac{ab}{(a^2\sin^2t+b^2\cos^2t)^{3/2}}$; am Hauptscheitel $(a,0)$: $\kappa=\frac a{b^2}$ (stark gekrümmt), am Nebenscheitel $\frac b{a^2}$.
:::

## Krümmungskreis

:::def (Def. 15.14)
Der Kreis, der die Kurve in $P_0$ berührt (gleiche Tangente) und dieselbe Krümmung hat: Radius $\rho=\frac1{|\kappa|}$, **Mittelpunkt** auf der Normalen zur Innenseite:
$$M=\gamma(t_0)+\frac1\kappa\,\mathbf n(t_0).$$
Für ebene Kurven: $M=\big(x-\frac{\dot y(\dot x^2+\dot y^2)}{\dot x\ddot y-\ddot x\dot y},\ y+\frac{\dot x(\dot x^2+\dot y^2)}{\dot x\ddot y-\ddot x\dot y}\big)$.
:::

## Aufgaben

:::aufgabe 1 (Skript 15.4)
Parabel $\gamma(t)=(t,\frac12t^2)$: $\kappa(t)$, Maximum, minimaler Krümmungsradius, Krümmungskreis im Scheitel.
:::loesung
$\dot x=1$, $\dot y=t$, $\ddot x=0$, $\ddot y=1$: $\kappa=\frac1{(1+t^2)^{3/2}}$, maximal bei $t=0$: $\kappa=1$, $\rho=1$. Normale im Scheitel zeigt nach oben ⇒ $M=(0,1)$; Krümmungskreis $x^2+(y-1)^2=1$ schmiegt sich von innen an.
:::
:::

:::aufgabe 2 (Skript 15.5 – Kurvenflug und Lastvielfaches)
Kreisbahn $\gamma=(R\cos\omega t,R\sin\omega t)$, $\omega=\frac VR$, $V=150\,$m/s. Gleichgewicht $L\cos\phi=mg$, $L\sin\phi=m\kappa V^2$, Lastvielfaches $n=\frac L{mg}=\frac1{\cos\phi}=\sqrt{1+\left(\frac{V^2\kappa}g\right)^2}$. (1) Zusammenhang Krümmung–Querbeschleunigung, (2) $R$ und $n$ bei $\phi=30°$, (3) doppelte Geschwindigkeit bei gleichem Radius.
:::loesung
(1) $\ddot\gamma=\ddot s\,\mathbf t+V^2\kappa\,\mathbf n$; bei konstantem $V$ ist $\ddot\gamma=V^2\kappa\,\mathbf n$ – rein radial, Betrag $\frac{V^2}R$. Die Krümmung bestimmt direkt die Querbeschleunigung und damit die Zusatzlast auf die Zelle.
(2) $\tan\phi=\frac{V^2}{gR}$ ⇒ $R=\frac{150^2}{9{,}81\tan30°}=3972\,$m ≈ 4 km; $n=\frac1{\cos30°}=1{,}155$.
(3) $V\to2V$ bei gleichem $R$: Querbeschleunigung $\frac{V^2}R$ vervierfacht ⇒ $\tan\phi=4\cdot0{,}577=2{,}31$ ⇒ $\phi=66{,}6°$, $n=2{,}52>2{,}5$ – über der Zulassungsgrenze! Bei festem Hängewinkel wächst der minimale Radius mit $V^2$ (×4). Grund: $\|\ddot\gamma\|=\kappa V^2$ wächst **quadratisch** mit $V$.
:::
:::

:::aufgabe 3
Krümmung von $y=\ln x$ in $x=1$ und Ort maximaler Krümmung.
:::loesung
$f'=\frac1x$, $f''=-\frac1{x^2}$: $\kappa=\frac{1/x^2}{(1+1/x^2)^{3/2}}=\frac{x}{(x^2+1)^{3/2}}$. In $x=1$: $\frac1{2\sqrt2}=0{,}354$. Maximum: $\frac{\d}{\d x}\kappa=0$ ⇒ $(x^2+1)-3x^2=0$ ⇒ $x=\frac1{\sqrt2}$, $\kappa_{max}=\frac{2}{3\sqrt3}=0{,}385$.
:::
:::

## Karteikarten

:::karte
Bogenlänge einer Kurve?
???
$L=\int_a^b\|\dot\gamma(t)\|\,\d t$; Graph: $\int\sqrt{1+f'^2}\,\d x$.
:::

:::karte
Krümmung einer Raumkurve?
???
$\kappa=\frac{\|\dot\gamma\times\ddot\gamma\|}{\|\dot\gamma\|^3}$
:::

:::karte
Krümmung eines Funktionsgraphen?
???
$\kappa=\frac{|f''|}{(1+f'^2)^{3/2}}$ – nicht $f''$!
:::

:::karte
Begleitendes Dreibein?
???
$\mathbf t=\dot\gamma/\|\dot\gamma\|$, $\mathbf n=\dot{\mathbf t}/\|\dot{\mathbf t}\|$, $\mathbf b=\mathbf t\times\mathbf n$.
:::

:::karte
Was misst die Torsion?
???
Änderung der Schmiegeebene pro Bogenlänge; τ = 0 ⇔ ebene Kurve.
:::

:::karte
Zerlegung der Beschleunigung?
???
$\ddot\gamma=\ddot s\,\mathbf t+\dot s^2\kappa\,\mathbf n$ (tangential + zentripetal $v^2/\rho$).
:::

:::karte
Krümmung und Torsion der Helix?
???
$\kappa=\frac R{R^2+h^2}$, $\tau=\frac h{R^2+h^2}$
:::
