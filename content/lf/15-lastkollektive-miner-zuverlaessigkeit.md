---
title: 15 Lebensdauerabschätzung II – Lastkollektive, Miner-Regel, Versagenswahrscheinlichkeit, Inspektion, Gestaltung
chapter: Kap. 10 Lebensdauerabschätzung
minutes: 120
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#116; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#119; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#121
---

:::ziel
- Aus einem Beanspruchungs-Zeit-Verlauf mit **Zählverfahren** (Rainflow/Bereichspaar-Mittelwert) ein **Lastkollektiv** gewinnen; Vor- und Nachteile von Häufigkeitsverteilungen nennen.
- **Einheitskollektive** ($H=H_0^{(1-x/x_{ref})^\nu}$) und Standardkollektive (TWIST, FALSTAFF …) kennen.
- Mit der **Palmgren-Miner-Regel** (original und modifiziert nach Haibach) die **Lebensdauer** berechnen.
- **Versagenswahrscheinlichkeit pro Stunde** und **MTBF** umrechnen; Reihen- und Parallelschaltung von Versagenspfaden.
- Das nötige **Inspektionsintervall** berechnen.
- **Maßnahmen zur Verbesserung der Schwingfestigkeit** aufzählen.
:::

## 1 Vom Messschrieb zum Kollektiv (Kap. 10.4)

Abb. 10.15 zeigt die Spannung an einem Dehnmessstreifen während eines Fluges: Rollen – Start – Steigflug – Reiseflug – Anflug – Landung – Rollen. Die **Grundbeanspruchung** ändert sich (z. B. 1g-Flug vs. Boden), darüber liegen Schwingungen (Böen, Manöver). Der Verlauf wird in **Abschnitte** geteilt und für jeden die **Häufigkeitsverteilung** der Beanspruchungsklassen ermittelt (mechanische Klassiergeräte: einparametrisch; elektronisch: ein- und zweiparametrisch).

:::merke Häufigkeitsverteilung – Vor- und Nachteile
**Nachteile:** Information über die Reihenfolge (wann welche Last) und die **Frequenz** geht verloren → eingeschränkte Interpretation.
**Vorteile:** einfach durch **Zählen und Klassieren** zu ermitteln; lässt sich gut **extrapolieren** (gemessen wird nur ein Bruchteil der Nutzungsdauer!); oft durch **Einheitskollektive** annäherbar.
:::

:::def Zweiparametrische Zählung – Rainflow / Bereichspaar-Mittelwert
Im Flugzeugbau üblich (einparametrische Verfahren mit 12–32 Klassen weniger). Jedes **Schwingspiel** wird mit **Mittelwert und Amplitude** erfasst – nur so kann man es mit dem Haigh-Diagramm bewerten.
Ablauf **Bereichspaar-Mittelwert-Zählung** (van Dijk; liefert dasselbe wie **Rainflow** nach Matsuishi/Endo): Verlauf auf **Umkehrpunkte** (Maxima/Minima) reduzieren → mit der kleinsten Bereichspaarklasse beginnen → passende Extremwertpaare (geschlossene Hysterese) suchen, **Mittelwert** bilden, in einer **Matrix** (Spalte = Mittelwertklasse, Zeile = Amplitudenklasse) um 1 hochzählen, die beiden Extrema **löschen** → nächste Amplitudenklasse … bis alles gezählt ist. Mit der Matrix und dem Haigh-Diagramm erhält man für jedes Feld $N_i$ und damit die Teilschädigung.
:::

