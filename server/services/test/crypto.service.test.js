const cryptoService = require('../crypto.service.js');


describe('crypto.service', () => {
  describe('encrypt decrypt', () => {
    it('should encrypt and decrypt data', () => {
      const data = 'data';

      const encrypted = cryptoService.encrypt(data);
      const actual = cryptoService.decrypt(encrypted);

      expect(actual).toEqual('data');
    });
  });

  describe.skip('generateToken verifyToken', () => {
    it('should generate token and verify it', async () => {
      const data = 'data';

      const token = await cryptoService.generateToken(data);
      const actual = await cryptoService.verifyToken(token);

      expect(actual).toEqual('data');
    });
  });
});

describe.skip('generateHash verifyHash', () => {
  it('should verify generated hash', async () => {
    const data = 'data';

    const hash = await cryptoService.generateHash(data);
    const actual = await cryptoService.verifyHash(data, hash);

    expect(actual).toBe(true);
  });
});
