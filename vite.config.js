// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const common = {
    plugins: [vue(), cssInjectedByJs()],
  }

  if (command === 'serve') {
    return {
      ...common,
      root: resolve(__dirname, 'demo'),
      resolve: { alias: { '@': resolve(__dirname, 'src') } }
    }
  }

  return {
    ...common,
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'NvgUI',
        fileName: (fmt) => `nvg-ui.${fmt}.js`
      },
      cssCodeSplit: false,           // fuerza un solo bloque de CSS  :contentReference[oaicite:2]{index=2}
      rollupOptions: {
        external: ['vue', 'primevue'],
        output: {
          globals: { vue: 'Vue', primevue: 'PrimeVue' }
        }
      }
    }
  }
})
