import gsap from 'gsap'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export function renderMath(element, expression, displayMode = true) {
  katex.render(expression, element, { throwOnError: false, displayMode, strict: false })
}

export function renderLessonContent({ formulas, dataCards }) {
  Object.entries(formulas).forEach(([key, value]) => {
    const target = document.querySelector(`#formula-${key}`)
    if (!target) return
    if (Array.isArray(value)) {
      value.forEach((expression, index) => {
        const row = document.createElement('div')
        row.className = 'formula-row'
        if (index === value.length - 1) row.classList.add('formula-row--final')
        renderMath(row, expression)
        target.append(row)
      })
    } else {
      renderMath(target, value)
    }
  })

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

export function showFormula(timeline, selector, position) {
  timeline
    .to('.formula-card', { autoAlpha: 0, duration: 0.22 }, position)
    .set('.formula-card', { display: 'none' })
    .set(selector, { display: 'flex' })
    .to(selector, { autoAlpha: 1, duration: 0.4 }, '<0.12')
}

export function revealRows(timeline, selector, position, stagger = 0.55) {
  timeline.fromTo(`${selector} .formula-row`, { autoAlpha: 0, x: -16 }, { autoAlpha: 1, x: 0, duration: 0.4, stagger, ease: 'power2.out' }, position)
}

export function createLessonPlayer({ chapters, timeline }) {
  let activeChapterIndex = -1
  let isScrubbing = false
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
      timeline.pause()
      timeline.seek(chapter.id)
      sync()
    })
    navigation.append(button)
  })

  function chapterIndex(time = timeline.time()) {
    let index = 0
    chapters.forEach((chapter, chapterPosition) => {
      if (time >= timeline.labels[chapter.id]) index = chapterPosition
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
    const rounded = Math.max(0, Math.round(seconds))
    return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, '0')}`
  }

  function sync() {
    const progress = timeline.progress()
    const slider = document.querySelector('#progress-slider')
    if (!isScrubbing) slider.value = Math.round(progress * 1000)
    slider.style.background = `linear-gradient(to right, #ffcc58 ${progress * 100}%, rgba(255,255,255,.12) ${progress * 100}%)`
    document.querySelector('#current-time').textContent = formatTime(timeline.time())
    document.querySelector('#total-time').textContent = formatTime(timeline.duration())
    updateChapter(chapterIndex())
  }

  document.querySelector('#play-button').addEventListener('click', () => (timeline.progress() === 1 ? timeline.restart() : timeline.play()))
  document.querySelector('#pause-button').addEventListener('click', () => timeline.pause())
  document.querySelector('#restart-button').addEventListener('click', () => timeline.restart())
  const slider = document.querySelector('#progress-slider')
  slider.addEventListener('pointerdown', () => { isScrubbing = true; timeline.pause() })
  slider.addEventListener('input', (event) => { timeline.progress(Number(event.target.value) / 1000); sync() })
  slider.addEventListener('change', () => { isScrubbing = false; sync() })
  timeline.eventCallback('onUpdate', sync)
  timeline.eventCallback('onComplete', sync)
  updateChapter(0)
  sync()
  return { sync }
}

export function buildStandardTimeline({ chapters, sequence }) {
  gsap.set('.scene-layer, .formula-card, .formula-row', { autoAlpha: 0 })
  gsap.set('.formula-card', { display: 'none' })
  gsap.set('#motion-view', { autoAlpha: 1 })
  gsap.set('#radius-line, #radius-label, #rotation-arrow, #velocity-vector, #tangential-vector, #centripetal-vector, #total-vector, #result-panel', { autoAlpha: 0 })

  const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' } })
  const addFormulaChapter = ({ id, formula, vector, duration = 4.1, ease = 'power1.in' }) => {
    timeline.addLabel(id)
    showFormula(timeline, formula, id)
    if (document.querySelector(`${formula} .formula-row`)) revealRows(timeline, formula, `${id}+=0.35`)
    if (sequence.find((step) => step.id === id)?.showRotation) timeline.to('#rotation-arrow', { autoAlpha: 1, duration: 0.4 }, `${id}+=0.25`)
    if (vector) {
      timeline.fromTo(vector, { autoAlpha: 0, scale: 0, svgOrigin: '625 300' }, { autoAlpha: 1, scale: 1, duration: 0.7 }, `${id}+=0.55`)
    }
    if (id === 'total') timeline.to('#velocity-vector, #tangential-vector, #centripetal-vector', { autoAlpha: 1, duration: 0.35 }, `${id}+=0.25`)
    timeline.to('#rotor-group', { rotation: `+=${duration * 130}`, svgOrigin: '400 300', duration, ease }, id).to({}, { duration: 0.45 })
  }

  timeline.addLabel(chapters[0].id)
  showFormula(timeline, '#formula-radius', chapters[0].id)
  timeline
    .fromTo('#rotor-shell', { autoAlpha: 0, scale: 0.82, svgOrigin: '400 300' }, { autoAlpha: 1, scale: 1, duration: 0.8 }, `${chapters[0].id}+=0.2`)
    .to('#radius-line, #radius-label', { autoAlpha: 1, duration: 0.55 }, `${chapters[0].id}+=0.8`)
    .to('#rotor-group', { rotation: '+=120', svgOrigin: '400 300', duration: 2.8, ease: 'power1.in' }, `${chapters[0].id}+=1`)
    .to({}, { duration: 0.4 })

  sequence.forEach((step) => {
    addFormulaChapter(step)
  })

  const summaryId = chapters.at(-1).id
  timeline.addLabel(summaryId)
  timeline.to('.formula-card', { autoAlpha: 0, duration: 0.3 }, summaryId).set('.formula-card', { display: 'none' }).to('#motion-view', { autoAlpha: 0, duration: 0.45 }, summaryId).to('#summary-view', { autoAlpha: 1, duration: 0.65 }, `${summaryId}+=0.25`).fromTo('#result-panel', { autoAlpha: 0, scale: 0.86, svgOrigin: '400 300' }, { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)' }, `${summaryId}+=0.65`).to({}, { duration: 1.5 })
  return timeline
}
