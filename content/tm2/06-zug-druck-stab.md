---
title: 3.1 Zug-Druck-Stab – Spannung, Dehnung, Elastizitätsgesetz, statisch bestimmte Stäbe und Stabsysteme
chapter: 3 Zug-Druck-Beanspruchung
minutes: 120
sources: Technische Mechanik 2/tm2_03_zugDruck.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#15; Technische Mechanik 2/Uebung_02_Aufgaben.pdf
---

:::ziel
- Normalspannung $\sigma=\frac NA$ und ihre Gültigkeitsgrenzen (Saint-Venant) kennen.
- Das **Elastizitätsgesetz des Stabes** $u'=\frac N{EA}+\alpha_T\Delta T$ und die **Längenänderung** $\Delta l$ anwenden – auch bei veränderlichem $N$, $A$ oder Linienlast.
- Die DGL des Dehnstabs $(EAu')'=-n$ mit Rand- und Übergangsbedingungen lösen.
- **Statisch bestimmte Stabsysteme** mit Verschiebungsplan behandeln.
:::

## Spannung im Stab

**Stab** = gerades, schlankes Bauteil, belastet nur in Längsrichtung. Annahmen: Querschnitte bleiben eben, Material homogen und isotrop, Kraftwirkungslinie = Stabachse (Verbindung der Flächenschwerpunkte).

:::formel Normalspannung
$$\sigma=\frac{N}{A}\qquad(\text{Zug }>0,\ \text{Druck }<0).$$
Gleichförmig über den Querschnitt – Momentengleichgewicht ist erfüllt, weil $N$ im **Schwerpunkt** angreift ($\int y\,\d A=\int z\,\d A=0$). Näherungsweise auch für **schwach** veränderlichen Querschnitt $A(x)$ und veränderliches $N(x)$:
$$\sigma(x)=\frac{N(x)}{A(x)}.$$
:::

:::achtung Prinzip von Saint-Venant
In der Nähe von Krafteinleitungen, Einspannungen, Kerben und Querschnittssprüngen ist die Spannung **nicht** gleichförmig – es gibt **Spannungsspitzen** (in der Praxis: Kerbformzahlen). Sie klingen aber in einer Entfernung von etwa der Querschnittsbreite ab. Unsere Formeln gelten „hinreichend weit weg".
:::

**Schräger Schnitt** (einachsiger Zustand, vgl. Lektion 2.1): $\sigma_\varphi=\sigma\cos^2\varphi$, $\tau_\varphi=-\frac\sigma2\sin2\varphi$; $|\tau|$ maximal $=\frac\sigma2$ unter 45°.

:::bsp Konischer Stab (Gross Bsp. 1.1)
Kegelstumpf, Länge $l$, Radius oben $r_0$, unten $2r_0$, zentrische Druckkraft $F$. Mit $x$ von oben: $r(x)=r_0(1+\frac xl)$,
$$\sigma(x)=-\frac{F}{\pi r_0^2(1+x/l)^2}.$$
Größter Betrag oben: $\frac{F}{\pi r_0^2}$, unten nur ein Viertel davon.
:::

## Dehnung und Elastizitätsgesetz

Verschiebung eines Querschnitts: $u(x)$. Ein Element $\d x$ wird zu $\d x+\d u$:
$$\varepsilon(x)=\frac{\d u}{\d x}=u'(x).$$
Bei konstantem $N$ und $A$: $\varepsilon=\frac{\Delta l}l=$ const.

:::formel Die drei Grundgleichungen des Stabes
1. **Gleichgewicht** am Element $\d x$ mit Linienlast $n(x)$ (Kraft pro Länge in Stabrichtung): $\dfrac{\d N}{\d x}+n=0$.
2. **Kinematik:** $\varepsilon=\dfrac{\d u}{\d x}$.
3. **Stoffgesetz:** $\varepsilon=\dfrac\sigma E+\alpha_T\Delta T$.

Zusammen: **Elastizitätsgesetz des Stabes**
$$u'=\frac{N}{EA}+\alpha_T\Delta T\qquad(EA=\text{Dehnsteifigkeit}).$$
:::

:::formel Längenänderung
$$\Delta l=u(l)-u(0)=\int_0^l\left(\frac{N}{EA}+\alpha_T\Delta T\right)\d x.$$
Sonderfall $N$, $EA$, $\Delta T$ konstant: $\boxed{\Delta l=\dfrac{Nl}{EA}+\alpha_T\Delta T\,l}$, ohne Temperatur: $\Delta l=\dfrac{Nl}{EA}$.
:::

Analogie zur Feder: $N=\frac{EA}l\Delta l$ – ein Stab ist eine Feder mit Steifigkeit $c=\frac{EA}l$.

### Differentialgleichung des Dehnstabs
Einsetzen von $N=EA(u'-\alpha_T\Delta T)$ in $N'=-n$:
$$(EAu')'=-n+(EA\alpha_T\Delta T)'\quad\overset{EA,\Delta T\text{ const}}{\Longrightarrow}\quad EAu''=-n.$$

:::rezept Randbedingungen
- Festes Lager bei $x_0$: $u(x_0)=0$.
- Kraft $F_0$ am freien Ende: $N(x_0)=F_0$, also $u'(x_0)=\frac{F_0}{EA}+\alpha_T\Delta T$.
- Unbelastetes Ende: $N=0$ ⇒ $u'(x_0)=\alpha_T\Delta T$.
- An Sprüngen (Einzelkraft, Querschnittssprung, Materialwechsel, Temperaturwechsel) **Bereiche bilden**; Übergangsbedingungen: $u$ stetig, $N$ springt um die Einzelkraft.
:::

:::bsp Stab unter Eigengewicht (Gross Kap. 1.4)
Homogener Stab (Masse $m$, Länge $l$, $EA$) hängt an der Decke. $x$ von oben. Normalkraft = Gewicht des Teils darunter: $N(x)=mg\frac{l-x}l$.
$$\Delta l=\int_0^l\frac{mg(l-x)}{lEA}\,\d x=\frac{mg\,l}{2EA}.$$
Halb so viel, wie wenn die ganze Masse unten hinge. Über die DGL: $EAu''=-n=-\frac{mg}l$, $u(0)=0$, $N(l)=0$ ⇒ $u(x)=\frac{mg}{EAl}(lx-\frac{x^2}2)$, $u(l)=\frac{mgl}{2EA}$ ✓.
:::

## Statisch bestimmte Stäbe und Stabsysteme

:::merke Erst prüfen: statisch bestimmt oder unbestimmt?
- **Statisch bestimmt:** Alle Stabkräfte folgen aus dem Gleichgewicht ⇒ nacheinander lösen: **(1) $N$ aus Gleichgewicht → (2) $\varepsilon$ bzw. $\Delta l$ → (3) Verschiebungen aus Geometrie.**
- Temperaturänderungen erzeugen hier **nur Verformungen, keine Spannungen**.
- **Statisch unbestimmt:** Gleichgewicht reicht nicht – Gleichungen müssen **gleichzeitig** gelöst werden (nächste Lektion).
:::

### Verschiebungsplan
Wie bewegt sich ein Knoten, an dem mehrere Stäbe hängen?

:::rezept Verschiebungsplan
1. Knoten gedanklich **auftrennen**.
2. Die Längenänderungen $\Delta l_i$ **vorzeichenrichtig** in Richtung der unverformten Stäbe am Knoten antragen.
3. Stäbe um ihren festen Endpunkt drehen – die Kreisbögen werden durch **Senkrechte (Tangenten)** auf die Stabrichtungen ersetzt (kleine Winkel!). Schnittpunkt = neue Knotenlage $P'$.
4. Geometrie ablesen. Rechnerisch gleichwertig: **Projektion** der Knotenverschiebung $\vec u$ auf die Stabrichtung $\vec e_i$ ergibt die Längenänderung: $\Delta l_i=\vec u\cdot\vec e_i$ ($\vec e_i$ zeigt vom festen Ende zum Knoten).
:::

:::bsp Zweischlag (Gross Kap. 1.5)
Stab 1 waagrecht (Länge $l$, von $A$ nach $C$), Stab 2 von $B$ (oberhalb $A$) schräg nach $C$ unter dem Winkel $\alpha$ zur Horizontalen; beide $EA$; in $C$ hängt $F$ nach unten.
**Gleichgewicht** in $C$: $S_2\sin\alpha=F$ ⇒ $S_2=\frac F{\sin\alpha}$ (Zug), $S_1=-S_2\cos\alpha=-F\cot\alpha$ (Druck).
**Längenänderungen:** $\Delta l_1=\frac{S_1l}{EA}=-\frac{Fl}{EA}\cot\alpha$, $\Delta l_2=\frac{S_2\,l/\cos\alpha}{EA}=\frac{Fl}{EA\sin\alpha\cos\alpha}$.
**Kinematik** ($u$ nach rechts, $v$ nach unten): $\Delta l_1=u$, $\Delta l_2=u\cos\alpha+v\sin\alpha$. Also
$$u=-\frac{Fl}{EA}\cot\alpha,\qquad v=\frac{\Delta l_2-u\cos\alpha}{\sin\alpha}=\frac{Fl}{EA}\,\frac{1+\cos^3\alpha}{\sin^2\alpha\cos\alpha}.$$
:::

## Aufgaben

:::aufgabe 1 (Übung 2, Aufgabe 5 – Lampe)
Starre Lampe (Höhe $h$, Masse $m$) an einem Kabel (Durchmesser $d$, $E$, Länge $l$) unter einer Decke der Höhe $H$. (a) Dehnung des Kabels, (b) freier Abstand $a$ zum Boden.
:::loesung
(a) $N=mg$, $A=\frac{\pi d^2}4$: $\varepsilon=\frac{4mg}{\pi Ed^2}$.
(b) $a=H-l(1+\varepsilon)-h=H-h-l-\frac{4mgl}{\pi Ed^2}$.
:::
:::

:::aufgabe 2 (Übung 2, Aufgabe 6 – Treppe)
Vier Stäbe auf Stufen, freie Enden anfangs auf gleicher Höhe. $l_1=\frac94l$ (Kraft $-F$, Erwärmung $\Delta T$), $l_2=2l$ (Kraft $F$), $l_3=\frac32l$ (Kraft $F$, Modul $E_3$), $l_4=l$ (Kraft $F_4$); sonst $A$, $E$, $\alpha_T$. (a) $\Delta l_2$; (b) $E_3$ so, dass $\Delta l_3=\Delta l_2$; (c) $F_4$ so, dass die verformten Längen von 2 und 4 gleich sind; (d) $\Delta T$, damit Stab 1 verformt die Länge $l_2$ hat.
:::loesung
(a) $\Delta l_2=\frac{2Fl}{EA}$.
(b) $\frac{F\cdot\frac32l}{E_3A}=\frac{2Fl}{EA}$ ⇒ $E_3=\frac34E$.
(c) $2l+\frac{2Fl}{EA}=l+\frac{F_4l}{EA}$ ⇒ $F_4=EA+2F$ (sehr groß – Stab 4 müsste um $l$ verlängert werden, was linear-elastisch unrealistisch ist; die Aufgabe übt die Formel).
(d) $\frac94l\left(1-\frac F{EA}+\alpha_T\Delta T\right)=2l$ ⇒ $\alpha_T\Delta T=\frac F{EA}-\frac19$ ⇒ $\Delta T=\frac1{\alpha_T}\left(\frac F{EA}-\frac19\right)$ (negativ: Abkühlung).
:::
:::

:::aufgabe 3 (Übung 2, Aufgabe 10 – aufgehängter Stab)
Stab (Länge $3a$, Masse $m$, $E_1A_1$) hängt im Punkt $B$ (Abstand $a$ vom oberen Ende $A$) an zwei symmetrischen Seilen (Länge $l$, $E_2A_2$, Winkel $\alpha$ zur Vertikalen). (a) $\Delta l_1$ des Stabes, (b) Absenkung des unteren Endes $C$.
:::loesung
Gewicht pro Länge $q=\frac{mg}{3a}$, $x$ von $A$ nach unten.
Oberhalb $B$ ($0<x<a$) wird der Stab gedrückt: $N=-qx$; unterhalb ($a<x<3a$) gezogen: $N=q(3a-x)$.
(a) $\Delta l_1=\frac1{E_1A_1}\left[-\frac{qa^2}2+\frac{q(2a)^2}2\right]=\frac{3qa^2}{2E_1A_1}=\frac{mga}{2E_1A_1}$.
(b) Seilkraft $2S\cos\alpha=mg$ ⇒ $S=\frac{mg}{2\cos\alpha}$, $\Delta l_S=\frac{Sl}{E_2A_2}$. $B$ senkt sich (Verschiebungsplan, symmetrisch) um $v_B=\frac{\Delta l_S}{\cos\alpha}=\frac{mgl}{2E_2A_2\cos^2\alpha}$.
Verlängerung von $BC$: $\frac{q(2a)^2}{2E_1A_1}=\frac{2mga}{3E_1A_1}$.
$$v_C=\frac{mgl}{2E_2A_2\cos^2\alpha}+\frac{2mga}{3E_1A_1}.$$
:::
:::

:::aufgabe 4
Ein Stahlstab ($E=210\,$GPa, $\alpha_T=1{,}2\cdot10^{-5}\,$K⁻¹, $l=2\,$m, $A=200\,$mm²) ist einseitig eingespannt, am anderen Ende frei, und trägt $F=30\,$kN Zug; zusätzlich wird er um 50 K erwärmt. $\Delta l$? Entstehen Wärmespannungen?
:::loesung
$\Delta l=\frac{30\,000\cdot2000}{210\,000\cdot200}+1{,}2\cdot10^{-5}\cdot50\cdot2000=1{,}43+1{,}2=2{,}63\,$mm. Keine Wärmespannung (statisch bestimmt, frei dehnbar); $\sigma=150\,$MPa nur aus $F$.
:::
:::

:::aufgabe 5
Stab mit zwei Abschnitten: $l_1=1\,$m, $A_1=400\,$mm² und $l_2=0{,}5\,$m, $A_2=200\,$mm² (Stahl), einseitig eingespannt; am freien Ende zieht $F=20\,$kN. Spannungen und $\Delta l$?
:::loesung
$\sigma_1=50\,$MPa, $\sigma_2=100\,$MPa. $\Delta l=\frac F E\left(\frac{l_1}{A_1}+\frac{l_2}{A_2}\right)=\frac{20\,000}{210\,000}(2{,}5+2{,}5)=0{,}48\,$mm.
:::
:::

## Karteikarten

:::karte
Elastizitätsgesetz des Stabes?
???
$u'=\frac{N}{EA}+\alpha_T\Delta T$
:::

:::karte
Längenänderung bei konstantem N, EA, ΔT?
???
$\Delta l=\frac{Nl}{EA}+\alpha_T\Delta T\,l$
:::

:::karte
DGL des Dehnstabs?
???
$(EAu')'=-n+(EA\alpha_T\Delta T)'$; bei konst. EA: $EAu''=-n$.
:::

:::karte
Prinzip von Saint-Venant?
???
Spannungsspitzen an Krafteinleitungen/Kerben klingen schnell ab; weiter weg gilt die gleichmäßige Verteilung.
:::

:::karte
Stab unter Eigengewicht: Δl?
???
$\Delta l=\frac{mgl}{2EA}$
:::

:::karte
Lösungsweg statisch bestimmt?
???
N aus Gleichgewicht → Δl aus Stoffgesetz → Verschiebungen aus Geometrie (Verschiebungsplan). ΔT erzeugt keine Spannungen.
:::

:::karte
Verschiebungsplan – Kernidee?
???
Längenänderung = Projektion der Knotenverschiebung auf die Stabrichtung; Kreisbögen durch Tangenten ersetzen.
:::
