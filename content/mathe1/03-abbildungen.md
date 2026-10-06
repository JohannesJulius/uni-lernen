---
title: Abbildungen – injektiv, surjektiv, bijektiv
chapter: 1 Grundlagen
minutes: 60
sources: Mathe 1/IngMath1_slides_1_basics_2_mengen_2_abbildungen (2).pdf; Mathe 1 + 2 neu/skript_m1_m2.pdf#45
---

:::ziel
- Den Begriff **Abbildung/Funktion** $f:D\to Z$ exakt verstehen (Definitionsbereich, Wertebereich/Zielmenge, Bild).
- Injektivität, Surjektivität, Bijektivität definieren, prüfen und **verneinen**.
- Umkehrabbildung und Verkettung kennen.
:::

## Ein erstes Beispiel: die FIN

Jedes Auto hat eine 17-stellige **Fahrzeug-Identifikationsnummer** (FIN). Die Zuordnung „Auto ↦ FIN" ordnet **jedem** Auto **genau eine** FIN zu, und verschiedene Autos haben verschiedene FINs. Genau diese Art von Zuordnung nennt man Abbildung.

## Definition

:::def Abbildung / Funktion
Eine **Abbildung** (synonym **Funktion**) $\varphi: D\to Z,\; x\mapsto\varphi(x)$ ordnet **jedem** Element $x$ des **Definitionsbereichs** $D$ **genau ein** Element $\varphi(x)$ der **Zielmenge** (Wertebereich) $Z$ zu.
:::

Zu einer Funktion gehören also immer **drei** Dinge: $D$, $Z$ und die Zuordnungsvorschrift. Ändert man $D$ oder $Z$, ist es eine andere Funktion!

:::bsp Alltag und Technik
- Person ↦ Geburtsdatum (Funktion), Fahrzeug ↦ Kfz-Kennzeichen, Zeitpunkt ↦ Flughöhe, Tageszeit ↦ Raumtemperatur, Zeitpunkt ↦ Drehzahl.
- $f(x)=mx+n$ (Gerade), $g(x)=ax^2+bx+c$ (Parabel), freier Fall $h(t)=h_0-\tfrac{g}{2}t^2$, Welle $E(x,t)=E_0\sin(kx+\omega t)$, Kreisbewegung $\vec r(t)=\begin{pmatrix} r\cos(\omega t)\\ r\sin(\omega t)\end{pmatrix}$.
:::

:::achtung Mehrwertige Zuordnungen sind keine Funktionen
„Person ↦ ihre Telefonnummern" ordnet einer Person evtl. mehrere Nummern zu (Festnetz, Mobil, Arbeit). Das ist eine *mehrwertige Abbildung*, aber **keine Funktion** im engeren Sinn. Ebenso ist „Kfz ↦ alle bisherigen Kennzeichen" mehrwertig.
Außerdem: In der Schule meinte „Funktion" meist eine reelle Funktion $f:\R\to\R$; in der Mathematik ist der Begriff allgemeiner.
:::

## Bild und Urbild

:::def Bild
Das **Bild** von $\varphi:D\to Z$ ist die Menge aller tatsächlich angenommenen Werte:
$$\varphi(D)=\{z\in Z\mid \exists x\in D:\ \varphi(x)=z\}\subseteq Z.$$
Ist $\varphi(x)=z$, so heißt $x$ ein **Urbild** von $z$. Für $M\subset Z$ ist $\varphi^{-1}(M)=\{x\in D\mid\varphi(x)\in M\}$ das Urbild der Menge $M$.
:::

## Injektiv, surjektiv, bijektiv

