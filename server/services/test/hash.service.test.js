jest.mock('bcrypt');

const service = require('../hash.service');
const bcrypt = require('bcrypt');
const errors = require('../../utils/errors');


describe('verifyHash', () => {
  bcrypt.compare.mockReturnValue(true);
  const value = 'value';
  const hash = 'hash';

  it('should compare provided value with hash', async () => {
    await service.verifyHash(value, hash);

    expect(bcrypt.compare).toHaveBeenCalledWith('value', 'hash');
  });

  it('should return true if value does get verified', async () => {
    const actual = await service.verifyHash(value, hash);

    expect(actual).toEqual(true);
  });

  it('should throw InvalidPasswordHashError if value does not get verified', async () => {
    bcrypt.compare.mockReturnValue(false);

    await expect(service.verifyHash(
      value,
      hash
    )).rejects.toBeInstanceOf(errors.InvalidPasswordHashError);
  });
});
