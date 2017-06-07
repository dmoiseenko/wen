const { Note } = require('../../models/models');
const noteMapper = require('../../mappers/note.mapper');


module.exports = async (noteText) => {
  const newNote = await Note.create({
    [noteMapper.text]: noteText
  });

  return newNote.get('plain');
};
