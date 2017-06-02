jest.mock('../../common/composeResolvers');
const composeResolvers = require('../../common/composeResolvers');
const baseResolver = require('../../common/base.resolver');
const meProcessResolver = require('../me.process.resolver');


describe('me.resolver', () => {
  it('should have proper resolvers composition', () => {
    require('../me.resolver'); // eslint-disable-line global-require
    expect(composeResolvers).toHaveBeenCalledWith([
      baseResolver,
      meProcessResolver,
    ]);
  });
});
