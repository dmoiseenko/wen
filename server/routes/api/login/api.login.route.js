const bodyParser = require('koa-body');
const compose = require('koa-compose');

const validate = require('./api.login.validate');
const maskInternalErrors = require('./api.login.maskInternalErrors');
const process = require('./api.login.process');
const response = require('./api.login.response');


module.exports = router => router.post(
  '/api/login',
  compose([
    bodyParser(),
    validate,
    maskInternalErrors,
    process,
    response
  ])
);
