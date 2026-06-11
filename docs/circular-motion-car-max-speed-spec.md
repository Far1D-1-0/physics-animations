# Animación web de Física: Movimiento circular — rapidez máxima de un automóvil

## Objetivo

Crear una animación web educativa, en HTML, CSS y JavaScript, para explicar paso a paso el problema:

**¿Cuál es la máxima rapidez de un automóvil en una curva plana horizontal?**

El video debe explicar el ejemplo de movimiento circular con fricción estática. La animación debe incluir visuales, fórmulas, sustitución numérica y conclusión física.

## Stack requerido

Usar:

* HTML
* CSS
* JavaScript vanilla
* SVG para diagramas, flechas, curva, radio, auto y fuerzas
* GSAP para animaciones secuenciadas
* KaTeX para mostrar fórmulas en LaTeX

No usar React en esta primera versión.

## Datos del problema

Un automóvil de masa:

```latex
m = 1500\,kg
```

se mueve sobre una curva plana horizontal de radio:

```latex
r = 35.0\,m
```

El coeficiente de fricción estática entre las llantas y el pavimento seco es:

```latex
\mu_s = 0.523
```

Usar:

```latex
g = 9.80\,m/s^2
```

Se debe encontrar la rapidez máxima para que el automóvil tome la curva sin derrapar.

## Concepto físico central

El automóvil se mueve en una trayectoria circular. Aunque su rapidez pueda ser constante, su velocidad cambia de dirección. Por eso necesita una aceleración hacia el centro de la curva:

```latex
a_c = \frac{v^2}{r}
```

La fuerza horizontal que mantiene al automóvil en la curva es la fricción estática. La fricción estática apunta hacia el centro de la curva.

En el límite de derrape, la fricción estática alcanza su valor máximo:

```latex
f_{s,\max} = \mu_s n
```

Como el automóvil no acelera verticalmente:

```latex
\sum F_y = 0
```

```latex
n - mg = 0
```

```latex
n = mg
```

En la dirección radial:

```latex
\sum F_r = m a_c
```

```latex
f_s = m\frac{v^2}{r}
```

Para la rapidez máxima:

```latex
f_{s,\max} = m\frac{v_{\max}^2}{r}
```

Sustituyendo:

```latex
\mu_s n = m\frac{v_{\max}^2}{r}
```

Como:

```latex
n = mg
```

entonces:

```latex
\mu_s mg = m\frac{v_{\max}^2}{r}
```

Cancelar la masa:

```latex
\mu_s g = \frac{v_{\max}^2}{r}
```

Despejar:

```latex
v_{\max}^2 = \mu_s g r
```

```latex
v_{\max} = \sqrt{\mu_s g r}
```

Sustitución numérica:

```latex
v_{\max} = \sqrt{(0.523)(9.80\,m/s^2)(35.0\,m)}
```

```latex
v_{\max} = \sqrt{179.4\,m^2/s^2}
```

```latex
v_{\max} = 13.4\,m/s
```

Conversión:

```latex
13.4\,m/s \times 3.6 = 48.2\,km/h
```

Resultado final:

```latex
v_{\max} = 13.4\,m/s \approx 48.2\,km/h
```

## Escenas de la animación

### Escena 1: Presentación del problema

Mostrar un auto entrando a una curva vista desde arriba.

Elementos visuales:

* Carretera curva
* Auto
* Trayectoria circular punteada
* Radio marcado desde el centro de la curva hasta el auto
* Texto: “Movimiento circular: rapidez máxima en una curva”

Animación:

1. El auto aparece moviéndose sobre una trayectoria curva.
2. Se dibuja el círculo guía.
3. Se dibuja el radio.
4. Aparece el dato:

```latex
r = 35.0\,m
```

Narrativa visual:

El auto necesita una aceleración hacia el centro para seguir la curva.

### Escena 2: Aceleración centrípeta

Elementos visuales:

* Auto sobre la curva
* Vector velocidad tangente a la trayectoria
* Vector aceleración hacia el centro
* Fórmula grande:

```latex
a_c = \frac{v^2}{r}
```

Animación:

1. Aparece el vector velocidad tangencial.
2. El vector velocidad cambia de dirección conforme el auto avanza.
3. Aparece el vector de aceleración apuntando hacia el centro.
4. Aparece la fórmula de aceleración centrípeta.

Mensaje en pantalla:

“En movimiento circular, la aceleración apunta hacia el centro.”

### Escena 3: Diagrama de cuerpo libre

Cambiar a una vista trasera o lateral simplificada del automóvil sobre camino horizontal.

Elementos visuales:

* Auto como bloque o silueta sencilla
* Peso hacia abajo:

```latex
mg
```

* Normal hacia arriba:

```latex
n
```

* Fricción estática horizontal hacia el centro:

```latex
f_s
```

Animación:

1. Aparece el auto.
2. Aparece el peso hacia abajo.
3. Aparece la normal hacia arriba.
4. Aparece la fricción estática hacia el centro.
5. Resaltar la fricción como la fuerza que produce el movimiento circular.

Mensaje en pantalla:

“La fricción estática es la fuerza que mantiene al auto en la curva.”

