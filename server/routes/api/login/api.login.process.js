const authService = require('../../../services/auth.service');


module.exports = async (ctx, next) => {
  ctx.state.token = await authService.login(ctx.request.body);

  await next();
};
