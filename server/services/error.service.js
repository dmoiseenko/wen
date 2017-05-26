const { STATUS_CODES } = require('http');

const errors = require('../utils/errors');


module.exports.handleError = (error) => {
  let status = 500;
  let message = STATUS_CODES[status];

  if (error instanceof errors.LoginValidationError ||
    error instanceof errors.LoginError) {
    status = 400;
    message = 'Invalid email or password';
  }

  if (error instanceof errors.InvalidTokenError) {
    status = 401;
    message = 'Invalid token';
  }

  return {
    status,
    message
  };
};
