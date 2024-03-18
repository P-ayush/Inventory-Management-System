
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class store_categories extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.users, { foreignKey: 'userID', onDelete: 'CASCADE'});
//     }
//   }
//   store_categories.init({
//     userID: DataTypes.INTEGER,
//     shop_name: DataTypes.STRING,
//     created_by: DataTypes.STRING,
//     updated_by: DataTypes.STRING,
//     store_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'store_categories',
//   });
//   return store_categories;
// };

const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const store_categories =
    sequelize.define('store_categories', {
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
      shop_name: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      // store_id: {
      //   type: Sequelize.INTEGER
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      {
        timestamps: true,
      });
  store_categories.associate = (models) => {
    store_categories.belongsTo(models.users, { foreignKey: 'userID' });
  };
  return store_categories;
}
