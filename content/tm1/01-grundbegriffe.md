---
title: §1 Grundbegriffe – Kraft, starrer Körper, Schnittprinzip, Wechselwirkung
chapter: §1 Grundbegriffe
minutes: 75
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#16; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#1
---

:::ziel
- Einordnung: Was ist Statik, was Elastostatik, Kinetik?
- Den Begriff **Kraft** als gebundenen Vektor verstehen; Einheit Newton.
- Modell **starrer Körper**: Kräfte sind linienflüchtig.
- Kräfte einteilen (Volumen/Flächen, eingeprägt/Reaktion, äußere/innere).
- **Schnittprinzip** und **Freikörperbild** – das wichtigste Werkzeug der ganzen Mechanik.
- **Wechselwirkungsgesetz** (actio = reactio).
:::

## Einordnung der Mechanik

| Teilgebiet | Inhalt |
|---|---|
| **Kinematik** | Beschreibung von Bewegungen (Ort, Geschwindigkeit, Beschleunigung) – ohne nach Ursachen zu fragen |
| **Dynamik** | Kräfte und ihre Wirkungen; unterteilt in **Statik** und **Kinetik** |
| **Kinetik** | Bewegungen unter der Wirkung von Kräften: $\sum\vec F_i=m\vec a$ (2. Newtonsches Axiom) |
| **Statik** | Gleichgewicht der Kräfte an ruhenden (oder gleichförmig bewegten) Körpern: $\vec a=\vec0\Rightarrow\sum\vec F_i=\vec0$ |

Studienablauf: **TM 1** (Statik starrer Körper), **TM 2** (Elastostatik: Verformungen, Spannungen, Festigkeit), **TM 3** (Kinetik). Standardlehrbuch: Gross/Hauger/Schröder/Wall, *Technische Mechanik 1–3* (liegt als PDF im TM-1-Ordner).

## Modellbildung

Reale Vorgänge hängen von unendlich vielen Einflüssen ab. Die Mechanik arbeitet daher mit **Modellen** (Idealisierungen), die die **wesentlichen** Merkmale enthalten:
- **Starrer Körper:** Verformungen werden vernachlässigt.
- **Massenpunkt:** Ausdehnung wird vernachlässigt (z. B. Satellit auf seiner Bahn).
- **Kontinuum:** Atomarer Aufbau wird vernachlässigt.

:::rezept Lösung mechanischer Probleme
1. **Mechanisches Modell** bilden (idealisieren, Skizze).
2. **Mathematisches Modell**: Gleichungen aufstellen (Gleichgewicht).
3. **Lösen** (analytisch oder numerisch).
4. **Rückkopplung**: Ergebnis interpretieren, Plausibilität und Einheiten prüfen.
:::

**Genauigkeit:** Eingangsdaten (Lasten, Abmessungen) sind selten genauer als 2–3 signifikante Stellen – mehr Stellen im Ergebnis vorzutäuschen ist sinnlos.

## Die Kraft

:::def Kraft
Eine Kraft ist eine physikalische Größe, die z. B. mit der Gewichtskraft im Gleichgewicht stehen kann (man misst sie z. B. über die Verformung einer Feder). Sie ist bestimmt durch
1. **Betrag** (Größe),
2. **Richtung** (Wirkungslinie und Richtungssinn),
3. **Angriffspunkt**.
Damit ist sie ein **gebundener Vektor**. Einheit: **Newton**, $1\,\mathrm N=1\,\frac{\mathrm{kg\,m}}{\mathrm s^2}$ (≈ Gewicht einer Tafel Schokolade, 100 g).
:::

| Vektortyp | festgelegt durch | Beispiel |
|---|---|---|
| freier Vektor | Betrag und Richtung (beliebig parallel verschiebbar) | Moment eines Kräftepaars |
| linienflüchtiger Vektor | Betrag, Richtung, Wirkungslinie | Kraft am starren Körper |
| gebundener Vektor | Betrag, Richtung, Angriffspunkt | Kraft am verformbaren Körper |

**Kartesische Darstellung:**
$$\vec F=F_x\vec e_x+F_y\vec e_y+F_z\vec e_z=\begin{pmatrix}F_x\\F_y\\F_z\end{pmatrix},\qquad F=|\vec F|=\sqrt{F_x^2+F_y^2+F_z^2}.$$

## Der starre Körper

:::def Starrer Körper
Ein Körper, dessen Punkte unter Kraftwirkung ihre gegenseitigen Abstände **nicht** ändern (keine Verformung). Idealisierung, die gut ist, solange die Verformungen klein sind und für die Fragestellung keine Rolle spielen.
:::

