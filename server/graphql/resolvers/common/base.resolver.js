const { isInstance } = require('apollo-errors');

const { UnknownError } = require('../../errors');


module.exports = [
  null,
  (root, args, context, error) => (isInstance(error) ? error : new UnknownError())
];
