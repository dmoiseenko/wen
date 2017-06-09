const serveAppMiddleware = require('../../middlewares/main.ssr.middleware');


module.exports = router => router.get('/', serveAppMiddleware());
