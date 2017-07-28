const R = require('ramda');

const noteRepository = require('../db/repositories/note.repository');
const { publish } = require('../graphql/pubsub.js');


const getNotes = () => noteRepository.getNotes();

const createNote = noteText => R.pipeP(
  noteRepository.createNote,
  publish('noteAdded')
)(noteText);

const getNoteById = id => noteRepository.getNoteById(id);

const deleteNoteById = id => R.pipeP(
  noteRepository.deleteNoteById,
  publish('noteDeleted')
)(id);

module.exports = {
  getNotes,
  createNote,
  getNoteById,
  deleteNoteById
};
