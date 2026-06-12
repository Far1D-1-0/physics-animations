export const chapters = [
  { id: 'problem', kicker: '01 · Presentación', title: 'Seguimos un punto sobre la rueda', message: 'Un único punto rojo permite observar cómo cambian simultáneamente su rapidez y la dirección de su movimiento.' },
  { id: 'initial', kicker: '02 · Movimiento inicial', title: 'La rueda ya está girando', message: 'El punto inicia con una velocidad angular de dos radianes por segundo.' },
  { id: 'angular', kicker: '03 · Aceleración angular', title: 'La velocidad angular aumenta', message: 'La aceleración angular actúa durante dos segundos y eleva la velocidad angular final.' },
  { id: 'velocity', kicker: '04 · Velocidad tangencial', title: 'La velocidad es tangente a la rueda', message: 'En cada posición, la velocidad del punto es perpendicular al radio.' },
  { id: 'tangential', kicker: '05 · Aceleración tangencial', title: 'La rapidez del punto aumenta', message: 'La aceleración tangencial tiene la misma dirección instantánea que el movimiento.' },
  { id: 'centripetal', kicker: '06 · Aceleración centrípeta', title: 'La trayectoria curva hacia el centro', message: 'La aceleración centrípeta apunta desde el punto hacia el centro de la rueda.' },
  { id: 'total', kicker: '07 · Aceleración total', title: 'Combinamos ambas componentes', message: 'La aceleración total resulta de sumar vectorialmente las componentes tangencial y centrípeta.' },
  { id: 'summary', kicker: '08 · Resumen', title: 'Un punto, dos aceleraciones', message: 'El punto acelera porque cambia tanto la magnitud como la dirección de su velocidad.' },
]

export const formulas = {
  radius: String.raw`r=0.40\,\mathrm{m}`,
  initial: String.raw`\omega_i=2.0\,\mathrm{rad/s}`,
  angular: [String.raw`\omega_f=\omega_i+\alpha t`, String.raw`\omega_f=2.0+(3.0)(2.0)`, String.raw`\omega_f=8.0\,\mathrm{rad/s}`],
  velocity: [String.raw`v=r\omega`, String.raw`v=(0.40)(8.0)`, String.raw`v=3.2\,\mathrm{m/s}`],
  tangential: [String.raw`a_t=r\alpha`, String.raw`a_t=(0.40)(3.0)`, String.raw`a_t=1.2\,\mathrm{m/s^2}`],
  centripetal: [String.raw`a_c=\frac{v^2}{r}`, String.raw`a_c=\frac{3.2^2}{0.40}`, String.raw`a_c=25.6\,\mathrm{m/s^2}`],
  total: [String.raw`a=\sqrt{a_t^2+a_c^2}`, String.raw`a=\sqrt{1.2^2+25.6^2}`, String.raw`a=25.63\,\mathrm{m/s^2}`],
}

export const dataCards = [
  { label: 'Radio', value: String.raw`r=0.40\,\mathrm{m}` },
  { label: 'Velocidad inicial', value: String.raw`\omega_i=2.0\,\mathrm{rad/s}` },
  { label: 'Aceleración angular', value: String.raw`\alpha=3.0\,\mathrm{rad/s^2}` },
  { label: 'Tiempo', value: String.raw`t=2.0\,\mathrm{s}` },
]
