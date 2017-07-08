const noteMapper = require('../../../mappers/note.mapper');
const commonMapper = require('../../../mappers/common.mapper');
const { deleteNoteInstance, checkAffectedRows } = require('../deleteNoteById.note.repository');
const errors = require('../../../../utils/errors');


describe('deleteNoteInstance', () => {
  it('should delete note by id', () => {
    const noteModel = {
      update: jest.fn()
    };

    deleteNoteInstance(noteModel)(12);

    expect(noteModel.update).toHaveBeenCalledWith(
      { [noteMapper.deleted]: true },
      {
        where: {
          [commonMapper.id]: 12
        },
        returning: true
      }
    );
  });
});

describe('checkAffectedRows', () => {
  it('should throw NoteNotFoundError if affectedCount is zero', () => {
    expect(() => checkAffectedRows([0, []])).toThrow(errors.NoteNotFoundError);
  });

  it('should first affected instance', () => {
    const actual = checkAffectedRows([1, ['instance']]);

    expect(actual).toEqual('instance');
  });
});

