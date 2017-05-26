/* eslint-disable */

module.exports = function (wallaby) {
  process.env.NODE_ENV = 'test';

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
      { pattern: '\.env.dev', instrument: false, load: true, ignore: false },
      { pattern: '\.env.test', instrument: false, load: true, ignore: false },
      { pattern: 'package\.json', instrument: false, load: true, ignore: false }
    ],
    tests: [
      'client/**/test/*.test.js*',
      'common/**/test/*.test.js',
      'server/**/test/*.test.js',
      //'server/**/test/*.spec.js', //TODO
      'server/**/test/*.jest.js'
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
      require('./server/test/init.js');
    },
    slowTestThreshold: 200,
    lowCoverageThreshold: 70
  };
};
