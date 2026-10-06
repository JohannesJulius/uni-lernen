---
title: 6.1 Wechselstrom I – Kennwerte, Effektivwert, Zeiger und komplexe Rechnung
chapter: 6 Wechselstrom
minutes: 110
sources: Elektrotechnik/Elektrotechnik - 6.1 Wechselstrom I.pdf
---

:::ziel
- Periodische Größen und Wechselgrößen; Periode, Frequenz, Kreisfrequenz.
- **Mittelwert, Gleichrichtwert, Effektivwert** definieren und berechnen (nicht nur für Sinus!).
- **Zeigerdarstellung** und komplexe Wechselstromrechnung (mit $j$); Fest- und Drehzeiger; Amplituden- vs. Effektivwertzeiger.
- Komplexe Zahlen sicher umrechnen (siehe Mathe 1).
:::

## Grundbegriffe

- **Periodisch**: $u(t)=u(t+T)$; **Frequenz** $f=\frac1T$ [Hz], **Kreisfrequenz** $\omega=2\pi f$ [s⁻¹]. Netz: 50 Hz (Europa), 60 Hz (USA); Flugzeugbordnetz: **400 Hz** (leichtere Trafos/Generatoren).
- **Wechselgröße**: periodisch mit arithmetischem Mittelwert 0.
- **Fourier**: Jede (periodische) Wechselgröße ist eine Überlagerung von Sinusschwingungen $a(t)=\sum\hat A_n\sin(n\omega t+\varphi_n)$ (Mathe 1, Fourier-Integrale) ⇒ es genügt, **sinusförmige** Größen zu verstehen.

## Kennwerte

| Kennwert | Definition | Sinus |
|---|---|---|
| arithmetischer Mittelwert | $\bar a=\frac1T\int_{t_0}^{t_0+T}a(t)\,\d t$ | $0$ |
| Gleichrichtwert | $\overline{\lvert a\rvert}=\frac1T\int\lvert a(t)\rvert\,\d t$ | $\frac2\pi\hat A\approx0{,}637\hat A$ |
| **Effektivwert** (RMS) | $A_{eff}=\sqrt{\frac1T\int a^2(t)\,\d t}$ | $\frac{\hat A}{\sqrt2}\approx0{,}707\hat A$ |

:::def Effektivwert – physikalische Bedeutung
Der Effektivwert ist der Wert eines **Gleichstroms**, der in einem Widerstand in derselben Zeit **dieselbe Wärme** erzeugt: $I_{eff}^2RT=\int_0^Ti^2(t)R\,\d t$.
:::

Herleitung Sinus: $\frac1T\int_0^T\hat A^2\sin^2(\omega t)\,\d t=\hat A^2\cdot\frac12$ (Mathe 1: $\int_0^{2\pi}\sin^2=\pi$) ⇒ $A_{eff}=\frac{\hat A}{\sqrt2}$.

Beispiele: Netz $U=230\,$V ⇒ $\hat U=325\,$V; Sicherung 16 A ⇒ $\hat I=22{,}6\,$A. **Messgeräte zeigen den Effektivwert an.**

:::merke Notation ab jetzt
Kleinbuchstaben $u(t)$, $i(t)$ = Zeitverläufe; $\hat U$, $\hat I$ = Amplituden; $U$, $I$ (ohne Index) = **Effektivwerte**; unterstrichen $\underline U$ = komplexe Größen (Zeiger).
:::

## Zeigerdarstellung und komplexe Rechnung

Eine sinusförmige Größe ist ein rotierender **Zeiger** in der komplexen Ebene (Winkelgeschwindigkeit $\omega$, Länge = Amplitude, Startwinkel $\varphi_u$). In der E-Technik heißt die imaginäre Einheit $j$ ($j^2=-1$), weil $i$ der Strom ist.

**Euler:** $\e^{j\varphi}=\cos\varphi+j\sin\varphi$; auswendig: $\e^{j0}=1$, $\e^{j\pi/2}=j$, $\e^{j\pi}=-1$, $\e^{-j\pi/2}=-j$.

$$\underline u(t)=\hat U\e^{j(\omega t+\varphi_u)}=\underbrace{\hat U\e^{j\varphi_u}}_{\text{Festzeiger }\underline{\hat U}}\cdot\underbrace{\e^{j\omega t}}_{\text{Drehung}},\qquad u(t)=\operatorname{Re}\underline u(t)=\hat U\cos(\omega t+\varphi_u).$$

