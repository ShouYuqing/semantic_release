export default {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    '*.{js,mjs}',
    'src/**/*.{js,mjs}',
    '!src/**/*.test.{js,mjs}',
    '!src/**/__tests__/**',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: [
    '**/__tests__/**/*.{js,mjs}',
    '**/?(*.)+(spec|test).{js,mjs}'
  ]
}; 