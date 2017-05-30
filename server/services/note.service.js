const noteRepository = require('../db/repositories/note.repository');
const pubsub = require('../graphql/pubsub.js');


module.exports.getNotes = () => noteRepository.getNotes();

module.exports.createNote = async (noteText) => {
  const newNote = await noteRepository.createNote(noteText);

  pubsub.publish('noteAdded', newNote);

  return newNote;
};
