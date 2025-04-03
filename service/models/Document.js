const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Customer = require("./Customer");
const User = require("./User");

const Document = sequelize.define("Document", {
    documentId: {
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
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "userId",
        },
        allowNull: true,
    },
    documentName: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    document: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'Documents',
    timestamps: true,
});

module.exports = Document;
