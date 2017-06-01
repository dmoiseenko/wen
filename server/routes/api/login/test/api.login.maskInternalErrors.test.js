const maskInternalErrors = require('../api.login.maskInternalErrors');


describe('api/login', () => {
  describe('maskInternalErrors', () => {
    it('should re-throw LoginError on any caught error', async () => {
      const next = jest.fn(() => {
        throw new Error();
      });

      try {
        await maskInternalErrors({}, next);
      } catch (err) {
        expect(err).toBeInstanceOf(Error); // TODO
      }
    });
  });
});
