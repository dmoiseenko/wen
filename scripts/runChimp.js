/* eslint-disable no-console */

const waitOn = require('wait-on');
const spawn = require('child_process').spawn;
const config = require('../common/config.js');


const args = process.argv.slice(2);
const isWatch = args.findIndex(a => a === '--watch') !== -1;

const opts = {
  resources: [
    `http-get://${config.server.host}:${config.server.port}`,
  ],
};

waitOn(opts, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
    return;
  }

  console.log('Server is ready');

  const command = isWatch ? 'e2e:chimp:watch' : 'e2e:chimp';

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
