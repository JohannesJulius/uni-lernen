---
title: Komplexe Zahlen II – Euler-Formel, de Moivre, Fundamentalsatz der Algebra
chapter: 1 Grundlagen – Komplexe Zahlen
minutes: 75
sources: Mathe 1/IngMath1_slides_1_basics_6_komplexezahlen_3_FundamentalsatzAlgebra_Euler_deMoivre.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#173; Mathe 1 + 2 neu/skript_m1_m2.pdf#178
---

:::ziel
- Die komplexe Exponentialfunktion und die **Eulersche Formel** benutzen.
- Additionstheoreme aus der Euler-Formel herleiten.
- Konjugation, Real- und Imaginärteil in Exponentialform ausdrücken; $\cos$ und $\sin$ über $\e^{\pm\mathrm i\varphi}$ darstellen.
- **Satz von de Moivre** (Potenzen) anwenden und auf zwei Arten beweisen.
- **Fundamentalsatz der Algebra**: Zerlegung in Linearfaktoren, komplexe Nullstellen reeller Polynome treten paarweise auf.
:::

## Die komplexe Exponentialfunktion

Über Potenzreihen (Kapitel Analysis) definiert man für **alle** $z\in\C$:
$$\exp(z)=\e^z=\sum_{n=0}^\infty\frac{z^n}{n!}=1+z+\frac{z^2}{2!}+\frac{z^3}{3!}+\dots$$
Es gilt weiterhin die **Funktionalgleichung** $\e^{z+w}=\e^z\e^w$.

:::satz Eulersche Formel
Für $\varphi\in\R$:
$$\e^{\mathrm i\varphi}=\cos\varphi+\mathrm i\sin\varphi.$$
:::

*Warum?* Setzt man $z=\mathrm i\varphi$ in die Reihe ein und sortiert nach geraden und ungeraden Potenzen (mit $\mathrm i^2=-1$, $\mathrm i^3=-\mathrm i$, $\mathrm i^4=1$):
$$\e^{\mathrm i\varphi}=\underbrace{\Big(1-\frac{\varphi^2}{2!}+\frac{\varphi^4}{4!}-\dots\Big)}_{\cos\varphi}+\mathrm i\underbrace{\Big(\varphi-\frac{\varphi^3}{3!}+\frac{\varphi^5}{5!}-\dots\Big)}_{\sin\varphi}.$$

