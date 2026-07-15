import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import vuePrettierConfig from '@vue/eslint-config-prettier';

export default [
  // Ignores configuration (replaces .eslintignore)
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/*.config.js', '**/.husky/**'],
  },

  // Main configuration
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __: 'readonly',
        frappe: 'readonly',
        heracles: 'readonly',
        $: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'warn',
    },
  },

  // Vue-specific configuration
  ...pluginVue.configs['flat/recommended'],
  vuePrettierConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Test files (Vitest globals: true)
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  },
];
