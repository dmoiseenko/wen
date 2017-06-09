const errorMiddleware = require('../auth.error.middleware');
const errors = require('../../../utils/errors');


it('should call noAuthMiddleware if error is InvalidTokenError', () => {
  const next = jest.fn(() => {
    throw new errors.InvalidTokenError();
  });
  const noAuthMiddleware = jest.fn();

  errorMiddleware(noAuthMiddleware)({}, next);

  expect(noAuthMiddleware).toHaveBeenCalledWith({}, next);
});

it('should re-throw error if error is not InvalidTokenError', async () => {
  const error = new Error();
  const next = jest.fn(() => {
    throw error;
  });
  const noAuthMiddleware = jest.fn();

  await expect(errorMiddleware(noAuthMiddleware)({}, next)).rejects.toEqual(error);
});
