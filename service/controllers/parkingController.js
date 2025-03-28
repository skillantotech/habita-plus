// const Parking = require('../models/Parking');
// const Unit = require('../models/Unit');
// const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

// exports.parkingBooked = async (req, res) => {
//     try {
//         const societyId = req.params.societyId;
//         console.log("Request body: ", req.body);

//         const {
//             parkingSlotName,
//             parkingSlotType,
//             parkingUsage,
//             parkingCharges,
//             chargeAmount,
//             unitName,
//             vehicleType,
//             vehicleNumber,
//             bookingFrom,
//             bookingTo,
//         } = req.body;

//         // Define allowed ENUM values
//         const allowedSlotTypes = ['PublicUsage', 'PrivateUsage'];
//         const allowedUsageTypes = ['Hourly', 'Days'];
//         const allowedChargeTypes = ['Free', 'Paid'];

//         // Trim input values to avoid spacing issues
//         const trimmedSlotType = parkingSlotType?.trim();
//         const trimmedUsage = parkingUsage?.trim();
//         const trimmedCharges = parkingCharges?.trim();

//         // Validate required fields
//         if (!parkingSlotName || !trimmedSlotType || !trimmedUsage || !trimmedCharges || chargeAmount === undefined) {
//             return sendErrorResponse(res, "All fields are required", 400);
//         }

//         // Validate ENUM values
//         if (!allowedSlotTypes.includes(trimmedSlotType)) {
//             return sendErrorResponse(res, "Invalid parkingSlotType. Allowed values: PublicUsage, PrivateUsage", 400);
//         }
//         if (!allowedUsageTypes.includes(trimmedUsage)) {
//             return sendErrorResponse(res, "Invalid parkingUsage. Allowed values: Hourly, Days", 400);
//         }
//         if (!allowedChargeTypes.includes(trimmedCharges)) {
//             return sendErrorResponse(res, "Invalid parkingCharges. Allowed values: Free, Paid", 400);
//         }

//         // Check if unit exists
//         const unitExists = await Unit.findOne({ where: { unitName, societyId } });

//         if (!unitExists) {
//             return sendErrorResponse(res, "Invalid unitName or does not belong to this society", 400);
//         }

//         // Check if the parking slot is already booked
//         const existingParkingSlot = await Parking.findOne({
//             where: {
//                 parkingSlotName,
//                 parkingSlotType: trimmedSlotType,
//                 parkingUsage: trimmedUsage,
//                 parkingCharges: trimmedCharges,
//                 chargeAmount,
//                 societyId,
//                 unitName,
//                 ...(bookingFrom && { bookingFrom }),
//                 ...(bookingTo && { bookingTo }),
//             }
//         });

//         if (existingParkingSlot) {
//             return sendErrorResponse(res, "Parking Slot Already Booked", 400);
//         }

//         // Create a new parking record
//         const parkingSlot = await Parking.create({
//             parkingSlotName,
//             parkingSlotType: trimmedSlotType,
//             parkingUsage: trimmedUsage,
//             parkingCharges: trimmedCharges,
//             chargeAmount,
//             unitName,
//             vehicleType,
//             vehicleNumber,
//             bookingFrom,
//             bookingTo,
//             societyId
//         });

//         console.log("Parking Slot Created:", parkingSlot);

//         return sendSuccessResponse(res, "Parking Slot booked successfully", parkingSlot);

//     } catch (error) {
//         console.error("Error Creating Parking:", error);
//         return sendErrorResponse(res, "Internal server error", 500, error.message);
//     }
// };

// exports.getParkingSlot = async (req, res) => {
//     try {
//         const societyId = req.params.societyId;

//         if (!societyId) {
//             return sendErrorResponse(res, "Society ID is required", 400);
//         }

//         const parkingBook = await Parking.findAll({
//             where: { societyId },
//         });

//         if (parkingBook.length === 0) {
//             return sendSuccessResponse(res, "No Parking Slot booked yet", parkingBook);
//         }

//         return sendSuccessResponse(res, "Parking Slot fetched successfully", parkingBook);
//     } catch (error) {
//         console.error("Error fetching Parking records:", error);
//         return sendErrorResponse(res, "Internal server error", 500, error.message);
//     }
// };

