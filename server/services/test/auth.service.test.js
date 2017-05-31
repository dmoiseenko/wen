jest.mock('../hash.service');
jest.mock('../jwt.service');
jest.mock('../../db/repositories/user.repository');
const hashService = require('../hash.service');
const jwtService = require('../jwt.service');
const userRepository = require('../../db/repositories/user.repository');
const authService = require('../auth.service');


describe('auth.service', () => {
  describe('login', () => {
    const user = {
      id: 1,
      passwordHash: '123'
    };
    const email = 'email';
    const password = 'password';
    const token = 'token';

    userRepository.getUserByEmail.mockReturnValue(Promise.resolve(user));
    hashService.verifyHash.mockReturnValue(true);
    jwtService.generateToken.mockReturnValue(token);

    it('should get user by email', async () => {
      await authService.login({ email, password });

      expect(userRepository.getUserByEmail).toHaveBeenCalledWith('email');
    });

    it('should verify password hash', async () => {
      await authService.login({ email, password });

      expect(hashService.verifyHash).toHaveBeenCalledWith('password', '123');
    });

    it('should generate token for authenticated user', async () => {
      await authService.login({ email, password });

      expect(jwtService.generateToken).toHaveBeenCalledWith({ id: 1 });
    });

    it('should return generated token', async () => {
      const actual = await authService.login({ email, password });

      expect(actual).toEqual('token');
    });

    it('should throw InvalidPasswordHashError if hash is not verified', async () => {
      hashService.verifyHash.mockReturnValue(false);

      await expect(authService.login({ email, password })).rejects.toBeInstanceOf(Error);
    });
  });
});
