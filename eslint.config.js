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
];
