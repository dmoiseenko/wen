const baseResolver = require('../common/base.resolver');
const notesProcessResolver = require('./me.process.resolver');
const composeResolvers = require('../common/composeResolvers');


module.exports = composeResolvers([
  baseResolver,
  notesProcessResolver,
]);