Bei **einer** Frequenz drehen alle Zeiger gleich schnell ⇒ $\e^{j\omega t}$ kürzt sich aus allen Gleichungen ⇒ man rechnet nur mit **Festzeigern**. Bezugsfunktion ist der **Kosinus**; Sinusgrößen umrechnen: $\sin x=\cos(x-90°)$.

:::achtung Amplituden- oder Effektivwertzeiger?
- Amplitudenzeiger: $\underline{\hat U}=\hat U\e^{j\varphi_u}$
- **Effektivwertzeiger**: $\underline U=U\e^{j\varphi_u}$, $U=\hat U/\sqrt2$ – üblich in Prüfung und Energietechnik („komplexer Effektivwert").
Für Impedanzen egal (Quotient), für Leistungen nicht: $\underline S=\underline U\,\underline I^*$ gilt mit Effektivwertzeigern (mit Amplitudenzeigern Faktor $\frac12$).
:::

### Komplexe Zahlen – Wiederholung

- Komponentenform $\underline z=a+jb$, Polarform $\underline z=z\e^{j\varphi}$; $z=\sqrt{a^2+b^2}$, $\varphi=\arctan\frac ba$ (**Quadrant prüfen!**), $a=z\cos\varphi$, $b=z\sin\varphi$.
- Konjugiert: $\underline z^*=a-jb=z\e^{-j\varphi}$; $\underline z\,\underline z^*=z^2$.
- **Addieren kartesisch, multiplizieren/dividieren polar** (Beträge mal/durch, Phasen plus/minus).

## Aufgaben (Aufgaben 17 und 18 der Folien)

:::aufgabe 1
(a) Sinus mit $\hat U=17\,$V – Multimeteranzeige? (b) Rechteck ±10 V: Mittelwert, Gleichrichtwert, Effektivwert? (c) Warum gilt $\hat A/\sqrt2$ hier nicht?
:::loesung
(a) $\frac{17}{\sqrt2}\approx12\,$V. (b) $\bar u=0$; $\overline{|u|}=10\,$V; $U_{eff}=\sqrt{\frac1T\int100\,\d t}=10\,$V. (c) Die Faustregel gilt nur für **Sinus**; beim Rechteck ist $u^2$ immer 100.
:::
:::

:::aufgabe 2
$u(t)=325\,\mathrm V\cos(\omega t)$, $i(t)=10\,\mathrm A\sin(\omega t)$. (a) Zeiger? (b, c) $\underline U$, $\underline I$ kartesisch und polar (Effektivwerte)? (d) $\underline U\,\underline I^*$? (e) Was fällt auf?
:::loesung
$i=10\cos(\omega t-90°)$ ⇒ Strom eilt 90° nach. Effektivwertzeiger: $\underline U=230\,\mathrm V=230\e^{j0}$, $\underline I=-j7{,}07\,\mathrm A=7{,}07\e^{-j90°}\,$A.
(d) $\underline U\,\underline I^*=230\cdot(+j7{,}07)=j1626\,$VA $=1626\e^{j90°}$.
(e) Realteil 0: **keine Wirkleistung**, nur Blindleistung (+, also induktiv) – Strom und Spannung sind 90° verschoben, wie an einer idealen Spule. (Mit Amplitudenzeigern käme $j3250$ heraus – Faktor 2!)
:::
:::

:::aufgabe 3
Addiere $u_1=10\cos(\omega t)$ und $u_2=10\cos(\omega t+90°)$ mit Zeigern.
:::loesung
$10+10j=14{,}1\e^{j45°}$ ⇒ $u=14{,}1\cos(\omega t+45°)$.
:::
:::

## Karteikarten

:::karte
Effektivwert – Definition und Sinuswert?
???
$A_{eff}=\sqrt{\frac1T\int a^2\,\d t}$; Sinus: $\hat A/\sqrt2$.
:::

:::karte
Gleichrichtwert Sinus?
???
$\frac2\pi\hat A\approx0{,}637\hat A$
:::

:::karte
Warum kürzt sich $\e^{j\omega t}$ in der Wechselstromrechnung?
???
Alle Größen haben dieselbe Frequenz, alle Zeiger drehen gleich schnell – man rechnet mit Festzeigern.
:::

:::karte
Faustregel komplexes Rechnen?
???
Addieren/subtrahieren kartesisch, multiplizieren/dividieren polar.
:::
