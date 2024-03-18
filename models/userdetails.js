// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class userDetails extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.users, { foreignKey: 'userID', onDelete: 'CASCADE' });
//     }
//   }
//   userDetails.init({
//     userID: DataTypes.INTEGER,
//     address: DataTypes.STRING,
//     profession: DataTypes.STRING,
//     salary: DataTypes.INTEGER,
//     contactNo: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'userDetails',
//   });
//   return userDetails;
// };
// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const userDetails =
    sequelize.define('userDetails', {
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
    }, {
      timestamps: true,
    });
  userDetails.associate = (models) => {
    userDetails.belongsTo(models.users, { foreignKey: 'userID' });
  };
  return userDetails;
}
