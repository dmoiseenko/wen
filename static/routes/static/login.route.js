const serveLoginMiddleware = require('../../middlewares/login.ssr.middleware');
const routes = require('../../../common/routes.js');


module.exports = router => router.get(routes.login, serveLoginMiddleware());
