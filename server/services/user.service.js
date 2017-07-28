const getUserById = require('../db/repositories/user/getById.user.repository');


const getById = id => getUserById(id);

module.exports = {
  getById
};
