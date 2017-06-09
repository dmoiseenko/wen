jest.mock('../../services/error.service.js');

const errorService = require('../../services/error.service.js');
const middleware = require('../error.middleware');


const error = new Error();
const next = () => {
  throw error;
};
let ctx;

errorService.handleError.mockReturnValue({
  status: 'status',
  message: 'message'
});

beforeEach(() => {
  ctx = {
    app: {
      emit: jest.fn()
    },
    response: {
      status: '',
      body: ''
    }
  };
});

it('should pass error to error service', async () => {
  await middleware()(ctx, next);

  expect(errorService.handleError).toHaveBeenCalledWith(error);
});

it('should set response status and error message', async () => {
  await middleware()(ctx, next);

  expect(ctx.response.status).toEqual('status');
  expect(ctx.response.body).toEqual({ error: 'message' });
});

it('should emit error', async () => {
  await middleware()(ctx, next);

  expect(ctx.app.emit).toHaveBeenCalledWith('error', error);
});
