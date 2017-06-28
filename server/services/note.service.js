const createNote = require('../db/repositories/note/createNote.note.repository');
const getNotes = require('../db/repositories/note/getNotes.note.repository');
const getNoteById = require('../db/repositories/note/getById.note.repository');

const pubsub = require('../graphql/pubsub.js');


module.exports.getNotes = () => getNotes();

module.exports.createNote = async (noteText) => {
  const newNote = await createNote(noteText);

  pubsub.publish('noteAdded', newNote);

  return newNote;
};

module.exports.getNoteById = id => getNoteById(id);