:::bsp Rainflow von Hand
Umkehrpunkte (in 10 N/mm²): −3 – 5 – 2 – 4 – −3.
- Der kleine Zwischenzyklus **2 → 4 → (2)** ist von der großen Bewegung eingeschlossen: als **ein volles Spiel** zählen, Schwingbreite 2, also $\sigma_a=10$, $\sigma_m=30\,$N/mm²; die Punkte 2 und 4 löschen.
- Übrig bleibt −3 – 5 – −3: **ein großes Spiel**, Schwingbreite 8, also $\sigma_a=40$, $\sigma_m=10\,$N/mm².
Ergebnis: zwei Matrixeinträge. **Kleine Zyklen werden aus großen „herausgeschnitten"**, der große Zyklus bleibt in voller Höhe erhalten – das ist der Kern des Verfahrens (eine einfache Spitzenzählung würde den großen Zyklus zerstückeln und die Schädigung unterschätzen).
:::

## 2 Einheitskollektive (Kap. 10.4.2)

Zum Vergleich werden Kollektive auf **gleiche Gesamthäufigkeit** und einen **einheitlichen Beanspruchungsmaßstab** normiert (Gaßner): Der größte, **einmal** im Kollektiv auftretende Ausschlag $\bar x_a$ ist die Bezugsgröße.

:::formel Einheitskollektiv (Gl. 10.12)
$$H=H_0^{\left(1-\frac{x}{x_{ref}}\right)^\nu}$$
$H$ = Summen(überschreitungs)häufigkeit der Last $x$, $H_0$ = Bezugshäufigkeit (oft $10^6$), $\nu$ = **Formexponent**:
- $\nu=0{,}7$: **zufallsartige** Lasten (Böen, Fahrbahnunebenheiten) – viele mittlere Lasten,
- $\nu=4$: **gesteuerte** Lasten (Kunstflug, Manöver) – große Lasten häufig.
Oft gestuft dargestellt (Stufenhäufigkeiten aus Überschreitungshäufigkeiten).
:::

:::bsp
$H_0=10^6$, $x/x_{ref}=0{,}5$: für $\nu=2$: $H=10^{6\cdot0{,}25}=31{,}6$; für $\nu=0{,}7$: $0{,}5^{0{,}7}=0{,}616$ → $H=10^{3{,}69}\approx4900$. Beim Böenkollektiv wird die halbe Maximallast also viel häufiger überschritten.
:::

**Standardkollektive** (aus Messungen, durch Einheitskollektive annäherbar): **TWIST** (Transport WIng STandard), **FALSTAFF** (Fighter Aircraft Loading STAndard For Fatigue), **HELIX/FELIX** (Hubschrauber-Rotoren gelenkig/starr), **TURBISTAN** (Triebwerksscheiben), **ENSTAFF** (FVK-Bauteile).

## 3 Palmgren-Miner (Kap. 10.5)

:::formel Originale Miner-Regel (OM)
Annahmen: Schädigung wächst **linear** mit den Lastspielen; Teilschädigungen verschiedener Amplituden dürfen **addiert** werden; **Bruch (Anriss) bei $D=1$**.
$$D_i=\frac{n_i}{N_i},\qquad D=\sum\frac{n_i}{N_i},\qquad L=\frac tD$$
($t$ = Zeitspanne/Flüge des gezählten Kollektivs, $N_i$ aus Wöhlerlinie bzw. Haigh-Diagramm.) Amplituden **unterhalb der Dauerfestigkeit** schädigen bei OM **nicht**.
:::

:::formel Modifizierte Miner-Regel (MM, Haibach)
Unterhalb der Dauerfestigkeit (ab $2\cdot10^6$ Lastwechseln) wird die Wöhlerlinie mit flacherer Neigung fortgesetzt:
$$m^*=2m-1\ (\text{duktil}),\qquad m^*=2m-2\ (\text{spröde}).$$
Damit wird eine Schädigung von etwa **30 %** unterhalb der Dauerfestigkeit berücksichtigt – realistischer, weil die Dauerfestigkeit durch vorangehende große Lasten sinkt.
:::

