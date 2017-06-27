const waitOn = require('wait-on');
const config = require('../common/config.js');
const ora = require('ora');


const opts = {
  resources: [
    `http-get://${config.server.host}:${config.server.port}`,
    `tcp:${config.db.host}:${config.db.port}`
  ],
};

const spinner = ora('Please wait for environment setup').start();

waitOn(opts, (err) => {
  if (err) {
    spinner.fail(err);
    process.exit(1);
    return;
  }

  spinner.succeed('Environment is ready');
});
