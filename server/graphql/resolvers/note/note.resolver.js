const baseResolver = require('../common/base.resolver');
const notesProcessResolver = require('./note.process.resolver');
const composeCreateResolver = require('../common/composeResolvers');


module.exports = composeCreateResolver([
  baseResolver,
  notesProcessResolver,
]);
