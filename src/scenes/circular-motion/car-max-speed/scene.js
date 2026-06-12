import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import './scene.css'
import { chapters, dataCards, formulas } from './content.js'

gsap.registerPlugin(MotionPathPlugin)

const SELECTORS = {
  layers: '.scene-layer',
  formulas: '.formula-card',
  formulaRows: '.formula-row',
}

let tl
let activeChapterIndex = -1
let isScrubbing = false

function renderMath(element, expression, options = {}) {
  katex.render(expression, element, {
    throwOnError: false,
    displayMode: options.displayMode ?? true,
    strict: false,
  })
}

function renderFormulaStack(elementId, expressions, finalRowIndex = -1) {
  const container = document.querySelector(elementId)

  expressions.forEach((expression, index) => {
    const row = document.createElement('div')
    row.className = 'formula-row'

    if (index === finalRowIndex) {
      row.classList.add('formula-row--final')
    }

    renderMath(row, expression)
    container.append(row)
  })
}

function renderSvgMath(groupId, expression, dimensions) {
  const group = document.querySelector(groupId)
  const namespace = 'http://www.w3.org/2000/svg'
  const foreignObject = document.createElementNS(namespace, 'foreignObject')
  const content = document.createElement('div')

  Object.entries(dimensions).forEach(([attribute, value]) => {
    foreignObject.setAttribute(attribute, value)
  })

  content.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml')
  renderMath(content, expression)
  foreignObject.append(content)
  group.append(foreignObject)
}

function renderContent() {
  renderMath(document.querySelector('#formula-radius'), formulas.radius)
  renderMath(document.querySelector('#formula-acceleration'), formulas.acceleration)
  renderFormulaStack('#formula-radial', formulas.radial, 2)
  renderFormulaStack('#formula-limit', formulas.limit, 1)
  renderFormulaStack('#formula-vertical', formulas.vertical, 2)
  renderFormulaStack('#formula-symbolic', formulas.symbolic, 4)
  renderFormulaStack('#formula-numbers', formulas.numbers, 4)
  renderMath(document.querySelector('#formula-result'), formulas.result)

  renderSvgMath('#safe-formula', formulas.safe, {
    x: 65,
    y: 118,
    width: 270,
    height: 55,
  })
  renderSvgMath('#unsafe-formula', formulas.unsafe, {
    x: 455,
    y: 118,
    width: 270,
    height: 55,
  })
  renderSvgMath('#result-banner-formula', formulas.result, {
    x: 140,
    y: 267,
    width: 520,
    height: 70,
  })

  const dataContainer = document.querySelector('#data-cards')
  dataCards.forEach(({ label, value }) => {
    const card = document.createElement('div')
    const labelElement = document.createElement('span')
    const valueElement = document.createElement('div')

    card.className = 'data-card'
    labelElement.className = 'data-card__label'
    labelElement.textContent = label
    renderMath(valueElement, value, { displayMode: false })
    card.append(labelElement, valueElement)
    dataContainer.append(card)
  })
}

function buildChapterNavigation() {
  const navigation = document.querySelector('#chapter-nav')

  chapters.forEach((chapter, index) => {
    const button = document.createElement('button')
    const label = document.createElement('span')

    button.className = 'chapter-button'
    button.type = 'button'
    button.dataset.chapter = chapter.id
    button.setAttribute('aria-label', `Ir al capítulo ${index + 1}: ${chapter.title}`)
    label.textContent = `${index + 1}. ${chapter.title}`
    button.append(label)

    button.addEventListener('click', () => {
      tl.pause()
      tl.seek(chapter.id)
      syncPlayer()
    })

    navigation.append(button)
  })
}

function prepareStroke(selector) {
  const element = document.querySelector(selector)
  const length = element.getTotalLength()

  gsap.set(element, {
    strokeDasharray: length,
    strokeDashoffset: length,
  })
}

function showFormula(timeline, selector, position) {
  timeline
    .to(SELECTORS.formulas, { autoAlpha: 0, duration: 0.25 }, position)
    .set(SELECTORS.formulas, { display: 'none' })
    .set(selector, { display: 'flex' })
    .to(selector, { autoAlpha: 1, duration: 0.45 }, '<0.18')
}

