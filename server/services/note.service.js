const R = require('ramda');

const noteRepository = require('../db/repositories/note.repository');
const { publish } = require('../graphql/pubsub.js');


module.exports.getNotes = () => noteRepository.getNotes();

module.exports.createNote = noteText => R.pipeP(
  noteRepository.createNote,
  publish('noteAdded')
)(noteText);

module.exports.getNoteById = id => noteRepository.getNoteById(id);

module.exports.deleteNoteById = id => R.pipeP(
  noteRepository.deleteNoteById,
  publish('noteDeleted')
)(id);
