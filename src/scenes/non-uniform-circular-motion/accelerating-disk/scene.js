import './scene.css'
import { buildStandardTimeline, createLessonPlayer, renderLessonContent } from '../shared/lesson.js'
import { mountLesson } from '../shared/mount.js'
import { chapters, dataCards, formulas } from './content.js'

export function initAcceleratingDiskScene() {
  mountLesson({ kind: 'disk', pageTitle: 'Disco que acelera', diagramTitle: 'Disco acelerando', diagramDescription: 'Disco con un punto rojo y vectores tangencial, centrípeto y total.', formulas, chapters, summaryRows: ['ωf = 12.0 rad/s', 'v = 6.0 m/s', 'aₜ = 2.0 m/s²', 'a꜀ = 72.0 m/s²', 'a = 72.03 m/s²'] })
  renderLessonContent({ formulas, dataCards })
  const tl = buildStandardTimeline({
    chapters,
    sequence: [
      { id: 'alpha', formula: '#formula-alpha', showRotation: true, ease: 'power2.in' },
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

initAcceleratingDiskScene()
