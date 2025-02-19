

const FacilityManagement = require("../models/FacilityManagement");  // Correct the import if needed
const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

exports.createFacilityManagement = async (req, res) => {
    try {
        const societyId = req.params.societyId;  // Getting societyId from URL parameter
        console.log("Request body: ", req.body);
        
        const {
            facilityName,
            facilityType,
            facilityUsage,
            facilityCharge,
            chargeAmount,
            bookingFrom,
            bookingTo,
        } = req.body;

        // Validate input fields
        if (!facilityName || !facilityType || !facilityUsage || !facilityCharge || !chargeAmount) {
            return sendErrorResponse(res, "All fields are required", 400);
        }

        // Check if the facility already exists under the same societyId
        const existingFacility = await FacilityManagement.findOne({
            where: {
                facilityName,
                facilityType,
                facilityUsage,
                facilityCharge,
                chargeAmount,
                societyId,
                ...(bookingFrom && { bookingFrom }),  // Add bookingFrom if it's provided
                ...(bookingTo && { bookingTo })  // Add bookingTo if it's provided
            },
        });

        if (existingFacility) {
            return sendErrorResponse(res, "Facility Management already exists", 400);
        }

        // Create the new facility and associate it with the societyId
        const facility = await FacilityManagement.create({
            ...req.body,  // Take other fields from the body
            societyId  // Add societyId from URL parameter
        });

        // Return the success response with the created facility
        return sendSuccessResponse(res, "Facility Management created successfully", facility);
    } catch (error) {
        console.error("Error creating facility management:", error);
        return sendErrorResponse(res, "Internal server error", 500, error.message);
    }
};

exports.getFacilityRecord = async (req, res) => {
    try {
        const societyId = req.params.societyId;  // Getting societyId from URL parameter

        // Check if societyId is provided
        if (!societyId) {
            return sendErrorResponse(res, "Please provide a societyId", 400);
        }

        // Fetch all facilities under the given societyId
        const facilities = await FacilityManagement.findAll({
            where: { societyId },
        });

        // If no facilities are found for the given societyId, return an error
        if (facilities.length === 0) {
            return sendErrorResponse(res, "No facilities found for the provided societyId", 404);
        }

        // Send success response with the found facilities
        return sendSuccessResponse(res, "Facility records fetched successfully", facilities);

    } catch (error) {
        console.error("Error fetching facility records:", error);
        return sendErrorResponse(res, "Internal server error", 500, error.message);
    }
}

exports.updateFacilityRecord = async (req, res) => {
    console.log("Update facility record");
    try {
        const societyId = req.params.societyId;  // Getting societyId from URL parameter
        const facilityId = req.params.facilityId;  // Getting facilityId from URL parameter

        // Validate if the societyId and facilityId are provided
        if (!societyId || !facilityId) {
            return sendErrorResponse(res, "Please provide both societyId and facilityId", 400);
        }

        // Find the facility by societyId and facilityId
        const facility = await FacilityManagement.findOne({
            where: { societyId, facilityId }
        });

        // If the facility is not found, return an error
        if (!facility) {
            return sendErrorResponse(res, "Facility not found for the provided societyId and facilityId", 404);
        }

        // Get the updated data from the request body (only update provided fields)
        const {
            facilityName,
            facilityType,
            facilityUsage,
            facilityCharge,
            chargeAmount,
            bookingFrom,
            bookingTo,
        } = req.body;

        // Validate the facilityType, facilityUsage, and facilityCharge if they are provided
        const validFacilityTypes = ['PublicUsage', 'PrivateUsage'];       
        const validFacilityUsages = ['Hourly', 'Days'];
        const  validFacilityCharges= ['Free', 'Paid'];

        if (facilityType && !validFacilityTypes.includes(facilityType)) {
            return sendErrorResponse(res, `Invalid facilityType. Allowed values are ${validFacilityTypes.join(", ")}`, 400);
        }

        if (facilityUsage && !validFacilityUsages.includes(facilityUsage)) {
            return sendErrorResponse(res, `Invalid facilityUsage. Allowed values are ${validFacilityUsages.join(", ")}`, 400);
        }

        if (facilityCharge && !validFacilityCharges.includes(facilityCharge)) {
            return sendErrorResponse(res, `Invalid facilityCharge. Allowed values are ${validFacilityCharges.join(", ")}`, 400);
        }

        // Update the fields provided in the request body
        const updatedFacility = await facility.update({
            facilityName: facilityName || facility.facilityName,  // Only update if provided
            facilityType: facilityType || facility.facilityType,
            facilityUsage: facilityUsage || facility.facilityUsage,
            facilityCharge: facilityCharge || facility.facilityCharge,
            chargeAmount: chargeAmount || facility.chargeAmount,
            bookingFrom: bookingFrom || facility.bookingFrom,
            bookingTo: bookingTo || facility.bookingTo
        });

        // Return success response with the updated facility
        return sendSuccessResponse(res, "Facility record updated successfully", updatedFacility);

    } catch (error) {
        console.error("Error updating facility record:", error);
        return sendErrorResponse(res, "Internal server error", 500, error.message);
    }
};

exports.deleteFacilityRecord = async (req, res) => {
    try{
        const {facilityId} =req.params;
        if(!facilityId){
            return sendErrorResponse(res, "Please provide facilityId", 400);
        }
        
        const parsedFacilityId = parseInt(facilityId);
    
        if(isNaN(parsedFacilityId)){
            return sendErrorResponse(res, "Invalid facilityId", 400);
        }
        const facility = await FacilityManagement.findOne({
            where: {facilityId: parsedFacilityId}
        })
        if (!facility){
            return sendErrorResponse(res, "Facility not found", 404);
        }
        await FacilityManagement.destroy({
            where:{facilityId: parsedFacilityId},
        });
        return sendSuccessResponse(res, "Facility record delete successfully", facility);

    } catch (error) {
        console.error("Error deleting facility record:", error);
        return sendErrorResponse(res, "Internal server error", 500, error.message);
    }
}


exports.getFacilityDataById = async (req, res) => {
  try {
    const { facilityId } = req.params;
    const facility = await FacilityManagement.findOne({ where: { facilityId } });

    if (!facility) {
      return res.status(404).json({ message: "Facility not found" });
    }

    return res.status(200).json(facility);
  } catch (err) {
    console.error("Error fetching Facility by ID:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

