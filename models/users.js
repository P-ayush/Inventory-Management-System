// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   users.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'users',
//   });
//   return users;
// };
// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
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

  }, {
    timestamps: true,
  });
  users.associate = (models) => {
    users.hasOne(models.userDetails, { foreignKey: 'userID' });
  };
  users.associate = (models) => {
    users.hasMany(models.products, { foreignKey: 'userID' });
  };
  users.associate = (models) => {
    users.hasMany(models.store_categories, { foreignKey: 'userID' });
  };
  return users;
}

