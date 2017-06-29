const noteInstance = {
  get: jest.fn(() => 'note')
};
const update = jest.fn(() => Promise.resolve([1, [noteInstance]]));
jest.doMock('../../../models/models', () => ({
  Note: {
    update
  }
}));

const noteMapper = require('../../../mappers/note.mapper');
const commonMapper = require('../../../mappers/common.mapper');
const deleteNoteById = require('../deleteNoteById.note.repository');
const models = require('../../../models/models');
const errors = require('../../../../utils/errors');


const id = 'note id';

it('should delete note by id', async () => {
  await deleteNoteById(id);

  expect(models[noteMapper.Note].update).toHaveBeenCalledWith(
    { [noteMapper.deleted]: true },
    {
      where: {
        [commonMapper.id]: id
      },
      attributes: [
        commonMapper.id,
        noteMapper.text
      ],
      returning: true
    }
  );
});

it('should throw NoteNotFoundError if note was not found', async () => {
  models[noteMapper.Note].update = jest.fn(() => [0, []]);

  await expect(deleteNoteById(id)).rejects.toBeInstanceOf(errors.NoteNotFoundError);

  models[noteMapper.Note].destroy = update;
});
