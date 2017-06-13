const config = require('./common/config.js');


module.exports = {
  port: config.selenium.port,
  host: config.selenium.host,
  path: './e2e',
  browser: 'chrome',
  webdriverio: {
    baseUrl: `${config.server.host}:${config.server.port}`,
    waitforTimeout: 2000,
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: []
      }
    }
  },
  jasmine: true,
  jasmineConfig: {
    specFiles: [
      '**/*@(.e2e).@(js|jsx)',
    ],
  },
};
