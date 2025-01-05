
const express = require("express");
const jobProfileRouter = express.Router();
const upload = require("../middleware/upload");
const JobProfileController = require("../controllers/profileController");

// Routes to handle job profiles creation
jobProfileRouter.post(
  "/create",
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
  ]),
  JobProfileController.createJobProfile
);

// jobProfileRouter.get("/", JobProfileController.getAllJobProfiles);
jobProfileRouter.get("/:id", JobProfileController.getJobProfileById);
jobProfileRouter.get(
  "/society/:societyId",
  JobProfileController.getJobProfilesBySocietyId
);

jobProfileRouter.put(
  "/update/:id",
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
  ]),
  JobProfileController.updateJobProfile
);
jobProfileRouter.delete("/delete/:id", JobProfileController.deleteJobProfile);

module.exports = jobProfileRouter;
