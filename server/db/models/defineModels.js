const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('../../../common/config');

const sequelize = new Sequelize(
  config.db.databaseName,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: 'postgres',
    logging: false
  }
);

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file =>
  (file.indexOf('.') !== 0) && (file !== 'defineModels.js') && (file !== 'models.js') && file.lastIndexOf('.js') === (file.length - 3))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
