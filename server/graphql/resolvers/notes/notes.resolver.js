const baseResolver = require('../common/base.resolver');
const noteService = require('../../../services/note.service');


module.exports = baseResolver.createResolver(
  () => noteService.getNotes()
);
