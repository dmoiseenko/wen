const waitOn = require('wait-on');
const ora = require('ora');


const opts = {
  resources: [
    'http-get://static:3000'
  ],
  timeout: 60000
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
