/* eslint-disable */

module.exports = function (wallaby) {
  process.env.NODE_ENV = 'development';

  return {
    files: [
      'client/**/*.js*',
      'server/**/*.js',
      'server/**/*.graphql*',
      'common/**/*.js',
      'client/**/*.snap',
      '!client/**/*.test.js*',
      '!common/**/*.test.js*',
      '!server/**/*.test.js*',
      '!server/**/*.spec.js*',
      '!server/**/test/*.jest.js',
      '.env.dev',
      'jest.unit.json'
    ],
    tests: [
      'client/**/test/*.test.js*',
      'common/**/test/*.test.js',
      'server/**/test/*.test.js'
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
