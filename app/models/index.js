// taken from https://bezkoder.com/node-js-express-sequelize-mysql/

const Sequelize = require("sequelize");
const config = require('config');

const sequelize = new Sequelize(
    config.get('db.database'),
    config.get('db.user'), 
    config.get('db.password'), 
    {
    host: config.get('db.host'),
    dialect: config.get('db.dialect')
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pageViews = require("./page-views.model.js")(sequelize, Sequelize);

module.exports = db;