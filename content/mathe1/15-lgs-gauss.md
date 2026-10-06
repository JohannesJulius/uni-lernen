---
title: Lineare Gleichungssysteme & Gauß-Algorithmus
chapter: 2 Lineare Algebra
minutes: 110
sources: Mathe 1/IngMath1_slides_2_linalg_02_LGS.pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#143
---

:::ziel
- Ein LGS als (erweiterte) Koeffizientenmatrix schreiben.
- Den **Gauß-Algorithmus** sicher durchführen (Zeilenstufenform, Rückwärtseinsetzen).
- Erkennen, ob ein LGS **keine, genau eine oder unendlich viele** Lösungen hat, und die Lösungsmenge mit Parametern angeben.
- Homogene vs. inhomogene LGS: $\vec x=\vec x_{par}+\vec x_{hom}$.
- LGS für lineare Unabhängigkeit und Linearkombinationen nutzen.
:::

## Was ist ein LGS?

:::def Lineares Gleichungssystem
$m$ Gleichungen mit $n$ Unbekannten $x_1,\dots,x_n$:
$$\begin{aligned}a_{11}x_1+a_{12}x_2+\dots+a_{1n}x_n&=b_1\\ \vdots\qquad&\\ a_{m1}x_1+a_{m2}x_2+\dots+a_{mn}x_n&=b_m\end{aligned}\qquad\text{kurz: }\sum_{k=1}^na_{ik}x_k=b_i,\ i=1,\dots,m$$
Ist $b_1=\dots=b_m=0$, heißt das LGS **homogen**, sonst **inhomogen**.
:::

Man notiert nur die Zahlen: **Koeffizientenmatrix** $A=(a_{ik})$ bzw. **erweiterte Koeffizientenmatrix** $(A\mid\vec b)$:
$$\left(\begin{array}{cccc|c}a_{11}&a_{12}&\cdots&a_{1n}&b_1\\ \vdots&&&\vdots&\vdots\\ a_{m1}&a_{m2}&\cdots&a_{mn}&b_m\end{array}\right)$$
In Matrixschreibweise (nächste Lektion): $A\vec x=\vec b$.

## Elementare Zeilenumformungen

:::satz Diese Umformungen ändern die Lösungsmenge nicht
1. Zwei Zeilen **vertauschen**.
2. Eine Zeile mit einer Zahl $\ne0$ **multiplizieren**.
3. Ein **Vielfaches einer Zeile zu einer anderen addieren**.
:::

## Der Gauß-Algorithmus

:::rezept Gauß-Elimination
**Ziel: Zeilenstufenform** (obere Dreiecksgestalt) – unterhalb der „Treppe" nur Nullen.
1. Wähle in der ersten Spalte ein Element $\ne0$ als **Pivot** (ggf. Zeilen tauschen; am bequemsten eine 1).
2. Erzeuge darunter Nullen: Zeile $k$ ← Zeile $k$ − $\frac{a_{k1}}{a_{11}}\cdot$ Zeile 1.
3. Wiederhole mit der Restmatrix (ohne erste Zeile und Spalte).
4. **Auswerten** (von unten): Widerspruchszeilen? Freie Variablen?
5. **Rückwärtseinsetzen**: letzte Gleichung lösen, nach oben einsetzen.
:::

:::bsp Eindeutige Lösung
$$\begin{aligned}x+y+z&=6\\2x-y+z&=3\\x+2y-z&=2\end{aligned}\qquad\left(\begin{array}{ccc|c}1&1&1&6\\2&-1&1&3\\1&2&-1&2\end{array}\right)$$
$Z_2-2Z_1$, $Z_3-Z_1$:
$$\left(\begin{array}{ccc|c}1&1&1&6\\0&-3&-1&-9\\0&1&-2&-4\end{array}\right)\xrightarrow{3Z_3+Z_2}\left(\begin{array}{ccc|c}1&1&1&6\\0&-3&-1&-9\\0&0&-7&-21\end{array}\right)$$
Rückwärts: $z=3$; $-3y-3=-9\Rightarrow y=2$; $x+2+3=6\Rightarrow x=1$. $L=\{(1,2,3)\}$. **Probe** in die Originalgleichungen: $2-2+3=3$ ✓, $1+4-3=2$ ✓.
:::

## Die drei möglichen Fälle

Nach Gauß schaut man auf die Zeilen:

