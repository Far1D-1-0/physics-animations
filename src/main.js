import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="home">
    <header class="home__header">
      <a class="brand" href="/">Física animada</a>
      <span>Laboratorio visual</span>
    </header>

    <section class="hero">
      <p class="eyebrow">Aprender viendo</p>
      <h1>Problemas de física,<br><em>puestos en movimiento.</em></h1>
      <p class="hero__intro">
        Una colección de explicaciones interactivas que conecta diagramas,
        fuerzas y ecuaciones paso a paso.
      </p>
    </section>

    <section class="collection" aria-labelledby="collection-title">
      <div class="collection__heading">
        <p id="collection-title">Animaciones</p>
        <span>06 disponibles</span>
      </div>
      <a class="lesson-card" href="/src/scenes/circular-motion/car-max-speed/">
        <div class="lesson-card__visual" aria-hidden="true">
          <div class="orbit">
            <span class="orbit__center"></span>
            <span class="orbit__car"></span>
          </div>
        </div>
        <div class="lesson-card__content">
          <p>Movimiento circular · Fricción estática</p>
          <h2>Rapidez máxima de un automóvil en una curva plana</h2>
          <div class="lesson-card__footer">
            <span>9 capítulos · ≈ 1 min</span>
            <strong>Explorar <span>→</span></strong>
          </div>
        </div>
      </a>
      <a class="lesson-card" href="/src/scenes/non-uniform-circular-motion/accelerating-disk/">
        <div class="lesson-card__visual lesson-card__visual--nonuniform" aria-hidden="true">
          <div class="nonuniform-preview"><span class="nonuniform-preview__spoke"></span><span class="nonuniform-preview__point"></span></div>
        </div>
        <div class="lesson-card__content">
          <p>Movimiento circular no uniforme · Disco</p>
          <h2>Disco que acelera desde el reposo</h2>
          <div class="lesson-card__footer"><span>8 capítulos · ≈ 1 min</span><strong>Explorar <span>→</span></strong></div>
        </div>
      </a>
      <a class="lesson-card" href="/src/scenes/non-uniform-circular-motion/point-on-wheel/">
        <div class="lesson-card__visual lesson-card__visual--nonuniform" aria-hidden="true">
          <div class="nonuniform-preview nonuniform-preview--wheel"><span class="nonuniform-preview__spoke"></span><span class="nonuniform-preview__point"></span></div>
        </div>
        <div class="lesson-card__content">
          <p>Movimiento circular no uniforme · Rueda</p>
          <h2>Punto sobre una rueda que acelera</h2>
          <div class="lesson-card__footer"><span>8 capítulos · ≈ 1 min</span><strong>Explorar <span>→</span></strong></div>
        </div>
      </a>
      <a class="lesson-card" href="/src/scenes/non-uniform-circular-motion/accelerating-fan/">
        <div class="lesson-card__visual lesson-card__visual--nonuniform" aria-hidden="true">
          <div class="fan-preview"><span></span><span></span><span></span><i></i></div>
        </div>
        <div class="lesson-card__content">
          <p>Movimiento circular no uniforme · Ventilador</p>
          <h2>Ventilador que aumenta su velocidad</h2>
          <div class="lesson-card__footer"><span>8 capítulos · ≈ 1 min</span><strong>Explorar <span>→</span></strong></div>
        </div>
      </a>
      <a class="lesson-card" href="/src/scenes/circular-motion/banked-curve-car/">
        <div class="lesson-card__visual lesson-card__visual--banked" aria-hidden="true">
          <div class="banked-preview">
            <span class="banked-preview__road"></span>
            <span class="banked-preview__car"></span>
            <span class="banked-preview__normal"></span>
          </div>
        </div>
        <div class="lesson-card__content">
          <p>Movimiento circular · Curva peraltada</p>
          <h2>Rapidez de un automóvil en una curva inclinada</h2>
          <div class="lesson-card__footer">
            <span>9 capítulos · ≈ 1 min</span>
            <strong>Explorar <span>→</span></strong>
          </div>
        </div>
      </a>
      <a class="lesson-card" href="/src/scenes/circular-motion/metal-ball-tension/">
        <div class="lesson-card__visual lesson-card__visual--ball" aria-hidden="true">
          <div class="ball-orbit">
            <span class="ball-orbit__axis"></span>
            <span class="ball-orbit__string"></span>
            <span class="ball-orbit__ball"></span>
          </div>
        </div>
        <div class="lesson-card__content">
          <p>Movimiento circular · Tensión</p>
          <h2>Tensión de una cuerda sobre una bola metálica</h2>
          <div class="lesson-card__footer">
            <span>8 capítulos · ≈ 1 min</span>
            <strong>Explorar <span>→</span></strong>
          </div>
        </div>
      </a>
    </section>
  </main>
`
