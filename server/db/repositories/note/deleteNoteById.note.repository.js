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

const checkAffectedRows = ([affectedCount, affectedRows]) => {
  if (affectedCount === 0) {
    throw new NoteNotFoundError();
  }

  return affectedRows[0];
};

const deleteNoteById = id => R.pipeP(
  deleteNoteInstance(Note),
  checkAffectedRows,
  getPlainNote
)(id);

module.exports = {
  deleteNoteInstance,
  checkAffectedRows,
  deleteNoteById
};