:::satz Linienflüchtigkeit
Am starren Körper hängt die Wirkung einer Kraft **nicht** von der Lage des Angriffspunkts auf ihrer Wirkungslinie ab: Kräfte dürfen **entlang ihrer Wirkungslinie verschoben** werden. Eine **Parallelverschiebung** ändert die Wirkung jedoch – es entsteht ein zusätzliches **Moment** (Kap. 3).
:::
Beim verformbaren Körper (TM 2) gilt das nicht: Ein Gummiband wird anders gedehnt, je nachdem wo man zieht.

## Einteilung der Kräfte

**Nach der Verteilung:**
- **Volumenkräfte** (Fernkräfte, Feldkräfte): über das Volumen verteilt – Gewichtskraft, magnetische, elektrische Kräfte.
- **Flächenkräfte** (Kontakt-/Nahkräfte): in Berührflächen – Druck der Hand, Reifen-Straße-Kontakt, Luftkräfte am Tragflügel, Wasserdruck auf eine Staumauer.
- Idealisierungen: **Einzelkraft** (Punktlast) und **Linienlast/Streckenlast** $q$ [N/m].

**Nach Ursache:**
- **Eingeprägte Kräfte:** vorgegeben (Gewicht, Last am Kran, Verkehrslast auf einer Brücke).
- **Reaktionskräfte (Zwangskräfte):** entstehen durch **Bindungen** (Lager, Kontakt), die die Bewegungsfreiheit einschränken. Lagerreaktionen sind zunächst unbekannt.

**Nach Systemgrenze:**
- **Äußere Kräfte:** wirken von außen auf das betrachtete System.
- **Innere Kräfte:** zwischen Teilen des Systems bzw. im Inneren (Spannungen). Sie werden erst durch einen **Schnitt** sichtbar.

## Schnittprinzip und Freikörperbild

:::satz Schnittprinzip
Um unbekannte Reaktions- oder innere Kräfte zu bestimmen, **schneidet** man den Körper gedanklich von seinen Bindungen (bzw. in Teile) **frei** und ersetzt die Bindungen durch die entsprechenden **Kräfte** (und Momente). Das Ergebnis ist das **Freikörperbild (FKB)**. Am FKB werden die Gleichgewichtsbedingungen aufgestellt.
:::

<figure><svg class="fig" viewBox="0 0 640 180" width="640" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="13" stroke="currentColor" fill="none" stroke-width="1.6">
<defs><marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>
<rect x="30" y="70" width="240" height="14" fill="#d9822b" fill-opacity=".25"/>
<path d="M40 84 l-12 22 h24 z"/><path d="M22 112 h36" /><path d="M260 84 l-12 22 h24 z"/><circle cx="252" cy="110" r="3"/><circle cx="268" cy="110" r="3"/><path d="M240 116 h36"/>
<path d="M150 20 V68" marker-end="url(#ar1)"/><text x="156" y="30" fill="currentColor" stroke="none">F</text>
<text x="34" y="135" fill="currentColor" stroke="none">A (Festlager)</text><text x="220" y="135" fill="currentColor" stroke="none">B (Loslager)</text>
<path d="M300 77 h30" marker-end="url(#ar1)"/><text x="296" y="66" fill="currentColor" stroke="none">freischneiden</text>
<rect x="370" y="70" width="240" height="14" fill="#d9822b" fill-opacity=".25"/>
<path d="M490 20 V68" marker-end="url(#ar1)"/><text x="496" y="30" fill="currentColor" stroke="none">F</text>
<path d="M380 140 V86" marker-end="url(#ar1)" stroke="#3b6fd8"/><text x="386" y="140" fill="#3b6fd8" stroke="none">A_y</text>
<path d="M330 77 h38" marker-end="url(#ar1)" stroke="#3b6fd8"/><text x="338" y="100" fill="#3b6fd8" stroke="none">A_x</text>
<path d="M600 140 V86" marker-end="url(#ar1)" stroke="#3b6fd8"/><text x="606" y="140" fill="#3b6fd8" stroke="none">B</text>
</svg><figcaption>Beidseitig gelagerter Balken und sein Freikörperbild: Lager werden durch (unbekannte) Reaktionskräfte ersetzt</figcaption></figure>

