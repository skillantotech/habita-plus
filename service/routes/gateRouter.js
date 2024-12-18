const express = require('express');
const gateRout = express.Router();
const { createGate, getGates,getGatesBysocietyId} = require('../controllers/gateController');


gateRout.post('/', createGate);


gateRout.get('/', getGates);


gateRout.get('/:societyId', getGatesBysocietyId);

module.exports = gateRout;