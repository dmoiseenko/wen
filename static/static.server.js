const config = require('../common/config');
const app = require('./static.koa');
const logger = require('../server/utils/logger');


const port = config.server.port;

app.listen(port, () => {
  logger.info(`Static server listening on port:${port} in ${process.env.NODE_ENV} mode`);
});
