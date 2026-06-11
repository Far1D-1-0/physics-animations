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
      },
    },
  },
})
