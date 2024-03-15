'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
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
      store_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'store_categories', // This should match the table name of your users model
          key: 'id'       // This should match the column name of your users table that you want to reference
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      },
      product_id: {
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_by: {
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
    await queryInterface.dropTable('products');
  }
};