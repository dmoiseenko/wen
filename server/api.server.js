const config = require('../common/config');
const app = require('./api.koa');
const logger = require('./utils/logger');


const port = config.server.port;

module.exports.server = app.listen(port, () => {
  logger.info(`API server listening on port:${port} in ${process.env.NODE_ENV} mode`);
});
