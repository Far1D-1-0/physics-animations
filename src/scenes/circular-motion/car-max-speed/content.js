export const problem = {
  mass: 1500,
  radius: 35.0,
  frictionCoefficient: 0.523,
  gravity: 9.8,
  maxSpeed: 13.4,
  maxSpeedKmh: 48.2,
}

export const chapters = [
  {
    id: 'curve',
    kicker: '01 · El problema',
    title: 'Un auto entra a una curva plana',
    message:
      'Para seguir una trayectoria circular, la velocidad del auto debe cambiar continuamente de dirección.',
  },
  {
    id: 'acceleration',
    kicker: '02 · Movimiento circular',
    title: 'La aceleración apunta al centro',
    message:
      'La velocidad es tangente a la curva, mientras que la aceleración centrípeta siempre apunta hacia el centro.',
  },
  {
    id: 'forces',
    kicker: '03 · Diagrama de cuerpo libre',
    title: '¿Qué fuerzas actúan sobre el auto?',
    message:
      'La normal y el peso se equilibran verticalmente. La fricción estática actúa horizontalmente hacia el centro.',
  },
  {
    id: 'radial',
    kicker: '04 · Dirección radial',
    title: 'La fricción produce la aceleración centrípeta',
    message:
      'En una curva plana, la única fuerza horizontal dirigida hacia el centro es la fricción estática.',
  },
  {
    id: 'limit',
    kicker: '05 · Límite de adherencia',
    title: 'La fricción estática tiene un máximo',
    message:
      'Justo antes de derrapar, la fricción requerida alcanza el máximo que pueden ofrecer las llantas.',
  },
  {
    id: 'vertical',
    kicker: '06 · Equilibrio vertical',
    title: 'La normal es igual al peso',
    message:
      'Como el auto no acelera verticalmente, la suma de fuerzas verticales es cero.',
  },
  {
    id: 'symbolic',
    kicker: '07 · Desarrollo simbólico',
    title: 'Despejamos la rapidez máxima',
    message:
      'La masa aparece en ambos lados y se cancela: la rapidez máxima no depende de la masa del automóvil.',
  },
  {
    id: 'numbers',
    kicker: '08 · Sustitución numérica',
    title: 'Usamos los datos del pavimento y la curva',
    message:
      'El radio, la gravedad y el coeficiente de fricción determinan la rapidez límite.',
  },
  {
    id: 'result',
    kicker: '09 · Interpretación',
    title: 'Por debajo del límite, el auto sigue la curva',
    message:
      'Si supera la rapidez máxima, la fricción ya no alcanza y el auto derrapa hacia afuera.',
  },
]

export const formulas = {
  radius: String.raw`r = 35.0\,\mathrm{m}`,
  acceleration: String.raw`a_c = \frac{v^2}{r}`,
  forces: [
    String.raw`\vec n`,
    String.raw`m\vec g`,
    String.raw`\vec f_s`,
  ],
  radial: [
    String.raw`\sum F_r = m a_c`,
    String.raw`a_c = \frac{v^2}{r}`,
    String.raw`f_s = m\frac{v^2}{r}`,
  ],
  limit: [
    String.raw`f_{s,\max} = \mu_s n`,
    String.raw`\mu_s n = m\frac{v_{\max}^2}{r}`,
  ],
  vertical: [
    String.raw`\sum F_y = 0`,
    String.raw`n-mg=0`,
    String.raw`n=mg`,
  ],
  symbolic: [
    String.raw`\mu_s n=m\frac{v_{\max}^2}{r}`,
    String.raw`\mu_s mg=m\frac{v_{\max}^2}{r}`,
    String.raw`\mu_s g=\frac{v_{\max}^2}{r}`,
    String.raw`v_{\max}^2=\mu_s g r`,
    String.raw`v_{\max}=\sqrt{\mu_s g r}`,
  ],
  numbers: [
    String.raw`v_{\max}=\sqrt{\mu_s g r}`,
    String.raw`v_{\max}=\sqrt{(0.523)(9.80)(35.0)}`,
    String.raw`v_{\max}=\sqrt{179.4}`,
    String.raw`v_{\max}=13.4\,\mathrm{m/s}`,
    String.raw`13.4\,\mathrm{m/s}\times3.6=48.2\,\mathrm{km/h}`,
  ],
  safe: String.raw`v < 13.4\,\mathrm{m/s}`,
  unsafe: String.raw`v > 13.4\,\mathrm{m/s}`,
  result: String.raw`\boxed{v_{\max}=13.4\,\mathrm{m/s}\approx48.2\,\mathrm{km/h}}`,
}

export const dataCards = [
  { label: 'Masa', value: String.raw`m=1500\,\mathrm{kg}` },
  { label: 'Radio', value: String.raw`r=35.0\,\mathrm{m}` },
  { label: 'Fricción', value: String.raw`\mu_s=0.523` },
  { label: 'Gravedad', value: String.raw`g=9.80\,\mathrm{m/s^2}` },
]
