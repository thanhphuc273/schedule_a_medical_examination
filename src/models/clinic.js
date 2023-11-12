'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // định danh các mối quan hệ
    static associate(models) {
      // define association here
    }
  };
  Clinic.init({
    // Id: DataTypes.INTEGER,
    name: DataTypes.STRING, 
    address: DataTypes.STRING, 
    description: DataTypes.STRING, 
    image:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};