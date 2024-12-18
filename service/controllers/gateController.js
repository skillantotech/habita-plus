const { Gate, Building } = require('../models'); // Import models
const { sendErrorResponse, sendSuccessResponse } = require('../utils/response');


exports.createGate = async (req, res) => {
  try {
    const { societyId, gateName, gateNumber } = req.body;
    // console.log("hello")
    // console.log(societyId, gateName, gateNumber)

    // Validate required fields
    if (!societyId || !gateName || !gateNumber) {
      return sendErrorResponse(res, "Building ID, gate name, and gate number are required", 400);
    }

    const buildingExist = await Building.findByPk(societyId);
    if (!buildingExist) {
      return sendErrorResponse(res, "Building does not exist", 404);
    }

 
    const newGate = await Gate.create({
      societyId,
      gateName,
      gateNumber
    });

    return sendSuccessResponse(res, "Gate created successfully", newGate, 201);
  } catch (err) {
    console.error("Error creating gate:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};

// exports.createGate = async (req, res) => {
//   try {
//     const { societyId, gateName, gateNumber } = req.body;

//     if (!societyId || !gateName || !gateNumber) {
//       return sendErrorResponse(res, "Society ID, gate name, and gate number are required", 400);
//     }

//     const buildingExist = await Building.findByPk(societyId);
//     if (!buildingExist) {
//       return sendErrorResponse(res, "Building does not exist", 404);
//     }

//     const newGate = await Gate.create({ societyId, gateName, gateNumber });
//     return sendSuccessResponse(res, "Gate created successfully", newGate, 201);
//   } catch (err) {
//     console.error("Error creating gate:", err);
//     return sendErrorResponse(res, "Internal server error", 500, err.message);
//   }
// };



exports.getGates = async (req, res) => {
  try {
    const gates = await Gate.findAll({
      include: [{
        model: Building,
        attributes: ['societyId', 'buildingName'], 
      }],
    });

    if (gates.length === 0) {
      return sendErrorResponse(res, "No gates found", 404);
    }

    return sendSuccessResponse(res, "Gates fetched successfully", gates, 200);
  } catch (err) {
    console.error("Error fetching gates:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};


exports.getGatesBysocietyId = async (req, res) => {
  try {
    const { societyId } = req.params;

    if (!societyId) {
      return sendErrorResponse(res, "Building ID is required", 400);
    }

  
    const gates = await Gate.findAll({
      where: { societyId },
      include: [{
        model: Building,
        attributes: ['societyId', 'buildingName'], 
      }],
    });

    if (gates.length === 0) {
      return sendErrorResponse(res, `No gates found for building ID ${societyId}`, 404);
    }

    return sendSuccessResponse(res, `Gates for building ${societyId} fetched successfully`, gates, 200);
  } catch (err) {
    console.error("Error fetching gates by societyId:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};