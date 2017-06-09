const { Note } = require('../models/models');

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
  await Note.bulkCreate(notes);
};
