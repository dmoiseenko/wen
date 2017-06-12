const bcrypt = require('bcrypt');

const errors = require('../utils/errors');


const saltRounds = 10;

module.exports.saltRounds = saltRounds;

module.exports.generateHash = value => bcrypt.hash(value, saltRounds);

module.exports.verifyHash = async (value, hash) => {
  const isVerified = await bcrypt.compare(value, hash);

  if (!isVerified) {
    throw new errors.InvalidPasswordHashError();
  }

  return isVerified;
};
