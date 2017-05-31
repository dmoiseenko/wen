const baseResolver = require('../common/base.resolver');
const notesProcessResolver = require('./notes.process.resolver');
const composeCreateResolver = require('../common/composeResolvers');


module.exports = composeCreateResolver([
  baseResolver,
  notesProcessResolver,
]);
