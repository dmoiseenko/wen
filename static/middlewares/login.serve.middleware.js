const send = require('koa-send');
const path = require('path');
const Router = require('koa-router');


const router = new Router({
  prefix: '/login'
});
const serve = ctx => send(
  ctx,
  ctx.path,
  {
    root: path.join(__dirname, '../../public'),
    maxage: 31536000
  }
);

router.get('/js/(.*)', serve);
router.get('/css/(.*)', serve);
router.get('/fonts/(.*)', serve);

module.exports = () => router.routes();