Folgerungen:
- $|\e^{\mathrm i\varphi}|=\sqrt{\cos^2\varphi+\sin^2\varphi}=1$: $\e^{\mathrm i\varphi}$ liegt auf dem **Einheitskreis**.
- $\e^{\mathrm i\pi}=-1$, also $\e^{\mathrm i\pi}+1=0$ (die „schönste Formel der Mathematik").
- $\e^{\mathrm i\pi/2}=\mathrm i$, $\e^{2\pi\mathrm i}=1$, $\e^{\mathrm i(\varphi+2\pi k)}=\e^{\mathrm i\varphi}$ (Periodizität).
- Für $z=x+\mathrm iy$: $\e^z=\e^x\e^{\mathrm iy}=\e^x(\cos y+\mathrm i\sin y)$, also $|\e^z|=\e^x$, Winkel $y$.

## Additionstheoreme aus Euler

:::bsp
Mit $\e^{\mathrm i(\varphi+\psi)}=\e^{\mathrm i\varphi}\e^{\mathrm i\psi}$:
$$\cos(\varphi+\psi)+\mathrm i\sin(\varphi+\psi)=(\cos\varphi+\mathrm i\sin\varphi)(\cos\psi+\mathrm i\sin\psi)$$
$$=(\cos\varphi\cos\psi-\sin\varphi\sin\psi)+\mathrm i(\cos\varphi\sin\psi+\sin\varphi\cos\psi).$$
Vergleich von Real- und Imaginärteil:
$$\boxed{\cos(\varphi+\psi)=\cos\varphi\cos\psi-\sin\varphi\sin\psi,\qquad\sin(\varphi+\psi)=\sin\varphi\cos\psi+\cos\varphi\sin\psi}$$
Mit $\psi=\varphi$: $\cos2\varphi=\cos^2\varphi-\sin^2\varphi$, $\sin2\varphi=2\sin\varphi\cos\varphi$.
:::

## Konjugation und Sinus/Kosinus in Exponentialform

Für $z=r\e^{\mathrm i\theta}=r(\cos\theta+\mathrm i\sin\theta)$:
$$\bar z=r(\cos\theta-\mathrm i\sin\theta)=r\e^{-\mathrm i\theta}\quad\text{(Winkel umdrehen)}.$$
$$\operatorname{Re}z=\frac{z+\bar z}2=r\cos\theta,\qquad\operatorname{Im}z=\frac{z-\bar z}{2\mathrm i}=r\sin\theta.$$
Mit $r=1$ ergibt sich die wichtige Darstellung:
$$\boxed{\cos\theta=\frac{\e^{\mathrm i\theta}+\e^{-\mathrm i\theta}}2,\qquad\sin\theta=\frac{\e^{\mathrm i\theta}-\e^{-\mathrm i\theta}}{2\mathrm i}}$$

## Satz von de Moivre

:::satz Formel von de Moivre
Für $r\ge0$, $\theta\in\R$, $n\in\N$:
$$\big(r(\cos\theta+\mathrm i\sin\theta)\big)^n=r^n\big(\cos(n\theta)+\mathrm i\sin(n\theta)\big).$$
In Exponentialform: $(r\e^{\mathrm i\theta})^n=r^n\e^{\mathrm in\theta}$. **Potenzieren: Betrag hoch $n$, Winkel mal $n$.**
:::

:::beweis 1 – mit Euler
$(r\e^{\mathrm i\theta})^n=r^n(\e^{\mathrm i\theta})^n=r^n\e^{\mathrm in\theta}=r^n(\cos n\theta+\mathrm i\sin n\theta)$. ∎
:::

:::beweis 2 – vollständige Induktion
IA $n=1$: trivial. IV: gilt für $k$. IS:
$$(r(\cos\theta+\mathrm i\sin\theta))^{k+1}=r^k(\cos k\theta+\mathrm i\sin k\theta)\cdot r(\cos\theta+\mathrm i\sin\theta)$$
$$=r^{k+1}\big[(\cos k\theta\cos\theta-\sin k\theta\sin\theta)+\mathrm i(\cos k\theta\sin\theta+\sin k\theta\cos\theta)\big]=r^{k+1}\big[\cos((k+1)\theta)+\mathrm i\sin((k+1)\theta)\big]$$
mit den Additionstheoremen. ∎
:::

:::bsp $(1+\mathrm i)^{10}$
$1+\mathrm i=\sqrt2\e^{\mathrm i\pi/4}$ ⇒ $(1+\mathrm i)^{10}=(\sqrt2)^{10}\e^{\mathrm i10\pi/4}=32\,\e^{\mathrm i5\pi/2}=32\,\e^{\mathrm i\pi/2}=32\mathrm i$. (Ausmultiplizieren wäre mühsam!)
:::

:::bsp Mehrfachwinkel
$n=3$: $(\cos\theta+\mathrm i\sin\theta)^3=\cos3\theta+\mathrm i\sin3\theta$. Links mit Binomialsatz ausmultiplizieren und Realteile vergleichen: $\cos3\theta=\cos^3\theta-3\cos\theta\sin^2\theta$.
:::

## Fundamentalsatz der Algebra

:::satz Fundamentalsatz der Algebra
Jedes nicht-konstante Polynom $P(z)=a_nz^n+\dots+a_1z+a_0$ ($a_n\ne0$, $a_k\in\C$) hat **mindestens eine** Nullstelle in ℂ.
:::

:::satz Folgerung: Linearfaktorzerlegung
Jedes Polynom vom Grad $n$ zerfällt über ℂ vollständig:
$$P(z)=a_n(z-z_1)(z-z_2)\cdots(z-z_n),$$
d. h. es hat **genau $n$ Nullstellen**, wenn man sie mit Vielfachheit zählt.
:::
(Beweisidee der Folgerung: Nullstelle $z_1$ finden, $P(z)=(z-z_1)Q(z)$ per Polynomdivision, mit $Q$ (Grad $n-1$) weitermachen.)

:::satz Reelle Polynome
Hat $P$ **reelle** Koeffizienten und ist $z_0$ eine Nullstelle, dann ist auch $\bar z_0$ eine Nullstelle. Komplexe Nullstellen reeller Polynome treten also **paarweise konjugiert** auf, und $(z-z_0)(z-\bar z_0)=z^2-2\operatorname{Re}(z_0)z+|z_0|^2$ ist ein reelles quadratisches Polynom.
:::
*Begründung:* $P(\bar z_0)=\overline{P(z_0)}=\bar0=0$, da die Koeffizienten reell sind.

Folge: Ein reelles Polynom **ungeraden** Grades hat immer mindestens eine reelle Nullstelle.

:::bsp
- $z^2+1=(z-\mathrm i)(z+\mathrm i)$.
- $z^2+2z+5=0\Rightarrow z=-1\pm\sqrt{1-5}=-1\pm2\mathrm i$, also $z^2+2z+5=(z+1-2\mathrm i)(z+1+2\mathrm i)$.
- $x^3-2x^2+x-2=(x-2)(x^2+1)=(x-2)(x-\mathrm i)(x+\mathrm i)$.
:::

:::bsp Polynomdivision (Arbeitsblatt): $(z^3+1):(z+1)$
$z=-1$ ist Nullstelle von $z^3+1$.
$$(z^3+0z^2+0z+1):(z+1)=z^2-z+1$$
(Schritte: $z^2(z+1)=z^3+z^2$ abziehen → $-z^2+0z$; $-z(z+1)=-z^2-z$ abziehen → $z+1$; $1\cdot(z+1)$ abziehen → Rest 0.)
Nullstellen von $z^2-z+1$: $z=\frac12\pm\frac{\sqrt3}2\mathrm i=\e^{\pm\mathrm i\pi/3}$. Also
$$z^3+1=(z+1)(z-\e^{\mathrm i\pi/3})(z-\e^{\mathrm i5\pi/3}),$$
denn $\e^{-\mathrm i\pi/3}=\e^{\mathrm i5\pi/3}=\overline{\e^{\mathrm i\pi/3}}$. Probe: $(z-\e^{\mathrm i\pi/3})(z-\e^{\mathrm i5\pi/3})=z^2-2\cos\frac\pi3\,z+1=z^2-z+1$ ✓.
:::

Anwendung: Eigenwerte einer Matrix sind Nullstellen des charakteristischen Polynoms (Kapitel Eigenwerte) – der Fundamentalsatz garantiert, dass es (komplex) immer welche gibt.

## Aufgaben

:::aufgabe 1
Berechne $(1-\mathrm i)^8$ und $\left(\frac12+\frac{\sqrt3}2\mathrm i\right)^{6}$.
:::loesung
$1-\mathrm i=\sqrt2\e^{-\mathrm i\pi/4}$ ⇒ $(\sqrt2)^8\e^{-2\pi\mathrm i}=16$. $\;\frac12+\frac{\sqrt3}2\mathrm i=\e^{\mathrm i\pi/3}$ ⇒ $\e^{2\pi\mathrm i}=1$.
:::
:::

:::aufgabe 2
Zeige mit Euler: $\cos^2\theta=\frac{1+\cos2\theta}2$.
:::loesung
$\cos^2\theta=\left(\frac{\e^{\mathrm i\theta}+\e^{-\mathrm i\theta}}2\right)^2=\frac{\e^{2\mathrm i\theta}+2+\e^{-2\mathrm i\theta}}4=\frac{2+2\cos2\theta}4=\frac{1+\cos2\theta}2$. ∎
:::
:::

:::aufgabe 3
$P(x)=x^3-3x^2+4x-2$ hat die Nullstelle $1$. Zerlege $P$ vollständig in Linearfaktoren.
:::loesung
$P(x):(x-1)=x^2-2x+2$. Nullstellen: $x=1\pm\sqrt{1-2}=1\pm\mathrm i$. $P(x)=(x-1)(x-1-\mathrm i)(x-1+\mathrm i)$.
:::
:::

:::aufgabe 4
Ein reelles Polynom 4. Grades hat die Nullstellen $2\mathrm i$ und $1+\mathrm i$. Gib ein solches Polynom (Leitkoeffizient 1) an.
:::loesung
Konjugierte sind auch Nullstellen: $\pm2\mathrm i$, $1\pm\mathrm i$. $P(x)=(x^2+4)(x^2-2x+2)=x^4-2x^3+6x^2-8x+8$.
:::
:::

## Karteikarten

:::karte
Satz von de Moivre?
???
$(r\e^{\mathrm i\theta})^n=r^n\e^{\mathrm in\theta}=r^n(\cos n\theta+\mathrm i\sin n\theta)$
:::

:::karte
$\cos\theta$ und $\sin\theta$ über die Exponentialfunktion?
???
$\cos\theta=\frac{\e^{\mathrm i\theta}+\e^{-\mathrm i\theta}}2$, $\sin\theta=\frac{\e^{\mathrm i\theta}-\e^{-\mathrm i\theta}}{2\mathrm i}$
:::

:::karte
Fundamentalsatz der Algebra (mit Folgerung)?
???
Jedes nichtkonstante komplexe Polynom hat eine Nullstelle in ℂ ⇒ Grad $n$ ⇒ genau $n$ Nullstellen (mit Vielfachheit), $P(z)=a_n\prod(z-z_k)$.
:::

:::karte
Was gilt für komplexe Nullstellen reeller Polynome?
???
Sie treten paarweise konjugiert auf: mit $z_0$ ist auch $\bar z_0$ Nullstelle.
:::

:::karte
Konjugation in Exponentialform?
???
$\overline{r\e^{\mathrm i\theta}}=r\e^{-\mathrm i\theta}$
:::

:::karte
Additionstheoreme für $\cos(\varphi+\psi)$, $\sin(\varphi+\psi)$?
???
$\cos\varphi\cos\psi-\sin\varphi\sin\psi$; $\;\sin\varphi\cos\psi+\cos\varphi\sin\psi$
:::
