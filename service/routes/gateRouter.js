const express = require('express');
const gateRout = express.Router();
const { createGate, getGates,getGatesBysocietyId} = require('../controllers/gateController');


gateRout.post('/create', createGate);


gateRout.get('/gates', getGates);


gateRout.get('/society/:societyId', getGatesBysocietyId);

module.exports = gateRout;