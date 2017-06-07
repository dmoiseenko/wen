const hashService = require('./hash.service');
const jwtService = require('./jwt.service');
const getUserByEmail = require('../db/repositories/user/getUserByEmail.user.repository');


module.exports.login = async ({ email, password }) => {
  const user = await getUserByEmail(email);

  await hashService.verifyHash(password, user.passwordHash);

  return jwtService.generateToken({ id: user.id });
};