| Situation in Zeilenstufenform | Lösungsmenge |
|---|---|
| Eine Zeile $(0\ 0\ \cdots\ 0\mid c)$ mit $c\ne0$ („$0=c$") | **keine** Lösung, $L=\emptyset$ |
| Keine Widerspruchszeile, jede Spalte hat eine Stufe (Anzahl Stufen = $n$) | **genau eine** Lösung |
| Keine Widerspruchszeile, weniger Stufen als Unbekannte | **unendlich viele** Lösungen; Variablen ohne Stufe sind **frei** (Parameter) |

:::satz
Ein LGS hat entweder keine, genau eine oder unendlich viele Lösungen. (Zwei Lösungen, aber nicht mehr, gibt es nie.)
:::

:::bsp Unendlich viele Lösungen
$$\left(\begin{array}{ccc|c}1&2&-1&1\\2&4&1&5\\3&6&0&6\end{array}\right)\xrightarrow{Z_2-2Z_1,\ Z_3-3Z_1}\left(\begin{array}{ccc|c}1&2&-1&1\\0&0&3&3\\0&0&3&3\end{array}\right)\xrightarrow{Z_3-Z_2}\left(\begin{array}{ccc|c}1&2&-1&1\\0&0&3&3\\0&0&0&0\end{array}\right)$$
Stufen in Spalte 1 und 3, Spalte 2 ($y$) ist **frei**: $y=t\in\R$. Dann $z=1$, $x=1-2t+1=2-2t$.
$$L=\left\{\begin{pmatrix}2\\0\\1\end{pmatrix}+t\begin{pmatrix}-2\\1\\0\end{pmatrix}\ \middle|\ t\in\R\right\}\quad\text{(eine Gerade im }\R^3).$$
:::

:::bsp Keine Lösung
$$\left(\begin{array}{cc|c}1&3&1\\2&2&0\\3&1&1\end{array}\right)\to\left(\begin{array}{cc|c}1&3&1\\0&-4&-2\\0&-8&-2\end{array}\right)\to\left(\begin{array}{cc|c}1&3&1\\0&-4&-2\\0&0&2\end{array}\right)$$
Letzte Zeile: $0=2$ – Widerspruch, $L=\emptyset$. (Das heißt: $(1,0,1)^T$ ist **keine** Linearkombination von $(1,2,3)^T$ und $(3,2,1)^T$.)
:::

## Homogene LGS und lineare Unabhängigkeit

Ein homogenes LGS $A\vec x=\vec0$ hat **immer** die triviale Lösung $\vec x=\vec0$.

:::satz Lösungsmenge homogener LGS
Die Lösungsmenge eines homogenen LGS ist ein **Untervektorraum**: Mit $\vec x_1,\vec x_2$ ist auch $\vec x_1+\vec x_2$ eine Lösung, mit $\vec x$ auch $\lambda\vec x$.
:::

:::bsp Beispiel 5 der Folien: drei Vektoren
Sind $\vec u=(1,2,3)^T$, $\vec v=(3,2,1)^T$, $\vec w=(1,1,1)^T$ linear unabhängig? Ansatz $\lambda\vec u+\mu\vec v+\nu\vec w=\vec 0$:
$$\left(\begin{array}{ccc|c}1&3&1&0\\2&2&1&0\\3&1&1&0\end{array}\right)\xrightarrow{Z_2-2Z_1,\ Z_3-3Z_1}\left(\begin{array}{ccc|c}1&3&1&0\\0&-4&-1&0\\0&-8&-2&0\end{array}\right)\xrightarrow{Z_3-2Z_2}\left(\begin{array}{ccc|c}1&3&1&0\\0&-4&-1&0\\0&0&0&0\end{array}\right)$$
$\nu$ frei: $\mu=-\frac\nu4$, $\lambda=-3\mu-\nu=-\frac\nu4$. $L=\{\nu(-\frac14,-\frac14,1)^T\}$ – nichttriviale Lösungen ⇒ **linear abhängig** ($\nu=4$: $-\vec u-\vec v+4\vec w=\vec0$).
:::

## Inhomogene LGS: partikulär + homogen

:::satz Struktur der Lösungsmenge
Ist $\vec x_{par}$ **eine** (partikuläre) Lösung von $A\vec x=\vec b$, so ist die **gesamte** Lösungsmenge
$$L=\{\vec x_{par}+\vec x_{hom}\mid A\vec x_{hom}=\vec 0\}.$$
Die Differenz zweier Lösungen des inhomogenen Systems löst das homogene System.
:::
*Begründung:* $A(\vec x_{par}+\vec x_{hom})=\vec b+\vec 0=\vec b$; und $A(\vec x_2-\vec x_1)=\vec b-\vec b=\vec0$.

Im Beispiel oben: $\vec x_{par}=(2,0,1)^T$, $\vec x_{hom}=t(-2,1,0)^T$. Dieses Prinzip begegnet dir wieder bei **Differentialgleichungen** (Mathe 2): allgemeine Lösung = partikuläre + homogene Lösung.

:::achtung Typische Fehler beim Gauß
- Zeile mit 0 multipliziert (verboten!).
- Beim Umformen eine Zeile „verloren" oder die rechte Seite vergessen.
- Freie Variable übersehen: Bei unendlich vielen Lösungen **Parameter** einführen.
- Keine Probe gemacht – bei Klausuren immer kurz einsetzen!
:::

## Aufgaben

:::aufgabe 1
Löse $\begin{cases}2x+y-z=1\\x-y+2z=5\\3x+2y+z=10\end{cases}$
:::loesung
Mit $Z_1\leftrightarrow Z_2$: $\left(\begin{array}{ccc|c}1&-1&2&5\\2&1&-1&1\\3&2&1&10\end{array}\right)\to\left(\begin{array}{ccc|c}1&-1&2&5\\0&3&-5&-9\\0&5&-5&-5\end{array}\right)\xrightarrow{3Z_3-5Z_2}\left(\begin{array}{ccc|c}1&-1&2&5\\0&3&-5&-9\\0&0&10&30\end{array}\right)$
$z=3$, $3y=-9+15=6\Rightarrow y=2$, $x=5+2-6=1$. $L=\{(1,2,3)\}$.
:::
:::

:::aufgabe 2
Für welche $a\in\R$ hat $\begin{cases}x+y=1\\2x+ay=3\end{cases}$ keine, eine, unendlich viele Lösungen?
:::loesung
$Z_2-2Z_1$: $(a-2)y=1$. Für $a\ne2$: genau eine Lösung $y=\frac1{a-2}$, $x=1-y$. Für $a=2$: $0=1$, keine Lösung. Unendlich viele: nie.
:::
:::

:::aufgabe 3
Löse das homogene System $x_1+2x_2+x_3+x_4=0$, $2x_1+4x_2+3x_3+x_4=0$.
:::loesung
$Z_2-2Z_1$: $x_3-x_4=0$. Freie Variablen $x_2=s$, $x_4=t$: $x_3=t$, $x_1=-2s-t-t=-2s-2t$.
$L=\{s(-2,1,0,0)^T+t(-2,0,1,1)^T\}$ – ein 2-dimensionaler UVR des $\R^4$.
:::
:::

:::aufgabe 4
Sind $(1,2,3)^T,(3,2,1)^T,(1,0,1)^T$ linear unabhängig?
:::loesung
$\left(\begin{array}{ccc}1&3&1\\2&2&0\\3&1&1\end{array}\right)\to\left(\begin{array}{ccc}1&3&1\\0&-4&-2\\0&-8&-2\end{array}\right)\to\left(\begin{array}{ccc}1&3&1\\0&-4&-2\\0&0&2\end{array}\right)$: drei Stufen ⇒ nur triviale Lösung ⇒ **linear unabhängig**.
:::
:::

## Karteikarten

:::karte
Welche elementaren Zeilenumformungen sind erlaubt?
???
Zeilen tauschen; Zeile mit Zahl ≠ 0 multiplizieren; Vielfaches einer Zeile zu einer anderen addieren.
:::

:::karte
Woran erkennt man in Zeilenstufenform, dass ein LGS keine Lösung hat?
???
An einer Zeile $(0\ \cdots\ 0\mid c)$ mit $c\ne0$.
:::

:::karte
Wann hat ein (lösbares) LGS unendlich viele Lösungen?
???
Wenn es weniger Stufen (Pivots) als Unbekannte gibt – die Variablen ohne Pivot sind frei wählbar.
:::

:::karte
Struktur der Lösungsmenge eines inhomogenen LGS?
???
$L=\vec x_{par}+L_{hom}$: eine partikuläre Lösung plus alle Lösungen des homogenen Systems.
:::

:::karte
Ist die Lösungsmenge eines homogenen LGS ein Vektorraum?
???
Ja (Untervektorraum, enthält immer $\vec0$).
:::
