// const { Vehicle, User, Customer } = require("../models");
// const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

// // exports.createVehicleBySociety = async (req, res) => {
// //     try {
// //         const { vehicleNumber, fastagNumber, vehicleType, ownerName, ownerContact, societyId } = req.body;

// //         if (!vehicleNumber || !fastagNumber || !vehicleType || !ownerName || !ownerContact || !societyId) {
// //             return res.status(400).json({ message: 'All fields are required' });
// //         }

// //         // Check if society exists
// //         const society = await Customer.findByPk(societyId);
// //         if (!society) {
// //             return res.status(404).json({ message: "Society Not Found" });
// //         }

// //         const newVehicle = await Vehicle.create({
// //             vehicleNumber,
// //             fastagNumber,
// //             vehicleType,
// //             ownerName,
// //             ownerContact,
// //             societyId
// //         });

// //         return res.status(201).json({
// //             message: 'Vehicle created successfully for Society',
// //             vehicle: newVehicle
// //         });

// //     } catch (err) {
// //         console.error("Error creating vehicle:", err);
// //         return res.status(500).json({ message: "Internal server error", error: err.message });
// //     }
// // };

// // exports.createVehicleBySociety = async (req, res) => {
// //     try {
// //       const { societyId } = req.params;
// //         const { vehicleNumber, fastagNumber, vehicleType, ownerName, ownerContact} = req.body;

// //         if (!vehicleNumber || !fastagNumber || !vehicleType || !ownerName || !ownerContact) {
// //             return res.status(400).json({ message: 'All fields are required' });
// //         }

// //         // Check if society exists
// //         const society = await Customer.findByPk(societyId);
// //         if (!society) {
// //             return res.status(404).json({ message: "Society Not Found" });
// //         }

// //         const newVehicle = await Vehicle.create({
// //             vehicleNumber,
// //             fastagNumber,
// //             vehicleType,
// //             ownerName,
// //             ownerContact,
// //             societyId,
// //         });

// //         return res.status(201).json({
// //             message: 'Vehicle created successfully for Society',
// //             vehicle: newVehicle
// //         });

// //     } catch (err) {
// //         console.error("Error creating vehicle:", err);

// //         // Check for Sequelize validation errors
// //         if (err.name === "SequelizeValidationError") {
// //             return res.status(400).json({ message: "Validation error", errors: err.errors.map(e => e.message) });
// //         }

// //         return res.status(500).json({ message: "Internal server error", error: err.message });
// //     }
// // };
// exports.createVehicleBySociety = async (req, res) => {
//   try {
//       const { societyId } = req.params;
//       const { vehicleNumber, fastagNumber, vehicleType, ownerName, ownerContact } = req.body;

//       if (!vehicleNumber || !fastagNumber || !vehicleType || !ownerName || !ownerContact) {
//           return res.status(400).json({ message: 'All fields are required' });
//       }


//       const society = await Customer.findByPk(societyId);
//       if (!society) {
//           return res.status(404).json({ message: "Society Not Found" });
//       }


//       const existingVehicle = await Vehicle.findOne({
//           where: { vehicleNumber, societyId }
//       });

//       if (existingVehicle) {
//           return res.status(400).json({ message: "Vehicle already exists in this society" });
//       }

      
//       const newVehicle = await Vehicle.create({
//           vehicleNumber,
//           fastagNumber,
//           vehicleType,
//           ownerName,
//           ownerContact,
//           societyId,
//       });

//       return res.status(201).json({
//           message: 'Vehicle created successfully for Society',
//           vehicle: newVehicle
//       });

//   } catch (err) {
//       console.error("Error creating vehicle:", err);

     
//       if (err.name === "SequelizeValidationError") {
//           return res.status(400).json({ 
//               message: "Validation error", 
//               errors: err.errors.map(e => e.message) 
//           });
//       }

//       return res.status(500).json({ message: "Internal server error", error: err.message });
//   }
// };

// // exports.createVehicleByUser = async (req, res) => {
// //     try {
// //         const { vehicleNumber, fastagNumber, vehicleType, ownerName, ownerContact, userId , societyId} = req.body;

