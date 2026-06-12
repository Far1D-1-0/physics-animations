# Animación web de Física: Movimiento Circular No Uniforme — Punto sobre una rueda que acelera

## Objetivo

Crear una animación web educativa para explicar el movimiento circular no uniforme analizando únicamente un punto ubicado sobre el borde de una rueda que aumenta gradualmente su velocidad de rotación.

El objetivo es visualizar claramente la diferencia entre:

* Velocidad tangencial.
* Aceleración tangencial.
* Aceleración centrípeta.
* Aceleración total.

Esta escena debe reutilizar gran parte de los componentes creados para el ejercicio "Disco que acelera".

---

## Stack requerido

Usar:

* HTML
* CSS
* JavaScript Vanilla
* SVG
* GSAP
* KaTeX

---

## Datos del problema

Una rueda tiene un radio:

```latex
r = 0.40\,m
```

La rueda gira inicialmente con:

```latex
\omega_i = 2.0\,rad/s
```

La aceleración angular es:

```latex
\alpha = 3.0\,rad/s^2
```

Después de:

```latex
t = 2.0\,s
```

determinar:

* Velocidad angular final.
* Velocidad tangencial.
* Aceleración tangencial.
* Aceleración centrípeta.
* Aceleración total.

---

## Concepto físico central

El punto se mueve sobre una trayectoria circular.

Como la velocidad angular aumenta:

```latex
\alpha \neq 0
```

aparecen simultáneamente:

### Aceleración tangencial

```latex
a_t = r\alpha
```

### Aceleración centrípeta

```latex
a_c = \frac{v^2}{r}
```

### Aceleración total

```latex
a = \sqrt{a_t^2+a_c^2}
```

---

## Desarrollo matemático

### Paso 1: velocidad angular final

```latex
\omega_f = \omega_i + \alpha t
```

```latex
\omega_f = 2.0 + (3.0)(2.0)
```

```latex
\omega_f = 8.0\,rad/s
```

---

### Paso 2: velocidad tangencial

```latex
v = r\omega
```

```latex
v = (0.40)(8.0)
```

```latex
v = 3.2\,m/s
```

---

### Paso 3: aceleración tangencial

```latex
a_t = r\alpha
```

```latex
a_t = (0.40)(3.0)
```

```latex
a_t = 1.2\,m/s^2
```

---

### Paso 4: aceleración centrípeta

```latex
a_c = \frac{v^2}{r}
```

```latex
a_c = \frac{3.2^2}{0.40}
```

```latex
a_c = \frac{10.24}{0.40}
```

```latex
a_c = 25.6\,m/s^2
```

---

### Paso 5: aceleración total

```latex
a = \sqrt{a_t^2+a_c^2}
```

```latex
a = \sqrt{1.2^2+25.6^2}
```

```latex
a = \sqrt{1.44+655.36}
```

```latex
a = \sqrt{656.8}
```

```latex
a = 25.63\,m/s^2
```

---

## Resultados finales

```latex
\omega_f = 8.0\,rad/s
```

```latex
v = 3.2\,m/s
```

```latex
a_t = 1.2\,m/s^2
```

```latex
a_c = 25.6\,m/s^2
```

```latex
a = 25.63\,m/s^2
```

---

## Escenas de la animación

### Escena 1: Presentación

Mostrar:

* Una rueda.
* Un único punto rojo sobre el borde.
* Radio marcado.
* Trayectoria circular punteada.

Texto:

"Punto sobre una rueda que acelera"

---

### Escena 2: Movimiento inicial

Mostrar:

```latex
\omega_i = 2.0\,rad/s
```

Animar la rueda girando lentamente.

Mostrar una flecha curva indicando la rotación.

---

### Escena 3: Aceleración angular

Mostrar:

```latex
\alpha = 3.0\,rad/s^2
```

Animación:

La rueda comienza a girar cada vez más rápido.

Mensaje:

"La velocidad angular aumenta con el tiempo."

---

### Escena 4: Velocidad tangencial

Mostrar una flecha tangente al punto.

Color:

* Verde.

Animar:

```latex
v=r\omega
```

Resultado:

```latex
v=3.2\,m/s
```

Mensaje:

"La velocidad siempre es tangente a la trayectoria."

---

### Escena 5: Aceleración tangencial

Mostrar una flecha tangente.

Color:

* Azul.

Animar:

```latex
a_t=r\alpha
```

Resultado:

```latex
a_t=1.2\,m/s^2
```

Mensaje:

"La aceleración tangencial aumenta la rapidez."

---

### Escena 6: Aceleración centrípeta

Mostrar una flecha apuntando al centro.

Color:

* Rojo.

Animar:

```latex
a_c=\frac{v^2}{r}
```

Resultado:

```latex
a_c=25.6\,m/s^2
```

Mensaje:

"La aceleración centrípeta cambia la dirección."

---

### Escena 7: Aceleración total

Mostrar simultáneamente:

* Velocidad tangencial.
* Aceleración tangencial.
* Aceleración centrípeta.

Construir gráficamente el vector resultante.

Animar:

```latex
a=\sqrt{a_t^2+a_c^2}
```

Resultado:

```latex
a=25.63\,m/s^2
```

---

### Escena 8: Resumen final

Mostrar:

```latex
\omega_f = 8.0\,rad/s
```

```latex
v = 3.2\,m/s
```

```latex
a_t = 1.2\,m/s^2
```

```latex
a_c = 25.6\,m/s^2
```

```latex
a = 25.63\,m/s^2
```

Mensaje final:

"En movimiento circular no uniforme aparecen simultáneamente aceleración tangencial y aceleración centrípeta."

---

## Requisitos técnicos

Crear la escena en:

```txt
src/scenes/non-uniform-circular-motion/point-on-wheel/
```

Archivos:

```txt
index.html
scene.css
scene.js
content.js
```

Debe existir:

```js
initPointOnWheelScene()
```

y una timeline principal:

```js
const tl = gsap.timeline();
```

---

## Estilo visual

La escena debe reutilizar el estilo visual del ejercicio anterior.

Colores:

* Punto: rojo
* Velocidad: verde
* Aceleración tangencial: azul
* Aceleración centrípeta: rojo
* Aceleración total: naranja

Mantener exactamente la misma distribución visual, tipografía, espaciados y ubicación de fórmulas utilizados en las demás escenas del proyecto.

---

## Entregable esperado

Una animación web funcional que explique:

1. Punto girando sobre una rueda.
2. Velocidad angular.
3. Velocidad tangencial.
4. Aceleración tangencial.
5. Aceleración centrípeta.
6. Aceleración total.
7. Desarrollo algebraico completo.
8. Resultados finales.
