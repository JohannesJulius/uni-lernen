---
title: 15.1 Kurven im ℝᵐ – Parametrisierung, Geschwindigkeit, Beispiele (Kreis, Ellipse, Schraube, Wurf, Zykloide)
chapter: 15 Kurven im ℝᵐ
minutes: 110
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#327; Mathe 2/IM2_slides_T1_curves_01_intro.pdf; Mathe 2/IM2_slides_T1_curves_02_expl_ellipses.pdf; Mathe 2/IM2_slides_T1_curves_03_expl_cycloids.pdf; Mathe 2/IM2_slides_T1_curves_04_parametrizations_continuity.pdf; Mathe 2/IM2_slides_T1_curves_06_parametrizations_derivative.pdf; Mathe 2/IM2_slides_T1_curves_06_parametrizations_expls.pdf; Mathe 2/IM2_wrksheet_T1_curves_02_expl_cycloid.pdf; Mathe 2/IM2_wrksheet_T1_curves_04_expl_ellipses.pdf
---

:::ziel
- Kurven $\gamma:[a,b]\to\mathbb R^m$ als Bewegung eines Punktes verstehen; **Spur** vs. **Parametrisierung**.
- Geschwindigkeitsvektor $\dot\gamma$, Betrag, Tangente, **Regularität**.
- Standardkurven parametrisieren: Strecke, Kreis, **Ellipse** (kartesisch/implizit/Graph/Polar), Schraubenlinie, Wurfparabel, **Zykloide**, Neilsche Parabel.
- Produktregeln für Kurven; Tangential- und Normalbeschleunigung.
:::

## Grundbegriffe

Eine **Kurve** ist eine Abbildung $\gamma:[a,b]\to\mathbb R^m$ ($m=2,3$), $t\mapsto\gamma(t)=(x_1(t),\ldots,x_m(t))^T$. Vorstellung: $t$ = Zeit, $\gamma(t)$ = Ort.
- Die **Spur** (Bildmenge) ist die gezeichnete Linie – sie zeigt nicht, in welcher Richtung und wie schnell durchlaufen wird.
- Dieselbe Spur hat viele Parametrisierungen (z. B. $(\cos\omega t,\sin\omega t)$ für jedes $\omega\ne0$).

