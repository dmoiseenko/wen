const compose = require('koa-compose');

const error = require('./auth.error.middleware');
const process = require('./auth.process.middleware');


module.exports = noAuthMiddleware => compose([
  error(noAuthMiddleware),
  process(),
]);
