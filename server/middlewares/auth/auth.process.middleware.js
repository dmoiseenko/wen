const cookie = require('../../utils/cookie');
const jwtService = require('../../services/jwt.service');


module.exports = () => async (ctx, next) => {
  const token = cookie.getAuthToken(ctx);

  ctx.state.user = jwtService.verifyTokenAndReturnUserData(token);

  await next();
};
