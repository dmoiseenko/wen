const R = require('ramda');
const { Note } = require('../../models/models');

const noteMapper = require('../../mappers/note.mapper');
const commonMapper = require('../../mappers/common.mapper');
const { NoteNotFoundError } = require('../../../utils/errors');
const getPlainNote = require('../common/getPlainInstance');
const throwIfNoInstance = require('../common/throwIfNoInstance');


const findNoteInstance = noteModel => id =>
  noteModel.findOne({
    where: {
      [commonMapper.id]: id,
      [noteMapper.deleted]: false
    }
  });

module.exports.findNoteInstance = findNoteInstance;

module.exports.getNoteById = id => R.pipeP(
  findNoteInstance(Note),
  throwIfNoInstance(new NoteNotFoundError()),
  getPlainNote
)(id);

