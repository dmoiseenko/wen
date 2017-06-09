const noteAddedResolver = require('../noteAdded.resolver');


it('should return provided note', () => {
  const note = 'note';

  expect(noteAddedResolver(note)).toEqual('note');
});
