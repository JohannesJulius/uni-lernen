---
title: 6.3 Wechselstrom III – Wirk-, Blind-, Scheinleistung, Kompensation, Resonanz, Frequenzverhalten
chapter: 6 Wechselstrom
minutes: 130
sources: Elektrotechnik/Elektrotechnik - 6.3 Wechselstrom III.pdf
---

:::ziel
- Momentanleistung bei Phasenverschiebung; **Wirk-, Blind-, Scheinleistung**; komplexe Scheinleistung $\underline S=\underline U\,\underline I^*$.
- Leistungsdreieck, Leistungsfaktor $\cos\varphi$, Bedeutung im Netz.
- **Blindleistungskompensation** mit Parallelkondensator berechnen.
- **Serien- und Parallelresonanz**, Impedanzcharakteristik, Grenzfälle $\omega\to0$, $\omega\to\infty$ (Filterwirkung).
:::

## Leistung bei beliebigem φ

Mit $u=\hat U\cos\omega t$, $i=\hat I\cos(\omega t-\varphi)$ und Effektivwerten:
$$p(t)=\underbrace{UI\cos\varphi}_{P}\,[1+\cos2\omega t]+\underbrace{UI\sin\varphi}_{Q}\,\sin2\omega t.$$
Die Leistung schwingt mit **doppelter Frequenz**; ein konstanter Anteil wird verbraucht, ein pendelnder hat Mittelwert 0. Zeitweise ist $p<0$: Energie fließt zur Quelle zurück.

:::formel Leistungsgrößen
- **Wirkleistung** (tatsächlich umgesetzt): $P=UI\cos\varphi$ [W]
- **Blindleistung** (pendelt): $Q=UI\sin\varphi$ [var]; induktiv $Q>0$, kapazitiv $Q<0$
- **Scheinleistung** (Netzbelastung, Dimensionierung!): $S=UI=\sqrt{P^2+Q^2}$ [VA]
- **Leistungsfaktor**: $\lambda=\cos\varphi=\frac PS$
:::

:::formel Komplexe Scheinleistung
$\underline U\,\underline I$ würde die Phasen **addieren** (falsch). Mit dem **konjugierten** Strom:
$$\underline S=\underline U\,\underline I^*=UI\e^{j(\varphi_u-\varphi_i)}=P+jQ=\underline Z\,I^2=\frac{U^2}{\underline Z^*}.$$
Am Vorzeichen von $\operatorname{Im}\underline S$ erkennt man die Charakteristik (+ induktiv, − kapazitiv). RL-Serie: $\underline S=I^2(R+j\omega L)$ – Realteil an R, Imaginärteil an L.
:::

**Leistungsdreieck:** $P=S\cos\varphi$, $Q=S\sin\varphi$, $\tan\varphi=\frac QP$. Beispiel Industrie: $P=800\,$kW, $Q=600\,$kvar ⇒ $S=1000\,$kVA, $\varphi\approx37°$ – der Trafo muss für 1000 kVA ausgelegt sein.

| Verbraucher | $\cos\varphi$ |
|---|---|
| Glühlampe, Heizung | ≈ 1 |
| Motor im Leerlauf | ≈ 0,3 |
| Motor Volllast | ≈ 0,85 |
| Transformator | 0,8–0,9 |
| Netzteil mit PFC | > 0,95 |

Blindleistung belastet Leitungen und Trafos: höhere Ströme, Verluste $\propto I^2$, Spannungsabfälle. Bei gleicher Wirkleistung fließt bei $\cos\varphi=0{,}7$ statt $0{,}95$ **36 % mehr Strom**. Industriekunden zahlen bei $\cos\varphi<0{,}9$ Strafgebühren.

## Blindleistungskompensation

Induktive Verbraucher ($Q_L>0$) kompensiert man mit **parallel** geschalteten Kondensatoren ($Q_C<0$). Parallel, damit die **Spannung am Verbraucher und damit seine Wirkleistung unverändert** bleiben.

:::formel Kompensationsleistung
$$|Q_C|=P\,(\tan\varphi_1-\tan\varphi_2),\qquad C=\frac{|Q_C|}{\omega U^2}\quad(\text{da }|Q_C|=U^2\omega C).$$
($\varphi_1$ vorher, $\varphi_2$ Ziel; vollständig: $\varphi_2=0$.)
:::

