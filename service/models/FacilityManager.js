const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FacilityManager = sequelize.define(
  "FacilityManager",
  {
    facilitymanagerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    profilePhoto: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true, 
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true, 
      },
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idProof: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    tableName: "facilitymanager",
    timestamps: true,
  }
);

module.exports = { FacilityManager };
