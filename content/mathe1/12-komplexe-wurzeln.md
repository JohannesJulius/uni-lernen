---
title: Komplexe Zahlen III – n-te Wurzeln & Einheitswurzeln
chapter: 1 Grundlagen – Komplexe Zahlen
minutes: 60
sources: Mathe 1/IngMath1_slides_1_basics_6_komplexezahlen_2_Wurzeln (1).pdf; Mathe 1/IngMath1_worksheet_1_basics_6_komplexezahlen_wurzeln.pdf
---

:::ziel
- Alle $n$ Lösungen von $z^n=q$ in Polarform bestimmen.
- Einheitswurzeln als regelmäßiges $n$-Eck auf dem Einheitskreis verstehen.
- Quadratwurzeln auch algebraisch über den Ansatz $z=x+\mathrm iy$ berechnen.
- Quadratische Gleichungen mit komplexen Lösungen lösen.
:::

## Erste Beispiele: Wurzeln aus −1

- $z^2=-1$: $z=\pm\mathrm i$, $\;z^2+1=(z+\mathrm i)(z-\mathrm i)$.
- $z^3=-1$: $z\in\{-1,\ \e^{\mathrm i\pi/3},\ \e^{\mathrm i5\pi/3}\}=\{-1,\ \frac12\pm\frac{\sqrt3}2\mathrm i\}$.
- $z^4=-1$: $z_k=\e^{\mathrm i(\pi/4+k\pi/2)}$, $k=0,1,2,3$ – vier Punkte im 45°-Raster.
- $z^5=-1$: $z_k=\e^{\mathrm i(\pi/5+2\pi k/5)}$, $k=0,\dots,4$.

Muster: Die Lösungen von $z^n=q$ bilden ein **regelmäßiges $n$-Eck** um den Ursprung.

## n-te Wurzeln – allgemein

Gesucht: alle $z$ mit $z^n=q$, wobei $q=r\e^{\mathrm i\varphi}\ne0$. Ansatz $z=\rho\e^{\mathrm i\psi}$. De Moivre: $z^n=\rho^n\e^{\mathrm in\psi}$. Vergleich:
- Beträge: $\rho^n=r\Rightarrow\rho=\sqrt[n]r$ (reelle, positive Wurzel).
- Winkel: $n\psi=\varphi+2\pi k$ (Winkel sind nur bis auf $2\pi k$ bestimmt!) $\Rightarrow\psi=\frac{\varphi+2\pi k}n$.

:::satz n-te Wurzeln
Die Gleichung $z^n=r\e^{\mathrm i\varphi}$ ($r>0$) hat **genau $n$ verschiedene** Lösungen
$$z_k=\sqrt[n]r\;\e^{\mathrm i\frac{\varphi+2\pi k}{n}}=\sqrt[n]r\left(\cos\frac{\varphi+2\pi k}n+\mathrm i\sin\frac{\varphi+2\pi k}n\right),\qquad k=0,1,\dots,n-1.$$
Sie liegen auf dem Kreis mit Radius $\sqrt[n]r$, jeweils um den Winkel $\frac{2\pi}n$ versetzt.
:::

Ab $k=n$ wiederholen sich die Lösungen (Winkel um $2\pi$ größer).

:::rezept n-te Wurzeln berechnen
1. $q$ in Polarform: $r=|q|$, $\varphi=\arg q$.
2. Betrag der Wurzeln: $\sqrt[n]r$.
3. Startwinkel $\frac\varphi n$, dann jeweils $+\frac{2\pi}n$ bis $n$ Werte da sind.
4. Bei Bedarf zurück in kartesische Form.
:::

## Einheitswurzeln

:::def Einheitswurzeln
Die Lösungen von $z^n=1$ heißen **$n$-te Einheitswurzeln**:
$$z_k=\e^{2\pi\mathrm i k/n}=\cos\frac{2\pi k}n+\mathrm i\sin\frac{2\pi k}n,\qquad k=0,\dots,n-1.$$
Sie liegen auf dem Einheitskreis und bilden ein regelmäßiges $n$-Eck mit Ecke bei $1$.
:::

