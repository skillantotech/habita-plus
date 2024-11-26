const { Op } = require("sequelize");
const Visitor_new_visitentry = require("../models/Visitor_new_visitentry");
const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

exports.createVisitorNewVisitEntryController = async (req, res) => {
  console.log("new visitor entry");
  try {
    console.log(req.body);
    const {
      visit_expect_date_of_entry_date,
      visit_name,
      visit_type_Id,
      visit_mobileno,
      visit_porpous,
      societyId,
      senderId,
    } = req.body;
    if (
      !visit_expect_date_of_entry_date ||
      !visit_name ||
      !visit_type_Id ||
      !visit_mobileno ||
      !visit_porpous ||
      !societyId ||
      !senderId
    ) {
      return sendErrorResponse(res, "Enter All Details", 400);
    }

    const result = await Visitor_new_visitentry.create({
      ...req.body,
      visit_mobileno: parseInt(visit_mobileno),
      visit_type_Id: parseInt(visit_type_Id),
    });
    // console.log(result);

    return sendSuccessResponse(
      res,
      "New Visitor Entry created successfully",
      result,
      201
    );
  } catch (err) {
    console.error("Error creating notice:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};

exports.newvisitorlisttable = async (req, res) => {
  try {
    console.log("Visitor list handler");
    console.log(req.query);

    const { societyId, startdate, enddate, status, mobileno } = req.query;
    console.log(req.query);

    if (!societyId) {
      return sendErrorResponse(res, "Enter Socity Id", 400);
    }
    const whereClause = {};

    const pagination = {
      page: parseInt(req.query.page) || 0,
      pageSize: parseInt(req.query.pageSize) || 10,
    };
    if (startdate && enddate) {
      whereClause.visit_expect_date_of_entry_date = {
        [Op.between]: [startdate, enddate],
      };
    } else if (startdate) {
      whereClause.visit_expect_date_of_entry_date = {
        [Op.gte]: startdate,
      };
    } else if (enddate) {
      whereClause.visit_expect_date_of_entry_date = {
        [Op.lte]: enddate,
      };
    }
    if (status) {
      whereClause.status = { [Op.like]: `%${status}%` }; // Case-insensitive search
    }
    if (mobileno) {
      whereClause.visit_mobileno = { [Op.like]: `%${mobileno}%` }; // Case-insensitive search
    }

    if (societyId) {
      whereClause.societyId = societyId;
    }
    // if (userGroupId) {
    //   whereClause.userGroupId = userGroupId;
    // }

    const { count, rows } = await Visitor_new_visitentry.findAndCountAll({
      where: whereClause,
      limit: pagination.pageSize,
      offset: pagination.page * pagination.pageSize,
    });
    const totalPages = Math.ceil(count / pagination.pageSize);
    res.status(200).json({
      message: "Visitor List fetched successfully",
      data: rows,
      total: count,
      totalPages,
    });
  } catch (err) {
    console.error("Error creating notice:", err);
    return sendErrorResponse(res, "Internal server error", 500, err.message);
  }
};
