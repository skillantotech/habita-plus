const express = require('express');
const gateRout = express.Router();
const { createGate, getGates,getGatesBysocietyId} = require('../controllers/gateController');


gateRout.post('/gates', createGate);


gateRout.get('/gates', getGates);


gateRout.get('/gates/:societyId', getGatesBysocietyId);

module.exports = gateRout;