- $n=2$: $\pm1$; $\;z^2-1=(z+1)(z-1)$.
- $n=3$: $1,\ -\frac12\pm\frac{\sqrt3}2\mathrm i$; $\;z^3-1=(z-1)(z^2+z+1)$.
- $n=4$: $1,\mathrm i,-1,-\mathrm i$ ($z_k=\cos\frac{k\pi}2+\mathrm i\sin\frac{k\pi}2$).
- $n=5$: $z_k=\e^{2\pi\mathrm ik/5}$ (regelmäßiges Fünfeck).

Mit $\omega=\e^{2\pi\mathrm i/n}$ sind die Einheitswurzeln $1,\omega,\omega^2,\dots,\omega^{n-1}$, und für $n\ge2$ gilt $1+\omega+\dots+\omega^{n-1}=\frac{1-\omega^n}{1-\omega}=0$ (geometrische Summe!). Die Wurzeln von $z^n=q$ sind $z_0\cdot\omega^k$ (eine Wurzel mal alle Einheitswurzeln).

<figure><svg class="fig" viewBox="0 0 220 220" width="220" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="11">
<circle cx="110" cy="110" r="80" fill="none" stroke="currentColor" stroke-dasharray="3 3"/><path d="M10 110 H210 M110 210 V10" stroke="currentColor" stroke-width=".8"/>
<polygon points="190,110 134.7,186.1 45.3,157 45.3,63 134.7,33.9" fill="#3b6fd8" fill-opacity=".15" stroke="#3b6fd8"/>
<g fill="#3b6fd8"><circle cx="190" cy="110" r="4"/><circle cx="134.7" cy="33.9" r="4"/><circle cx="45.3" cy="63" r="4"/><circle cx="45.3" cy="157" r="4"/><circle cx="134.7" cy="186.1" r="4"/></g>
<text x="192" y="104" fill="currentColor">1</text><text x="140" y="30" fill="currentColor">ω</text><text x="24" y="60" fill="currentColor">ω²</text><text x="24" y="170" fill="currentColor">ω³</text><text x="140" y="200" fill="currentColor">ω⁴</text>
</svg><figcaption>Die 5. Einheitswurzeln bilden ein regelmäßiges Fünfeck</figcaption></figure>

## Quadratwurzeln algebraisch

Für $z^2=a+\mathrm ib$ geht es auch ohne Polarform: Ansatz $z=x+\mathrm iy$:
$$(x+\mathrm iy)^2=x^2-y^2+2\mathrm ixy=a+\mathrm ib\ \Rightarrow\ \begin{cases}x^2-y^2=a\\ 2xy=b\end{cases}$$
Zusätzlich hilft der Betrag: $x^2+y^2=|a+\mathrm ib|=\sqrt{a^2+b^2}$.

:::bsp Quadratwurzeln von $2+\mathrm i\sqrt{12}$ (Folienbeispiel)
$|q|=\sqrt{4+12}=4$. Also $x^2+y^2=4$ und $x^2-y^2=2$ ⇒ $x^2=3$, $y^2=1$. Aus $2xy=\sqrt{12}>0$: $x,y$ gleiches Vorzeichen. Lösungen $z=\pm(\sqrt3+\mathrm i)$.
Polar: $q=4\e^{\mathrm i\pi/3}$ ⇒ $z_0=2\e^{\mathrm i\pi/6}=2(\frac{\sqrt3}2+\frac12\mathrm i)=\sqrt3+\mathrm i$, $z_1=-z_0$ ✓.
:::

