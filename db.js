const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('dbTest', 'root', 'dali14', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
