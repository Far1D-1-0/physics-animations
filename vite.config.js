import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        carMaxSpeed: resolve(
          import.meta.dirname,
          'src/scenes/circular-motion/car-max-speed/index.html',
        ),
        metalBallTension: resolve(
          import.meta.dirname,
          'src/scenes/circular-motion/metal-ball-tension/index.html',
        ),
        bankedCurveCar: resolve(
          import.meta.dirname,
          'src/scenes/circular-motion/banked-curve-car/index.html',
        ),
        acceleratingDisk: resolve(
          import.meta.dirname,
          'src/scenes/non-uniform-circular-motion/accelerating-disk/index.html',
        ),
        pointOnWheel: resolve(
          import.meta.dirname,
          'src/scenes/non-uniform-circular-motion/point-on-wheel/index.html',
        ),
        acceleratingFan: resolve(
          import.meta.dirname,
          'src/scenes/non-uniform-circular-motion/accelerating-fan/index.html',
        ),
      },
    },
  },
})
