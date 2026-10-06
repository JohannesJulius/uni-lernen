---
title: Vektorräume – Linearkombination, lineare Unabhängigkeit, Basis, Dimension
chapter: 2 Lineare Algebra
minutes: 100
sources: Mathe 1/IngMath1_slides_2_linalg_01_vektorraum.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#97; Mathe 1 + 2 neu/skript_m1_m2.pdf#112
---

:::ziel
- Vektoren in Physik/Technik und den abstrakten **Vektorraum** (Axiome) verstehen.
- Beispiele: $\R^n$, $\C^n$, Polynome.
- **Linearkombination**, **Spann (lineare Hülle)**, **lineare Unabhängigkeit** prüfen.
- **Untervektorraum** nachweisen bzw. widerlegen.
- **Basis**, **Dimension** und **Koordinaten bzgl. einer Basis** bestimmen.
:::

## Vektoren in Natur- und Ingenieurwissenschaften

Erster Versuch einer Definition: Ein Vektor ist eine Größe mit **Länge und Richtung**, dargestellt als Pfeil. Vektoren kann man **addieren** (Kräfteparallelogramm) und mit Zahlen (**Skalaren**) multiplizieren.

- **Mechanik:** Kräfte, Geschwindigkeiten, Beschleunigungen, Momente (TM 1!)
- **Elektromagnetismus:** elektrische und magnetische Felder (Elektrotechnik!)
- **Kinematik:** Ortsvektoren beschreiben Bewegungen.

Darstellung in Komponenten: $\vec v=v_x\vec e_x+v_y\vec e_y+v_z\vec e_z$ oder als Zahlentupel $(v_1,\dots,v_n)$ – immer bezüglich einer **Basis** $\vec b_1,\dots,\vec b_n$: $(v_1,\dots,v_n)\;\widehat=\;\sum_{k=1}^n v_k\vec b_k$.

:::merke Spalten- und Zeilenvektoren
Standard in der Linearen Algebra sind **Spaltenvektoren** $\vec v=\begin{pmatrix}v_1\\\vdots\\v_n\end{pmatrix}$. Der transponierte Vektor $\vec v^T=(v_1\ \cdots\ v_n)$ ist ein Zeilenvektor. In MATLAB und bei Matrixprodukten ist der Unterschied wichtig!
:::

## Der abstrakte Vektorraum

Die Mathematik abstrahiert: Alles, was sich „wie Pfeile" addieren und skalieren lässt, ist ein Vektorraum.

:::def Vektorraum
Ein **Vektorraum** $V$ über einem Körper $K$ (meist $\R$ oder $\C$) ist eine Menge $V$ mit
- einer **Addition** $+:V\times V\to V$ und
- einer **Skalarmultiplikation** $\cdot:K\times V\to V$,

sodass für alle $\vec u,\vec v,\vec w\in V$ und $x,y\in K$ gilt:

| | Axiom |
|---|---|
| (V1) | $(\vec u+\vec v)+\vec w=\vec u+(\vec v+\vec w)$ (assoziativ) |
| (V2) | $\vec u+\vec v=\vec v+\vec u$ (kommutativ) |
| (V3) | Es gibt den **Nullvektor** $\vec 0$ mit $\vec v+\vec 0=\vec v$ |
| (V4) | Zu jedem $\vec v$ gibt es $-\vec v$ mit $\vec v+(-\vec v)=\vec 0$ |
| (S1) | $x\cdot(y\cdot\vec v)=(xy)\cdot\vec v$ |
| (S2) | $1\cdot\vec v=\vec v$ |
| (D1) | $x\cdot(\vec u+\vec v)=x\vec u+x\vec v$ |
| (D2) | $(x+y)\cdot\vec v=x\vec v+y\vec v$ |
:::

### Beispiele

