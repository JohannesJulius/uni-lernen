---
title: §7 Schnittgrößen I – Definition, Vorzeichen, Balken unter Einzellasten (Schnittverfahren)
chapter: §7 Balken, Rahmen, Bogen
minutes: 130
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#174; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#10
---

:::ziel
- Verstehen, was **Schnittgrößen** sind (Normalkraft $N$, Querkraft $Q$, Biegemoment $M$) und warum man sie braucht.
- Die **Vorzeichenkonvention** (positives/negatives Schnittufer) sicher anwenden.
- Schnittgrößenverläufe für Balken unter **Einzelkräften und Einzelmomenten** mit dem **Schnittverfahren** bestimmen und zeichnen.
- Charakteristika: Sprünge und Knicke.
:::

## Warum Schnittgrößen?

Lagerreaktionen sagen, wie das Tragwerk gehalten wird – aber nicht, wie stark es **innen** beansprucht ist. Dafür schneidet man den Balken an einer beliebigen Stelle $x$ durch. Die über die Querschnittsfläche verteilten **inneren Kräfte (Spannungen)** fasst man statisch zu Resultierenden zusammen: den **Schnittgrößen**. Aus ihnen berechnet man in TM 2 die Spannungen und dimensioniert Bauteile.

:::def Schnittgrößen (ebene Belastung)
- **Normalkraft** $N$: Kraft in Balkenlängsrichtung ($x$) – Zug positiv.
- **Querkraft** $Q$: Kraft quer zur Balkenachse (in $z$-Richtung).
- **Biegemoment** $M$: Moment um die $y$-Achse (senkrecht zur Ebene).
Im Raum zusätzlich: zweite Querkraft $Q_y$, zweites Biegemoment $M_z$ und das **Torsionsmoment** $M_T=M_x$.
:::

## Koordinaten und Vorzeichen

Standardkonvention (Gross u. a., auch Middendorf-Skript): $x$ entlang der Balkenachse (nach rechts), $z$ **nach unten**, $y$ in die Zeichenebene hinein. Eine **gestrichelte Faser** markiert die „Unterseite" (positive $z$-Seite).

:::merke Vorzeichenkonvention
- **Positives Schnittufer**: Die äußere Normale zeigt in **$+x$**-Richtung (das ist die Schnittfläche des **linken** Teils).
- **Negatives Schnittufer**: Normale in $-x$ (Schnittfläche des **rechten** Teils).
- **Positive Schnittgrößen zeigen am positiven Ufer in positive Koordinatenrichtungen**, am negativen Ufer in negative.

Konkret (linker Teil, rechtes Ende): $N$ nach rechts (Zug), $Q$ nach **unten**, $M$ dreht so, dass die **untere (gestrichelte) Faser gezogen** wird. Am rechten Teil alles entgegengesetzt (actio = reactio).
:::

<figure><svg class="fig" viewBox="0 0 560 150" width="560" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="13" stroke="currentColor" fill="none" stroke-width="1.5">
<defs><marker id="ar12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>
<rect x="40" y="55" width="170" height="24" fill="#d9822b" fill-opacity=".2"/><path d="M40 83 H210" stroke-dasharray="5 4"/>
<path d="M212 67 H262" marker-end="url(#ar12)" stroke="#3b6fd8"/><text x="240" y="60" fill="#3b6fd8" stroke="none">N</text>
<path d="M216 70 V115" marker-end="url(#ar12)" stroke="#c0392b"/><text x="222" y="112" fill="#c0392b" stroke="none">Q</text>
<path d="M200 40 A 26 26 0 0 1 228 64" marker-end="url(#ar12)" stroke="#2e8b57"/><text x="230" y="40" fill="#2e8b57" stroke="none">M</text>
<text x="60" y="110" fill="currentColor" stroke="none">linker Teil (positives Ufer)</text>
<rect x="340" y="55" width="170" height="24" fill="#d9822b" fill-opacity=".2"/><path d="M340 83 H510" stroke-dasharray="5 4"/>
<path d="M338 67 H288" marker-end="url(#ar12)" stroke="#3b6fd8"/><text x="292" y="60" fill="#3b6fd8" stroke="none">N</text>
<path d="M334 110 V70" marker-end="url(#ar12)" stroke="#c0392b"/><text x="318" y="112" fill="#c0392b" stroke="none">Q</text>
<path d="M350 40 A 26 26 0 0 0 322 64" marker-end="url(#ar12)" stroke="#2e8b57"/><text x="300" y="40" fill="#2e8b57" stroke="none">M</text>
<text x="360" y="110" fill="currentColor" stroke="none">rechter Teil (negatives Ufer)</text>
<text x="40" y="140" fill="currentColor" stroke="none">x →, z ↓ ; gestrichelte Faser = Unterseite</text>
</svg><figcaption>Positive Schnittgrößen an beiden Schnittufern</figcaption></figure>

