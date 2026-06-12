# Animación web de Física: Movimiento circular — automóvil en curva peraltada

## Objetivo

Crear una animación web educativa para explicar un problema de movimiento circular uniforme:

**Un automóvil toma una curva en un plano inclinado o peraltado. Se desea encontrar la rapidez ideal para que el automóvil no dependa de la fricción.**

La animación debe mostrar el diagrama de fuerzas, el desarrollo de fórmulas y la interpretación física.

## Stack requerido

Usar:

* HTML
* CSS
* JavaScript vanilla
* SVG
* GSAP
* KaTeX

## Datos del problema

Un automóvil toma una curva peraltada de radio:

```latex
r = 50.0\,m
```

El ángulo de inclinación de la carretera es:

```latex
\theta = 15^\circ
```

Usar:

```latex
g = 9.80\,m/s^2
```

Determinar la rapidez ideal para que el automóvil tome la curva sin depender de la fricción.

## Concepto físico central

En una curva peraltada, la fuerza normal no apunta verticalmente. La normal se inclina y tiene dos componentes:

```latex
n\cos\theta
```

hacia arriba, y

```latex
n\sin\theta
```

hacia el centro de la curva.

La componente horizontal de la normal produce la aceleración centrípeta.

## Desarrollo matemático

En la dirección vertical no hay aceleración:

```latex
\sum F_y = 0
```

```latex
n\cos\theta - mg = 0
```

```latex
n\cos\theta = mg
```

En la dirección radial:

```latex
\sum F_r = m a_c
```

```latex
n\sin\theta = m\frac{v^2}{r}
```

Dividimos la ecuación radial entre la ecuación vertical:

```latex
\frac{n\sin\theta}{n\cos\theta}
=
\frac{m\frac{v^2}{r}}{mg}
```

Cancelamos masa y normal:

```latex
\tan\theta = \frac{v^2}{rg}
```

Despejamos la rapidez:

```latex
v^2 = rg\tan\theta
```

```latex
v = \sqrt{rg\tan\theta}
```

## Sustitución numérica

```latex
v = \sqrt{(50.0\,m)(9.80\,m/s^2)\tan(15^\circ)}
```

```latex
v = \sqrt{(490)(0.268)}
```

```latex
v = \sqrt{131.3}
```

```latex
v = 11.5\,m/s
```

Conversión:

```latex
11.5\,m/s \times 3.6 = 41.4\,km/h
```

Resultado final:

```latex
\boxed{v = 11.5\,m/s}
```

```latex
\boxed{v \approx 41.4\,km/h}
```

## Escenas de la animación

### Escena 1: Presentación

Mostrar un automóvil entrando a una curva inclinada.

Elementos:

* Carretera curva con inclinación.
* Auto.
* Radio de la curva.
* Texto: “Movimiento circular en curva peraltada”.

### Escena 2: Vista del plano inclinado

Mostrar un corte transversal de la carretera.

Elementos:

* Plano inclinado.
* Ángulo:

```latex
\theta = 15^\circ
```

* Auto sobre el plano.
* Centro de la curva indicado hacia el lado bajo del peralte.

Mensaje:

“La carretera está inclinada para ayudar al auto a girar.”

### Escena 3: Diagrama de fuerzas

Mostrar las fuerzas sobre el automóvil:

* Peso hacia abajo:

```latex
mg
```

* Normal perpendicular al plano:

```latex
n
```

Separar la normal en componentes:

```latex
n\cos\theta
```

```latex
n\sin\theta
```

Mensaje:

“La normal tiene una componente vertical y una componente radial.”

### Escena 4: Equilibrio vertical

Animar:

```latex
\sum F_y = 0
```

```latex
n\cos\theta - mg = 0
```

```latex
n\cos\theta = mg
```

Mensaje:

“Verticalmente el automóvil no acelera.”

### Escena 5: Movimiento circular radial

Animar:

```latex
\sum F_r = m a_c
```

```latex
n\sin\theta = m\frac{v^2}{r}
```

Mensaje:

“La componente horizontal de la normal produce la aceleración centrípeta.”

### Escena 6: División de ecuaciones

Mostrar las dos ecuaciones:

```latex
n\cos\theta = mg
```

```latex
n\sin\theta = m\frac{v^2}{r}
```

Después animar:

```latex
\frac{n\sin\theta}{n\cos\theta}
=
\frac{m\frac{v^2}{r}}{mg}
```

```latex
\tan\theta = \frac{v^2}{rg}
```

```latex
v = \sqrt{rg\tan\theta}
```

Mensaje:

“La masa y la normal se cancelan.”

### Escena 7: Sustitución numérica

Animar:

```latex
v = \sqrt{(50.0)(9.80)\tan(15^\circ)}
```

```latex
v = 11.5\,m/s
```

```latex
v \approx 41.4\,km/h
```

### Escena 8: Interpretación final

Mostrar tres casos:

```latex
v < 11.5\,m/s
```

El auto tendería a deslizarse hacia abajo de la curva.

```latex
v = 11.5\,m/s
```

El auto toma la curva sin fricción.

```latex
v > 11.5\,m/s
```

El auto tendería a deslizarse hacia arriba de la curva.

Mensaje final:

“La rapidez ideal depende del radio, la gravedad y el ángulo del peralte.”

Resultado:

```latex
\boxed{v = \sqrt{rg\tan\theta}}
```

```latex
\boxed{v = 11.5\,m/s \approx 41.4\,km/h}
```

## Requisitos técnicos

Crear la escena en:

```txt
src/scenes/circular-motion/banked-curve-car/
```

Archivos:

```txt
index.html
scene.css
scene.js
content.js
```

Debe existir una función principal:

```js
initBankedCurveCarScene()
```

Debe existir una timeline principal:

```js
const tl = gsap.timeline();
```

Agregar controles:

* Play
* Pause
* Restart
* Slider de progreso

## Estilo visual

* Curva peraltada clara.
* Auto simple pero reconocible.
* Normal en verde.
* Peso en morado o gris.
* Componente radial en naranja.
* Aceleración centrípeta en rojo.
* Velocidad en azul.
* Fórmulas grandes y legibles.
* Fondo limpio y estilo educativo.

## Entregable esperado

Una animación web funcional que explique:

1. Auto en curva peraltada.
2. Plano inclinado con ángulo.
3. Diagrama de fuerzas.
4. Componentes de la normal.
5. Equilibrio vertical.
6. Fuerza radial centrípeta.
7. Desarrollo hasta:

```latex
v = \sqrt{rg\tan\theta}
```

8. Sustitución numérica.
9. Resultado final.
10. Interpretación física de ir más lento o más rápido.
