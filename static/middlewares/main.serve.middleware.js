const send = require('koa-send');
const path = require('path');
const Router = require('koa-router');


const router = new Router();
const serve = ctx => send(
  ctx,
  ctx.path,
  {
    root: path.join(__dirname, '../../public/main'),
    maxage: 31536000
  }
);

router.get('/js/(.*)', serve);
router.get('/css/(.*)', serve);
router.get('/fonts/(.*)', serve);

module.exports = () => router.routes();
