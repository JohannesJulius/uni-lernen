---
title: Zahlenmengen ℕ, ℤ, ℚ – Rechengesetze, Σ und Π, binomische Formeln
chapter: 1 Grundlagen
minutes: 75
sources: Mathe 1/IngMath1_slides_1_basics_3_zahlenmengen_1_N_Z_Q.pdf; Mathe 1/IngMath1_worksheet_1_basics_3_zahlenmengen_1_binomformeln.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#23; Mathe 1 + 2 neu/skript_m1_m2.pdf#29
---

:::ziel
- Die Zahlbereiche $\N\subset\N_0\subset\Z\subset\Q$ und warum man sie jeweils erweitert.
- Peano-Axiome und Gruppen-/Körpereigenschaften (neutrales und inverses Element).
- Summenzeichen $\sum$, Produktzeichen $\prod$ und Fakultät sicher benutzen (inkl. Indexverschiebung).
- Binomische Formeln, $p$-$q$-Formel und Mitternachtsformel.
:::

## Die natürlichen Zahlen ℕ

Zahlen entstehen durch **Abstraktion** vom Zählen (3 Äpfel, 3 Birnen → „3"). Dedekind: Zahlen sind „freie Schöpfungen des menschlichen Geistes".

:::merke Konvention (siehe DIN 5473)
$$\N=\{1,2,3,\dots\},\qquad \N_0=\{0,1,2,3,\dots\}=\N\cup\{0\}.$$
:::

:::def Peano-Axiome
1. $1$ ist eine natürliche Zahl.
2. Jede natürliche Zahl $n$ hat genau einen **Nachfolger** $n'$ ($2=1'$, $3=2'$, …).
3. $1$ ist kein Nachfolger einer natürlichen Zahl.
4. Verschiedene Zahlen haben verschiedene Nachfolger (daher hat jede Zahl außer 1 genau einen Vorgänger).
5. **Induktionsprinzip:** Ist $A\subset\N$ mit (i) $1\in A$ und (ii) $n\in A\Rightarrow n'\in A$, dann ist $A=\N$.
:::

Axiom 5 ist die Grundlage der **vollständigen Induktion** (eigene Lektion).

**Rechnen in ℕ:** Der Nachfolger von $n$ ist $n+1$. $m+n$ ist der $n$-te Nachfolger von $m$. ℕ ist **abgeschlossen** bzgl. Addition und Multiplikation: $\forall m,n\in\N: m+n\in\N,\ m\cdot n\in\N$. Multiplikation = wiederholte Addition ($3\cdot 4=4+4+4$), und sie ist kommutativ ($3\cdot4=4\cdot3$, Rechteck aus Punkten).

Aber: $3+x=1$ hat in ℕ keine Lösung → Erweiterung nötig.

## Die ganzen Zahlen ℤ

Zu jedem $n$ führt man einen Vorgänger $n+(-1)$ ein; die 1 bekommt den Vorgänger 0, dann folgen die negativen Zahlen:
$$\Z=\{\dots,-3,-2,-1,0,1,2,3,\dots\}.$$

:::def Kommutative Gruppe $(\Z,+)$
- **Abgeschlossen**: $a+b\in\Z$
- **Assoziativ**: $(a+b)+c=a+(b+c)$
- **Neutrales Element** 0: $a+0=a$
- **Inverses Element** $-a$: $a+(-a)=0$
- **Kommutativ**: $a+b=b+a$
:::

Multiplikation: $n\cdot(-1)=-n$, $0\cdot n=0$, und 1 ist neutral: $n\cdot 1=n$. Aber es gibt **kein multiplikatives Inverses** für die meisten Zahlen: $2\cdot x=1$ hat in ℤ keine Lösung (nur $1$ und $-1$ sind invertierbar, und $0$ sowieso nicht, da $0\cdot n=0\ne1$).

:::achtung Ungleichungen
Multipliziert man eine Ungleichung mit einer **negativen** Zahl, dreht sich das Zeichen um: $a<b\Rightarrow -a>-b$. Außerdem: $ab>0\Rightarrow$ ($a,b>0$ oder $a,b<0$).
:::

## Die rationalen Zahlen ℚ

Kuchen teilen, kleine Maßeinheiten → Brüche:
$$\Q=\left\{\frac{p}{q}\ \middle|\ p\in\Z,\ q\in\Z\setminus\{0\}\right\}.$$

Brüche sind gleich, wenn sie sich durch Kürzen/Erweitern ineinander überführen lassen:
$$\frac{p_1}{q_1}=\frac{p_2}{q_2}\iff p_1q_2=p_2q_1,\qquad\text{z. B. }\frac13=\frac26,\ \frac{3}{42}=\frac1{14}.$$
(Genau genommen ist eine rationale Zahl eine *Äquivalenzklasse* von Brüchen – Ausblick.)

:::def Körper
$(\Q,+)$ ist eine kommutative Gruppe, $(\Q\setminus\{0\},\cdot)$ ist eine kommutative Gruppe (neutrales Element 1, Inverses $x^{-1}=\frac1x$), und es gilt das **Distributivgesetz** $a(b+c)=ab+ac$. Eine solche Struktur heißt **Körper**. ℚ, ℝ und ℂ sind Körper, ℤ nicht.
:::

:::info Körperaxiome im Detail (Skript, Aufgabe 2.8)
(A1) $x+(y+z)=(x+y)+z$, (A2) $x+y=y+x$, (A3) $\exists 0: x+0=x$, (A4) $\exists -x: x+(-x)=0$,
(M1) $x(yz)=(xy)z$, (M2) $xy=yx$, (M3) $\exists 1: x\cdot1=x$, (M4) $\forall x\ne0\ \exists x^{-1}: xx^{-1}=1$,
(D1) $(x+y)z=xz+yz$.
Aus *nur* diesen Axiomen lässt sich z. B. $(a+b)^2=a^2+2ab+b^2$ herleiten.
:::

## Rechenzeichen: Summe und Produkt

$$a_1+a_2+\dots+a_k=\sum_{i=1}^{k}a_i,\qquad a_1\cdot a_2\cdots a_k=\prod_{i=1}^{k}a_i$$

Lies: „Summe über $a_i$ für $i$ von 1 bis $k$". $i$ heißt **Laufindex** (Name egal: $\sum_{i=1}^k a_i=\sum_{j=1}^k a_j$).

:::def Fakultät
$$n!=\prod_{i=1}^n i=1\cdot2\cdots n,\qquad 0!:=1.$$
$1!=1,\ 2!=2,\ 3!=6,\ 4!=24,\ 5!=120$.
:::

:::bsp
- $\sum_{i=1}^{100}2^i=2^1+2^2+\dots+2^{100}$
- $\prod_{i=1}^{100}\frac1{i^2}=\frac1{1^2}\cdot\frac1{2^2}\cdots\frac{1}{100^2}$
- $\sum_{i=1}^{10}\Big(\prod_{j=1}^{5}i\cdot j\Big)=\sum_{i=1}^{10}i^5\cdot 5!$, denn $\prod_{j=1}^5 ij=i^5\prod_{j=1}^5 j=i^5\cdot5!$
- Abspalten: $\sum_{i=0}^n a_i=a_0+\Big(\sum_{i=1}^{n-1}a_i\Big)+a_n$
- **Raketenmasse** (Skript Bsp. 1.9): $n$ Stufen mit Strukturmasse $m_{S,i}$ und Treibstoff $m_{T,i}$, Nutzlast $m_{NL}$: $m_{ges}=m_{NL}+\sum_{i=1}^n(m_{S,i}+m_{T,i})$. Im Programm ist das eine Schleife: `m = m_NL; for i in 1..n: m += mS[i] + mT[i]`.
:::

:::merke Rechenregeln für Summen
- $\sum_{i=1}^n(a_i+b_i)=\sum a_i+\sum b_i$, $\quad\sum_{i=1}^n c\,a_i=c\sum a_i$
- $\sum_{i=1}^n c=n\cdot c$
- **Indexverschiebung:** $\sum_{i=1}^{n}a_i=\sum_{j=0}^{n-1}a_{j+1}$ (setze $j=i-1$: Grenzen **und** Summand anpassen!)
- Doppelsummen dürfen bei endlichen Grenzen vertauscht werden: $\sum_{j=1}^n\sum_{i=1}^m a_{ij}=\sum_{i=1}^m\sum_{j=1}^n a_{ij}$ (wichtig für Matrizen).
:::

## Binomische Formeln und quadratische Gleichungen

:::formel Binomische Formeln
$$(a+b)^2=a^2+2ab+b^2,\qquad (a-b)^2=a^2-2ab+b^2,\qquad (a+b)(a-b)=a^2-b^2$$
:::

*Beweis* (1. Formel) durch Ausmultiplizieren mit dem Distributivgesetz: $(a+b)(a+b)=a\cdot a+a\cdot b+b\cdot a+b\cdot b=a^2+2ab+b^2$. Die anderen analog.

:::formel p-q-Formel und Mitternachtsformel
$$x^2+px+q=0\ \Rightarrow\ x_{1,2}=-\frac p2\pm\sqrt{\Big(\frac p2\Big)^2-q}$$
$$ax^2+bx+c=0\ (a\ne0)\ \Rightarrow\ x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$
Die **Diskriminante** $D=b^2-4ac$ entscheidet: $D>0$ zwei reelle Lösungen, $D=0$ eine (doppelte), $D<0$ keine reelle (aber zwei komplexe) Lösungen.
:::

*Herleitung* durch **quadratische Ergänzung**: $x^2+px+q=0\Leftrightarrow x^2+px+(\tfrac p2)^2=(\tfrac p2)^2-q\Leftrightarrow (x+\tfrac p2)^2=(\tfrac p2)^2-q$, dann Wurzel ziehen.

## Aufgaben

:::aufgabe 1 – Summen ausschreiben
Schreibe aus und berechne: (a) $\sum_{k=1}^{4}k^2$, (b) $\prod_{k=1}^{4}\frac{k}{k+1}$, (c) $\sum_{n=1}^{3}\prod_{k=1}^{n}k$.
:::loesung
(a) $1+4+9+16=30$. (b) $\frac12\cdot\frac23\cdot\frac34\cdot\frac45=\frac15$ (Teleskopprodukt). (c) $1!+2!+3!=1+2+6=9$.
:::
:::

:::aufgabe 2 – In Summenform bringen
Schreibe als Summe: (a) $3+5+7+\dots+21$, (b) $\frac23+\frac49+\frac{8}{27}+\dots+\frac{512}{19683}$.
:::loesung
(a) $\sum_{k=1}^{10}(2k+1)$. (b) $\sum_{n=1}^{9}\left(\frac23\right)^n$ (denn $2^9=512$, $3^9=19683$).
:::
:::

:::aufgabe 3 – Indexverschiebung
Schreibe $\sum_{k=3}^{10}\frac{1}{k-2}$ so, dass die Summe bei $j=1$ beginnt.
:::loesung
$j=k-2$: $k=3\Rightarrow j=1$, $k=10\Rightarrow j=8$: $\sum_{j=1}^{8}\frac1j$.
:::
:::

:::aufgabe 4 – Quadratische Gleichungen
Löse (a) $x^2-5x+6=0$, (b) $2x^2+4x-6=0$, (c) $x^2+2x+5=0$ (reell).
:::loesung
(a) $p=-5, q=6$: $x=\frac52\pm\sqrt{\frac{25}4-6}=\frac52\pm\frac12\Rightarrow x_1=3,\ x_2=2$.
(b) $:2\Rightarrow x^2+2x-3=0\Rightarrow x=-1\pm\sqrt{1+3}=-1\pm2\Rightarrow x_1=1,x_2=-3$.
(c) $D=4-20<0$ ⇒ keine reelle Lösung (komplex: $x=-1\pm2\mathrm i$).
:::
:::

:::aufgabe 5 – Logik und Binärvariablen (Skript 1.4)
„Wenn Projekt A durchgeführt wird, muss auch B durchgeführt werden." Schreibe das als Implikation und als Ungleichung für $x_A,x_B\in\{0,1\}$.
:::loesung
$x_A=1\Rightarrow x_B=1$. Ungleichung: $x_A\le x_B$ (verbietet genau den Fall $x_A=1, x_B=0$).
:::
:::

## Karteikarten

:::karte
Was ist der Unterschied zwischen $\N$ und $\N_0$?
???
$\N=\{1,2,3,\dots\}$, $\N_0=\{0,1,2,\dots\}$.
:::

:::karte
Was ist ein Körper? Beispiele?
???
Menge mit $+$ und $\cdot$, sodass $(K,+)$ und $(K\setminus\{0\},\cdot)$ kommutative Gruppen sind und das Distributivgesetz gilt. Beispiele: $\Q,\R,\C$ (nicht $\Z$).
:::

:::karte
$0!=\,?$ und $5!=\,?$
???
$0!=1$, $5!=120$.
:::

:::karte
Mitternachtsformel?
???
$x_{1,2}=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$
:::

:::karte
p-q-Formel?
???
$x_{1,2}=-\frac p2\pm\sqrt{(\frac p2)^2-q}$ für $x^2+px+q=0$.
:::

:::karte
Indexverschiebung: $\sum_{i=1}^n a_i$ mit Start bei 0?
???
$\sum_{j=0}^{n-1}a_{j+1}$ – Grenzen um 1 runter, im Summanden $i$ durch $j+1$ ersetzen.
:::
