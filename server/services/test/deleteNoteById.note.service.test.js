jest.mock(
  '../../db/repositories/note/deleteNoteById.note.repository.js',
  () => jest.fn(() => Promise.resolve('deleted note'))
);

const noteService = require('../note.service');
const deleteNoteById = require('../../db/repositories/note/deleteNoteById.note.repository.js');


it('should delete note by id', async () => {
  const actual = await noteService.deleteNoteById(1);

  expect(deleteNoteById).toHaveBeenCalledWith(1);
  expect(actual).toEqual('deleted note');
});