:::bsp Lebensdauer eines Bauteils
Wöhlerlinie aus Lektion 14: $m=5{,}78$, $\sigma_D=100\,$N/mm², $N_D=2\cdot10^6$. Kollektiv **pro Flug**:
| Stufe | $\sigma_a$ | $n_i$ | $N_i$ | $D_i$ |
|---|---|---|---|---|
| 1 | 200 | 1 | 36 340 | $2{,}75\cdot10^{-5}$ |
| 2 | 160 | 10 | 132 050 | $7{,}57\cdot10^{-5}$ |
| 3 | 130 | 100 | 438 700 | $2{,}28\cdot10^{-4}$ |
| 4 | 80 | 1000 | (< $\sigma_D$) | 0 (OM) |
OM: $D=3{,}31\cdot10^{-4}$ pro Flug → $L=1/D=3020$ **Flüge**.
MM: $m^*=2\cdot5{,}78-1=10{,}56$ → $N_4=2\cdot10^6\cdot(100/80)^{10{,}56}=2{,}11\cdot10^7$, $D_4=4{,}7\cdot10^{-5}$ → $D=3{,}79\cdot10^{-4}$ → $L=2640$ Flüge (13 % weniger).
**Nachweis** für $L_d=1000$ Flüge mit $j_L=3$: $D(L_d)=0{,}379$, $RF_L=\frac1{3\cdot0{,}379}=0{,}88<1$ → **nicht** ausreichend – die Spannungen müssen sinken (z. B. 5 % weniger → $L$ steigt um ca. 35 %).
:::

:::achtung Grenzen
Miner ignoriert die **Reihenfolge** der Lasten (große Last zuerst kann durch Eigenspannungen sogar nützen). Der **Miner-Faktor** $D_{br}$ = Versuchswert/Rechenwert zeigt, dass die tatsächliche Schadenssumme beim Bruch oft deutlich von 1 abweicht.
:::

## 4 Versagens- und Überlebenswahrscheinlichkeit (Kap. 10.6)

CS 23.1309 / CS 25.1309 verlangen eine Aussage über die **Versagenswahrscheinlichkeit pro Flugstunde** (Nachweis z. B. nach AC 23-1309-1E: je nach Schwere *minor … catastrophic* und Flugzeugklasse SRE/MRE/STE/MTE). Eine Miner-Lebensdauer mit $P_Ü=50\,\%$ sagt aber nur: Bis $L$ ist **jedes zweite** Teil gebrochen.

:::formel Umrechnung (Gl. 10.16–10.19)
Bei konstanter Ausfallrate $p$ (pro Stunde):
$$p(t)=1-e^{-p\,t}\ \Rightarrow\ p=-\frac1t\ln\bigl(1-p(t)\bigr),\qquad T_m=\text{MTBF}=\frac1p.$$
Für $p\,t<0{,}1$ (Fehler < 0,5 %): $p(t)\approx p\,t$, also $p\approx\frac{p(t)}t$ und $T_m\approx\frac t{p(t)}$.
:::

:::bsp
Bis $t=20\,000\,$h sind 50 % gebrochen ($p(t)=0{,}5$): $p=-\frac{\ln0{,}5}{20\,000}=3{,}47\cdot10^{-5}\,$/h (MTBF 28 850 h). Die Näherung $0{,}5/20\,000=2{,}5\cdot10^{-5}$ wäre hier **falsch**, weil $p\,t=0{,}69>0{,}1$.
:::

:::formel Versagenskanäle
**Reihenschaltung (OR):** jedes Einzelversagen führt zum Versagen der nächsthöheren Ebene:
$$p=p_A+p_B+p_C+\dots=\sum p_i$$
– je mehr Glieder, desto **höher** die Versagenswahrscheinlichkeit; Inspektionen helfen nicht.
**Parallelschaltung (AND):** alle müssen versagen:
$$p=p_A\cdot p_B\cdot p_C\cdots=\prod p_i$$
– **kleiner**; so wirken z. B. **Inspektionen** als zusätzlicher „Versagenspfad".
:::

