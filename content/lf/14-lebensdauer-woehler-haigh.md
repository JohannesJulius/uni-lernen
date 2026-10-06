---
title: 14 Lebensdauerabschätzung I – Begriffe, Wöhlerlinie, Streuung, Smith- und Haigh-Diagramm
chapter: Kap. 10 Lebensdauerabschätzung
minutes: 110
sources: Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#108; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#110; Bauelemente der Luftfahrzeuge/Bauelemente-1-V5.0.16-2025-05-13.pdf#114
---

:::ziel
- Die Einteilung der **Ermüdungsfestigkeit** (Schwing-, Betriebsfestigkeit, Rissfortschritt) und die Bereiche **Kurzzeit-, Zeit-, Dauerfestigkeit** (LCF/HCF) kennen.
- Ein **Schwingspiel** beschreiben: $\sigma_o$, $\sigma_u$, $\sigma_m$, $\sigma_a$, Spannungsverhältnis $R$, Formzahl $\alpha_k$.
- Die **Wöhlerlinie** als Gerade im doppelt-logarithmischen Diagramm aufstellen ($N=K\sigma^{-m}$) und auswerten; die **Weibull-Form** kennen.
- **Streuung** und Überlebenswahrscheinlichkeit auswerten ($P_Ü=\frac{3i-1}{3n+1}$, $T_N$).
- **Smith-** und **Haigh-Diagramm** lesen; **Goodman** und **Gerber** anwenden.
:::

## 1 Worum geht es?

Bisher haben wir **statisch** nachgewiesen: Hält das Bauteil die Bruchlast **einmal** aus? Ein Flugzeug erfährt aber **Millionen** wechselnder Lasten (Böen, Start/Landung, Druckkabine). Auch weit unter der statischen Festigkeit können sie zu **Ermüdungsrissen** und Bruch führen.

:::info Geschichte
1829 Albert (Kettenbrüche im Bergbau nach 93 000 Lastwechseln) · **1870 Wöhler** (Zusammenhang Beanspruchung – ertragbare Schwingspielzahl → **Wöhlerlinie**) · 1930er: Luftfahrt braucht nicht-einstufige Belastung · **1939 Gaßner** prägt „**Betriebsfestigkeit**" · **1945 Miner** (lineare Schadensakkumulation, Grundgedanke schon Palmgren 1924 für Kugellager) · 1963 Schenck Hydropuls (Zufallslasten im Versuch).
:::

:::def Einteilung der Ermüdungsfestigkeit (Abb. 10.1)
- **Schwingfestigkeit** – einstufige Belastung (konstante Amplitude),
- **Betriebsfestigkeit** – zufallsartige Belastung,
- **Rissfortschritt** – bei ein- und zufallsartiger Belastung.
:::

:::formel Bereiche nach Lastspielzahl $N$
| Bereich | $N$ |
|---|---|
| Kurzzeitfestigkeit | $N\le10^3$ |
| Zeitfestigkeit | $10^3<N\le2\cdot10^6$ |
| Dauerfestigkeit | $N\ge2\cdot10^6$ |
| LCF (Low Cycle Fatigue, Triebwerksbau) | $10^2<N\le5\cdot10^4$ |
| HCF (High Cycle Fatigue) | $N\ge5\cdot10^4$ |
:::

## 2 Das Schwingspiel

:::formel Kenngrößen (Abb. 10.2/10.3)
$$\sigma_m=\frac{\sigma_o+\sigma_u}2\ (\text{Mittelspannung}),\qquad\sigma_a=\frac{\sigma_o-\sigma_u}2\ (\text{Amplitude}),\qquad R=\frac{\sigma_u}{\sigma_o}\ (\text{Spannungsverhältnis}).$$
Sonderfälle: $R=+1$ **statisch**, $R=0$ **schwellend** (0 bis $\sigma_o$), $R=-1$ **wechselnd** ($\sigma_m=0$).
**Formzahl** (Kerbe): $\alpha_k=\dfrac{\sigma_{max}}{\sigma_n}$ – Spannungsspitze im Kerbgrund bezogen auf die **Netto**nennspannung.
Spannungen können auf den **Brutto**- oder **Netto**querschnitt bezogen sein – immer angeben!
:::

:::bsp
Eine Flügelunterschale sieht im Flug $\sigma=40\ldots160\,$N/mm². → $\sigma_m=100$, $\sigma_a=60\,$N/mm², $R=0{,}25$.
:::

