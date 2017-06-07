const compose = require('koa-compose');

const process = require('./api.logout.process');
const redirectMiddleware = require('../../../middlewares/common/redirect.middleware.js');


module.exports = (router) => {
  router.get(
    '/api/logout',
    compose([
      process,
      redirectMiddleware('/login')
    ])
  );
};
