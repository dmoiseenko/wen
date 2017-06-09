jest.mock('koa-compose', () => jest.fn(() => 'composition'));
jest.mock('../auth.error.middleware', () => jest.fn(() => 'error'));
jest.mock('../auth.process.middleware', () => jest.fn(() => 'process'));

const middleware = require('../auth.middleware');
const compose = require('koa-compose');

const error = require('../auth.error.middleware');
const process = require('../auth.process.middleware');


it('should have proper composition', () => {
  const noAuthMiddleware = jest.fn();

  const actual = middleware(noAuthMiddleware);

  expect(actual).toEqual('composition');
  expect(error).toHaveBeenCalledWith(noAuthMiddleware);
  expect(compose).toHaveBeenCalledWith([
    error(noAuthMiddleware),
    process(),
  ]);
});
