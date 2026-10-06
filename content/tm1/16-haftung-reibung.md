---
title: §9 Haftung und Reibung – Coulombsche Gesetze, Haftgrenze, Reibungswinkel, Selbsthemmung
chapter: §9 Haftung und Reibung
minutes: 110
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#253; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#13
---

:::ziel
- Haftung (Ruhe) und Gleitreibung (Bewegung) unterscheiden.
- **Haftbedingung** $|H|\le\mu_0N$ und **Coulombsches Reibungsgesetz** $R=\mu N$ korrekt anwenden.
- Reibungskegel/Reibungswinkel, Selbsthemmung (Keil, Schraube, schiefe Ebene).
- Aufgaben: Kippen vs. Rutschen, Leiter, Keil.
:::

## Grundlagen

Rauigkeiten der Oberflächen erzeugen in der Berührfläche zweier Körper eine **Tangentialkraft** zusätzlich zur Normalkraft $N$.
- **Haften** (keine Relativbewegung): Tangentialkraft = **Haftkraft** $H$. Sie ist eine **Reaktionskraft** und wird aus dem **Gleichgewicht** bestimmt.
- **Gleiten** (Relativbewegung): Tangentialkraft = **Reibungskraft** $R$. Sie ist eine **eingeprägte Kraft**, gegeben durch das Reibungsgesetz.

## Coulombsche Gesetze

:::satz Haftbedingung
Ein Körper haftet, solange
$$|H|\le H_0=\mu_0N\qquad(\mu_0=\text{Haftreibungskoeffizient}).$$
Im **Grenzfall** (Bewegung steht unmittelbar bevor): $|H|=\mu_0N$.
:::

:::satz Coulombsches Reibungsgesetz
Beim Gleiten:
$$R=\mu N\qquad(\mu=\text{Gleitreibungskoeffizient}),$$
**entgegen** der Relativgeschwindigkeit gerichtet.
:::

:::merke Drei Fälle
1. **Haften:** $|H|<\mu_0N$ – $H$ aus Gleichgewicht.
2. **Haftgrenzfall:** $|H|=\mu_0N$ – zusätzliche Gleichung.
3. **Gleiten:** $R=\mu N$ – Richtung entgegen Bewegung (kein Gleichgewicht nötig; in der Dynamik $ma=\dots$).

Weitere Erfahrungstatsachen: $H_0$ und $R$ sind (näherungsweise) **unabhängig von der Größe der Kontaktfläche**; meist $\mu_0>\mu$ (Losbrechen braucht mehr Kraft als Weiterschieben). Typische Werte: Stahl/Stahl $\mu_0\approx0{,}15$–$0{,}5$, Gummi/Asphalt trocken $\mu_0\approx0{,}7$–$0{,}9$, Holz/Holz $0{,}5$.
:::

:::achtung Häufigster Fehler
$H=\mu_0N$ einfach immer hinschreiben – **falsch**! Das gilt nur im Grenzfall. Im Normalfall ist $H$ eine unbekannte Reaktionskraft. Und: Die Richtung von $H$ kann man frei annehmen (Vorzeichen ergibt sich), die von $R$ **nicht** (entgegen der Bewegung).
:::

## Reibungswinkel und Reibungskegel

Die Resultierende $W$ aus $N$ und $H$ ist um den Winkel $\rho$ gegen die Normale geneigt, $\tan\rho=\frac HN$. Haften ⇔ $\rho\le\rho_0$ mit dem **Haftreibungswinkel**
$$\tan\rho_0=\mu_0.$$
Anschaulich: Die Kontaktkraft muss innerhalb des **Reibungskegels** (Öffnungswinkel $2\rho_0$) liegen.

:::bsp Körper auf schiefer Ebene
Ein Klotz (Gewicht $G$) liegt auf einer schiefen Ebene mit Neigung $\alpha$. Gleichgewicht: $N=G\cos\alpha$, $H=G\sin\alpha$. Haftbedingung $G\sin\alpha\le\mu_0G\cos\alpha\iff\tan\alpha\le\mu_0$.
⇒ Der Klotz rutscht, sobald $\alpha>\rho_0=\arctan\mu_0$ – **unabhängig vom Gewicht**. (Messmethode für $\mu_0$: Neigung langsam steigern.)
:::

:::bsp Kraft zum Hochschieben
Wie groß muss eine Kraft $F$ **parallel** zur Ebene sein, damit der Klotz gerade hochrutscht? Grenzfall, Haftkraft zeigt hangabwärts: $F=G\sin\alpha+\mu_0G\cos\alpha$. Zum Halten (gerade nicht runterrutschen, falls $\tan\alpha>\mu_0$): $F=G\sin\alpha-\mu_0G\cos\alpha$. Dazwischen bleibt der Klotz in Ruhe – **Gleichgewichtsbereich**, keine eindeutige Lösung.
:::

## Kippen oder Rutschen?

