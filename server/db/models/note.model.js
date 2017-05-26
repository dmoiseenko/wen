const noteMapper = require('../mappers/note.mapper');
const commonMapper = require('../mappers/common.mapper');


module.exports = (sequelize, DataTypes) => sequelize.define(
  noteMapper.Note,
  {
    [commonMapper.id]: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    [noteMapper.text]: {
      type: DataTypes.STRING
    }
  }
);
