const config = require('./common/config.js');


module.exports = {
  port: config.selenium.port,
  host: config.selenium.host,
  path: './e2e',
  compiler: 'js:babel-core/register',
  browser: 'chrome',
  webdriverio: {
    baseUrl: `${config.server.host}:${config.server.port}`,
    waitforTimeout: 10000,
  },
  jasmine: true,
  jasmineConfig: {
    specFiles: [
      '**/*@(.e2e).@(js|jsx)',
    ],
  },
};
