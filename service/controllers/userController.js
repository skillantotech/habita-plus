
const { User, Address, } = require("../models");
const {
  getAllUsersService,
  getUserByIdService,
} = require("../services/userService");


// const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");
const { generateRandomPassword } = require("../utils/password");

const createAddress = async (data) => {
  await Address.create(data);
};

const createSocietyModerator = async (req, res) => {
  console.log("Create Society Moderator called !");
  try {
    const { address, email, ...customerdata } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const addressData = await Address.create(address);
    const addressId = addressData.addressId;
    console.log(addressId);
    // const password = generateRandomPassword(6);
    const password = "admin";
    console.log(customerdata);

    const result = await User.create({
      ...customerdata,
      email,
      addressId,
      password,
      livesHere: true,
      primaryContact: true,
      isManagementCommittee: true,
      managementDesignation: "admin",
    });

    res
      .status(201)
      .json({ message: "Society Moderator created successfully", result });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
};

const createSocietyResident = async (req, res) => {
  console.log("Create Society Resident called");
  try {
    const {
      address,
      email,
      salutation,
      firstName,
      lastName,
      mobileNumber,
      alternateNumber,
      roleId,
      societyId,
    } = req.body;

    // Validate required fields
    if (!email || !firstName || !lastName || !mobileNumber || !roleId || !societyId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create address
    const addressData = await Address.create(address);
    const addressId = addressData.id;

    const password = "himansu"; // Default password for residents

    // Prepare user details
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
    };

    // Create user
    const result = await User.create(residentDetails);

    res
      .status(201)
      .json({ message: "Society Resident created successfully", result });
  } catch (error) {
    console.error("Error creating resident:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getResidentBySocityId = async (req, res) => {
  console.log("Get Resident By Society ID called");
  try {
    const { societyId } = req.params;

    if (!societyId) {
      return res.status(400).json({ message: "Society ID is required" });
    }

    const residents = await User.findAll({
      where: {
        societyId,
        isManagementCommittee: false,
      },
      attributes: [
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
    res.status(200).json({ message: "Residents fetched successfully", residents });
  } catch (error) {
    console.error("Error fetching residents:", error);
    res.status(500).json({ error: error.message });
  }
};


const createUser = async (req, res) => {
  try {
    const { address, ...customerdata } = req.body;
    console.log(req.body);

    const addressData = createAddress(address);
    const addressId = addressData._id;
    console.log(address);

    const result = await User.create({ ...customerdata, addressId });
    if (result)
      res.status(201).json({ message: "User created successfully", result });
    else throw new Error("Error creating user");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
// const createResident = async (req, res) => {
  // console.log("Create Resident called!");
  // try {
    // const { address, email, societyId, ...residentData } = req.body;
// 
    // const existingSociety = await Customer.findOne({ where: { customerId: societyId } });
    // if (!existingSociety) {
      // return res.status(400).json({ message: "Invalid society ID" });
    // }
// 
    // const existingUser = await User.findOne({ where: { email } });
    // if (existingUser) {
      // return res.status(400).json({ message: "Email already in use" });
    // }
//  
    // const addressData = await Address.create(address);
    // const addressId = addressData.addressId;
// 
    // const password = await bcrypt.hash("resident123", 10);
// 
    // const result = await User.create({
      // ...residentData,
      // email,
      // password,
      // addressId, // Save the address ID
      // societyId, // Save the society ID
      // managementDesignation: "resident", // Set management designation as "resident"
      // livesHere: true,
      // primaryContact: true,
    // });
// 
    // res.status(201).json({
      // message: "Resident created successfully",
      // result,
    // });
  // } catch (error) {
    // console.error("Error creating resident:", error);
    // res.status(500).json({ error: error.message });
  // }
// };


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  createSocietyModerator,
  // createResident,
  createSocietyResident,
  getResidentBySocityId,
};
