// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

/**
 * Generate globals mapping dynamically for external modules
 * @param {string} id - Module ID
 * @returns {string} - Global variable name
 */
function getGlobalName(id) {
  // Core libraries
  if (id === 'vue') return 'Vue';
  if (id === 'primevue') return 'PrimeVue';
  if (id === 'lodash-es') return '_';
  if (id === 'mitt') return 'mitt';

  // PrimeVue submodules: primevue/component -> primevue.component
  if (id.startsWith('primevue/')) {
    const componentName = id.replace('primevue/', '');
    return `primevue.${componentName}`;
  }

  // PrimeUIX themes: @primeuix/themes/aura -> aura
  if (id.startsWith('@primeuix/themes/')) {
    return id.replace('@primeuix/themes/', '');
  }

  // Default: use the module ID
  return id;
}

export default defineConfig(({ command }) => {
  const commonConfig = {
    plugins: [vue()],
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
    },
  };

  if (command === 'serve') {
    return { ...commonConfig, root: resolve(__dirname, 'demo') };
  } else {
    return {
      ...commonConfig,
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'NvgUI',
          fileName: format => `nvg-ui.${format}.js`,
        },
        rollupOptions: {
          // Externalize dependencies to reduce bundle size
          external: [
            'vue',
            'primevue',
            /^primevue\/.*/, // All PrimeVue sub-imports
            '@primeuix/themes',
            /^@primeuix\/themes\/.*/,
            'lodash-es',
            'mitt',
          ],
          output: {
            exports: 'named',
            // Dynamic globals generation
            globals: id => getGlobalName(id),
            assetFileNames: assetInfo =>
              assetInfo.name === 'style.css' ? 'style.css' : assetInfo.name,
          },
        },
        cssCodeSplit: false,
      },
    };
  }
});
