// const { Op } = require("sequelize");
// const Visitor_new_visitentry = require("../models/Visitor_new_visitentry");
// const visitor_type=require("../models/visitorRelationship")
// const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

// exports.createVisitorNewVisitEntryController = async (req, res) => {
//   console.log("new visitor entry");
//   try {
//     console.log(req.body);
//     const {
//       visit_expect_date_of_entry_date,
//       visit_name,
//       visit_type_Id,
//       visit_mobileno,
//       visit_porpous,
//       societyId,
//       senderId,
//     } = req.body;
//     if (
//       !visit_expect_date_of_entry_date ||
//       !visit_name ||
//       !visit_type_Id ||
//       !visit_mobileno ||
//       !visit_porpous ||
//       !societyId ||
//       !senderId
//     ) {
//       return sendErrorResponse(res, "Enter All Details", 400);
//     }

//     const result = await Visitor_new_visitentry.create({
//       ...req.body,
//       visit_mobileno: parseInt(visit_mobileno),
//       visit_type_Id: parseInt(visit_type_Id),
//     });
//     // console.log(result);

//     return sendSuccessResponse(
//       res,
//       "New Visitor Entry created successfully",
//       result,
//       201
//     );
//   } catch (err) {
//     console.error("Error creating notice:", err);
//     return sendErrorResponse(res, "Internal server error", 500, err.message);
//   }
// };

// exports.newvisitorlisttable = async (req, res) => {
//   try {
//     console.log("Visitor list handler");
//     console.log(req.query);

//     const { societyId, startdate, enddate, status, mobileno } = req.query;
//     console.log(req.query);

//     if (!societyId) {
//       return sendErrorResponse(res, "Enter Socity Id", 400);
//     }
//     const whereClause = {};

//     const pagination = {
//       page: parseInt(req.query.page) || 0,
//       pageSize: parseInt(req.query.pageSize) || 10,
//     };
//     if (startdate && enddate) {
//       whereClause.visit_expect_date_of_entry_date = {
//         [Op.between]: [startdate, enddate],
//       };
//     } else if (startdate) {
//       whereClause.visit_expect_date_of_entry_date = {
//         [Op.gte]: startdate,
//       };
//     } else if (enddate) {
//       whereClause.visit_expect_date_of_entry_date = {
//         [Op.lte]: enddate,
//       };
//     }
//     if (status) {
//       whereClause.status = { [Op.like]: `%${status}%` }; // Case-insensitive search
//     }
//     if (mobileno) {
//       whereClause.visit_mobileno = { [Op.like]: `%${mobileno}%` }; // Case-insensitive search
//     }

//     if (societyId) {
//       whereClause.societyId = societyId;
//     }
//     // if (userGroupId) {
//     //   whereClause.userGroupId = userGroupId;
//     // }

//     const { count, rows } = await Visitor_new_visitentry.findAndCountAll({
//       where: whereClause,
//       limit: pagination.pageSize,
//       offset: pagination.page * pagination.pageSize,
//     });
//     const totalPages = Math.ceil(count / pagination.pageSize);
//     res.status(200).json({
//       message: "Visitor List fetched successfully",
//       data: rows,
//       total: count,
//       totalPages,
//     });
//   } catch (err) {
//     console.error("Error creating notice:", err);
//     return sendErrorResponse(res, "Internal server error", 500, err.message);
//   }
// };
const { Op } = require("sequelize");
const Visitor_new_visitentry = require("../models/Visitor_new_visitentry");
const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");
const visitorRelationship = require("../models/visitorRelationship");

exports.createVisitorNewVisitEntryController = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const {
      visit_expect_date_of_entry_date,
      visit_name,
      visit_type_Id,
      visit_mobileno,
      visit_porpous,
      visit_location, 
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

    // Check if Visit_relation_Id and societyId exist in the visitorRelationship table
    const visitorRelationshipEntry = await visitorRelationship.findOne({
      where: {
        Visit_relation_Id: visit_type_Id,  // Check if the Visit_relation_Id exists
        societyId: societyId,  // Ensure that societyId matches
      },
    });

    if (!visitorRelationshipEntry) {
      return sendErrorResponse(res, "Invalid Visit Relation Id or SocietyId", 400);
    }

    // Insert into visitor_new_visitentry
    // const result = await Visitor_new_visitentry.create({
    //   ...req.body,
    //   visit_mobileno: parseInt(visit_mobileno),
    //   visit_type_Id: parseInt(visit_type_Id),
    // });

    // Prepare the data object for insertion
const newVisitorEntryData = {
  visit_expect_date_of_entry_date,
  visit_name,
  visit_type_Id: parseInt(visit_type_Id),
  visit_mobileno: parseInt(visit_mobileno),
  visit_porpous,
  societyId,
  senderId,
};

// Add visit_location only if provided
if (visit_location) {
  newVisitorEntryData.visit_location = visit_location;
}

// Insert into the database
const result = await Visitor_new_visitentry.create(newVisitorEntryData);

    return sendSuccessResponse(res, "New Visitor Entry created successfully", result, 201);
  } catch (err) {
    console.error('Error creating visitor entry:', err);
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