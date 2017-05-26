const hashService = require('./hash.service');
const jwtService = require('./jwt.service');
const userRepository = require('../db/repositories/user.repository');


module.exports.login = async ({ email, password }) => {
  const user = await userRepository.getUserByEmail(email);

  await hashService.verifyHash(password, user.passwordHash);

  return jwtService.generateToken({ id: user.id });
};
