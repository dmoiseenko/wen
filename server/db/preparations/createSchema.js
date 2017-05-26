const models = require('../models');


module.exports = async () => {
  await models.sequelize.sync({
    force: true
  });
};
