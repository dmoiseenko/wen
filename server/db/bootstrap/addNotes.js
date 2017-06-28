const { Note } = require('../models/models');

const notes = [
  {
    text: 'Well done is better than well said. Benjamin Franklin'
  },
  {
    text: 'Look deep into nature, and then you will understand everything better. Albert Einstein'
  },
  {
    text: 'Be yourself; everyone else is already taken. Oscar Wilde'
  }
];

module.exports = async () => {
  await Note.bulkCreate(notes);
};
