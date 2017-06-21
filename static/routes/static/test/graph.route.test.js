jest.mock('../../../middlewares/main.ssr.middleware', () => () => 'serveMiddleware');

const route = require('../graph.route');


const router = {
  get: jest.fn().mockReturnValue('route')
};

it('should have proper middleware composition', () => {
  route(router);

  const actual = route(router);

  expect(router.get).toHaveBeenCalledWith('/graph', 'serveMiddleware');
  expect(actual).toEqual('route');
});
