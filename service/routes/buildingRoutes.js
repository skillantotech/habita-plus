const express = require("express");
const {
  createBuilding,
  getBuildings,
} = require("../controllers/buildingController");

const buildingRouter = express.Router();

buildingRouter.get("/", getBuildings).post("/", createBuilding);

module.exports = buildingRouter;
