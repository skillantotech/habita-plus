const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Customer = require("./Customer");

const Building = sequelize.define(
  "building",
  {
    buildingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    societyId: {
      type: DataTypes.INTEGER,
      references: {
        model: Customer,
        key: "customerId",
      },
      allowNull: false,
    },
    buildingName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "building",
    timestamps: true,
  }
);

module.exports = Building;