### Escena 4: Segunda ley en dirección radial

Elementos visuales:

* Diagrama desde arriba
* Flecha de fricción hacia el centro
* Fórmulas paso a paso

Animar las fórmulas en este orden:

```latex
\sum F_r = m a_c
```

```latex
a_c = \frac{v^2}{r}
```

```latex
\sum F_r = m\frac{v^2}{r}
```

```latex
f_s = m\frac{v^2}{r}
```

Mensaje en pantalla:

“La única fuerza horizontal hacia el centro es la fricción estática.”

### Escena 5: Condición de rapidez máxima

Elementos visuales:

* Flecha de fricción que crece conforme aumenta la rapidez
* Indicador visual de “límite de adherencia”
* Fórmula:

```latex
f_{s,\max} = \mu_s n
```

Animación:

1. El auto se mueve más rápido.
2. La flecha de fricción aumenta.
3. Aparece el texto: “Justo antes de derrapar”.
4. Aparece la fórmula de fricción máxima.
5. Igualar con la fuerza radial:

```latex
\mu_s n = m\frac{v_{\max}^2}{r}
```

Mensaje en pantalla:

“La rapidez máxima ocurre cuando la fricción estática llega a su valor máximo.”

### Escena 6: Equilibrio vertical

Elementos visuales:

* Auto visto de lado o de frente
* Flechas verticales:

```latex
n
```

y

```latex
mg
```

Animar las fórmulas:

```latex
\sum F_y = 0
```

```latex
n - mg = 0
```

```latex
n = mg
```

Mensaje en pantalla:

“Verticalmente no hay aceleración, por eso la normal es igual al peso.”

### Escena 7: Despeje simbólico

Mostrar la deducción paso a paso, con énfasis en la cancelación de la masa.

Animar estas líneas:

```latex
\mu_s n = m\frac{v_{\max}^2}{r}
```

```latex
n = mg
```

```latex
\mu_s mg = m\frac{v_{\max}^2}{r}
```

Luego mostrar que la masa se cancela en ambos lados:

```latex
\mu_s g = \frac{v_{\max}^2}{r}
```

Después despejar:

```latex
v_{\max}^2 = \mu_s g r
```

```latex
v_{\max} = \sqrt{\mu_s g r}
```

Mensaje en pantalla:

“La rapidez máxima no depende de la masa del automóvil.”

### Escena 8: Sustitución numérica

Mostrar una tarjeta con los datos:

```latex
\mu_s = 0.523
```

```latex
g = 9.80\,m/s^2
```

```latex
r = 35.0\,m
```

Animar:

```latex
v_{\max} = \sqrt{\mu_s g r}
```

```latex
v_{\max} = \sqrt{(0.523)(9.80\,m/s^2)(35.0\,m)}
```

```latex
v_{\max} = \sqrt{179.4\,m^2/s^2}
```

```latex
v_{\max} = 13.4\,m/s
```

Luego convertir:

```latex
13.4\,m/s \times 3.6 = 48.2\,km/h
```

### Escena 9: Interpretación final

Mostrar dos autos o dos casos:

Caso A:

```latex
v < 13.4\,m/s
```

El auto toma la curva correctamente.

Caso B:

```latex
v > 13.4\,m/s
```

El auto derrapa hacia afuera.

Animación:

1. Auto lento sigue la curva.
2. Auto rápido se sale de la curva.
3. Aparece el resultado final:

```latex
\boxed{v_{\max}=13.4\,m/s}
```

```latex
\boxed{v_{\max}\approx48.2\,km/h}
```

Mensaje final:

“Si el auto supera esta rapidez, la fricción estática ya no alcanza para producir la aceleración centrípeta necesaria.”

## Requisitos visuales

* Fondo oscuro o claro limpio.
* Estilo educativo, moderno y minimalista.
* Flechas grandes y legibles.
* Fórmulas con KaTeX.
* Usar colores consistentes:

  * Velocidad: azul
  * Aceleración centrípeta: rojo
  * Fricción: naranja
  * Peso: morado o gris
  * Normal: verde
* Cada escena debe durar entre 5 y 12 segundos.
* La animación total debe poder capturarse con OBS o exportarse grabando el navegador.

## Requisitos técnicos

Crear una escena funcional en:

```txt
src/scenes/circular-motion/car-max-speed/
```

Archivos:

```txt
index.html
scene.css
scene.js
content.js
```

El archivo `content.js` debe contener los textos, datos y fórmulas para que después sea fácil cambiar el problema.

El archivo `scene.js` debe construir la animación con GSAP.

Debe existir una función principal:

```js
initCarMaxSpeedScene()
```

Debe existir una timeline principal:

```js
const tl = gsap.timeline();
```

Agregar controles básicos:

* botón “Play”
* botón “Pause”
* botón “Restart”
* slider de progreso

## Entregable esperado

Implementar una primera versión funcional con:

1. Vista superior del auto en la curva.
2. Diagrama de cuerpo libre.
3. Desarrollo completo de fórmulas.
4. Sustitución numérica.
5. Resultado final.
6. Animación de derrape si se supera la rapidez máxima.

Priorizar claridad física y legibilidad sobre efectos visuales complejos.