:::formel Lebensdauer- und Schädigungsgrößen
$n$ vorhandene Lastspiele, $N$ ertragbare Lastspiele, $L_{br}$ Lebensdauer bis Bruch, $L_{det}$ bis zum **entdeckbaren** Riss, $L_d$ garantierte **Entwurfslebensdauer**, $L_r$ rechnerisch.
Teilschädigung $D_i=\frac{n_i}{N_i}$, Gesamtschädigung $D=\sum D_i$ (Miner, Lektion 15).
Reservefaktor Lebensdauer:
$$RF_L=\frac{\text{nachgewiesene Lebensdauer}}{\text{nachzuweisende Lebensdauer}}=\frac{L_d/D}{j_L\cdot L_d}=\frac{1}{j_L\cdot D}\ge1,$$
$j_L$ = Sicherheitszahl auf die Lebensdauer (Spezifikation).
:::

## 3 Wöhlerlinie (Kap. 10.3.1)

Man prüft viele Proben bei **konstanter Amplitude** $\sigma_a$ (und festem $R$) und trägt die Bruch-Lastspielzahl $N$ auf. Einflüsse: **Werkstoff, Geometrie (Größe, Oberfläche, Kerbe), Beanspruchungsart, Frequenz, Temperatur, Umgebung**. Prüfmaschinen: Umlaufbiege-, Resonanz-, Hydraulikpulsator, servohydraulisch. Bauteil-Wöhlerlinien entweder am Bauteil gemessen oder mit einem **Gesamteinflussfaktor** aus der Werkstoff-Wöhlerlinie abgeleitet.

:::formel Gerade im doppelt-logarithmischen Diagramm (Gl. 10.1–10.3)
Im Zeitfestigkeitsbereich:
$$N=N_D\left(\frac{\sigma_D}{\sigma}\right)^m=\frac K{\sigma^m},\qquad K=N_D\,\sigma_D^m.$$
$m$ = **Wöhlerlinienexponent** (Neigung), aus Regression oder aus zwei Punkten:
$$m=-\frac{\log N_D-\log N}{\log\sigma_D-\log\sigma}.$$
(Im log-log-Diagramm ist das eine Gerade mit Steigung $-1/m$.)
:::

:::bsp Wöhlerlinie aus zwei Punkten
Dauerfestigkeit $\sigma_D=100\,$N/mm² bei $N_D=2\cdot10^6$; Zeitfestigkeitspunkt $\sigma=250\,$N/mm² bei $N=10^4$.
$m=-\frac{6{,}301-4}{2-2{,}398}=\frac{2{,}301}{0{,}398}=5{,}78$.
Ertragbare Lastspiele bei $\sigma_a=160\,$N/mm²: $N=2\cdot10^6\cdot\left(\frac{100}{160}\right)^{5{,}78}=1{,}32\cdot10^5$.
Bei 200 N/mm²: $3{,}6\cdot10^4$; bei 130: $4{,}4\cdot10^5$.
Merke: **10 % mehr Spannung → bei $m\approx6$ gut 40 % weniger Lebensdauer** ($1{,}1^{-5{,}78}=0{,}58$).
:::

:::formel Weibull-Form (im Flugzeugbau verbreitet, Gl. 10.4/10.5)
$$\sigma_a=c_1+\frac{c_2-c_1}{e^{\left(\frac{\log N}{c_3}\right)^{c_4}}},\qquad\log N=c_3\left[\ln\frac{c_2-c_1}{\sigma_a-c_1}\right]^{1/c_4}$$
$c_1=\sigma_D$ (Dauerfestigkeit), $c_2=\sigma_{ult}$ (statische Bruchfestigkeit), $c_3\approx3{,}8$, $c_4\approx2{,}9$ (Metalle; Regressionsparameter). Vorteil: beschreibt den **ganzen** Verlauf von $\sigma_{ult}$ bei kleinem $N$ bis zur Dauerfestigkeit.
:::

## 4 Streuung (Kap. 10.3.1, Abb. 10.7/10.8)

Gleiche Proben brechen bei sehr unterschiedlichen $N$ – Ermüdung **streut** stark. Auswertung je Laststufe:

