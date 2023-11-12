
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
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
  History.init({
    // Id: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    description: DataTypes.TEXT, 
    files: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};