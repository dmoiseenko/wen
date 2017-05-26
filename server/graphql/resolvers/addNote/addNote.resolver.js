const baseResolver = require('../common/base.resolver');
const addNoteValidationResolver = require('./addNote.validation.resolver');
const addNoteProcessResolver = require('./addNote.process.resolver');
const composeCreateResolver = require('../common/composeCreateResolver');


const resolvers = [
  baseResolver,
  addNoteValidationResolver,
  addNoteProcessResolver
];

module.exports = (compose = composeCreateResolver) => compose(resolvers);
