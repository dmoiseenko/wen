const baseResolver = require('../common/base.resolver');
const meProcessResolver = require('./me.process.resolver');
const composeResolvers = require('../common/composeResolvers');


module.exports = composeResolvers([
  baseResolver,
  meProcessResolver,
]);
