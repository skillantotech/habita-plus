// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");
// const Customer = require("./Customer.js");
// const Security = sequelize.define(
//   "Security",
//   {
//     securityId: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     profilePhoto: {
//       type: DataTypes.STRING,
//       allowNull: true,
//       validate: {
//         notEmpty: true, 
//       },
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: true,
//       validate: {
//         isEmail: true, 
//       },
//     },
//     mobileNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     idProof: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//   },
//   {
//     tableName: "security",
//     timestamps: true,
//   }
// );
// Customer.hasMany(Security, { foreignKey: "societyId" });
// Security.belongsTo(Customer, { foreignKey: "societyId" });

// module.exports = { Security };
