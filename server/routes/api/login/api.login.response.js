const cookie = require('../../../utils/cookie.js');


module.exports = (ctx) => {
  cookie.setAuthToken(ctx, ctx.state.token);

  ctx.response.status = 200;
  ctx.response.body = {};
};
