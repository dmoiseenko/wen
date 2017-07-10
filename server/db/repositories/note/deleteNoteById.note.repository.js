const R = require('ramda');
const { Note } = require('../../models/models');

const commonMapper = require('../../mappers/common.mapper');
const noteMapper = require('../../mappers/note.mapper');
const { NoteNotFoundError } = require('../../../utils/errors');
const getPlainNote = require('../common/getPlainInstance');


const deleteNoteInstance = noteModel => id =>
  noteModel.update(
    {
      [noteMapper.deleted]: true
    },
    {
      where: {
        [commonMapper.id]: id
      },
      returning: true
    }
  );

module.exports.deleteNoteInstance = deleteNoteInstance;

const checkAffectedRows = ([affectedCount, affectedRows]) => {
  if (affectedCount === 0) {
    throw new NoteNotFoundError();
  }

  return affectedRows[0];
};

module.exports.checkAffectedRows = checkAffectedRows;

module.exports.deleteNoteById = id => R.pipeP(
  deleteNoteInstance(Note),
  checkAffectedRows,
  getPlainNote
)(id);

