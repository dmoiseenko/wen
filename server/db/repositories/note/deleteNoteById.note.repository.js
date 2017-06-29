const { Note } = require('../../models/models');
const commonMapper = require('../../mappers/common.mapper');
const noteMapper = require('../../mappers/note.mapper');

const errors = require('../../../utils/errors');


module.exports = async (id) => {
  const [affectedCount, affectedRows] = await Note.update(
    { [noteMapper.deleted]: true },
    {
      where: {
        [commonMapper.id]: id
      },
      attributes: [
        commonMapper.id,
        noteMapper.text,
      ],
      returning: true
    }
  );

  if (affectedCount === 0) {
    throw new errors.NoteNotFoundError();
  }

  const updatedNoteInstance = affectedRows[0];

  return updatedNoteInstance.get('plain');
};

