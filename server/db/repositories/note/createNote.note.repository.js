const R = require('ramda');

const { Note } = require('../../models/models');
const noteMapper = require('../../mappers/note.mapper');
const getPlainNote = require('../common/getPlainInstance');


const createNoteInstance = noteModel => noteText =>
  noteModel.create({
    [noteMapper.text]: noteText
  });

const createNote = noteText => R.pipeP(
  createNoteInstance(Note),
  getPlainNote
)(noteText);

module.exports = {
  createNote,
  createNoteInstance
};
