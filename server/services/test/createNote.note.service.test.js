jest.mock(
  '../../db/repositories/note/createNote.note.repository.js',
  () => jest.fn(() => Promise.resolve('created note'))
);
jest.mock('../../graphql/pubsub.js');

const noteService = require('../note.service');
const addNote = require('../../db/repositories/note/createNote.note.repository.js');
const pubSub = require('../../graphql/pubsub');


it('should add new note to repository', async () => {
  await noteService.createNote('new note');

  expect(addNote).toHaveBeenCalledWith('new note');
});

it('should publish noteAdded message with created note', async () => {
  await noteService.createNote('new note');

  expect(pubSub.publish).toHaveBeenCalledWith('noteAdded', 'created note');
});

it('should return created note', async () => {
  const actual = await noteService.createNote('new note');

  expect(actual).toEqual('created note');
});
