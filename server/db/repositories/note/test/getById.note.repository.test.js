const noteInstance = {
  get: jest.fn(() => 'note')
};
const findOne = jest.fn(() => noteInstance);
jest.doMock('../../../models/models', () => ({
  Note: {
    findOne
  }
}));

const noteMapper = require('../../../mappers/note.mapper');
const commonMapper = require('../../../mappers/common.mapper');
const getNoteById = require('../getById.note.repository');
const models = require('../../../models/models');
const errors = require('../../../../utils/errors');


const id = 'note id';

it('should query note by id', async () => {
  await getNoteById(id);

  expect(models[noteMapper.Note].findOne).toHaveBeenCalledWith({
    where: {
      [commonMapper.id]: 'note id',
      [noteMapper.deleted]: false
    },
    attributes: [
      commonMapper.id,
      noteMapper.text,
    ]
  });
});

it('should throw NoteNotFoundError if note was not found', async () => {
  models[noteMapper.Note].findOne = jest.fn(() => null);

  await expect(getNoteById(id)).rejects.toBeInstanceOf(errors.NoteNotFoundError);

  models[noteMapper.Note].findOne = findOne;
});

it('should return plain note object', async () => {
  const actual = await getNoteById(id);

  expect(actual).toEqual('note');
  expect(noteInstance.get).toHaveBeenCalledWith({ plain: true });
});
