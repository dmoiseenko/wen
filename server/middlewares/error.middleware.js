const errorService = require('../services/error.service');


module.exports = () => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const { status, message } = errorService.handleError(error);

    ctx.response.status = status;
    ctx.response.body = {
      error: message
    };

    ctx.app.emit('error', error);
  }
};
