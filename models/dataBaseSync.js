// dbSync.js

const { sequelize } = require('../models'); // Assuming your Sequelize instance is exported as 'sequelize'

// Import all your models
const users = require('./users');
const products = require('./products');
const store_categories = require('./store_categories');
const userDetails = require('./userdetails');
// Add imports for other models as needed

// Define the function to synchronize models with the database
const syncDatabase = (sequelize) => {
  return sequelize.sync({ force: false }) // Set force to true to drop existing tables and recreate them
    .then(() => {
      console.log('Database synchronized successfully.');
    })
    .catch(err => {
      console.error('Error synchronizing database:', err);
    });
};

// Export the synchronization function
module.exports = syncDatabase;
