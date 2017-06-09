const createNote = require('../createNote.note.repository');
const bootstrap = require('../../../bootstrap/bootstrap.js');


beforeEach(() => bootstrap());

it('should add new note', async () => {
  const actual = await createNote('note text');

  expect(actual).toMatchSnapshot();
});
