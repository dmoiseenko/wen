/* eslint-disable */

module.exports = function (wallaby) {
  process.env.NODE_ENV = 'development';

  return {
    files: [
      'client/**/*.js*',
      'server/**/*.js',
      'static/**/*.js',
      'common/**/*.graphql*',
      'common/**/*.js',
      'client/**/*.snap',
      '!client/**/*.test.js*',
      '!common/**/*.test.js',
      '!server/**/*.test.js',
      '!static/**/*.test.js',
      '.env.dev',
      'jest.unit.json'
    ],
    tests: [
      'client/**/*.test.js*',
      'common/**/*.test.js',
      'server/**/*.test.js',
      'static/**/*.test.js'
    ],
    compilers: {
      'client/**/*.js*': wallaby.compilers.babel()
    },
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    setup: function () {
      const jestConfig = require('./jest.unit.json');
      wallaby.testFramework.configure(jestConfig);
    },
    slowTestThreshold: 200,
    lowCoverageThreshold: 70
  };
};
