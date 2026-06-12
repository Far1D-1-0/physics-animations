function rotorMarkup(kind) {
  if (kind === 'fan') {
    return `
      <circle class="rotor-rim" cx="400" cy="300" r="225" />
      <g id="rotor-group">
        <path class="fan-blade" d="M410 286 C485 216 565 194 620 238 C558 264 493 293 425 308 Z" />
        <path class="fan-blade" d="M410 286 C485 216 565 194 620 238 C558 264 493 293 425 308 Z" transform="rotate(120 400 300)" />
        <path class="fan-blade" d="M410 286 C485 216 565 194 620 238 C558 264 493 293 425 308 Z" transform="rotate(240 400 300)" />
        ${vectorMarkup()}
        <circle class="tracked-point" cx="625" cy="300" r="13" />
        <circle class="hub" cx="400" cy="300" r="32" />
      </g>`
  }

  const spokes = kind === 'wheel'
    ? `<g><line class="rotor-spoke" x1="400" y1="300" x2="625" y2="300" /><line class="rotor-spoke" x1="400" y1="300" x2="400" y2="75" /><line class="rotor-spoke" x1="400" y1="300" x2="175" y2="300" /><line class="rotor-spoke" x1="400" y1="300" x2="400" y2="525" /><line class="rotor-spoke" x1="400" y1="300" x2="559" y2="141" /><line class="rotor-spoke" x1="400" y1="300" x2="241" y2="459" /></g>`
    : `<g><line class="rotor-spoke" x1="400" y1="300" x2="625" y2="300" /><line class="rotor-spoke" x1="400" y1="300" x2="400" y2="75" /><line class="rotor-spoke" x1="400" y1="300" x2="175" y2="300" /><line class="rotor-spoke" x1="400" y1="300" x2="400" y2="525" /></g>`

  return `
    <circle class="rotor-rim" cx="400" cy="300" r="225" />
    <g id="rotor-group">
      <circle class="rotor-disc" cx="400" cy="300" r="215" />
      ${spokes}
      ${vectorMarkup()}
      <circle class="tracked-point" cx="625" cy="300" r="13" />
      <circle class="hub" cx="400" cy="300" r="18" />
    </g>`
}

function vectorMarkup() {
  return `
    <line id="radius-line" class="radius-line" x1="400" y1="300" x2="625" y2="300" />
    <text id="radius-label" class="svg-label vector-yellow" x="500" y="282">r</text>
    <g id="velocity-vector"><line class="vector-line" x1="625" y1="280" x2="625" y2="150" marker-end="url(#arrow-green)" /><text class="svg-label vector-velocity" x="645" y="178">v</text></g>
    <g id="tangential-vector"><line class="vector-line" x1="650" y1="282" x2="650" y2="195" marker-end="url(#arrow-blue)" /><text class="svg-label vector-tangential" x="670" y="225">aₜ</text></g>
    <g id="centripetal-vector"><line class="vector-line" x1="607" y1="320" x2="472" y2="320" marker-end="url(#arrow-red)" /><text class="svg-label vector-centripetal" x="520" y="350">a꜀</text></g>
    <g id="total-vector"><line class="vector-line" x1="610" y1="280" x2="486" y2="182" marker-end="url(#arrow-orange)" /><text class="svg-label vector-total" x="505" y="190">a</text></g>`
}

