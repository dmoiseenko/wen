jest.mock('koa-compose', () => jest.fn(() => 'composition'));
jest.mock('koa-body');
const bodyParser = require('koa-body');
const compose = require('koa-compose');

const validate = require('../api.login.validate');
const maskInternalErrors = require('../api.login.maskInternalErrors');
const process = require('../api.login.process');
const response = require('../api.login.response');

const loginRoute = require('../api.login.route');


describe('/api/login', () => {
  describe('route', () => {
    const router = {
      post: jest.fn()
    };

    it('should route POST on /api/login', () => {
      loginRoute(router);

      expect(router.post).toHaveBeenCalledWith('/api/login', 'composition');
    });

    it('should have proper composition', () => {
      loginRoute(router);

      expect(compose).toHaveBeenCalledWith([
        bodyParser(),
        validate,
        maskInternalErrors,
        process,
        response
      ]);
    });
  });
});
