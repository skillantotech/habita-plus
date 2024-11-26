const express = require("express");
const { loginUser, tokenSignIn } = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/token-signin", tokenSignIn);

module.exports = authRouter;
