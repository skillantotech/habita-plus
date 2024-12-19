const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");
const { Security } = require("../models/Security.js");

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

// Create Security Guard
const createSecurityGuard = async (req, res) => {
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
      const existingSecurityGuard = await Security.findOne({ where: { email } });
      if (existingSecurityGuard) {
        return res.status(400).json({ message: "A security guard with this email already exists" });
      }
  
      // Create a new security guard entry
      const newSecurityGuard = await Security.create({
        profilePhoto,
        firstName,
        lastName,
        email,
        mobileNumber,
        idProof,
      });
  
      res.status(201).json({
        message: "Security guard created successfully",
        data: newSecurityGuard,
      });
    } catch (error) {
      console.error("Error creating security guard:", error.message);
      res.status(500).json({
        message: error.message || "Failed to create security guard",
      });
    }
  };
// Read Security Guards
const readSecurityGuard = async (req, res) => {
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

    const securityGuards = await Security.findAll({
      where: whereClause,
      limit: Math.min(limit, 100),
      offset: offset,
    });

    if (securityGuards.length === 0) {
      return res.status(404).json({ message: "No security guards found" });
    }

    res.status(200).json({
      message: "Security guards fetched successfully",
      data: securityGuards,
    });
  } catch (error) {
    console.error("Error reading security guards:", error.message);
    res.status(500).json({ message: "Failed to fetch security guards" });
  }
};

// Update Security Guard
const updateSecurityGuard = async (req, res) => {
  try {
    const { id } = req.params;
    const securityGuard = await Security.findByPk(id);
    if (!securityGuard) {
      return res.status(404).json({ message: "Security guard not found" });
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

    await securityGuard.update(updateData);

    res.status(200).json({
      message: "Security guard updated successfully",
      data: securityGuard,
    });
  } catch (error) {
    console.error("Error updating security guard:", error.message);
    res.status(500).json({ message: "Failed to update security guard" });
  }
};

// Delete Security Guard
const deleteSecurityGuard = async (req, res) => {
  try {
    const { id } = req.params;
    const securityGuard = await Security.findByPk(id);
    if (!securityGuard) {
      return res.status(404).json({ message: "Security guard not found" });
    }

    await securityGuard.destroy();
    res.status(200).json({ message: "Security guard deleted successfully" });
  } catch (error) {
    console.error("Error deleting security guard:", error.message);
    res.status(500).json({ message: "Failed to delete security guard" });
  }
};

module.exports = {
  createSecurityGuard,
  readSecurityGuard,
  updateSecurityGuard,
  deleteSecurityGuard,
};