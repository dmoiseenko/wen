const noteMapper = require('../../../mappers/note.mapper');
const commonMapper = require('../../../mappers/common.mapper');
const { findNoteInstance } = require('../getNoteById.note.repository');


describe('findNoteInstance', () => {
  it('should query note by id', () => {
    const noteModel = {
      findOne: jest.fn()
    };

    findNoteInstance(noteModel)(2);

    expect(noteModel.findOne).toHaveBeenCalledWith({
      where: {
        [commonMapper.id]: 2,
        [noteMapper.deleted]: false
      }
    });
  });
});
