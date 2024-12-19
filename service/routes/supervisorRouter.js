const express = require("express");
const supervisorController = require("../controllers/supervisorController");

const supervisorRouter = express.Router();

supervisorRouter.post("/supervisor", supervisorController.createSupervisor);
supervisorRouter.get("/supervisor",supervisorController.readSupervisor);
supervisorRouter.put("/supervisor/:id",supervisorController.updateSupervisor);
supervisorRouter.delete("/supervisor/:id",supervisorController.deleteSupervisor);

module.exports = supervisorRouter;
