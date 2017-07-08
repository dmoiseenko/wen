const { getNotes } = require('../getNotes.note.repository');
const bootstrap = require('../../../bootstrap/bootstrap.js');


beforeEach(() => bootstrap());

it('should get all notes', async () => {
  const actual = await getNotes();

  expect(actual).toMatchSnapshot();
});
