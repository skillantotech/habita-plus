const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.post("/", userController.createUser);

userRouter.get("/", userController.getAllUsers);

userRouter.get("/:id", userController.getUserById);

module.exports = userRouter;
