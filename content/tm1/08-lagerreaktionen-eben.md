---
title: §5 Lagerreaktionen ebener Tragwerke – Lagertypen, statische Bestimmtheit, Superposition
chapter: §5 Lagerreaktionen
minutes: 120
sources: Technische Mechanik 1/978-3-662-59157-4.pdf#120; Technische Mechanik 1/TM1-Skript-22-05-2018.pdf#4
---

:::ziel
- Lagertypen (Loslager, Festlager, Einspannung, Pendelstab, Seil, Führungen) und ihre **Wertigkeit** kennen und im FKB korrekt ersetzen.
- **Statische Bestimmtheit** ebener Tragwerke prüfen ($f=0$?), Ausnahmefälle (kinematische Verschieblichkeit).
- Lagerreaktionen systematisch berechnen, inkl. Streckenlasten und Einzelmomenten.
- **Superpositionsprinzip**.
:::

## Freiheitsgrade und Lager

Ein starrer Körper in der Ebene hat **3 Freiheitsgrade**: 2 Verschiebungen ($u$, $w$) und 1 Drehung ($\varphi$). Lager verhindern Bewegungen und üben dafür **Reaktionen** aus: **Wo eine Bewegung verhindert wird, entsteht eine Reaktion** (Kraft gegen Verschiebung, Moment gegen Drehung).

| Lager | verhindert | Reaktionen | Wertigkeit $r$ |
|---|---|---|---|
| **Loslager** (Rollenlager, verschiebliches Gelenklager) | Verschiebung senkrecht zur Lagerebene | 1 Kraft (senkrecht zur Bahn) | 1 |
| **Pendelstütze** (gelenkig angeschlossener Stab) | Verschiebung in Stabrichtung | 1 Kraft in Stabrichtung | 1 |
| **Seil** | Verlängerung | 1 Zugkraft in Seilrichtung | 1 |
| **Festlager** (festes Gelenklager) | beide Verschiebungen | 2 Kräfte $A_x,A_y$ | 2 |
| **Schiebehülse/Parallelführung** | eine Verschiebung + Drehung | 1 Kraft + 1 Moment | 2 |
| **Feste Einspannung** | alle Bewegungen | $A_x$, $A_y$, Moment $M_A$ | 3 |

<figure><svg class="fig" viewBox="0 0 600 120" width="600" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif" font-size="12" stroke="currentColor" fill="none" stroke-width="1.5">
<g transform="translate(40,20)"><circle cx="30" cy="10" r="4"/><path d="M30 14 l-14 24 h28 z"/><circle cx="20" cy="44" r="4"/><circle cx="40" cy="44" r="4"/><path d="M8 50 h44"/><text x="0" y="78" fill="currentColor" stroke="none">Loslager (r=1)</text></g>
<g transform="translate(200,20)"><circle cx="30" cy="10" r="4"/><path d="M30 14 l-14 24 h28 z"/><path d="M8 38 h44"/><path d="M12 38 l-6 8 M22 38 l-6 8 M32 38 l-6 8 M42 38 l-6 8 M52 38 l-6 8"/><text x="0" y="78" fill="currentColor" stroke="none">Festlager (r=2)</text></g>
<g transform="translate(380,20)"><rect x="20" y="10" width="70" height="12" fill="#d9822b" fill-opacity=".25"/><path d="M20 -6 V40"/><path d="M20 -2 l-8 6 M20 8 l-8 6 M20 18 l-8 6 M20 28 l-8 6 M20 38 l-8 6"/><text x="0" y="78" fill="currentColor" stroke="none">Einspannung (r=3)</text></g>
</svg><figcaption>Symbole der wichtigsten Lager</figcaption></figure>

## Statische Bestimmtheit

:::def Abzählkriterium (ein starrer Körper, eben)
Mit $r$ = Summe der Lagerwertigkeiten (Anzahl unbekannter Reaktionen):
$$f=3-r\qquad\begin{cases}f>0:&\text{beweglich (kinematisch unbestimmt) – kein Tragwerk}\\f=0:&\text{statisch bestimmt (notwendig!)}\\f<0:&\text{statisch unbestimmt vom Grad }|f|\end{cases}$$
:::

