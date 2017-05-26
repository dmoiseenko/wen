const jwt = require('jsonwebtoken');

const cryptoService = require('./crypto.service.js');
const config = require('../../common/config');
const errors = require('../utils/errors');


module.exports.generateToken = (data = {}) => {
  const dataString = JSON.stringify(data);
  const encryptedData = cryptoService.encrypt(dataString);

  return jwt.sign(encryptedData, config.secret.jwt);
};

module.exports.verifyToken = (token) => {
  try {
    const encryptedData = jwt.verify(token, config.secret.jwt);
    const dataJSON = cryptoService.decrypt(encryptedData);

    return JSON.parse(dataJSON);
  } catch (err) {
    throw new errors.InvalidTokenError();
  }
};