function revealRows(timeline, selector, position, stagger = 0.75) {
  timeline.fromTo(
    `${selector} .formula-row`,
    { autoAlpha: 0, x: -18 },
    {
      autoAlpha: 1,
      x: 0,
      duration: 0.45,
      stagger,
      ease: 'power2.out',
    },
    position,
  )
}

function changeLayer(timeline, outgoing, incoming, position) {
  if (outgoing) {
    timeline.to(outgoing, { autoAlpha: 0, duration: 0.5 }, position)
  }

  timeline.to(incoming, { autoAlpha: 1, duration: 0.7 }, `${position}+=0.28`)
}

function addChapter(timeline, id) {
  timeline.addLabel(id)
}

function buildTimeline() {
  prepareStroke('#guide-path')
  prepareStroke('#radius-line')
  prepareStroke('#skid-marks path:first-child')
  prepareStroke('#skid-marks path:last-child')

  gsap.set(SELECTORS.layers, { autoAlpha: 0 })
  gsap.set(SELECTORS.formulas, { autoAlpha: 0, display: 'none' })
  gsap.set(SELECTORS.formulaRows, { autoAlpha: 0 })
  gsap.set('#top-view', { autoAlpha: 1 })
  gsap.set('#main-car', {
    motionPath: {
      path: '#car-motion-path',
      align: '#car-motion-path',
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0,
      end: 0,
    },
  })
  gsap.set(
    [
      '#radius-line',
      '#radius-label',
      '#velocity-vector',
      '#acceleration-vector',
      '.force-vector',
      '#limit-badge',
      '#skid-marks',
      '#result-banner',
    ],
    { autoAlpha: 0 },
  )
  gsap.set('.math-tags > g', { autoAlpha: 0, scale: 0.6, transformOrigin: 'center' })
  gsap.set('#safe-car, #unsafe-car', { autoAlpha: 0 })

  const timeline = gsap.timeline({
    paused: true,
    defaults: { ease: 'power2.inOut' },
    onUpdate: syncPlayer,
    onComplete: syncPlayer,
  })

  addChapter(timeline, 'curve')
  showFormula(timeline, '#formula-radius', 'curve')
  timeline
    .to('#guide-path', { strokeDashoffset: 0, duration: 1.5 }, 'curve+=0.2')
    .to(
      '#main-car',
      {
        duration: 4,
        ease: 'none',
        motionPath: {
          path: '#car-motion-path',
          align: '#car-motion-path',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 1,
        },
      },
      'curve+=0.5',
    )
    .to('#radius-line', { autoAlpha: 1, strokeDashoffset: 0, duration: 1 }, 'curve+=2.8')
    .fromTo(
      '#radius-label',
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      'curve+=3.4',
    )
    .to({}, { duration: 0.8 })

  addChapter(timeline, 'acceleration')
  showFormula(timeline, '#formula-acceleration', 'acceleration+=0.25')
  timeline
    .to(
      '#radius-line, #radius-label',
      { autoAlpha: 0, duration: 0.35 },
      'acceleration+=0.1',
    )
    .fromTo(
      '#velocity-vector',
      { autoAlpha: 0, scaleX: 0, transformOrigin: '342px 119px' },
      { autoAlpha: 1, scaleX: 1, duration: 0.8 },
      'acceleration+=0.4',
    )
    .fromTo(
      '#acceleration-vector',
      { autoAlpha: 0, scaleY: 0, transformOrigin: '310px 145px' },
      { autoAlpha: 1, scaleY: 1, duration: 0.8 },
      'acceleration+=1.25',
    )
    .to('#acceleration-vector line', {
      strokeWidth: 7,
      repeat: 3,
      yoyo: true,
      duration: 0.45,
    })
    .to({}, { duration: 0.8 })

  addChapter(timeline, 'forces')
  changeLayer(timeline, '#top-view', '#free-body-view', 'forces')
  timeline
    .fromTo(
      '#free-body-view use',
      { y: 22, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7 },
      'forces+=0.55',
    )
    .fromTo(
      '#weight-force',
      { autoAlpha: 0, scaleY: 0, transformOrigin: '400px 315px' },
      { autoAlpha: 1, scaleY: 1, duration: 0.65 },
      'forces+=1.3',
    )
    .fromTo(
      '#normal-force',
      { autoAlpha: 0, scaleY: 0, transformOrigin: '400px 315px' },
      { autoAlpha: 1, scaleY: 1, duration: 0.65 },
      'forces+=2',
    )
    .fromTo(
      '#friction-force',
      { autoAlpha: 0, scaleX: 0, transformOrigin: '325px 315px' },
      { autoAlpha: 1, scaleX: 1, duration: 0.75 },
      'forces+=2.7',
    )
    .to({}, { duration: 0.9 })

  addChapter(timeline, 'radial')
  showFormula(timeline, '#formula-radial', 'radial')
  revealRows(timeline, '#formula-radial', 'radial+=0.35', 0.85)
  timeline
    .to(
      '#friction-force line',
      { strokeWidth: 7, repeat: 3, yoyo: true, duration: 0.45 },
      'radial+=0.5',
    )
    .to({}, { duration: 0.8 })

  addChapter(timeline, 'limit')
  changeLayer(timeline, '#free-body-view', '#grip-view', 'limit')
  showFormula(timeline, '#formula-limit', 'limit+=0.25')
  revealRows(timeline, '#formula-limit', 'limit+=2.2', 0.9)
  timeline
    .to('#grip-fill', { width: 420, duration: 2.1, ease: 'power2.in' }, 'limit+=0.55')
    .to(
      '#grip-force-arrow',
      { attr: { x2: 365 }, duration: 2.1, ease: 'power2.in' },
      'limit+=0.55',
    )
    .fromTo(
      '#limit-badge',
      { autoAlpha: 0, y: -10 },
      { autoAlpha: 1, y: 0, duration: 0.55 },
      'limit+=2.55',
    )
    .to('#limit-badge circle', { opacity: 0.25, repeat: 3, yoyo: true, duration: 0.35 })
    .to({}, { duration: 0.7 })

  addChapter(timeline, 'vertical')
  changeLayer(timeline, '#grip-view', '#free-body-view', 'vertical')
  showFormula(timeline, '#formula-vertical', 'vertical+=0.2')
  revealRows(timeline, '#formula-vertical', 'vertical+=0.65', 0.75)
  timeline
    .set('#friction-force', { autoAlpha: 0 }, 'vertical+=0.35')
    .to(
      '#normal-force line, #weight-force line',
      { strokeWidth: 9, repeat: 3, yoyo: true, duration: 0.4 },
      'vertical+=0.75',
    )
    .to({}, { duration: 0.7 })

  addChapter(timeline, 'symbolic')
  changeLayer(timeline, '#free-body-view', '#math-view', 'symbolic')
  showFormula(timeline, '#formula-symbolic', 'symbolic+=0.2')
  revealRows(timeline, '#formula-symbolic', 'symbolic+=0.6', 0.65)
  timeline
    .to(
      '.math-orbit--one',
      { rotation: 180, transformOrigin: '400px 300px', duration: 5.5, ease: 'none' },
      'symbolic',
    )
    .to(
      '.math-orbit--two',
      { rotation: -220, transformOrigin: '400px 300px', duration: 5.5, ease: 'none' },
      'symbolic',
    )
    .to(
      '.math-tags > g',
      { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.6 },
      'symbolic+=1.2',
    )
    .to('.math-core', { scale: 1.12, transformOrigin: 'center', yoyo: true, repeat: 1, duration: 0.5 })
    .to({}, { duration: 0.55 })

  addChapter(timeline, 'numbers')
  showFormula(timeline, '#formula-numbers', 'numbers')
  revealRows(timeline, '#formula-numbers', 'numbers+=0.4', 0.75)
  timeline
    .to('.data-card', { borderColor: 'rgba(255, 204, 88, .45)', stagger: 0.16, duration: 0.4 }, 'numbers+=0.5')
    .to('.math-tags > g', { scale: 1.14, repeat: 1, yoyo: true, stagger: 0.35, duration: 0.35 }, 'numbers+=1')
    .to({}, { duration: 0.7 })

  addChapter(timeline, 'result')
  changeLayer(timeline, '#math-view', '#comparison-view', 'result')
  showFormula(timeline, '#formula-result', 'result+=0.3')
  timeline
    .to('#safe-car, #unsafe-car', { autoAlpha: 1, duration: 0.35 }, 'result+=0.65')
    .to(
      '#safe-car',
      {
        duration: 3.2,
        ease: 'power1.inOut',
        motionPath: {
          path: '#safe-path',
          align: '#safe-path',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 1,
        },
      },
      'result+=0.85',
    )
    .to(
      '#unsafe-car',
      {
        duration: 2.25,
        ease: 'power1.in',
        motionPath: {
          path: '#unsafe-path',
          align: '#unsafe-path',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 0.62,
        },
      },
      'result+=0.85',
    )
    .to(
      '#unsafe-car',
      {
        duration: 1.25,
        ease: 'power2.out',
        motionPath: {
          path: '#skid-path',
          align: '#skid-path',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 1,
        },
      },
      'result+=3.1',
    )
    .to(
      '#skid-marks path',
      { strokeDashoffset: 0, duration: 1.1, stagger: 0.08 },
      'result+=3.05',
    )
    .fromTo(
      '#result-banner',
      { autoAlpha: 0, scale: 0.86, transformOrigin: 'center' },
      { autoAlpha: 1, scale: 1, duration: 0.65, ease: 'back.out(1.5)' },
      'result+=4.45',
    )
    .to({}, { duration: 1.3 })

  return timeline
}

