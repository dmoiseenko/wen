const noteService = require('../../../services/note.service');


module.exports = (_, { id }) => noteService.deleteNoteById(id);
