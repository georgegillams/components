module.exports = {
  collectCoverageFrom: [
    'server/**/*.{js,jsx}',
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/*/*/Loadable.{js,jsx}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
  ],
  coverageThreshold: {
    global: {
      statements: 0.1,
      branches: 0.1,
      functions: 0,
      lines: 0.1,
    },
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '.*\\.(css)$': '<rootDir>/config/jest-mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest-mocks/image.js',
  },
  setupFilesAfterEnv: ['<rootDir>/config/test-setup.js'],
  testEnvironment: 'jsdom',
};
