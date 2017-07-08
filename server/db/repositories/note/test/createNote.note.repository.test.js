const noteMapper = require('../../../mappers/note.mapper');
const { createNoteInstance } = require('../createNote.note.repository');


describe('createNoteInstance', () => {
  it('should call model.create', async () => {
    const noteModel = {
      create: jest.fn()
    };

    createNoteInstance(noteModel)('note text');

    expect(noteModel.create).toHaveBeenCalledWith({
      [noteMapper.text]: 'note text'
    });
  });
});
