const me = require('./me/me.resolver');
const notes = require('./notes/notes.resolver');
const addNote = require('./addNote/addNote.resolver');
const noteAdded = require('./noteAdded/noteAdded.resolver');


module.exports = {
  Query: {
    me,
    notes
  },
  Subscription: {
    noteAdded
  },
  Mutation: {
    addNote
  }
};