- $\R$ mit üblicher Addition/Multiplikation.
- $\R^n$ mit **komponentenweiser** Addition und Skalarmultiplikation:
$$\begin{pmatrix}v_1\\\vdots\\v_n\end{pmatrix}+\begin{pmatrix}w_1\\\vdots\\w_n\end{pmatrix}=\begin{pmatrix}v_1+w_1\\\vdots\\v_n+w_n\end{pmatrix},\qquad x\begin{pmatrix}v_1\\\vdots\\v_n\end{pmatrix}=\begin{pmatrix}xv_1\\\vdots\\xv_n\end{pmatrix}.$$
- $\C^n$ als komplexer Vektorraum (Skalare aus ℂ).
- **Polynome** $\R[X]=\{a_0+a_1X+\dots+a_nX^n\}$: Addition koeffizientenweise $\sum(a_k+b_k)X^k$, Skalarmultiplikation $\lambda p=\sum(\lambda a_k)X^k$. Auch die Polynome vom Grad $\le n$ bilden einen Vektorraum.
- Funktionen $f:[a,b]\to\R$ (punktweise Addition), Lösungen homogener linearer Gleichungssysteme oder Differentialgleichungen.

## Linearkombination und Spann

:::def Linearkombination, Spann
Ein Vektor der Form $\vec v=x_1\vec v_1+x_2\vec v_2+\dots+x_k\vec v_k$ mit Skalaren $x_i$ heißt **Linearkombination** der $\vec v_i$. Die Menge aller Linearkombinationen heißt **Spann** oder **lineare Hülle**:
$$\operatorname{span}(\vec v_1,\dots,\vec v_k)=\Big\{\sum_{l=1}^k a_l\vec v_l\ \Big|\ a_1,\dots,a_k\in K\Big\}.$$
:::

:::bsp Darstellbarkeit im $\R^2$
$\vec v_1=(1,1)$, $\vec v_2=(-1,-1)$; $\vec w_1=(1,1)$, $\vec w_2=(1,-1)$.
1. $(1,1)$ aus $\vec v_1,\vec v_2$: z. B. $x=1,y=0$ **oder** $x=0,y=-1$ – **nicht eindeutig**.
2. $(1,1)$ aus $\vec w_1,\vec w_2$: $x+y=1,\ x-y=1\Rightarrow x=1,y=0$ – **eindeutig**.
3. $(1,0)$ aus $\vec v_1,\vec v_2$: $x-y=1$ und $x-y=0$ ⇒ $0=1$, **unmöglich**.
4. $(1,0)$ aus $\vec w_1,\vec w_2$: $x+y=1,\ x-y=0\Rightarrow x=y=\tfrac12$.

Allgemein: $\operatorname{span}(\vec v_1,\vec v_2)=\{s(1,1)\mid s\in\R\}$ – nur eine **Gerade**, da $\vec v_2=-\vec v_1$.
Dagegen $\operatorname{span}(\vec w_1,\vec w_2)=\R^2$, denn jedes $\vec u=(u_1,u_2)$ ist $\vec u=\frac{u_1+u_2}2\vec w_1+\frac{u_1-u_2}2\vec w_2$.
:::

## Lineare Unabhängigkeit

Der Unterschied oben: $\vec v_1,\vec v_2$ sind „redundant". Man testet das mit dem Nullvektor:
- $x(1,1)+y(-1,-1)=(0,0)$ hat **unendlich viele** Lösungen ($y=x$ beliebig).
- $x(1,1)+y(1,-1)=(0,0)$ hat **nur** $x=y=0$.

:::def Lineare Unabhängigkeit
Vektoren $\vec v_1,\dots,\vec v_n$ heißen **linear unabhängig**, wenn
$$\sum_{k=1}^nx_k\vec v_k=\vec 0\quad\Longrightarrow\quad x_1=x_2=\dots=x_n=0$$
(nur die **triviale** Linearkombination ergibt den Nullvektor). Andernfalls heißen sie **linear abhängig** – dann lässt sich mindestens einer als Linearkombination der anderen schreiben.
:::

:::rezept Lineare Unabhängigkeit prüfen
1. Ansatz $x_1\vec v_1+\dots+x_n\vec v_n=\vec 0$.
2. Komponentenweise → **homogenes LGS** für $x_1,\dots,x_n$.
3. Mit Gauß lösen. Nur die triviale Lösung ⇒ linear unabhängig; freier Parameter ⇒ linear abhängig.
:::

