jest.mock('../../../../services/note.service');
const noteService = require('../../../../services/note.service');
const addNoteProcessResolver = require('../addNote.process.resolver');


describe('addNoteProcessResolver', () => {
  it('should call createNote with provided text', () => {
    addNoteProcessResolver({}, { text: '1' });

    expect(noteService.createNote).toHaveBeenCalledWith('1');
  });
});
