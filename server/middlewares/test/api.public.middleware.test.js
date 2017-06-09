jest.mock('../../utils/setupRoutes.js', () => jest.fn(() => 'composition'));

const setupRoutes = require('../../utils/setupRoutes.js');
const middleware = require('../api.public.middleware');
const login = require('../../routes/api/login/api.login.route');
const logout = require('../../routes/api/logout/api.logout.route');


it('should have proper composition', () => {
  const actual = middleware();

  expect(setupRoutes).toHaveBeenCalledWith([
    login,
    logout
  ]);
  expect(actual).toEqual('composition');
});
