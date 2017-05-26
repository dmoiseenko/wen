const Router = require('koa-router');

const index = require('../routes/static/index.route');
const about = require('../routes/static/about.route');
const topics = require('../routes/static/topics.route');


module.exports = () => {
  const router = new Router();

  index(router);
  about(router);
  topics(router);

  return router.routes();
};
