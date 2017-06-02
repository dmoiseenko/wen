const Router = require('koa-router');

const login = require('../routes/static/login.route');


module.exports = () => {
  const router = new Router();

  login(router);

  return router.routes();
};
