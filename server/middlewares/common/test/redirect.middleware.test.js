const middleware = require('../redirect.middleware.js');


it('should redirect to provided url', () => {
  const ctx = {
    redirect: jest.fn()
  };

  middleware('url')(ctx);

  expect(ctx.redirect).toHaveBeenCalledWith('url');
});
