const bootstrap = require('../../../bootstrap/bootstrap.js');
const { getNoteById } = require('../getNoteById.note.repository.js');
const { NoteNotFoundError } = require('../../../../utils/errors');


beforeEach(() => bootstrap());

it('should get note by id', async () => {
  const user = await getNoteById(1);

  expect(user).toMatchSnapshot();
});

it('should throw NoteNotFoundError if note wasn\'t found', async () => {
  await expect(getNoteById(100)).rejects.toBeInstanceOf(NoteNotFoundError);
});
