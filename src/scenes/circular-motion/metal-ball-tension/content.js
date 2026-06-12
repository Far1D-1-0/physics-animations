export const problem = {
  mass: 0.5,
  radius: 0.2,
  speed: 3.0,
  acceleration: 45,
  tension: 22.5,
}

export const chapters = [
  {
    id: 'problem',
    kicker: '01 · El problema',
    title: 'Una bola gira unida a una cuerda',
    message:
      'Una bola metálica describe un círculo horizontal alrededor de un eje. Buscamos la tensión necesaria para mantenerla en esa trayectoria.',
  },
  {
    id: 'motion',
    kicker: '02 · Movimiento circular',
    title: 'La velocidad es tangente al círculo',
    message:
      'Aunque la rapidez permanece constante, la dirección de la velocidad cambia en cada instante.',
  },
  {
    id: 'acceleration',
    kicker: '03 · Aceleración centrípeta',
    title: 'La aceleración apunta hacia el eje',
    message:
      'El cambio continuo de dirección requiere una aceleración radial dirigida hacia el centro.',
  },
  {
    id: 'tension',
    kicker: '04 · Fuerza radial',
    title: 'La cuerda tira hacia el centro',
    message:
      'La tensión es la fuerza horizontal que produce la aceleración centrípeta de la bola.',
  },
  {
    id: 'newton',
    kicker: '05 · Segunda ley de Newton',
    title: 'La tensión es la fuerza centrípeta',
    message:
      'En la dirección radial, la suma de fuerzas es igual a la masa por la aceleración centrípeta.',
  },
  {
    id: 'derive',
    kicker: '06 · Desarrollo',
    title: 'Sustituimos la aceleración centrípeta',
    message:
      'Al reemplazar la aceleración por v²/r obtenemos una expresión directa para la tensión.',
  },
  {
    id: 'numbers',
    kicker: '07 · Sustitución numérica',
    title: 'Calculamos con los datos de la bola',
    message:
      'La rapidez aparece al cuadrado, por eso un aumento de velocidad exige mucha más tensión.',
  },
  {
    id: 'result',
    kicker: '08 · Resultado',
    title: 'La cuerda ejerce 22.5 newtons',
    message:
      'Esa tensión apunta siempre hacia el eje y mantiene a la bola girando en su trayectoria circular.',
  },
]

export const formulas = {
  radius: String.raw`r=0.20\,\mathrm{m}`,
  velocity: String.raw`\vec v\ \text{tangente a la trayectoria}`,
  acceleration: [
    String.raw`\vec a_c\ \text{apunta hacia el centro}`,
    String.raw`a_c=\frac{v^2}{r}`,
  ],
  tension: [
    String.raw`\vec T\ \text{apunta hacia el centro}`,
    String.raw`\vec T\parallel\vec a_c`,
  ],
  newton: [
    String.raw`\sum F_r=ma_c`,
    String.raw`T=ma_c`,
  ],
  derive: [
    String.raw`T=ma_c`,
    String.raw`a_c=\frac{v^2}{r}`,
    String.raw`T=m\frac{v^2}{r}`,
  ],
  numbers: [
    String.raw`T=m\frac{v^2}{r}`,
    String.raw`T=(0.50)\frac{(3.0)^2}{0.20}`,
    String.raw`T=(0.50)(45)`,
    String.raw`T=22.5\,\mathrm{N}`,
  ],
  result: String.raw`\boxed{T=22.5\,\mathrm{N}}`,
}

export const dataCards = [
  { label: 'Masa', value: String.raw`m=0.50\,\mathrm{kg}` },
  { label: 'Radio', value: String.raw`r=0.20\,\mathrm{m}` },
  { label: 'Rapidez', value: String.raw`v=3.0\,\mathrm{m/s}` },
  { label: 'Incógnita', value: String.raw`T=?` },
]
