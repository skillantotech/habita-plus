const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");
const { Supervisor } = require("../models/SupervisorModel.js");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); 
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error("Only image or PDF files are allowed"));
    }
  },
}).fields([
  { name: "profilePhoto", maxCount: 1 },
  { name: "idProof", maxCount: 1 },
]);

// Create Supervisor 
const createSupervisor = async (req, res) => {
    try {
      // Extract data from the raw JSON body
      const { firstName, lastName, email, mobileNumber, profilePhoto, idProof } = req.body;
  
      // Validate required fields
      if (!firstName || !lastName || !email || !mobileNumber || !profilePhoto || !idProof) {
        return res.status(400).json({
          message: "Missing required fields: firstName, lastName, email, mobileNumber, profilePhoto, or idProof",
        });
      }
  
      // Check if email is unique
      const existingSupervisor = await Supervisor.findOne({ where: { email } });
      if (existingSupervisor) {
        return res.status(400).json({ message: "A Supervisor  with this email already exists" });
      }
  
      // Create a new Supervisor  entry
      const newSupervisor = await Supervisor.create({
        profilePhoto,
        firstName,
        lastName,
        email,
        mobileNumber,
        idProof,
      });
  
      res.status(201).json({
        message: "Supervisor created successfully",
        data: newSupervisor,
      });
    } catch (error) {
      console.error("Error creating Supervisor:", error.message);
      res.status(500).json({
        message: error.message || "Failed to create Supervisor",
      });
    }
  };;

// Read Supervisor s
const readSupervisor = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const search = req.query.search || "";

    const whereClause = {};
    if (search) {
      whereClause[Op.or] = [
        { firstName: { [Op.like]: `%${search}% `} },
        { lastName: { [Op.like]: `%${search}% `} },
        { email: { [Op.like]: `%${search}% `} },
        { mobileNumber: { [Op.like]:` %${search}% `} },
      ];
    }

    const Supervisor = await Supervisor.findAll({
      where: whereClause,
      limit: Math.min(limit, 100),
      offset: offset,
    });

    if (Supervisor.length === 0) {
      return res.status(404).json({ message: "No Supervisor found" });
    }

    res.status(200).json({
      message: "Supervisor  fetched successfully",
      data: Supervisor,
    });
  } catch (error) {
    console.error("Error reading Supervisor s:", error.message);
    res.status(500).json({ message: "Failed to fetch Supervisor" });
  }
};

// Update Supervisor 
const updateSupervisor = async (req, res) => {
  try {
    const { id } = req.params;
    const Supervisor = await Supervisor.findByPk(id);
    if (!Supervisor) {
      return res.status(404).json({ message: "Supervisor not found" });
    }

    const updateData = req.body;
    if (req.files) {
      if (req.files["profilePhoto"]) {
        updateData.profilePhoto = req.files["profilePhoto"][0].path;
      }
      if (req.files["idProof"]) {
        updateData.idProof = req.files["idProof"][0].path;
      }
    }

    await Supervisor.update(updateData);

    res.status(200).json({
      message: "Supervisor  updated successfully",
      data: Supervisor,
    });
  } catch (error) {
    console.error("Error updating Supervisor :", error.message);
    res.status(500).json({ message: "Failed to update Supervisor " });
  }
};

// Delete Supervisor 
const deleteSupervisor = async (req, res) => {
  try {
    const { id } = req.params;
    const Supervisor = await Supervisor.findByPk(id);
    if (!Supervisor) {
      return res.status(404).json({ message: "Supervisor not found" });
    }

    await Supervisor.destroy();
    res.status(200).json({ message: "Supervisor  deleted successfully" });
  } catch (error) {
    console.error("Error deleting Supervisor :", error.message);
    res.status(500).json({ message: "Failed to delete Supervisor " });
  }
};

module.exports = {
  createSupervisor,
  readSupervisor,
  updateSupervisor,
  deleteSupervisor,
};