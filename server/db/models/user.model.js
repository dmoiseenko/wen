const userMapper = require('../mappers/user.mapper');
const commonMapper = require('../mappers/common.mapper');


module.exports = (sequelize, DataTypes) => sequelize.define(
  userMapper.User,
  {
    [commonMapper.id]: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    [userMapper.fistName]: {
      type: DataTypes.STRING
    },
    [userMapper.lastName]: {
      type: DataTypes.STRING
    },
    [userMapper.email]: {
      type: DataTypes.STRING
    },
    [userMapper.passwordHash]: {
      type: DataTypes.STRING
    }
  });
