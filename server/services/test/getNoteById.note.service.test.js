jest.mock(
  '../../db/repositories/note/getById.note.repository.js',
  () => jest.fn(() => Promise.resolve('note'))
);

const noteService = require('../note.service');
const getNoteById = require('../../db/repositories/note/getById.note.repository.js');


it('should get note by id', async () => {
  const actual = await noteService.getNoteById(1);

  expect(getNoteById).toHaveBeenCalledWith(1);
  expect(actual).toEqual('note');
});
