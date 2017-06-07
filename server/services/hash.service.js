const bcrypt = require('bcrypt');

const errors = require('../utils/errors');


const saltRounds = 10;

module.exports.generateHash = value => bcrypt.hash(value, saltRounds);

module.exports.verifyHash = (value, hash) => {
  const isVerified = bcrypt.compare(value, hash);

  if (!isVerified) {
    throw new errors.InvalidPasswordHashError();
  }

  return isVerified;
};
