const compose = require('koa-compose');
const bodyParser = require('koa-body');

const graphqlMiddleware = require('../../../middlewares/graphql.middleware.js');


module.exports = (router) => {
  router.post(
    '/api/graphql',
    compose([
      bodyParser(),
      graphqlMiddleware()
    ])
  );
};
