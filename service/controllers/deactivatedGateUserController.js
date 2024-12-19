const express = require("express");
const router = express.Router();

// Mock Data (Simulating Database Response)
let deactivatedUsers = [
  {
    id: 1,
    firstName: "Joseph",
    lastName: "Stalin",
    gateNo: "4",
    mobileNo: "8798766756",
    email: "joseph@gmail.com",
    status: "deactivated",
  },
  {
    id: 2,
    firstName: "Tom",
    lastName: "Steve",
    gateNo: "7",
    mobileNo: "8798766756",
    email: "tom@gmail.com",
    status: "deactivated",
  },
];

// Controller: Fetch all deactivated users
router.get("/deactivated-users", (req, res) => {
  const { search } = req.query;

  // Filter users based on search query
  let filteredUsers = deactivatedUsers;

  if (search) {
    filteredUsers = deactivatedUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.gateNo.includes(search)
    );
  }

  res.status(200).json({
    success: true,
    data: filteredUsers,
    total: filteredUsers.length,
  });
});

// Controller: Activate a deactivated user
router.post("/activate-user/:id", (req, res) => {
  const { id } = req.params;

  // Find the user by ID and change status to "active"
  const userIndex = deactivatedUsers.findIndex((user) => user.id == id);

  if (userIndex !== -1) {
    const activatedUser = deactivatedUsers.splice(userIndex, 1)[0]; // Remove from deactivated
    activatedUser.status = "active";
    // Mock: Add to approved user list (you can add this to a separate database table in real implementation)
    console.log(`User ${activatedUser.firstName} activated`);

    return res.status(200).json({
      success: true,
      message: "User activated successfully",
    });
  } else {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
});

module.exports = router;
