const { createUnit, getAllUnits } = require("../controllers/unitController");

const unitRouter = require("express").Router();

unitRouter.get("/", getAllUnits).post("/", createUnit);

module.exports = unitRouter;