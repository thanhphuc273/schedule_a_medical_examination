'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Clinci_Specialty extends Model {
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
  Doctor_Clinci_Specialty.init({
    // id: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER, 
    specialtyId: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Doctor_Clinci_Specialty',
  });
  return Doctor_Clinci_Specialty;
};