const { LoginError } = require('../../../utils/errors');


module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    throw new LoginError();
  }
};
