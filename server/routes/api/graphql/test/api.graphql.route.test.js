jest.mock('koa-compose', () => jest.fn(() => 'composition'));
jest.mock('koa-body', () => jest.fn(() => 'koa-body'));
jest.mock(
  '../../../../middlewares/graphql.middleware.js',
  () => jest.fn(() => 'graphql middleware')
);

const compose = require('koa-compose');

const route = require('../api.graphql.route');


const router = {
  post: jest.fn()
};

it('should route POST on /api/graphql', () => {
  route(router);

  expect(router.post).toHaveBeenCalledWith('/api/graphql', 'composition');
});

it('should have proper composition', () => {
  route(router);

  expect(compose).toHaveBeenCalledWith([
    'koa-body',
    'graphql middleware'
  ]);
});
