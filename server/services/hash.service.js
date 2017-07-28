const bcrypt = require('bcrypt');

const errors = require('../utils/errors');


const saltRounds = 10;

const generateHash = value => bcrypt.hash(value, saltRounds);

const verifyHash = async (value, hash) => {
  const isVerified = await bcrypt.compare(value, hash);

  if (!isVerified) {
    throw new errors.InvalidPasswordHashError();
  }

  return isVerified;
};

module.exports = {
  saltRounds,
  generateHash,
  verifyHash
};
