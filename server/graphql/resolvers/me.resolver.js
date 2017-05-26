const userService = require('../../services/user.service');


module.exports = (root, args, ctx) => userService.getById(ctx.user.id);
