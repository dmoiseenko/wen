const baseResolver = require('../common/base.resolver');
const notesProcessResolver = require('./notes.process.resolver');
const composeCreateResolver = require('../common/composeCreateResolver');


module.exports = composeCreateResolver([
  baseResolver,
  notesProcessResolver,
]);
