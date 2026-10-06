---
title: Matrizen & lineare Abbildungen – Matrixprodukt, Kern, Bild, Rang
chapter: 2 Lineare Algebra
minutes: 120
sources: Mathe 1/IngMath1_slides_2_linalg_03_matrizen_1_def_und_lineare_abb.pdf; Mathe 1/IngMath1_slides_2_linalg_04_matrizen_2_linAbb_NUTSHELL.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#127; Mathe 1 + 2 neu/skript_m1_m2.pdf#133; Mathe 1 + 2 neu/skript_m1_m2.pdf#138
---

:::ziel
- Matrizen als Zahlenschema **und** als lineare Abbildung $\vec x\mapsto A\vec x$ verstehen.
- Matrix-Vektor- und **Matrix-Matrix-Multiplikation** sicher rechnen (Dimensionen prüfen!).
- **Linearität** nachweisen; Darstellungsmatrix aus den Bildern der Basisvektoren aufstellen.
- **Kern, Bild, Rang** bestimmen und die **Dimensionsformel** anwenden.
- Rechenregeln: Transponieren, Assoziativität, Nicht-Kommutativität.
:::

## Matrizen

:::def Matrix
Eine reelle $m\times n$-Matrix ist ein rechteckiges Zahlenschema mit $m$ **Zeilen** und $n$ **Spalten**:
$$A=(a_{ij})=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}\in\R^{m\times n}.$$
$a_{ij}$ steht in Zeile $i$, Spalte $j$ („**Z**eile zuerst, **S**palte später").
:::

$\R^{m\times n}$ ist mit **komponentenweiser** Addition $A+B=(a_{ij}+b_{ij})$ und Skalarmultiplikation $\lambda A=(\lambda a_{ij})$ selbst ein Vektorraum (Dimension $mn$). Spaltenvektoren sind $n\times1$-Matrizen, Zeilenvektoren $1\times n$-Matrizen.

Besondere Matrizen:
- **quadratisch**: $m=n$; **Einheitsmatrix** $E=I=\operatorname{diag}(1,\dots,1)$ mit $E\vec x=\vec x$.
- **Nullmatrix** $0$; **Diagonalmatrix** (nur Diagonale ≠ 0); **obere/untere Dreiecksmatrix**.
- **Transponierte** $A^T$: Zeilen und Spalten vertauscht, $(A^T)_{ij}=a_{ji}$. **Symmetrisch**: $A^T=A$.

## Matrix-Vektor-Multiplikation

Motivation: Die Linearkombination $x_1\vec v+x_2\vec w$ ordnet jedem Paar $(x_1,x_2)$ einen Vektor zu. Schreibt man $\vec v,\vec w$ als **Spalten** einer Matrix, wird daraus ein Produkt:

:::def Matrix-Vektor-Produkt
Für $A\in\R^{m\times n}$ und $\vec x\in\R^n$:
$$A\vec x=\begin{pmatrix}\sum_{j=1}^na_{1j}x_j\\\vdots\\\sum_{j=1}^na_{mj}x_j\end{pmatrix}\in\R^m.$$
Zwei Sichtweisen:
- **Zeilenweise:** Die $i$-te Komponente ist „Zeile $i$ mal $\vec x$" (Skalarprodukt).
- **Spaltenweise:** $A\vec x=x_1\cdot(\text{Spalte }1)+\dots+x_n\cdot(\text{Spalte }n)$ – eine Linearkombination der Spalten.
:::

:::bsp
$$\begin{pmatrix}1&2&0\\-1&3&4\end{pmatrix}\begin{pmatrix}2\\1\\-1\end{pmatrix}=\begin{pmatrix}1\cdot2+2\cdot1+0\cdot(-1)\\-1\cdot2+3\cdot1+4\cdot(-1)\end{pmatrix}=\begin{pmatrix}4\\-3\end{pmatrix}$$
Eine $2\times3$-Matrix bildet also $\R^3\to\R^2$ ab.
:::

Damit wird jedes LGS kompakt: $A\vec x=\vec b$.

## Lineare Abbildungen

:::def Lineare Abbildung
$f:V\to W$ heißt **linear**, wenn für alle $\vec x,\vec y\in V$, $\lambda\in\R$:
$$f(\vec x+\vec y)=f(\vec x)+f(\vec y),\qquad f(\lambda\vec x)=\lambda f(\vec x).$$
(Zusammengefasst: $f(\mu\vec x+\nu\vec y)=\mu f(\vec x)+\nu f(\vec y)$.)
:::

:::satz Matrizen sind linear
$\vec x\mapsto A\vec x$ ist linear: $A(\mu\vec x+\nu\vec y)=\mu A\vec x+\nu A\vec y$ (folgt aus den Summenregeln: $\sum_ja_{ij}(\mu x_j+\nu y_j)=\mu\sum_ja_{ij}x_j+\nu\sum_ja_{ij}y_j$).
Jede lineare Abbildung bildet den Nullvektor auf den Nullvektor ab: $A\vec0=A(\vec0+\vec0)=A\vec0+A\vec0\Rightarrow A\vec0=\vec0$.
:::

:::bsp Nicht linear
$f(x)=2x+1$ ist **nicht** linear ($f(0)=1\ne0$) – sie heißt „affin". $f(x)=x^2$ ist nicht linear ($f(2x)=4x^2\ne2f(x)$).
:::

### Darstellungsmatrix

:::satz Eine lineare Abbildung ist durch die Bilder der Basisvektoren festgelegt
Ist $\vec x=\sum x_j\vec v_j$, so folgt aus der Linearität $f(\vec x)=\sum x_jf(\vec v_j)$.
:::

:::rezept Matrix einer linearen Abbildung $f:\R^n\to\R^m$ (Standardbasis)
**Die Spalten der Matrix sind die Bilder der Einheitsvektoren:**
$$A=\big(f(\vec e_1)\ \big|\ f(\vec e_2)\ \big|\ \cdots\ \big|\ f(\vec e_n)\big).$$
Allgemein (Basen $B_V=\{\vec v_l\}$, $B_W=\{\vec w_k\}$): Die $l$-te Spalte der **Darstellungsmatrix** $M_A$ enthält die Koordinaten von $f(\vec v_l)$ bzgl. $B_W$, d. h. $f(\vec v_l)=\sum_{k}a_{kl}\vec w_k$.
:::

:::bsp Spiegelung an der x-Achse und Drehung um 90°
Spiegelung: $\vec e_1\mapsto\vec e_1$, $\vec e_2\mapsto-\vec e_2$ ⇒ $S=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.
Drehung um 90° gegen den Uhrzeigersinn: $\vec e_1\mapsto\vec e_2$, $\vec e_2\mapsto-\vec e_1$ ⇒ $D=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.
Allgemeine **Drehmatrix** um $\varphi$: $D_\varphi=\begin{pmatrix}\cos\varphi&-\sin\varphi\\\sin\varphi&\cos\varphi\end{pmatrix}$ (Anwendungs-Lektion).
:::

## Matrix-Matrix-Multiplikation

Hintereinanderausführen zweier linearer Abbildungen $\vec x\mapsto B\vec x\mapsto A(B\vec x)$ ist wieder linear. Ihre Matrix heißt **Produkt** $AB$.

:::def Matrixprodukt
Für $A\in\R^{m\times n}$ und $B\in\R^{n\times l}$ ist $AB\in\R^{m\times l}$ mit
$$(AB)_{ik}=\sum_{j=1}^na_{ij}b_{jk}\qquad\text{„Zeile }i\text{ von }A\text{ mal Spalte }k\text{ von }B\text{"}.$$
**Voraussetzung:** Spaltenzahl von $A$ = Zeilenzahl von $B$: $(m\times\underline n)\cdot(\underline n\times l)=m\times l$.
:::

:::bsp Walkthrough
$$A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\ B=\begin{pmatrix}0&1\\1&0\end{pmatrix}:\quad AB=\begin{pmatrix}1\cdot0+2\cdot1&1\cdot1+2\cdot0\\3\cdot0+4\cdot1&3\cdot1+4\cdot0\end{pmatrix}=\begin{pmatrix}2&1\\4&3\end{pmatrix},\quad BA=\begin{pmatrix}3&4\\1&2\end{pmatrix}.$$
$AB\ne BA$! ($B$ von rechts tauscht Spalten, von links Zeilen.)
:::

:::merke Falk-Schema
Schreibe $B$ rechts oben, $A$ links unten; das Element $(AB)_{ik}$ steht im Kreuzungspunkt von Zeile $i$ (von $A$) und Spalte $k$ (von $B$).
:::

:::satz Rechenregeln
- **Nicht kommutativ:** im Allgemeinen $AB\ne BA$ (oft ist eines gar nicht definiert).
- Assoziativ: $(AB)C=A(BC)$; distributiv: $A(B+C)=AB+AC$.
- $EA=AE=A$.
- $(AB)^T=B^TA^T$ (Reihenfolge dreht sich!).
- Aus $AB=0$ folgt **nicht** $A=0$ oder $B=0$: z. B. $\begin{pmatrix}1&0\\0&0\end{pmatrix}\begin{pmatrix}0&0\\0&1\end{pmatrix}=0$.
:::

:::info Einsteinsche Summenkonvention (Ergänzung)
Manche Bücher (v. a. Mechanik, Tensorrechnung) lassen das Summenzeichen weg: Über **doppelt vorkommende Indizes** wird summiert: $a_{ij}x_j:=\sum_ja_{ij}x_j$, $(AB)_{ik}=a_{ij}b_{jk}$. Strenge Fassung: ein Index oben, einer unten ($x^kv_k$).
:::

## Kern, Bild und Rang

:::def Kern und Bild
Für $A:\R^n\to\R^m$:
- **Kern** $\Kern A=\{\vec x\in\R^n\mid A\vec x=\vec0\}$ – alles, was auf $\vec0$ abgebildet wird (= Lösungsmenge des homogenen LGS).
- **Bild** $\Bild A=\{A\vec x\mid\vec x\in\R^n\}\subseteq\R^m$ – alle erreichbaren Vektoren (= Spann der Spalten).
:::

:::satz
$\Kern A$ ist UVR des $\R^n$, $\Bild A$ ist UVR des $\R^m$, und $\vec 0\in\Kern A$.
:::
*Beweis Kern:* $\vec x,\vec y\in\Kern A\Rightarrow A(\mu\vec x+\nu\vec y)=\mu\vec0+\nu\vec0=\vec0$. *Bild:* $\vec b=A\vec x$, $\vec c=A\vec y$ ⇒ $\mu\vec b+\nu\vec c=A(\mu\vec x+\nu\vec y)\in\Bild A$.

:::def Rang
$\Rang A=\dim\Bild A$ = Anzahl **linear unabhängiger Spalten** = Anzahl linear unabhängiger Zeilen (**Zeilenrang = Spaltenrang**) = Anzahl der Stufen nach dem Gauß-Algorithmus.
:::

:::satz Dimensionsformel (Rangsatz)
$$\dim\Kern A+\Rang A=n\qquad(n=\text{Anzahl Spalten}).$$
:::
Anschaulich: Von den $n$ Dimensionen des Urbildraums werden $\dim\Kern A$ „plattgedrückt" (auf 0 abgebildet), der Rest bleibt im Bild erhalten. Beim Gauß: Stufen ($=\Rang$) + freie Variablen ($=\dim\Kern$) = Anzahl Unbekannte.

:::bsp Walkthrough Rang, Kern, Bild
$$A=\begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}\to\begin{pmatrix}1&2&3\\0&0&0\\0&-2&-2\end{pmatrix}\to\begin{pmatrix}1&2&3\\0&-2&-2\\0&0&0\end{pmatrix}$$
Zwei Stufen ⇒ $\Rang A=2$, $\dim\Kern A=3-2=1$.
Kern: $x_3=t$, $-2x_2-2t=0\Rightarrow x_2=-t$, $x_1=-2x_2-3t=-t$ ⇒ $\Kern A=\operatorname{span}\{(-1,-1,1)^T\}$. Probe: $A(-1,-1,1)^T=(-1-2+3,\ -2-4+6,\ -1+0+1)=\vec0$ ✓.
Bild: Spann der Spalten 1 und 2 (die Pivotspalten): $\Bild A=\operatorname{span}\{(1,2,1)^T,(2,4,0)^T\}$.
:::

:::satz Injektiv/surjektiv bei linearen Abbildungen
- $A$ injektiv $\iff\Kern A=\{\vec0\}\iff\Rang A=n$.
- $A$ surjektiv $\iff\Bild A=\R^m\iff\Rang A=m$.
- Für quadratische $A$ ($n=m$): injektiv ⇔ surjektiv ⇔ bijektiv ⇔ $\Rang A=n$.
:::

## Aufgaben

:::aufgabe 1
Berechne, falls definiert: $AB$, $BA$, $A^TA$ mit $A=\begin{pmatrix}1&0&2\\-1&3&1\end{pmatrix}$, $B=\begin{pmatrix}2&1\\0&1\\1&0\end{pmatrix}$.
:::loesung
$AB$ ($2\times3\cdot3\times2$) $=\begin{pmatrix}2+0+2&1+0+0\\-2+0+1&-1+3+0\end{pmatrix}=\begin{pmatrix}4&1\\-1&2\end{pmatrix}$.
$BA$ ($3\times2\cdot2\times3$) $=\begin{pmatrix}2-1&0+3&4+1\\0-1&3&1\\1&0&2\end{pmatrix}=\begin{pmatrix}1&3&5\\-1&3&1\\1&0&2\end{pmatrix}$.
$A^TA$ ($3\times3$) $=\begin{pmatrix}2&-3&1\\-3&9&3\\1&3&5\end{pmatrix}$ (symmetrisch!).
:::
:::

:::aufgabe 2
Bestimme die Matrix der linearen Abbildung $f:\R^3\to\R^2$, $f(x,y,z)=(x+2z,\ 3y-z)$.
:::loesung
$f(\vec e_1)=(1,0)$, $f(\vec e_2)=(0,3)$, $f(\vec e_3)=(2,-1)$ ⇒ $A=\begin{pmatrix}1&0&2\\0&3&-1\end{pmatrix}$.
:::
:::

:::aufgabe 3
Bestimme Rang, Kern und $\dim\Bild$ von $A=\begin{pmatrix}1&1&0&2\\0&1&1&1\\1&2&1&3\end{pmatrix}$.
:::loesung
$Z_3-Z_1=(0,1,1,1)$, dann $Z_3-Z_2=0$. Rang 2, $\dim\Kern=4-2=2$, $\dim\Bild=2$.
Kern: $x_3=s$, $x_4=t$: $x_2=-s-t$, $x_1=-x_2-2t=s-t$. $\Kern A=\operatorname{span}\{(1,-1,1,0)^T,(-1,-1,0,1)^T\}$.
:::
:::

:::aufgabe 4
Ist $f:\R^2\to\R^2$, $f(x,y)=(x+y,\ xy)$ linear?
:::loesung
Nein: $f(2,2)=(4,4)$, aber $2f(1,1)=2(2,1)=(4,2)$.
:::
:::

## Karteikarten

:::karte
Wann ist das Produkt $AB$ definiert und welche Größe hat es?
???
Wenn Spaltenzahl von $A$ = Zeilenzahl von $B$: $(m\times n)(n\times l)=m\times l$.
:::

:::karte
Wie liest man die Matrix einer linearen Abbildung ab?
???
Spalten = Bilder der Basisvektoren $f(\vec e_1),\dots,f(\vec e_n)$.
:::

:::karte
Dimensionsformel?
???
$\dim\Kern A+\Rang A=n$ (Spaltenzahl).
:::

:::karte
$(AB)^T=\,?$
???
$B^TA^T$
:::

:::karte
Was ist der Kern einer Matrix?
???
$\{\vec x: A\vec x=\vec0\}$ – Lösungsmenge des homogenen LGS; UVR des $\R^n$.
:::

:::karte
Ist das Matrixprodukt kommutativ?
???
Nein, im Allgemeinen $AB\ne BA$.
:::

:::karte
Wann ist eine lineare Abbildung injektiv?
???
Genau dann, wenn $\Kern A=\{\vec0\}$ (Rang = Spaltenzahl).
:::
