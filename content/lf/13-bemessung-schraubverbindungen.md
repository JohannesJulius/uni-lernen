---
title: 13 Schraubenverbindungen IV – Bemessung: Zug + Torsion, Passschrauben unter Querlast, Interaktion, Flächenpressung, Einschraubtiefe
chapter: Kap. 9 Schraubenverbindungen
minutes: 120
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#102; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#103; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#106
---

:::ziel
- Die zwei **Nachweisfälle** (Bruch mit $R_m$, Fließen mit $R_{p0,2}$) unterscheiden.
- Eine vorgespannte Schraube auf **Zug + Torsion** mit der **Vergleichsspannung** (GEH) nachweisen.
- **Passschrauben** (auch hohl) unter **Querlast** auf Scherung, Lochleibung und Biegung bemessen.
- Kombinierte Lasten mit **Interaktionskurven** (Zug–Scherung, Zug–Biegung) nachweisen.
- **Flächenpressung** unter dem Kopf und die erforderliche **Einschraubtiefe** berechnen.
:::

## 1 Zwei Nachweisfälle (Kap. 9.12)

Bei Dehnschraubenverbindungen:
- Betriebslast als **Bruchlast** $F_A=P_B=j\cdot P_S$ → Grenzwert **$R_m$** (Bruch),
- Betriebslast als **sichere Last** $F_A=P_S$ → Grenzwert **$R_{p0,2}$** (keine Plastifizierung).

Im Folgenden steht $R_X$ für den jeweiligen Grenzwert; das Verfahren ist gleich.

## 2 Axialzug und Anzugsmoment (Kap. 9.12.1.1)

Beim Anziehen wird die Schraube nicht nur **gezogen**, sondern durch das Gewindemoment $M_t$ (und das Überdrehmoment) auch **tordiert**.

