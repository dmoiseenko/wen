const bootstrap = require('../../../bootstrap/bootstrap.js');
const getUserById = require('../getUserById.user.repository.js');
const userMapper = require('../../../mappers/user.mapper.js');


beforeEach(() => bootstrap());

it('should query user by email', async () => {
  const user = await getUserById(1);
  user[userMapper.passwordHash] = 'password hash';

  expect(user).toMatchSnapshot();
});
