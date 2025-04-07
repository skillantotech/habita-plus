const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Unit = require("./Unit");
const Customer = require("./Customer");

const Vehicle = sequelize.define(
  "Vehicles",
  {
    vehicleId: {
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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId",
      },
      allowNull: true,
    },
    unitName: {
      type: DataTypes.STRING,
      references: {
        model: Unit,
        key: "unitName",
      },
      allowNull: true,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [6, 12],
      },
    },
    fastagNumber: {
      type: DataTypes.STRING,
      allowNull: true,
         validate: {
        len: [12, 16],
        is: /^[a-zA-Z0-9]+$/,
      },
    },
    vehicleType: {
      type: DataTypes.ENUM("Car", "Bike", "Truck", "Van", "Bus"),
      allowNull: false,
    },
    ownerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ownerContact: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[0-9]{10}$/,
      },
    },
    status: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    },
  },
  {
    tableName: "Vehicles",
    timestamps: true,
  }
);

Vehicle.belongsTo(Customer, { foreignKey: "societyId" });
Vehicle.belongsTo(User, { foreignKey: "userId" });

module.exports = Vehicle;
