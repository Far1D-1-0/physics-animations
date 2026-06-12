import gsap from 'gsap'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import './scene.css'
import { chapters, dataCards, formulas } from './content.js'

let tl
let activeChapterIndex = -1
let isScrubbing = false

function renderMath(element, expression, displayMode = true) {
  katex.render(expression, element, {
    throwOnError: false,
    displayMode,
    strict: false,
  })
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
  renderMath(document.querySelector('#formula-velocity'), formulas.velocity)
  renderStack('#formula-acceleration', formulas.acceleration, 1)
  renderStack('#formula-tension', formulas.tension, 1)
  renderStack('#formula-newton', formulas.newton, 1)
  renderStack('#formula-derive', formulas.derive, 2)
  renderStack('#formula-numbers', formulas.numbers, 3)
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
    .to(selector, { autoAlpha: 1, duration: 0.45 }, '<0.15')
}

function revealRows(timeline, selector, position, stagger = 0.75) {
  timeline.fromTo(
    `${selector} .formula-row`,
    { autoAlpha: 0, x: -18 },
    { autoAlpha: 1, x: 0, duration: 0.45, stagger, ease: 'power2.out' },
    position,
  )
}

function changeLayer(timeline, outgoing, incoming, position) {
  timeline
    .to(outgoing, { autoAlpha: 0, duration: 0.45 }, position)
    .to(incoming, { autoAlpha: 1, duration: 0.65 }, `${position}+=0.25`)
}

