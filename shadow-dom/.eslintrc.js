module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  overrides: [
    {
      files: ['*.ts', '*.vue']
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {},
  globals: {
    window: true,
    $nuxt: true
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': ['error'],
    'prettier/prettier': ['error'],
    quotes: ['error', 'single'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
