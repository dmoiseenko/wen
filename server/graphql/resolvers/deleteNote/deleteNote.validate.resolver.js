const { NoteValidationError } = require('../../errors');


module.exports = (_, params) => {
  if (!params.id) {
    throw new NoteValidationError({
      data: {
        text: 'Note id should not be empty'
      }
    });
  }
};
