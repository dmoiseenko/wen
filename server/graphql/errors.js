const { createError } = require('apollo-errors');


module.exports.UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred! Please try again later'
});

module.exports.NoteValidationError = createError('NoteValidationError', {
  message: 'Invalid note'
});
