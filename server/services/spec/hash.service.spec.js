const hashService = require('../hash.service.js');


it('should verify generated hash', async () => {
  const data = 'data';

  const hash = await hashService.generateHash(data);
  const actual = await hashService.verifyHash(data, hash);

  expect(actual).toEqual(true);
});
