jest.mock(
  '../../db/repositories/note/getNotes.note.repository.js',
  () => jest.fn(() => Promise.resolve('notes'))
);

const noteService = require('../note.service');
const getNotes = require('../../db/repositories/note/getNotes.note.repository.js');

it('should get all notes from repository', async () => {
  const actual = await noteService.getNotes();

  expect(getNotes).toHaveBeenCalledWith();
  expect(actual).toEqual('notes');
});
