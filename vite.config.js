// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       output: {
//         format: 'es', // Ensures ES Module format
//       },
//     },
//   },
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'vite-plugin-headers',
      writeBundle() {
        // Copy the _headers file to the output directory
        copyFileSync(resolve(__dirname, '_headers'), resolve(__dirname, 'dist/_headers'))
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        format: 'es', // Ensures ES Module format
      },
    },
  },
})
