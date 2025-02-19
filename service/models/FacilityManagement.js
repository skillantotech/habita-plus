

const { DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");
const Customer = require("./Customer");

const Facility = sequelize.define('Facility', {
    facilityId: {
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
    facilityName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    facilityType: {
        type: DataTypes.ENUM('PublicUsage', 'PrivateUsage'),
        allowNull: false,
    },
    // facilityUsage: {
    //     type: DataTypes.ENUM('Free', 'Paid'),
    //     allowNull: false,
    // },
    // facilityCharge: {
    //     type: DataTypes.ENUM('Hourly', 'Days'), // Changed "Days" to "Daily"
    //     allowNull: false,
    // },
    
   
    facilityUsage: {
        type: DataTypes.ENUM('Hourly', 'Days'), // Changed "Days" to "Daily"
        allowNull: false,
    },
    facilityCharge: {
        type: DataTypes.ENUM('Free', 'Paid'),
        allowNull: false,
    },
    chargeAmount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00,
        allowNull: false,
    },
    bookingFrom: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true,
        },
    },
    bookingTo: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true,
        },
    },
}, {
    tableName: 'facility_management',
    timestamps: true,
});

module.exports = Facility;
