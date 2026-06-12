export const chapters = [
  { id: 'problem', kicker: '01 · Presentación', title: 'Un ventilador comienza a acelerar', message: 'Seguiremos la punta roja de una aspa mientras el ventilador incrementa su velocidad de giro.' },
  { id: 'initial', kicker: '02 · Velocidad inicial', title: 'El ventilador ya está girando', message: 'Antes de acelerar, el ventilador tiene una velocidad angular inicial de cinco radianes por segundo.' },
  { id: 'final', kicker: '03 · Velocidad final', title: 'El ventilador gira más rápido', message: 'Después de cuatro segundos, alcanza una velocidad angular de diecisiete radianes por segundo.' },
  { id: 'angular', kicker: '04 · Aceleración angular', title: 'Medimos el cambio de velocidad angular', message: 'La aceleración angular indica cuánto cambia la velocidad angular en cada segundo.' },
  { id: 'velocity', kicker: '05 · Velocidad tangencial', title: 'La punta se mueve tangente al círculo', message: 'La punta del aspa tiene una velocidad lineal tangente a su trayectoria.' },
  { id: 'tangential', kicker: '06 · Aceleración tangencial', title: 'La punta aumenta su rapidez', message: 'La aceleración tangencial es responsable del incremento en la rapidez de la punta.' },
  { id: 'centripetal', kicker: '07 · Aceleración centrípeta', title: 'La punta también acelera hacia el centro', message: 'La aceleración centrípeta mantiene a la punta siguiendo una trayectoria circular.' },
  { id: 'summary', kicker: '08 · Resumen', title: 'La punta combina dos efectos', message: 'En un ventilador que acelera, la punta tiene aceleración tangencial y centrípeta.' },
]

export const formulas = {
  radius: String.raw`r=0.30\,\mathrm{m}`,
  initial: String.raw`\omega_i=5.0\,\mathrm{rad/s}`,
  final: String.raw`\omega_f=17.0\,\mathrm{rad/s}`,
  angular: [String.raw`\alpha=\frac{\omega_f-\omega_i}{t}`, String.raw`\alpha=\frac{17.0-5.0}{4.0}`, String.raw`\alpha=3.0\,\mathrm{rad/s^2}`],
  velocity: [String.raw`v=r\omega_f`, String.raw`v=(0.30)(17.0)`, String.raw`v=5.1\,\mathrm{m/s}`],
  tangential: [String.raw`a_t=r\alpha`, String.raw`a_t=(0.30)(3.0)`, String.raw`a_t=0.90\,\mathrm{m/s^2}`],
  centripetal: [String.raw`a_c=\frac{v^2}{r}`, String.raw`a_c=\frac{5.1^2}{0.30}`, String.raw`a_c=86.7\,\mathrm{m/s^2}`],
}

export const dataCards = [
  { label: 'Radio del aspa', value: String.raw`r=0.30\,\mathrm{m}` },
  { label: 'Velocidad inicial', value: String.raw`\omega_i=5.0\,\mathrm{rad/s}` },
  { label: 'Velocidad final', value: String.raw`\omega_f=17.0\,\mathrm{rad/s}` },
  { label: 'Tiempo', value: String.raw`t=4.0\,\mathrm{s}` },
]
