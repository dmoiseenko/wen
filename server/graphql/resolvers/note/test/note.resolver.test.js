jest.mock('../../common/composeResolvers');

const composeResolvers = require('../../common/composeResolvers');
const baseResolver = require('../../common/base.resolver');
const noteProcessResolver = require('../note.process.resolver');


it('should have proper resolvers composition', () => {
  require('../note.resolver'); // eslint-disable-line global-require
  expect(composeResolvers).toHaveBeenCalledWith([
    baseResolver,
    noteProcessResolver
  ]);
});