:::merke Regeln für saubere Freikörperbilder
1. **Komplett** freischneiden – an **jeder** Schnittstelle alle möglichen Kräfte/Momente eintragen (Lagertyp beachten!).
2. Unbekannte in **beliebiger angenommener Richtung** eintragen; ergibt die Rechnung ein negatives Vorzeichen, wirkt die Kraft tatsächlich andersherum.
3. Eingeprägte Kräfte (Gewicht!) nicht vergessen.
4. Nur Kräfte **auf** den freigeschnittenen Körper zeichnen, nicht die, die er auf andere ausübt.
5. Koordinatensystem festlegen.
:::

Ein Schnitt **durch** den Körper legt innere Kräfte frei: Teilsystem 1 und Teilsystem 2 haben an der Schnittstelle entgegengesetzt gleiche innere Kräfte (→ Schnittgrößen, Kap. 7; Spannungen, TM 2).

## Wechselwirkungsgesetz (3. Newtonsches Axiom)

:::satz actio = reactio
Die Kräfte, die zwei Körper aufeinander ausüben, sind **gleich groß, entgegengesetzt gerichtet** und liegen auf **derselben Wirkungslinie**.
:::
Das gilt für Kontaktkräfte (Buch auf dem Tisch) wie für Fernkräfte (Erde ↔ Mond). Beim Freischneiden zweier Körper bedeutet das: An der Trennstelle trägt man auf beiden Seiten die **gleiche** Kraft mit **entgegengesetzter** Richtung an.

## Dimensionen und Einheiten

Das SI-System: Länge [m], Masse [kg], Zeit [s] als Basis; Kraft [N] = kg·m/s², Moment [Nm], Streckenlast [N/m], Spannung [N/m² = Pa] bzw. [N/mm² = MPa]. **Dimensionskontrolle** in jeder Gleichung ist ein sehr effektiver Fehlercheck.

## Aufgaben

:::aufgabe 1
Klassifiziere: (a) Gewichtskraft eines Flugzeugs, (b) Auftrieb am Flügel, (c) Kraft im Fahrwerk beim Stehen am Boden, (d) Kraft zwischen Rumpf und Flügel.
:::loesung
(a) Volumenkraft, eingeprägt, äußere Kraft. (b) Flächenkraft (Druckverteilung), eingeprägt, äußere. (c) Reaktionskraft (Bindung Boden), Kontaktkraft, äußere (wenn das ganze Flugzeug das System ist). (d) innere Kraft (zwischen Teilen des Systems) – wird erst sichtbar, wenn man Flügel und Rumpf trennt.
:::
:::

:::aufgabe 2
Eine Kiste (Gewicht $G$) liegt auf einem Tisch. Zeichne die FKB der Kiste und des Tisches und benenne die Wechselwirkungskräfte.
:::loesung
FKB Kiste: $G$ nach unten, Normalkraft $N$ vom Tisch nach oben; Gleichgewicht $N=G$. FKB Tisch: Eigengewicht, Bodenkräfte an den Beinen und die Kraft $N$ der Kiste **nach unten** (actio = reactio). Achtung: $G$ und $N$ an der Kiste sind **kein** Wechselwirkungspaar (beide wirken auf dieselbe Kiste) – das Paar zu $G$ ist die Anziehung der Kiste auf die Erde.
:::
:::

:::aufgabe 3
Rechne um: 3 kN in N; 2,5 kNm in Nmm; 5 N/mm² in MPa und Pa; Masse 75 kg → Gewichtskraft ($g=9{,}81\,$m/s²).
:::loesung
3000 N; $2{,}5\cdot10^6\,$Nmm; 5 MPa = $5\cdot10^6\,$Pa; $G=mg\approx736\,$N.
:::
:::

## Karteikarten

:::karte
Drei Bestimmungsstücke einer Kraft?
???
Betrag, Richtung, Angriffspunkt (gebundener Vektor).
:::

:::karte
Was bedeutet „Kräfte am starren Körper sind linienflüchtig"?
???
Sie dürfen entlang ihrer Wirkungslinie verschoben werden, ohne die Wirkung zu ändern (Parallelverschiebung erzeugt dagegen ein Moment).
:::

:::karte
Schnittprinzip?
???
Körper gedanklich von Bindungen trennen, Bindungen durch unbekannte Reaktionskräfte/-momente ersetzen → Freikörperbild → Gleichgewicht aufstellen.
:::

:::karte
Wechselwirkungsgesetz?
???
Kräfte zweier Körper aufeinander: gleich groß, entgegengesetzt, gleiche Wirkungslinie (actio = reactio).
:::

:::karte
Eingeprägte Kraft vs. Reaktionskraft?
???
Eingeprägt: vorgegeben (Gewicht, Last). Reaktion: entsteht durch Bindungen (Lager, Kontakt), zunächst unbekannt.
:::
