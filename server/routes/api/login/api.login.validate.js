const validationService = require('../../../services/validation.service');


module.exports = async (ctx, next) => {
  validationService.validateLoginInput(ctx.request.body);

  await next();
};
