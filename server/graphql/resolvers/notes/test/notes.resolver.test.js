jest.mock('../../common/composeResolvers');
const composeResolvers = require('../../common/composeResolvers');
const baseResolver = require('../../common/base.resolver');
const notesProcessResolver = require('../notes.process.resolver');


describe('me.resolver', () => {
  it('should have proper resolvers composition', () => {
    require('../notes.resolver'); // eslint-disable-line global-require
    expect(composeResolvers).toHaveBeenCalledWith([
      baseResolver,
      notesProcessResolver,
    ]);
  });
});
