const jwt = require('jsonwebtoken');

const { InvalidTokenError } = require('../utils/errors');


const sign = secret => encryptedData => jwt.sign(encryptedData, secret);

const verify = secret => (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new InvalidTokenError();
  }
};

module.exports = {
  sign,
  verify
};
