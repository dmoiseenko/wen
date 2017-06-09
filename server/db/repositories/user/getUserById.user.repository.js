const { User } = require('../../models/models');
const userMapper = require('../../mappers/user.mapper');
const commonMapper = require('../../mappers/common.mapper');
const errors = require('../../../utils/errors');


module.exports = async (id) => {
  const userInstance = await User
    .findOne({
      where: {
        [commonMapper.id]: id
      },
      attributes: [
        commonMapper.id,
        userMapper.email,
        userMapper.lastName,
        userMapper.passwordHash,
        userMapper.fistName
      ]
    });

  if (!userInstance) {
    throw new errors.UserNotFoundError();
  }

  return userInstance.get({ plain: true });
};

