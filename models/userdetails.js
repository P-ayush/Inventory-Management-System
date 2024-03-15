'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, { foreignKey: 'userID', onDelete: 'CASCADE' });
    }
  }
  userDetails.init({
    userID: DataTypes.INTEGER,
    address: DataTypes.STRING,
    profession: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    contactNo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userDetails',
  });
  return userDetails;
};