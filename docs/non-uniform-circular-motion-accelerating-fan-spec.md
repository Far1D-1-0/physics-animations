# Animación web de Física: Movimiento Circular No Uniforme — Ventilador que acelera

## Objetivo

Crear una animación web educativa para explicar el movimiento circular no uniforme usando un ventilador que aumenta gradualmente su velocidad de giro.

El objetivo es calcular:

* Aceleración angular.
* Velocidad angular final.
* Velocidad tangencial de la punta de una aspa.
* Aceleración tangencial de la punta.
* Aceleración centrípeta de la punta.

La escena debe ser visualmente sencilla y reutilizar componentes del disco y la rueda.

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

Un ventilador parte con velocidad angular inicial:

```latex
\omega_i = 5.0\,rad/s
```

Después de:

```latex
t = 4.0\,s
```

alcanza una velocidad angular final:

```latex
\omega_f = 17.0\,rad/s
```

La longitud de cada aspa es:

```latex
r = 0.30\,m
```

Determinar:

* Aceleración angular.
* Velocidad tangencial de la punta.
* Aceleración tangencial de la punta.
* Aceleración centrípeta de la punta.

---

## Concepto físico central

Como el ventilador aumenta su rapidez de giro, su movimiento circular no es uniforme.

La aceleración angular se obtiene con:

```latex
\alpha = \frac{\omega_f-\omega_i}{t}
```

La velocidad tangencial de la punta se obtiene con:

```latex
v = r\omega_f
```

La aceleración tangencial se obtiene con:

```latex
a_t = r\alpha
```

La aceleración centrípeta se obtiene con:

```latex
a_c = \frac{v^2}{r}
```

---

## Desarrollo matemático

### Paso 1: aceleración angular

```latex
\alpha = \frac{\omega_f-\omega_i}{t}
```

```latex
\alpha = \frac{17.0-5.0}{4.0}
```

```latex
\alpha = \frac{12.0}{4.0}
```

```latex
\alpha = 3.0\,rad/s^2
```

---

### Paso 2: velocidad tangencial

```latex
v = r\omega_f
```

```latex
v = (0.30)(17.0)
```

```latex
v = 5.1\,m/s
```

---

### Paso 3: aceleración tangencial

```latex
a_t = r\alpha
```

```latex
a_t = (0.30)(3.0)
```

```latex
a_t = 0.90\,m/s^2
```

---

### Paso 4: aceleración centrípeta

```latex
a_c = \frac{v^2}{r}
```

```latex
a_c = \frac{5.1^2}{0.30}
```

```latex
a_c = \frac{26.01}{0.30}
```

```latex
a_c = 86.7\,m/s^2
```

---

## Resultados finales

```latex
\alpha = 3.0\,rad/s^2
```

```latex
v = 5.1\,m/s
```

```latex
a_t = 0.90\,m/s^2
```

```latex
a_c = 86.7\,m/s^2
```

---

## Escenas de la animación

### Escena 1: Presentación

Mostrar:

* Ventilador visto de frente.
* Tres aspas simples.
* Centro fijo.
* Punta marcada en una aspa.
* Texto:

"Ventilador que acelera"

---

### Escena 2: Velocidad angular inicial

Mostrar:

```latex
\omega_i = 5.0\,rad/s
```

Animar el ventilador girando lentamente.

Mensaje:

"El ventilador ya tiene una velocidad angular inicial."

---

### Escena 3: Velocidad angular final

Mostrar:

```latex
\omega_f = 17.0\,rad/s
```

Animar el ventilador girando más rápido.

Mensaje:

"La velocidad angular aumenta con el tiempo."

---

### Escena 4: Aceleración angular

Mostrar:

```latex
\alpha = \frac{\omega_f-\omega_i}{t}
```

Desarrollar hasta:

```latex
\alpha = 3.0\,rad/s^2
```

Mensaje:

"La aceleración angular mide qué tan rápido cambia la velocidad angular."

---

### Escena 5: Velocidad tangencial de la punta

Mostrar la punta de una aspa.

Agregar una flecha tangente.

Color:

* Verde.

Animar:

```latex
v=r\omega_f
```

Resultado:

```latex
v=5.1\,m/s
```

Mensaje:

"La punta del aspa tiene velocidad tangencial."

---

### Escena 6: Aceleración tangencial

Mostrar una flecha tangente en la punta.

Color:

* Azul.

Animar:

```latex
a_t=r\alpha
```

Resultado:

```latex
a_t=0.90\,m/s^2
```

Mensaje:

"Esta aceleración aumenta la rapidez de la punta."

---

### Escena 7: Aceleración centrípeta

Mostrar una flecha apuntando desde la punta hacia el centro.

Color:

* Rojo.

Animar:

```latex
a_c=\frac{v^2}{r}
```

Resultado:

```latex
a_c=86.7\,m/s^2
```

Mensaje:

"Esta aceleración cambia la dirección del movimiento."

---

### Escena 8: Resumen final

Mostrar una tarjeta resumen:

```latex
\alpha = 3.0\,rad/s^2
```

```latex
v = 5.1\,m/s
```

```latex
a_t = 0.90\,m/s^2
```

```latex
a_c = 86.7\,m/s^2
```

Mensaje final:

"En un ventilador que acelera, la punta del aspa tiene aceleración tangencial y centrípeta."

---

## Requisitos técnicos

Crear la escena en:

```txt
src/scenes/non-uniform-circular-motion/accelerating-fan/
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
initAcceleratingFanScene()
```

y una timeline principal:

```js
const tl = gsap.timeline();
```

---

## Estilo visual

La escena debe mantener el estilo visual de los ejercicios anteriores.

Colores:

* Punta del aspa: rojo
* Velocidad tangencial: verde
* Aceleración tangencial: azul
* Aceleración centrípeta: rojo
* Flecha angular: naranja

Mantener:

* Misma tipografía.
* Misma distribución visual.
* Mismos tamaños relativos.
* Misma ubicación de fórmulas.
* Misma ubicación de controles.
* Márgenes consistentes.
* Fórmulas legibles y sin traslaparse con los diagramas.

---

## Entregable esperado

Una animación web funcional que explique:

1. Ventilador girando.
2. Aumento de velocidad angular.
3. Aceleración angular.
4. Velocidad tangencial de la punta.
5. Aceleración tangencial.
6. Aceleración centrípeta.
7. Desarrollo algebraico completo.
8. Resultados finales.

