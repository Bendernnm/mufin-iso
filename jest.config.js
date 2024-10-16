module.exports = {
  // Root directory of your project
  roots: ['./tests'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicate whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // Test environment (Node.js in this case)
  testEnvironment: 'node',

  // Test files pattern (matches .test.js or .spec.js files inside src folder)
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.spec.js'],

  // Customize what files to include in coverage report (include src folder and exclude test files)
  collectCoverageFrom: [
    'src/**/*.{js,jsx}', // Include all JS files in src folder
    '!src/**/*.test.{js,jsx}', // Exclude test files
    '!src/**/index.js', // Optional: Exclude index files if not needed
  ],
};
