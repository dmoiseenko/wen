const noteService = require('../../../services/note.service');


module.exports = () => noteService.getNotes();
