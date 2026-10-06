---
title: 5.1 Elektromagnetische Induktion I – Induktionsgesetz, Lenzsche Regel, Wirbelfeld
chapter: 5 Elektromagnetische Induktion
minutes: 100
sources: Elektrotechnik/Elektrotechnik - 5.1 Induktion I.pdf
---

:::ziel
- Induktion durch Bewegung (Lorentzkraft) herleiten: $U=Blv$.
- **Induktionsgesetz** $U=-N\frac{\d\Phi}{\d t}$; Bewegungs- und Ruheinduktion.
- **Lenzsche Regel** als Energieerhaltung.
- Induziertes elektrisches **Wirbelfeld** – Induktionsspannung ist keine Potentialdifferenz; Maxwell-Gleichungen in Integralform.
- $u(t)$ aus $\Phi(t)$ skizzieren.
:::

## Grundprinzip

Sobald sich Felder **zeitlich ändern**, koppeln elektrische und magnetische Felder: **Eine zeitliche Änderung des magnetischen Flusses erzeugt (induziert) eine Spannung.** Der Fluss kann sich ändern, weil sich das **Feld** ändert oder weil sich der **Leiter bewegt**.

Anwendungen: Generatoren, Transformatoren, Elektromotoren/Rekuperation, induktives Laden, induktive Näherungsschalter, Induktionsherd, **Wirbelstrombremse**.

## Bewegter Leiter im Magnetfeld

Ein Leiterstück der Länge $l$ bewegt sich mit $\vec v$ durch $\vec B$. Auf die Ladungen wirkt die Lorentzkraft $\vec F_m=q(\vec v\times\vec B)$; sie verschiebt Ladungen, bis das entstehende elektrische Feld sie kompensiert: $q\vec E+q\vec v\times\vec B=\vec0\Rightarrow\vec E=-\vec v\times\vec B$. Die Spannung an den Enden:
$$U_{ind}=-(\vec v\times\vec B)\cdot\vec l,\qquad\text{bei }\vec v,\vec B,\vec l\text{ paarweise senkrecht: }U_{ind}=-Blv=-B\frac{\d A}{\d t}.$$
($l\,v\,\d t$ ist die pro Zeit überstrichene Fläche.)

## Das Induktionsgesetz

:::satz Faradaysches Induktionsgesetz
$$U_{ind}=-\frac{\d\Phi}{\d t},\qquad\text{mit }N\text{ Windungen: }U_{ind}=-N\frac{\d\Phi}{\d t}.$$
Mit $\Phi=BA$ (homogen):
$$U=-\frac{\d(BA)}{\d t}=-\underbrace{\frac{\d B}{\d t}A}_{\text{Ruheinduktion}}-\underbrace{\frac{\d A}{\d t}B}_{\text{Bewegungsinduktion}}.$$
:::

- **Bewegungsinduktion**: Leiter und Feld bewegen sich relativ zueinander (Generator).
- **Ruheinduktion**: Fluss ändert sich bei ruhendem Leiter (Transformator).

Schließt man die Leiterenden über einen (ruhenden) Widerstand $R$, fließt der **induzierte Strom** $I=\frac UR=-\frac1R\frac{\d\Phi}{\d t}$.

:::satz Lenzsche Regel
Die induzierte Spannung ist stets so gerichtet, dass der durch sie hervorgerufene Strom **seiner Ursache entgegenwirkt**.
:::
Grund: **Energieerhaltung** – die im Widerstand umgesetzte Wärme stammt aus der mechanischen Arbeit, die man gegen die bremsende Kraft auf den induzierten Strom aufbringen muss. (Wirbelstrombremse: Bremskraft ohne Verschleiß.)

## Induziertes elektrisches Wirbelfeld

:::achtung Induktionsspannung ist keine Potentialdifferenz!
Ein zeitlich veränderliches Magnetfeld erzeugt ein elektrisches **Wirbelfeld** mit geschlossenen Feldlinien. Es ist **nicht konservativ**, es gibt kein Potential:
$$U_{ind}=\oint\vec E_{ind}\cdot\d\vec s=-\frac{\d\Phi}{\d t}=-\frac{\d}{\d t}\int_A\vec B\cdot\d\vec A\ne0.$$
Vergleich Elektrostatik: $\oint\vec E\cdot\d\vec s=0$ (wirbelfrei).
:::

### Die Integralgleichungen der Elektrodynamik (Maxwell)

