const hashService = require('./hash.service');
const jwtService = require('./jwt.service');
const userRepository = require('../db/repositories/user.repository');
const errors = require('../utils/errors');


module.exports.login = async ({ email, password }) => {
  const user = await userRepository.getUserByEmail(email);

  await hashService.verifyHash(password, user.passwordHash);

  return jwtService.generateToken({ id: user.id });
};

module.exports.maskErrors = async (fn) => {
  try {
    await fn();
  } catch (error) {
    if (
      error instanceof errors.UserNotFoundError ||
      error instanceof errors.InvalidPasswordHashError
    ) {
      throw new errors.LoginError();
    }

    throw error;
  }
};