// exports.UpdateParking = async (req,res)=>{
//     try{
//         // const societyId = req.params.societyId;
//         // const parkingId = req.params.parkingId;
//         const { societyId,parkingId } = req.params;
//         const {
//             parkingSlotName,
//             parkingSlotType,
//             parkingUsage,
//             parkingCharges,
//             chargeAmount,
//             unitName,
//             vehicleType,
//             vehicleNumber,
//             bookingFrom,
//             bookingTo,
//         } = req.body;
//         if (!societyId || !parkingId) {
//             return sendErrorResponse(res, "Society ID and Parking ID are required", 400);
//         }
//         const parking = await Parking.findOne ({where: {parkingId:societyId}});
//         if(!parking){
//             return sendErrorResponse(res, "Parking Slot not found", 404);
//         }
//         const allowedSlotTypes = ['PublicUsage', 'PrivateUsage']
//         const allowedUsageTypes = ['Hourly', 'Days'];
//         const allowedChargeTypes = ['Free', 'Paid'];

//         if (parkingSlotType && !allowedSlotTypes.includes(parkingSlotType)){
//             return sendErrorResponse(res, "Invalid parkingSlotType. Allowed values: PublicUsage, PrivateUsage", 400);
//         }
//         if (parkingUsage &&!allowedUsageTypes.includes(parkingUsage)){
//                     return sendErrorResponse(res, "Invalid parkingUsage. Allowed values: Hourly, Days", 400);
//                 }
//     if (parkingCharges &&!allowedChargeTypes.includes(parkingCharges)){
//                     return sendErrorResponse(res, "Invalid parkingCharges. Allowed values: Free, Paid", 400);
//     }
//     if (parkingCharges == "Paid" && (chargeAmount == null || isNaN(parseFloat(chargeAmount)))) {
//         return sendErrorResponse(res, "chargeAmount is required for Paid facilities and must be a valid number", 400);
//     }
//     await Parking.update({
//         parkingSlotName,
//         parkingSlotType,
//         parkingUsage,
//         parkingCharges,
//         chargeAmount: parkingCharges === "Free" ? 0 : parserFloat(chargeAmount),
//         unitName,
//         vehicleType,
//         vehicleNumber,
//         bookingFrom,
//         bookingTo
//     },{
//         where: { parkingId:societyId }
//     })
//     const updatedParking = await Parking.findOne({where: {parkingId,societyId}});
//     return sendErrorResponse( res, "Parking Update Successfully",updatedParking );
//     } catch(err){
//         console.error("Error updating Parking:", err);
//         return sendErrorResponse(res, "Internal server error", 500, err.message);
//     }
// }

// exports.getParkingDataById = async (req, res) => {
//     try {
//       const { parkingId } = req.params;
//       const parking = await Parking.findOne({ where: { parkingId } });
  
//       if (!parking) {
//         return res.status(404).json({ message: "Parking not found" });
//       }
  
//       return res.status(200).json(parking);
//     } catch (err) {
//       console.error("Error fetching Parking by ID:", err);
//       return res.status(500).json({ message: "Server error" });
//     }
//   };

const Parking = require('../models/Parking');
const { Vehicle, Customer, User } = require ('../models')
const Unit = require('../models/Unit');
const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

