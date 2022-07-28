module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'func-style': ['error', 'expression'],
    'import/extensions': [
      'error',
      {
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    indent: ['off'],
    '@typescript-eslint/indent': ['error', 2],
    'no-unused-var': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
