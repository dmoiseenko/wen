const models = require('../models');
const userMapper = require('../mappers/user.mapper');
const hashService = require('../../services/hash.service.js');


module.exports = async () => {
  const password = 'password';
  const passwordHash = await hashService.generateHash(password);

  await models[userMapper.User].create({
    firstName: 'John',
    lastName: 'Smith',
    email: 'js@mail.com',
    passwordHash
  });
};
