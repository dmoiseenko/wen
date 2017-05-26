const maskInternalErrors = require('../api.login.maskInternalErrors');
const { LoginError } = require('../../../../utils/errors');


describe('api/login', () => {
  describe('maskInternalErrors', () => {
    it('should re-throw LoginError on any caught error', async () => {
      const next = jest.fn(() => {
        throw new Error();
      });

      try {
        await
        maskInternalErrors({}, next);
      } catch (err) {
        expect(err.constructor).toEqual(LoginError);
      }
    });
  });
});
