const App = require('koa');

const { SubscriptionServer } = require('subscriptions-transport-ws');
const subscriptionManager = require('./graphql/subscriptionManager');
const config = require('../common/config.js');
const cookie = require('cookie');
const jwtService = require('./services/jwt.service');
const logger = require('./utils/logger.js');


const app = new App();

const port = config.socket.port;

const server = app.listen(port, () => {
  logger.info(`Socket server listening on port:${port} in ${process.env.NODE_ENV} mode`);
});

module.exports.subscriptionServer = new SubscriptionServer(
  {
    onConnect: async (connectionParams, websocket) => {
      const cookies = cookie.parse(websocket.upgradeReq.headers.cookie);

      const user = jwtService.verifyToken(cookies[config.cookie.auth]);

      return user;
    },
    subscriptionManager
  },
  {
    server,
    path: '/subscriptions/'
  }
);

