const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Database connection file
const Customer = require('./Customer');
const Gate = require('./Gate');
const JobProfile = require('./JobProfile');

const GateAllocation = sequelize.define('GateAllocation', {
    gateAllocationId: {
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
    gateId: {
        type: DataTypes.INTEGER,
        references: {
            model: Gate,
            key: "gateId",
        },
        allowNull: false,
    },
    profileId: {
        type: DataTypes.INTEGER,
        references: {
            model: JobProfile,
            key: "profileId",
        },
        allowNull: false,
    }
}, {
    tableName: 'GateAllocations',
    timestamps: true, // Add timestamps (createdAt, updatedAt)
});

// Relationships
Customer.hasMany(GateAllocation, { foreignKey: "societyId" });
GateAllocation.belongsTo(Customer, { foreignKey: "societyId" });

Gate.hasMany(GateAllocation, { foreignKey: "gateId" });
GateAllocation.belongsTo(Gate, { foreignKey: "gateId" });

JobProfile.hasMany(GateAllocation, { foreignKey: "profileId" });
GateAllocation.belongsTo(JobProfile, { foreignKey: "profileId" });

module.exports = GateAllocation;



  
  






