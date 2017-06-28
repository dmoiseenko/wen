const bootstrap = require('../../../bootstrap/bootstrap.js');
const getNoteById = require('../getById.note.repository.js');


beforeEach(() => bootstrap());

it('should query user by email', async () => {
  const user = await getNoteById(1);

  expect(user).toMatchSnapshot();
});
