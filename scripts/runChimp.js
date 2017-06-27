const waitOn = require('wait-on');
const spawn = require('child_process').spawn;
const config = require('../common/config.js');
const ora = require('ora');


const args = process.argv.slice(2);
const isWatch = args.findIndex(a => a === '--watch') !== -1;

const opts = {
  resources: [
    `http-get://${config.server.host}:${config.server.port}`,
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

  const command = isWatch ? 'chimp:watch' : 'chimp';

  const chimp = spawn('npm', ['run', command]);

  chimp.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
  chimp.stderr.on('data', (data) => {
    process.stdout.write(data);
  });
  chimp.on('close', (code) => {
    process.exit(code);
  });
});

/* eslint-enable no-console */
