import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // keep the cache in the root node_modules shared by all modules
  cacheDir: '../../node_modules/.vite/module-1-core-concepts',
})
