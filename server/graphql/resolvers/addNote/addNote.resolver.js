const baseResolver = require('../common/base.resolver');
const addNoteValidateResolver = require('./addNote.validate.resolver');
const addNoteProcessResolver = require('./addNote.process.resolver');
const composeCreateResolver = require('../common/composeCreateResolver');


module.exports = composeCreateResolver([
  baseResolver,
  addNoteValidateResolver,
  addNoteProcessResolver
]);
