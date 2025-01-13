// const express = require('express');
// const gateRout = express.Router();
// const { createGate, getGates,getGatesBysocietyId} = require('../controllers/gateController');


// gateRout.post('/gates', createGate);


// gateRout.get('/gates', getGates);


// gateRout.get('/gates/:societyId', getGatesBysocietyId);

// module.exports = gateRout;

const express = require("express");
const gateRout = express.Router();
const gateController = require("../controllers/gateController"); // Adjust the path as per your structure

// Route to create a new gate
gateRout.post("/create", gateController.createGates);

// Route to fetch all gates
gateRout.get("/gates", gateController.getGates);

// Route to fetch gates by societyId
gateRout.get("/scoiety/:societyId", gateController.getGatesBysocietyId);

module.exports =  gateRout;
