const { LoginError } = require('../../../utils/errors');
const logger = require('../../../utils/logger.js');


module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    logger.error(error);

    throw new LoginError();
  }
};
