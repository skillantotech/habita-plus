// const express = require('express');
// const JobprofileRouter = express.Router();
// const upload = require('../middleware/upload');
// const JobProfileController = require('../controllers/jobprofileController');
// // Routes to handle gate allocations
// JobprofileRouter.post(
//     '/create',
//     upload.fields([
//         { name: 'profilePhoto', maxCount: 1 },
//         { name: 'idProof', maxCount: 1 }
//     ]),
//     JobProfileController.createJobprofile
// );

// JobprofileRouter.get('/', JobProfileController.getAllJobprofiles);
// JobprofileRouter.get('/:id', JobProfileController.getJobprofileById);
// JobprofileRouter.get('/society/:societyId', JobProfileController.getJobprofilesBySocietyId);
// JobprofileRouter.put(
//     '/update/:id',
//     upload.fields([
//         { name: 'profilePhoto', maxCount: 1 },
//         { name: 'idProof', maxCount: 1 }
//     ]),
//     JobprofileController.updateJobprofile
// );
// JobprofileRouter.delete('/delete/:id', JobProfileController.deleteJobprofile);
// // JobprofileRouter.get('/status/:status', JobprofileController.getJobprofilesByStatus);
// // JobprofileRouter.post('/status/approve', JobprofileController.approveJobprofile);

// // JobprofileRouter.post('/status/deactivate', JobprofileController.deactivateJobprofile);

// module.exports = JobprofileRouter;

// const express = require('express');
// const JobprofileRouter = express.Router();
// const upload = require('../middleware/upload');
// const JobProfileController = require('../controllers/jobprofileController');

// JobprofileRouter.post(
//     '/create',
//     upload.fields([
//         { name: 'profilePhoto', maxCount: 1 },
//         { name: 'idProof', maxCount: 1 }
//     ]),
//     JobProfileController.createJobProfile
// );

// JobprofileRouter.get('/', JobProfileController.getAllJobProfiles);
// JobprofileRouter.get('/:id', JobProfileController.getJobProfileById);
// JobprofileRouter.get('/society/:societyId', JobProfileController.getJobProfilesBySocietyId);

// JobprofileRouter.put(
//     '/update/:id',
//     upload.fields([
//         { name: 'profilePhoto', maxCount: 1 },
//         { name: 'idProof', maxCount: 1 }
//     ]),
//     JobProfileController.updateJobProfile
// );

// JobprofileRouter.delete('/delete/:id', JobProfileController.deleteJobProfile);

// module.exports = JobprofileRouter;

// const express = require('express');
// const JobprofileRouter = express.Router();
// const upload = require('../middleware/upload');
// const JobProfileController = require('../controllers/jobprofileController');

// // Routes to handle job profiles
// JobprofileRouter.post(
//     '/create',
//     upload.fields([
//         { name: 'profilePhoto', maxCount: 1 },
//         { name: 'idProof', maxCount: 1 }
//     ]),
//     JobProfileController.createJobProfile
// );

// JobprofileRouter.get('/', JobProfileController.getAllJobProfiles);
// JobprofileRouter.get('/:id', JobProfileController.getJobProfileById);
// JobprofileRouter.get('/society/:societyId', JobProfileController.getJobProfilesBySocietyId);
// JobprofileRouter.put(
//     '/update/:id',
//     upload.fields([
//         { name: 'profilePhoto', maxCount: 1 },
//         { name: 'idProof', maxCount: 1 }
//     ]),
//     JobProfileController.updateJobProfile
// );
// JobprofileRouter.delete('/delete/:id', JobProfileController.deleteJobProfile);

// module.exports = JobprofileRouter;

const express = require("express");
const jobProfileRouter = express.Router();
const upload = require("../middleware/upload");
const JobProfileController = require("../controllers/profileController");

// Routes to handle job profiles
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
