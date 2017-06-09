jest.mock('koa-compose', () => jest.fn(() => 'composition'));
jest.mock('../../../../middlewares/common/redirect.middleware.js', () => jest.fn(() => 'redirect'));
const compose = require('koa-compose');

const redirectMiddleware = require('../../../../middlewares/common/redirect.middleware.js');
const process = require('../api.logout.process');
const logoutRoute = require('../api.logout.route');


const router = {
  get: jest.fn()
};

it('should route GET on /api/logout', () => {
  logoutRoute(router);

  expect(router.get).toHaveBeenCalledWith('/api/logout', 'composition');
});

it('should redirect to /login', () => {
  logoutRoute(router);

  expect(redirectMiddleware).toHaveBeenCalledWith('/login');
});

it('should have proper composition', () => {
  logoutRoute(router);

  expect(compose).toHaveBeenCalledWith([
    process,
    'redirect'
  ]);
});
