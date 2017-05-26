const noteService = require('../../../services/note.service');

module.exports = (_, { text }) => noteService.createNote(text);
