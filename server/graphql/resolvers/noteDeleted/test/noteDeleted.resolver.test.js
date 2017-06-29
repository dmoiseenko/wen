const noteDeletedResolver = require('../noteDeleted.resolver');


it('should return provided note', () => {
  const note = 'note';

  expect(noteDeletedResolver(note)).toEqual('note');
});
