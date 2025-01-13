const { User } = require("../models");
const { getAllUsersService, getUserByIdService } = require("../services/userService");
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

    const password = "admin"; // Default password

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
    const { address, email, salutation, firstName, lastName, mobileNumber, alternateNumber, roleId } = req.body;
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
 //const societyId = req.params.societyId;
    if (!societyId) {
      return res.status(400).json({ message: "Society ID is required" });
    }

    const residents = await User.findAll({
      where: {
        societyId,
        isManagementCommittee: false,
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

// Approve User

const approveUser = async (req, res) => {
  const { userId, unitId } = req.body;

  if (!userId || !unitId) {
    return res.status(400).json({ message: "Both userId and unitId are required" });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.status = "active";
    user.unitId = unitId;
    await user.save();

    res.status(200).json({
      message: "User approved successfully",
      user: {
        id: user.id,
        status: user.status,
        unitId: user.unitId,
      },
    });
  } catch (err) {
    console.error("Error approving user:", err);
    res.status(500).json({ error: "Failed to approve user", details: err.message });
  }
};

// Reject User
const rejectUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.status = "inactive";
    user.unitId = null;
    await user.save();

    res.status(200).json({ message: "User rejected successfully", user });
  } catch (err) {
    res.status(500).json({ error: "Failed to reject user", details: err.message });
  }
};


// const getAllApprovedUsers = async (req, res) => {
//   try {
//     const approvedUsers = await User.findAll({
//       where: {
//         status: "active",
//       },
//     });

//     if (approvedUsers.length === 0) {
//       return res.status(404).json({ message: "No approved users found" });
//     }

//     res.status(200).json({
//       message: "Approved users retrieved successfully",
//       users: approvedUsers.map(user => ({
//         id: user.id,
//         status: user.status,
//         unitId: user.unitId,
//       })),
//     });
//   } catch (err) {
//     console.error("Error retrieving approved users:", err);
//     res.status(500).json({ error: "Failed to retrieve approved users", details: err.message });
//   }
// };
const getAllApprovedUsers = async (req, res) => {
  const { societyId } = req.params; // Get societyId from the request params

  try {
    // Ensure that societyId is provided
    if (!societyId) {
      return res.status(400).json({ error: "Society ID is required" });
    }
// if (!unitId) {
//       return res.status(400).json({ error: "unitId  is required" });
//     }
    const approvedUsers = await User.findAll({
      where: {
        status: "active",
        societyId: societyId,
      
      },
    });

    if (approvedUsers.length === 0) {
      return res.status(404).json({ message: "No approved users found for this society" });
    }

    res.status(200).json({
      message: "Approved users retrieved successfully",
      users: approvedUsers.map(user => ({
       id: user.id,
    firstName: user.firstName, 
    lastName: user.lastName, 
    roleId: user.roleId,     
    mobileNumber: user.mobileNumber, 
    status: user.status,      
       
      })),
    });
  } catch (err) {
    console.error("Error retrieving approved users:", err);
    res.status(500).json({ error: "Failed to retrieve approved users", details: err.message });
  }
};

const getAllDeactiveUsers = async (req, res) => {
  const { societyId } = req.params; // Get societyId from the request params

  try {
    // Ensure that societyId is provided
    if (!societyId) {
      return res.status(400).json({ error: "Society ID is required" });
    }

    // Fetch deactivated users with the given criteria
    const deactiveUsers = await User.findAll({
      where: {
        status: "inactive", // Status should be inactive
        societyId: societyId, // Match the given societyId
        unitId: null, // Ensure unitId is null
      },
    });

    // Check if any users were found
    if (deactiveUsers.length === 0) {
      return res.status(404).json({ message: "No deactivated users found for this society" });
    }

    // Respond with the retrieved users
    res.status(200).json({
      message: "Deactivated users retrieved successfully",
      users: deactiveUsers.map(user => ({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        roleId: user.roleId,
        mobileNumber: user.mobileNumber,
        status: user.status,
      })),
    });
  } catch (err) {
    console.error("Error retrieving deactivated users:", err);
    res.status(500).json({ error: "Failed to retrieve deactivated users", details: err.message });
  }
};


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  createSocietyModerator,
  createSocietyResident,
  getResidentBySocietyId,
  approveUser,
  rejectUser,
  getAllApprovedUsers,
  getAllDeactiveUsers,
};