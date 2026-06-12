import './scene.css'
import { buildStandardTimeline, createLessonPlayer, renderLessonContent } from '../shared/lesson.js'
import { mountLesson } from '../shared/mount.js'
import { chapters, dataCards, formulas } from './content.js'

export function initAcceleratingFanScene() {
  mountLesson({ kind: 'fan', pageTitle: 'Ventilador que acelera', diagramTitle: 'Ventilador acelerando', diagramDescription: 'Ventilador de tres aspas con una punta roja y vectores de aceleración.', formulas, chapters, summaryRows: ['α = 3.0 rad/s²', 'v = 5.1 m/s', 'aₜ = 0.90 m/s²', 'a꜀ = 86.7 m/s²'] })
  renderLessonContent({ formulas, dataCards })
  const tl = buildStandardTimeline({
    chapters,
    sequence: [
      { id: 'initial', formula: '#formula-initial', showRotation: true, ease: 'none' },
      { id: 'final', formula: '#formula-final', showRotation: true, ease: 'power2.in' },
      { id: 'angular', formula: '#formula-angular', showRotation: true, ease: 'power2.in' },
      { id: 'velocity', formula: '#formula-velocity', vector: '#velocity-vector' },
      { id: 'tangential', formula: '#formula-tangential', vector: '#tangential-vector' },
      { id: 'centripetal', formula: '#formula-centripetal', vector: '#centripetal-vector' },
    ],
  })
  createLessonPlayer({ chapters, timeline: tl })
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) tl.play()
  return tl
}

initAcceleratingFanScene()
