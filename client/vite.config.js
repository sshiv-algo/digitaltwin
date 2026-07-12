import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5673,
    proxy: {
      // Proxies /api/* to Render backend during local development
      // This mirrors the vercel.json rewrite so the same relative /api URL works everywhere
      '/api': {
        target: 'https://digitaltwin-lond.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  },
  build: {
    // Suppress the warning; heavy 3D/chart libs are expected to be large
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split large vendor libs into separate chunks for better caching
        manualChunks: {
          'vendor-three':    ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-charts':   ['recharts'],
          'vendor-motion':   ['framer-motion'],
          'vendor-react':    ['react', 'react-dom', 'react-router-dom'],
          'vendor-pdf':      ['jspdf', 'jspdf-autotable'],
        }
      }
    }
  }
})