:::formel Statistische Auswertung
1. Messwerte ordnen, Rang $i$ von $n$ Proben; **Überlebenswahrscheinlichkeit** $P_Ü=\dfrac{3i-1}{3n+1}$.
2. Ins Wahrscheinlichkeitsnetz eintragen ($P_Ü$ über $\log N$) → Ausgleichsgerade.
3. **Streumaß** $T_N=\dfrac{N_{90}}{N_{10}}$ (aus den Lastspielzahlen bei 90 % und 10 % Überlebenswahrscheinlichkeit; in der Literatur oft als Kehrwert $1:T_N$ angegeben).
4. **Logarithmischer Mittelwert** $\log N_{50}=\frac1n\sum\log N_i$, **Standardabweichung** $s=\sqrt{\frac1{n-1}\sum(\log N_i-\log N_{50})^2}$.
Haigh-Diagramme aus WL/HSB gelten meist für **$P_Ü=50\,\%$** – d. h. jedes zweite Teil wäre vorher gebrochen!
:::

:::bsp $P_Ü$ für 8 Proben
$n=8$: $P_Ü=\frac{3i-1}{25}$ → 8 %, 20 %, 32 %, 44 %, 56 %, 68 %, 80 %, 92 % (wie in der Skripttabelle zu Abb. 10.7).
:::

## 5 Smith- und Haigh-Diagramm (Kap. 10.3.2–10.3.3)

Die Wöhlerlinie gilt nur für **ein** $R$. Wie wirkt die **Mittelspannung**? Je höher $\sigma_m$ (Zug), desto **kleiner** die ertragbare Amplitude.

:::def Smith-Diagramm (Abb. 10.9)
Über der Mittelspannung $\sigma_m$ werden **Ober- und Unterspannung** ($\sigma_m\pm\sigma_A$) im gleichen Maßstab aufgetragen. Für die **Dauerfestigkeit** gibt es nur **einen** Kurvenzug für alle $R$ (Vorteil), begrenzt durch $R_e$/$R_m$. Im Zeitfestigkeitsbereich braucht man mehrere Kurven.
:::

:::def Haigh-Diagramm (in der Luftfahrt am gebräuchlichsten, Abb. 10.10)
Abszisse: **Mittelspannung $\sigma_m$**, Ordinate: **Amplitude $\sigma_a$**. Für **konstante Lastspielzahlen** ($10^4$, $10^5$, …) werden Kurven eingetragen; Strahlen durch den Ursprung sind Linien konstanten $R$ ($R=-1$ senkrecht, $R=0$ unter 45°, $R=+1$ waagerecht). Ablesen: zu $(\sigma_m;\sigma_a)$ die Bruch-Lastspielzahl – oder zu gefordertem $N$ und $\sigma_m$ die zulässige Amplitude.
:::

