const createSchema = require('./createSchema');
const addUser = require('./addUser');
const addNotes = require('./addNotes');


module.exports = async () => {
  await createSchema();

  await addUser();
  await addNotes();
};
