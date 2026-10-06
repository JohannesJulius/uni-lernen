---
title: 3.2 Statisch unbestimmte Stäbe und Stabsysteme – Verträglichkeit, Wärmespannungen, Passfehler
chapter: 3 Zug-Druck-Beanspruchung
minutes: 130
sources: Technische Mechanik 2/tm2_03_zugDruck.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#39; Technische Mechanik 2/Uebung_02_Aufgaben.pdf
---

:::ziel
- Den **Grad der statischen Unbestimmtheit** bestimmen.
- Statisch unbestimmte Stabsysteme mit dem **3-Schritt-Verfahren** (Gleichgewicht + Kinematik + Hooke) lösen.
- Das **Superpositionsprinzip** (Lager entfernen, Ersatzkraft $X$, Verträglichkeit) anwenden.
- **Wärmespannungen**, Montage-/Passfehler und Kontaktprobleme (Spalt) berechnen.
:::

## Warum statisch unbestimmt bauen?

Mehr Lager/Stäbe als nötig bringen **Redundanz** (Ausfallsicherheit – wichtig im Flugzeugbau!), **höhere Steifigkeit** und bessere **Lastverteilung**. Preis: Die Kräfte hängen von den **Steifigkeiten** ab und Temperaturänderungen oder Fertigungsungenauigkeiten erzeugen **Zwangsspannungen** – auch ohne äußere Last (Gleisverwerfung im Sommer, Dehnungsbögen in Rohrleitungen).

**Grad der Unbestimmtheit** $n$ = Anzahl Unbekannte (Stab- und Lagerkräfte) − Anzahl unabhängiger Gleichgewichtsgleichungen. Fachwerk: $n=s+r-2k$ (eben; $s$ Stäbe, $r$ Lagerreaktionen, $k$ Knoten) – wie in TM 1.

## Das 3-Schritt-Verfahren