function getActiveChapterIndex(time = tl.time()) {
  let index = 0

  chapters.forEach((chapter, chapterIndex) => {
    if (time >= tl.labels[chapter.id]) {
      index = chapterIndex
    }
  })

  return index
}

function updateChapter(index) {
  if (index === activeChapterIndex) return

  activeChapterIndex = index
  const chapter = chapters[index]
  document.querySelector('.formula-deck').scrollTo({ top: 0, behavior: 'smooth' })

  document.querySelector('#chapter-kicker').textContent = chapter.kicker
  document.querySelector('#chapter-title').textContent = chapter.title
  document.querySelector('#chapter-message').textContent = chapter.message
  document.querySelector('#chapter-count').textContent = `${index + 1} / ${chapters.length}`

  document.querySelectorAll('.chapter-button').forEach((button, buttonIndex) => {
    button.classList.toggle('is-active', buttonIndex === index)
    button.classList.toggle('is-past', buttonIndex < index)
    button.setAttribute('aria-current', buttonIndex === index ? 'step' : 'false')
  })
}

function formatTime(seconds) {
  const roundedSeconds = Math.max(0, Math.round(seconds))
  const minutes = Math.floor(roundedSeconds / 60)
  const remainder = String(roundedSeconds % 60).padStart(2, '0')

  return `${minutes}:${remainder}`
}

