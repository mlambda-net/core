const { defaults } = require('jest-config');

module.exports = {
  verbose: false,
  roots: ['<rootDir>'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  testPathIgnorePatterns: ['./node_modules/'],
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '@mlambda-net/core/(.*)$': '<rootDir>/src/packages/$1',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  snapshotResolver: './config/snapshot_resolver_test',
};
