const { getFloors, createFloor } = require('../controllers/floorController');

const floorRouter = require('express').Router();

floorRouter.get("/", getFloors).post("/", createFloor);

module.exports = floorRouter;