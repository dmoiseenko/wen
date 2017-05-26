const config = require('../../common/config');


module.exports.setAuthToken = (ctx, token) => {
  ctx.cookies.set(config.cookie.auth, token);
};

module.exports.clearAuthToken = (ctx) => {
  ctx.cookies.set(config.cookie.auth, '', { expires: new Date() });
};

module.exports.getAuthToken = ctx => ctx.cookies.get(config.cookie.auth);
