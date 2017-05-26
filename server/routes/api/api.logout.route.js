const cookie = require('../../utils/cookie.js');


function handle(clearAuthToken = cookie.clearAuthToken) {
  return async (ctx) => {
    clearAuthToken(ctx);

    ctx.redirect('/login');
  };
}
module.exports.handle = handle;

module.exports = (router) => {
  router.get(
    '/api/logout',
    handle());
};
