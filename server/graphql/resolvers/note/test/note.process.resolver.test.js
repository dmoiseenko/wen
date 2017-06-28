jest.mock('../../../../services/note.service.js');

const noteProcessResolver = require('../note.process.resolver');
const noteService = require('../../../../services/note.service.js');

it('should get notes for notes service', () => {
  noteService.getNoteById.mockReturnValue('note');

  const actual = noteProcessResolver({}, { id: 1 });

  expect(actual).toEqual('note');
  expect(noteService.getNoteById).toHaveBeenCalledWith(1);
});
