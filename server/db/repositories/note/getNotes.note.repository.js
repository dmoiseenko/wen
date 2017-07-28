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

const getNotes = () => R.pipeP(
  findAll(Note)
)();

module.exports = {
  findAll,
  getNotes
};
