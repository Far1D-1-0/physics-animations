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
        <span>01 disponible</span>
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
    </section>
  </main>
`
