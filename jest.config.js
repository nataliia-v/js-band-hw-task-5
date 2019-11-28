module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['text', 'json'],
  coverageThreshold: {
    'global': {
      'branches': 40,
      'functions': 40,
      'lines': 40,
      'statements': 40
    }
  },
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  verbose: true,
  rootDir: '.',
  setupFiles: ['./browserMocks.js'],
  // Custom transformer to use custom .babelrc.js
  transform: {
    '^.+\\.js$': '<rootDir>/jest-transformer.js'
  },
  // File mocks. To run tests properly.
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
