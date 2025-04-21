// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const commonConfig = {
    plugins: [vue()],
    resolve: {
      alias: { '@': resolve(__dirname, 'src') }
    }
  }

  if (command === 'serve') {
    return { ...commonConfig, root: resolve(__dirname, 'demo') }
  } else {
    return {
      ...commonConfig,
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'NvgUI',
          fileName: format => `nvg-ui.${format}.js`
        },
        rollupOptions: {
          // **Solo externaliza Vue**, no primevue ni @primeuix/themes
          external: ['vue'], 
          output: {
            globals: {
              vue: 'Vue'
            },
            assetFileNames: assetInfo => assetInfo.name === 'style.css' ? 'style.css' : assetInfo.name
          }
        },
        cssCodeSplit: false
      }
    }
  }
})
