'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // This should match the table name of your users model
          key: 'id'       // This should match the column name of your users table that you want to reference
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      },
      address: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      contactNo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userDetails');
  }
};