:::def Geschwindigkeit, Regularität, Tangente
$\dot\gamma(t)=(\dot x_1(t),\ldots,\dot x_m(t))^T$ (Jacobi-Matrix einer Kurve = Spaltenvektor) ist der **Geschwindigkeitsvektor**, $\|\dot\gamma(t)\|$ die **Bahngeschwindigkeit** („was auf dem Tacho steht").
$\gamma$ heißt **regulär**, wenn $\dot\gamma(t)\ne\mathbf 0$ für alle $t$.
**Tangente** (Linearisierung) in $t_1$: $s(t)=\gamma(t_1)+\dot\gamma(t_1)(t-t_1)$.
:::

## Beispiele

:::bsp Strecke, Kreis, Schraubenlinie
- Strecke von $P$ nach $Q$: $\gamma(t)=P+t(Q-P)$, $t\in[0,1]$.
- Kreis: $\gamma(t)=(\cos t,\sin t)$, $\dot\gamma=(-\sin t,\cos t)$, $\|\dot\gamma\|=1$ – gegen den Uhrzeigersinn; Radius $r$, Mittelpunkt $(x_c,y_c)$: $(x_c+r\cos t,\ y_c+r\sin t)$; im Uhrzeigersinn: $t\to-t$.
- Schraubenlinie (Helix): $\gamma(t)=(R\cos t,\ R\sin t,\ ht)$, $\|\dot\gamma\|=\sqrt{R^2+h^2}$ konstant; Ganghöhe $2\pi h$.
:::

:::bsp Ellipse – vier Darstellungen (Folien)
Halbachsen $a$, $b$, Mittelpunkt $(x_0,y_0)$:
1. **Implizit** (Niveaumenge): $\left(\frac{x-x_0}a\right)^2+\left(\frac{y-y_0}b\right)^2=1$.
2. **Lokal als Graph** („Karten und Atlanten"): $y_{oben/unten}(x)=y_0\pm b\sqrt{1-\left(\frac{x-x_0}a\right)^2}$ – eine Funktion allein beschreibt nie die ganze Ellipse.
3. **Parametrisierung:** $\gamma(t)=(x_0+a\cos t,\ y_0+b\sin t)$, $t\in[0,2\pi]$ (Probe durch Einsetzen in 1.).
4. **Polar** (bzgl. Mittelpunkt): $r(\varphi)=\frac{ab}{\sqrt{b^2\cos^2\varphi+a^2\sin^2\varphi}}$ (Achtung: $\varphi\ne t$!).
Anwendungen: Planetenbahnen (Kepler), Ellipsenflügel, Spannungs- und Trägheitsellipsen, Bahnmechanik.
:::

:::bsp Wurfparabel (Skript Bsp. 15.5)
$\gamma(t)=\big(v_0\cos\varphi\,t,\ v_0\sin\varphi\,t-\frac g2t^2\big)$ – Dynamik pro Komponente sichtbar. Eliminieren von $t$ ergibt die Geometrie: $y=\tan\varphi\,x-\frac{g}{2v_0^2\cos^2\varphi}x^2$ (Parabel).
:::

:::bsp Zykloide (Skript Bsp. 15.6, Folien)
Rad (Radius $R$) rollt ohne Schlupf; Punkt im Abstand $r$ vom Mittelpunkt; Wälzwinkel $\varphi$ (bzw. $\varphi=\omega t$):
$$\gamma(\varphi)=\begin{pmatrix}R\varphi-r\sin\varphi\\R-r\cos\varphi\end{pmatrix}.$$
Translation $R\varphi$ (abgerollter Bogen) plus Rotation. $r=R$: gewöhnliche Zykloide (Spitzen am Boden), $r<R$: verkürzte (gestreckte Wellen), $r>R$: verlängerte Zykloide (Schleifen – Punkt am Spurkranz eines Zugrads bewegt sich kurz **rückwärts**!).
Geschwindigkeit: $\dot\gamma=\omega(R-r\cos\omega t,\ r\sin\omega t)$, $\|\dot\gamma\|=\omega\sqrt{R^2+r^2-2Rr\cos\omega t}$. Für $r=R$: am Boden ($\omega t=2k\pi$) **Geschwindigkeit 0** – der Kontaktpunkt ruht (nicht regulär!), oben doppelte Fahrgeschwindigkeit.
:::

:::achtung Glatte Parametrisierung, Knick in der Spur
Neilsche Parabel $\gamma(t)=(t^3,t^2)$ ist beliebig oft differenzierbar, aber $y=x^{2/3}$ hat in 0 eine **Spitze**: dort ist $\dot\gamma(0)=\mathbf 0$ (nicht regulär). Ebenso $|x|$: $\gamma(t)=(t,|t|)$ nicht differenzierbar, aber $\gamma(t)=(t^3,|t|^3)$ differenzierbar – mit $\dot\gamma(0)=0$. Regularität verhindert solche Knicke.
:::

## Produktregeln und Beschleunigung

- Skalarprodukt: $(\gamma_1\cdot\gamma_2)'=\dot\gamma_1\cdot\gamma_2+\gamma_1\cdot\dot\gamma_2$.
- Skalare Funktion: $(\alpha\gamma)'=\dot\alpha\gamma+\alpha\dot\gamma$.
- Kreuzprodukt (3D): $(\gamma_1\times\gamma_2)'=\dot\gamma_1\times\gamma_2+\gamma_1\times\dot\gamma_2$ (Reihenfolge beachten!).

:::satz Tangentialbeschleunigung (Skript Bsp. 15.7)
$$\frac{\d}{\d t}\|\dot\gamma\|=\frac{\ddot\gamma\cdot\dot\gamma}{\|\dot\gamma\|}.$$
Nur die Komponente der Beschleunigung **in Bewegungsrichtung** ändert den Betrag der Geschwindigkeit; die senkrechte Komponente ändert die **Richtung**. Bei konstantem Tempo gilt $\ddot\gamma\perp\dot\gamma$ (Kreisbewegung: Zentripetalbeschleunigung).
:::

## Aufgaben

:::aufgabe 1 (Skript 15.1)
Parametrisiere: (1) Strecke $P(1,-2,3)\to Q(4,2,-1)$; (2) oberer Halbkreis $R=3$ gegen den Uhrzeigersinn; (3) Ellipse $\frac{x^2}9+\frac{y^2}4=1$ im Uhrzeigersinn ab $(0,2)$; (4) Parabelbogen $y=2x^2-1$, $x\in[-1,2]$.
:::loesung
(1) $(1+3t,\ -2+4t,\ 3-4t)$, $t\in[0,1]$. (2) $(3\cos t,\ 3\sin t)$, $t\in[0,\pi]$. (3) $(3\sin t,\ 2\cos t)$, $t\in[0,2\pi]$ (bei $t=0$ in $(0,2)$, dann nach rechts unten – Uhrzeigersinn). (4) $(t,\ 2t^2-1)$, $t\in[-1,2]$.
:::
:::

:::aufgabe 2 (Skript 15.2)
$\gamma_1(t)=(t^2-1,\ 2t)$, $\gamma_2(s)=(s,\ s^3-s)$. Schnittpunkte, Tangenten-Einheitsvektor $T_1$, Schnittwinkel.
:::loesung
Gleichsetzen: $s=t^2-1$ und $2t=s(s^2-1)=t^2(t^2-1)(t^2-2)$ ⇒ $t=0$ oder $t(t^2-1)(t^2-2)=2$.
$t=0$: Schnittpunkt $(-1,0)$ ($s=-1$). Die zweite Gleichung hat genau eine reelle Lösung $t\approx1{,}647$ ⇒ Punkt $\approx(1{,}71;\,3{,}29)$.
$\dot\gamma_1=(2t,2)$, $T_1=\frac{(t,1)}{\sqrt{t^2+1}}$.
Winkel in $(-1,0)$: $\dot\gamma_1(0)=(0,2)$, $\dot\gamma_2(-1)=(1,\,3s^2-1)=(1,2)$ ⇒ $\cos\alpha=\frac{4}{2\sqrt5}$ ⇒ $\alpha=26{,}6°$.
*Hinweis:* Der in der Aufgabenstellung genannte Punkt $(0,2)$ liegt zwar auf $\gamma_1$ ($t=1$), aber nicht auf $\gamma_2$ ($\gamma_2(0)=(0,0)$) – vermutlich ein Tippfehler im Skript; rechne den Winkel an einem echten Schnittpunkt.
:::
:::

:::aufgabe 3 (Arbeitsblatt Zykloide)
Für $r=R=1$, $\omega=1$: Wo ist die Geschwindigkeit maximal, wo null? Welche Strecke legt das Rad pro Umdrehung zurück?
:::loesung
$\|\dot\gamma\|=\sqrt{2-2\cos t}=2|\sin\frac t2|$: null für $t=2k\pi$ (Bodenkontakt), maximal 2 für $t=\pi$ (oben). Pro Umdrehung $2\pi R$ (Translation des Mittelpunkts). Die Bahnlänge des Punktes ist $\int_0^{2\pi}2\sin\frac t2\,\d t=8R$.
:::
:::

## Karteikarten

:::karte
Wann heißt eine Kurve regulär?
???
Wenn $\dot\gamma(t)\ne\mathbf 0$ für alle t.
:::

:::karte
Parametrisierung einer Ellipse?
???
$(x_0+a\cos t,\ y_0+b\sin t)$, $t\in[0,2\pi]$.
:::

:::karte
Zykloide (Punkt im Abstand r, Rad R)?
???
$(R\varphi-r\sin\varphi,\ R-r\cos\varphi)$
:::

:::karte
Welche Beschleunigungskomponente ändert das Tempo?
???
Die tangentiale: $\frac{\d}{\d t}\|\dot\gamma\|=\frac{\ddot\gamma\cdot\dot\gamma}{\|\dot\gamma\|}$.
:::

:::karte
Spur vs. Parametrisierung?
???
Spur = Bildmenge (Linie); Parametrisierung legt zusätzlich Durchlaufsinn und Geschwindigkeit fest.
:::
