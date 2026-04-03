export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva característica
        'fix', // Corrección de bug
        'docs', // Cambios en documentación
        'style', // Cambios de formato (espacios, punto y coma, etc - no afecta código)
        'refactor', // Refactorización sin cambio funcional
        'perf', // Mejora de performance
        'test', // Agregar o corregir tests
        'chore', // Cambios en build, herramientas, dependencias
        'ci', // Cambios en CI/CD
        'build', // Cambios en sistema de build
        'revert', // Revertir commit anterior
      ],
    ],
    'subject-case': [2, 'never', ['upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};
