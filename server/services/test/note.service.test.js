jest.mock(
  '../../db/repositories/note/getNotes.note.repository.js',
  () => jest.fn(() => Promise.resolve('notes'))
);
jest.mock(
  '../../db/repositories/note/createNote.note.repository.js',
  () => jest.fn(() => Promise.resolve('created note'))
);
jest.mock('../../graphql/pubsub.js');

const noteService = require('../note.service');
const getNotes = require('../../db/repositories/note/getNotes.note.repository.js');
const addNote = require('../../db/repositories/note/createNote.note.repository.js');
const pubSub = require('../../graphql/pubsub');

describe('getNotes', () => {
  it('should get all notes from repository', async () => {
    const actual = await noteService.getNotes();

    expect(getNotes).toHaveBeenCalledWith();
    expect(actual).toEqual('notes');
  });
});

describe('createNote', async () => {
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
});
