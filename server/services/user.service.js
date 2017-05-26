const userRepository = require('../db/repositories/user.repository');


module.exports.getById = id => userRepository.getUserById(id);
