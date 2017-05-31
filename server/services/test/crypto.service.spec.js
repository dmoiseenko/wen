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
});
