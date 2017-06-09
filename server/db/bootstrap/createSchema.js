const db = require('../models/defineModels');


module.exports = async () => {
  await db.sequelize.sync({
    force: true
  });
};
