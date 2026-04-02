export default {
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
};
