const Router = require('koa-router');

const index = require('../routes/static/index.route');
const about = require('../routes/static/about.route');
const notes = require('../routes/static/notes.route');
const graph = require('../routes/static/graph.route');


module.exports = () => {
  const router = new Router();

  index(router);
  about(router);
  notes(router);
  graph(router);

  return router.routes();
};
