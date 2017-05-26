const serveLoginMiddleware = require('../../middlewares/login.ssr.middleware');

module.exports = (router, middleware = serveLoginMiddleware) =>
  router.get('/login', middleware());
