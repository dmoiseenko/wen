/*  eslint-disable no-console */

const bootstrap = require('../server/db/preparations/bootstrap');


bootstrap()
  .then(() => {
    console.log('Bootstrap finished');
  })
  .catch((err) => {
    console.error(err);
  })
  .then(() => process.exit(0));

/*  eslint-enable no-console */
