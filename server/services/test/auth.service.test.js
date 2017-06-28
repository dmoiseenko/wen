jest.mock('../hash.service');
jest.mock('../jwt.service');
jest.mock('../../db/repositories/user/getByEmail.user.repository');

const hashService = require('../hash.service');
const jwtService = require('../jwt.service');
const getUserByEmail = require('../../db/repositories/user/getByEmail.user.repository');
const authService = require('../auth.service');


const user = {
  id: 1,
  passwordHash: '123'
};
const email = 'email';
const password = 'password';

getUserByEmail.mockReturnValue(Promise.resolve(user));
hashService.verifyHash.mockReturnValue(true);
jwtService.generateToken.mockReturnValue('token');

it('should get user by email', async () => {
  await authService.login({ email, password });

  expect(getUserByEmail).toHaveBeenCalledWith('email');
});

it('should verify password hash', async () => {
  await authService.login({ email, password });

  expect(hashService.verifyHash).toHaveBeenCalledWith('password', '123');
});

it('should generate token for authenticated user', async () => {
  const actual = await authService.login({ email, password });

  expect(jwtService.generateToken).toHaveBeenCalledWith({ id: 1 });
  expect(actual).toEqual('token');
});
