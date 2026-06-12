import gsap from 'gsap'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import './scene.css'
import { chapters, dataCards, formulas } from './content.js'

let tl
let activeChapterIndex = -1
let isScrubbing = false

function renderMath(element, expression, displayMode = true) {
  katex.render(expression, element, { throwOnError: false, displayMode, strict: false })
}

function renderStack(selector, expressions, finalIndex = -1) {
  const container = document.querySelector(selector)
  expressions.forEach((expression, index) => {
    const row = document.createElement('div')
    row.className = 'formula-row'
    if (index === finalIndex) row.classList.add('formula-row--final')
    renderMath(row, expression)
    container.append(row)
  })
}

function renderContent() {
  renderMath(document.querySelector('#formula-radius'), formulas.radius)
  renderMath(document.querySelector('#formula-angle'), formulas.angle)
  renderStack('#formula-forces', formulas.forces)
  renderStack('#formula-components', formulas.components)
  renderStack('#formula-vertical', formulas.vertical, 2)
  renderStack('#formula-radial', formulas.radial, 1)
  renderStack('#formula-derive', formulas.derive, 3)
  renderStack('#formula-numbers', formulas.numbers, 4)
  renderMath(document.querySelector('#formula-result'), formulas.result)

  const container = document.querySelector('#data-cards')
  dataCards.forEach(({ label, value }) => {
    const card = document.createElement('div')
    const labelElement = document.createElement('span')
    const valueElement = document.createElement('div')
    card.className = 'data-card'
    labelElement.className = 'data-card__label'
    labelElement.textContent = label
    renderMath(valueElement, value, false)
    card.append(labelElement, valueElement)
    container.append(card)
  })
}

