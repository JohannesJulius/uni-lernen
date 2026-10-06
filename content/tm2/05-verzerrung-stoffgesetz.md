---
title: 2.4 Verformung, Verzerrung und Stoffgesetz – Dehnung, Gleitung, Zugversuch, Hooke, Querkontraktion, Wärmedehnung
chapter: 2 Grundlagen der Festigkeitslehre
minutes: 100
sources: Technische Mechanik 2/tm2_02_grundlagen.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#75; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#24
---

:::ziel
- **Dehnung** $\varepsilon$ und **Gleitung** $\gamma$ definieren; den Verzerrungstensor kennen.
- Verzerrungen aus dem Verschiebungsfeld $u(x,y)$, $v(x,y)$ berechnen.
- Das **Spannungs-Dehnungs-Diagramm** lesen (Proportionalitätsgrenze, Streckgrenze, Zugfestigkeit).
- **Hookesches Gesetz** einachsig und räumlich, Querkontraktion $\nu$, Schubmodul $G=\frac E{2(1+\nu)}$, Wärmedehnung $\alpha_T\Delta T$ anwenden.
:::

## Verformung und Verzerrung

Ein belasteter Körper ändert **Form und Größe**. Betrachtet man zwei kleine Linienelemente:
- **Dehnung** $\varepsilon=\frac{\Delta s'-\Delta s}{\Delta s}$ (Längenänderung bezogen auf die Ausgangslänge), dimensionslos. $\varepsilon>0$ Verlängerung, $\varepsilon<0$ **Stauchung**.
- **Gleitung/Scherung** $\gamma=\frac\pi2-\theta'$: Änderung eines ursprünglich **rechten Winkels**, Einheit rad.

Technische Werkstoffe: $\varepsilon\approx10^{-3}$ – Verzerrungen sind **sehr klein** ⇒ Linearisierung erlaubt.

### Verzerrungen aus Verschiebungen (eben)
Ein Punkt $(x,y)$ verschiebt sich um $u(x,y)$ in $x$- und $v(x,y)$ in $y$-Richtung. Ein Rechteckelement $\Delta x\times\Delta y$ wird (in erster Näherung) zum Parallelogramm:

:::formel Kinematische Beziehungen
$$\varepsilon_x=\frac{\partial u}{\partial x},\qquad\varepsilon_y=\frac{\partial v}{\partial y},\qquad\gamma_{xy}=\alpha+\beta=\frac{\partial v}{\partial x}+\frac{\partial u}{\partial y}.$$
(Kleine Winkel: $\tan\alpha\approx\alpha=\frac{\partial v}{\partial x}$, $\beta=\frac{\partial u}{\partial y}$.) Räumlich analog mit $w$ und $z$.
:::

Hier tauchen die **partiellen Ableitungen** aus Mathe 2 auf. Der **Verzerrungstensor** ist symmetrisch und hat dieselbe Struktur wie der Spannungstensor:
$$\boldsymbol\varepsilon=\begin{pmatrix}\varepsilon_x&\frac12\gamma_{xy}&\frac12\gamma_{xz}\\\frac12\gamma_{xy}&\varepsilon_y&\frac12\gamma_{yz}\\\frac12\gamma_{xz}&\frac12\gamma_{yz}&\varepsilon_z\end{pmatrix}.$$
**Achtung Faktor ½:** Im Tensor stehen die halben Gleitungen. Dadurch gelten für Verzerrungen **dieselben Transformationsformeln** wie für Spannungen (mit $\sigma\to\varepsilon$, $\tau\to\frac12\gamma$) – es gibt Hauptdehnungen und einen **Mohrschen Dehnungskreis**.

:::bsp Kleinwinkelnäherung – wie gut?
Bei $10°$ ist der Fehler von $\sin\varphi\approx\varphi$ ca. 0,5 %, von $\tan\varphi\approx\varphi$ ca. 1 %, von $\cos\varphi\approx1$ ca. 1,5 %. Elastische Verformungen liegen weit darunter.
:::

## Der Zugversuch und das Spannungs-Dehnungs-Diagramm

Probestab (Messlänge $l_0$, Querschnitt $A$) wird gezogen: $\sigma=\frac FA$ (Nennspannung, auf Ausgangsquerschnitt), $\varepsilon=\frac{l-l_0}{l_0}$.

| Bereich/Kennwert | Bedeutung |
|---|---|
| bis **Proportionalitätsgrenze** $\sigma_P$ | linear-elastisch: $\sigma=E\varepsilon$, Entlasten ⇒ zurück auf 0 |
| **Streck-/Fließgrenze** $\sigma_F$ ($R_e$, $R_{eH}$; sonst $R_{p0,2}$ = 0,2 % bleibende Dehnung) | Werkstoff beginnt zu **fließen** – Dehnung wächst bei konstanter Spannung |
| **Verfestigung** | Kurve steigt wieder |
| **Zugfestigkeit** $\sigma_B$ ($R_m$) | Maximum der Nennspannung; danach **Einschnürung** ⇒ Nennspannung fällt, wahre Spannung $F/A_W$ steigt bis zum Bruch |
| plastische Dehnung $\varepsilon_{pl}$ | bleibt nach Entlasten aus dem Fließbereich |

Durch Legieren lassen sich $R_e$ und $R_m$ stark verändern – **der E-Modul aber kaum**.

## Hookesches Gesetz

:::formel Einachsig
$$\sigma=E\,\varepsilon\qquad(\text{Robert Hooke, 1635–1703}),$$
**E-Modul** $E$ = Steigung im linearen Bereich, gleiche Einheit wie Spannung.
| Werkstoff | $E$ in N/mm² |
|---|---|
| Stahl | $2{,}1\cdot10^5$ |
| Aluminium | $0{,}7\cdot10^5$ |
| Titan | $1{,}1\cdot10^5$ |
| Gusseisen | $1{,}0\cdot10^5$ |
| Kupfer | $1{,}2\cdot10^5$ |
| Beton | $0{,}3\cdot10^5$ |
| Holz (Faser) | $0{,}07\ldots0{,}16\cdot10^5$ |
:::

### Querkontraktion
Wird ein Stab gelängt, wird er dünner: **Querdehnung**
$$\varepsilon_q=-\nu\,\varepsilon\qquad(\text{Poisson-Zahl }\nu,\ \text{Stahl}\approx0{,}3,\ \text{Gummi}\approx0{,}5).$$
Volumendehnung eines Zugstabs: $\varepsilon_V=\frac{\Delta V}V=\varepsilon(1-2\nu)$ ⇒ $0\le\nu\le0{,}5$; $\nu=0{,}5$ ⇔ **inkompressibel**.

### Schub
$$\tau=G\,\gamma\qquad(\text{Schubmodul }G).$$
Für isotrope Werkstoffe gibt es nur **zwei** unabhängige elastische Konstanten:
$$G=\frac{E}{2(1+\nu)}\qquad(\text{Stahl: }G\approx81\,000\,\mathrm{N/mm^2}).$$

### Wärmedehnung
$$\varepsilon_T=\alpha_T\,\Delta T\qquad(\text{Stahl }\alpha_T\approx1{,}2\cdot10^{-5}\,\mathrm K^{-1},\ \text{Alu }\approx2{,}3\cdot10^{-5}\,\mathrm K^{-1}).$$
Wird die Wärmedehnung behindert (statisch unbestimmt gelagert), entstehen **Wärmespannungen**.

:::formel Verallgemeinertes Hookesches Gesetz (isotrop, räumlich)
$$\begin{aligned}\varepsilon_x&=\tfrac1E[\sigma_x-\nu(\sigma_y+\sigma_z)]+\alpha_T\Delta T,&\gamma_{xy}&=\tfrac{\tau_{xy}}G,\\\varepsilon_y&=\tfrac1E[\sigma_y-\nu(\sigma_z+\sigma_x)]+\alpha_T\Delta T,&\gamma_{yz}&=\tfrac{\tau_{yz}}G,\\\varepsilon_z&=\tfrac1E[\sigma_z-\nu(\sigma_x+\sigma_y)]+\alpha_T\Delta T,&\gamma_{zx}&=\tfrac{\tau_{zx}}G.\end{aligned}$$
:::

:::achtung
Ein **ebener Spannungszustand** ($\sigma_z=0$) führt **nicht** zu einem ebenen Verzerrungszustand: $\varepsilon_z=-\frac\nu E(\sigma_x+\sigma_y)\neq0$ (das Blech wird dünner). Und umgekehrt.
:::

Aufgelöst nach den Spannungen (eben, $\Delta T=0$):
$$\sigma_x=\frac{E}{1-\nu^2}(\varepsilon_x+\nu\varepsilon_y),\qquad\sigma_y=\frac{E}{1-\nu^2}(\varepsilon_y+\nu\varepsilon_x).$$
Damit wertet man DMS-Messungen aus (DMS messen Dehnungen!).

## Aufgaben

:::aufgabe 1 (Folienbeispiel Gummiwürfel, Ulbrich 2.1/3)
Gummiwürfel $a=6\,$cm, $E=10\,$N/mm², $\nu=0{,}45$, oben gleichmäßig mit $F=6\,$kN gedrückt. (a) Absenkung der Oberseite, wenn (1) die Seitenflächen frei sind, (2) der Würfel reibungsfrei in starre Wände eingeschlossen ist. (b) Seitliche Normalspannungen im Fall 2?
:::loesung
$\sigma_z=-\frac F{a^2}=-\frac{6000}{3600}=-1{,}667\,$N/mm².
**Fall 1:** $\sigma_x=\sigma_y=0$ ⇒ $\varepsilon_z=\frac{\sigma_z}E=-0{,}1667$ ⇒ $\Delta a=-10\,$mm.
**Fall 2:** $\varepsilon_x=\varepsilon_y=0$: $\sigma_x-\nu(\sigma_y+\sigma_z)=0$ und symmetrisch $\sigma_x=\sigma_y$ ⇒ $\sigma_x(1-\nu)=\nu\sigma_z$ ⇒ $\sigma_x=\sigma_y=\frac{\nu}{1-\nu}\sigma_z=-1{,}364\,$N/mm² (b).
$\varepsilon_z=\frac1E[\sigma_z-2\nu\sigma_x]=\frac{-1{,}667+1{,}227}{10}=-0{,}0439$ ⇒ $\Delta a=-2{,}64\,$mm. Der eingeschlossene Würfel ist fast 4-mal steifer (bei $\nu\to0{,}5$ würde er gar nicht nachgeben).
:::
:::

:::aufgabe 2
Ein Stahlstab ($E=210\,$GPa, $\nu=0{,}3$, $d=20\,$mm, $l=1\,$m) wird mit $F=50\,$kN gezogen. $\sigma$, $\varepsilon$, $\Delta l$, $\Delta d$?
:::loesung
$A=314\,$mm², $\sigma=159\,$MPa, $\varepsilon=\frac{159}{210\,000}=7{,}58\cdot10^{-4}$, $\Delta l=0{,}76\,$mm, $\varepsilon_q=-2{,}27\cdot10^{-4}$ ⇒ $\Delta d=-4{,}5\,$µm.
:::
:::

:::aufgabe 3
Verschiebungsfeld $u=k\,y$, $v=0$ (einfache Scherung, $k\ll1$). $\varepsilon_x$, $\varepsilon_y$, $\gamma_{xy}$?
:::loesung
$\varepsilon_x=\frac{\partial u}{\partial x}=0$, $\varepsilon_y=0$, $\gamma_{xy}=\frac{\partial v}{\partial x}+\frac{\partial u}{\partial y}=k$.
:::
:::

:::aufgabe 4
Stahl: $E=210\,$GPa, $G=80{,}8\,$GPa. Welche Querkontraktionszahl folgt?
:::loesung
$\nu=\frac E{2G}-1=\frac{210}{161{,}6}-1=0{,}30$.
:::
:::

:::aufgabe 5
Eine Stahlplatte ($E=210\,$GPa, $\nu=0{,}3$) – ebener Spannungszustand – zeigt die Dehnungen $\varepsilon_x=5\cdot10^{-4}$, $\varepsilon_y=-1\cdot10^{-4}$. Spannungen?
:::loesung
$\frac E{1-\nu^2}=230{,}8\,$GPa. $\sigma_x=230{,}8\cdot10^3(5-0{,}3)\cdot10^{-4}=108{,}5\,$MPa; $\sigma_y=230{,}8\cdot10^3(-1+1{,}5)\cdot10^{-4}=11{,}5\,$MPa.
:::
:::

## Karteikarten

:::karte
Dehnung und Gleitung aus Verschiebungen?
???
$\varepsilon_x=\partial u/\partial x$, $\varepsilon_y=\partial v/\partial y$, $\gamma_{xy}=\partial v/\partial x+\partial u/\partial y$.
:::

:::karte
Kennwerte des Spannungs-Dehnungs-Diagramms?
???
Proportionalitätsgrenze σP, Streckgrenze Re (bzw. Rp0,2), Zugfestigkeit Rm; danach Einschnürung.
:::

:::karte
Zusammenhang E, G, ν?
???
$G=\frac{E}{2(1+\nu)}$
:::

:::karte
Wertebereich von ν und Bedeutung von 0,5?
???
$0\le\nu\le0{,}5$; ν = 0,5: inkompressibel (keine Volumenänderung).
:::

:::karte
Hooke räumlich für εx?
???
$\varepsilon_x=\frac1E[\sigma_x-\nu(\sigma_y+\sigma_z)]+\alpha_T\Delta T$
:::

:::karte
E-Modul Stahl, Alu?
???
Stahl 210 000 N/mm², Alu 70 000 N/mm².
:::
