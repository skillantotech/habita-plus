const { Customer, UnitType } = require("../models");
const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

exports.createUnitType = async (req, res) => {
  try {
    console.log("Create UnitType controller called");
    const { societyId, unitTypeName } = req.body;
    console.log(req.body);

    if (!societyId) {
      return sendErrorResponse(res, "Society ID is not found", 400);
    }

    const societyExist = await Customer.findByPk(societyId);
    if (!societyExist) {
      return sendErrorResponse(res, "Society does not exist", 404);
    }

    const unitTypeExists = await UnitType.findOne({
      where: {
        unitTypeName,
        societyId,
      },
    });

    if (unitTypeExists) {
      return sendErrorResponse(res, "Unit Type Exists", 400);
    }

    const result = await UnitType.create(req.body);
    return sendSuccessResponse(res, "Floor created successfully", result, 201);
  } catch (err) {
    console.error("Error creating building:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};

exports.getUnitType = async (req, res) => {
  console.log(req.query);
  try {
    const buildings = await UnitType.findAll();
    return sendSuccessResponse(
      res,
      "Unit Types fetched successfully",
      buildings,
      200
    );
  } catch (err) {
    console.error("Error fetching buildings:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};
