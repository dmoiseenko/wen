const Router = require('koa-router');

const login = require('../routes/api/api.login.route');
const logout = require('../routes/api/api.logout.route');


module.exports = () => {
  const router = new Router();

  login.route(router);
  logout(router);

  return router.routes();
};
