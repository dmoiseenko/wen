module.exports.LoginValidationError =
  class LoginValidationError extends Error {
    constructor(message) {
      super(message);

      this.name = 'LoginValidationError';
    }
  };

module.exports.LoginError =
  class LoginError extends Error {
    constructor(message) {
      super(message);

      this.name = 'LoginError';
    }
  };

module.exports.InvalidPasswordHashError =
  class InvalidPasswordHashError extends Error {
    constructor(message) {
      super(message);

      this.name = 'InvalidPasswordHashError';
    }
  };

module.exports.UserNotFoundError =
  class UserNotFoundError extends Error {
    constructor(message) {
      super(message);

      this.name = 'UserNotFoundError';
    }
  };

module.exports.InvalidTokenError =
  class InvalidTokenError extends Error {
    constructor(message) {
      super(message);

      this.name = 'InvalidTokenError';
    }
  };