:::formel Näherungen für die $N$-Kurven (Gl. 10.10/10.11)
$\sigma'_e$ = Amplitude bei $\sigma_m=0$ ($R=-1$) für die betrachtete Lastspielzahl (aus der Wöhlerlinie), $\sigma_{ult}$ = Bruchfestigkeit:
$$\textbf{Goodman-Gerade: }\ \frac{\sigma_a}{\sigma'_e}+\frac{\sigma_m}{\sigma_{ult}}=1\ \Rightarrow\ \sigma_a=\sigma'_e\left(1-\frac{\sigma_m}{\sigma_{ult}}\right)$$
$$\textbf{Gerber-Parabel: }\ \frac{\sigma_a}{\sigma'_e}+\left(\frac{\sigma_m}{\sigma_{ult}}\right)^2=1\ \Rightarrow\ \sigma_a=\sigma'_e\left[1-\left(\frac{\sigma_m}{\sigma_{ult}}\right)^2\right]$$
**Goodman** ist konservativer (für **spröde** Werkstoffe), **Gerber** für **zähe** Werkstoffe. So kann man eine Wöhlerlinie für ein $R$ (konservativ) auf andere $R$ umrechnen (Abb. 10.13/10.14).
:::

:::bsp Mittelspannungseinfluss
Al-Legierung, $\sigma_{ult}=480\,$N/mm², für $N=10^5$ gilt $\sigma'_e=150\,$N/mm² ($R=-1$). Wie groß darf die Amplitude bei $\sigma_m=100\,$N/mm² sein?
Goodman: $\sigma_a=150\left(1-\frac{100}{480}\right)=118{,}8\,$N/mm². Gerber: $\sigma_a=150\left(1-0{,}0434\right)=143{,}5\,$N/mm².
:::

## Übungsaufgaben

:::aufgabe 1
Eine Probe schwingt zwischen $\sigma_u=-50$ und $\sigma_o=150\,$N/mm². Bestimme $\sigma_m$, $\sigma_a$ und $R$.
:::loesung
$\sigma_m=50$, $\sigma_a=100\,$N/mm², $R=-50/150=-0{,}33$.
:::
:::

:::aufgabe 2
Mit der Wöhlerlinie aus dem Beispiel ($m=5{,}78$, $\sigma_D=100$, $N_D=2\cdot10^6$): Bei welcher Amplitude erträgt das Bauteil $10^5$ Lastspiele?
:::loesung
$\sigma=\sigma_D\left(\frac{N_D}N\right)^{1/m}=100\cdot20^{1/5{,}78}=100\cdot1{,}679=168\,$N/mm².
:::
:::

:::aufgabe 3
Wöhlerlinie mit $m=4$, $K=10^{14}$ (N/mm²)⁴. Wie viele Lastspiele bei $\sigma_a=150\,$N/mm²? Um welchen Faktor steigt $N$, wenn man $\sigma_a$ um 20 % senkt?
:::loesung
$N=10^{14}/150^4=10^{14}/5{,}06\cdot10^8=1{,}98\cdot10^5$. Faktor $0{,}8^{-4}=2{,}44$.
:::
:::

:::aufgabe 4
Für $N=10^6$ sei $\sigma'_e=110\,$N/mm², $\sigma_{ult}=450\,$N/mm². Welche Oberspannung ist bei **schwellender** Belastung ($R=0$) nach Goodman zulässig?
:::loesung
$R=0$ → $\sigma_m=\sigma_a$. $\sigma_a=110(1-\sigma_a/450)$ → $\sigma_a(1+110/450)=110$ → $\sigma_a=88{,}4\,$N/mm² → $\sigma_o=2\sigma_a=176{,}8\,$N/mm².
:::
:::

## Karteikarten

:::karte
Kurzzeit-, Zeit-, Dauerfestigkeit?
???
$N\le10^3$; $10^3<N\le2\cdot10^6$; $N\ge2\cdot10^6$.
:::

:::karte
$\sigma_m$, $\sigma_a$, $R$?
???
$\sigma_m=\frac{\sigma_o+\sigma_u}2$, $\sigma_a=\frac{\sigma_o-\sigma_u}2$, $R=\frac{\sigma_u}{\sigma_o}$ ($R=-1$ wechselnd, $0$ schwellend, $+1$ statisch).
:::

:::karte
Formzahl $\alpha_k$?
???
$\alpha_k=\sigma_{max}/\sigma_n$ (Kerbspannung / Nettonennspannung).
:::

:::karte
Wöhlerlinie im log-log-Diagramm?
???
$N=N_D(\sigma_D/\sigma)^m=K\sigma^{-m}$; $m=-\frac{\log N_D-\log N}{\log\sigma_D-\log\sigma}$.
:::

:::karte
Weibull-Parameter der Wöhlerlinie?
???
$c_1=\sigma_D$, $c_2=\sigma_{ult}$, $c_3\approx3{,}8$, $c_4\approx2{,}9$ (Metalle).
:::

:::karte
Überlebenswahrscheinlichkeit einer Messreihe?
???
$P_Ü=\frac{3i-1}{3n+1}$; Streumaß $T_N=N_{90}/N_{10}$; WL/HSB-Diagramme meist $P_Ü=50\,\%$.
:::

:::karte
Haigh-Diagramm?
???
$\sigma_a$ über $\sigma_m$, Kurven konstanter Lastspielzahl, Strahlen konstanten $R$; in der Luftfahrt üblich.
:::

:::karte
Goodman vs. Gerber?
???
Goodman $\sigma_a=\sigma'_e(1-\sigma_m/\sigma_{ult})$ (konservativ, spröde); Gerber $\sigma_a=\sigma'_e(1-(\sigma_m/\sigma_{ult})^2)$ (zäh).
:::

:::karte
Lebensdauer-Reservefaktor?
???
$RF_L=\frac{1}{j_L\cdot D}\ge1$ (nachgewiesene / nachzuweisende Lebensdauer).
:::
