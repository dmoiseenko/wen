const hashService = require('./hash.service');
const jwtService = require('./jwt.service');
const userRepository = require('../db/repositories/user.repository');
const errors = require('../utils/errors');


module.exports.login = async ({ email, password }) => {
  const user = await userRepository.getUserByEmail(email);

  const isVerified = await hashService.verifyHash(password, user.passwordHash);

  if (!isVerified) {
    throw new errors.InvalidPasswordHashError();
  }

  return jwtService.generateToken({ id: user.id });
};
