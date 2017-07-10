const jwt = require('jsonwebtoken');

const { InvalidTokenError } = require('../utils/errors');


module.exports.sign = secret => encryptedData => jwt.sign(encryptedData, secret);

module.exports.verify = secret => (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new InvalidTokenError();
  }
};
