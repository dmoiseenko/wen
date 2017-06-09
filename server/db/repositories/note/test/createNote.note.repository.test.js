const createdNoteInstance = {
  get: jest.fn(() => 'new note')
};
jest.doMock('../../../models/models', () => ({
  Note: {
    create: jest.fn(() => createdNoteInstance)
  }
}));

const noteMapper = require('../../../mappers/note.mapper');
const createNote = require('../createNote.note.repository');
const models = require('../../../models/models');


it('should create note', async () => {
  await createNote('note text');

  expect(models[noteMapper.Note].create).toHaveBeenCalledWith({
    [noteMapper.text]: 'note text'
  });
});

it('should return plain note', async () => {
  const actual = await createNote('note text');

  expect(createdNoteInstance.get).toHaveBeenCalledWith('plain');
  expect(actual).toEqual('new note');
});
