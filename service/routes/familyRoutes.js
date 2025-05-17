const express = require("express");
const familyRouter = express.Router();
const familyController = require("../controllers/familyController");
const { checkAuth } = require("../middleware/authMiddleware"); 

familyRouter.post("/create", checkAuth, familyController.createFamilyMemberBySocietyId);
familyRouter.get("/", checkAuth, familyController.getFamilyMembers);
familyRouter.put("/:familyMemberId", checkAuth, familyController.updateFamilyMember);
familyRouter.delete("/:familyMemberId", checkAuth, familyController.deleteFamilyMember);

module.exports = familyRouter;
