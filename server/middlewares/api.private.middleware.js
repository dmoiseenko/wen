const Router = require('koa-router');

const graphql = require('../routes/api/api.graphql.route');


module.exports = () => {
  const router = new Router();

  graphql(router);

  return router.routes();
};
