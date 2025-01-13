



// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); // Database connection file
// const Customer = require('./Customer');
// const Role = require("./RoleModel");
// const Gate = require('./Gate');

// const JobProfile = sequelize.define('JobProfile', {
//     jobProfilesId: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     profilePhoto: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     idProof: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             isEmail: true,
//         },
//     },
//     mobileNo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             is: /^[0-9]{10}$/, // Validate mobile number (10 digits)
//         },
//     },
//     societyId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Customer,
//             key: "customerId",
//         },
//         allowNull: false,
//     },
//     gateId:{
//         type: DataTypes.INTEGER,
//         references: {
//             model: Gate,
//             key: "gateId",
//         },
//         allowNull: true,  
//     },
//     roleId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Role,
//             key: "roleId",
//         },
//         allowNull: true,
//     },
//     status: {
//         type: DataTypes.ENUM("active", "inactive"),
//         allowNull: false,
//         defaultValue: "active",
//     },
// }, {
//     tableName: 'JobProfiles',
//     timestamps: true, // Add timestamps (createdAt, updatedAt)
// });

// // Relationships
// Customer.hasMany(JobProfile, { foreignKey: "societyId" });
// JobProfile.belongsTo(Customer, { foreignKey: "societyId" });

// Role.hasMany(JobProfile, { foreignKey: "roleId",as:"roles"});
// JobProfile.belongsTo(Role, { foreignKey: "roleId",as:"roles"});


// module.exports = JobProfile;



// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); // Database connection file
// const Customer = require('./Customer');
// const Role = require("./RoleModel");
// // const Gate = require('./Gate');

// const JobProfile = sequelize.define('JobProfile', {
//     jobProfilesId: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     profilePhoto: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             isUrl: true, // Ensures it's a valid URL
//         },
//     },
//     idProof: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             isUrl: true, // Ensures it's a valid URL
//         },
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true, // Ensures no duplicate emails
//         validate: {
//             isEmail: true,
//         },
//     },
//     mobileNo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             is: /^[0-9]{10}$/, // Validate mobile number (10 digits)
//         },
//     },
//     societyId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Customer,
//             key: "customerId",
//         },
//         allowNull: false,
//     },
//     // gateId: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //         model: Gate,
//     //         key: "gateId",
//     //     },
//     //     allowNull: false,  
//     // },
//     roleId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Role,
//             key: "roleId",
//         },
//         allowNull: true,
//     },
//     status: {
//         type: DataTypes.ENUM("active", "inactive"),
//         allowNull: false,
//         defaultValue: "active",
//     },
// }, {
//     tableName: 'JobProfiles',
//     timestamps: true, // Add timestamps (createdAt, updatedAt)
// });

// // Relationships
// Customer.hasMany(JobProfile, { foreignKey: "societyId" });
// JobProfile.belongsTo(Customer, { foreignKey: "societyId" });

// Role.hasMany(JobProfile, { foreignKey: "roleId", as: "role" });
// JobProfile.belongsTo(Role, { foreignKey: "roleId", as: "role" });

// // Gate.hasMany(JobProfile, { foreignKey: "gateId" });
// // JobProfile.belongsTo(Gate, { foreignKey: "gateId" });

// module.exports = JobProfile;
  


// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Customer = require('./Customer');
// const Role = require("./RoleModel");

// const JobProfile = sequelize.define('JobProfile', {
//     jobProfileId: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     profilePhoto: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             isUrl: true,
//         },
//     },
//     idProof: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             isUrl: true,
//         },
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isEmail: true,
//         },
//     },
//     mobileNo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             is: /^[0-9]{10}$/,
//         },
//     },
//     societyId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Customer,
//             key: "customerId",
//         },
//         allowNull: false,
//     },
//     roleId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Role,
//             key: "roleId",
//         },
//         allowNull: true,
//     },
//     status: {
//         type: DataTypes.ENUM("active", "inactive"),
//         allowNull: false,
//         defaultValue: "active",
//     },
// }, {
//     tableName: 'JobProfiles',
//     timestamps: true,
// });

// Customer.hasMany(JobProfile, { foreignKey: "societyId" });
// JobProfile.belongsTo(Customer, { foreignKey: "societyId" });

// // Role.hasMany(JobProfile, { foreignKey: "roleId"}); // Updated alias
// // JobProfile.belongsTo(Role, { foreignKey: "roleId"});


// module.exports = JobProfile;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer');
const Role = require("./RoleModel");

const JobProfile = sequelize.define('JobProfile', {
    profileId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profilePhoto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idProof: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     validate: {
    //         isEmail: true,
    //     },
    // },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobileNo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]{10}$/,
        },
    },
    societyId: {
        type: DataTypes.INTEGER,
        references: {
            model: Customer,
            key: "customerId",
        },
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: "roleId",
        },
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
    },
}, {
    tableName: 'JobProfiles',
    timestamps: true,
});

// Relationships
Customer.hasMany(JobProfile, { foreignKey: "societyId" });
JobProfile.belongsTo(Customer, { foreignKey: "societyId" });
// Role.hasMany(JobProfile, { foreignKey: "roleId" });
// JobProfile.belongsTo(Role, { foreignKey: "roleId" });

module.exports = JobProfile;
