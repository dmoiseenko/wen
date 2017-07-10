const R = require('ramda');

const { Note } = require('../../models/models');
const noteMapper = require('../../mappers/note.mapper');
const commonMapper = require('../../mappers/common.mapper');


const findAll = noteModel => () =>
  noteModel.findAll({
    where: {
      [noteMapper.deleted]: false
    },
    raw: true,
    attributes: [noteMapper.text, commonMapper.id]
  });

module.exports.findAll = findAll;

module.exports.getNotes = () => R.pipeP(
  findAll(Note)
)();
