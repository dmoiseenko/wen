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
      'static/**/*.snap',
      'server/**/*.snap',
      '!static/**/*.spec.js',
      '!server/**/*.spec.js',
      '.env.dev.test',
      'jest.integration.json'
    ],
    tests: [
      'server/**/spec/*.spec.js',
      'static/**/spec/*.spec.js'
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
      const jestConfig = require('./jest.integration.json');
      wallaby.testFramework.configure(jestConfig);
    },
    slowTestThreshold: 200,
    lowCoverageThreshold: 70,
    workers: {
      initial: 1,
      regular: 1
    }
  };
};
