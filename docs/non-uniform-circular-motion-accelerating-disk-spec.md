# Animación web de Física: Movimiento Circular No Uniforme — Disco que acelera

## Objetivo

Crear una animación web educativa para explicar un problema de movimiento circular no uniforme.

Un disco comienza a girar desde el reposo y acelera con aceleración angular constante.

El objetivo es calcular:

* Velocidad angular final.
* Aceleración tangencial.
* Aceleración centrípeta.
* Aceleración total.

La animación debe mostrar claramente cómo aparecen simultáneamente la aceleración tangencial y la aceleración centrípeta.

---

## Stack requerido

Usar:

* HTML
* CSS
* JavaScript vanilla
* SVG
* GSAP
* KaTeX

---

## Datos del problema

Un disco parte del reposo.

Tiene un radio:

```latex
r = 0.50\,m
```

Su aceleración angular es:

```latex
\alpha = 4.0\,rad/s^2
```

Después de:

```latex
t = 3.0\,s
```

determinar:

* Velocidad angular final.
* Velocidad tangencial de un punto en el borde.
* Aceleración tangencial.
* Aceleración centrípeta.
* Aceleración total.

---

## Concepto físico central

A diferencia del movimiento circular uniforme, ahora la rapidez cambia.

Por lo tanto existen dos aceleraciones:

### Aceleración tangencial

Responsable de aumentar la rapidez.

```latex
a_t = r\alpha
```

### Aceleración centrípeta

Responsable de cambiar la dirección de la velocidad.

```latex
a_c = \frac{v^2}{r}
```

### Aceleración total

La aceleración total es la suma vectorial de ambas:

```latex
a = \sqrt{a_t^2+a_c^2}
```

---

## Desarrollo matemático

### Paso 1: velocidad angular final

Como parte del reposo:

```latex
\omega_i = 0
```

Usamos:

```latex
\omega_f = \omega_i + \alpha t
```

```latex
\omega_f = 0 + (4.0)(3.0)
```

```latex
\omega_f = 12.0\,rad/s
```

---

### Paso 2: velocidad tangencial

```latex
v = r\omega
```

```latex
v = (0.50)(12.0)
```

```latex
v = 6.0\,m/s
```

---

### Paso 3: aceleración tangencial

```latex
a_t = r\alpha
```

```latex
a_t = (0.50)(4.0)
```

```latex
a_t = 2.0\,m/s^2
```

---

### Paso 4: aceleración centrípeta

```latex
a_c = \frac{v^2}{r}
```

```latex
a_c = \frac{6.0^2}{0.50}
```

```latex
a_c = \frac{36}{0.50}
```

```latex
a_c = 72.0\,m/s^2
```

---

### Paso 5: aceleración total

```latex
a = \sqrt{a_t^2+a_c^2}
```

```latex
a = \sqrt{2.0^2+72.0^2}
```

```latex
a = \sqrt{4+5184}
```

```latex
a = \sqrt{5188}
```

```latex
a = 72.03\,m/s^2
```

---

## Resultados finales

```latex
\omega_f = 12.0\,rad/s
```

```latex
v = 6.0\,m/s
```

```latex
a_t = 2.0\,m/s^2
```

```latex
a_c = 72.0\,m/s^2
```

```latex
a = 72.03\,m/s^2
```

---

## Escenas de la animación

### Escena 1: Presentación

Mostrar un disco visto desde arriba.

Elementos:

* Disco.
* Punto rojo sobre el borde.
* Radio marcado.
* Texto:

"Movimiento Circular No Uniforme"

Animación:

* El disco inicia detenido.
* Comienza a girar lentamente.

---

### Escena 2: Aceleración angular

Mostrar:

```latex
\alpha = 4.0\,rad/s^2
```

Animación:

* El disco gira cada vez más rápido.

Mensaje:

"La rapidez angular está aumentando."

---

### Escena 3: Velocidad angular

Mostrar:

```latex
\omega_f = \omega_i + \alpha t
```

Animar el desarrollo hasta:

```latex
\omega_f = 12.0\,rad/s
```

Mostrar una flecha curva alrededor del disco.

---

### Escena 4: Velocidad tangencial

Mostrar un punto rojo sobre el borde.

Agregar una flecha tangente al movimiento.

Mostrar:

```latex
v=r\omega
```

Resultado:

```latex
v=6.0\,m/s
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
a_t=2.0\,m/s^2
```

Mensaje:

"Esta aceleración aumenta la rapidez."

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
a_c=72.0\,m/s^2
```

Mensaje:

"Esta aceleración cambia la dirección."

---

### Escena 7: Aceleración total

Mostrar simultáneamente:

* Flecha tangencial.
* Flecha centrípeta.

Construir el vector resultante.

Animar:

```latex
a=\sqrt{a_t^2+a_c^2}
```

Resultado:

```latex
a=72.03\,m/s^2
```

Mensaje:

"La aceleración total es la suma vectorial."

---

### Escena 8: Conclusión

Mostrar una tarjeta resumen:

```latex
\omega_f = 12.0\,rad/s
```

```latex
v = 6.0\,m/s
```

```latex
a_t = 2.0\,m/s^2
```

```latex
a_c = 72.0\,m/s^2
```

```latex
a = 72.03\,m/s^2
```

Mensaje final:

"En movimiento circular no uniforme existen simultáneamente aceleración tangencial y aceleración centrípeta."

---

## Requisitos técnicos

Crear la escena en:

```txt
src/scenes/non-uniform-circular-motion/accelerating-disk/
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
initAcceleratingDiskScene()
```

y una timeline principal:

```js
const tl = gsap.timeline();
```

Controles:

* Play
* Pause
* Restart
* Slider de progreso

---

## Estilo visual

* Fondo limpio.
* Disco gris o azul.
* Punto rojo sobre el borde.
* Velocidad en verde.
* Aceleración tangencial en azul.
* Aceleración centrípeta en rojo.
* Vector total en naranja.
* Fórmulas grandes y legibles.

---

## Entregable esperado

Una animación web funcional que explique:

1. Disco acelerando.
2. Velocidad angular.
3. Velocidad tangencial.
4. Aceleración tangencial.
5. Aceleración centrípeta.
6. Aceleración total.
7. Desarrollo algebraico.
8. Resultados finales.
