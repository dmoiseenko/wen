jest.mock('../../../utils/cookie.js');
jest.mock('../../../services/token.service.js');

const cookie = require('../../../utils/cookie.js');
const jwtService = require('../../../services/token.service.js');
const processMiddleware = require('../auth.process.middleware');


cookie.getAuthToken.mockReturnValue('token');
jwtService.verifyTokenAndReturnUserData.mockReturnValue('userData');
const next = jest.fn();
let ctx;

beforeEach(() => {
  ctx = {
    state: {}
  };
});

it('should get auth token from cookie', async () => {
  await processMiddleware()(ctx, next);

  expect(cookie.getAuthToken).toHaveBeenCalledWith(ctx);
});

it('should verify token and pass user data to middleware context', async () => {
  await processMiddleware()(ctx, next);

  expect(jwtService.verifyTokenAndReturnUserData).toHaveBeenCalledWith('token');
  expect(ctx.state.user).toEqual('userData');
});
