---
title: 1 Einführung – Was ist Numerik? MATLAB als Werkzeug
chapter: 1 Einführung in MATLAB
minutes: 60
sources: Numerik/Numerik - 01 Einführung.pdf
---

:::ziel
- Erklären, was **Numerik** ist und wo sie im Ingenieuralltag (Luft- und Raumfahrt!) steckt.
- Die MATLAB-Oberfläche (Editor, Command Window, Workspace, Current Folder) kennen.
- MATLAB als Taschenrechner benutzen, Variablen anlegen, Datentypen kennen.
- Die wichtigsten Unterschiede zu Python (Ingenieurinformatik 1) benennen.
:::

## Was ist Numerik?

:::def
**Numerik** = mathematische Methoden zur Lösung von Problemen **mit dem Computer**. Man braucht sie, wenn
- keine analytische (geschlossene) Lösung existiert,
- das Problem für exakte Rechnung zu komplex ist,
- nur Näherungen praktisch möglich sind (Messdaten liegen nur diskret vor!).
:::

**Inhalte dieser Veranstaltung:** Lineare Algebra (LGS, Eigenwerte), Interpolation, Nullstellenbestimmung, numerische Integration und Ableitung, Differentialgleichungen, Simulink.

:::bsp Anwendungen aus der Luft- und Raumfahrt
- **Wiederverwendbarer Launcher (Booster-Landung):** Zustandsraummodell $\dot{\mathbf q}=A\mathbf q+Bu$ ($\mathbf q$: Position, Geschwindigkeit, Kippwinkel …; $u$: Gimbalwinkel der Düse). Regelgesetz $u=-K\mathbf q$ – $K$ und der **Kalman-Filter** (Zustandsschätzung) kommen aus der **linearen Algebra**; Trajektorienprädiktion = **DGL**; Aerodynamik-Kennfelder = **Interpolation**. Der Bordrechner löst alle ~10 ms ein LGS.
- **Drohne – Ladezustand (SOC):** nicht direkt messbar ⇒ **Coulomb-Counting** $\mathrm{SOC}(t)=\mathrm{SOC}(t_0)-\frac1{C_{nenn}}\int_{t_0}^tI(\tau)\,\d\tau$ – da $I(t)$ nur als Messwerte vorliegt: **numerische Integration**. Messfehler akkumulieren (Drift) ⇒ Kalman-Filter mit RC-Batteriemodell (DGL).
:::

## MATLAB

MATLAB („Matrix Laboratory", MathWorks) ist Programmiersprache **und** Entwicklungsumgebung für numerische Berechnungen und Grafik. Installation über die Hochschul-Lizenz oder MATLAB Online.

| Funktion | MATLAB | Python (Teil 1) |
|---|---|---|
| Numerik | MATLAB-Sprache | Python + NumPy |
| interaktiv | Command Window | Python-Terminal |
| Plotten | `plot` | Matplotlib |
| Notebooks | Live Editor | Jupyter |
| Erweiterungen | Toolboxes | Pakete |
| Dateien | `.m` | `.py` |

**Oberfläche:** Editor (Skripte/Funktionen), **Command Window** (Befehle, Ausgaben, Fehler), **Current Folder** (Arbeitsverzeichnis – MATLAB findet nur dort bzw. im Pfad liegende `.m`-Dateien), **Workspace** (aktuelle Variablen), Code Analyzer (Warnungen).

### Taschenrechner und Variablen

```matlab
>> 3*4^2 + sqrt(16)      % Ergebnis landet in ans
ans = 52
>> a = 5.7;              % Semikolon unterdrückt die Ausgabe
>> b = 99                % auch b ist double!
>> sin(pi/2)             % Winkel im Bogenmaß
```

- Grundrechenarten `+ - * / ^`; Funktionen `sin cos tan exp log log10 sqrt abs mod sign floor ceil round atan2` …
- `log` ist der **natürliche** Logarithmus.
- Variable entsteht durch Zuweisung, keine Deklaration. Standardtyp: **double** (64 Bit).
- `help sin`, `doc sin` – Dokumentation.

:::achtung Funktionen überschreiben
```matlab
sin = 5;      % sin ist jetzt eine Variable!
sin(pi/2)     % Fehler bzw. Unsinn
clear sin     % repariert es
```
Variablen und Funktionen teilen in MATLAB **einen** Namensraum (anders als `np.sin` in Python). Ebenso: `i` und `j` sind die **imaginäre Einheit** – nicht als Zählvariable verwenden.
:::

| Befehl | Wirkung |
|---|---|
| `clear` / `clear x y` | alle / bestimmte Variablen löschen |
| `clc` | Command Window leeren |
| `close all` | alle Abbildungen schließen |

### Datentypen
`double` (Standard), `single`, `int8…int64`, `uint8…uint64`, `complex`, `logical`, `char`/`string`. **Der fundamentale Typ ist das Array:** selbst ein Skalar ist eine $1\times1$-Matrix. `size(A)`, `ndims(A)`.

### Erste Arrays

```matlab
A = [2,3; 4,5]    % Komma/Leerzeichen trennt Spalten, Semikolon Zeilen
x = [6; 7]        % Spaltenvektor
y = A*x           % Matrix-Vektor-Produkt: [33; 59]
A(1,2)            % Zeile 1, Spalte 2 -> 3   (Index beginnt bei 1!)
x(2,3) = 17       % schreibend: Array wächst automatisch, Rest = 0
```
Lesender Zugriff außerhalb ⇒ Fehler „Index exceeds matrix dimensions"; schreibender ⇒ Array wird stillschweigend vergrößert (Fehlerquelle!).

## Prüfung
Schriftlich, 60 min, 40 % der Note Ingenieurinformatik; Hilfsmittel: schriftliche Unterlagen. Inhalte: MATLAB-Syntax, Implementierung numerischer Methoden, Simulink. **Übungen ernst nehmen** – Programmieren lernt man nur durch Tun.

## Aufgaben

:::aufgabe 1
Was liefern: `2^3^2`, `-2^2`, `mod(-7,3)`, `round(2.5)`, `log(exp(2))`?
:::loesung
`2^3^2` = `(2^3)^2` = 64 (MATLAB wertet `^` von links aus!); `-2^2` = −4; `mod(-7,3)` = 2; `round(2.5)` = 3; `log(exp(2))` = 2.
:::
:::

:::aufgabe 2
Nach `x = 2; x(3) = 5` – welchen Inhalt hat `x`?
:::loesung
`[2 0 5]` – das Array wird erweitert, die Lücke mit 0 gefüllt.
:::
:::

## Karteikarten

:::karte
Was ist Numerik?
???
Mathematische Methoden zur (näherungsweisen) Lösung von Problemen mit dem Computer.
:::

:::karte
Standarddatentyp in MATLAB?
???
double (64-Bit-Gleitkomma); alles ist ein Array (Skalar = 1×1).
:::

:::karte
Woran muss man bei i und j denken?
???
Sie sind die imaginäre Einheit – nicht als Schleifenvariable nehmen.
:::

:::karte
Wie unterdrückt man die Ausgabe?
???
Mit Semikolon am Zeilenende.
:::
