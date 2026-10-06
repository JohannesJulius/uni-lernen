---
title: 3.2 Gleichstrom II – Zweipoltheorie, Quellen, Ersatzquellen
chapter: 3 Gleichstrom
minutes: 110
sources: Elektrotechnik/Elektrotechnik - 3.2 Gleichstrom II.pdf
---

:::ziel
- Ideale und reale **Spannungs-** und **Stromquellen**; U-I-Kennlinien.
- Äquivalenz von Spannungs- und Stromquelle.
- **Ersatzspannungsquelle** (Thévenin) und **Ersatzstromquelle** (Norton) eines beliebigen linearen Netzwerks bestimmen – die zentrale Technik für Netzwerkaufgaben.
- Reihen- und Parallelschaltung von Quellen.
:::

## Zweipole

Ein **Zweipol** (Eintor) ist ein Bauteil/Netzwerk mit zwei Anschlüssen. **Passiv**: gibt keine Energie ab. **Linear**: Kennlinie ist eine Gerade. Passive lineare Zweipole lassen sich zu einem **Ersatzwiderstand** $U=RI$ zusammenfassen.

Das große Versprechen: **Jedes noch so komplizierte lineare Netzwerk verhält sich an zwei Klemmen wie eine Quelle mit nur zwei Kenngrößen ($U_0$, $R_i$).**

## Ideale Quellen

| | ideale Spannungsquelle | ideale Stromquelle |
|---|---|---|
| liefert | konstante Spannung $U=U_0$ | konstanten Strom $I=I_0$ |
| Innenwiderstand | $R_i=0$ | $R_i=\infty$ |
| frei | Strom beliebig | Spannung beliebig |

## Reale Quellen

:::formel Reale Spannungsquelle
Ideale Quelle $U_0$ **in Reihe** mit Innenwiderstand $R_i$:
$$U=U_0-R_iI.$$
- **Leerlauf** ($I=0$): $U=U_0$ (Leerlaufspannung, maximal)
- **Kurzschluss** ($U=0$): $I_k=\frac{U_0}{R_i}$ (Kurzschlussstrom, maximal)
:::

:::formel Reale Stromquelle
Ideale Stromquelle $I_0$ **parallel** zu $R_i$:
$$I=I_0-\frac U{R_i}.$$
Leerlauf: $U=I_0R_i$; Kurzschluss: $I=I_0$.
:::

**Kennlinie:** fallende Gerade zwischen $(0,U_0)$ und $(I_k,0)$, Steigung $-R_i=-\frac{U_0}{I_k}$.

:::satz Äquivalenz
Reale Spannungs- und Stromquelle haben die **gleiche Kennlinie** (sind von außen nicht unterscheidbar), wenn
$$U_0=I_0R_i\iff I_0=\frac{U_0}{R_i}\quad(\text{gleiches }R_i).$$
Man wählt die Darstellung, die die Rechnung einfacher macht (Reihenschaltungen → Spannungsquellen, Parallelschaltungen → Stromquellen).
:::

## Ersatzquelle eines Netzwerks

:::rezept Ersatzquelle an den Klemmen a–b 🔑
1. **Leerlaufspannung $U_0$**: Spannung an den **offenen** Klemmen berechnen (Last weg).
2. **Innenwiderstand $R_i$**: alle unabhängigen Quellen **deaktivieren** – Spannungsquellen durch **Kurzschluss**, Stromquellen durch **Unterbrechung** ersetzen – und den Widerstand von den Klemmen aus berechnen.
3. **Kontrolle/Alternative:** Kurzschlussstrom $I_k$ (Klemmen kurzschließen) ⇒ $R_i=\frac{U_0}{I_k}$.
4. Last anschließen: $U_a=U_0\frac{R_L}{R_i+R_L}$, $I=\frac{U_0}{R_i+R_L}$.
:::

:::bsp Belasteter Spannungsteiler – in 2 Zeilen
$U=12\,$V, $R_1=R_2=1\,$kΩ, Klemmen über $R_2$:
1. $U_0=12\cdot\frac{1}{2}=6\,$V.
2. Quelle kurzschließen: $R_i=R_1\parallel R_2=500\,\Omega$.
3. Last $R_L=1\,$kΩ: $U_a=6\cdot\frac{1000}{1500}=4\,$V ✓ – gleiches Ergebnis wie mit Kirchhoff, aber viel schneller.
Allgemein (Spannungsteiler an $U_e$): $U_0=U_e\frac{R_2}{R_1+R_2}$, $R_i=\frac{R_1R_2}{R_1+R_2}$, $I_k=\frac{U_e}{R_1}$.
:::