:::def Eigenschaften
Sei $\varphi:D\to Z$.
- **surjektiv**: Jedes $z\in Z$ wird getroffen: $\forall z\in Z\ \exists x\in D: \varphi(x)=z$. Äquivalent: $\varphi(D)=Z$ (Bild = Zielmenge).
- **injektiv** („eindeutig"): Verschiedene Urbilder haben verschiedene Bilder: $\forall x_1,x_2\in D: x_1\ne x_2\Rightarrow\varphi(x_1)\ne\varphi(x_2)$. Äquivalent (Kontraposition): $\varphi(x_1)=\varphi(x_2)\Rightarrow x_1=x_2$.
- **bijektiv** („eineindeutig"): injektiv **und** surjektiv. Dann gibt es zu jedem $z\in Z$ **genau ein** $x\in D$ mit $\varphi(x)=z$.
:::

<figure><svg class="fig" viewBox="0 0 660 170" width="660" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="12" stroke="currentColor" fill="none" stroke-width="1.3">
<defs><marker id="arA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
<g><ellipse cx="40" cy="80" rx="28" ry="60"/><ellipse cx="150" cy="80" rx="28" ry="60"/>
<g fill="currentColor"><circle cx="40" cy="45" r="3"/><circle cx="40" cy="80" r="3"/><circle cx="40" cy="115" r="3"/><circle cx="150" cy="55" r="3"/><circle cx="150" cy="105" r="3"/></g>
<path d="M44 45 L146 55" marker-end="url(#arA)"/><path d="M44 80 L146 57" marker-end="url(#arA)"/><path d="M44 115 L146 105" marker-end="url(#arA)"/>
<text x="95" y="160" fill="currentColor" stroke="none" text-anchor="middle">surjektiv, nicht injektiv</text></g>
<g transform="translate(220,0)"><ellipse cx="40" cy="80" rx="28" ry="60"/><ellipse cx="150" cy="80" rx="28" ry="60"/>
<g fill="currentColor"><circle cx="40" cy="55" r="3"/><circle cx="40" cy="105" r="3"/><circle cx="150" cy="45" r="3"/><circle cx="150" cy="80" r="3"/><circle cx="150" cy="115" r="3"/></g>
<path d="M44 55 L146 45" marker-end="url(#arA)"/><path d="M44 105 L146 115" marker-end="url(#arA)"/>
<text x="95" y="160" fill="currentColor" stroke="none" text-anchor="middle">injektiv, nicht surjektiv</text></g>
<g transform="translate(440,0)"><ellipse cx="40" cy="80" rx="28" ry="60"/><ellipse cx="150" cy="80" rx="28" ry="60"/>
<g fill="currentColor"><circle cx="40" cy="45" r="3"/><circle cx="40" cy="80" r="3"/><circle cx="40" cy="115" r="3"/><circle cx="150" cy="45" r="3"/><circle cx="150" cy="80" r="3"/><circle cx="150" cy="115" r="3"/></g>
<path d="M44 45 L146 80" marker-end="url(#arA)"/><path d="M44 80 L146 115" marker-end="url(#arA)"/><path d="M44 115 L146 45" marker-end="url(#arA)"/>
<text x="95" y="160" fill="currentColor" stroke="none" text-anchor="middle">bijektiv</text></g>
</svg><figcaption>Links jeweils D, rechts Z</figcaption></figure>

### Verneinungen (wichtig für Gegenbeispiele)

| Eigenschaft | Verneinung |
|---|---|
| surjektiv: $\forall z\ \exists x: \varphi(x)=z$ | **nicht surjektiv**: $\exists z\in Z\ \forall x\in D: \varphi(x)\ne z$ (ein Wert wird nie getroffen) |
| injektiv: $x_1\ne x_2\Rightarrow\varphi(x_1)\ne\varphi(x_2)$ | **nicht injektiv**: $\exists x_1\ne x_2: \varphi(x_1)=\varphi(x_2)$ |
| bijektiv | nicht injektiv **oder** nicht surjektiv |

:::rezept Injektivität / Surjektivität prüfen (reelle Funktionen)
- **Injektiv?** Setze $f(x_1)=f(x_2)$ an und versuche $x_1=x_2$ zu folgern. Klappt es nicht, such zwei verschiedene $x$ mit gleichem Funktionswert. Grafisch: Jede waagrechte Gerade schneidet den Graphen **höchstens** einmal. Streng monotone Funktionen sind injektiv.
- **Surjektiv?** Löse $f(x)=z$ nach $x$ auf und prüfe, ob für **jedes** $z\in Z$ eine Lösung $x\in D$ existiert. Grafisch: jede waagrechte Gerade auf Höhe $z\in Z$ schneidet den Graphen **mindestens** einmal.
:::

:::bsp Die Rolle von $D$ und $Z$ bei $x\mapsto x^2$
| Funktion | injektiv? | surjektiv? |
|---|---|---|
| $f_1:\R\to\R$ | nein ($f(-1)=f(1)$) | nein ($-1$ wird nie getroffen) |
| $f_2:\R\to[0,\infty)$ | nein | ja |
| $f_3:[0,\infty)\to\R$ | ja | nein |
| $f_4:[0,\infty)\to[0,\infty)$ | ja | ja → **bijektiv**, Umkehrung $\sqrt{\ }$ |
:::

:::bsp Walkthrough: $f:\R\to\R,\ f(x)=3x-2$
- injektiv: $3x_1-2=3x_2-2\Rightarrow 3x_1=3x_2\Rightarrow x_1=x_2$. ✓
- surjektiv: Zu $z\in\R$ löse $3x-2=z\Rightarrow x=\frac{z+2}{3}\in\R$. ✓
- also bijektiv, Umkehrfunktion $f^{-1}(z)=\frac{z+2}{3}$.
:::

## Umkehrabbildung und Verkettung

:::def Umkehrabbildung
Ist $f:D\to Z$ **bijektiv**, so gibt es die **Umkehrabbildung** $f^{-1}:Z\to D$, die jedem $z$ sein eindeutiges Urbild zuordnet: $f^{-1}(f(x))=x$ und $f(f^{-1}(z))=z$. Den Graphen von $f^{-1}$ erhält man durch Spiegelung an der Winkelhalbierenden $y=x$.
:::

:::def Verkettung
Für $g:A\to B$ und $f:B\to C$ ist $f\circ g:A\to C,\ (f\circ g)(x)=f(g(x))$ („$f$ nach $g$"). Im Allgemeinen ist $f\circ g\neq g\circ f$.
:::

:::bsp
$f(x)=x^2$, $g(x)=x+1$: $(f\circ g)(x)=(x+1)^2$, aber $(g\circ f)(x)=x^2+1$.
:::

## Aufgaben

:::aufgabe 1
Untersuche auf Injektivität, Surjektivität, Bijektivität: (a) $f:\R\to\R,\ x\mapsto x^3$, (b) $g:\R\to\R,\ x\mapsto \e^x$, (c) $h:\R\to[-1,1],\ x\mapsto\sin x$, (d) $k:\N\to\N,\ n\mapsto 2n$.
:::loesung
(a) streng monoton wachsend ⇒ injektiv; jedes $z$ hat Urbild $\sqrt[3]{z}$ ⇒ surjektiv ⇒ **bijektiv**.
(b) injektiv (streng monoton), nicht surjektiv ($\e^x>0$, z. B. $-1$ wird nie getroffen). Als $\R\to(0,\infty)$ wäre sie bijektiv (Umkehrung $\ln$).
(c) surjektiv (jedes $z\in[-1,1]$ wird getroffen), nicht injektiv ($\sin 0=\sin\pi$).
(d) injektiv ($2n_1=2n_2\Rightarrow n_1=n_2$), nicht surjektiv (ungerade Zahlen, z. B. 1, werden nicht getroffen).
:::
:::

:::aufgabe 2
Welche Zuordnungen sind Funktionen? (a) Kfz-Kennzeichen ↦ Fahrzeughalter, (b) Person ↦ Vorname, (c) Person ↦ Geburtstag (Tag+Monat) – ist sie injektiv?
:::loesung
(a) Funktion (jedes Kennzeichen hat genau einen Halter). (b) Funktion. (c) Funktion, aber **nicht injektiv** (viele Menschen teilen einen Geburtstag; bei mehr als 366 Personen ist das sogar sicher – Schubfachprinzip).
:::
:::

:::aufgabe 3
Bestimme für $f:\R\setminus\{1\}\to\R\setminus\{2\},\ f(x)=\frac{2x}{x-1}$ die Umkehrfunktion.
:::loesung
$y=\frac{2x}{x-1}\Leftrightarrow y(x-1)=2x\Leftrightarrow yx-2x=y\Leftrightarrow x(y-2)=y\Leftrightarrow x=\frac{y}{y-2}$. Für jedes $y\ne 2$ gibt es genau ein $x\ne 1$ ⇒ bijektiv, $f^{-1}(y)=\frac{y}{y-2}$.
:::
:::

## Karteikarten

:::karte
Definition: Abbildung $f:D\to Z$?
???
Ordnet **jedem** $x\in D$ **genau ein** $f(x)\in Z$ zu.
:::

:::karte
Definition injektiv – und wie verneint man es?
???
$f(x_1)=f(x_2)\Rightarrow x_1=x_2$ (verschiedene $x$ ⇒ verschiedene Bilder). Nicht injektiv: $\exists x_1\ne x_2$ mit $f(x_1)=f(x_2)$.
:::

:::karte
Definition surjektiv – und Verneinung?
???
$\forall z\in Z\,\exists x\in D: f(x)=z$, d. h. Bild $=Z$. Nicht surjektiv: $\exists z\in Z$, das nie getroffen wird.
:::

:::karte
Ist $x\mapsto x^2$ bijektiv?
???
Hängt von $D$ und $Z$ ab! Als $[0,\infty)\to[0,\infty)$ ja, als $\R\to\R$ weder injektiv noch surjektiv.
:::

:::karte
Wann existiert die Umkehrabbildung $f^{-1}$?
???
Genau dann, wenn $f$ bijektiv ist.
:::