:::rezept Statisch unbestimmte Stabsysteme
1. **Gleichgewicht** (Statik): $\sum F=0$, $\sum M=0$ an Knoten/Körpern ⇒ zu wenige Gleichungen.
2. **Kinematik** (Verträglichkeit/Kompatibilität): Wie hängen die $\Delta l_i$ geometrisch zusammen? (Verschiebungsplan, starre Körper, „Gesamtlänge bleibt gleich", Spalt $h$ …)
3. **Stoffgesetz:** $\Delta l_i=\frac{S_il_i}{EA_i}+\alpha_{T}\Delta T_i\,l_i$.

Alle Gleichungen **gemeinsam** lösen. Die Anzahl der Verträglichkeitsbedingungen = Grad der Unbestimmtheit.
:::

:::rezept Alternativ: Superposition (Kraftgrößenverfahren)
1. Überzähliges Lager entfernen, durch unbekannte Kraft $X$ ersetzen ⇒ statisch bestimmtes Grundsystem.
2. „0"-System: nur äußere Last ⇒ Verschiebung $u^{(0)}$ an der Stelle von $X$.
3. „1"-System: nur $X$ ⇒ Verschiebung $u^{(1)}=X\cdot(\ldots)$.
4. Verträglichkeit: $u^{(0)}+u^{(1)}=$ tatsächlicher Wert (meist 0 oder Spalt $h$) ⇒ $X$.
:::

## Grundbeispiele

:::bsp Stab mit Hülse (Gross Bsp. 1.3)
Stahlkern ($E_S$, $A_S$) in einer Kupferhülse ($E_{Cu}$, $A_{Cu}$), gleiche Länge $l$, gemeinsam über eine starre Platte mit $F$ gedrückt.
Gleichgewicht: $F_S+F_{Cu}=-F$ (beide Druck). Kinematik: gleiche Stauchung $\Delta l_S=\Delta l_{Cu}$. Hooke: $\frac{F_Sl}{E_SA_S}=\frac{F_{Cu}l}{E_{Cu}A_{Cu}}$.
$$\sigma_S=-\frac{E_SF}{E_SA_S+E_{Cu}A_{Cu}},\quad\sigma_{Cu}=-\frac{E_{Cu}F}{E_SA_S+E_{Cu}A_{Cu}},\quad\Delta l=-\frac{Fl}{E_SA_S+E_{Cu}A_{Cu}}.$$
**Merke:** Parallel geschaltete Stäbe teilen die Last im Verhältnis ihrer **Dehnsteifigkeiten** $EA$; der steifere Werkstoff bekommt die höhere Spannung.
:::

:::bsp Wärmespannungen zwischen zwei Wänden (Folienbeispiel)
Abschnitt 1 ($l$, $A_1$) wird um $\Delta T$ erwärmt, Abschnitt 2 ($l$, $A_2$) nicht; beide $E$; zwischen starren Wänden B und C, anfangs spannungsfrei.
Gleichgewicht: überall dieselbe Normalkraft $N$. Verträglichkeit: Gesamtlänge bleibt: $\Delta l_1+\Delta l_2=0$:
$$\frac{Nl}{EA_1}+\alpha_T\Delta T\,l+\frac{Nl}{EA_2}=0\ \Rightarrow\ N=-\frac{E\alpha_T\Delta T\,A_1A_2}{A_1+A_2}.$$
Lagerkräfte $B=C=|N|$ (Druck). Sonderfall nur ein Stab, beidseitig eingespannt: $\sigma=-E\alpha_T\Delta T$ – **unabhängig von Länge und Querschnitt!** Stahl, $\Delta T=40\,$K: $\sigma=-210\,000\cdot1{,}2\cdot10^{-5}\cdot40=-101\,$MPa.
:::

:::bsp Dreistabsystem (Gross Kap. 1.6)
Senkrechter Stab 2 ($l$, $EA_2$), symmetrisch daneben Stäbe 1 und 3 unter dem Winkel $\alpha$ zur Vertikalen ($l/\cos\alpha$, $EA_1=EA_3$); im gemeinsamen Knoten $K$ wirkt $F$ nach unten. 1-fach unbestimmt.
Gleichgewicht (Symmetrie $S_1=S_3$): $2S_1\cos\alpha+S_2=F$.
Kinematik ($K$ senkt sich um $v$): $\Delta l_2=v$, $\Delta l_1=v\cos\alpha$ ⇒ $\Delta l_1=\Delta l_2\cos\alpha$.
Hooke: $\frac{S_1l}{EA_1\cos\alpha}=\frac{S_2l}{EA_2}\cos\alpha$ ⇒ $S_1=\frac{EA_1}{EA_2}\cos^2\alpha\,S_2$.
$$S_2=\frac{F}{1+2\frac{EA_1}{EA_2}\cos^3\alpha},\qquad S_1=S_3=\frac{F\,\frac{EA_1}{EA_2}\cos^2\alpha}{1+2\frac{EA_1}{EA_2}\cos^3\alpha},\qquad v=\frac{Fl}{EA_2+2EA_1\cos^3\alpha}.$$
:::

:::merke Hinweise für Klausuraufgaben
- **Zuerst** statische Bestimmtheit prüfen.
- Vorzeichen: Stabkräfte immer als **Zug** ansetzen; negatives Ergebnis = Druck.
- Verschiebungsplan zeichnen; Kleinwinkelnäherung $\sin\varphi\approx\varphi$, $\cos\varphi\approx1$.
- Gleichgewicht am **unverformten** System (Theorie 1. Ordnung).
- Bei Sprüngen (Querschnitt, $E$, $\Delta T$, Einzelkraft) Bereiche bilden.
:::

## Aufgaben

:::aufgabe 1 (Übung 2, Aufgabe 7 – Spalt)
Stab bei $B$ eingespannt: Abschnitt 1 ($l_1$, $EA_1$) bis $C$, Abschnitt 2 ($l_2$, $EA_2$) bis $D$; Gesamtabstand der Wände $L$. In $C$ wirkt $F$ nach rechts. (a) Spaltbreite $h$ und Lagerreaktion bei offenem Spalt; (b) Lagerreaktionen bei geschlossenem Kontakt; (c) Verschiebung von $C$.
:::loesung
(a) $h=L-l_1-l_2$. Offen: $N_1=F$, $N_2=0$; $B=F$ (nach links). Spalt bleibt offen, solange $u_D=u_C=\frac{Fl_1}{EA_1}<h$.
(b) Wandkraft $R$ (nach links auf den Stab): $N_1=F-R$, $N_2=-R$. Verträglichkeit $u_D=h$:
$$\frac{(F-R)l_1}{EA_1}-\frac{Rl_2}{EA_2}=h\ \Rightarrow\ R=\frac{\frac{Fl_1}{EA_1}-h}{\frac{l_1}{EA_1}+\frac{l_2}{EA_2}},\qquad B=F-R.$$
(c) Offen: $u_C=\frac{Fl_1}{EA_1}$; geschlossen: $u_C=\frac{(F-R)l_1}{EA_1}$.
:::
:::

:::aufgabe 2 (Übung 2, Aufgabe 9 – starrer Balken an drei Stäben)
Starrer Balken (Länge $2a$) an drei senkrechten Stäben (Länge $l$, $EA$) bei $x=0$, $a$, $2a$. $F$ bei $x=a/2$. Stab 1 wird um $\Delta T$ erwärmt. Stabkräfte und Längenänderungen?
:::loesung
Abkürzung $\Theta=EA\alpha_T\Delta T$.
Gleichgewicht: $S_1+S_2+S_3=F$; Momente um Stab 1: $S_2a+S_32a=F\frac a2$.
Kinematik (starrer Balken, lineare Verschiebung): $\Delta l_2=\frac12(\Delta l_1+\Delta l_3)$.
Hooke: $\Delta l_1=\frac{S_1l}{EA}+\alpha_T\Delta Tl$, $\Delta l_{2,3}=\frac{S_{2,3}l}{EA}$ ⇒ $2S_2=S_1+S_3+\Theta$.
Lösung:
$$S_1=\frac{7F}{12}-\frac\Theta6,\quad S_2=\frac F3+\frac\Theta3,\quad S_3=\frac F{12}-\frac\Theta6.$$
$\Delta l_1=\frac{l}{EA}\frac{7F}{12}+\frac56\alpha_T\Delta Tl$, $\Delta l_2=\frac{l}{EA}\frac F3+\frac13\alpha_T\Delta Tl$, $\Delta l_3=\frac{l}{EA}\frac F{12}-\frac16\alpha_T\Delta Tl$.
Probe: Summe der $\Theta$-Anteile in den Kräften = 0 ✓ (Erwärmung allein erzeugt ein Eigenspannungs-Gleichgewicht).
:::
:::

:::aufgabe 3 (Übung 2, Aufgabe 11)
Starrer Balken (Masse $m$, Länge $4a$), links in $B$ gelenkig; Stab 1 senkrecht bei $x=2a$ (Länge $h$), Stab 2 bei $x=3a$ unter dem Winkel $\alpha$ zur Horizontalen nach rechts unten (Länge $h/\sin\alpha$); beide $EA$. (a) Absenkung $d$ des Endes $D$, (b) Stabkräfte.
:::loesung
Kinematik: kleine Drehung $\varphi$ um $B$, Punkt bei $x$ senkt sich um $\varphi x$.
Stab 1: $\Delta l_1=-2a\varphi$. Stab 2: Projektion der Absenkung $3a\varphi$ auf die Stabrichtung: $\Delta l_2=-3a\varphi\sin\alpha$.
Hooke: $S_1=-\frac{2a\varphi EA}h$, $S_2=\frac{EA\,\Delta l_2}{h/\sin\alpha}=-\frac{3a\varphi EA\sin^2\alpha}h$.
Momente um $B$: $mg\cdot2a+S_1\cdot2a+S_2\sin\alpha\cdot3a=0$ ⇒ $\frac{a\varphi EA}h(4+9\sin^3\alpha)=2mg$.
$$\varphi=\frac{2mgh}{aEA(4+9\sin^3\alpha)},\qquad d=4a\varphi=\frac{8mgh}{EA(4+9\sin^3\alpha)},$$
$$S_1=-\frac{4mg}{4+9\sin^3\alpha},\qquad S_2=-\frac{6mg\sin^2\alpha}{4+9\sin^3\alpha}\quad(\text{beide Druck}).$$
Probe $\alpha=90°$: $S_1=-\frac4{13}mg$, $S_2=-\frac6{13}mg$; Momente $\frac{8+18}{13}a\,mg=2a\,mg$ ✓.
:::
:::

:::aufgabe 4 (Übung 2, Aufgabe 12 – Fachwerk)
Fünf gleiche Stäbe ($l$, $EA$) bilden eine Raute aus zwei gleichseitigen Dreiecken: $A$ und $B$ (Festlager) links/rechts, $C$ oben, $D$ unten, Stab 3 = $CD$ senkrecht. In $D$ wirkt $F$ nach unten. Stabkräfte und Lagerreaktionen?
:::loesung
Unbestimmtheit: $s+r-2k=5+4-8=1$. Schrägstäbe unter 30° zur Horizontalen. Symmetrie: $S_1=S_2$, $S_4=S_5$; $C$, $D$ bewegen sich nur senkrecht ($v_C$, $v_D$ nach unten).
Gleichgewicht: Knoten $C$: $S_3=-S_1$; Knoten $D$: $S_4+S_3=F$.
Kinematik: $\Delta l_1=-\frac{v_C}2$, $\Delta l_4=+\frac{v_D}2$, $\Delta l_3=v_D-v_C$.
Hooke + Einsetzen: $v_D-v_C=\frac{v_C}2$ ⇒ $v_D=\frac32v_C$; $\frac{v_D}2+\frac{v_C}2=\frac{Fl}{EA}$ ⇒ $v_C=\frac{4Fl}{5EA}$, $v_D=\frac{6Fl}{5EA}$.
$$S_1=S_2=-\tfrac25F,\quad S_3=+\tfrac25F,\quad S_4=S_5=+\tfrac35F.$$
Lager: $A_V=B_V=\frac F2$ (nach oben); waagrecht $|A_H|=|B_H|=\frac{\sqrt3}{10}F$ (an $A$ nach links, an $B$ nach rechts) – entstehen nur, weil beide Lager fest sind.
:::
:::

:::aufgabe 5 (Übung 2, Aufgabe 8 – Parkdeck, Modell)
Betonsäule ($EA_B$) zwischen Boden $B$ und Decke $C$ eingespannt; Deck 1 (Masse $m_1$) bei Höhe $l_1$ und Deck 2 ($m_2$) bei $l_1+l_2$ fest mit der Säule verbunden; zusätzlich zwei Stäbe ($EA_S$, Länge $l_2$) zwischen den Decks; oberer Säulenabschnitt $l_3$. Lagerkräfte?
:::loesung
Die beiden Stäbe sind zum Säulenabschnitt 2 **parallel geschaltet** (gleiche Längenänderung). Kraftanteil der Säule im Abschnitt 2: $k=\frac{A_B}{A_B+2A_S}$.
Mit $F_B$ (Bodenkraft nach oben): $N_1=-F_B$, Abschnitt 2 gesamt $N_2=m_1g-F_B$ (Säule davon $kN_2$), $N_3=(m_1+m_2)g-F_B$.
Verträglichkeit: Säule zwischen festen Enden ⇒ $N_1l_1+kN_2l_2+N_3l_3=0$:
$$F_B=g\,\frac{m_1(kl_2+l_3)+m_2l_3}{l_1+kl_2+l_3},\qquad F_C=(m_1+m_2)g-F_B.$$
Verschiebungen: Deck 1 $u_1=-\frac{F_Bl_1}{EA_B}$ (nach unten), Deck 2 $u_2=u_1+\frac{kN_2l_2}{EA_B}$.
:::
:::

:::aufgabe 6
Eine Eisenbahnschiene (Stahl) wird bei 15 °C spannungsfrei verschweißt. Welche Spannung herrscht bei 55 °C?
:::loesung
$\sigma=-E\alpha_T\Delta T=-210\,000\cdot1{,}2\cdot10^{-5}\cdot40=-101\,$MPa (Druck) – Gefahr der Gleisverwerfung (Knickung!).
:::
:::

## Karteikarten

:::karte
3-Schritt-Verfahren der Elastostatik?
???
Gleichgewicht + Kinematik (Verträglichkeit) + Stoffgesetz, gemeinsam lösen.
:::

:::karte
Wärmespannung im beidseitig eingespannten Stab?
???
$\sigma=-E\alpha_T\Delta T$ (unabhängig von l und A).
:::

:::karte
Wie teilen sich parallel geschaltete Stäbe die Last?
???
Im Verhältnis ihrer Dehnsteifigkeiten EA (gleiche Dehnung).
:::

:::karte
Superpositionsverfahren für statisch Unbestimmte?
???
Überzähliges Lager durch X ersetzen, Verschiebungen aus „0"- und „1"-System addieren, Verträglichkeit ⇒ X.
:::

:::karte
Erzeugt ΔT in statisch bestimmten Systemen Spannungen?
???
Nein, nur Verformungen. In statisch unbestimmten i. d. R. ja.
:::
