import './scene.css'
import { buildStandardTimeline, createLessonPlayer, renderLessonContent } from '../shared/lesson.js'
import { mountLesson } from '../shared/mount.js'
import { chapters, dataCards, formulas } from './content.js'

export function initPointOnWheelScene() {
  mountLesson({ kind: 'wheel', pageTitle: 'Punto sobre una rueda que acelera', diagramTitle: 'Punto sobre una rueda', diagramDescription: 'Rueda con un punto rojo y vectores de movimiento circular no uniforme.', formulas, chapters, summaryRows: ['ωf = 8.0 rad/s', 'v = 3.2 m/s', 'aₜ = 1.2 m/s²', 'a꜀ = 25.6 m/s²', 'a = 25.63 m/s²'] })
  renderLessonContent({ formulas, dataCards })
  const tl = buildStandardTimeline({
    chapters,
    sequence: [
      { id: 'initial', formula: '#formula-initial', showRotation: true, ease: 'none' },
      { id: 'angular', formula: '#formula-angular', showRotation: true, ease: 'power2.in' },
      { id: 'velocity', formula: '#formula-velocity', vector: '#velocity-vector' },
      { id: 'tangential', formula: '#formula-tangential', vector: '#tangential-vector' },
      { id: 'centripetal', formula: '#formula-centripetal', vector: '#centripetal-vector' },
      { id: 'total', formula: '#formula-total', vector: '#total-vector' },
    ],
  })
  createLessonPlayer({ chapters, timeline: tl })
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) tl.play()
  return tl
}

initPointOnWheelScene()
