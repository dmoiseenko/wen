const models = require('../models');
const noteMapper = require('../mappers/note.mapper');

const notes = [
  {
    text: 'asd1'
  },
  {
    text: 'asd2'
  },
  {
    text: 'asd3'
  }
];

module.exports = async () => {
  await models[noteMapper.Note].bulkCreate(notes);
};