:::merke Schnelltests
- Zwei Vektoren sind genau dann linear abhängig, wenn einer ein Vielfaches des anderen ist.
- Enthält eine Menge den Nullvektor, ist sie linear abhängig.
- Im $\R^n$ sind mehr als $n$ Vektoren **immer** linear abhängig.
- $n$ Vektoren im $\R^n$ sind genau dann linear unabhängig, wenn die Determinante der Matrix aus ihnen $\ne0$ ist (kommt später).
:::

:::achtung Paarweise unabhängig ≠ unabhängig
$\vec u=(1,2,3)^T$, $\vec v=(3,2,1)^T$, $\vec w=(1,1,1)^T$ sind **paarweise** linear unabhängig (keiner ist Vielfaches eines anderen), aber **zusammen linear abhängig**: $\vec w=\frac14(\vec u+\vec v)$. Details siehe LGS-Lektion.
:::

## Untervektorräume

:::def Untervektorraum
$U\subseteq V$ ist ein **Untervektorraum** (UVR), wenn
1. $\vec 0\in U$ (bzw. $U\ne\emptyset$),
2. $\vec u_1,\vec u_2\in U\Rightarrow\vec u_1+\vec u_2\in U$ (abgeschlossen unter Addition),
3. $x\in K,\ \vec u\in U\Rightarrow x\vec u\in U$ (abgeschlossen unter Skalarmultiplikation).
:::

:::bsp Untervektorräume im $\R^2$?
- $\{\vec 0\}$: ja (trivialer UVR).
- $\R^2$ selbst: ja.
- $\operatorname{span}(\vec v)=\{\lambda\vec v\}$, eine **Ursprungsgerade**: ja. Jeder Spann ist ein UVR.
- Einheitskreisscheibe $\{(w_1,w_2): w_1^2+w_2^2\le1\}$: **nein** – z. B. $(1,0)$ liegt drin, $2\cdot(1,0)$ nicht.
- Gerade $y=x+1$: **nein**, enthält $\vec 0$ nicht.

Die UVR des $\R^2$ sind genau: $\{\vec0\}$, Ursprungsgeraden, $\R^2$. Im $\R^3$: $\{\vec0\}$, Ursprungsgeraden, Ursprungsebenen, $\R^3$.
:::

:::bsp Walkthrough: Nachweis eines UVR
$U=\{(x,y,z)^T\in\R^3: x+2y-z=0\}$.
1. $\vec 0$: $0+0-0=0$ ✓.
2. $\vec u,\vec v\in U$: $(u_1+v_1)+2(u_2+v_2)-(u_3+v_3)=(u_1+2u_2-u_3)+(v_1+2v_2-v_3)=0+0=0$ ✓.
3. $\lambda u_1+2\lambda u_2-\lambda u_3=\lambda\cdot0=0$ ✓.
⇒ UVR (eine Ursprungsebene). Dagegen ist $\{x+2y-z=1\}$ kein UVR (kein Nullvektor).
:::

## Basis und Dimension

:::def Erzeugendensystem, Basis
- $\{\vec v_1,\dots,\vec v_n\}$ ist ein **Erzeugendensystem** von $V$, wenn $\operatorname{span}(\vec v_1,\dots,\vec v_n)=V$.
- Eine **Basis** ist ein **linear unabhängiges** Erzeugendensystem.
:::

:::satz Dimension
Hat $V$ eine Basis aus endlich vielen Vektoren, dann haben **alle** Basen gleich viele Elemente. Diese Anzahl heißt **Dimension** $\dim V$.
:::

- $\dim\R^n=n$. **Standardbasis** (kanonische Basis): $\vec e_1=(1,0,\dots,0)^T,\dots,\vec e_n=(0,\dots,0,1)^T$.
- $\R^2$ hat viele Basen: $\{(1,0),(0,1)\}$, $\{(1,1),(1,-1)\}$, $\{(1,0),(0,-1)\}$, …
- Polynome vom Grad $\le n$: Basis $1,X,X^2,\dots,X^n$, Dimension $n+1$.
- $\dim\{\vec0\}=0$.

:::satz Eigenschaften (für $\dim V=n$)
- Jede Menge von $n$ linear unabhängigen Vektoren ist eine Basis.
- Jedes Erzeugendensystem aus $n$ Vektoren ist eine Basis.
- Mehr als $n$ Vektoren sind linear abhängig; weniger als $n$ erzeugen nicht ganz $V$.
- Bezüglich einer Basis ist die Darstellung jedes Vektors **eindeutig**.
:::

