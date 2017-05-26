jest.mock('../../../../utils/cookie.js');
const cookie = require('../../../../utils/cookie.js');

const response = require('../api.login.response');


describe('api/login', () => {
  describe('response', () => {
    let ctx;

    beforeEach(() => {
      ctx = {
        response: {
          status: 'status',
          body: 'body',
        },
        state: {
          token: 'token'
        }
      };
    });

    it('should set cookie token', async () => {
      await response(ctx);

      expect(cookie.setAuthToken).toHaveBeenCalledWith(ctx, 'token');
    });

    it('should set 200', async () => {
      await response(ctx);

      expect(ctx.response.status).toEqual(200);
    });

    it('should set empty body', async () => {
      await response(ctx);

      expect(ctx.response.body).toEqual({});
    });
  });
});
