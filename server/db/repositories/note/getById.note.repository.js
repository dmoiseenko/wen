const { Note } = require('../../models/models');
const noteMapper = require('../../mappers/note.mapper');
const commonMapper = require('../../mappers/common.mapper');


const errors = require('../../../utils/errors');


module.exports = async (id) => {
  const noteInstance = await Note
    .findOne({
      where: {
        [commonMapper.id]: id,
        [noteMapper.deleted]: false
      },
      attributes: [
        commonMapper.id,
        noteMapper.text,
      ]
    });

  if (!noteInstance) {
    throw new errors.NoteNotFoundError();
  }

  return noteInstance.get({ plain: true });
};

