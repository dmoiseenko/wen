const me = require('./me.resolver');
const notes = require('./notes/notes.resolver');
const addNoteResolver = require('./addNote/addNote.resolver');
const noteAdded = require('./noteAdded.resolver');


module.exports = {
  Query: {
    me,
    notes
  },
  Subscription: {
    noteAdded
  },
  Mutation: {
    addNote: addNoteResolver()
  }
};
