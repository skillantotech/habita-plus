const { getUnitType, createUnitType } = require('../controllers/unitTypeController');

const unitTypeRouter = require('express').Router();

unitTypeRouter.get("/", getUnitType).post('/', createUnitType);

module.exports = unitTypeRouter;