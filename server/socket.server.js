const App = require('koa');

const { SubscriptionServer } = require('subscriptions-transport-ws');
const subscriptionManager = require('./graphql/subscriptionManager');


const WS_PORT = 3000;

const app = new App();

const server = app.listen(WS_PORT);

const subscriptionServer = new SubscriptionServer(
  {
    //TODO
    // onConnect: async (connectionParams, websocket) => {
    //   console.log(websocket.upgradeReq.headers.cookie);
    // },
    subscriptionManager
  },
  {
    server,
    path: '/subscriptions/'
  }
);

