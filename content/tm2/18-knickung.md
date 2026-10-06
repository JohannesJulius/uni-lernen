---
title: 7 Knickung – Stabilität, Euler-Fälle, Schlankheitsgrad, Knicksicherheit
chapter: 7 Knickung
minutes: 130
sources: Technische Mechanik 2/tm2_07_knickung.pdf; Technische Mechanik 2/2017_Book_TechnischeMechanik2-2.pdf#256; Technische Mechanik 2/Uebung_08_Aufgaben.pdf
---

:::ziel
- Knicken als **Stabilitätsproblem** (nicht Festigkeitsproblem) verstehen; Theorie 2. Ordnung.
- Die Knickgleichung $EIw''+Fw=0$ als **Eigenwertproblem** lösen (Mathe 2: lineare DGL 2. Ordnung!).
- Die vier **Euler-Fälle** und die Knicklänge sicher anwenden; immer $I_{min}$ einsetzen.
- **Schlankheitsgrad** prüfen (elastisch / Tetmajer / Quetschen) und **Knicksicherheit** nachweisen.
:::

## Stabilität

Ein Gleichgewicht ist **stabil**, wenn der Körper nach einer kleinen Störung zurückkehrt (Potential hat ein Minimum: $V'=0$, $V''>0$ – Dirichlet), **indifferent** oder **instabil** sonst.

:::bsp Starrer Stab mit Drehfeder
Starrer Stab (Länge $l$), unten mit Drehfeder $c_T$ gelagert, oben Druckkraft $F$. Ausgelenkt um $\varphi$: rückstellendes Moment $c_T\varphi$, auslenkendes $Fl\sin\varphi\approx Fl\varphi$. Stabil, solange
$$F<F_{krit}=\frac{c_T}l.$$
Bei $F=F_{krit}$ gibt es plötzlich **eine zweite Gleichgewichtslage** – das ist Verzweigung (Knicken). Gleichgewicht muss dafür am **verformten** System aufgestellt werden (**Theorie 2. Ordnung**).
:::

:::achtung
Knicken tritt oft **weit unterhalb der Fließgrenze** auf und führt schlagartig zum Totalversagen. In Fachwerken müssen daher **alle Druckstäbe** auf Knicken geprüft werden. Auch behinderte Wärmedehnung kann Knicken auslösen (Gleisverwerfung).
:::

## Der Euler-Stab (Fall 2: gelenkig–gelenkig)

Gerader schlanker Stab, Druckkraft $F$, leicht ausgelenkt $w(x)$. Momentengleichgewicht am **verformten** Stab: $M(x)=F\,w(x)$. Mit $EIw''=-M$:
$$EIw''+Fw=0\quad\Leftrightarrow\quad w''+k^2w=0,\qquad k^2=\frac F{EI}.$$
Charakteristisches Polynom $\lambda^2+k^2=0$ ⇒ $\lambda=\pm\mathrm ik$ ⇒
$$w(x)=A\cos kx+B\sin kx.$$
RB: $w(0)=0$ ⇒ $A=0$; $w(l)=0$ ⇒ $B\sin kl=0$. Nichttriviale Lösung ($B\ne0$) nur für
$$k_nl=n\pi\qquad(\text{Eigenwerte}),\qquad w_n(x)=B\sin\frac{n\pi x}l\ (\text{Eigenformen}).$$
Technisch maßgebend ist der **kleinste** Eigenwert $n=1$:

:::satz Eulersche Knickkraft
$$F_{krit}=\frac{\pi^2EI}{l^2}\qquad(\text{Knickform: halbe Sinuswelle}).$$
Die Amplitude $B$ bleibt unbestimmt (lineare Theorie). $F_{krit}$ hängt nur von $E$ und $I$ ab – **nicht von der Festigkeit** $R_e$!
:::

## Die vier Euler-Fälle

Allgemeine Knickgleichung (beliebige Lagerung): $w^{IV}+k^2w''=0$, Lösung $w=A\cos kx+B\sin kx+Cx+D$; 4 RB ⇒ homogenes LGS ⇒ Determinante = 0 (Mathe 1!) ⇒ Eigenwerte.

$$F_{krit}=\frac{\pi^2EI_{min}}{s^2}=\alpha_i\frac{\pi^2EI_{min}}{l^2},\qquad s=\beta l\ (\text{Knicklänge}).$$

| Fall | Lagerung | Knicklänge $s$ | $\alpha=1/\beta^2$ |
|---|---|---|---|
| 1 | eingespannt – frei | $2l$ | $\frac14$ |
| 2 | gelenkig – gelenkig | $l$ | $1$ |
| 3 | eingespannt – gelenkig | $\approx0{,}7l$ ($0{,}699l$) | $\approx2{,}05$ |
| 4 | eingespannt – eingespannt | $0{,}5l$ | $4$ |

*Hinweis:* Für Fall 3 folgt aus der Eigenwertgleichung $\tan kl=kl$ ⇒ $kl=4{,}493$ ⇒ $\alpha=\frac{4{,}493^2}{\pi^2}=2{,}046$. (Prüfe den Wert in deinem Foliensatz – im Textauszug war er nicht eindeutig lesbar.)
Beidseitige Einspannung **vervierfacht** die Tragfähigkeit gegenüber Fall 2, der Fahnenmast (Fall 1) hat nur ein Viertel.

:::merke $I_{min}$!
Der Stab knickt um die Achse mit dem **kleinsten** Flächenträgheitsmoment ($I_{min}=I_2$, Hauptachse!). Bei unterschiedlicher Lagerung in beiden Ebenen beide Ebenen prüfen.
:::

## Gültigkeit: Schlankheitsgrad

Euler gilt nur, solange der Stab elastisch bleibt: $\sigma_{krit}=\frac{F_{krit}}A<\sigma_P$.

:::formel Schlankheit
Trägheitsradius $i=\sqrt{\frac{I_{min}}A}$, Schlankheitsgrad $\lambda=\frac si$:
$$\sigma_{krit}=\frac{\pi^2E}{\lambda^2}\qquad(\text{Euler-Hyperbel}).$$
Grenzschlankheit $\lambda_P=\pi\sqrt{\frac E{\sigma_P}}$ (Baustahl S235: $\lambda_P\approx100$; mit $s=\beta l$ kann man das auch fallweise als $\lambda_{P,i}=\pi\sqrt{\alpha_iE/\sigma_P}$ mit $l$ statt $s$ schreiben).
:::

| Bereich | Bedingung | Berechnung |
|---|---|---|
| elastisches Knicken | $\lambda\ge\lambda_P$ | Euler |
| inelastisches Knicken | $\lambda_Q<\lambda<\lambda_P$ | empirisch (Tetmajer-Geraden) |
| Quetschen | $\lambda\le\lambda_Q$ | Druckfestigkeit $\sigma\le\sigma_Q$, kein Knicknachweis |

**Knicksicherheit:** $S_K=\frac{F_{krit}}{F_{vorh}}=\frac{\sigma_{krit}}{\sigma_{vorh}}\ge S_{erf}$ (Maschinenbau typ. 3…10).

## Beispiele (Folien)

:::bsp Schlankheitsgrad – Stab aus S37 (Kreis $r=10\,$cm, $\sigma_P=215$, $E=210\,000$, $\sigma_m=450\,$MPa)
(a) $\lambda_P=\pi\sqrt{\frac{210\,000}{215}}=98{,}2$.
(b) $i=\frac r2=50\,$mm ⇒ (Fall 2) $l_{min}=\lambda_Pi=4{,}91\,$m.
(c) Bei $\lambda=\lambda_P$ und $S_K=1$: $\sigma=\sigma_P=215\,$MPa ⇒ Sicherheit gegen Bruch $\frac{450}{215}=2{,}1$.
:::

:::bsp Rechteck vs. Kreis gleicher Knicksicherheit (Fall 2)
Rechteck $a\times2a$: $I_{min}=\frac{2a\cdot a^3}{12}=\frac{a^4}6$. Kreis: $\frac{\pi d^4}{64}=\frac{a^4}6$ ⇒ $d=\sqrt[4]{\frac{32}{3\pi}}a=1{,}36a$.
Flächen: Kreis $1{,}45a^2$, Rechteck $2a^2$ ⇒ der Kreisstab ist 28 % leichter (er hat keine „schwache" Richtung).
:::

:::bsp Thermisches Knicken (eingespannt–gelenkig, Kreis $d$)
Behinderte Wärmedehnung: $F=EA\alpha_T\Delta T$. Knicken bei $F=2{,}046\frac{\pi^2EI}{L^2}$:
$$\Delta T=\frac{2{,}046\,\pi^2}{\alpha_TL^2}\frac IA=\frac{2{,}046\,\pi^2d^2}{16\,\alpha_TL^2}.$$
:::

## Aufgaben

:::aufgabe 1
Hydraulik-Kolbenstange (Stahl, $E=210\,$GPa, $d=30\,$mm, $l=1{,}2\,$m), Fall 2. $F_{krit}$, $\lambda$, Gültigkeit ($\lambda_P=100$)? Zulässige Last bei $S_K=4$?
:::loesung
$I=\frac{\pi30^4}{64}=39\,760\,$mm⁴; $F_{krit}=\frac{\pi^2\cdot210\,000\cdot39\,760}{1200^2}=57{,}2\,$kN. $i=\frac d4=7{,}5\,$mm, $\lambda=160>100$ ✓ Euler gilt. $F_{zul}=14{,}3\,$kN.
:::
:::

:::aufgabe 2 (Übung 8, Aufgabe 36 – Prinzip)
Eingespannter Stab (Fall 1) mit Doppel-T-Querschnitt. Um welche Achse knickt er, wie groß ist $F_{max}$?
:::loesung
$I_y$ und $I_z$ berechnen (Lektion 4); der Stab knickt um die Achse mit dem kleineren Wert – beim I-Profil fast immer die **Stegachse** ($I_z$, Gurte „stehen" mit kleinem Hebel). $F_{max}=\frac{\pi^2EI_{min}}{(2l)^2}=\frac{\pi^2EI_{min}}{4l^2}$.
:::
:::

:::aufgabe 3 (Übung 8, Aufgabe 37 – Prinzip)
Stabsystem mit Kraft $F$ unter Winkel $\beta$: Wie findet man $\beta$ so, dass $F$ maximal wird, ohne dass ein Stab knickt?
:::loesung
1. Stabkräfte $S_i(F,\beta)$ aus dem Knotengleichgewicht. 2. Für jeden **Druckstab** $|S_i|\le F_{krit,i}=\frac{\pi^2EI}{l_i^2}$. 3. Optimal ist der Winkel, bei dem die maßgebenden Stäbe **gleichzeitig** ihre Knicklast erreichen (gleiche Ausnutzung) – Gleichungen gleichsetzen und nach $\beta$ auflösen.
:::
:::

:::aufgabe 4
Aluminiumrohr ($E=70\,$GPa, $d_a=40$, $d_i=36\,$mm) als Strebe, beidseitig gelenkig, $l=1{,}5\,$m. $F_{krit}$?
:::loesung
$I=\frac\pi{64}(40^4-36^4)=\frac\pi{64}(2\,560\,000-1\,679\,616)=43\,220\,$mm⁴. $F_{krit}=\frac{\pi^2\cdot70\,000\cdot43\,220}{1500^2}=13{,}3\,$kN.
:::
:::

## Karteikarten

:::karte
Eulersche Knickkraft (allgemein)?
???
$F_{krit}=\frac{\pi^2EI_{min}}{s^2}$, $s$ = Knicklänge.
:::

:::karte
Knicklängen der 4 Euler-Fälle?
???
Frei–eingespannt 2l; gelenkig–gelenkig l; eingespannt–gelenkig 0,7l; eingespannt–eingespannt 0,5l.
:::

:::karte
Knickgleichung und Lösung?
???
$w''+k^2w=0$, $k^2=F/EI$; $w=A\cos kx+B\sin kx$.
:::

:::karte
Schlankheitsgrad und Euler-Spannung?
???
$\lambda=s/i$, $i=\sqrt{I_{min}/A}$; $\sigma_{krit}=\pi^2E/\lambda^2$.
:::

:::karte
Gültigkeitsgrenze Euler?
???
$\lambda\ge\lambda_P=\pi\sqrt{E/\sigma_P}$ (Stahl ≈ 100).
:::

:::karte
Um welche Achse knickt ein Stab?
???
Um die Achse des kleinsten Flächenträgheitsmoments.
:::
