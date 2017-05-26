module.exports = () => async (ctx, next) => {
  if (ctx.url.indexOf('.') === -1 &&
    ctx.accepts().indexOf('text/html') !== -1) {
    ctx.url = '/';
  }

  await next();
};
