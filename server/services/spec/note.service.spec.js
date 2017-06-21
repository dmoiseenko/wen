const noteService = require('../note.service');
const bootstrap = require('../../db/bootstrap/bootstrap.js');
const pubSub = require('../../graphql/pubsub.js');


describe('getNotes', () => {
  beforeEach(() => bootstrap());

  it('should get all notes', async () => {
    const actual = await noteService.getNotes();

    expect(actual).toMatchSnapshot();
  });
});

describe('createNote', () => {
  beforeEach(() => bootstrap());

  it('should return created note', async () => {
    const actual = await noteService.createNote('note text');

    expect(actual).toMatchSnapshot();
  });

  it('should publish noteAdded message with created note', (done) => {
    let subscriptionId;

    return pubSub.subscribe('noteAdded', (newNote) => {
      expect(newNote).toMatchSnapshot();
      pubSub.unsubscribe(subscriptionId);
      done();
    }).then(async (subId) => {
      subscriptionId = subId;
      await noteService.createNote('note text by subscription');
    });
  });
});