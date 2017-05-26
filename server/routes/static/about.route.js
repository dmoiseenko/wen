const serveAppMiddleware = require('../../middlewares/main.ssr.middleware');

module.exports = (router, middleware = serveAppMiddleware) =>
  router.get('/about', middleware());
