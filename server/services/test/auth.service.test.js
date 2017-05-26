jest.mock('../hash.service');
jest.mock('../jwt.service');
jest.mock('../../db/repositories/user.repository');
const hashService = require('../hash.service');
const jwtService = require('../jwt.service');
const userRepository = require('../../db/repositories/user.repository');
const authService = require('../auth.service');


describe('auth.service', () => {
  describe('login', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    const user = {
      passwordHash: '123'
    };
    const email = 'email';
    const password = 'password';
    const token = 'token';

    userRepository.getUserByEmail.mockReturnValue(Promise.resolve(user));
    jwtService.generateToken.mockReturnValue(token);

    test('should get user by email', async () => {
      await authService.login({ email, password });

      expect(userRepository.getUserByEmail).toHaveBeenCalledWith(email);
    });

    it('should verify password hash', async () => {
      await authService.login({ email, password });

      expect(hashService.verifyHash).toHaveBeenCalledWith(password, user.passwordHash);
    });

    it('should generate token for authenticated user', async () => {
      const actual = await authService.login({ email, password });

      expect(actual).toEqual(token);
    });
  });
});
