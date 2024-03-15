'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, { foreignKey: 'userID', onDelete: 'CASCADE'});
      this.belongsTo(models.store_categories, { foreignKey: 'store_id', onDelete: 'CASCADE'});
    }
  }
  products.init({
    userID: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};