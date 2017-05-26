const bodyParser = require('koa-body');
const composeMiddlewares = require('koa-compose');

const validationService = require('../../services/validation.service');
const authService = require('../../services/auth.service');
const cookie = require('../../utils/cookie.js');


const validate = (validateLoginInput = validationService.validateLoginInput) =>
  async (ctx, next) => {
    validateLoginInput(ctx.request.body);

    await next();
  };

const maskInternalErrors = (errors = authService.maskErrors) => async (ctx, next) => {
  await errors(next);
};

const process = (login = authService.login) => async (ctx, next) => {
  ctx.state.token = await login(ctx.request.body);

  await next();
};

const response = (setAuthToken = cookie.setAuthToken) => (ctx) => {
  setAuthToken(ctx, ctx.state.token);
  ctx.response.status = 200;
  ctx.response.body = {};
};

const middlewares = [
  bodyParser(),
  validate(),
  maskInternalErrors(),
  process(),
  response()
];

const route = (router, compose = composeMiddlewares) => router.post(
    '/api/login',
    compose(middlewares));

module.exports.middlewares = middlewares;
module.exports.validate = validate;
module.exports.process = process;
module.exports.processErrors = maskInternalErrors;
module.exports.response = response;
module.exports.route = route;
