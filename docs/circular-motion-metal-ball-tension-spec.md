# Animación web de Física: Movimiento circular — tensión máxima en una cuerda

## Objetivo

Crear una animación web educativa para explicar paso a paso un problema de movimiento circular uniforme:

**Una bola de metal está atada a un eje mediante una cuerda y gira en una trayectoria circular horizontal. Se desea obtener la tensión máxima que soporta la cuerda.**

La animación debe explicar el fenómeno, mostrar el diagrama de fuerzas, desarrollar las fórmulas y presentar el resultado.

## Stack requerido

Usar:

* HTML
* CSS
* JavaScript vanilla
* SVG para diagramas
* GSAP para animaciones
* KaTeX para fórmulas

## Datos del problema

Una bola metálica de masa:

```latex
m = 0.50\,kg
```

está atada a una cuerda de longitud:

```latex
r = 0.80\,m
```

y gira con rapidez constante:

```latex
v = 6.0\,m/s
```

Determinar la tensión en la cuerda.

## Concepto físico central

La bola describe movimiento circular uniforme. Aunque su rapidez sea constante, su velocidad cambia de dirección, por lo que existe aceleración centrípeta:

```latex
a_c = \frac{v^2}{r}
```

La fuerza que apunta hacia el centro es la tensión de la cuerda:

```latex
T = m a_c
```

Sustituyendo:

```latex
T = m\frac{v^2}{r}
```

## Desarrollo matemático

Partimos de la segunda ley de Newton en dirección radial:

```latex
\sum F_r = m a_c
```

Como la tensión es la fuerza radial:

```latex
T = m a_c
```

Usamos la aceleración centrípeta:

```latex
a_c = \frac{v^2}{r}
```

Entonces:

```latex
T = m\frac{v^2}{r}
```

Sustituimos valores:

```latex
T = (0.50\,kg)\frac{(6.0\,m/s)^2}{0.80\,m}
```

```latex
T = (0.50)\frac{36}{0.80}
```

```latex
T = (0.50)(45)
```

```latex
T = 22.5\,N
```

Resultado final:

```latex
\boxed{T = 22.5\,N}
```

## Escenas de la animación

### Escena 1: Presentación

Mostrar una bola metálica girando alrededor de un eje central.

Elementos:

* Eje fijo en el centro.
* Cuerda.
* Bola metálica.
* Trayectoria circular punteada.
* Texto: “Movimiento circular uniforme: tensión en una cuerda”.

### Escena 2: Vista superior

Mostrar la bola desde arriba.

Elementos:

* Radio marcado como:

```latex
r = 0.80\,m
```

* Velocidad tangencial:

```latex
v = 6.0\,m/s
```

* Flecha de velocidad tangente al círculo.

Mensaje:

“La velocidad es tangente a la trayectoria.”

### Escena 3: Aceleración centrípeta

Mostrar una flecha desde la bola hacia el centro.

Fórmula:

```latex
a_c = \frac{v^2}{r}
```

Mensaje:

“La aceleración apunta hacia el centro.”

### Escena 4: Diagrama de fuerzas

Mostrar la bola con la cuerda estirada hacia el eje.

Elementos:

* Flecha de tensión hacia el centro:

```latex
T
```

Mensaje:

“La tensión de la cuerda es la fuerza centrípeta.”

### Escena 5: Segunda ley de Newton

Animar las fórmulas:

```latex
\sum F_r = m a_c
```

```latex
T = m a_c
```

```latex
T = m\frac{v^2}{r}
```

### Escena 6: Sustitución numérica

Animar:

```latex
T = (0.50\,kg)\frac{(6.0\,m/s)^2}{0.80\,m}
```

```latex
T = (0.50)\frac{36}{0.80}
```

```latex
T = 22.5\,N
```

### Escena 7: Interpretación final

Mostrar que si la rapidez aumenta, la tensión también aumenta.

Fórmula comparativa:

```latex
T \propto v^2
```

Mensaje:

“Si la rapidez se duplica, la tensión se cuadruplica.”

Resultado final:

```latex
\boxed{T = 22.5\,N}
```

## Requisitos técnicos

Crear la escena en:

```txt
src/scenes/circular-motion/metal-ball-tension/
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
initMetalBallTensionScene()
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

* Fondo limpio.
* Bola metálica con efecto circular o degradado.
* Cuerda como línea SVG.
* Trayectoria circular punteada.
* Tensión en color naranja.
* Velocidad en azul.
* Aceleración centrípeta en rojo.
* Fórmulas grandes y legibles.

## Entregable esperado

Una animación web funcional que explique:

1. Bola girando alrededor de un eje.
2. Velocidad tangencial.
3. Aceleración centrípeta.
4. Tensión como fuerza radial.
5. Desarrollo matemático.
6. Sustitución numérica.
7. Resultado final.
