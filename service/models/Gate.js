const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
const Customer = require("./Customer.js");

const Gate = sequelize.define(
  "gate", 
  {
    gateId:{
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true
    },
    societyId: {
      type: DataTypes.INTEGER, 
      references: {
        model: Customer, 
        key: "customerId", 
      },
    },
  
    gateName: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    gateNumber: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
  },
  {
    timestamps: true, 
    tableName: "Gate",
  }
);


Customer.hasMany(Gate, { foreignKey: "societyId" });
Gate.belongsTo(Customer, { foreignKey: "societyId" });
module.exports = Gate;