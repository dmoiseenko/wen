jest.mock('../../../../services/auth.service.js');
const authService = require('../../../../services/auth.service.js');

const process = require('../api.login.process');


describe('api/login', () => {
  describe('process', () => {
    let ctx;
    let next;

    beforeEach(() => {
      jest.clearAllMocks();
      next = jest.fn();
      ctx = {
        request: {
          body: 'body'
        },
        state: {}
      };
      authService.login.mockReturnValue('token');
    });

    it('should get login token from authService ', async () => {
      await process(ctx, next);

      expect(authService.login).toHaveBeenCalledWith('body');
    });

    it('should pass token to cxt', async () => {
      await process(ctx, next);

      expect(ctx.state.token).toEqual('token');
    });

    it('should call next', async () => {
      await process(ctx, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
