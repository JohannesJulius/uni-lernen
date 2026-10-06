---
title: Abgleich Skript (Mathe 1+2) ↔ Folien
---

## Grundsatz

- **Mathe 1** folgt größtenteils den **Folien** im Ordner *Mathe 1*. Wo das Skript *Mathe 1 + 2 neu* (Möller) zusätzlichen Stoff enthält, ist dieser als eigene Lektion bzw. Abschnitt mit einer **Abgleich-Box** aufgenommen – nichts wird weggelassen.
- **Mathe 2** folgt dem **Skript** (Kapitel 12–21); Folieninhalte aus *Mathe 2*, die im Skript fehlen, werden als Zusatzlektionen ergänzt.

## Mathe 1: Was steht wo?

| Thema | Folien Mathe 1 | Skript |
|---|---|---|
| Logik, Mengen, Abbildungen, Zahlbereiche, Beweise, Induktion, Binomialsatz | ✓ | ✓ |
| Komplexe Zahlen (inkl. Euler, Moivre, Wurzeln) | ✓ | ✓ |
| Vektorräume, LGS/Gauß, Matrizen, Determinanten, Inverse, Eigenwerte | ✓ | ✓ |
| Skalar-/Vektorprodukt, Geraden und Ebenen im ℝ³ | ✓ | ✓ |
| Folgen, Reihen, Potenzreihen, Stetigkeit, Differenzierbarkeit, Taylor, l'Hospital, Kurvendiskussion, Optimierung | ✓ | ✓ |
| **Newton-Verfahren** | – | ✓ (Zusatzlektion) |
| Riemann-Integral, Hauptsatz, partielle Integration, Substitution, uneigentliche Integrale, Rotationskörper | ✓ | ✓ |
| Numerische Integration | ✓ | ✓ |
| **Interpolation** | – | ✓ (Zusatzlektion) |
| DFT (Ausblick) | ✓ | teilweise |

## Mathe 2: Skript-Kapitel ↔ Lektionen ↔ Folien

| Skript | Lektion(en) | Entsprechende Folien |
|---|---|---|
| 12 Lineare Ausgleichsprobleme | 12 | T2 localextrema_2_lsq |
| 13 Funktionen mehrerer Variablen | 13.1–13.3 | T2 01–08, 10, 13 |
| 14 Extremwerte | 14 | T2 09, 11, 12 |
| 15 Kurven im ℝᵐ | 15.1, 15.2 | T1 01–10 |
| 16 Kurvenintegrale | 16.1, 16.2 | T3 03, 04 |
| 17 Bereichsintegrale, Green | 17.1, 17.2 | T2 14–18 |
| 18 Einführung DGL, Numerik | 18 | T4 00, 01, 06 |
| 19 Separierbare und lineare DGL | 19.1, 19.2 | T4 02–04 |
| 20 Lineare DGL höherer Ordnung | 20.1, 20.2 | T4 05 |
| 21 Systeme von DGL | 21.1, 21.2 | T4 07–13 |

**Nur in den Folien (als Ergänzung aufgenommen):**
- Implizite Funktionen, Kuriositäten der Differenzierbarkeit (Lektion 13.3)
- Taylorpolynom 2. Ordnung (Lektion 14)
- Ellipsen in vier Darstellungen, Zykloiden (15.1); Evolute, Evolvente/Zahnräder, Sektorflächen nach Leibniz, Flächen zwischen Kurven (15.3)
- Divergenz, Laplace, Vektoridentitäten, Maxwell → Wellengleichung, Flächenintegrale und Integralsätze (Ausblick, 16.3)
- Rotationskörper (17.2)
- Substitution, exakte DGL, Reduktion der Ordnung (19.1); Doppelpendel (21.2)

**Nur im Skript:** Wahrscheinlichkeitstheoretische Begründung der kleinsten Quadrate, Normalengleichung vs. QR (12), Picard-Lindelöf und Wronski-Determinante (20/21), zahlreiche Luft- und Raumfahrt-Transferaufgaben (Längsstabilität, Kurvenflug, Kutta-Joukowski, Raketentank, CubeSat, Stratosphärensprung, Fahrwerk, Flugregelung) – alle in den Lektionen gelöst.

## Numerik

Die 12 Foliensätze sind 1:1 als Lektionen umgesetzt (Kapitel 1–7). Ergänzt wurden numerische Ableitung und Nullstellensuche (`fzero`, Newton) in Lektion 4.2, weil sie in der Gliederung stehen, aber keine eigenen Folien haben.

## TM 2: Folien ↔ Buch

Die Lektionen folgen den Folien (Kapitel 1–7) und den Übungsblättern 1–8. Aus dem Buch (Gross u. a., TM 2) ergänzt: **Schubspannungen durch Querkraft**. Nicht in den Folien und daher (noch) nicht ausgearbeitet: Energiemethoden (Arbeitssatz, Castigliano) und Verbundquerschnitte (Buchkapitel 6 und 8).

## Bauelemente der Luftfahrzeuge

Grundlage ist das Skript **Bauelemente der Luftfahrzeuge I** (Prof. Sperl, V 5.0.16) – alle Kapitel 1–10 sind in 15 Lektionen ausgearbeitet. Das Skript enthält kaum Übungsaufgaben; die Beispiele und Aufgaben in den Lektionen sind daher selbst erstellt und nachgerechnet (Diagrammwerte wie $K_W$, $K_S$, $K_{qB}$ sind dort als „abgelesen" vorgegeben).

Auffälligkeiten im Skript, die in den Lektionen markiert sind:
- **Beispiel Lochleibung (S. 29):** $1{,}45\cdot300$ ergibt 435, nicht 425 – damit ist $\sigma_{LX}=652{,}5$ statt $637{,}5\,$N/mm².
- **Gl. (7.24) und (7.35):** Vorzeichen der Momentenanteile physikalisch prüfen; Gl. (7.31) muss $z_{SF_A}$ heißen.
- **Gl. (9.66):** Die Mittelkraft enthält $\frac{F_{Ao}+F_{Au}}2$, nicht die Differenz.
