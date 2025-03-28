// const express = require('express');

// const { parkingBooked,getParkingSlot,UpdateParking,getParkingDataById} = require ("../controllers/parkingController.js")

// const parkingRoutes = express.Router();

// parkingRoutes.post("/parking/:societyId",parkingBooked);
// parkingRoutes.get("/parking/:societyId",getParkingSlot);
// parkingRoutes.put("/parking/:societyId/:parkingId",UpdateParking);
// parkingRoutes.get("/:parkingId",getParkingDataById);

// module.exports = parkingRoutes;

const express = require('express');
const {
    parkingBooked,
    getParkingSlot,
    UpdateParking,
    createVehicleByUser,
    createVehicleBySociety,
    getVehicleBySocietyId,
    getVehicleByUserId,
    getParkingDataById
  } = require("../controllers/parkingController.js");
  
  const parkingRoutes = express.Router();
  
  parkingRoutes.post("/parking/:societyId", parkingBooked);
  parkingRoutes.get("/parking/:societyId", getParkingSlot);
  parkingRoutes.put("/parking/:societyId/:parkingId", UpdateParking);
  parkingRoutes.get("/:parkingId",getParkingDataById);


parkingRoutes.post("/vehicle/:societyId", createVehicleBySociety);
parkingRoutes.post("/vehicle/:userId", createVehicleByUser);
parkingRoutes.get("/society/:societyId",getVehicleBySocietyId);
parkingRoutes.get("/user/:userId",getVehicleByUserId);
// 
module.exports = parkingRoutes;