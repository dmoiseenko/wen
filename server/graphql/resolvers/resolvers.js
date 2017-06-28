const me = require('./me/me.resolver');
const notes = require('./notes/notes.resolver');
const addNote = require('./addNote/addNote.resolver');
const deleteNote = require('./deleteNote/deleteNote.resolver');
const noteAdded = require('./noteAdded/noteAdded.resolver');
const noteDeleted = require('./noteDeleted/noteDeleted.resolver');
const note = require('./note/note.resolver');


module.exports = {
  Query: {
    me,
    notes,
    note
  },
  Subscription: {
    noteAdded,
    noteDeleted
  },
  Mutation: {
    addNote,
    deleteNote
  }
};
