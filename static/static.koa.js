require('isomorphic-fetch');
const App = require('koa');
const compose = require('koa-compose');
const logger = require('koa-logger');
const Router = require('koa-router');

const errorMiddleware = require('../server/middlewares/error.middleware.js');
const authMiddleware = require('../server/middlewares/auth/auth.middleware');
const loginHmrMiddleware = require('./middlewares/login.hmr.middleware');
const mainHmrMiddleware = require('./middlewares/main.hmr.middleware');
const redirectMiddleware = require('../server/middlewares/common/redirect.middleware');
const publicSsrRoutesMiddleware = require('./middlewares/static.public.middleware');
const privateSsrRoutesMiddleware = require('./middlewares/static.private.middleware');
const mainServeMiddleware = require('./middlewares/main.serve.middleware');
const loginServeMiddleware = require('./middlewares/login.serve.middleware');


const isProduction = process.env.NODE_ENV === 'production';
const app = new App();
const router = new Router();

const invalidTokenMiddlewares = compose([
  publicSsrRoutesMiddleware(),
  isProduction ? loginServeMiddleware() : loginHmrMiddleware(),
  redirectMiddleware('/login')
]);

app.use(logger());
app.use(errorMiddleware());
app.use(authMiddleware(invalidTokenMiddlewares));
app.use(privateSsrRoutesMiddleware());
app.use(isProduction ? mainServeMiddleware() : mainHmrMiddleware());
app.use(router.allowedMethods());

module.exports = app;