:::formel Inspektionsintervall (Gl. 10.22–10.23)
$p$ = stündliche Versagenswahrscheinlichkeit des Bauteils, $p_U$ = **Übersehenswahrscheinlichkeit** einer Inspektion, $t_V$ = Zeit vom **entdeckbaren Schaden bis zum Versagen** (aus Rissfortschritt), $t_I$ = Inspektionsintervall, $n_i=t_V/t_I$ Inspektionen in dieser Zeit:
$$p_{ges}=p\cdot p_U^{\,n_i}\le p_{gef}\ \Rightarrow\ n_i=\frac{\ln(p_{gef}/p)}{\ln p_U},\qquad t_I=\frac{t_V}{n_i}=\frac{t_V\ln p_U}{\ln(p_{gef}/p)}.$$
:::

:::bsp Inspektionsintervall
$p=10^{-5}\,$/h, gefordert $p_{gef}=10^{-9}\,$/h, $p_U=0{,}1$ (90 % Entdeckungswahrscheinlichkeit), $t_V=3000\,$h.
$n_i=\frac{\ln10^{-4}}{\ln0{,}1}=4$ → $t_I=\frac{3000}4=750\,$h. Man muss also **vier Chancen** haben, den Riss zu finden, bevor er kritisch wird.
:::

## 5 Maßnahmen zur Verbesserung der Schwingfestigkeit (Kap. 10.7)

:::merke Checkliste
- **Spannungsspitzen vermeiden** → große Radien (Tür- und Fensterecken!), Biegeradien, keine scharfkantigen Werkzeuge.
- **Faserverlauf** bei Schmiedeteilen: Belastung in **L** besser als **LT**, LT besser als **ST**.
- **Steifigkeitssprünge** vermeiden: Übergänge abschrägen/abstufen, Stöße allmählich auslaufen lassen.
- **Keine Bohrungen** an hochbeanspruchten Stellen; ggf. **Pressbolzen** (Vorspannung).
- Keine scharfen Kanten an Bolzenauflagen; Senkungen **abrunden, entgraten**; Gewindeausläufe sorgfältig.
- **Verspannungen** durch Fehlmontage vermeiden; **Reibkorrosion** verhindern.
- **Exzentrizitäten** vermeiden → **zweischnittig statt einschnittig**.
- **Presspassungen** (auf Spannungsrisskorrosion achten).
- Zerspanteile: Bearbeitungsriefen **parallel zur Last**, glatte Oberflächen, **Kugelstrahlen** (Druckeigenspannungen).
- **Schallermüdung** beachten (Triebwerksnähe).
- Werkstoff und Wärmebehandlung passend wählen – ggf. etwas statische Festigkeit opfern.
- **Spannungsniveau senken**.
- **Fail-Safe**-Konstruktionen.
- **Bruchmechanik**: zulässige Riss-/Schadensgrößen und Restlebensdauer berechnen (Damage Tolerance).
:::

## Übungsaufgaben

:::aufgabe 1
Ein Bauteil erfährt pro Flug 2 Lastspiele mit $N=5\cdot10^4$ und 50 Lastspiele mit $N=10^6$. Wie viele Flüge erträgt es nach Miner? Wie groß ist $RF_L$ für $L_d=5000$ Flüge und $j_L=4$?
:::loesung
$D=\frac2{5\cdot10^4}+\frac{50}{10^6}=4\cdot10^{-5}+5\cdot10^{-5}=9\cdot10^{-5}$ → $L=11\,111$ Flüge. $D(L_d)=0{,}45$ → $RF_L=\frac1{4\cdot0{,}45}=0{,}56<1$ – nicht ausreichend.
:::
:::

