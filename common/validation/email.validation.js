const validator = require('validator');


module.exports = (email) => {
  if (!email) {
    throw new Error('Invalid email');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Invalid email');
  }
};
