---
title: 2.2 Mohrscher Spannungskreis – Konstruktion, Ablesen, Sonderfälle, Dehnmessstreifen
chapter: 2 Grundlagen der Festigkeitslehre
minutes: 100
sources: Technische Mechanik 2/tm2_02_grundlagen.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#61; Technische Mechanik 2/Uebung_01_Aufgaben.pdf
---

:::ziel
- Den **Mohrschen Spannungskreis** aus $\sigma_x,\sigma_y,\tau_{xy}$ maßstäblich konstruieren.
- Hauptspannungen, $\tau_{max}$, Hauptrichtungen und Spannungen in beliebigen Schnitten **ablesen**.
- Die Drehrichtungs-Regel (doppelter Winkel, entgegengesetzter Sinn) sicher anwenden.
- Sonderfälle (einachsiger Zug, reiner Schub, hydrostatisch) und die **DMS-Rosette** auswerten.
:::

## Herleitung: die Transformationsformeln sind ein Kreis

Umstellen der Formeln für $\sigma_\xi$ und $\tau_{\xi\eta}$:
$$\sigma_\xi-\sigma_M=\tfrac12(\sigma_x-\sigma_y)\cos2\varphi+\tau_{xy}\sin2\varphi,\qquad\tau_{\xi\eta}=-\tfrac12(\sigma_x-\sigma_y)\sin2\varphi+\tau_{xy}\cos2\varphi.$$
Quadrieren und addieren eliminiert $\varphi$:
$$(\sigma-\sigma_M)^2+\tau^2=r^2,\qquad\sigma_M=\tfrac12(\sigma_x+\sigma_y),\quad r=\sqrt{\left(\tfrac{\sigma_x-\sigma_y}2\right)^2+\tau_{xy}^2}.$$
Alle Spannungspaare $(\sigma,\tau)$ eines Punktes liegen auf einem **Kreis** in der $\sigma$-$\tau$-Ebene mit Mittelpunkt $(\sigma_M,0)$ und Radius $r$ (Otto Mohr, 1835–1918). **Jeder Schnittrichtung entspricht ein Punkt auf dem Kreis.**

<svg viewBox="0 0 420 260" width="420" style="max-width:100%" xmlns="http://www.w3.org/2000/svg" font-size="12" font-family="sans-serif">
<line x1="20" y1="130" x2="400" y2="130" stroke="currentColor"/><text x="402" y="134">σ</text>
<line x1="80" y1="250" x2="80" y2="10" stroke="currentColor"/><text x="84" y="16">τ</text>
<circle cx="230" cy="130" r="100" fill="none" stroke="#c2452d" stroke-width="2"/>
<line x1="310" y1="70" x2="150" y2="190" stroke="currentColor" stroke-dasharray="4 3"/>
<circle cx="310" cy="70" r="4" fill="#3b6fd8"/><text x="316" y="66">P (σx, τxy)</text>
<circle cx="150" cy="190" r="4" fill="#3b6fd8"/><text x="96" y="208">P′ (σy, −τxy)</text>
<line x1="310" y1="130" x2="310" y2="70" stroke="#3b6fd8" stroke-dasharray="2 2"/>
<line x1="150" y1="130" x2="150" y2="190" stroke="#3b6fd8" stroke-dasharray="2 2"/>
<circle cx="330" cy="130" r="4" fill="currentColor"/><text x="334" y="148">σ1</text>
<circle cx="130" cy="130" r="4" fill="currentColor"/><text x="112" y="148">σ2</text>
<circle cx="230" cy="130" r="3" fill="currentColor"/><text x="222" y="148">σM</text>
<line x1="230" y1="30" x2="230" y2="130" stroke="currentColor" stroke-dasharray="2 3"/><text x="236" y="28">τmax</text>
<path d="M 270 130 A 40 40 0 0 0 262 106" fill="none" stroke="currentColor"/><text x="272" y="116">2φ*</text>
</svg>

## Konstruktion – Schritt für Schritt

