const express = require('express');

const { parkingBooked,getParkingSlot,UpdateParking, createVehicleBySociety, createVehicleByUser, getVehicleBySocietyId, getVehicleByUserId} 
// const { parkingBooked,getParkingSlot,UpdateParking} 
= require ("../controllers/parkingController.js")

const parkingRoutes = express.Router();

parkingRoutes.post("/parking/:societyId",parkingBooked);
parkingRoutes.get("/parking/:societyId",getParkingSlot);
parkingRoutes.put("/parking/:societyId/:parkingId",UpdateParking);


parkingRoutes.post("/vehicle/:societyId", createVehicleBySociety);
parkingRoutes.post("/vehicle/user/:userId",createVehicleByUser);
parkingRoutes.get("/society/:societyId",getVehicleBySocietyId);
parkingRoutes.get("/user/:userId",getVehicleByUserId);

module.exports = parkingRoutes;