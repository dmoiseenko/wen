jest.mock('../../../middlewares/main.ssr.middleware', () => () => 'serveMiddleware');

const route = require('../index.route');


const router = {
  get: jest.fn().mockReturnValue('route')
};

it('should have proper middleware composition', () => {
  route(router);

  const actual = route(router);

  expect(router.get).toHaveBeenCalledWith('/', 'serveMiddleware');
  expect(actual).toEqual('route');
});
