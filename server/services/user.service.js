const getUserById = require('../db/repositories/user/getUserById.user.repository');


module.exports.getById = id => getUserById(id);
