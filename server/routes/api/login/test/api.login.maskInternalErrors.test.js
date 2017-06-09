const maskInternalErrors = require('../api.login.maskInternalErrors');
const { LoginError } = require('../../../../utils/errors.js');


it('should re-throw LoginError on any caught error', async () => {
  const next = jest.fn(() => {
    throw new Error();
  });

  await expect(maskInternalErrors({}, next)).rejects.toBeInstanceOf(LoginError);
});