:::rezept Mohrscher Kreis aus σx, σy, τxy
1. **Maßstab** wählen (z. B. 1 cm ≙ 10 MPa), $\sigma$-Achse waagrecht, $\tau$-Achse senkrecht.
2. $\sigma_x$ und $\sigma_y$ **vorzeichenrichtig** auf der $\sigma$-Achse markieren.
3. **Konvention:** $\tau_{xy}$ **vorzeichenrichtig über $\sigma_x$** auftragen ⇒ Punkt $P$; $\tau_{xy}$ mit **umgekehrtem Vorzeichen über $\sigma_y$** ⇒ Punkt $P'$.
4. Verbindungslinie $PP'$ schneidet die $\sigma$-Achse im **Mittelpunkt** $\sigma_M$. Kreis durch $P$ und $P'$ zeichnen.
5. **Ablesen:** Schnittpunkte mit der $\sigma$-Achse = $\sigma_1$ (rechts), $\sigma_2$ (links). Höchster/tiefster Punkt = $\pm\tau_{max}$ (dort $\sigma=\sigma_M$).
6. **Winkel:** Der Winkel zwischen Strahl $M\!P$ und $\sigma$-Achse ist $2\varphi^*$; der Winkel von $M\!P$ zur Senkrechten durch $M$ ist $2\varphi^{**}$.
7. **Beliebiger Schnitt** ($\varphi$ gegen den Uhrzeigersinn): Von $P$ aus den Winkel **$2\varphi$ im Uhrzeigersinn** antragen ⇒ Punkt $Q=(\sigma_\xi,\tau_{\xi\eta})$; gegenüberliegender Punkt $Q'=(\sigma_\eta,-\tau_{\xi\eta})$.
:::

:::merke Die Winkelregel
**Doppelter Winkel – entgegengesetzter Drehsinn.** Dreht sich das Element um $\varphi$ gegen den Uhrzeigersinn, wandert der Bildpunkt im Kreis um $2\varphi$ im Uhrzeigersinn. Senkrechte Schnitte ($90°$) liegen sich im Kreis **gegenüber** ($180°$).
:::

*Beweis der Winkelregel (Gross):* Aus dem Kreis abgelesen $\frac12(\sigma_x-\sigma_y)=r\cos2\varphi^*$, $\tau_{xy}=r\sin2\varphi^*$. Eingesetzt: $\sigma_\xi=\sigma_M+r\cos(2\varphi^*-2\varphi)$, $\tau_{\xi\eta}=r\sin(2\varphi^*-2\varphi)$ – der Punkt hat sich um $-2\varphi$ gedreht.

Für eine eindeutige Konstruktion braucht man **drei Bestimmungsstücke** (z. B. $\sigma_x,\tau_{xy},\sigma_1$ oder $\sigma_1,\sigma_2$ und eine Richtung).

## Sonderfälle

| Zustand | Gegeben | Kreis | Ergebnis |
|---|---|---|---|
| **Einachsiger Zug** | $\sigma_x=\sigma_0>0$ | berührt $\tau$-Achse, liegt rechts | $\sigma_1=\sigma_0$, $\sigma_2=0$, $\tau_{max}=\frac{\sigma_0}2$ unter 45° |
| **Reiner Schub** | $\tau_{xy}=\tau_0$ | Mittelpunkt im Ursprung | $\sigma_{1,2}=\pm\tau_0$ unter 45° (→ Torsion!) |
| **Hydrostatisch** | $\sigma_x=\sigma_y=\sigma_0$ | entartet zum **Punkt** | in jedem Schnitt $\sigma_0$, $\tau=0$ |

## Beispiele aus der Vorlesung

:::bsp Gross Beispiel 2.2 (Mohr-Beispiel 1 der Folien)
$\sigma_x=50$, $\sigma_y=-20$, $\tau_{xy}=30$ MPa. $P=(50;30)$, $P'=(-20;-30)$, $\sigma_M=15$, $r=\sqrt{35^2+30^2}=46{,}1$.
(a) $\sigma_1=61\,$MPa, $\sigma_2=-31\,$MPa, $\tau_{max}=46\,$MPa; $2\varphi^*=\arctan\frac{30}{35}=40{,}6°$ ⇒ $\varphi^*=20°$ (zu $\sigma_1$).
(b) Normale unter $\varphi=30°$: von $P$ um 60° im Uhrzeigersinn ⇒ $\sigma_\xi\approx58{,}5\,$MPa, $\tau_{\xi\eta}\approx-15{,}5\,$MPa (rechnerisch $-15{,}3$).
:::

