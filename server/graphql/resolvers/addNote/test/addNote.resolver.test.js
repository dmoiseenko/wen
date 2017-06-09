jest.mock('../../common/composeResolvers');

const composeResolvers = require('../../common/composeResolvers');
const baseResolver = require('../../common/base.resolver');
const addNoteValidateResolver = require('../addNote.validate.resolver');
const addNoteProcessResolver = require('../addNote.process.resolver');


it('should have proper resolvers composition', () => {
  require('../addNote.resolver'); // eslint-disable-line global-require
  expect(composeResolvers).toHaveBeenCalledWith([
    baseResolver,
    addNoteValidateResolver,
    addNoteProcessResolver
  ]);
});
