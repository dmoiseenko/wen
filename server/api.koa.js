const App = require('koa');
const helmet = require('koa-helmet');
const router = require('koa-router')();

const publicRoutesMiddleware = require('./middlewares/api.public.middleware');
const privateRoutesMiddleware = require('./middlewares/api.private.middleware');
const errorMiddleware = require('./middlewares/error.middleware');
const authMiddleware = require('./middlewares/auth/auth.middleware');


const app = new App();

app.use(errorMiddleware());
app.use(helmet());
app.use(publicRoutesMiddleware());
app.use(authMiddleware());
app.use(privateRoutesMiddleware());
app.use(router.allowedMethods());

module.exports = app;
