jest.mock('../../../../services/note.service');
const noteService = require('../../../../services/note.service');
const addNoteProcessResolver = require('../addNote.process.resolver');


describe('addNoteProcessResolver', () => {
  it('should call createNote with provided text and ' +
    'return created note', () => {
    noteService.createNote.mockReturnValue('createdNote');

    const actual = addNoteProcessResolver({}, { text: '1' });

    expect(actual).toEqual('createdNote');
    expect(noteService.createNote).toHaveBeenCalledWith('1');
  });
});
