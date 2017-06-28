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
    },
    [noteMapper.deleted]: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    getterMethods: {
      plain() {
        return {
          [commonMapper.id]: this[commonMapper.id],
          [noteMapper.text]: this.text
        };
      }
    }
  }
);
