const addNoteValidateResolver = require('../addNote.validate.resolver');
const { NoteValidationError } = require('../../../errors');


describe('addNote.validate.resolver', () => {
  it('should not throw NoteValidationError if note text is not empty string', async () => {
    expect(() => {
      addNoteValidateResolver({}, { text: 'note text' });
    }).not.toThrow(NoteValidationError);
  });

  it('should throw NoteValidationError if note text is empty', async () => {
    expect(() => {
      addNoteValidateResolver({}, { text: '' });
    }).toThrow(NoteValidationError);
  });

  it('should throw NoteValidationError if note text is null', async () => {
    expect(() => {
      addNoteValidateResolver({}, { text: null });
    }).toThrow(NoteValidationError);
  });

  it('should throw NoteValidationError if note text is undefined', async () => {
    expect(() => {
      addNoteValidateResolver({}, { text: undefined });
    }).toThrow(NoteValidationError);
  });
});
