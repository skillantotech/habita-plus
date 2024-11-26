const { User, Address } = require("../models");
const {
  getAllUsersService,
  getUserByIdService,
} = require("../services/userService");

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

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  createSocietyModerator,
};
