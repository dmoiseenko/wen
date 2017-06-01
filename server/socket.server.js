const App = require('koa');

const { SubscriptionServer } = require('subscriptions-transport-ws');
const subscriptionManager = require('./graphql/subscriptionManager');
const config = require('../common/config.js');
const cookie = require('cookie');
const jwtService = require('./services/jwt.service');


const app = new App();

const server = app.listen(config.socket.port);

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

