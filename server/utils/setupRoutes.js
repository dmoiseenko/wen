const Router = require('koa-router');

module.exports = (routes) => {
  const router = new Router();

  routes.forEach(route => route(router));

  return router.routes();
};
