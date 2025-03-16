import { configApp } from '@adonisjs/eslint-config'

export default configApp({
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'], // Agora aceita snake_case
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'], // Permite snake_case em propriedades de objetos
      },
    ],
  },
})
