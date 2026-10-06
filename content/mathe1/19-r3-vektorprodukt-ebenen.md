---
title: Analytische Geometrie im ℝ³ – Vektorprodukt, Spatprodukt, Geraden & Ebenen
chapter: 2 Lineare Algebra
minutes: 100
sources: Mathe 1/IngMath1_slides_2_linalg_08_analytgeom_2_R3.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#111
---

:::ziel
- Das **Kreuzprodukt** berechnen und geometrisch deuten (senkrechter Vektor, Parallelogrammfläche, Rechte-Hand-Regel).
- Das **Spatprodukt** als Volumen deuten.
- Geraden und Ebenen in Parameter-, Normalen- und Koordinatenform sowie **Hessesche Normalform**; Abstände berechnen.
- Anwendung: Moment $\vec M=\vec r\times\vec F$ (TM 1).
:::

## Das Kreuzprodukt (Vektorprodukt)

:::def Kreuzprodukt (nur im $\R^3$)
$$\vec u\times\vec v=\begin{pmatrix}u_1\\u_2\\u_3\end{pmatrix}\times\begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix}=\begin{pmatrix}u_2v_3-u_3v_2\\u_3v_1-u_1v_3\\u_1v_2-u_2v_1\end{pmatrix}.$$
Das Ergebnis ist ein **Vektor**.
:::

:::merke Merkhilfe
Komponente 1 „deckt Zeile 1 ab" und rechnet über Kreuz mit Zeilen 2,3: $u_2v_3-u_3v_2$. Die weiteren Komponenten entstehen durch zyklisches Weiterschalten $1\to2\to3\to1$. Alternativ als formale Determinante $\begin{vmatrix}\vec e_1&\vec e_2&\vec e_3\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}$ (siehe Determinanten).
:::

:::satz Eigenschaften
1. **Antikommutativ:** $\vec u\times\vec v=-(\vec v\times\vec u)$; insbesondere $\vec u\times\vec u=\vec0$.
2. $\vec u\times\vec v=\vec0\iff\vec u,\vec v$ linear abhängig (parallel).
3. $\vec u\times\vec v$ steht **senkrecht** auf $\vec u$ und $\vec v$: $\langle\vec u,\vec u\times\vec v\rangle=\langle\vec v,\vec u\times\vec v\rangle=0$.
4. **Betrag** $\|\vec u\times\vec v\|=\|\vec u\|\,\|\vec v\|\sin\varphi$ = Flächeninhalt des von $\vec u,\vec v$ aufgespannten **Parallelogramms** (Dreieck: Hälfte).
5. $\vec u,\vec v,\vec u\times\vec v$ bilden ein **Rechtssystem** (Rechte-Hand-Regel: Daumen $\vec u$, Zeigefinger $\vec v$, Mittelfinger $\vec u\times\vec v$).
6. Bilinear, aber **nicht assoziativ**: $(\vec u\times\vec v)\times\vec w\ne\vec u\times(\vec v\times\vec w)$ im Allgemeinen.
7. $\vec e_1\times\vec e_2=\vec e_3$, $\vec e_2\times\vec e_3=\vec e_1$, $\vec e_3\times\vec e_1=\vec e_2$.
:::

:::bsp
$\vec u=(1,2,3)^T$, $\vec v=(4,5,6)^T$: $\vec u\times\vec v=(2\cdot6-3\cdot5,\ 3\cdot4-1\cdot6,\ 1\cdot5-2\cdot4)^T=(-3,6,-3)^T$. Probe: $\langle\vec u,(-3,6,-3)\rangle=-3+12-9=0$ ✓. Parallelogrammfläche $\sqrt{9+36+9}=\sqrt{54}\approx7{,}35$.
:::

