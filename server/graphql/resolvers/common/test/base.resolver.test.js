const { createError } = require('apollo-errors');

const baseResolver = require('../base.resolver');
const { UnknownError } = require('../../../errors');


it('should return null as result', () => {
  expect(baseResolver[0]).toEqual(null);
});

it('should return apollo error if apollo error was passed', () => {
  const ApolloError = createError('SomeError', {
    message: 'some error'
  });

  const error = new ApolloError();

  expect(baseResolver[1]({}, {}, {}, error)).toEqual(error);
});

it('should return UnknownError error if no apollo error was passed', () => {
  const error = new Error();

  expect(baseResolver[1]({}, {}, {}, error)).toBeInstanceOf(UnknownError);
});