### Koordinaten bezüglich einer Basis

Ist $B=\{\vec b_1,\dots,\vec b_n\}$ Basis, so gibt es zu jedem $\vec v$ eindeutige Zahlen $c_1,\dots,c_n$ mit $\vec v=\sum c_k\vec b_k$. Der Vektor $(c_1,\dots,c_n)^T$ heißt **Koordinatenvektor** von $\vec v$ bzgl. $B$.

:::bsp
Koordinaten von $\vec v=(3,1)^T$ bzgl. $B=\{(1,1)^T,(1,-1)^T\}$: $c_1+c_2=3$, $c_1-c_2=1$ ⇒ $c_1=2$, $c_2=1$. Also $\vec v=2\vec b_1+1\vec b_2$, Koordinatenvektor $(2,1)^T_B$ (bzgl. Standardbasis $(3,1)^T$).
:::

## Aufgaben

:::aufgabe 1
Sind $(1,1,0)^T$ und $(1,0,1)^T$ linear unabhängig? Und $(1,2,3)^T,(2,4,6)^T$?
:::loesung
$\lambda(1,1,0)+\mu(1,0,1)=0$ ⇒ 2. Komponente $\lambda=0$, 3. Komponente $\mu=0$ ⇒ unabhängig. Das zweite Paar ist abhängig: $(2,4,6)=2(1,2,3)$.
:::
:::

:::aufgabe 2
Ist $U=\{(x,y)\in\R^2: xy\ge0\}$ ein UVR?
:::loesung
Nein: $(1,0)\in U$ und $(0,-1)\in U$, aber $(1,0)+(0,-1)=(1,-1)$ mit $xy=-1<0$ liegt nicht in $U$.
:::
:::

:::aufgabe 3
Zeige, dass $B=\{(1,0,0)^T,(1,1,0)^T,(1,1,1)^T\}$ eine Basis des $\R^3$ ist, und bestimme die Koordinaten von $(2,3,4)^T$.
:::loesung
$c_1(1,0,0)+c_2(1,1,0)+c_3(1,1,1)=(c_1+c_2+c_3,\ c_2+c_3,\ c_3)$. Für $(2,3,4)$: $c_3=4$, $c_2=3-4=-1$, $c_1=2+1-4=-1$. Da das System für jede rechte Seite eindeutig lösbar ist (Dreiecksform, Diagonale ≠ 0), sind die drei Vektoren linear unabhängig und erzeugen $\R^3$ ⇒ Basis. Koordinaten $(-1,-1,4)^T_B$.
:::
:::

:::aufgabe 4
Welche Dimension hat $\operatorname{span}\big((1,2,3)^T,(3,2,1)^T,(1,1,1)^T\big)$?
:::loesung
Die drei sind linear abhängig ($\vec w=\frac14(\vec u+\vec v)$), aber $\vec u,\vec v$ sind unabhängig ⇒ Dimension 2 (eine Ebene durch 0).
:::
:::

## Karteikarten

:::karte
Definition lineare Unabhängigkeit?
???
$\sum x_k\vec v_k=\vec0\Rightarrow$ alle $x_k=0$ (nur triviale Linearkombination ergibt $\vec0$).
:::

:::karte
Drei Bedingungen für einen Untervektorraum?
???
$\vec0\in U$; abgeschlossen unter Addition; abgeschlossen unter Skalarmultiplikation.
:::

:::karte
Was ist eine Basis?
???
Ein linear unabhängiges Erzeugendensystem; Anzahl der Elemente = Dimension.
:::

:::karte
Ist die Einheitskreisscheibe ein Untervektorraum des $\R^2$?
???
Nein – nicht abgeschlossen unter Skalarmultiplikation ($2\cdot(1,0)$ liegt außerhalb).
:::

:::karte
Wie viele Vektoren im $\R^3$ können höchstens linear unabhängig sein?
???
3 (= Dimension). Vier oder mehr sind immer linear abhängig.
:::

:::karte
Was ist der Spann von Vektoren?
???
Die Menge aller ihrer Linearkombinationen; immer ein Untervektorraum.
:::
