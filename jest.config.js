// jest.config.js
import nextJest from 'next/jest';

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
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  bail: true,
  passWithNoTests: true,
  coverageReporters: ['text', 'lcov', 'cobertura'],
  testTimeout: 120000,
  forceExit: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*. {js,jsx,ts,tsx}'],
};

export default async () => ({
  ...(await createJestConfig(customJestConfig)()),
   moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mocks/fileMock.js",
  "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
  },
});