exports.parkingBooked = async (req, res) => {
    try {
        const societyId = req.params.societyId;
        console.log("Request body: ", req.body);

        const {
            parkingSlotName,
            parkingSlotType,
            parkingUsage,
            parkingCharges,
            chargeAmount,
            unitName,
            vehicleType,
            vehicleNumber,
            bookingFrom,
            bookingTo,
        } = req.body;

        // Define allowed ENUM values
        const allowedSlotTypes = ["PublicUsage", "PrivateUsage"];
        const allowedUsageTypes = ["Hourly", "Days"];
        const allowedChargeTypes = ["Free", "Paid"];
        
    // Trim input values to avoid spacing issues
    const trimmedSlotType = parkingSlotType?.trim();
    const trimmedUsage = parkingUsage?.trim();
    const trimmedCharges = parkingCharges?.trim();

        // Validate required fields
        if (!parkingSlotName || !trimmedSlotType || !trimmedUsage || !trimmedCharges || chargeAmount === undefined) {
            return sendErrorResponse(res, "All fields are required", 400);
        }

        // Validate ENUM values
        if (!allowedSlotTypes.includes(trimmedSlotType)) {
            return sendErrorResponse(res, "Invalid parkingSlotType. Allowed values: PublicUsage, PrivateUsage", 400);
        }
        if (!allowedUsageTypes.includes(trimmedUsage)) {
            return sendErrorResponse(res, "Invalid parkingUsage. Allowed values: Hourly, Days", 400);
        }
        if (!allowedChargeTypes.includes(trimmedCharges)) {
            return sendErrorResponse(res, "Invalid parkingCharges. Allowed values: Free, Paid", 400);
        }

        // Check if unit exists
        const unitExists = await Unit.findOne({ where: { unitName, societyId } });

        if (!unitExists) {
            return sendErrorResponse(res, "Invalid unitName or does not belong to this society", 400);
        }

        // Check if the parking slot is already booked
        const existingParkingSlot = await Parking.findOne({
            where: {
                parkingSlotName,
                parkingSlotType: trimmedSlotType,
                parkingUsage: trimmedUsage,
                parkingCharges: trimmedCharges,
                chargeAmount,
                societyId,
                unitName,
                ...(bookingFrom && { bookingFrom }),
                ...(bookingTo && { bookingTo }),
            }
        });

        if (existingParkingSlot) {
            return sendErrorResponse(res, "Parking Slot Already Booked", 400);
        }

        // Create a new parking record
        const parkingSlot = await Parking.create({
            parkingSlotName,
            parkingSlotType: trimmedSlotType,
            parkingUsage: trimmedUsage,
            parkingCharges: trimmedCharges,
            chargeAmount,
            unitName,
            vehicleType,
            vehicleNumber,
            bookingFrom,
            bookingTo,
            societyId
        });

        console.log("Parking Slot Created:", parkingSlot);

        return sendSuccessResponse(res, "Parking Slot booked successfully", parkingSlot);

    } catch (error) {
        console.error("Error Creating Parking:", error);
        return sendErrorResponse(res, "Internal server error", 500, error.message);
    }
};

exports.getParkingSlot = async (req, res) => {
    try {
        const societyId = req.params.societyId;

        if (!societyId) {
            return sendErrorResponse(res, "Society ID is required", 400);
        }

        const parkingBook = await Parking.findAll({
            where: { societyId },
        });

        if (parkingBook.length === 0) {
            return sendSuccessResponse(res, "No Parking Slot booked yet", parkingBook);
        }

        return sendSuccessResponse(res, "Parking Slot fetched successfully", parkingBook);
    } catch (error) {
        console.error("Error fetching Parking records:", error);
        return sendErrorResponse(res, "Internal server error", 500, error.message);
    }
};

