---
title: 20.2 Inhomogene lineare DGL – Ansatz vom Typ der rechten Seite, Resonanz, erzwungene Schwingung
chapter: 20 Lineare DGL höherer Ordnung
minutes: 120
sources: Mathe 1 + 2 neu/skript_m1_m2.pdf#411; Mathe 2/IM2_slides_T4_DGL_05_inearode2order.pdf
---

:::ziel
- Eine partikuläre Lösung mit dem **Ansatz vom Typ der rechten Seite** bestimmen (Polynom, Exponential, Sinus/Kosinus und Produkte).
- Den **Resonanzfall** erkennen (Störung trifft eine Nullstelle von $p$) und den Ansatz mit $t^r$ korrigieren.
- Das Superpositionsprinzip für zusammengesetzte Störungen nutzen.
- Die erzwungene Schwingung (Amplitude, Phase, Resonanz) physikalisch deuten.
:::

## Vorgehen

$$a_nx^{(n)}+\ldots+a_0x=s(t),\qquad x=x_H+x_p.$$
1. $x_H$ aus dem charakteristischen Polynom (Lektion 20.1).
2. $x_p$ „geschickt raten": Die linke Seite bildet nur Linearkombinationen von Ableitungen – Polynome bleiben Polynome, $e^{at}$ bleibt $e^{at}$, Schwingungen behalten ihre Frequenz.
3. Koeffizientenvergleich.
4. Anfangswerte **erst ganz am Ende** in $x=x_H+x_p$ einsetzen.

:::rezept Ansatz vom Typ der rechten Seite
Störung $s(t)=(b_0+b_1t+\ldots+b_mt^m)\,e^{at}\cos bt$ (oder $\sin bt$). Prüfe $\mu=a+ib$:
- $p(\mu)\ne0$: $\displaystyle x_p=(A_0+\ldots+A_mt^m)e^{at}\cos bt+(B_0+\ldots+B_mt^m)e^{at}\sin bt$.
- $\mu$ ist **$r$-fache Nullstelle** von $p$ (**Resonanz**): denselben Ansatz mit $t^r$ multiplizieren.

| $s(t)$ | $\mu$ | Ansatz (ohne Resonanz) |
|---|---|---|
| Polynom vom Grad $m$ | 0 | Polynom vom Grad $m$ (alle Koeffizienten!) |
| $ke^{at}$ | $a$ | $Ae^{at}$ |
| $k\cos bt$ oder $k\sin bt$ | $ib$ | $A\cos bt+B\sin bt$ (**immer beide**) |
| $(\text{Polynom})e^{at}$ | $a$ | $(\text{Polynom gleichen Grades})e^{at}$ |
| $e^{at}\cos bt$ | $a+ib$ | $e^{at}(A\cos bt+B\sin bt)$ |
Bei Summen von Störungen: Superposition – für jeden Summanden einzeln.
:::

:::bsp Skript Bsp. 20.11 (doppelte Resonanz)
$\ddot x-2\dot x+x=(1+t)e^t$. $p=(\lambda-1)^2$ ⇒ $x_H=(c_1+c_2t)e^t$. $\mu=1$ ist **doppelte** Nullstelle ⇒ $x_p=t^2(A_0+A_1t)e^t$.
Einsetzen ergibt $e^t(6A_1t+2A_0)=(1+t)e^t$ ⇒ $A_1=\frac16$, $A_0=\frac12$:
$$x=c_1e^t+c_2te^t+t^2\left(\tfrac12+\tfrac16t\right)e^t.$$
**Trick:** Mit $x=u\,e^{\mu t}$ wird $(D-\mu)^2x=e^{\mu t}u''$ – hier also $u''=1+t$, $u=\frac{t^2}2+\frac{t^3}6$.
:::

## Erzwungene Schwingung und Resonanz

$\ddot x+2\delta\dot x+\omega_0^2x=\frac{F_0}m\cos\Omega t$ (Anregung durch Unwucht, Fahrbahn, Wechselspannung):
- **Gedämpft** ($\delta>0$): $x_H$ klingt ab (Einschwingvorgang), es bleibt die **stationäre** Schwingung mit der Erregerfrequenz $\Omega$:
$$x_p=\hat x\cos(\Omega t-\varphi),\qquad\hat x=\frac{F_0/m}{\sqrt{(\omega_0^2-\Omega^2)^2+4\delta^2\Omega^2}},\qquad\tan\varphi=\frac{2\delta\Omega}{\omega_0^2-\Omega^2}.$$
Maximum nahe $\Omega\approx\omega_0$ mit $\hat x\approx\frac{F_0}{2m\delta\omega_0}$; bei $\Omega=\omega_0$ ist $\varphi=90°$.
- **Ungedämpft** ($\delta=0$) und $\Omega=\omega_0$: $i\omega_0$ ist Nullstelle von $p$ ⇒ Ansatz $t(A\cos\omega_0t+B\sin\omega_0t)$ ⇒ $x_p=\frac{F_0}{2m\omega_0}t\sin\omega_0t$ – **die Amplitude wächst linear über alle Grenzen** (Resonanzkatastrophe: Tacoma-Brücke, Flattern, Bodenresonanz bei Hubschraubern).

