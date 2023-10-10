// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  coveragePathIgnorePatterns: [
    'node_modules',
  ],
  modulePaths: ['<rootDir>'],
  silent: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  bail: true,
  passWithNoTests: true,
  coverageReporters: ['text', 'lcov', 'cobertura'],
};

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
   moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
});
