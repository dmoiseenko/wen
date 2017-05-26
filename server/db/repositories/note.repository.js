const models = require('../models');
const noteMapper = require('../mappers/note.mapper');


module.exports.getNotes = () => models[noteMapper.Note].findAll();

module.exports.createNote = async (noteText) => {
  const newNote = await models[noteMapper.Note].create({
    [noteMapper.text]: noteText
  });

  return newNote.get({ plain: true });
};
