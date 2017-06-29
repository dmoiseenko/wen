const { Note } = require('../../models/models');
const noteMapper = require('../../mappers/note.mapper');
const commonMapper = require('../../mappers/common.mapper');


module.exports = () => Note.findAll({
  where: {
    [noteMapper.deleted]: false
  },
  raw: true,
  attributes: [noteMapper.text, commonMapper.id]
});
