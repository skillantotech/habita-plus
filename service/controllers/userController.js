const { User, Unit } = require("../models");
const { getAllUsersService, getUserByIdService } = require("../services/userService");
//const { createUnit, getUnit, getAllUnits } = require("../controllers/unitController.js");
const addressService = require("../services/addressService");

const createSocietyModerator = async (req, res) => {
  try {
    const { address, email, ...customerData } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const addressData = await addressService.createAddress(address);
    const addressId = addressData.addressId;

    const password = "admin";

    const result = await User.create({
      ...customerData,
      email,
      addressId,
      password,
      livesHere: true,
      primaryContact: true,
      isManagementCommittee: true,
      managementDesignation: "admin",
    });

    res.status(201).json({
      message: "Society Moderator created successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating society moderator:", error);
    res.status(500).json({ error: error.message });
  }
};

const createSocietyResident = async (req, res) => {
  try {
    const { address, email, salutation, firstName, lastName, mobileNumber, alternateNumber, roleId, unitId } = req.body;
    const { societyId } = req.params;

    if (!societyId) {
      return res.status(400).json({ message: "Society ID is required in the URL" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const addressData = await addressService.createAddress(address);
    const addressId = addressData.addressId;

    const password = "Himansu"; // Replace with a secure password strategy

    let unit = null;
    if(unitId) {
      unit = await Unit.findByPk(unitId);
      if(!unit){
        return res.status(400).json({ message: "Invalid unit ID" });
      }
    }

    const residentDetails = {
      salutation,
      firstName,
      lastName,
      password,
      countryCode: address.countryCode || 91,
      mobileNumber,
      alternateNumber,
      email,
      roleId,
      livesHere: true,
      primaryContact: true,
      isManagementCommittee: false,
      managementDesignation: "Resident",
      status: "active",
      addressId,
      societyId,
     unitId: unit ? unit.unitId : null,
    };

    const result = await User.create(residentDetails);

    res.status(201).json({
      message: "Society Resident created successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating society resident:", error);
    res.status(500).json({ error: error.message });
  }
};


const getResidentBySocietyId = async (req, res) => {
  try {
   const { societyId } = req.params;
    if (!societyId) {
      return res.status(400).json({ message: "Society ID is required" });
    }

    const residents = await User.findAll({
      where: {
        societyId,
        isManagementCommittee: false,
         isDeleted:0,
        status: "active",
      },
      attributes: [
        "userId",
        "salutation",
        "firstName",
        "lastName",
        "email",
        "mobileNumber",
        "roleId",
        "status",
        "addressId",
        "primaryContact",
        "livesHere",
      ],
    });

    if (!residents || residents.length === 0) {
      return res.status(404).json({ message: "No residents found for the given Society ID" });
    }

    res.status(200).json({
      message: "Residents fetched successfully",
      residents,
    });
  } catch (error) {
    console.error("Error fetching residents:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateResidentBySocietyId = async (req, res) => {
  try {
    const { societyId } = req.params;
    const { userId, salutation, firstName, lastName, mobileNumber, alternateNumber, roleId, unitId, status } = req.body;

    if (!societyId) {
      return res.status(400).json({ message: "Society ID is required in the URL" });
    }
    if (!userId) {
      return res.status(400).json({ message: "User ID is required in the request body" });
    }

    const resident = await User.findOne({ where: { userId, societyId, isManagementCommittee: false } });

    if (!resident) {
      return res.status(404).json({ message: "Resident not found in the given society" });
    }

    let unit = null;
    if (unitId) {
      unit = await Unit.findByPk(unitId);
      if (!unit) {
        return res.status(400).json({ message: "Invalid unit ID" });
      }
    }

    await resident.update({
      salutation,
      firstName,
      lastName,
      mobileNumber,
      alternateNumber,
      roleId,
      status,
      unitId: unit ? unit.unitId : resident.unitId,
    });

    res.status(200).json({ message: "Resident updated successfully", resident });
  } catch (error) {
    console.error("Error updating resident:", error);
    res.status(500).json({ error: error.message });
  }
};


const createUser = async (req, res) => {
  try {
    const { address, ...customerData } = req.body;
    const addressData = await addressService.createAddress(address);
    const addressId = addressData.addressId;

    const result = await User.create({ ...customerData, addressId });

    if (result) {
      res.status(201).json({
        message: "User created successfully",
        result,
      });
    } else {
      throw new Error("Error creating user");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  createSocietyModerator,
  createSocietyResident,
  getResidentBySocietyId,
  updateResidentBySocietyId,
};