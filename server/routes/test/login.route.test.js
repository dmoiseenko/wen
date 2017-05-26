const bodyParser = require('koa-body');

const loginRoute = require('../api/api.login.route');


describe('/api/login', () => {
  describe('middlewares', () => {
    it('should have proper composition', () => {
      expect(loginRoute.middlewares).toEqual([
        bodyParser(),
        loginRoute.validate(),
        loginRoute.processErrors(),
        loginRoute.process(),
        loginRoute.response()
      ]);
    });
  });

  describe('route', () => {
    it('should', () => {
      const router = {
        post: expect.createSpy().andReturn('route')
      };
      const compose = expect.createSpy().andReturn('composition');

      const actual = loginRoute.route(router, compose);

      expect(actual).toEqual('route');
      expect(compose).toHaveBeenCalledWith(loginRoute.middlewares);
      expect(router.post).toHaveBeenCalledWith('/api/login', 'composition');
    });
  });

  describe('validate', () => {
    it('should call validateLogin with request body', () => {
      const validateLoginInput = expect.createSpy();
      const next = expect.createSpy();
      const ctx = {
        request: {
          body: 'body'
        }
      };

      loginRoute.validate(validateLoginInput)(ctx, next);

      expect(validateLoginInput).toHaveBeenCalledWith('body');
      expect(next).toHaveBeenCalled();
    });
  });

  describe('process', () => {
    it('should call login with request body and pass result to ctx.state', async () => {
      const login = expect.createSpy().andReturn('result');
      const next = expect.createSpy();
      const ctx = {
        request: {
          body: 'body'
        },
        state: {}
      };

      await loginRoute.process(login)(ctx, next);

      expect(login).toHaveBeenCalledWith('body');
      expect(ctx.state.token).toEqual('result');
      expect(next).toHaveBeenCalled();
    });
  });

  describe('maskInternalErrors', () => {
    it('should call maskErrors with next', async () => {
      const loginErrors = expect.createSpy();
      const next = expect.createSpy();

      await loginRoute.processErrors(loginErrors)({}, next);

      expect(loginErrors).toHaveBeenCalledWith(next);
    });
  });

  describe('response', () => {
    it('should response with 200 code and empty body', () => {
      const setAuthToken = expect.createSpy();
      const ctx = {
        state: {
          token: 'token'
        },
        response: {}
      };

      loginRoute.response(setAuthToken)(ctx);

      expect(ctx.response.status).toEqual(200);
      expect(ctx.response.body).toEqual({});
    });
  });
});
