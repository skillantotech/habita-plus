const { getFloors, createFloor,getFloorsBySocietyId } = require('../controllers/floorController');

const floorRouter = require('express').Router();

floorRouter.get("/", getFloors).post("/", createFloor);
floorRouter.get("/:societyId", getFloorsBySocietyId);
module.exports = floorRouter;