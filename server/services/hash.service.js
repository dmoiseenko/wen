const bcrypt = require('bcrypt');

const errors = require('../utils/errors');


const saltRounds = 10;

module.exports.generateHash = value => bcrypt.hash(value, saltRounds);

module.exports.verifyHash = (value, hash) => bcrypt.compare(value, hash)
  .then((res) => {
    if (!res) {
      throw new errors.InvalidPasswordHashError();
    }
    return res;
  });
