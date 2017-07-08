const { createNote } = require('../createNote.note.repository');
const { getNotes } = require('../getNotes.note.repository');
const bootstrap = require('../../../bootstrap/bootstrap.js');


beforeEach(() => bootstrap());

it('should add new note', async () => {
  await createNote('note text');

  const actual = await getNotes();

  expect(actual).toMatchSnapshot();
});

it('should return new note', async () => {
  const actual = await createNote('note text');

  expect(actual).toMatchSnapshot();
});