:::bsp Gross Beispiel 2.3 (Mohr-Beispiel 2 der Folien)
Gegeben $\sigma_1=40$, $\sigma_2=-20$ MPa. Gesucht: ein $x$-$y$-System mit $\sigma_x=0$, $\tau_{xy}>0$.
Kreis: $\sigma_M=10$, $r=30$. Punkt $P$ mit $\sigma=0$ oben: $\tau_{xy}=\sqrt{30^2-10^2}=28{,}3\,$MPa; $P'$: $\sigma_y=20\,$MPa. Winkel von Punkt 1 nach $P$: $2\varphi=180°-\arccos\frac{10}{30}=180°-70{,}5°=109{,}5°\approx110°$ (gegen den Uhrzeigersinn im Kreis) ⇒ $x$-Achse liegt um $\varphi\approx55°$ **im Uhrzeigersinn** gegen die 1-Achse.
:::

## Dehnmessstreifen-Rosette (Übung 1, Aufgabe 2)

Ein **DMS** misst nur die Dehnung (bzw. Normalspannung) in **einer** Richtung. Mit drei Streifen a, b, c unter 0°, 45°, 90° erhält man den vollständigen ebenen Zustand:

$\sigma_a=\sigma_\xi$, $\sigma_c=\sigma_\eta$ (senkrecht), und für den 45°-Streifen ($2\varphi=90°$): $\sigma_b=\frac12(\sigma_a+\sigma_c)+\tau_{\xi\eta}$. Also
$$\tau_{\xi\eta}=\sigma_b-\tfrac12(\sigma_a+\sigma_c),\qquad\sigma_{1,2}=\frac{\sigma_a+\sigma_c}2\pm\sqrt{\left(\frac{\sigma_a-\sigma_c}2\right)^2+\left(\sigma_b-\frac{\sigma_a+\sigma_c}2\right)^2}.$$

## Aufgaben

:::aufgabe 1 (Übung 1, Aufgabe 2 d/e)
Messung: $\sigma_a=4\sigma_0$, $\sigma_b=2\sigma_0$, $\sigma_c=\sigma_0$ (b unter 45° zwischen a und c). Hauptspannungen und $\tau_{max}$?
:::loesung
$\sigma_M=2{,}5\sigma_0$; $\tau_{\xi\eta}=2\sigma_0-2{,}5\sigma_0=-0{,}5\sigma_0$; $r=\sigma_0\sqrt{1{,}5^2+0{,}5^2}=1{,}58\sigma_0$.
$\sigma_1=4{,}08\sigma_0$, $\sigma_2=0{,}92\sigma_0$, $\tau_{max}=1{,}58\sigma_0$. Allgemeine Formel siehe oben (e).
:::
:::

:::aufgabe 2 (Übung 1, Aufgabe 2 a–c qualitativ)
Wo liegen die drei DMS-Werte auf dem Mohrschen Kreis bei (a) einachsigem Zug $\sigma_0$, (b) reinem Schub $\tau_0$, (c) hydrostatischem Zustand $\sigma_0$, wenn die Rosette um $\alpha=15°$ gedreht ist?
:::loesung
Die drei Streifen entsprechen Punkten im Kreis mit **90°-Abstand** (a→b) bzw. **180°** (a→c), beginnend bei $2\alpha=30°$ vom Punkt $P$ aus (im Uhrzeigersinn).
(a) Kreis von 0 bis $\sigma_0$: $\sigma_a=\sigma_0\cos^215°=0{,}93\sigma_0$, $\sigma_b=\sigma_0\cos^260°=0{,}25\sigma_0$, $\sigma_c=\sigma_0\sin^215°=0{,}07\sigma_0$.
(b) Kreis um 0 mit Radius $\tau_0$: $\sigma_a=\tau_0\sin30°=0{,}5\tau_0$, $\sigma_b=\tau_0\sin120°=0{,}87\tau_0$, $\sigma_c=-0{,}5\tau_0$.
(c) Punkt: alle drei messen $\sigma_0$.
:::
:::

