export const chapters = [
  { id: 'problem', kicker: '01 · Presentación', title: 'Un disco comienza a acelerar', message: 'El disco parte del reposo. Seguiremos un punto rojo en su borde mientras aumenta su rapidez angular.' },
  { id: 'alpha', kicker: '02 · Aceleración angular', title: 'La rapidez angular aumenta', message: 'Una aceleración angular constante hace que el disco complete cada giro en menos tiempo.' },
  { id: 'angular', kicker: '03 · Velocidad angular', title: 'Calculamos la velocidad angular final', message: 'Después de tres segundos, la velocidad angular alcanza doce radianes por segundo.' },
  { id: 'velocity', kicker: '04 · Velocidad tangencial', title: 'El punto se mueve tangente al círculo', message: 'La velocidad lineal del punto es siempre tangente a la trayectoria circular.' },
  { id: 'tangential', kicker: '05 · Aceleración tangencial', title: 'Una componente aumenta la rapidez', message: 'La aceleración tangencial apunta en la dirección del movimiento y cambia la magnitud de la velocidad.' },
  { id: 'centripetal', kicker: '06 · Aceleración centrípeta', title: 'Otra componente apunta al centro', message: 'La aceleración centrípeta cambia continuamente la dirección de la velocidad.' },
  { id: 'total', kicker: '07 · Aceleración total', title: 'Las dos componentes actúan juntas', message: 'La aceleración total es la suma vectorial perpendicular de las componentes tangencial y centrípeta.' },
  { id: 'summary', kicker: '08 · Resumen', title: 'El disco combina dos aceleraciones', message: 'En movimiento circular no uniforme existen simultáneamente aceleración tangencial y centrípeta.' },
]

export const formulas = {
  radius: String.raw`r=0.50\,\mathrm{m}`,
  alpha: String.raw`\alpha=4.0\,\mathrm{rad/s^2}`,
  angular: [String.raw`\omega_f=\omega_i+\alpha t`, String.raw`\omega_f=0+(4.0)(3.0)`, String.raw`\omega_f=12.0\,\mathrm{rad/s}`],
  velocity: [String.raw`v=r\omega`, String.raw`v=(0.50)(12.0)`, String.raw`v=6.0\,\mathrm{m/s}`],
  tangential: [String.raw`a_t=r\alpha`, String.raw`a_t=(0.50)(4.0)`, String.raw`a_t=2.0\,\mathrm{m/s^2}`],
  centripetal: [String.raw`a_c=\frac{v^2}{r}`, String.raw`a_c=\frac{6.0^2}{0.50}`, String.raw`a_c=72.0\,\mathrm{m/s^2}`],
  total: [String.raw`a=\sqrt{a_t^2+a_c^2}`, String.raw`a=\sqrt{2.0^2+72.0^2}`, String.raw`a=72.03\,\mathrm{m/s^2}`],
}

export const dataCards = [
  { label: 'Radio', value: String.raw`r=0.50\,\mathrm{m}` },
  { label: 'Parte de', value: String.raw`\omega_i=0` },
  { label: 'Aceleración angular', value: String.raw`\alpha=4.0\,\mathrm{rad/s^2}` },
  { label: 'Tiempo', value: String.raw`t=3.0\,\mathrm{s}` },
]
