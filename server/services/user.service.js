const getUserById = require('../db/repositories/user/getById.user.repository');


module.exports.getById = id => getUserById(id);
