const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Database connection file

const GateAllocation = sequelize.define('GateAllocation', {
    gateAllocationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePhoto: {
        type: DataTypes.STRING, // File path for profile photo
        allowNull: true
    },
    idProof: {
        type: DataTypes.STRING, // File path for ID proof
        allowNull: true
    },
    societyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('security', 'supervisor', 'facilities_manager'),
        allowNull: false,
        defaultValue: 'security' // Default to 'security' role
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true // Email validation
        }
    },
    mobileNo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]{10}$/ // Validate mobile number (10 digits)
        }
    }
}, {
    tableName: 'GateAllocations',
    timestamps: true // Add timestamps (createdAt, updatedAt)
});

module.exports = GateAllocation;