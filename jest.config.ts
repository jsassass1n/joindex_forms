const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  transformIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\styles.(ts)$': 'identity-obj-proxy',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
