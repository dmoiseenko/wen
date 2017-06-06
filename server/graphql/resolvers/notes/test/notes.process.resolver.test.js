jest.mock('../../../../services/note.service.js');
const noteProcessResolver = require('../notes.process.resolver');
const noteService = require('../../../../services/note.service.js');

describe('notes.resolver', () => {
  it('should get notes for notes service', () => {
    noteService.getNotes.mockReturnValue('notes');

    const actual = noteProcessResolver();

    expect(actual).toEqual('notes');
  });
});
