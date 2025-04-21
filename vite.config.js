import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Configuración para el demo en modo desarrollo
    return {
      plugins: [vue()],
      root: resolve(__dirname, 'demo'),
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      }
    }
  } else {
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'NvgUI',
          fileName: (format) => `nvg-ui.${format}.js`
        },
        rollupOptions: {
          external: ['vue', 'primevue'],
          output: {
            globals: {
              vue: 'Vue',
              primevue: 'PrimeVue'
            },
            // Aseguramos que los assets CSS mantengan su nombre
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'style.css') {
                return 'style.css';
              }
              return assetInfo.name;
            }
          }
        },
        // Aseguramos que el CSS se genere
        cssCodeSplit: false
      }
    }
  }
})