exports.UpdateParking = async (req,res)=>{
    try{
        // const societyId = req.params.societyId;
        // const parkingId = req.params.parkingId;
        const { societyId,parkingId } = req.params;
        const {
            parkingSlotName,
            parkingSlotType,
            parkingUsage,
            parkingCharges,
            chargeAmount,
            unitName,
            vehicleType,
            vehicleNumber,
            bookingFrom,
            bookingTo,
        } = req.body;
        if (!societyId || !parkingId) {
            return sendErrorResponse(res, "Society ID and Parking ID are required", 400);
        }
        const parking = await Parking.findOne ({where: {parkingId:societyId}});
        if(!parking){
            return sendErrorResponse(res, "Parking Slot not found", 404);
        }
        const allowedSlotTypes = ['PublicUsage', 'PrivateUsage']
        const allowedUsageTypes = ['Hourly', 'Days'];
        const allowedChargeTypes = ['Free', 'Paid'];

        if (parkingSlotType && !allowedSlotTypes.includes(parkingSlotType)){
            return sendErrorResponse(res, "Invalid parkingSlotType. Allowed values: PublicUsage, PrivateUsage", 400);
        }
        if (parkingUsage &&!allowedUsageTypes.includes(parkingUsage)){
                    return sendErrorResponse(res, "Invalid parkingUsage. Allowed values: Hourly, Days", 400);
                }
    if (parkingCharges &&!allowedChargeTypes.includes(parkingCharges)){
                    return sendErrorResponse(res, "Invalid parkingCharges. Allowed values: Free, Paid", 400);
    }
    if (parkingCharges == "Paid" && (chargeAmount == null || isNaN(parseFloat(chargeAmount)))) {
        return sendErrorResponse(res, "chargeAmount is required for Paid facilities and must be a valid number", 400);
    }
    await Parking.update({
        parkingSlotName,
        parkingSlotType,
        parkingUsage,
        parkingCharges,
        chargeAmount: parkingCharges === "Free" ? 0 : parseFloat(chargeAmount),      
        unitName,
        vehicleType,
        vehicleNumber,
        bookingFrom,
        bookingTo
    },{
        where: { parkingId:societyId }
    })
    const updatedParking = await Parking.findOne({where: {parkingId,societyId}});
    return sendErrorResponse( res, "Parking Update Successfully",updatedParking );
    } catch(err){
        console.error("Error updating Parking:", err);
        return sendErrorResponse(res, "Internal server error", 500, err.message);
    }
}
exports.getParkingDataById = async (req, res) => {
    try {
      const { parkingId } = req.params;
      const parking = await Parking.findOne({ where: { parkingId } });
  
      if (!parking) {
        return res.status(404).json({ message: "Parking not found" });
      }
  
      return res.status(200).json(parking);
    } catch (err) {
      console.error("Error fetching Parking by ID:", err);
      return res.status(500).json({ message: "Server error" });
    }
  };
exports.createVehicleBySociety = async (req, res) => {
    try {
        const { vehicleNumber, fastagNumber, vehicleType, ownerName, ownerContact, societyId } = req.body;
        
        if (!vehicleNumber || !fastagNumber || !vehicleType || !ownerName || !ownerContact || !societyId) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if society exists
        const society = await Customer.findByPk(societyId);
        if (!society) {
            return res.status(404).json({ message: "Society Not Found" });
        }

        const newVehicle = await Vehicle.create({
            vehicleNumber,
            fastagNumber,
            vehicleType,
            ownerName,
            ownerContact,
            societyId
        });

        return res.status(201).json({
            message: 'Vehicle created successfully for Society',
            vehicle: newVehicle
        });

    } catch (err) {
        console.error("Error creating vehicle:", err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

exports.createVehicleByUser = async (req, res) => {
    try {
        const { vehicleNumber, fastagNumber, vehicleType, ownerName, ownerContact, userId } = req.body;
        
        if (!vehicleNumber || !fastagNumber || !vehicleType || !ownerName || !ownerContact || !userId) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const newVehicle = await Vehicle.create({
            vehicleNumber,
            fastagNumber,
            vehicleType,
            ownerName,
            ownerContact,
            userId
        });

        return res.status(201).json({
            message: 'Vehicle created successfully for User',
            vehicle: newVehicle
        });

    } catch (err) {
        console.error("Error creating vehicle:", err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};


exports.getVehicleBySocietyId = async (req, res) => {
    try {
      const { societyId } = req.params;
  
      const vehicles = await Vehicle.findAll({
        where: { societyId },
        include: [
          { model: User, as: 'user', attributes: ['userId', 'email', 'username'] },
          { model: Customer, as: 'society', attributes: ['customerId', 'name'] }
        ]
      });
  
      if (!vehicles.length) {
        return res.status(404).json({ message: 'No vehicles found for this society' });
      }
  
      res.status(200).json({ vehicles });
    } catch (error) {
      console.error('Error fetching vehicles by societyId:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.getVehicleByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const vehicles = await Vehicle.findAll({
        where: { userId },
        include: [
          { model: User, as: 'user', attributes: ['userId', 'email', 'username'] },
          { model: Customer, as: 'society', attributes: ['customerId', 'name'] }
        ]
      });
  
      if (!vehicles.length) {
        return res.status(404).json({ message: 'No vehicles found for this user' });
      }
  
      res.status(200).json({ vehicles });
    } catch (error) {
      console.error('Error fetching vehicles by userId:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };