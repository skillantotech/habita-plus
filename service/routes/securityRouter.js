const express = require("express");
const securityController = require("../controllers/securityController");

const securityRouter = express.Router();

securityRouter.post("/security", securityController.createSecurityGuard);
securityRouter.get("/security",securityController.readSecurityGuard);
securityRouter.put("/security/:id",securityController.updateSecurityGuard);
securityRouter.delete("/security/:id",securityController.deleteSecurityGuard);

module.exports = securityRouter;