Ein Klotz (Breite $b$, Höhe $h$, Gewicht $G$) wird in Höhe $a$ horizontal mit $F$ geschoben. Zwei Versagensarten:
- **Rutschen**, wenn $F>\mu_0G$.
- **Kippen** um die vordere Kante, wenn das Moment von $F$ das Rückstellmoment übersteigt: $Fa>G\frac b2\iff F>\frac{Gb}{2a}$.
Es tritt ein, was zuerst kommt: Kippen vor Rutschen, wenn $\frac{b}{2a}<\mu_0$. (Beim Kippen wandert die Normalkraft an die Kante – vorher liegt sie irgendwo in der Aufstandsfläche, ihre Lage ist eine Unbekannte!)

## Leiter

:::bsp Leiter mit Reibung am Boden, glatte Wand
Leiter (Länge $l$, Gewicht $G$ mittig), Winkel $\alpha$ zum Boden, $\mu_0$ am Boden. Aus §3: $N_B=G$, $H=N_W=\frac{G}{2\tan\alpha}$. Haften: $\frac G{2\tan\alpha}\le\mu_0G\iff\tan\alpha\ge\frac1{2\mu_0}$.
Für $\mu_0=0{,}4$: $\tan\alpha\ge1{,}25\Rightarrow\alpha\ge51{,}3°$. Steht noch eine Person oben auf der Leiter, wird die Bedingung schärfer.
:::

## Selbsthemmung

Ein Mechanismus ist **selbsthemmend**, wenn er sich unter Last nicht von selbst zurückbewegt.
- **Schiefe Ebene/Keil:** selbsthemmend, wenn $\alpha\le\rho_0$ (Keil bleibt nach dem Einschlagen stecken).
- **Schraube** (Flankenreibung, Steigungswinkel $\alpha$): selbsthemmend, wenn $\alpha<\rho'$ (Reibungswinkel inkl. Flankenwinkel). Befestigungsschrauben sind deshalb selbsthemmend, Bewegungsschrauben (Spindeln) oft nicht.

:::bsp Keil
Ein Keil (Keilwinkel $\alpha$, symmetrisch) wird mit $F$ zwischen zwei Flächen getrieben; Reibung $\mu_0$ an beiden Flanken. Grenzfall Eintreiben: Die Kontaktkräfte sind um $\rho_0$ gegen die Normalen gedreht. Kräfte­gleichgewicht in Eintreibrichtung: $F=2N(\sin\frac\alpha2+\mu_0\cos\frac\alpha2)$. Selbsthemmung (Keil kommt nicht von alleine heraus): $\tan\frac\alpha2\le\mu_0$.
:::

## Aufgaben

:::aufgabe 1
Ein Klotz ($G=200\,$N) liegt auf horizontalem Boden ($\mu_0=0{,}5$, $\mu=0{,}4$). Eine Kraft $F=80\,$N zieht unter $30°$ nach oben. Haftet der Klotz? Welche Haftkraft wirkt?
:::loesung
$N=G-F\sin30°=160\,$N; erforderliche Haftkraft $H=F\cos30°=69{,}3\,$N; $\mu_0N=80\,$N ⇒ $69{,}3<80$ ⇒ **haftet**, $H=69{,}3\,$N (nicht 80!).
:::
:::

:::aufgabe 2
Wie oben, aber $F=100\,$N. Was passiert? Reibungskraft?
:::loesung
$N=150$, $H_{erf}=86{,}6>\mu_0N=75$ ⇒ **gleitet**. Reibungskraft $R=\mu N=0{,}4\cdot150=60\,$N (entgegen der Bewegung). Kein Gleichgewicht: Resultierende $86{,}6-60=26{,}6\,$N beschleunigt.
:::
:::

:::aufgabe 3
Ein Schrank ($b=1\,$m, $h=2\,$m, Schwerpunkt mittig, $G=800\,$N, $\mu_0=0{,}3$) wird in $1{,}5\,$m Höhe geschoben. Kippt oder rutscht er zuerst?
:::loesung
Rutschen bei $F=0{,}3\cdot800=240\,$N; Kippen bei $F=\frac{800\cdot0{,}5}{1{,}5}=267\,$N ⇒ er **rutscht** zuerst.
:::
:::

## Karteikarten

:::karte
Haftbedingung?
???
$|H|\le\mu_0N$ – $H$ selbst aus Gleichgewicht!
:::

:::karte
Coulombsches Reibungsgesetz?
???
$R=\mu N$, entgegen der Relativbewegung (eingeprägte Kraft).
:::

:::karte
Wann rutscht ein Klotz auf der schiefen Ebene?
???
Wenn $\tan\alpha>\mu_0$ – unabhängig vom Gewicht.
:::

:::karte
Haftreibungswinkel?
???
$\tan\rho_0=\mu_0$; Kontaktkraft muss im Reibungskegel liegen.
:::

:::karte
Selbsthemmung bei Keil/schiefer Ebene?
???
Wenn der Neigungswinkel kleiner/gleich dem Reibungswinkel ist ($\alpha\le\rho_0$).
:::
