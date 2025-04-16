import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [vue(), vueDevTools()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
  } else {    
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'MyComponentLibrary',
          fileName: (format) => `my-component-library.${format}.js`
        },
        rollupOptions: {
          external: ['vue', 'primevue'],
          output: {
            globals: {
              vue: 'Vue',
              primevue: 'PrimeVue'
            }
          }
        }
      }
    }
  }
})