const {
  createTypeOfEntryController,
} = require("../controllers/createTypeOfEntryController");
const {
  createVisitorType,
  getVisitorType,
} = require("../controllers/createVisitorTypeController");
const {
  visitorapprovalmatrix,
} = require("../controllers/visitorApprovalMatrix");
const {
  createVisitorNewVisitEntryController,
  newvisitorlisttable,
} = require("../controllers/visitorNewVisitEntryController");
const {
  createVisitorRelation,
  getVisitorData,
  deleteVisitorData,
  updateVisitorData,
} = require("../controllers/visitorRelationshipController");

const visitorManagementRouter = require("express").Router();

visitorManagementRouter.post("/createtypeofentry", createTypeOfEntryController);
visitorManagementRouter.post("/createvisitortype", createVisitorType);
visitorManagementRouter.get("/createvisitortype", getVisitorType);
visitorManagementRouter.post("/visitorrelationship", createVisitorRelation);
visitorManagementRouter.get("/visitorrelationship", getVisitorData);
visitorManagementRouter.delete(
  "/visitorrelationship/:Visit_relation_Id",
  deleteVisitorData
);
visitorManagementRouter.put(
  "/visitorrelationship/:Visit_relation_Id",
  updateVisitorData
);

visitorManagementRouter.get("/visitorapprovalmatrix", visitorapprovalmatrix);

visitorManagementRouter.post(
  "/visitornewvisitentry",
  createVisitorNewVisitEntryController
);

// visitor table
visitorManagementRouter.get("/visitorlisttable", newvisitorlisttable);

module.exports = visitorManagementRouter;
