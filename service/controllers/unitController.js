const { Unit, UnitType, Floor } = require("../models");

// const createUnit = async (req, res) => {
//   console.log("Create Unit Called!");
//   try {
//     const {
//       societyId,
//       unitName,
//       buildingId,
//       floorId,
//       unitTypeId,
//       unitNumber,
//       unitsize,
//     } = req.body;

//     // Validate required fields
//     if (
//       !societyId ||
//       !unitName ||
//       !buildingId ||
//       !floorId ||
//       !unitTypeId ||
//       !unitNumber
//     ) {
//       return res.status(400).json({ message: "All fields are required!" });
//     }

//     const isUnitExists = await Unit.findOne({ where: unitName });

//     if (isUnitExists) {
//       return sendErrorResponse("Unit Already Exists", 400);
//     }
//     // Create new unit
//     const newUnit = await Unit.create({
//       societyId,
//       unitName,
//       buildingId,
//       floorId,
//       unitTypeId,
//       unitNumber,
//       unitsize,
//     });

//     // Respond with created unit
//     res
//       .status(201)
//       .json({ message: "Unit created successfully!", data: newUnit });
//   } catch (error) {
//     console.error("Error creating unit: ", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// Get a unit by ID or query params

const createUnit = async (req, res) => {
  console.log("Create Unit Called!");
  try {
    const {
      societyId,
      unitName,
      buildingId,
      floorId,
      unitTypeId,
      unitNumber,
      unitsize,
    } = req.body;

    if (
      !societyId ||
      !unitName ||
      !buildingId ||
      !floorId ||
      !unitTypeId ||
      !unitNumber
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const isUnitExists = await Unit.findOne({ where: { unitName: unitName } });

    if (isUnitExists) {
      return res.status(400).json({ message: "Unit Already Exists" });
    }

    const newUnit = await Unit.create({
      societyId,
      unitName,
      buildingId,
      floorId,
      unitTypeId,
      unitNumber,
      unitsize,
    });

    res
      .status(201)
      .json({ message: "Unit created successfully!", data: newUnit });
  } catch (error) {
    console.error("Error creating unit: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUnit = async (req, res) => {
  console.log("Get Unit Called!");
  try {
    const { unitId } = req.query;

    // Validate the input
    if (!unitId) {
      return res.status(400).json({ message: "Unit ID is required!" });
    }

    // Find unit by ID
    const unit = await Unit.findOne({ where: { unitId } });

    // Check if the unit exists
    if (!unit) {
      return res.status(404).json({ message: "Unit not found!" });
    }

    // Respond with found unit
    res.status(200).json({ message: "Unit found!", data: unit });
  } catch (error) {
    console.error("Error fetching unit: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllUnits = async (req, res) => {
  try {
    const pagination = {
      page: parseInt(req.query.page, 10) || 0,
      pageSize: parseInt(req.query.pageSize, 10) || 10,
    };

    const whereClause = {};
    console.log(req.query);

    // const units = await Unit.findAll();

    const { count, rows } = await Unit.findAndCountAll({
      where: whereClause,
      limit: pagination.pageSize,
      offset: pagination.page * pagination.pageSize,
      include: [
        {
          model: UnitType,
          attributes: ["unitTypeId", "unitTypeName"], // specify fields you need
        },
        {
          model: Floor,
          attributes: ["floorId", "floorName"], // specify fields you need
        },
      ],
    });

    const totalPages = Math.ceil(count / pagination.pageSize);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No units found!" });
    }

    return res.status(200).json({
      message: "Customers fetched successfully",
      data: rows,
      total: count,
      totalPages,
    });

  } catch (error) {
    console.error("Error fetching units: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUnit, getUnit, getAllUnits };
