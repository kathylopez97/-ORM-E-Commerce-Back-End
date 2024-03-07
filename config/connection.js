// Import Dotenv
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
require('dotenv').config();
// Sequelize module that will connect database 
const Sequelize = require('sequelize');
// JAWSDB_URL environment variable if available, otherwise use the DB_NAME, DB_USER, and DB_PASSWORD environment variables to connect to a local MySQL database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// Export sequelize 
module.exports = sequelize;
