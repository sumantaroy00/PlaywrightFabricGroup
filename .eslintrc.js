module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:playwright/recommended', 'plugin:prettier/recommended'],
  plugins: ['playwright', 'prettier'],

  rules: {
    'prettier/prettier': 'error', // Show Prettier issues as ESLint errors
    'no-unused-vars': 'warn', // Warn on unused variables
    'no-console': 'off', // Allow console logs in tests
  },
};
