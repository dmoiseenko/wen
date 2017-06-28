jest.doMock('../../../models/models', () => ({
  Note: {
    findAll: jest.fn(() => 'all notes'),
  }
}));

const noteMapper = require('../../../mappers/note.mapper');
const commonMapper = require('../../../mappers/common.mapper');
const getNotes = require('../getNotes.note.repository');
const models = require('../../../models/models');


it('should find all notes', async () => {
  const actual = await getNotes();

  expect(models[noteMapper.Note].findAll).toHaveBeenCalledWith({
    raw: true,
    where: {
      [noteMapper.deleted]: false
    },
    attributes: [noteMapper.text, commonMapper.id]
  });
  expect(actual).toEqual('all notes');
});
