---
title: 2 Versagenskriterien, Lastdefinitionen und Verbindungselemente
chapter: Kap. 4–5 Lasten & Verbindungen
minutes: 90
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#20; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#23
---

:::ziel
- Die Auslegungsphilosophien **Fail Safe**, **Safe Life** und **Crash Resistant** erklären und Beispiele nennen.
- **Sichere Last** $P_S$, **Sicherheitsfaktor** $j$, **Bruchlast** $P_B$ und **Versagenslast** $P_V$ unterscheiden.
- Den **Reservefaktor** $RF$ in beiden Definitionen und die **Margin of Safety** berechnen.
- **Lastvielfache** $n$, $n_S$, $n_B$ und den **Stoßfaktor** $e$ kennen.
- Bauweisen und die grundlegenden **Anforderungen an Verbindungselemente** nennen; lösbare und nicht lösbare Verbindungen unterscheiden.
:::

Alle folgenden Rechenkapitel (Niete, Bolzen, Augen, Schrauben) enden mit einem **Festigkeitsnachweis**: Man vergleicht, was ein Bauteil **ertragen** kann, mit dem, was es **ertragen muss**. Die Sprache dafür – Lasten, Sicherheitsfaktor, Reservefaktor – lernst du hier. Die Definitionen stammen überwiegend aus dem **LTH, BM 14 110-01**.

## 1 Versagensphilosophien

