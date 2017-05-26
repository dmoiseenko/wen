const noteRepository = require('../db/repositories/note.repository');
const pubsub = require('../graphql/pubsub.js');


module.exports.getNotes = () => noteRepository.getNotes();

module.exports.createNote = async (
  noteText,
  createNote = noteRepository.createNote,
  publish = pubsub.publish
) => {
  const newNote = await createNote(noteText);

  publish('noteAdded', newNote);

  return newNote;
};
