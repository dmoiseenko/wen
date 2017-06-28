module.exports = wallaby =>
  // process.env.NODE_ENV = 'test';

   ({
     files: [
       'client/**/*.js*',
       'server/**/*.js',
       'static/**/*.js',
       'common/**/*.graphql*',
       'common/**/*.js',
       'client/**/*.snap',
       '!client/**/test/*.test.js*',
       '!common/**/test/*.test.js',
       '!server/**/test/*.test.js',
       '!static/**/test/*.test.js',
       '.env.dev.test',
       'jest.unit.json'
     ],
     tests: [
       'client/**/test/*.test.js*',
       'common/**/test/*.test.js',
       'server/**/test/*.test.js',
       'static/**/test/*.test.js'
     ],
     compilers: {
       'client/**/*.js*': wallaby.compilers.babel()
     },
     env: {
       type: 'node',
       runner: 'node'
     },
     testFramework: 'jest',
     setup() {
      const jestConfig = require('./jest.unit.json'); // eslint-disable-line
       wallaby.testFramework.configure(jestConfig);
     },
     slowTestThreshold: 200,
     lowCoverageThreshold: 70
   });