## Aufgaben

:::aufgabe 1 (Skript 20.3)
Partikuläre Lösungen: (1) $\ddot x-3\dot x+2x=4t^2-2$; (2) $\ddot x-3\dot x+2x=6e^{3t}$; (3) $\ddot x+4x=8\cos2t$ (Resonanz); (4) $\ddot x+2\dot x+x=3e^{-t}$ (zweifache Resonanz).
:::loesung
$p=\lambda^2-3\lambda+2=(\lambda-1)(\lambda-2)$ für (1), (2).
(1) $x_p=At^2+Bt+C$: $2At^2+(2B-6A)t+(2A-3B+2C)=4t^2-2$ ⇒ $A=2$, $B=6$, $C=6$: $x_p=2t^2+6t+6$.
(2) $p(3)=2\ne0$ ⇒ $x_p=Ae^{3t}$, $2A=6$: $x_p=3e^{3t}$.
(3) $\pm2i$ Nullstellen ⇒ $x_p=t(A\cos2t+B\sin2t)$; $\ddot x_p+4x_p=2\dot g=-4A\sin2t+4B\cos2t=8\cos2t$ ⇒ $A=0$, $B=2$: $x_p=2t\sin2t$.
(4) $p=(\lambda+1)^2$, $-1$ doppelt ⇒ $x_p=At^2e^{-t}$; $u''=3$ mit $x=ue^{-t}$ ⇒ $A=\frac32$: $x_p=\frac32t^2e^{-t}$.
:::
:::

:::aufgabe 2
$\ddot x+x=t+\sin2t$, $x(0)=0$, $\dot x(0)=0$.
:::loesung
$x_H=c_1\cos t+c_2\sin t$. Superposition: $x_{p1}=t$; $x_{p2}=B\sin2t$: $-4B+B=1$ ⇒ $B=-\frac13$.
$x=c_1\cos t+c_2\sin t+t-\frac13\sin2t$; $x(0)=c_1=0$; $\dot x(0)=c_2+1-\frac23=0$ ⇒ $c_2=-\frac13$:
$x=t-\frac13\sin t-\frac13\sin2t$.
:::
:::

:::aufgabe 3
Ein Motor (Masse 50 kg) auf Federn ($c=2\cdot10^5\,$N/m, $d=400\,$Ns/m) hat eine Unwuchtkraft $F_0=100\,$N. Bei welcher Drehzahl liegt Resonanz, und wie groß ist dort ungefähr die Amplitude?
:::loesung
$\omega_0=\sqrt{\frac{2\cdot10^5}{50}}=63{,}2\,$s⁻¹ ⇒ $n=\frac{60\omega_0}{2\pi}=604\,$min⁻¹. $\delta=\frac{400}{100}=4\,$s⁻¹ ($D=0{,}063$). $\hat x\approx\frac{F_0}{2m\delta\omega_0}=\frac{100}{2\cdot50\cdot4\cdot63{,}2}=3{,}96\,$mm – statisch wären es nur $\frac{F_0}c=0{,}5\,$mm (Überhöhung $\frac1{2D}\approx8$).
:::
:::

## Karteikarten

:::karte
Ansatz für s(t) = k·cos(bt) ohne Resonanz?
???
$A\cos bt+B\sin bt$ (immer beide Terme).
:::

:::karte
Was tun im Resonanzfall?
???
Ist μ = a + ib eine r-fache Nullstelle von p, den Ansatz mit $t^r$ multiplizieren.
:::

:::karte
Ansatz für ein Polynom vom Grad m als Störung (μ = 0 keine Nullstelle)?
???
Vollständiges Polynom vom Grad m.
:::

:::karte
Ungedämpfte Resonanz – Lösung?
???
$x_p=\frac{F_0}{2m\omega_0}t\sin\omega_0t$ – Amplitude wächst linear.
:::

:::karte
Wann setzt man die Anfangswerte ein?
???
Erst in die vollständige Lösung $x_H+x_p$.
:::
