
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, { foreignKey: 'userID', onDelete: 'CASCADE'});
    }
  }
  store_categories.init({
    userID: DataTypes.INTEGER,
    shop_name: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    store_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'store_categories',
  });
  return store_categories;
};