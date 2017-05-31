const models = require('../models');
const userMapper = require('../mappers/user.mapper');
const commonMapper = require('../mappers/common.mapper');
const errors = require('../../utils/errors');


module.exports.getUserByEmail = async (email) => {
  const userInstance = await models[userMapper.User]
    .findOne({
      where: {
        [userMapper.email]: email
      }
    });

  if (!userInstance) {
    throw new errors.UserNotFoundError();
  }

  console.log(userInstance);

  return userInstance.get({ plain: true });
};

module.exports.getUserById = async (id) => {
  const userInstance = await models[userMapper.User]
    .findOne({
      where: {
        [commonMapper.id]: id
      }
    });

  if (!userInstance) {
    throw new errors.UserNotFoundError();
  }

  return userInstance.get({ plain: true });
};