function buildTimeline() {
  gsap.set('.scene-layer, .formula-card, .formula-row', { autoAlpha: 0 })
  gsap.set('#motion-view', { autoAlpha: 1 })
  gsap.set('#velocity-vector, #acceleration-vector, #tension-vector, #radius-guide, #radius-label', {
    autoAlpha: 0,
  })
  gsap.set('.equation-tags > g', { autoAlpha: 0, scale: 0.65, transformOrigin: 'center' })
  gsap.set('#result-badge', { autoAlpha: 0, scale: 0.8, transformOrigin: 'center' })

  const timeline = gsap.timeline({
    paused: true,
    defaults: { ease: 'power2.inOut' },
    onUpdate: syncPlayer,
    onComplete: syncPlayer,
  })

  timeline.addLabel('problem')
  showFormula(timeline, '#formula-radius', 'problem')
  timeline
    .fromTo('#orbit-guide', { strokeDashoffset: 700 }, { strokeDashoffset: 0, duration: 1.8 }, 'problem+=0.2')
    .fromTo('#string', { scaleX: 0, transformOrigin: '400px 320px' }, { scaleX: 1, duration: 0.8 }, 'problem+=0.8')
    .fromTo('#ball', { autoAlpha: 0, scale: 0.4, transformOrigin: '645px 320px' }, { autoAlpha: 1, scale: 1, duration: 0.6 }, 'problem+=1.45')
    .to('#radius-guide, #radius-label', { autoAlpha: 1, duration: 0.5 }, 'problem+=2.1')
    .to('#orbit-arm', { rotation: -110, svgOrigin: '400 320', duration: 2.3, ease: 'none' }, 'problem+=2.5')
    .to({}, { duration: 0.6 })

  timeline.addLabel('motion')
  showFormula(timeline, '#formula-velocity', 'motion')
  timeline
    .to('#radius-guide, #radius-label', { autoAlpha: 0, duration: 0.3 }, 'motion')
    .fromTo('#velocity-vector', { autoAlpha: 0, scaleY: 0, transformOrigin: '665px 292px' }, { autoAlpha: 1, scaleY: 1, duration: 0.7 }, 'motion+=0.35')
    .to('#orbit-arm', { rotation: 250, svgOrigin: '400 320', duration: 4, ease: 'none' }, 'motion+=0.25')
    .fromTo('#motion-streak', { strokeDasharray: 250, strokeDashoffset: 250 }, { strokeDashoffset: 0, duration: 1.2 }, 'motion+=1')
    .to({}, { duration: 0.5 })

  timeline.addLabel('acceleration')
  showFormula(timeline, '#formula-acceleration', 'acceleration')
  revealRows(timeline, '#formula-acceleration', 'acceleration+=0.35', 0.85)
  timeline
    .fromTo('#acceleration-vector', { autoAlpha: 0, scaleX: 0, transformOrigin: '610px 302px' }, { autoAlpha: 1, scaleX: 1, duration: 0.75 }, 'acceleration+=0.5')
    .to('#orbit-arm', { rotation: 610, svgOrigin: '400 320', duration: 4.2, ease: 'none' }, 'acceleration')
    .to('#acceleration-vector line', { strokeWidth: 10, yoyo: true, repeat: 3, duration: 0.35 }, 'acceleration+=1.7')
    .to({}, { duration: 0.5 })

  timeline.addLabel('tension')
  showFormula(timeline, '#formula-tension', 'tension')
  revealRows(timeline, '#formula-tension', 'tension+=0.35', 0.8)
  timeline
    .to('#velocity-vector', { autoAlpha: 0.25, duration: 0.3 }, 'tension')
    .fromTo('#tension-vector', { autoAlpha: 0, scaleX: 0, transformOrigin: '610px 336px' }, { autoAlpha: 1, scaleX: 1, duration: 0.75 }, 'tension+=0.5')
    .to('#string', { stroke: '#ffad42', strokeWidth: 7, yoyo: true, repeat: 3, duration: 0.38 }, 'tension+=1.25')
    .to('#orbit-arm', { rotation: 970, svgOrigin: '400 320', duration: 4.2, ease: 'none' }, 'tension')
    .to({}, { duration: 0.45 })

  timeline.addLabel('newton')
  showFormula(timeline, '#formula-newton', 'newton')
  revealRows(timeline, '#formula-newton', 'newton+=0.35', 0.9)
  timeline
    .to('#acceleration-vector, #tension-vector', { autoAlpha: 1, duration: 0.4 }, 'newton+=0.2')
    .to('#acceleration-vector line, #tension-vector line', { strokeWidth: 11, yoyo: true, repeat: 2, duration: 0.4 }, 'newton+=1.2')
    .to('#orbit-arm', { rotation: 1210, svgOrigin: '400 320', duration: 3.2, ease: 'none' }, 'newton')
    .to({}, { duration: 0.5 })

  timeline.addLabel('derive')
  changeLayer(timeline, '#motion-view', '#equation-view', 'derive')
  showFormula(timeline, '#formula-derive', 'derive+=0.2')
  revealRows(timeline, '#formula-derive', 'derive+=0.65', 0.8)
  timeline
    .to('.equation-orbit--outer', { rotation: 180, svgOrigin: '400 300', duration: 4.5, ease: 'none' }, 'derive')
    .to('.equation-orbit--inner', { rotation: -220, svgOrigin: '400 300', duration: 4.5, ease: 'none' }, 'derive')
    .to('.equation-tags > g', { autoAlpha: 1, scale: 1, stagger: 0.55, duration: 0.45 }, 'derive+=1')
    .to({}, { duration: 0.6 })

  timeline.addLabel('numbers')
  showFormula(timeline, '#formula-numbers', 'numbers')
  revealRows(timeline, '#formula-numbers', 'numbers+=0.35', 0.75)
  timeline
    .to('.data-card', { borderColor: 'rgba(255, 173, 66, .55)', stagger: 0.16, duration: 0.38 }, 'numbers+=0.45')
    .to('.equation-tags > g', { scale: 1.18, yoyo: true, repeat: 1, stagger: 0.3, duration: 0.35 }, 'numbers+=1.2')
    .to({}, { duration: 0.7 })

  timeline.addLabel('result')
  changeLayer(timeline, '#equation-view', '#result-view', 'result')
  showFormula(timeline, '#formula-result', 'result+=0.2')
  timeline
    .fromTo('.result-tension', { scaleX: 0, transformOrigin: '607px 330px' }, { scaleX: 1, duration: 0.8 }, 'result+=0.55')
    .fromTo('#result-badge', { autoAlpha: 0, scale: 0.8, y: -10 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.65, ease: 'back.out(1.5)' }, 'result+=1.25')
    .to('.result-tension', { strokeWidth: 12, yoyo: true, repeat: 3, duration: 0.4 }, 'result+=2')
    .to({}, { duration: 1.5 })

  return timeline
}

function getActiveChapterIndex(time = tl.time()) {
  let index = 0
  chapters.forEach((chapter, chapterIndex) => {
    if (time >= tl.labels[chapter.id]) index = chapterIndex
  })
  return index
}

function updateChapter(index) {
  if (index === activeChapterIndex) return
  activeChapterIndex = index
  const chapter = chapters[index]
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

export function initMetalBallTensionScene() {
  renderContent()
  buildChapterNavigation()
  tl = buildTimeline()
  connectControls()
  updateChapter(0)
  syncPlayer()
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) tl.play()
  return tl
}

initMetalBallTensionScene()
