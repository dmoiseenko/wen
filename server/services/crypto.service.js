const crypto = require('crypto');

const config = require('../../common/config');

const algorithm = 'aes-256-ctr';
module.exports.algorithm = algorithm;

module.exports.encrypt = (value) => {
  const cipher = crypto.createCipher(algorithm, config.secret.crypto);
  let encrypted = cipher.update(value, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

module.exports.decrypt = (value) => {
  const decipher = crypto.createDecipher(algorithm, config.secret.crypto);
  let decrypted = decipher.update(value, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};
