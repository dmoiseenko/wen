jest.mock('../../../../services/note.service');

const noteService = require('../../../../services/note.service');
const deleteNoteProcessResolver = require('../deleteNote.process.resolver');


it('should call createNote with provided text and ' +
  'return created note', () => {
  noteService.deleteNoteById.mockReturnValue('deleted note');

  const actual = deleteNoteProcessResolver({}, { id: 1 });

  expect(actual).toEqual('deleted note');
  expect(noteService.deleteNoteById).toHaveBeenCalledWith(1);
});
