const serveAppMiddleware = require('../../middlewares/main.ssr.middleware');

module.exports = router => router.get('/about', serveAppMiddleware());
