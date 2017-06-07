const serveLoginMiddleware = require('../../middlewares/login.ssr.middleware');

module.exports = router => router.get('/login', serveLoginMiddleware());
