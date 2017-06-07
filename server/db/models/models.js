const db = require('./defineModels');
const userMapper = require('../mappers/user.mapper');
const noteMapper = require('../mappers/note.mapper');


module.exports.User = db[userMapper.User];
module.exports.Note = db[noteMapper.Note];
