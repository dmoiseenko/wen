const ExtendableError = require('es6-error');


module.exports.LoginValidationError =
  class LoginValidationError extends ExtendableError {};

module.exports.LoginError =
  class LoginError extends ExtendableError {};

module.exports.InvalidPasswordHashError =
  class InvalidPasswordHashError extends ExtendableError {};

module.exports.UserNotFoundError =
  class UserNotFoundError extends ExtendableError {};

module.exports.InvalidTokenError =
  class InvalidTokenError extends ExtendableError {};

module.exports.NoteNotFoundError =
  class NoteNotFoundError extends ExtendableError {};
