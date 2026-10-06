---
title: Optimierung (Extremwertaufgaben) – Weide, Dose, kürzester Weg
chapter: 3 Analysis
minutes: 75
sources: Mathe 1/IngMath1_slides_3_ana_08_UE_optimierung (1).pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#67
---

:::ziel
- Textaufgaben in ein mathematisches Optimierungsproblem übersetzen: **Zielfunktion** (Gütefunktion), **Nebenbedingung**, **zulässiger Bereich**.
- Mit Differentialrechnung lösen und das Ergebnis begründen (global!).
- Klassiker: Rechteck mit festem Umfang, Dose mit festem Volumen, Reflexionsgesetz.
:::

:::rezept Extremwertaufgaben
1. **Skizze**, Variablen benennen.
2. **Zielfunktion** aufstellen (was soll max/min werden?).
3. **Nebenbedingung(en)** aufstellen und nach einer Variablen auflösen → Zielfunktion hängt nur noch von **einer** Variablen ab.
4. **Zulässigen Bereich** bestimmen (Längen > 0 usw.).
5. Ableiten, **kritische Stellen** $Z'(x)=0$ bestimmen.
6. Art prüfen ($Z''$, VZW) – und **Ränder** vergleichen, um das **globale** Optimum zu sichern (z. B. „einzige kritische Stelle + konvex/konkav ⇒ global").
7. Antwortsatz mit Einheiten und Plausibilitätscheck.
:::

## Beispiel 1: Weide mit Zaun der Länge $l$ (vier Seiten)

- Seiten $x$ und $y$; Nebenbedingung $2x+2y=l\Rightarrow y=\frac{l-2x}2$.
- Ziel: $A(x)=x\cdot\frac{l-2x}2=-x^2+\frac l2x$, $x\in(0,\frac l2)$.
- $A'(x)=-2x+\frac l2=0\Rightarrow x_e=\frac l4$; $A''=-2<0$ ⇒ Maximum. $A$ ist konkav (−A konvex) ⇒ **globales** Maximum.
- Ergebnis: $x=y=\frac l4$ – ein **Quadrat**, $A_{max}=\frac{l^2}{16}$.

## Beispiel 2: Weide am Fluss (drei Seiten)

- Eine Seite bildet das gerade Flussufer. Zaun: $2x+y=l\Rightarrow y=l-2x$.
- $A(x)=x(l-2x)=-2x^2+lx$; $A'=-4x+l=0\Rightarrow x=\frac l4$, $A''=-4<0$.
- Ergebnis: $x=\frac l4$, $y=\frac l2$ (Seite parallel zum Fluss doppelt so lang), $A_{max}=\frac{l^2}8$ – doppelt so viel wie ohne Fluss.

## Beispiel 3: Dose mit minimalem Materialverbrauch

Zylinder mit Volumen $V_0$, Radius $r$, Höhe $h$.
- Nebenbedingung: $V_0=\pi r^2h\Rightarrow h=\frac{V_0}{\pi r^2}$.
- Ziel: Oberfläche $A=2\pi rh+2\pi r^2=\frac{2V_0}r+2\pi r^2$, $r\in(0,\infty)$.
- $A'(r)=-\frac{2V_0}{r^2}+4\pi r=0\Rightarrow r^3=\frac{V_0}{2\pi}\Rightarrow r_e=\sqrt[3]{\frac{V_0}{2\pi}}$.
- $A''(r)=\frac{4V_0}{r^3}+4\pi>0$ ⇒ $A$ konvex auf $(0,\infty)$ ⇒ globales Minimum.
- Dann $h=\frac{V_0}{\pi r_e^2}=\frac{2\pi r_e^3}{\pi r_e^2}=2r_e$: **Höhe = Durchmesser**. (Für $V_0=1\,$l: $r\approx5{,}42\,$cm, $h\approx10{,}8\,$cm.)

## Beispiel 4: Kürzester Weg über eine Linie – Reflexionsgesetz

Von $A=(0,d)$ nach $B=(1,d)$, dabei einen Punkt $C=(x,0)$ der $x$-Achse berühren (z. B. Lichtstrahl über einen Spiegel).
- Länge $L(x)=\sqrt{d^2+x^2}+\sqrt{d^2+(1-x)^2}$, $x\in[0,1]$.
- $L'(x)=\frac{x}{\sqrt{d^2+x^2}}+\frac{x-1}{\sqrt{d^2+(1-x)^2}}$. $L'(0)<0$, $L'(1)>0$ ⇒ Nullstelle (Zwischenwertsatz); aus Symmetrie $x_0=\frac12$.
- $L''(x)=\frac{d^2}{(d^2+x^2)^{3/2}}+\frac{d^2}{(d^2+(1-x)^2)^{3/2}}>0$ ⇒ $L'$ streng wachsend ⇒ einzige Nullstelle ⇒ **globales Minimum** bei $x=\frac12$.
- Physikalisch: $L'=0$ heißt $\frac{x}{|AC|}=\frac{1-x}{|CB|}$, also $\sin\varphi_1=\sin\varphi_2$: **Einfallswinkel = Ausfallswinkel** (Fermatsches Prinzip). Für $A,B$ auf verschiedenen Höhen funktioniert das genauso – der Ansatz ist allgemein.

## Aufgaben

:::aufgabe 1
Aus einem quadratischen Blech (Seite 30 cm) wird eine oben offene Schachtel gebogen, indem an den Ecken Quadrate der Seite $x$ ausgeschnitten werden. Für welches $x$ ist das Volumen maximal?
:::loesung
$V(x)=x(30-2x)^2$, $x\in(0,15)$. $V'=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0\Rightarrow x=5$ (oder 15, Rand). $V''(5)<0$ ⇒ Max, $V=5\cdot400=2000\,$cm³.
:::
:::

:::aufgabe 2
Welcher Punkt der Parabel $y=x^2$ liegt am nächsten an $P=(0,2)$?
:::loesung
Minimiere das Abstandsquadrat $D(x)=x^2+(x^2-2)^2=x^4-3x^2+4$. $D'=4x^3-6x=0\Rightarrow x=0$ oder $x=\pm\sqrt{1{,}5}$. $D(0)=4$, $D(\pm\sqrt{1{,}5})=2{,}25-4{,}5+4=1{,}75$ ⇒ nächste Punkte $(\pm\sqrt{1{,}5};\ 1{,}5)$, Abstand $\sqrt{1{,}75}\approx1{,}32$.
:::
:::

:::aufgabe 3
Ein Balken mit rechteckigem Querschnitt soll aus einem runden Stamm (Durchmesser $D$) gesägt werden. Die Tragfähigkeit ist proportional zu $b h^2$ (Widerstandsmoment, TM 2!). Bestimme $b$ und $h$.
:::loesung
Nebenbedingung $b^2+h^2=D^2$ ⇒ $h^2=D^2-b^2$. $W(b)=b(D^2-b^2)$, $W'=D^2-3b^2=0\Rightarrow b=\frac D{\sqrt3}$, $h=D\sqrt{\frac23}$, also $h:b=\sqrt2:1$.
:::
:::

## Karteikarten

:::karte
Optimale Dose (min. Oberfläche bei festem Volumen)?
???
$h=2r$ (Höhe = Durchmesser), $r=\sqrt[3]{V_0/(2\pi)}$.
:::

:::karte
Größtes Rechteck bei festem Umfang?
???
Quadrat mit Seite $l/4$.
:::

:::karte
Wie sichert man ein globales Optimum ab?
???
Ränder vergleichen bzw. zeigen: einzige kritische Stelle und Zielfunktion konvex (Min) / konkav (Max).
:::
