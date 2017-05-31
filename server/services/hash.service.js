const bcrypt = require('bcrypt');


const saltRounds = 10;

module.exports.generateHash = value => bcrypt.hash(value, saltRounds);

module.exports.verifyHash = (value, hash) => bcrypt.compare(value, hash);
