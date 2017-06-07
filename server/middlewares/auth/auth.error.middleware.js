const errors = require('../../utils/errors');


module.exports = noAuthMiddleware => async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof errors.InvalidTokenError && noAuthMiddleware) {
      await noAuthMiddleware(ctx, next);
    } else {
      throw err;
    }
  }
};