:::info Anwendung in TM 1: Moment einer Kraft
Greift die Kraft $\vec F$ am Punkt mit Ortsvektor $\vec r$ (bezogen auf den Bezugspunkt) an, so ist ihr **Moment** $\vec M=\vec r\times\vec F$. Betrag: Kraft × Hebelarm ($\|\vec r\|\sin\varphi$ ist der senkrechte Abstand der Wirkungslinie). Ebenso Lorentzkraft $\vec F=q\,\vec v\times\vec B$ in der Elektrotechnik.
:::

## Das Spatprodukt

:::def Spatprodukt
$$[\vec u,\vec v,\vec w]=\langle\vec u,\vec v\times\vec w\rangle=\langle\vec u\times\vec v,\vec w\rangle=\det(\vec u\ \vec v\ \vec w).$$
:::

- $|[\vec u,\vec v,\vec w]|$ = **Volumen des Spats** (Parallelepipeds), das $\vec u,\vec v,\vec w$ aufspannen; das Vorzeichen gibt die Orientierung (Rechtssystem: $+$).
- $[\vec u,\vec v,\vec w]=0\iff$ die drei Vektoren liegen in einer Ebene (linear abhängig).
- Zyklisches Vertauschen ändert nichts: $[\vec u,\vec v,\vec w]=[\vec v,\vec w,\vec u]=[\vec w,\vec u,\vec v]$.
- Ausblick: In der mehrdimensionalen Analysis taucht das Spatprodukt als Determinante (Volumenverzerrung) wieder auf.

:::bsp
$[(1,0,0),(0,2,0),(1,1,3)]=\langle(1,0,0),(0,2,0)\times(1,1,3)\rangle=\langle(1,0,0),(6,0,-2)\rangle=6$. Volumen 6.
:::

## Geraden im $\R^3$

**Parameterform:** $g:\ \vec x=\vec p+t\vec a$, $t\in\R$ (Stützvektor $\vec p$, Richtungsvektor $\vec a$). Gerade durch $P$ und $Q$: $\vec a=\vec q-\vec p$.

**Abstand Punkt $R$ – Gerade:** $d=\dfrac{\|(\vec r-\vec p)\times\vec a\|}{\|\vec a\|}$ (Parallelogrammfläche ÷ Grundseite).

## Ebenen

Zwei linear unabhängige Richtungsvektoren $\vec u,\vec v$ und ein Punkt $P$ legen eine Ebene fest.

| Form | Gleichung |
|---|---|
| **Parameterform** | $\vec x=\vec p+a\vec u+b\vec v$, $a,b\in\R$ |
| **Normalenform** | $\langle\vec x-\vec p,\vec n\rangle=0$ mit $\vec n=\vec u\times\vec v$ |
| **Koordinatenform** | $n_1x_1+n_2x_2+n_3x_3=d$ mit $d=\langle\vec p,\vec n\rangle$ |
| **Hessesche Normalform** | $\langle\vec x,\vec n_0\rangle=d_0$ mit $\|\vec n_0\|=1$, $d_0\ge0$ |

- Ebene durch den Ursprung ($\vec p=\vec0$): $\{\vec x:\langle\vec x,\vec n\rangle=0\}$ – ein **Untervektorraum**.
- Ebene nicht durch 0: **kein** UVR (enthält $\vec0$ nicht), sondern ein *affiner* Unterraum (verschobener UVR).
- In der HNF ist $d_0$ der **Abstand der Ebene vom Ursprung**.

:::satz Abstand Punkt – Ebene
Für einen Punkt $Q$ und die Ebene in HNF $\langle\vec x,\vec n_0\rangle=d_0$: $\quad d(Q,E)=|\langle\vec q,\vec n_0\rangle-d_0|$.
:::

