const { Building, Floor, Customer } = require("../models");
const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

exports.createFloor = async (req, res) => {
  console.log("create floor controller called");
  try {
    console.log("Create Floor controller called");
    const { societyId, floorName, shortForm } = req.body;
    console.log(req.body);

    if (!societyId) {
      return sendErrorResponse(res, "Society ID is not found", 400);
    }

    const societyExist = await Customer.findByPk(societyId);
    if (!societyExist) {
      return sendErrorResponse(res, "Society does not exist", 404);
    }

    const floorExist = await Floor.findOne({
      where: {
        floorName,
        societyId,
        shortForm,
      },
    });

    if (floorExist) {
      return sendErrorResponse(res, "Floor Exists", 400);
    }

    const result = await Floor.create(req.body);
    return sendSuccessResponse(res, "Floor created successfully", result, 201);
  } catch (err) {
    console.error("Error creating building:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};

exports.getFloors = async (req, res) => {
  console.log(req.query);
  try {
    const buildings = await Floor.findAll();
    return sendSuccessResponse(
      res,
      "Floors fetched successfully",
      buildings,
      200
    );
  } catch (err) {
    console.error("Error fetching buildings:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};