:::achtung $f=0$ ist nur notwendig, nicht hinreichend
Ein System mit $f=0$ kann trotzdem **beweglich** sein („**Ausnahmefall**"), z. B. wenn
- alle drei Lagerkräfte **parallel** sind (Verschiebung quer möglich), oder
- sich die Wirkungslinien aller drei Lagerkräfte **in einem Punkt schneiden** (Drehung um diesen Punkt möglich).
Mathematisch: Die Koeffizientenmatrix des Gleichgewichts-LGS ist singulär ($\det=0$).
:::

Statisch **unbestimmte** Systeme lassen sich mit Gleichgewicht allein nicht lösen – man braucht die Verformungen (TM 2).

Typische statisch bestimmte Lagerungen: **Einfeldträger** (Fest- + Loslager), **Kragträger** (Einspannung), Balken auf drei nicht parallelen, nicht zentralen Pendelstützen.

## Berechnung der Lagerreaktionen

:::rezept Lagerreaktionen
1. **FKB**: Lager entfernen, Reaktionen eintragen (Richtung annehmen), alle Lasten eintragen.
2. Streckenlasten für die **Gleichgewichtsrechnung** durch Resultierende ersetzen (Fläche, im Schwerpunkt).
3. Abzählen: $r=3$? Ausnahmefall?
4. **Momentengleichung um ein Lager** (dessen Reaktionen fallen heraus) → direkt eine Unbekannte.
5. Weitere Momentengleichung um das andere Lager oder Kraftgleichungen.
6. **Kontrolle** mit einer nicht benutzten Gleichung.
:::

:::bsp Einfeldträger mit Einzelkraft und Streckenlast
Balken $l=6\,$m, Festlager $A$ links, Loslager $B$ rechts. Einzelkraft $F=12\,$kN bei $x=2\,$m (senkrecht), Gleichstreckenlast $q_0=4\,$kN/m auf $x\in[3,6]$.
- Ersatzkraft der Streckenlast: $R_q=4\cdot3=12\,$kN bei $x=4{,}5\,$m.
- $\sum M^{(A)}=0$ (↺ positiv): $6B-12\cdot2-12\cdot4{,}5=0\Rightarrow B=\frac{24+54}6=13\,$kN.
- $\sum M^{(B)}=0$: $-6A_y+12\cdot4+12\cdot1{,}5=0\Rightarrow A_y=\frac{48+18}6=11\,$kN.
- $\sum F_x=0$: $A_x=0$.
- Kontrolle $\sum F_y$: $11+13-12-12=0$ ✓.
:::

:::bsp Kragträger
Eingespannter Balken (Einspannung bei $A$, $x=0$), Länge $l$, Einzelkraft $F$ am freien Ende senkrecht nach unten, zusätzlich eine Horizontalkraft $H$ am Ende.
$A_x=H$ (entgegen), $A_y=F$, Einspannmoment: $\sum M^{(A)}=0\Rightarrow M_A-Fl=0\Rightarrow M_A=Fl$ (↺, hält den Balken gegen das Abkippen).
:::

:::bsp Schräges Loslager
Balken $l$, Festlager $A$, rechts ein Loslager auf einer um $30°$ geneigten Bahn (Reaktion $B$ senkrecht zur Bahn, also $30°$ gegen die Vertikale), Last $F$ in der Mitte. $\sum M^{(A)}$: $B\cos30°\cdot l-F\frac l2=0\Rightarrow B=\frac{F}{2\cos30°}=0{,}577F$. Dann $A_x=B\sin30°=0{,}289F$ (Richtung beachten), $A_y=F-B\cos30°=\frac F2$.
:::

## Superpositionsprinzip

Bei **linearen** Problemen (Statik starrer Körper, kleine Verformungen) gilt: Die Reaktionen infolge mehrerer Lasten sind die **Summe** der Reaktionen der einzelnen Lasten. Man kann also Lastfälle getrennt rechnen und addieren – praktisch bei Tabellenwerken (Balkentafeln).

## Aufgaben

:::aufgabe 1
Prüfe auf statische Bestimmtheit: (a) Balken auf zwei Loslagern; (b) Balken mit Einspannung und zusätzlichem Loslager; (c) Balken auf drei Pendelstützen, die sich in einem Punkt schneiden; (d) Festlager + Loslager.
:::loesung
(a) $r=2$, $f=1$ – beweglich (horizontal verschieblich). (b) $r=4$, $f=-1$ – einfach statisch unbestimmt. (c) $r=3$, $f=0$, aber **Ausnahmefall** (Drehung um den Schnittpunkt) – unbrauchbar. (d) $r=3$, $f=0$ – statisch bestimmt (wenn das Loslager nicht in Richtung $AB$ wirkt).
:::
:::

:::aufgabe 2
Einfeldträger $l=5\,$m mit Dreieckslast von $0$ (bei A) bis $q_0=6\,$kN/m (bei B). Lagerreaktionen?
:::loesung
$R=\frac12\cdot6\cdot5=15\,$kN bei $x=\frac23\cdot5=3{,}33\,$m. $B=\frac{15\cdot3{,}33}5=10\,$kN, $A=5\,$kN. (Allgemein: $A=\frac{q_0l}6$, $B=\frac{q_0l}3$.)
:::
:::

:::aufgabe 3
Kragträger $l=3\,$m mit Gleichstreckenlast $q_0=2\,$kN/m und Einzelmoment $M_0=4\,$kNm (↻) am freien Ende. Einspannreaktionen?
:::loesung
$A_y=6\,$kN (↑), $A_x=0$. $\sum M^{(A)}$ (↺ positiv): $M_A-6\cdot1{,}5-4=0\Rightarrow M_A=13\,$kNm (↺).
:::
:::

## Karteikarten

:::karte
Wertigkeit: Loslager, Festlager, Einspannung?
???
1, 2, 3 (eine Kraft; zwei Kräfte; zwei Kräfte + Moment).
:::

:::karte
Abzählkriterium eben (ein Körper)?
???
$f=3-r$; $f=0$ notwendig für statische Bestimmtheit, $f<0$ statisch unbestimmt, $f>0$ beweglich.
:::

:::karte
Zwei Ausnahmefälle bei $f=0$?
???
Alle Lagerkräfte parallel, oder ihre Wirkungslinien schneiden sich in einem Punkt.
:::

:::karte
Geschickte erste Gleichung für Lagerreaktionen?
???
Momentengleichung um ein Lager (Festlager/Einspannung) – dessen Reaktionen fallen heraus.
:::

:::karte
Lagerreaktionen Einfeldträger mit Gleichstreckenlast $q_0$?
???
$A=B=\frac{q_0l}2$.
:::