:::aufgabe 2
Drei Komponenten mit $p_A=2\cdot10^{-6}$, $p_B=5\cdot10^{-7}$, $p_C=10^{-6}$ pro Stunde. (a) In Reihe (jede allein führt zum Ausfall)? (b) Redundant parallel?
:::loesung
(a) $p=3{,}5\cdot10^{-6}\,$/h. (b) $p=2\cdot10^{-6}\cdot5\cdot10^{-7}\cdot10^{-6}=10^{-18}\,$/h (unter der Annahme unabhängiger Ausfälle).
:::
:::

:::aufgabe 3
Im Inspektionsbeispiel wird ein besseres Prüfverfahren mit $p_U=0{,}02$ eingesetzt. Neues Intervall?
:::loesung
$n_i=\frac{\ln10^{-4}}{\ln0{,}02}=\frac{-9{,}21}{-3{,}91}=2{,}35$ → $t_I=3000/2{,}35=1274\,$h (mindestens alle ca. 1270 h prüfen).
:::
:::

:::aufgabe 4
Warum werden Fensterausschnitte in Druckkabinen stark gerundet? (Stichwort Comet.)
:::loesung
Eckige Ausschnitte erzeugen hohe **Kerbspannungen** ($\alpha_k$ groß); bei jedem Druckzyklus (ein Lastspiel pro Flug) wächst dort ein Ermüdungsriss. Die De Havilland Comet ging in den 1950ern genau daran verloren – große Radien senken $\alpha_k$ und damit $\sigma_{max}$ deutlich.
:::
:::

## Karteikarten

:::karte
Vor-/Nachteil einer Häufigkeitsverteilung (Kollektiv)?
???
Nachteil: Reihenfolge und Frequenz gehen verloren. Vorteil: einfach zu zählen, gut extrapolierbar, durch Einheitskollektive annäherbar.
:::

:::karte
Rainflow / Bereichspaar-Mittelwert-Zählung?
???
Zweiparametrisch: jedes geschlossene Schwingspiel mit Mittelwert und Amplitude in eine Matrix zählen; kleine Zyklen werden aus großen herausgeschnitten.
:::

:::karte
Einheitskollektiv?
???
$H=H_0^{(1-x/x_{ref})^\nu}$; $\nu=0{,}7$ zufallsartig (Böen), $\nu=4$ gesteuert (Manöver).
:::

:::karte
TWIST und FALSTAFF?
???
Standard-Lastkollektive: Transport-Flügel bzw. Kampfflugzeug (weitere: HELIX/FELIX, TURBISTAN, ENSTAFF).
:::

:::karte
Miner-Regel?
???
$D=\sum n_i/N_i$, Bruch bei $D=1$, $L=t/D$; OM: unter $\sigma_D$ keine Schädigung.
:::

:::karte
Modifizierte Miner-Regel (Haibach)?
???
Wöhlerlinie unter der Dauerfestigkeit mit $2m-1$ (duktil) bzw. $2m-2$ (spröde) fortsetzen → ca. 30 % Schädigung unter $\sigma_D$.
:::

:::karte
Versagenswahrscheinlichkeit pro Stunde aus $p(t)$?
???
$p=-\frac1t\ln(1-p(t))$; Näherung $p\approx p(t)/t$ nur für $pt<0{,}1$; MTBF $=1/p$.
:::

:::karte
Reihen- vs. Parallelschaltung von Versagenspfaden?
???
Reihe (OR): $p=\sum p_i$; parallel (AND): $p=\prod p_i$ (z. B. Inspektion als zusätzlicher Pfad).
:::

:::karte
Inspektionsintervall?
???
$t_I=\frac{t_V\ln p_U}{\ln(p_{gef}/p)}$, aus $p\,p_U^{n_i}\le p_{gef}$, $n_i=t_V/t_I$.
:::

:::karte
Fünf Maßnahmen für bessere Schwingfestigkeit?
???
Große Radien, keine Steifigkeitssprünge, zweischnittig statt einschnittig, Kugelstrahlen/glatte Oberflächen, Faserverlauf in L, Spannungsniveau senken, Fail-Safe.
:::
