jest.mock('../../../../utils/cookie.js');

const process = require('../api.logout.process');
const cookie = require('../../../../utils/cookie.js');


const ctx = 'ctx';
const next = jest.fn();

it('should clear auth cookies', async () => {
  await process(ctx, next);

  expect(cookie.clearAuthToken).toHaveBeenCalledWith('ctx');
});

it('should call next', async () => {
  await process(ctx, next);

  expect(next).toHaveBeenCalled();
});
