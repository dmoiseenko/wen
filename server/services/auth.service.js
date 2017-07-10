const R = require('ramda');

const hashService = require('./hash.service');
const jwtService = require('./token.service');
const getUserByEmailRepository = require('../db/repositories/user/getByEmail.user.repository');


const getUserAndPassword = getUserByEmail => async ({ email, password }) => ({
  user: await getUserByEmail(email),
  password
});

const verifyPassword = verifyPasswordHash => async ({ user, password }) => ({
  isVerified: await verifyPasswordHash(password, user.passwordHash),
  user
});

const formPayload = ({ user }) => ({ id: user.id });


module.exports.login = ({ email, password }) => R.pipeP(
  getUserAndPassword(getUserByEmailRepository),
  verifyPassword(hashService.verifyHash),
  formPayload,
  jwtService.generateToken
)({ email, password });

module.exports.formPayload = formPayload;
module.exports.getUserAndPassword = getUserAndPassword;
module.exports.verifyPassword = verifyPassword;
