const cookie = require('../utils/cookie');
const jwtService = require('../services/jwt.service');
const errors = require('../utils/errors');


module.exports = noAuthMiddleware => async (ctx, next) => {
  try {
    const token = cookie.getAuthToken(ctx);

    const user = jwtService.verifyToken(token);

    ctx.state.user = user;

    await next();
  } catch (err) {
    if (err instanceof errors.InvalidTokenError && noAuthMiddleware) {
      await noAuthMiddleware(ctx, next);
    } else {
      throw err;
    }
  }
};
