const errors = require('../utils/errors.js');
const validateEmail = require('../../common/validation/email.validation');
const validatePassword = require('../../common/validation/password.validation');


module.exports.validateLoginInput = (body) => {
  if (!body) {
    throw new errors.LoginValidationError();
  }

  try {
    validateEmail(body.email);
    validatePassword(body.password);
  } catch (err) {
    throw new errors.LoginValidationError();
  }
};
