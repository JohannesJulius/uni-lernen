---
title: Ausblick – Diskrete Fourier-Transformation (DFT)
chapter: 1 Grundlagen – Komplexe Zahlen
minutes: 30
sources: Mathe 1/IngMath1_slides_1_basics_6_komplexezahlen_4_Ausblick_DFT.pdf
---

:::ausblick
Dieser Foliensatz ist als **Ausblick** gekennzeichnet (Vertiefung). Laut Nullpunkt-Plan: bei Zeitnot zuerst streichen. Er zeigt aber schön, wofür Einheitswurzeln gebraucht werden (Signalverarbeitung, Schwingungsanalyse, MP3/JPEG, Vibrationsmessung an Flugzeugen).
:::

## Idee

Ein Signal, z. B. Messwerte eines Beschleunigungssensors, liegt als Folge $x_0,x_1,\dots,x_{N-1}$ vor. Die DFT zerlegt es in **Frequenzanteile**: Welche Schwingungen (wie schnell, wie stark) stecken drin?

:::def Diskrete Fourier-Transformation
Die DFT bildet $N$ komplexe Zahlen $x_0,\dots,x_{N-1}$ auf $N$ komplexe Zahlen ab:
$$X_k=\sum_{n=0}^{N-1}x_n\,\e^{-2\pi\mathrm i\,kn/N},\qquad k=0,1,\dots,N-1.$$
:::

Die Faktoren $\e^{-2\pi\mathrm ikn/N}=\cos\frac{2\pi kn}N-\mathrm i\sin\frac{2\pi kn}N$ sind **$N$-te Einheitswurzeln**. $X_k$ misst, wie stark die Schwingung mit $k$ Perioden pro Messfenster im Signal vorkommt.

:::bsp $N=4$
Einheitswurzeln: $\e^{0}=1$, $\e^{-\mathrm i\pi/2}=-\mathrm i$, $\e^{-\mathrm i\pi}=-1$, $\e^{-3\mathrm i\pi/2}=\mathrm i$. Für $x=(x_0,x_1,x_2,x_3)$:
$$X_0=x_0+x_1+x_2+x_3,\quad X_1=x_0-\mathrm ix_1-x_2+\mathrm ix_3,\quad X_2=x_0-x_1+x_2-x_3,\quad X_3=x_0+\mathrm ix_1-x_2-\mathrm ix_3.$$
Für das Signal $x=(1,0,-1,0)$ (eine Kosinusschwingung mit einer Periode): $X_0=0$, $X_1=2$, $X_2=0$, $X_3=2$. Nur die Frequenz $k=1$ (und ihr „Spiegel" $k=3$) ist enthalten.
:::

## Orthogonalität der Einheitswurzeln

:::satz
Für $k\ne m$ (beide in $\{0,\dots,N-1\}$):
$$\sum_{n=0}^{N-1}\e^{-2\pi\mathrm ikn/N}\,\e^{2\pi\mathrm imn/N}=0.$$
:::

:::beweis
Exponenten zusammenfassen, $l=m-k\ne0$: $\sum_{n=0}^{N-1}q^n$ mit $q=\e^{2\pi\mathrm il/N}\ne1$. Geometrische Summe: $\frac{1-q^N}{1-q}$, und $q^N=\e^{2\pi\mathrm il}=1$ ⇒ Summe $=0$. ∎
:::

Bedeutung:
- **Trennung der Frequenzen:** Jede Frequenzkomponente lässt sich unabhängig herausfiltern.
- **Umkehrbarkeit:** $x_n=\frac1N\sum_{k=0}^{N-1}X_k\e^{2\pi\mathrm ikn/N}$ (inverse DFT) – das Originalsignal ist rekonstruierbar.
- **Effizienz:** Die Struktur der Einheitswurzeln erlaubt die **FFT** (Fast Fourier Transform) mit $O(N\log N)$ statt $O(N^2)$ Operationen.

Anwendungen: Frequenzanalyse von Signalen (Vibrationen, Audio), Lösen von Differentialgleichungen im Frequenzraum, Bildkompression. In MATLAB: `fft(x)`.

:::aufgabe
Berechne die DFT von $x=(1,1,1,1)$ und von $x=(1,-1,1,-1)$.
:::loesung
$(1,1,1,1)$: $X=(4,0,0,0)$ – nur Gleichanteil. $(1,-1,1,-1)$: $X_0=0$, $X_1=1+\mathrm i-1-\mathrm i=0$, $X_2=4$, $X_3=0$ – nur die höchste Frequenz $k=2$.
:::
:::

:::karte
Definition DFT?
???
$X_k=\sum_{n=0}^{N-1}x_n\e^{-2\pi\mathrm ikn/N}$; die Faktoren sind $N$-te Einheitswurzeln.
:::

:::karte
Warum ist $\sum_{n=0}^{N-1}\e^{2\pi\mathrm iln/N}=0$ für $l\ne0$?
???
Geometrische Summe mit $q=\e^{2\pi\mathrm il/N}\ne1$ und $q^N=1$: $\frac{1-q^N}{1-q}=0$.
:::