function buildChapterNavigation() {
  const navigation = document.querySelector('#chapter-nav')
  chapters.forEach((chapter, index) => {
    const button = document.createElement('button')
    const label = document.createElement('span')
    button.className = 'chapter-button'
    button.type = 'button'
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

function showFormula(timeline, selector, position) {
  timeline
    .to('.formula-card', { autoAlpha: 0, duration: 0.25 }, position)
    .set('.formula-card', { display: 'none' })
    .set(selector, { display: 'flex' })
    .to(selector, { autoAlpha: 1, duration: 0.45 }, '<0.15')
}

function revealRows(timeline, selector, position, stagger = 0.7) {
  timeline.fromTo(`${selector} .formula-row`, { autoAlpha: 0, x: -18 }, { autoAlpha: 1, x: 0, duration: 0.45, stagger, ease: 'power2.out' }, position)
}

function changeLayer(timeline, outgoing, incoming, position) {
  timeline.to(outgoing, { autoAlpha: 0, duration: 0.45 }, position).to(incoming, { autoAlpha: 1, duration: 0.65 }, `${position}+=0.25`)
}

function buildTimeline() {
  gsap.set('.scene-layer, .formula-card, .formula-row', { autoAlpha: 0 })
  gsap.set('.formula-card', { display: 'none' })
  gsap.set('#bank-view', { autoAlpha: 1 })
  gsap.set('#angle-diagram, #center-direction, #center-label, .force-vector, .component-vector, #component-guide, #result-badge', { autoAlpha: 0 })
  gsap.set('.math-tags > g', { autoAlpha: 0, scale: 0.65, transformOrigin: 'center' })

  const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' }, onUpdate: syncPlayer, onComplete: syncPlayer })

  timeline.addLabel('problem')
  showFormula(timeline, '#formula-radius', 'problem')
  timeline
    .fromTo('#bank-plane, #bank-edge', { autoAlpha: 0, x: 80 }, { autoAlpha: 1, x: 0, duration: 1 }, 'problem+=0.2')
    .fromTo(
      '#bank-car',
      { autoAlpha: 0, attr: { transform: 'translate(454 285.5)' } },
      { autoAlpha: 1, attr: { transform: 'translate(394 301.6)' }, duration: 1.3 },
      'problem+=0.8',
    )
    .to('#center-direction, #center-label', { autoAlpha: 1, duration: 0.6 }, 'problem+=2')
    .to('#bank-car', { attr: { transform: 'translate(344 315)' }, duration: 2.3, ease: 'power1.inOut' }, 'problem+=2.4')
    .to({}, { duration: 0.5 })

  timeline.addLabel('angle')
  showFormula(timeline, '#formula-angle', 'angle')
  timeline
    .to('#center-direction, #center-label', { autoAlpha: 0, duration: 0.3 }, 'angle')
    .to('#angle-diagram', { autoAlpha: 1, duration: 0.35 }, 'angle+=0.25')
    .fromTo('#angle-arc', { strokeDasharray: 50, strokeDashoffset: 50 }, { strokeDashoffset: 0, duration: 0.9 }, 'angle+=0.35')
    .fromTo('#angle-label', { autoAlpha: 0, scale: 0.8, svgOrigin: '268 426' }, { autoAlpha: 1, scale: 1, duration: 0.55, ease: 'back.out(1.5)' }, 'angle+=0.85')
    .to('#bank-plane', { fill: '#425866', yoyo: true, repeat: 3, duration: 0.45 }, 'angle+=1.5')
    .to({}, { duration: 0.7 })

  timeline.addLabel('forces')
  changeLayer(timeline, '#bank-view', '#force-view', 'forces')
  showFormula(timeline, '#formula-forces', 'forces+=0.15')
  revealRows(timeline, '#formula-forces', 'forces+=0.7', 0.8)
  timeline
    .fromTo('#weight-vector', { autoAlpha: 0, scaleY: 0, svgOrigin: '455 355' }, { autoAlpha: 1, scaleY: 1, duration: 0.75 }, 'forces+=0.7')
    .fromTo('#normal-vector', { autoAlpha: 0, scaleY: 0, svgOrigin: '455 355' }, { autoAlpha: 1, scaleY: 1, duration: 0.75 }, 'forces+=1.6')
    .to({}, { duration: 0.8 })

  timeline.addLabel('components')
  showFormula(timeline, '#formula-components', 'components')
  revealRows(timeline, '#formula-components', 'components+=0.4', 0.8)
  timeline
    .to('#normal-vector', { autoAlpha: 0.35, duration: 0.3 }, 'components')
    .to('#component-guide', { autoAlpha: 1, duration: 0.5 }, 'components+=0.35')
    .fromTo('#normal-x', { autoAlpha: 0, scaleX: 0, svgOrigin: '455 355' }, { autoAlpha: 1, scaleX: 1, duration: 0.7 }, 'components+=0.65')
    .fromTo('#normal-y', { autoAlpha: 0, scaleY: 0, svgOrigin: '455 355' }, { autoAlpha: 1, scaleY: 1, duration: 0.7 }, 'components+=1.35')
    .to({}, { duration: 0.8 })

  timeline.addLabel('vertical')
  showFormula(timeline, '#formula-vertical', 'vertical')
  revealRows(timeline, '#formula-vertical', 'vertical+=0.35', 0.7)
  timeline
    .to('#normal-x, #normal-vector', { autoAlpha: 0.15, duration: 0.3 }, 'vertical')
    .to('#normal-y line, #weight-vector line', { strokeWidth: 11, yoyo: true, repeat: 3, duration: 0.4 }, 'vertical+=0.8')
    .to({}, { duration: 0.6 })

  timeline.addLabel('radial')
  showFormula(timeline, '#formula-radial', 'radial')
  revealRows(timeline, '#formula-radial', 'radial+=0.35', 0.85)
  timeline
    .to('#normal-y, #weight-vector', { autoAlpha: 0.15, duration: 0.3 }, 'radial')
    .to('#normal-x', { autoAlpha: 1, duration: 0.3 }, 'radial')
    .to('#normal-x line', { strokeWidth: 12, yoyo: true, repeat: 4, duration: 0.35 }, 'radial+=0.8')
    .to({}, { duration: 0.6 })

  timeline.addLabel('derive')
  changeLayer(timeline, '#force-view', '#math-view', 'derive')
  showFormula(timeline, '#formula-derive', 'derive+=0.15')
  revealRows(timeline, '#formula-derive', 'derive+=0.55', 0.65)
  timeline
    .to('.math-orbit--one', { rotation: 180, svgOrigin: '400 300', duration: 4.8, ease: 'none' }, 'derive')
    .to('.math-orbit--two', { rotation: -220, svgOrigin: '400 300', duration: 4.8, ease: 'none' }, 'derive')
    .to('.math-tags > g', { autoAlpha: 1, scale: 1, stagger: 0.5, duration: 0.45 }, 'derive+=1')
    .to({}, { duration: 0.6 })

  timeline.addLabel('numbers')
  showFormula(timeline, '#formula-numbers', 'numbers')
  revealRows(timeline, '#formula-numbers', 'numbers+=0.35', 0.65)
  timeline
    .to('.data-card', { borderColor: 'rgba(255,204,88,.55)', stagger: 0.15, duration: 0.38 }, 'numbers+=0.5')
    .to('.math-tags > g', { scale: 1.17, yoyo: true, repeat: 1, stagger: 0.3, duration: 0.35 }, 'numbers+=1.2')
    .to({}, { duration: 0.7 })

  timeline.addLabel('result')
  changeLayer(timeline, '#math-view', '#result-view', 'result')
  showFormula(timeline, '#formula-result', 'result+=0.2')
  timeline
    .fromTo('#result-car', { autoAlpha: 0, scale: 0.82, svgOrigin: '454 365' }, { autoAlpha: 1, scale: 1, duration: 1.2, ease: 'back.out(1.35)' }, 'result+=0.4')
    .fromTo('.result-radial', { scaleX: 0, svgOrigin: '425 390' }, { scaleX: 1, duration: 0.8 }, 'result+=0.9')
    .fromTo('#result-badge', { autoAlpha: 0, scale: 0.8, y: -10 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.65, ease: 'back.out(1.5)' }, 'result+=1.5')
    .to({}, { duration: 1.6 })
  return timeline
}

function getActiveChapterIndex(time = tl.time()) {
  let index = 0
  chapters.forEach((chapter, chapterIndex) => { if (time >= tl.labels[chapter.id]) index = chapterIndex })
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
  const rounded = Math.max(0, Math.round(seconds))
  return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, '0')}`
}

function syncPlayer() {
  if (!tl) return
  const progress = tl.progress()
  const slider = document.querySelector('#progress-slider')
  if (!isScrubbing) slider.value = Math.round(progress * 1000)
  slider.style.background = `linear-gradient(to right, #ffcc58 ${progress * 100}%, rgba(255,255,255,.12) ${progress * 100}%)`
  document.querySelector('#current-time').textContent = formatTime(tl.time())
  document.querySelector('#total-time').textContent = formatTime(tl.duration())
  updateChapter(getActiveChapterIndex())
}

function connectControls() {
  const slider = document.querySelector('#progress-slider')
  document.querySelector('#play-button').addEventListener('click', () => (tl.progress() === 1 ? tl.restart() : tl.play()))
  document.querySelector('#pause-button').addEventListener('click', () => tl.pause())
  document.querySelector('#restart-button').addEventListener('click', () => tl.restart())
  slider.addEventListener('pointerdown', () => { isScrubbing = true; tl.pause() })
  slider.addEventListener('input', (event) => { tl.progress(Number(event.target.value) / 1000); syncPlayer() })
  slider.addEventListener('change', () => { isScrubbing = false; syncPlayer() })
}

export function initBankedCurveCarScene() {
  renderContent()
  buildChapterNavigation()
  tl = buildTimeline()
  connectControls()
  updateChapter(0)
  syncPlayer()
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) tl.play()
  return tl
}

initBankedCurveCarScene()
