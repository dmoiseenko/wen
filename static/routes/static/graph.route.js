const serveAppMiddleware = require('../../middlewares/main.ssr.middleware');
const routes = require('../../../common/routes.js');


module.exports = router => router.get(routes.graph, serveAppMiddleware());
