jest.mock('../../common/composeResolvers');

const composeResolvers = require('../../common/composeResolvers');
const baseResolver = require('../../common/base.resolver');
const deletedNoteValidateResolver = require('../deleteNote.validate.resolver');
const deletedNoteProcessResolver = require('../deleteNote.process.resolver');


it('should have proper resolvers composition', () => {
  require('../deleteNote.resolver'); // eslint-disable-line global-require
  expect(composeResolvers).toHaveBeenCalledWith([
    baseResolver,
    deletedNoteValidateResolver,
    deletedNoteProcessResolver
  ]);
});