// //         if (!vehicleNumber || !fastagNumber || !vehicleType || !ownerName || !ownerContact || !userId || !societyId) {
// //             return res.status(400).json({ message: 'All fields are required' });
// //         }

// //         // Check if user exists
// //         const user = await User.findByPk(userId);
// //         if (!user) {
// //             return res.status(404).json({ message: "User Not Found" });
// //         }

// //         const newVehicle = await Vehicle.create({
// //             vehicleNumber,
// //             fastagNumber,
// //             vehicleType,
// //             ownerName,
// //             ownerContact,
// //             userId,
// //             societyId
// //         });

// //         return res.status(201).json({
// //             message: 'Vehicle created successfully for User',
// //             vehicle: newVehicle
// //         });

// //     } catch (err) {
// //         console.error("Error creating vehicle:", err);
// //         return res.status(500).json({ message: "Internal server error", error: err.message });
// //     }
// // };

// // exports.createVehicleBySocietyAndUser = async (req, res) => {
// //   try {
// //     const {
// //       societyId,
// //       userId,
// //       vehicleNumber,
// //       fastagNumber,
// //       vehicleType,
// //       ownerName,
// //       ownerContact,
// //       status,
// //     } = req.body;

// //     // Check if society exists
// //     const society = await Customer.findByPk(societyId);
// //     if (!society) {
// //       return res.status(404).json({ message: "Society not found" });
// //     }

// //     // Check if user exists (optional)
// //     if (userId) {
// //       const user = await User.findByPk(userId);
// //       if (!user) {
// //         return res.status(404).json({ message: "User not found" });
// //       }
// //     }

// //     // Create vehicle
// //     const vehicle = await Vehicle.create({
// //       societyId,
// //       userId,
// //       vehicleNumber,
// //       fastagNumber,
// //       vehicleType,
// //       ownerName,
// //       ownerContact,
// //       status,
// //     });

// //     res.status(201).json(vehicle);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// exports.createVehicleByUser = async (req, res) => {
//   try {
//       const { vehicleNumber, fastagNumber, vehicleType, ownerName, ownerContact, userId, societyId } = req.body;

//       if (!vehicleNumber || !fastagNumber || !vehicleType || !ownerName || !ownerContact || !userId || !societyId) {
//           return res.status(400).json({ message: 'All fields are required' });
//       }

     
//       const society = await Customer.findByPk(societyId);
//       if (!society) {
//           return res.status(404).json({ message: "Society Not Found" });
//       }

      
//       const user = await User.findByPk(userId);
//       if (!user) {
//           return res.status(404).json({ message: "User Not Found" });
//       }


//       const existingVehicle = await Vehicle.findOne({
//           where: { vehicleNumber, userId, societyId }
//       });

//       if (existingVehicle) {
//           return res.status(400).json({ message: "Vehicle already registered under this user in the society" });
//       }


//       const newVehicle = await Vehicle.create({
//           vehicleNumber,
//           fastagNumber,
//           vehicleType,
//           ownerName,
//           ownerContact,
//           userId,
//           societyId
//       });

//       return res.status(201).json({
//           message: 'Vehicle created successfully for User in the Society',
//           vehicle: newVehicle
//       });

//   } catch (err) {
//       console.error("Error creating vehicle:", err);
//       return res.status(500).json({ message: "Internal server error", error: err.message });
//   }
// };

// exports.getVehicleBySocietyId = async (req, res) => {
//   try {
//     const { societyId } = req.params;

//     const vehicles = await Vehicle.findAll({
//       where: { societyId },
//     });

//     if (!vehicles.length) {
//       return res
//         .status(404)
//         .json({ message: "No vehicles found for this society" });
//     }

//     res.status(200).json({ vehicles });
//   } catch (error) {
//     console.error("Error fetching vehicles by societyId:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// exports.getVehicleByUserId = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const vehicles = await Vehicle.findAll({
//       where: { userId },
//     });

//     if (!vehicles.length) {
//       return res
//         .status(404)
//         .json({ message: "No vehicles found for this user" });
//     }

//     res.status(200).json({ vehicles });
//   } catch (error) {
//     console.error("Error fetching vehicles by userId:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