:::def Fail Safe – sicheres Versagen („statisch überbestimmt")
Versagt ein Teil, übernehmen **andere Teile** dessen Aufgabe, sodass keine Katastrophe entsteht. Es gibt also **redundante Lastpfade**.
Beispiele: **mehrmotoriges Flugzeug** (Ausfall eines Triebwerks = *hazardous*, erst der zweite Ausfall wäre *catastrophic*), **Nietfeld** (versagt ein Niet, tragen die anderen mit – bei nur **einem** Bolzen würde das Bauteil komplett versagen), **Rissstopper**, **mehrschnittige Augenverbindung**.
:::

:::def Safe Life („statisch bestimmt")
Es gibt **kein** Ersatzteil, das bei Ausfall die Aufgabe übernimmt. Ausgelegt wird auf „sicheres Überleben" einer festgelegten Lebensdauer; die Teile haben daher meist eine **Lebensdauerbegrenzung** (Betriebsstunden und/oder Kalenderzeit).
Beispiele: **einmotoriges Flugzeug**, **Strebenbefestigungsbolzen** der Cessna-100/200-Serie, **Propellerblatt**, **Ruderbetätigung**.
:::

:::def Crash Resistant
Auslegung so, dass die **Insassen einen Crash überleben** – z. B. durch Zonen, die durch Verformung Energie aufnehmen. Gedacht ist weniger an den Absturz als an **Unfälle beim Rollen**.
:::

## 2 Lasten

**Belastung** im weiten Sinn: alles, was den Festigkeitsverband zerstören kann (Kräfte, Momente, Temperatur, Temperatursprung, UV-Strahlung, Strahllärm …). **Last** im engeren Sinn: die **von außen** auf ein Bauteil wirkenden **Kräfte und Momente**.

:::def Die vier Lastbegriffe
- **Sichere Last** $P_S$ (*limit load*): die **höchste unter normalen Betriebsbedingungen zu erwartende** Last. Bis $P_S$ dürfen Verformungen den sicheren Betrieb nicht beeinträchtigen. (Nicht verwechseln mit der „zulässigen Last" eines Kugellagers o. Ä.!)
- **Sicherheitsfaktor** $j$ (*factor of safety*): durch die Bauvorschrift festgelegt, meist $j=1{,}5$. Deckt ab: höhere Lasten als erwartet, Unsicherheiten in Rechnung und Versuch, **Streuung** der Werkstoffwerte und Fertigung, Festigkeitsverlust durch kleine Schäden im Betrieb.
- **Bemessungs-Bruchlast** $P_B$ (*ultimate load*): $\boxed{P_B=j\cdot P_S}$. Bei $P_B$ darf die statische Tragfähigkeit gerade erschöpft sein.
- **Versagenslast** $P_V$ (*failure load*): Last, bei der die Tragfähigkeit **tatsächlich** erschöpft ist – entweder **berechnet** ($P_{Vr}$) oder im **Versuch** ermittelt ($P_{Ve}$: die Last, die das Bauteil eine festgelegte Zeit, z. B. 3 s, gerade noch erträgt).
:::

:::formel Reservefaktor und Margin of Safety
**LTH-Definition** (Bezug auf die Bruchlast):
$$RF_{P_B}=\frac{P_V}{P_B}=\frac{P_V}{j\cdot P_S}\qquad\text{Forderung: }RF_{P_B}\ge 1.$$
**Bezug auf die sichere Last** (praktisch, wenn im Lastpfad verschiedene $j$ gelten):
$$RF_{P_S}=\frac{P_V}{P_S}\qquad\text{Forderung: }RF_{P_S}\ge j.$$
**Margin of Safety** (anglo-amerikanisch):
$$MS=RF-1\qquad(\text{Forderung } MS\ge 0).$$
:::

:::achtung
Bei jedem Reservefaktor **immer den Bezug angeben** ($RF_{P_B}$ oder $RF_{P_S}$)! $RF_{P_S}=1{,}2$ wäre bei $j=1{,}5$ **nicht** ausreichend, $RF_{P_B}=1{,}2$ dagegen schon.
:::

## 3 Lastvielfache und Stoßfaktor

:::def Lastvielfaches $n$ (load factor)
Dimensionsloses Verhältnis einer resultierenden Last $P$ zum Gewicht $G=m\,g_e$ des Körpers:
$$n=\pm\frac{P}{G},\qquad g_e=9{,}80665\ \tfrac{\text m}{\text s^2}\ (\text{Normfallbeschleunigung, exakt}).$$
$P$ ist entweder die Summe aller **Massenkräfte** ($+$) oder die Summe aller **Oberflächenkräfte** (alle Kräfte außer der Schwerkraft, z. B. Auftrieb) mit **negativem** Vorzeichen. Streng genommen ist $\vec n$ ein **Vektor**: $\vec n=+\frac{\vec P_M}{m|g_e|}=-\frac{\vec P_O}{m|g_e|}$.
:::

Anschaulich: Im Horizontalflug trägt der Auftrieb genau das Gewicht → $|n|=1$. In einer Kurve oder beim Abfangen ist der Auftrieb größer → $n>1$ („der Pilot spürt das $n$-fache Gewicht").

:::formel Sicheres und Bruch-Lastvielfaches
$$n_S=\pm\frac{P_S}{G}\quad(\text{limit load factor}),\qquad n_B=\pm\frac{P_B}{G}=n_S\cdot j\quad(\text{ultimate load factor}).$$
:::

:::def Stoßfaktor $e$ (ground reaction factor)
Verhältnis einer einwirkenden Kraft zur lotrechten **statischen Bodenlast** eines Aufstandspunktes: $\vec e=-\dfrac{\vec P}{P_{St}}$. Auslegungsparameter vor allem für **Fahrwerke**. Steht **nicht** in eindeutiger Beziehung zur Beschleunigung und darf nicht mit dem Lastvielfachen verwechselt werden.
:::

:::bsp Lasten an einem Flügelanschluss
Flugzeug $m=1000\,$kg, sicheres Lastvielfaches $n_S=3{,}8$ (typisch CS-23 Normalkategorie), $j=1{,}5$. Ein Anschlussbeschlag muss die gesamte Last aufnehmen (vereinfacht).
- Sichere Last: $P_S=n_S\,m\,g_e=3{,}8\cdot1000\cdot9{,}80665=37\,265\,$N.
- Bruchlast: $P_B=j\,P_S=55\,898\,$N, $n_B=5{,}7$.
- Ein Versuch ergibt $P_V=60\,000\,$N. Dann $RF_{P_B}=\frac{60\,000}{55\,898}=1{,}07\ge1$ ✓, $MS=0{,}07$; und $RF_{P_S}=\frac{60\,000}{37\,265}=1{,}61\ge j=1{,}5$ ✓ (beide Aussagen sind gleichwertig).
:::

## 4 Einführung in die Verbindungselemente (Skript Kap. 5)

**Bauweisen** im Flugzeugbau:
- **Differentialbauweise** – viele Einzelteile (Bleche, Stringer, Spanten), verbunden durch Niete/Schrauben;
- **Integralbauweise** – große, aus dem Vollen gefräste oder geschmiedete Teile (weniger, aber immer noch viele Verbindungen);
- **Verbundbauweise** (Faserverbund) – erst sie reduziert die Zahl der Verbindungselemente deutlich.

:::info Wie viele Verbindungselemente hat ein Flugzeug?
Boeing 747: ca. **2,5 Millionen** Verbindungselemente, davon ca. 70 000 Taper-Lok-Bolzen, ca. 400 000 Hi-Loks/Hi-Shears und ca. 30 000 Blindniete. Folge: **hoher Gewichts- und Kostenanteil** (Teile- und Einbaukosten) – und ein Versagen kann zur Katastrophe führen.
:::

:::merke Anforderungen an Verbindungselemente
**Geringes Gewicht, günstige Teilekosten, einfache und billige Montage, hohe statische und dynamische Festigkeit.**
Der Konstrukteur muss wissen, was **am Markt verfügbar** ist und wie sich die Elemente in **Festigkeit, Gewicht, Einbau, Montage, Werkzeugbedarf, Güte, Verfügbarkeit und Kosten** unterscheiden. Im Flugzeugbau dürfen nur **luftfahrtgeprüfte** Verbindungselemente verwendet werden. Typisch: Scherverbindungen mit **Passbolzen**.
:::

:::formel Verbindungsarten (Tab. 5.1)
| **lösbar** | **nicht lösbar** |
|---|---|
| Schraubverbindungen | Nietverbindungen |
| Verschlüsse | Schweißverbindungen |
| | Kleben |
| | Löten |
:::

## Übungsaufgaben

:::aufgabe 1
Ordne zu (Fail Safe / Safe Life): (a) zweimotoriges Verkehrsflugzeug, (b) Hauptfahrwerksbolzen ohne Redundanz, (c) Stringer mit Rissstopper-Doppler, (d) Hubschrauber-Rotorblattanschluss mit einem Bolzen, (e) dreischnittige Augenverbindung.
:::loesung
(a) Fail Safe, (b) Safe Life (Lebensdauerbegrenzung nötig), (c) Fail Safe, (d) Safe Life, (e) Fail Safe.
:::
:::

:::aufgabe 2
Ein Beschlag hat die sichere Last $P_S=12\,$kN, $j=1{,}5$. Die berechnete Versagenslast ist $P_V=19\,$kN. Bestimme $P_B$, $RF_{P_B}$, $RF_{P_S}$ und $MS$. Ist der Nachweis erbracht?
:::loesung
$P_B=18\,$kN. $RF_{P_B}=19/18=1{,}056\ge1$ ✓. $RF_{P_S}=19/12=1{,}583\ge1{,}5$ ✓. $MS=0{,}056$. Nachweis erbracht (knapp).
:::
:::

:::aufgabe 3
Ein Kunstflugzeug ($m=750\,$kg) ist für $n_S=6$ ausgelegt, $j=1{,}5$. Welche Bruchlast muss die Flügelstruktur insgesamt tragen? Welches $n_B$?
:::loesung
$n_B=6\cdot1{,}5=9$. $P_B=n_B\,m\,g_e=9\cdot750\cdot9{,}80665=66\,195\,$N ≈ 66,2 kN.
:::
:::

:::aufgabe 4
Warum darf man den Stoßfaktor $e$ eines Fahrwerks nicht einfach als Lastvielfaches verwenden?
:::loesung
$e$ bezieht eine Fahrwerkskraft auf die **statische Bodenlast** eines Aufstandspunktes, nicht auf das Gewicht des Gesamtkörpers; er hängt von Federung/Dämpfung und Lastverteilung ab und steht nicht in eindeutiger Beziehung zur Beschleunigung des Flugzeugs.
:::
:::

## Karteikarten

:::karte
Fail Safe – Prinzip und Beispiele?
???
Redundante Lastpfade: versagt ein Teil, übernehmen andere (statisch überbestimmt). Mehrmotorige Flugzeuge, Nietfeld, Rissstopper, mehrschnittige Augen.
:::

:::karte
Safe Life – Prinzip und Beispiele?
???
Kein Ersatzlastpfad (statisch bestimmt); Auslegung auf sichere Lebensdauer, daher Lebensdauerbegrenzung. Einmotorige Flugzeuge, Propellerblatt, Ruderbetätigung.
:::

:::karte
Crash Resistant?
???
Auslegung so, dass Insassen einen Crash (v. a. Rollunfälle) überleben, z. B. durch energieaufnehmende Verformungszonen.
:::

:::karte
Sichere Last $P_S$?
???
Höchste unter normalen Betriebsbedingungen zu erwartende Last (limit load); bis dahin keine betriebsgefährdenden Verformungen.
:::

:::karte
Bruchlast $P_B$?
???
$P_B=j\cdot P_S$ (ultimate load), meist $j=1{,}5$; dort darf die Tragfähigkeit gerade erschöpft sein.
:::

:::karte
Reservefaktor – beide Definitionen?
???
$RF_{P_B}=\frac{P_V}{P_B}\ge1$ (LTH) bzw. $RF_{P_S}=\frac{P_V}{P_S}\ge j$. Bezug immer angeben!
:::

:::karte
Margin of Safety?
???
$MS=RF-1$, Forderung $MS\ge0$.
:::

:::karte
Was deckt der Sicherheitsfaktor ab?
???
Höhere Lasten als erwartet, Rechen- und Versuchsunsicherheiten, Streuung von Werkstoff und Fertigung, Festigkeitsverlust durch kleine Schäden im Betrieb.
:::

:::karte
Lastvielfaches $n$?
???
$n=\pm P/G$: resultierende Massenkräfte (+) bzw. Oberflächenkräfte (−) bezogen auf das Gewicht; $n_B=j\,n_S$.
:::

:::karte
Stoßfaktor $e$?
???
Verhältnis einer Kraft zur statischen Bodenlast eines Aufstandspunktes; Fahrwerksauslegung; kein Lastvielfaches.
:::

:::karte
Drei Bauweisen im Flugzeugbau?
???
Differentialbauweise, Integralbauweise, Verbundbauweise (Letztere reduziert die Zahl der Verbindungselemente am stärksten).
:::

:::karte
Lösbare vs. nicht lösbare Verbindungen?
???
Lösbar: Schrauben, Verschlüsse. Nicht lösbar: Nieten, Schweißen, Kleben, Löten.
:::