| Größe | Elektro-/Magnetostatik | Elektrodynamik |
|---|---|---|
| $\vec D$ | $\oint\vec D\cdot\d\vec A=Q$ | $\oint\vec D\cdot\d\vec A=Q$ |
| $\vec E$ | $\oint\vec E\cdot\d\vec s=0$ | $\oint\vec E\cdot\d\vec s=-\frac{\d\Phi}{\d t}$ (Induktionsgesetz) |
| $\vec B$ | $\oint\vec B\cdot\d\vec A=0$ | $\oint\vec B\cdot\d\vec A=0$ |
| $\vec H$ | $\oint\vec H\cdot\d\vec s=I$ | $\oint\vec H\cdot\d\vec s=I+\frac{\d\Psi}{\d t}$ (Verschiebungsstrom, hier nicht behandelt) |

(Mathe 2 Vektoranalysis: Maxwell in Differentialform → Wellengleichung!)

## Beispiel: Leiterschleife durch begrenztes Feld

Eine rechteckige Schleife fährt mit konstanter Geschwindigkeit durch ein homogenes, räumlich begrenztes Feld:
1. **Eintreten:** Fluss nimmt linear zu ⇒ konstante Induktionsspannung.
2. **Ganz im Feld:** Fluss konstant ⇒ **keine** Induktion.
3. **Austreten:** Fluss nimmt ab ⇒ Spannung mit umgekehrtem Vorzeichen.

:::merke Skizzen-Regel
$u(t)$ ist die **(negative) Steigung** von $\Phi(t)$: linearer Flussanstieg ⇒ konstante Spannung; konstanter Fluss ⇒ $u=0$; Knicke in $\Phi$ ⇒ Sprünge in $u$.
:::

## Aufgabe 14 der Folien

:::aufgabe 1
Im Luftspalt eines Ferritkerns ($A_1=4\,$cm²) sitzt eine Messspule ($N_2=10$, $A_2=1\,$cm²). Feld durch feste Spule $N_1=2000$, $R_{m,ges}=10^7\,$H⁻¹. Ab $t=0$ wird die Messspule mit konstanter Geschwindigkeit herausgezogen, nach 0,1 s ist sie draußen.
(a) $\Phi_2(t)$ und $u(t)$ qualitativ? (b) Welcher Fluss $\Phi_2$ ergibt $U_{ind}=10\,$mV? (c) $B$ im Spalt, $\Phi_1$? (d) Strom $I$ der festen Spule?
:::loesung
(a) $\Phi_2$ fällt in 0,1 s linear von $\Phi_2$ auf 0, sonst konstant; $u(t)$ ist während des Herausziehens konstant (Rechteck), sonst 0.
(b) $|U|=N_2\frac{\Phi_2}{\Delta t}\Rightarrow\Phi_2=\frac{0{,}01\cdot0{,}1}{10}=10^{-4}\,$Wb.
(c) $B=\frac{\Phi_2}{A_2}=\frac{10^{-4}}{10^{-4}}=1\,$T; $\Phi_1=BA_1=4\cdot10^{-4}\,$Wb.
(d) $\Theta=R_m\Phi_1=4000\,$A ⇒ $I=\frac{4000}{2000}=2\,$A.
:::
:::

:::aufgabe 2
Ein Stab ($l=0{,}5\,$m) gleitet mit $v=4\,$m/s auf Schienen senkrecht zu $B=0{,}2\,$T; die Schienen sind über $R=2\,\Omega$ verbunden. $U$, $I$, Bremskraft, Leistung?
:::loesung
$U=Blv=0{,}4\,$V, $I=0{,}2\,$A, $F=IlB=0{,}02\,$N (bremsend, Lenz), $P=Fv=0{,}08\,$W $=I^2R$ ✓ (Energieerhaltung).
:::
:::

## Karteikarten

:::karte
Induktionsgesetz?
???
$U_{ind}=-N\frac{\d\Phi}{\d t}$
:::

:::karte
Lenzsche Regel?
???
Der induzierte Strom wirkt seiner Ursache entgegen (Energieerhaltung).
:::

:::karte
Bewegungsinduktion am geraden Leiter?
???
$U=Blv$ (bei senkrechter Anordnung).
:::

:::karte
Ist die Induktionsspannung eine Potentialdifferenz?
???
Nein – das induzierte E-Feld ist ein Wirbelfeld, $\oint\vec E\cdot\d\vec s=-\dot\Phi\ne0$.
:::
