// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/static/', // 📌 Esta línea es clave para producción con Django
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/static/',
  plugins: [react()],
  build: {
    outDir: '../frontend_build', 
    emptyOutDir: true,
  },
})

