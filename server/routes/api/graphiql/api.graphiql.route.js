const compose = require('koa-compose');
const bodyParser = require('koa-body');

const graphiqlMiddleware = require('../../../middlewares/graphiql.middleware.js');


const isProduction = process.env.NODE_ENV === 'production';

module.exports = (router) => {
  if (!isProduction) {
    router.get(
      '/api/graphiql',
      compose([
        bodyParser(),
        graphiqlMiddleware()
      ])
    );
  }
};
