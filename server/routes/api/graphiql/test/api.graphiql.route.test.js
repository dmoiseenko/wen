jest.mock('koa-compose', () => jest.fn(() => 'composition'));
jest.mock('koa-body', () => jest.fn(() => 'koa-body'));
jest.mock(
  '../../../../middlewares/graphiql.middleware.js',
  () => jest.fn(() => 'graphiql middleware')
);

const compose = require('koa-compose');

const route = require('../api.graphiql.route');


const router = {
  get: jest.fn()
};

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  it('should route GET on /api/graphiql', () => {
    route(router);

    expect(router.get).toHaveBeenCalledWith('/api/graphiql', 'composition');
  });

  it('should have proper composition', () => {
    route(router);

    expect(compose).toHaveBeenCalledWith([
      'koa-body',
      'graphiql middleware'
    ]);
  });
} else {
  it('should route GET on /api/graphiql', () => {
    route(router);

    expect(router.get).not.toHaveBeenCalled();
  });
}
