// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class products extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.users, { foreignKey: 'userID', onDelete: 'CASCADE'});
//       this.belongsTo(models.store_categories, { foreignKey: 'store_id', onDelete: 'CASCADE'});
//     }
//   }
//   products.init({
//     userID: DataTypes.INTEGER,
//     store_id: DataTypes.INTEGER,
//     product_id: DataTypes.INTEGER,
//     product_name: DataTypes.STRING,
//     created_by: DataTypes.STRING,
//     updated_by: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'products',
//   });
//   return products;
// };

const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const products =
    sequelize.define('products', {
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
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'store_categories', // This should match the table name of your users model
          key: 'id'       // This should match the column name of your users table that you want to reference
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      },
      // product_id: {
      //   type: Sequelize.INTEGER
      // },
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
      },
    },
      {
        timestamps: true,
      });
  products.associate = (models) => {
    products.belongsTo(models.users, { foreignKey: 'userID' });
  };
  return products;
}
