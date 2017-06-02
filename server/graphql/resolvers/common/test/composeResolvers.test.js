jest.mock('apollo-resolvers');
const apolloErrors = require('apollo-resolvers');
const composeResolvers = require('../composeResolvers');


describe('composeResolvers', () => {
  const createResolver = jest.fn();
  apolloErrors.createResolver.mockReturnValue({
    createResolver
  });

  it('should pass resolver to createResolver if resolver is function', () => {
    const resolver = () => {
    };
    const resolvers = [resolver];

    composeResolvers(resolvers);

    expect(apolloErrors.createResolver).toHaveBeenCalledTimes(1);
    expect(apolloErrors.createResolver).toHaveBeenCalledWith();

    expect(createResolver).toHaveBeenCalledTimes(1);
    expect(createResolver).toHaveBeenCalledWith(resolver);
  });

  it('should pass resolver to createResolver ' +
    'if resolver is array with two elements', () => {
    const resolver = [
      () => {
      },
      () => {
      }
    ];
    const resolvers = [resolver];

    composeResolvers(resolvers);

    expect(apolloErrors.createResolver).toHaveBeenCalledTimes(1);
    expect(apolloErrors.createResolver).toHaveBeenCalledWith();

    expect(createResolver).toHaveBeenCalledTimes(1);
    expect(createResolver).toHaveBeenCalledWith(resolver[0], resolver[1]);
  });

  it('should pass resolver to createResolver ' +
    'if resolver is array with two elements', () => {
    const resolver = [
      () => {
      },
      () => {
      }
    ];
    const resolvers = [resolver];

    composeResolvers(resolvers);

    expect(apolloErrors.createResolver).toHaveBeenCalledTimes(1);
    expect(apolloErrors.createResolver).toHaveBeenCalledWith();

    expect(createResolver).toHaveBeenCalledTimes(1);
    expect(createResolver).toHaveBeenCalledWith(resolver[0], resolver[1]);
  });

  it('should throw Error if resolver is null', () => {
    const resolver = [];
    const resolvers = [resolver];

    expect(() => {
      composeResolvers(resolvers);
    }).toThrow('Invalid resolver');
  });

  it('should throw Error if resolver is undefined', () => {
    const resolver = undefined;
    const resolvers = [resolver];

    expect(() => {
      composeResolvers(resolvers);
    }).toThrow('Invalid resolver');
  });
});
