module.exports = {
  env: {
    node: true,
    es2022: true,
    jest: true,
  },
  extends: [
    'eslint:recommended', // Default recommended ESLint rules
    'airbnb-base', // Airbnb style guide (optional, but widely used)
  ],
  parserOptions: {
    ecmaVersion: 13, // ECMAScript 2021
    sourceType: 'module', // Can be 'script' if not using ES modules
  },
  rules: {
    // Custom rules or overrides can be defined here
    'no-console': 'off', // Allow console logging (you can adjust this)
    indent: ['error', 2], // Enforce 2-space indentation
    quotes: ['error', 'single'], // Use single quotes for strings
    semi: ['error', 'always'], // Require semicolons
  },
};
