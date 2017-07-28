const R = require('ramda');

const cryptoService = require('./crypto.service.js');
const config = require('../../common/config');
const jwtService = require('./jwt.service');


const generateToken = (data = {}) => R.pipe(
  JSON.stringify,
  cryptoService.encrypt,
  jwtService.sign(config.secret.jwt)
)(data);

const verifyTokenAndReturnUserData = token => R.pipe(
  jwtService.verify(config.secret.jwt),
  cryptoService.decrypt,
  JSON.parse
)(token);

module.exports = {
  generateToken,
  verifyTokenAndReturnUserData
};
