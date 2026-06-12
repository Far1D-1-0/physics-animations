export const chapters = [
  {
    id: 'problem',
    kicker: '01 · El problema',
    title: 'Un auto entra a una curva peraltada',
    message: 'La carretera está inclinada hacia el centro para ayudar al auto a seguir una trayectoria circular sin depender de la fricción.',
  },
  {
    id: 'angle',
    kicker: '02 · Geometría',
    title: 'El plano forma un ángulo θ',
    message: 'El peralte inclina la fuerza normal. Esa inclinación permite que una parte de la normal apunte hacia el centro.',
  },
  {
    id: 'forces',
    kicker: '03 · Diagrama de fuerzas',
    title: 'Actúan el peso y la normal',
    message: 'Sin fricción, las únicas fuerzas son el peso vertical y la normal perpendicular a la superficie.',
  },
  {
    id: 'components',
    kicker: '04 · Componentes de la normal',
    title: 'Descomponemos la normal',
    message: 'La componente vertical equilibra el peso y la componente horizontal produce la aceleración centrípeta.',
  },
  {
    id: 'vertical',
    kicker: '05 · Equilibrio vertical',
    title: 'La componente vertical sostiene al auto',
    message: 'Como el auto no acelera verticalmente, la componente N cos(θ) debe ser igual al peso.',
  },
  {
    id: 'radial',
    kicker: '06 · Dirección radial',
    title: 'La componente horizontal curva la trayectoria',
    message: 'La componente N sin(θ) apunta hacia el centro y proporciona la fuerza centrípeta.',
  },
  {
    id: 'derive',
    kicker: '07 · Despeje simbólico',
    title: 'Dividimos las ecuaciones',
    message: 'Al dividir la ecuación radial entre la vertical, la normal y la masa se cancelan.',
  },
  {
    id: 'numbers',
    kicker: '08 · Sustitución numérica',
    title: 'Usamos el radio y el ángulo',
    message: 'Con un radio de 50 metros y un peralte de 15 grados obtenemos la rapidez de diseño.',
  },
  {
    id: 'result',
    kicker: '09 · Resultado',
    title: 'El auto toma la curva a 41.4 km/h',
    message: 'A esta rapidez, el peralte por sí solo proporciona exactamente la fuerza centrípeta necesaria.',
  },
]

export const formulas = {
  radius: String.raw`r=50.0\,\mathrm{m}`,
  angle: String.raw`\theta=15^\circ`,
  forces: [String.raw`\vec N\perp\text{plano}`, String.raw`m\vec g\ \text{vertical}`],
  components: [String.raw`N_x=N\sin\theta`, String.raw`N_y=N\cos\theta`],
  vertical: [String.raw`\sum F_y=0`, String.raw`N\cos\theta-mg=0`, String.raw`N\cos\theta=mg`],
  radial: [String.raw`\sum F_r=ma_c`, String.raw`N\sin\theta=m\frac{v^2}{r}`],
  derive: [
    String.raw`\frac{N\sin\theta}{N\cos\theta}=\frac{mv^2/r}{mg}`,
    String.raw`\tan\theta=\frac{v^2}{rg}`,
    String.raw`v^2=rg\tan\theta`,
    String.raw`v=\sqrt{rg\tan\theta}`,
  ],
  numbers: [
    String.raw`v=\sqrt{rg\tan\theta}`,
    String.raw`v=\sqrt{(50.0)(9.80)\tan(15^\circ)}`,
    String.raw`v=\sqrt{131.3}`,
    String.raw`v=11.5\,\mathrm{m/s}`,
    String.raw`11.5\,\mathrm{m/s}\times3.6=41.4\,\mathrm{km/h}`,
  ],
  result: String.raw`\boxed{v=11.5\,\mathrm{m/s}\approx41.4\,\mathrm{km/h}}`,
}

export const dataCards = [
  { label: 'Radio', value: String.raw`r=50.0\,\mathrm{m}` },
  { label: 'Peralte', value: String.raw`\theta=15^\circ` },
  { label: 'Gravedad', value: String.raw`g=9.80\,\mathrm{m/s^2}` },
  { label: 'Fricción', value: String.raw`f=0` },
]