:::formel Spannungen im Gewinde
**Zug** mit maximaler Schraubenkraft:
$$\sigma_{Z,Smax}=\frac{F_{S\,max}}{A_S}\le\nu\cdot R_X,\qquad\nu=0{,}7\ (\text{Regel-})\ \ldots\ 0{,}9\ (\text{Feingewinde}).$$
($\nu$ = Ausnutzungsgrad – Reserve für die nicht berücksichtigte Torsion; werden alle Spannungen erfasst, ist $\nu=1$.)
**Torsion** aus dem Anziehen:
$$\tau_{tM}=\frac{M_t+M_Ü}{W_t},\qquad M_t=F_M\tan(\varphi+\rho')\frac{d_2}2,\qquad W_t=W_P=\frac{\pi d_S^3}{16},\ d_S=\frac{d_2+d_3}2.$$
**Vergleichsspannung** (Gestaltänderungsenergiehypothese, von Mises – vgl. TM 2):
$$\sigma_V=\sqrt{\sigma_{Z,Smax}^2+3\,\tau_{tM}^2}\le R_X.$$
:::

:::bsp M10 aus Lektion 11/12
$F_M=25\,$kN (Montage), $F_{SA}=2376\,$N → $F_{S\,max}=27\,376\,$N. $A_S=58{,}0\,$mm², $M_t=21\,761\,$N·mm, $d_S=8{,}593\,$mm → $W_t=124{,}6\,$mm³.
$\sigma_Z=\frac{27\,376}{58{,}0}=472\,$N/mm², $\tau_{tM}=\frac{21\,761}{124{,}6}=174{,}7\,$N/mm².
$\sigma_V=\sqrt{472^2+3\cdot174{,}7^2}=561\,$N/mm².
Festigkeitsklasse 10.9 ($R_{p0,2}\ge940$): $RF=940/561=1{,}68$ gegen Fließen ✓. Klasse 8.8 ($R_{p0,2}=640$): $RF=1{,}14$ – knapp. (Mit $\alpha_A$ müsste man eigentlich mit $F_{M\,max}$ rechnen!)
:::

## 3 Reine Querbelastung – Passschrauben (Kap. 9.12.1.2)

Im Maschinenbau überträgt man Querkräfte meist durch **Reibschluss**: $Q=F_{KR\,min}\cdot\mu$. Im **Flugzeugbau** ist das **nicht** der primäre Lastpfad – Querlasten werden über **Passschrauben** (Scherung + Lochleibung) übertragen, die auch **hohl** sein können (Gewicht!).

:::formel Passschraube unter Querlast (Gl. 9.74–9.77)
**Scherung** (Hohlbolzen, Außen-Ø $d_a$, Innen-Ø $d_i$):
$$Q_{S,ertr}=n_S\cdot\varphi_H\cdot\frac\pi4(d_a^2-d_i^2)\left[1-\left(\frac{d_i}{d_a}\right)^2\right]\cdot R_C$$
mit dem empirischen Abminderungsfaktor
$$\varphi_H=\frac{0{,}2\,\frac{d_i}{d_a}}{-1{,}27+\frac{d_i}{d_a}}+0{,}167\frac{d_i}{d_a}+1\qquad(\varphi_H=1\text{ für Vollbolzen}).$$
**Lochleibung** ($s$ = geringste Blechdicke):
$$Q_{LB,ertr}=d_S\cdot s\cdot\sigma_{LB,ertr}\ \ \text{für }\frac{d_a}{s}\le5{,}5;\qquad Q_{LB,ertr}=5{,}5\,s^2\,\sigma_{LB,ertr}\ \ \text{für }\frac{d_a}s\ge5{,}5.$$
(Bei sehr dünnen Blechen nützt ein dickerer Bolzen nichts mehr.)
:::

:::formel Biegung gering vorgespannter Passschrauben (Gl. 9.78–9.81)
$$M_b=\frac F2\cdot b,\qquad b=\frac{s_1}2+\frac{s_2}4+u$$
($s_1$ = Laschendicke außen, $s_2$ = Mittelblech, $u$ = Spalt.) Ertragbares Biegemoment, falls nicht in den Lieferbedingungen angegeben:
$$M_{b,ertr}=C_b\cdot W_b\cdot R_X,\qquad W_b=\frac\pi{32}\cdot\frac{d_a^4-d_i^4}{d_a},$$
$C_b>1$ = **plastischer Stützfaktor** (vollplastischer Querschnitt trägt mehr als die Randfaser-Formel sagt), über $\frac{2d_a}{d_a-d_i}$:
$$\text{Stahl: }C_b=1{,}81\left(\tfrac{2d_a}{d_a-d_i}\right)^{-0{,}122-3{,}62\cdot10^{-4}\frac{2d_a}{d_a-d_i}},\qquad\text{Alu: }C_b=1{,}78\left(\tfrac{2d_a}{d_a-d_i}\right)^{-0{,}147-8{,}51\cdot10^{-4}\frac{2d_a}{d_a-d_i}}.$$
:::

:::bsp Hohle Passschraube
Stahl-Hohlbolzen $d_a=12$, $d_i=6\,$mm, $R_C=660$, $R_m=1100\,$N/mm², zweischnittig. Mittelblech $s_2=8\,$mm, Laschen $s_1=4\,$mm, Spalt $u=0{,}5\,$mm, $F=30\,$kN.
- $\frac{d_i}{d_a}=0{,}5$ → $\varphi_H=\frac{0{,}1}{-0{,}77}+0{,}0835+1=0{,}954$.
- $Q_{S,ertr}=2\cdot0{,}954\cdot\frac\pi4(144-36)\cdot0{,}75\cdot660=80{,}1\,$kN.
- Biegung: $b=2+2+0{,}5=4{,}5\,$mm → $M_b=15\,000\cdot4{,}5=67\,500\,$N·mm. $W_b=\frac\pi{32}\cdot\frac{20\,736-1296}{12}=159{,}0\,$mm³; $\frac{2d_a}{d_a-d_i}=4$ → $C_b=1{,}81\cdot4^{-0{,}1235}=1{,}525$ → $M_{b,ertr}=1{,}525\cdot159\cdot1100=266{,}8\,$N·m → $R_b=0{,}253$.
:::

## 4 Kombinierte Belastung (Kap. 9.12.1.3–9.12.1.4)

:::formel Vergleichsspannung im Schaft
Im Schaft mit $A_S=A_{Sch}=\frac\pi4d_{Sch}^2$, $W_t=\frac\pi{16}d_{Sch}^3$:
$$\sigma_Z=\frac{F_{S\,max}}{A_S},\quad\tau_{tM}=\frac{M_t+M_Ü}{W_t},\quad\tau_Q=\frac Q{A_S},\qquad\sigma_V=\sqrt{\sigma_{S\,max}^2+3(\tau_{tM}+\tau_Q)^2}\le R_X.$$
:::

:::formel Interaktion (Abb. 9.37/9.38)
Auslastungsgrade: $R_S=\frac Q{Q_{ertr}}=\frac{\tau_{ges}}{R_C}$, $R_Z=\frac{F_{S\,max}}{F_{S,ertr}}=\frac{\sigma_Z}{R_m}$, $R_b=\frac{M_b}{M_{b,ertr}}$.
**Zug–Scherung:** $R_Z^2+R_S^{10}=1$ (dicke Bleche), $R_Z^2+R_S^3=1$ (MIL-HDBK-5), $R_Z^2+R_S^2=1$ (dünne Bleche).
**Zug–Biegung:** $R_b+R_Z<1$.
:::

:::bsp Fortsetzung
Zusätzlich wirke eine Zugkraft $F_{S\,max}=27{,}4\,$kN mit $F_{S,ertr}=58\,$kN: $R_Z=0{,}472$; Scherung $R_S=\frac{30}{80{,}1}=0{,}375$.
Zug–Scherung (MIL): $0{,}472^2+0{,}375^3=0{,}223+0{,}053=0{,}275<1$ ✓. Zug–Biegung: $0{,}253+0{,}472=0{,}725<1$ ✓.
:::

## 5 Flächenpressung unter dem Kopf (Kap. 9.12.2)

$$p_{Aufl}=\frac{F_{S\,max}}{A_P}\le p_G,\qquad A_P=\frac\pi4(d_W^2-d_h^2).$$
Einflüsse: Quetschgrenze und Kaltverfestigung, Fließbehinderung, Anziehverfahren, Reibung, konstruktives Umfeld. Für die verspannten Teile nur aus **Erfahrung oder Versuch**.

:::formel Grenzflächenpressung (Tab. 9.12, N/mm²)
| Werkstoff | $R_m$ | $p_G$ |
|---|---|---|
| 42CrMo4 | 1000 | 850 |
| 30CrNiMo8 | 1200 | 750 |
| X5CrNiMo18-10 | 500–700 | 210 |
| ausscheidungshärtende Rostfreie | 1200–1500 | 1000–1250 |
| Ti6Al4V | 1100 | 1000 |
| AlZnMgCu0,5 | 450 | 370 |
| **CFK** | – | **140** |
Bei motorischem Anziehen bis zu 25 % weniger.
:::

:::bsp
Im M10-Beispiel: $A_P=\frac\pi4(16^2-10{,}5^2)=114{,}5\,$mm², $p=\frac{27\,376}{114{,}5}=239\,$N/mm² < 370 (AlZnMgCu) ✓ – aber auf **CFK** (140) viel zu hoch → große **Scheibe** nötig.
:::

## 6 Einschraubtiefe (Kap. 9.12.3)

Wie tief muss eine Schraube in ein Gewinde (Mutter oder Bauteil) eingeschraubt sein? Die **kritische Mutternhöhe** $m/d$ nach HSB (Abb. 9.39) hängt vom Festigkeitsverhältnis $R_{m,Mutter}/R_{m,Schraube}$ ab. Abschätzung:

:::formel Erforderliche Einschraubtiefe
**Abscheren der Gewindegänge:**
$$\tau_S=\frac{F_{S\,max}}{\pi\,d_3\,m}\ \Rightarrow\ m_{erf}=\frac{F_{S\,max}}{\pi\,d_3\,\tau_{zul}},\qquad\tau_{zul}\approx0{,}15\,R_m.$$
**Flächenpressung in den Gängen** (alle tragen gleich, $i=m/P$ Gänge, projizierte Fläche je Gang $\pi d_2H_1$):
$$p=\frac{F_{S\,max}\,P}{m\,d_2\,H_1\,\pi}\ \Rightarrow\ m_{erf}=\frac{F_{S\,max}\,P}{p_{zul}\,d_2\,H_1\,\pi},\qquad p_{zul}\approx0{,}15R_m\ (\text{dyn.}),\ 0{,}25R_m\ (\text{stat.}).$$
:::

:::bsp M10 in einem Al-Bauteil ($R_m=450$)
Abscheren: $m_{erf}=\frac{27\,376}{\pi\cdot8{,}16\cdot67{,}5}=15{,}8\,$mm. Pressung (statisch): $H_1=0{,}812$, $m_{erf}=\frac{27\,376\cdot1{,}5}{112{,}5\cdot9{,}026\cdot0{,}812\cdot\pi}=15{,}9\,$mm → Einschraubtiefe ≈ **1,6 d** in Aluminium. Deshalb nutzt man in Leichtmetall **Heli-Coils** oder Durchsteckschrauben mit Stahlmutter.
:::

## Übungsaufgaben

:::aufgabe 1
Eine M8-Schraube 12.9 ($A_S=36{,}6$, $d_2=7{,}188$, $d_3=6{,}466$) wird auf $F_M=20\,$kN vorgespannt ($\mu=0{,}12$, $\varphi=3{,}17°$). Berechne $\sigma_Z$, $\tau_{tM}$, $\sigma_V$ (ohne Betriebslast) und den RF gegen Fließen ($R_{p0,2}=1100$).
:::loesung
$\rho'=7{,}89°$ → $M_t=20\,000\cdot3{,}594\cdot\tan11{,}06°=14\,050\,$N·mm. $d_S=6{,}827$ → $W_t=\frac{\pi\cdot6{,}827^3}{16}=62{,}5\,$mm³ → $\tau=225\,$N/mm². $\sigma_Z=\frac{20\,000}{36{,}6}=546\,$N/mm². $\sigma_V=\sqrt{546^2+3\cdot225^2}=671\,$N/mm². $RF=1100/671=1{,}64$.
:::
:::

:::aufgabe 2
Ein Vollbolzen $d=10\,$mm aus Ti6Al4V ($R_C=660\,$N/mm²) verbindet einschnittig zwei Al-Bleche mit $s=2\,$mm ($\sigma_{LB}=700\,$N/mm²). Welche Querlast ist ertragbar?
:::loesung
Scherung: $Q_S=1\cdot1\cdot\frac\pi4\cdot100\cdot660=51{,}8\,$kN. Lochleibung: $d_a/s=5\ge5{,}5$? Nein, $5<5{,}5$ → $Q_{LB}=10\cdot2\cdot700=14\,$kN. Maßgebend: **Lochleibung, 14 kN** – der Bolzen ist für das dünne Blech überdimensioniert.
:::
:::

:::aufgabe 3
Wie tief muss eine M12-Schraube ($F_{S\,max}=40\,$kN, $d_3=9{,}853$) in ein Stahlbauteil mit $R_m=800$ eingeschraubt werden (Abscheren)?
:::loesung
$\tau_{zul}=120\,$N/mm² → $m_{erf}=\frac{40\,000}{\pi\cdot9{,}853\cdot120}=10{,}8\,$mm ≈ $0{,}9d$.
:::
:::

## Karteikarten

:::karte
Vergleichsspannung einer angezogenen Schraube?
???
$\sigma_V=\sqrt{\sigma_Z^2+3\tau_t^2}$ mit $\sigma_Z=F_{S\,max}/A_S$, $\tau_t=(M_t+M_Ü)/W_t$, $W_t=\pi d_S^3/16$.
:::

:::karte
Ausnutzungsgrad $\nu$?
???
$\sigma_Z\le\nu R_X$ mit $\nu=0{,}7$ (Regel-) bis $0{,}9$ (Feingewinde), wenn die Torsion nicht gesondert erfasst wird.
:::

:::karte
Wie werden Querlasten im Flugzeugbau übertragen?
???
Über Passschrauben (Scherung + Lochleibung), nicht primär über Reibschluss.
:::

:::karte
Lochleibung Passschraube bei sehr dünnem Blech?
???
Für $d_a/s\ge5{,}5$: $Q_{LB}=5{,}5s^2\sigma_{LB}$ (größerer Bolzen hilft nicht mehr).
:::

:::karte
Biegemoment gering vorgespannter Passschraube?
???
$M_b=\frac F2b$, $b=\frac{s_1}2+\frac{s_2}4+u$; ertragbar $C_bW_bR_X$ ($C_b$ = plastischer Stützfaktor).
:::

:::karte
Interaktion Zug–Biegung bei Schrauben?
???
$R_b+R_Z<1$.
:::

:::karte
Erforderliche Einschraubtiefe (Abscheren)?
???
$m_{erf}=\frac{F_{S\,max}}{\pi d_3\tau_{zul}}$, $\tau_{zul}\approx0{,}15R_m$ (in Al ca. 1,6 d).
:::

:::karte
Grenzflächenpressung CFK?
???
Nur ca. 140 N/mm² → große Scheiben unter Kopf und Mutter.
:::
