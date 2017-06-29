const baseResolver = require('../common/base.resolver');
const deleteNoteValidateResolver = require('./deleteNote.validate.resolver');
const deleteNoteProcessResolver = require('./deleteNote.process.resolver');
const composeResolvers = require('../common/composeResolvers');


module.exports = composeResolvers([
  baseResolver,
  deleteNoteValidateResolver,
  deleteNoteProcessResolver
]);