:::bsp Quadratische Gleichung mit komplexen Koeffizienten
$z^2-2z+(1-2\mathrm i)=0$: $z=1\pm\sqrt{1-(1-2\mathrm i)}=1\pm\sqrt{2\mathrm i}$. $2\mathrm i=2\e^{\mathrm i\pi/2}$ ⇒ $\sqrt{2\mathrm i}=\pm\sqrt2\e^{\mathrm i\pi/4}=\pm(1+\mathrm i)$. Also $z_1=2+\mathrm i$, $z_2=-\mathrm i$.
:::

:::achtung Wurzelregeln gelten in ℂ nicht
$\sqrt{ab}=\sqrt a\sqrt b$ ist für negative/komplexe Zahlen falsch: $1=\sqrt1=\sqrt{(-1)(-1)}\ne\sqrt{-1}\sqrt{-1}=\mathrm i^2=-1$. In ℂ spricht man daher von **den** $n$ Lösungen von $z^n=q$, nicht von „der" Wurzel.
:::

## Aufgaben

:::aufgabe 1
Bestimme alle Lösungen von $z^3=8\mathrm i$ in Polar- und kartesischer Form.
:::loesung
$8\mathrm i=8\e^{\mathrm i\pi/2}$, $\sqrt[3]8=2$, Winkel $\frac{\pi/2+2\pi k}3=\frac\pi6+\frac{2\pi k}3$:
$z_0=2\e^{\mathrm i\pi/6}=\sqrt3+\mathrm i$, $z_1=2\e^{\mathrm i5\pi/6}=-\sqrt3+\mathrm i$, $z_2=2\e^{\mathrm i3\pi/2}=-2\mathrm i$.
:::
:::

:::aufgabe 2
Löse $z^4=-16$.
:::loesung
$-16=16\e^{\mathrm i\pi}$, Betrag $2$, Winkel $\frac\pi4+\frac{k\pi}2$: $z\in\{\sqrt2(1+\mathrm i),\ \sqrt2(-1+\mathrm i),\ \sqrt2(-1-\mathrm i),\ \sqrt2(1-\mathrm i)\}$.
:::
:::

:::aufgabe 3
Berechne die Quadratwurzeln von $-3+4\mathrm i$ algebraisch.
:::loesung
$x^2-y^2=-3$, $2xy=4$, $x^2+y^2=5$ ⇒ $x^2=1$, $y^2=4$, $xy=2>0$ ⇒ $z=\pm(1+2\mathrm i)$. Probe: $(1+2\mathrm i)^2=1+4\mathrm i-4=-3+4\mathrm i$ ✓.
:::
:::

:::aufgabe 4
Zeige: Die Summe aller 6. Einheitswurzeln ist 0.
:::loesung
$\sum_{k=0}^5\omega^k=\frac{1-\omega^6}{1-\omega}=\frac{1-1}{1-\omega}=0$, da $\omega=\e^{\mathrm i\pi/3}\ne1$. Geometrisch: Die Ecken eines regelmäßigen Sechsecks um 0 heben sich auf.
:::
:::

## Karteikarten

:::karte
Alle Lösungen von $z^n=r\e^{\mathrm i\varphi}$?
???
$z_k=\sqrt[n]r\,\e^{\mathrm i(\varphi+2\pi k)/n}$, $k=0,\dots,n-1$ – genau $n$ Stück.
:::

:::karte
$n$-te Einheitswurzeln?
???
$\e^{2\pi\mathrm ik/n}$, $k=0,\dots,n-1$; regelmäßiges $n$-Eck auf dem Einheitskreis mit Ecke bei 1.
:::

:::karte
Algebraischer Ansatz für $\sqrt{a+\mathrm ib}$?
???
$z=x+\mathrm iy$: $x^2-y^2=a$, $2xy=b$ (und $x^2+y^2=\sqrt{a^2+b^2}$).
:::

:::karte
Lösungen von $z^3=1$?
???
$1$, $-\frac12+\frac{\sqrt3}2\mathrm i$, $-\frac12-\frac{\sqrt3}2\mathrm i$.
:::
