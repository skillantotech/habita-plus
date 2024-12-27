
const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.post("/", userController.createUser);

userRouter.get("/", userController.getAllUsers);

userRouter.get("/:id", userController.getUserById);

// userRouter.post("/resident/:id", userController.createResident);

userRouter.post("/create-resident", userController.createSocietyResident);


userRouter.get("/resident/:societyId", userController.getResidentBySocityId);


module.exports = userRouter;
