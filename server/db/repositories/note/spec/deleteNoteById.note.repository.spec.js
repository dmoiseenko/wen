const bootstrap = require('../../../bootstrap/bootstrap.js');
const { deleteNoteById } = require('../deleteNoteById.note.repository.js');
const { getNotes } = require('../getNotes.note.repository');
const { NoteNotFoundError } = require('../../../../utils/errors');

beforeEach(() => bootstrap());

it('should delete note by id', async () => {
  await deleteNoteById(1);

  const notes = await getNotes();

  expect(notes).toMatchSnapshot();
});

it('should return deleted note', async () => {
  const actual = await deleteNoteById(1);

  expect(actual).toMatchSnapshot();
});

it('should throw NoteNotFoundError if note wasn\'t found', async () => {
  await expect(deleteNoteById(12)).rejects.toBeInstanceOf(NoteNotFoundError);
});