:::bsp Betrieb
$P=100\,$kW, $\cos\varphi_1=0{,}8$, $U=400\,$V: $Q_L=75\,$kvar, $S_1=125\,$kVA, $I_1=312\,$A. Vollkompensation $Q_C=-75\,$kvar ⇒ $S_2=100\,$kVA, $I_2=250\,$A: Strom −20 %, Leitungsverluste −36 %.
:::

## Resonanz

:::formel Serienschwingkreis (R, L, C in Reihe)
$$\underline Z(\omega)=R+j\left(\omega L-\frac1{\omega C}\right),\qquad\omega_0=\frac1{\sqrt{LC}}\ (\text{Thomson}),\quad f_0=\frac{\omega_0}{2\pi}.$$
Bei $\omega_0$: $\underline Z=R$ **reell und minimal** ⇒ Strom **maximal**, nur Wirkleistung ($Q=0$). Spannungen an L und C können dabei viel größer als die Gesamtspannung sein (Spannungsüberhöhung)!
:::

:::formel Parallelschwingkreis
$$\underline Y(\omega)=\frac1R+j\left(\omega C-\frac1{\omega L}\right),\qquad\omega_0=\frac1{\sqrt{LC}}.$$
Bei $\omega_0$: $\underline Y$ minimal ⇒ $\underline Z$ **maximal**, reell; Strom von außen minimal – L und C tauschen Energie untereinander aus (Kreisstrom).
:::

**Impedanzcharakteristik:** $\operatorname{Im}\underline Z>0$ induktiv, $<0$ kapazitiv, $=0$ Resonanz/ohmsch. Serienkreis: $\omega<\omega_0$ kapazitiv ($\frac1{\omega C}>\omega L$), $\omega>\omega_0$ induktiv.

:::rezept Grenzfälle ω → 0 und ω → ∞
| | $\omega\to0$ (Gleichstrom) | $\omega\to\infty$ |
|---|---|---|
| Kondensator | Unterbrechung ($Z\to\infty$) | Kurzschluss ($Z\to0$) |
| Spule | Kurzschluss | Unterbrechung |
Schaltung zweimal neu zeichnen, Blindelemente ersetzen, Verhalten ablesen ⇒ erklärt Filterwirkung (**Tiefpass, Hochpass, Bandpass**).
:::

## Aufgaben (Aufgaben 20, 21, Klausuraufgabe)

:::aufgabe 1 Leuchtstoffröhre
Röhre mit Vorschaltdrossel (R-L in Reihe), $P=40\,$W, $I=0{,}4\,$A an 230 V/50 Hz. (a) $S$, $\cos\varphi$? (b) $R$, $\omega L$? (c) Wie Kompensationskondensator schalten? (d) $C$?
:::loesung
(a) $S=230\cdot0{,}4=92\,$VA, $\cos\varphi=\frac{40}{92}=0{,}435$.
(b) $R=\frac P{I^2}=250\,\Omega$; $Q=\sqrt{92^2-40^2}=82{,}8\,$var ⇒ $\omega L=\frac Q{I^2}=518\,\Omega$ (Kontrolle $|Z|=\frac{230}{0{,}4}=575=\sqrt{250^2+518^2}$ ✓).
(c) **Parallel** zur Röhre (Spannung und Wirkleistung der Röhre bleiben gleich).
(d) $C=\frac{Q}{\omega U^2}=\frac{82{,}8}{314\cdot230^2}\approx5{,}0\,$µF.
:::
:::

:::aufgabe 2 Resonanz
Serienkreis $R=50\,\Omega$, $L=20\,$mH, $C=50\,$µF. (a) $\omega_0$, $f_0$? (b) $\underline Z(\omega_0)$? (c) Charakteristik bei $\omega_0/2$? (d) $\underline Z$ für $\omega\to0$, $\infty$ – Filterwirkung?
:::loesung
(a) $\omega_0=\frac1{\sqrt{10^{-6}}}=1000\,$s⁻¹, $f_0=159\,$Hz. (b) $50\,\Omega$. (c) $\omega=500$: $\omega L=10$, $\frac1{\omega C}=40$ ⇒ $\operatorname{Im}\underline Z=-30<0$ ⇒ **kapazitiv**. (d) Beide Grenzfälle $|Z|\to\infty$ (C sperrt bei tiefen, L bei hohen Frequenzen) ⇒ Strom nur nahe $\omega_0$: **Bandpass**.
:::
:::

