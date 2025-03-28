
const express = require("express");
const {
  parkingBooked,
  getParkingSlot,
  UpdateParking,
  createVehicleBySocietyAndUser,
  getVehicleBySocietyId,
  getVehicleByUserId,
  getParkingDataById,
} = require("../controllers/parkingController.js");

const parkingRoutes = express.Router();

parkingRoutes.post("/parking/:societyId", parkingBooked);
parkingRoutes.get("/parking/:societyId", getParkingSlot);
parkingRoutes.put("/parking/:societyId/:parkingId", UpdateParking);
parkingRoutes.get("/:parkingId",getParkingDataById);

parkingRoutes.post("/vehicle", createVehicleBySocietyAndUser);
parkingRoutes.get("/society/:societyId/vehicles", getVehicleBySocietyId);
parkingRoutes.get("/user/:userId/vehicles", getVehicleByUserId);

module.exports = parkingRoutes;