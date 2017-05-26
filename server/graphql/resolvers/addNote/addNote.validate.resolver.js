const { NoteValidationError } = require('../../errors');


module.exports = (_, params) => {
  if (!params.text) {
    throw new NoteValidationError({
      data: {
        text: 'Note text should not be empty'
      }
    });
  }
};
