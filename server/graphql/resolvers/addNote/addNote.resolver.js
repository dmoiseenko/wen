const baseResolver = require('../common/base.resolver');
const addNoteValidateResolver = require('./addNote.validate.resolver');
const addNoteProcessResolver = require('./addNote.process.resolver');
const composeResolvers = require('../common/composeResolvers');


module.exports = composeResolvers([
  baseResolver,
  addNoteValidateResolver,
  addNoteProcessResolver
]);