:::bsp Ebene durch drei Punkte
$P=(1,0,0)$, $Q=(0,1,0)$, $R=(0,0,2)$. $\vec u=\vec q-\vec p=(-1,1,0)^T$, $\vec v=\vec r-\vec p=(-1,0,2)^T$.
$\vec n=\vec u\times\vec v=(1\cdot2-0\cdot0,\ 0\cdot(-1)-(-1)\cdot2,\ (-1)\cdot0-1\cdot(-1))^T=(2,2,1)^T$.
Koordinatenform: $2x+2y+z=\langle\vec p,\vec n\rangle=2$. Probe mit $Q$: $2$ ✓, $R$: $2$ ✓.
HNF: $\|\vec n\|=3$: $\frac23x+\frac23y+\frac13z=\frac23$ ⇒ Abstand zum Ursprung $\frac23$.
Abstand von $S=(1,1,1)$: $|\frac{2+2+1}3-\frac23|=1$.
:::

:::merke Lagebeziehungen
- Zwei Ebenen sind parallel ⇔ Normalenvektoren parallel. Schnittgerade sonst: LGS aus beiden Koordinatengleichungen lösen (1 freier Parameter).
- Gerade ∩ Ebene: Parameterform in Koordinatengleichung einsetzen → Gleichung für $t$.
- Winkel zwischen Ebenen = Winkel zwischen den Normalen.
:::

## Aufgaben

:::aufgabe 1
Berechne $(2,0,1)^T\times(1,3,-1)^T$ und die Fläche des aufgespannten Dreiecks.
:::loesung
$(0\cdot(-1)-1\cdot3,\ 1\cdot1-2\cdot(-1),\ 2\cdot3-0\cdot1)^T=(-3,3,6)^T$. Betrag $\sqrt{54}=3\sqrt6$, Dreieck $\frac{3\sqrt6}2\approx3{,}67$.
:::
:::

:::aufgabe 2
Eine Kraft $\vec F=(0,0,-100)^T$ N greift bei $\vec r=(2,1,0)^T$ m an. Berechne das Moment um den Ursprung.
:::loesung
$\vec M=\vec r\times\vec F=(1\cdot(-100)-0,\ 0-2\cdot(-100),\ 0)^T=(-100,200,0)^T$ Nm, $|\vec M|=100\sqrt5\approx224$ Nm.
:::
:::

:::aufgabe 3
Liegen $(1,2,3)^T,(3,2,1)^T,(1,1,1)^T$ in einer Ebene?
:::loesung
$(3,2,1)\times(1,1,1)=(2-1,\ 1-3,\ 3-2)=(1,-2,1)$. $\langle(1,2,3),(1,-2,1)\rangle=1-4+3=0$ ⇒ Spatprodukt 0 ⇒ ja (linear abhängig, passt zu früher).
:::
:::

:::aufgabe 4
Bestimme den Schnittpunkt der Geraden $\vec x=(1,1,0)^T+t(1,0,1)^T$ mit der Ebene $x+y+z=6$.
:::loesung
$(1+t)+1+t=6\Rightarrow t=2$ ⇒ $S=(3,1,2)$.
:::
:::

## Karteikarten

:::karte
Formel des Kreuzprodukts?
???
$\vec u\times\vec v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)^T$
:::

:::karte
Geometrische Bedeutung von $\|\vec u\times\vec v\|$?
???
Flächeninhalt des von $\vec u,\vec v$ aufgespannten Parallelogramms $=\|\vec u\|\|\vec v\|\sin\varphi$.
:::

:::karte
Was gibt das Spatprodukt an?
???
$\langle\vec u,\vec v\times\vec w\rangle$ = orientiertes Volumen des Spats; 0 ⇔ komplanar.
:::

:::karte
Hessesche Normalform und Abstand Punkt–Ebene?
???
$\langle\vec x,\vec n_0\rangle=d_0$, $\|\vec n_0\|=1$; Abstand $|\langle\vec q,\vec n_0\rangle-d_0|$.
:::

:::karte
Ist $\vec u\times\vec v=\vec v\times\vec u$?
???
Nein: $\vec u\times\vec v=-\vec v\times\vec u$ (antikommutativ).
:::
