const cookie = require('../../../utils/cookie.js');


module.exports = async (ctx, next) => {
  cookie.clearAuthToken(ctx);

  await next();
};
