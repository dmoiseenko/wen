const noteAddedResolver = require('../noteAdded.resolver');

describe('noteAdded.resolver', () => {
  it('should return provided note', () => {
    const note = 'note';

    expect(noteAddedResolver(note)).toEqual('note');
  });
});