:::aufgabe 3 (Übung 1, Aufgabe 1 – Schweißnaht, allgemein)
Ein Blech (Querschnitt $A$) wird einachsig mit $F$ gezogen ($\sigma_0=F/A$). Eine Schweißnaht verläuft unter dem Winkel $\alpha$ zur Horizontalen (Kraft horizontal). (a) Bei welcher Kraft versagt das Blech, wenn es bei $\tau_{B}$ versagt; unter welchem Winkel? (b) $\sigma_S$ und $\tau_S$ in der Naht. (c) Werte für $\alpha=30°$.
:::loesung
(a) $\tau_{max}=\frac{\sigma_0}2=\tau_B$ ⇒ $F_B=2\tau_BA$, unter $\beta=45°$.
(b) Nahtnormale bildet mit der Kraftrichtung den Winkel $\varphi=\alpha+90°$ (bzw. $\alpha-90°$): $\sigma_S=\sigma_0\cos^2(\alpha+90°)=\sigma_0\sin^2\alpha$, $|\tau_S|=\sigma_0\sin\alpha\cos\alpha=\frac{\sigma_0}2\sin2\alpha$.
(c) $\alpha=30°$: $\sigma_S=0{,}25\sigma_0$, $|\tau_S|=0{,}433\sigma_0$. Im Mohrschen Kreis (Durchmesser 0 … $\sigma_0$) liegt der Punkt um $2\cdot60°=120°$ vom Punkt $(\sigma_0,0)$ entfernt.
:::
:::

:::aufgabe 4
Konstruiere den Kreis für $\sigma_x=-40$, $\sigma_y=20$, $\tau_{xy}=40$ MPa und lies $\sigma_1$, $\sigma_2$, $\tau_{max}$, $\varphi^*$ ab.
:::loesung
$\sigma_M=-10$, $r=\sqrt{30^2+40^2}=50$: $\sigma_1=40$, $\sigma_2=-60$, $\tau_{max}=50$ MPa. $\tan2\varphi^*=\frac{80}{-60}$ ⇒ $2\varphi^*=-53{,}1°$ (bzw. $126{,}9°$). Probe $\varphi^*=-26{,}6°$: $\sigma_\xi=-10-30\cos(-53{,}1°)+40\sin(-53{,}1°)=-10-18-32=-60=\sigma_2$. $\sigma_1$ wirkt unter $63{,}4°$.
:::
:::

## Karteikarten

:::karte
Mittelpunkt und Radius des Mohrschen Kreises?
???
$M=(\frac{\sigma_x+\sigma_y}2,0)$, $r=\sqrt{(\frac{\sigma_x-\sigma_y}2)^2+\tau_{xy}^2}$
:::

:::karte
Wie trägt man τxy im Mohrschen Kreis ein?
???
Vorzeichenrichtig über $\sigma_x$ (Punkt P), mit umgekehrtem Vorzeichen über $\sigma_y$ (Punkt P′).
:::

:::karte
Winkelregel im Mohrschen Kreis?
???
Doppelter Winkel, entgegengesetzter Drehsinn.
:::

:::karte
Mohrscher Kreis bei reinem Schub?
???
Mittelpunkt im Ursprung, $\sigma_{1,2}=\pm\tau_0$ unter 45°.
:::

:::karte
Mohrscher Kreis beim hydrostatischen Zustand?
???
Ein Punkt – in allen Schnitten gleiche Normalspannung, keine Schubspannung.
:::

:::karte
Wie bestimmt eine 0°/45°/90°-DMS-Rosette τ?
???
$\tau=\sigma_b-\frac12(\sigma_a+\sigma_c)$
:::