## Das Schnittverfahren

:::rezept Schnittgrößen mit dem Schnittverfahren
1. **Lagerreaktionen** berechnen.
2. **Bereiche** festlegen: Ein neuer Bereich beginnt an jeder Stelle, an der eine Einzelkraft, ein Einzelmoment, ein Lager oder ein Beginn/Ende/Knick einer Streckenlast liegt.
3. In **jedem Bereich** einen Schnitt bei beliebigem $x$ legen; den einfacheren Teil (links oder rechts) freischneiden; Schnittgrößen **positiv** nach Konvention eintragen.
4. Gleichgewicht am Teil: $\sum F_x\Rightarrow N(x)$, $\sum F_z\Rightarrow Q(x)$, $\sum M^{(\text{Schnitt})}\Rightarrow M(x)$ – Momente immer **um den Schnittpunkt**.
5. Verläufe zeichnen (Konvention: $M$ meist auf der **Zugseite** bzw. positiv nach unten aufgetragen; bei uns: positive Werte unterhalb der Achse wie bei Gross).
6. Kontrollen: Randwerte (freies Ende, Gelenk: $M=0$), Sprünge, Gleichgewicht.
:::

## Beispiel 1: Einfeldträger mit Einzelkraft

Balken $l$, Festlager $A$ ($x=0$), Loslager $B$ ($x=l$), Kraft $F$ nach unten bei $x=a$, $b=l-a$.
- Lager: $A=\frac{Fb}l$, $B=\frac{Fa}l$ (beide nach oben).
- **Bereich I** ($0<x<a$), linker Teil: Am Schnitt $Q$ nach unten, $M$ positiv.
  $\sum F_z$ (↓ positiv): $-A+Q=0\Rightarrow Q_I=A=\frac{Fb}l$.
  $\sum M^{(x)}$: $M-Ax=0\Rightarrow M_I(x)=\frac{Fb}lx$ (linear).
- **Bereich II** ($a<x<l$), rechter Teil (einfacher): Am negativen Ufer $Q$ nach oben, $M$ entgegengesetzt.
  $\sum F_z$: $-Q-B=0\Rightarrow Q_{II}=-B=-\frac{Fa}l$.
  $\sum M^{(x)}$: $-M+B(l-x)=0\Rightarrow M_{II}(x)=\frac{Fa}l(l-x)$.
- **Maximum** unter der Last: $M_{max}=M(a)=\frac{Fab}l$; für $a=b=\frac l2$: $M_{max}=\frac{Fl}4$.
- **Querkraftsprung** bei $x=a$ um genau $F$ (von $+\frac{Fb}l$ auf $-\frac{Fa}l$); der Momentenverlauf hat dort einen **Knick**.
:::

<figure><svg class="fig" viewBox="0 0 520 260" width="520" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="12" stroke="currentColor" fill="none" stroke-width="1.4">
<path d="M40 40 H460" stroke-width="5" stroke="#d9822b"/><path d="M40 44 l-10 16 h20 z"/><path d="M460 44 l-10 16 h20 z"/><path d="M200 5 V34"/><path d="M196 28 l4 8 l4 -8" fill="currentColor"/><text x="206" y="18" fill="currentColor" stroke="none">F</text>
<text x="0" y="110" fill="currentColor" stroke="none">Q</text><path d="M40 110 H460" stroke-width=".8"/>
<path d="M40 110 V85 H200 V150 H460 V110" fill="#c0392b" fill-opacity=".15" stroke="#c0392b"/><text x="100" y="80" fill="#c0392b" stroke="none">+Fb/l</text><text x="300" y="165" fill="#c0392b" stroke="none">−Fa/l</text>
<text x="0" y="200" fill="currentColor" stroke="none">M</text><path d="M40 200 H460" stroke-width=".8"/>
<path d="M40 200 L200 250 L460 200" fill="#2e8b57" fill-opacity=".15" stroke="#2e8b57"/><text x="206" y="255" fill="#2e8b57" stroke="none">M_max = Fab/l</text>
</svg><figcaption>Einfeldträger mit Einzelkraft: Querkraft springt um F, Momentenlinie hat dort einen Knick (positive M nach unten aufgetragen)</figcaption></figure>

