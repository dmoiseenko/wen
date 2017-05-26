const userService = require('../../../services/user.service');


module.exports = (_, args, ctx) => userService.getById(ctx.user.id);