:::aufgabe 3 Klausuraufgabe Zweipol
$\underline U=8\,\mathrm V\e^{j\pi/2}$ (Effektivwert), $R=0{,}8\,$kΩ, $L=16\,$mH, $\omega=5\cdot10^4\,$s⁻¹, aufgenommene Leistung $\underline S=40(1+j)\,$mVA. Schaltung: $L$ parallel zur Reihenschaltung aus $R$ und $C$ ($C$ unbekannt). (a) $\underline I_e$, Charakteristik? (b) $\underline Z_e$, $\underline Y_e$? (c) $\underline I_L$, $\underline I_R$, $\underline U_R$, $\underline U_C$? (e) $I_e$, $\hat I_e$, $\varphi_i$? (f) Arbeitspunkt bei reiner Wirkleistung; $\underline Z_e$ für $\omega\to0$, $\infty$?
:::loesung
(a) $\underline I_e^*=\frac{\underline S}{\underline U}=\frac{0{,}04(1+j)}{8j}=0{,}005(1-j)$ ⇒ $\underline I_e=5(1+j)\,$mA $=7{,}07\,\mathrm{mA}\,\e^{j45°}$. $\operatorname{Im}\underline S>0$ ⇒ **induktiv**.
(b) $\underline Z_e=\frac{\underline U}{\underline I_e}=\frac{8j}{0{,}005(1+j)}=800(1+j)\,\Omega$; $\underline Y_e=\frac{1-j}{1600}\,$S $=(0{,}625-j0{,}625)\,$mS.
(c) $\omega L=800\,\Omega$: $\underline I_L=\frac{8j}{800j}=10\,$mA (Phase 0°). $\underline I_R=\underline I_e-\underline I_L=(-5+5j)\,$mA. $\underline U_R=R\underline I_R=(-4+4j)\,$V. $\underline U_C=\underline U-\underline U_R=(4+4j)\,$V. (Daraus $\frac1{\omega C}=800\,\Omega$, $C=25\,$nF – wird aber nicht gebraucht.)
(e) $I_e=7{,}07\,$mA, $\hat I_e=10\,$mA, $\varphi_i=45°$.
(f) **Resonanz** (Phasenresonanz). $\omega\to0$: L Kurzschluss ⇒ $\underline Z_e\to0$. $\omega\to\infty$: L offen, C Kurzschluss ⇒ $\underline Z_e\to R=800\,\Omega$.
:::
:::

:::info Diskussion: Westinghouse vs. Edison
Gleichstrom 110 V (Edison) hat hohe Ströme ⇒ hohe Leitungsverluste $I^2R$, nur kurze Strecken. Wechselstrom (Westinghouse) lässt sich **transformieren** – Übertragung mit hoher Spannung, kleinem Strom. Heute gibt es zusätzlich **HGÜ** (Hochspannungs-Gleichstrom-Übertragung) für sehr lange Strecken/Seekabel, weil leistungselektronische Wandler verfügbar sind und keine Blindleistung/kapazitiven Ladeströme auftreten.
:::

## Karteikarten

:::karte
P, Q, S?
???
$P=UI\cos\varphi$ [W], $Q=UI\sin\varphi$ [var], $S=UI=\sqrt{P^2+Q^2}$ [VA].
:::

:::karte
Komplexe Scheinleistung?
???
$\underline S=\underline U\,\underline I^*=P+jQ$
:::

:::karte
Kompensationskondensator?
???
Parallel schalten; $|Q_C|=P(\tan\varphi_1-\tan\varphi_2)$, $C=\frac{|Q_C|}{\omega U^2}$.
:::

:::karte
Resonanzfrequenz und Verhalten Serien-/Parallelkreis?
???
$\omega_0=1/\sqrt{LC}$; Serie: Z minimal (=R), Strom max. Parallel: Z maximal, Strom min. Beide reell, Q=0.
:::

:::karte
C und L bei ω→0 und ω→∞?
???
C: offen bzw. Kurzschluss. L: Kurzschluss bzw. offen.
:::
