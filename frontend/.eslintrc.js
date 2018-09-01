module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  globals: {
    module: false,
    __dirname: false,
    process: false,
    require: false
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120, // 1行の文字数制限
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
    'no-console': 'warn'
  }
}
