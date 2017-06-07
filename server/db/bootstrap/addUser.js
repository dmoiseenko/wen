const { User } = require('../models/models');
const hashService = require('../../services/hash.service.js');


module.exports = async () => {
  const password = 'password';
  const passwordHash = await hashService.generateHash(password);

  await User.create({
    firstName: 'John',
    lastName: 'Smith',
    email: 'js@mail.com',
    passwordHash
  });
};
