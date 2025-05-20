const express = require("express");
const familyRouter = express.Router();
const familyController = require("../controllers/userFamilyController.js");
const { checkAuth } = require("../middleware/authMiddleware"); 

familyRouter.post("/create", checkAuth, familyController.createMemberBySocietyId);
familyRouter.get("/", checkAuth, familyController.getMembersByOwner);
familyRouter.put("/:familyMemberId", checkAuth, familyController.updateMember);
familyRouter.delete("/:familyMemberId", checkAuth, familyController.deleteMember);

module.exports = familyRouter;