function syncPlayer() {
  if (!tl) return

  const progress = tl.progress()
  const slider = document.querySelector('#progress-slider')

  if (!isScrubbing) {
    slider.value = Math.round(progress * 1000)
  }

  slider.style.background = `linear-gradient(to right, #ffcc58 ${progress * 100}%, rgba(255,255,255,.12) ${progress * 100}%)`
  document.querySelector('#current-time').textContent = formatTime(tl.time())
  document.querySelector('#total-time').textContent = formatTime(tl.duration())
  updateChapter(getActiveChapterIndex())
}

function connectControls() {
  const playButton = document.querySelector('#play-button')
  const pauseButton = document.querySelector('#pause-button')
  const restartButton = document.querySelector('#restart-button')
  const slider = document.querySelector('#progress-slider')

  playButton.addEventListener('click', () => {
    if (tl.progress() === 1) {
      tl.restart()
      return
    }

    tl.play()
  })

  pauseButton.addEventListener('click', () => tl.pause())
  restartButton.addEventListener('click', () => tl.restart())

  slider.addEventListener('pointerdown', () => {
    isScrubbing = true
    tl.pause()
  })
  slider.addEventListener('input', (event) => {
    tl.progress(Number(event.target.value) / 1000)
    syncPlayer()
  })
  slider.addEventListener('change', () => {
    isScrubbing = false
    syncPlayer()
  })
}

export function initCarMaxSpeedScene() {
  renderContent()
  buildChapterNavigation()
  tl = buildTimeline()
  connectControls()
  updateChapter(0)
  syncPlayer()

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduceMotion) {
    tl.play()
  }

  return tl
}

initCarMaxSpeedScene()
