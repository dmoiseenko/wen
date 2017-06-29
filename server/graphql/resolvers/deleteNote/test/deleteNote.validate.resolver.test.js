const deleteNoteValidateResolver = require('../deleteNote.validate.resolver');
const { NoteValidationError } = require('../../../errors');


it('should not throw NoteValidationError if note id is not empty string', async () => {
  expect(() => {
    deleteNoteValidateResolver({}, { id: '1' });
  }).not.toThrow(NoteValidationError);
});

it('should throw NoteValidationError if note text is empty', async () => {
  expect(() => {
    deleteNoteValidateResolver({}, { id: '' });
  }).toThrow(NoteValidationError);
});

it('should throw NoteValidationError if note text is null', async () => {
  expect(() => {
    deleteNoteValidateResolver({}, { id: null });
  }).toThrow(NoteValidationError);
});

it('should throw NoteValidationError if note text is undefined', async () => {
  expect(() => {
    deleteNoteValidateResolver({}, { id: undefined });
  }).toThrow(NoteValidationError);
});