export function mountLesson({ kind, pageTitle, diagramTitle, diagramDescription, formulas, chapters, summaryRows }) {
  const formulaMarkup = Object.entries(formulas).map(([key, value]) => {
    const classes = Array.isArray(value) ? 'formula-card formula-stack' : `formula-card ${key === 'radius' ? 'formula-card--compact' : 'formula-card--hero'}`
    return `<div id="formula-${key}" class="${classes}"></div>`
  }).join('')
  const summaryMarkup = summaryRows.map((row, index) => `<text class="result-row" x="400" y="${235 + index * 45}">${row}</text>`).join('')

  document.title = `${pageTitle} | Física animada`
  document.body.innerHTML = `
    <main class="lesson">
      <header class="lesson__header">
        <a class="back-link" href="/" aria-label="Volver al inicio"><span aria-hidden="true">←</span>Física animada</a>
        <div class="lesson__meta"><span>Movimiento Circular No Uniforme</span><span class="lesson__duration">≈ 1 min</span></div>
      </header>
      <section class="stage-shell" aria-labelledby="chapter-title">
        <div class="stage-copy">
          <div class="copy-fixed">
            <p id="chapter-kicker" class="chapter-kicker"></p>
            <h1 id="chapter-title"></h1>
            <p id="chapter-message" class="chapter-message"></p>
            <div id="data-cards" class="data-cards" aria-label="Datos del problema"></div>
          </div>
          <div class="formula-deck">${formulaMarkup}</div>
        </div>
        <div class="stage-visual">
          <svg class="physics-stage" viewBox="0 0 800 600" role="img" aria-labelledby="svg-title svg-description">
            <title id="svg-title">${diagramTitle}</title><desc id="svg-description">${diagramDescription}</desc>
            <defs>
              <marker id="arrow-green" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse" viewBox="0 0 16 16"><path d="M0,0 L16,8 L0,16 z" fill="#52d69b" /></marker>
              <marker id="arrow-blue" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse" viewBox="0 0 16 16"><path d="M0,0 L16,8 L0,16 z" fill="#4db8ff" /></marker>
              <marker id="arrow-red" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse" viewBox="0 0 16 16"><path d="M0,0 L16,8 L0,16 z" fill="#ff5e6c" /></marker>
              <marker id="arrow-orange" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse" viewBox="0 0 16 16"><path d="M0,0 L16,8 L0,16 z" fill="#ffad42" /></marker>
            </defs>
            <rect class="stage-background" width="800" height="600" rx="30" />
            <g class="grid-lines" opacity=".3"><path d="M0 100H800 M0 200H800 M0 300H800 M0 400H800 M0 500H800" /><path d="M100 0V600 M200 0V600 M300 0V600 M400 0V600 M500 0V600 M600 0V600 M700 0V600" /></g>
            <g id="motion-view" class="scene-layer">
              <g id="rotor-shell">${rotorMarkup(kind)}</g>
              <path id="rotation-arrow" class="rotation-arrow" d="M235 165 A225 225 0 0 1 565 165" marker-end="url(#arrow-orange)" />
            </g>
            <g id="summary-view" class="scene-layer">
              <circle class="summary-ring" cx="400" cy="300" r="245" />
              <g id="result-panel" class="result-panel">
                <rect x="185" y="130" width="430" height="350" rx="28" />
                <text class="result-panel-title" x="400" y="185">RESULTADOS FINALES</text>
                ${summaryMarkup}
              </g>
            </g>
          </svg>
          <div class="visual-legend" aria-label="Leyenda de vectores">
            <span><i class="legend-dot legend-dot--velocity"></i>Velocidad</span>
            <span><i class="legend-dot legend-dot--tangential"></i>Tangencial</span>
            <span><i class="legend-dot legend-dot--centripetal"></i>Centrípeta</span>
            <span><i class="legend-dot legend-dot--total"></i>Total</span>
          </div>
        </div>
      </section>
      <section class="player" aria-label="Controles de animación">
        <div class="player__buttons">
          <button id="play-button" class="control-button control-button--primary" type="button"><span aria-hidden="true">▶</span> Play</button>
          <button id="pause-button" class="control-button" type="button"><span aria-hidden="true">Ⅱ</span> Pause</button>
          <button id="restart-button" class="control-button" type="button"><span aria-hidden="true">↻</span> Restart</button>
        </div>
        <div class="player__timeline"><input id="progress-slider" type="range" min="0" max="1000" value="0" aria-label="Progreso de la animación" /><div class="player__time"><span id="current-time">0:00</span><span id="chapter-count">1 / ${chapters.length}</span><span id="total-time">0:00</span></div></div>
      </section>
      <nav id="chapter-nav" class="chapter-nav chapter-nav--eight" aria-label="Capítulos de la explicación"></nav>
    </main>`
}