## Beispiel 2: Kragträger mit Endlast

Einspannung bei $x=0$, Kraft $F$ nach unten am freien Ende $x=l$. Schnitt bei $x$, **rechter** Teil (kein Lager nötig!):
$Q(x)=F$ (konstant), $M(x)=-F(l-x)$ (linear, am freien Ende 0, an der Einspannung $-Fl$). Negatives Moment: Die **Oberseite** wird gezogen – ein Kragträger hängt nach unten durch, oben ist Zug. Normalkraft 0.

## Beispiel 3: Einzelmoment

Einfeldträger $l$, Moment $M_0$ (↺) bei $x=a$. Lager aus $\sum M^{(A)}$ (↺ positiv): $Bl+M_0=0\Rightarrow B=-\frac{M_0}l$ (also nach **unten**), $A=+\frac{M_0}l$ (nach oben) – die Lager bilden ein Kräftepaar gegen $M_0$.
- $Q(x)=A=\frac{M_0}l$ überall (konstant, **kein Sprung**).
- $M_I(x)=\frac{M_0}lx$ für $x<a$; $M_{II}(x)=-\frac{M_0}l(l-x)$ für $x>a$.
- Bei $x=a$ **springt** $M$ von $\frac{M_0a}l$ auf $-\frac{M_0b}l$, also um genau $M_0$.

## Schräge Kräfte und Normalkraft

Eine schräge Kraft zerlegt man in Längs- und Querkomponente: Die Längskomponente erzeugt einen **Sprung in $N$**, die Querkomponente einen Sprung in $Q$.

:::merke Charakteristika der Verläufe
| Ursache | $N$ | $Q$ | $M$ |
|---|---|---|---|
| Einzelkraft quer | – | **Sprung** um $F$ | **Knick** |
| Einzelkraft längs | **Sprung** | – | – |
| Einzelmoment | – | – | **Sprung** um $M_0$ |
| unbelasteter Bereich | konstant | konstant | linear |
| freies Ende, Gelenk | – | – | $M=0$ (wenn dort kein Einzelmoment wirkt) |
| Einspannung | | | i. A. $M\ne0$ |
:::

## Aufgaben

:::aufgabe 1
Einfeldträger $l=6\,$m, $F_1=6\,$kN bei $x=2$, $F_2=3\,$kN bei $x=4$ (beide ↓). $Q$- und $M$-Verlauf, $M_{max}$?
:::loesung
$B=\frac{6\cdot2+3\cdot4}{6}=4$, $A=5\,$kN. $Q$: $5$ (0–2), $-1$ (2–4), $-4$ (4–6). $M$: $M(2)=10$, $M(4)=10-1\cdot2=8$ (bzw. $4\cdot2=8$ von rechts). $M_{max}=10\,$kNm bei $x=2$ – dort wechselt $Q$ das Vorzeichen.
:::
:::

:::aufgabe 2
Kragträger $l=2\,$m, am freien Ende $F=5\,$kN unter $30°$ zur Balkenachse nach unten gerichtet (zieht schräg nach rechts unten). Schnittgrößen an der Einspannung?
:::loesung
Längskomponente $F\cos30°=4{,}33\,$kN (Zug) ⇒ $N=4{,}33\,$kN konstant; Querkomponente $F\sin30°=2{,}5\,$kN ↓ ⇒ $Q=2{,}5\,$kN; $M(0)=-2{,}5\cdot2=-5\,$kNm.
:::
:::

## Karteikarten

:::karte
Die drei Schnittgrößen im ebenen Balken?
???
Normalkraft $N$, Querkraft $Q$, Biegemoment $M$.
:::

:::karte
Positive Schnittgrößen am linken Teil (positives Ufer)?
???
$N$ nach rechts (Zug), $Q$ nach unten ($+z$), $M$ zieht die untere (gestrichelte) Faser.
:::

:::karte
Was passiert bei einer Einzelkraft (quer) im Q- und M-Verlauf?
???
$Q$ springt um $F$, $M$ hat einen Knick.
:::

:::karte
Was passiert bei einem Einzelmoment?
???
$M$ springt um $M_0$; $Q$ unverändert.
:::

:::karte
$M_{max}$ beim Einfeldträger mit mittiger Einzellast?
???
$\frac{Fl}4$
:::
