module.exports.LoginValidationError =
  class LoginValidationError extends Error {
    constructor(message) {
      super(message);

      this.name = this.constructor.name;
    }
  };

module.exports.LoginError =
  class LoginError extends Error {
    constructor(message) {
      super(message);

      this.name = this.constructor.name;
    }
  };

module.exports.InvalidPasswordHashError =
  class InvalidPasswordHashError extends Error {
    constructor(message) {
      super(message);

      this.name = this.constructor.name;
    }
  };

module.exports.UserNotFoundError =
  class UserNotFoundError extends Error {
    constructor(message) {
      super(message);

      this.name = this.constructor.name;
    }
  };

module.exports.InvalidTokenError =
  class InvalidTokenError extends Error {
    constructor(message) {
      super(message);

      this.name = this.constructor.name;
    }
  };
