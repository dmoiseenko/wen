const jwtService = require('../jwt.service.js');


describe('crypto.service', () => {
  describe('generateToken verifyToken', () => {
    it('should generate token and verify it', async () => {
      const data = 'data';

      const token = await jwtService.generateToken(data);
      const actual = await jwtService.verifyToken(token);

      expect(actual).toEqual('data');
    });

    it('should throw InvalidTokenError if token is invalid', async () => {
      try {
        await jwtService.verifyToken('token');
      } catch (err) {
        expect(err.name).toEqual('InvalidTokenError');
      }
    });
  });
});
