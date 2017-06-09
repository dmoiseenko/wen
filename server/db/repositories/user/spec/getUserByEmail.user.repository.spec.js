const bootstrap = require('../../../bootstrap/bootstrap.js');
const getUserByEmail = require('../getUserByEmail.user.repository.js');
const userMapper = require('../../../mappers/user.mapper.js');


beforeEach(() => bootstrap());

it('should query user by email', async () => {
  const user = await getUserByEmail('js@mail.com');
  user[userMapper.passwordHash] = 'password hash';

  expect(user).toMatchSnapshot();
});
