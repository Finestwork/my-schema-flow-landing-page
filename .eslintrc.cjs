/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'no-console': 2,
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
