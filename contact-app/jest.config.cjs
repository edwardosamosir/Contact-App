module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['**/__tests__/**/*.test.(js|jsx)'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(png|svg)$': '<rootDir>/src/mocks/fileMock.js',
    }
  };
  