## Mehrere Quellen

- **Reihenschaltung** realer Spannungsquellen: $U_{0,ges}=\sum U_{0,j}$, $R_{i,ges}=\sum R_{i,j}$ (Batteriepacks: höhere Spannung, aber höherer Innenwiderstand).
- **Parallelschaltung** (nur bei **gleichem** $U_0$ sinnvoll, sonst fließen Ausgleichsströme): $\frac1{R_{i,ges}}=\sum\frac1{R_{i,j}}$ – höhere Ströme, Redundanz (z. B. Bordnetz mit mehreren Generatoren).

:::info Weitere Verfahren (Ausblick)
- **Superposition** (Überlagerungssatz): In linearen Netzen mit mehreren Quellen jede Quelle einzeln wirken lassen (die anderen deaktivieren) und Ergebnisse addieren.
- **Maschenstrom-/Knotenpotentialverfahren**: systematische LGS (Mathe 1 Gauß!) für große Netze.
:::

## Aufgaben (Aufgabe 8 + Klausuraufgabe)

:::aufgabe 1
Spannungsteiler $R_1$, $R_2$ an $U_e$; Klemmen über $R_2$. (a) $U_0$, $R_i$, $I_k$ allgemein. (b) $U_e=150\,$V, im Leerlauf $U_a=50\,$V, bei $I=0{,}5\,$A ist $U_a=45\,$V. $R_1$, $R_2$? (c) Welche Last nimmt die größte Leistung auf, und wie groß ist sie?
:::loesung
(a) siehe oben. (b) $R_i=\frac{50-45}{0{,}5}=10\,\Omega$; $\frac{R_2}{R_1+R_2}=\frac13\Rightarrow R_1=2R_2$; $\frac{R_1R_2}{R_1+R_2}=\frac{2R_2^2}{3R_2}=\frac23R_2=10\Rightarrow R_2=15\,\Omega$, $R_1=30\,\Omega$. (c) Leistungsanpassung (nächste Lektion): $R_a=R_i=10\,\Omega$, $P_{max}=\frac{U_0^2}{4R_i}=\frac{2500}{40}=62{,}5\,$W.
:::
:::

:::aufgabe 2 (Klausuraufgabe)
Eine Schaltung aus Stromquellen und Widerständen soll an den Klemmen die Leerlaufspannung $U_0=10\,$V und eine maximal entnehmbare Leistung $P_{max}=5\,$W liefern. Wie groß muss $R_i$ sein?
:::loesung
$P_{max}=\frac{U_0^2}{4R_i}\Rightarrow R_i=\frac{U_0^2}{4P_{max}}=\frac{100}{20}=5\,\Omega$.
Allgemeines Vorgehen für solche Klausuraufgaben: (a) $k-1$ Knotengleichungen aufstellen, (b) im Leerlauf ($I_a=0$) Zweigströme aus den Stromquellen ablesen, (c) $U_0$ im Leerlauf, $R_i$ mit unterbrochenen Stromquellen.
:::
:::

:::aufgabe 3
Wandle die reale Spannungsquelle $U_0=24\,$V, $R_i=4\,\Omega$ in eine Stromquelle um. Welcher Strom fließt durch $R_L=8\,\Omega$?
:::loesung
$I_0=6\,$A parallel zu $4\,\Omega$. Stromteiler: $I_L=6\cdot\frac{4}{4+8}=2\,$A (Kontrolle: $\frac{24}{12}=2$ ✓).
:::
:::

## Karteikarten

:::karte
Kennlinie der realen Spannungsquelle?
???
$U=U_0-R_iI$; Leerlauf $U_0$, Kurzschluss $I_k=U_0/R_i$.
:::

:::karte
Wie deaktiviert man Quellen zur Bestimmung von $R_i$?
???
Spannungsquellen → Kurzschluss, Stromquellen → Unterbrechung.
:::

:::karte
Umrechnung Spannungs- ↔ Stromquelle?
???
$I_0=U_0/R_i$, gleiches $R_i$ (in Reihe bzw. parallel).
:::

:::karte
Rezept Ersatzspannungsquelle?
???
$U_0$ im Leerlauf; $R_i$ mit deaktivierten Quellen von den Klemmen aus; Kontrolle $R_i=U_0/I_k$.
:::
