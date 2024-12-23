const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const errorHandler = require("./middleware/errorHandler");

// router paths
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const subscriptionPlanRoutes = require("./routes/subscriptionPlanRoutes");
const roleRouter = require("./routes/roleRoutes");
const adminRouter = require("./routes/adminRoutes");
const buildingRouter = require("./routes/buildingRoutes");
const floorRouter = require("./routes/floorRoutes");
const unitTypeRouter = require("./routes/unitTypeRoutes");
const gateRout = require("./routes/gateRouter");  // Corrected variable name
const {
  User,
  Customer,
  Floor,
  UnitType,
  UserGroup,
  Unit,
  Visitor_new_visitentry,
  Ticket_Summery,
  Ticket_Details,
} = require("./models");
const refUserGroupRouter = require("./routes/refUserGroupRouter");
const {
  initController,
  createSuperAdmin,
  createAdmin,
} = require("./auto-creating-handlers");
const noticeAnnouncementRouter = require("./routes/noticeAnnouncementRouter");
const visitorManagementRouter = require("./routes/visitorManagementRouter");
const unitRouter = require("./routes/unitRoutes");
const softwareHelpDeskRouter = require("./routes/softwareHelpDeskRouter");
const refTicketStatusRouter = require("./routes/refTicketStatusRouter");
const gateAllocationRouter = require("./routes/gateAllocationRouter");

// testing apis
app.get("/", (req, res) => {
  res.send("API is working fine !");
});
app.get("/getenv", (req, res) => {
  res.send(`Your current environment is ${process.env.NODE_ENV}`);
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api", customerRoutes);
app.use("/api", subscriptionPlanRoutes);

// admin routes
app.use("/api/role", roleRouter);
app.use("/api/admin", adminRouter);

// building routes
app.use("/api/building", buildingRouter);
app.use("/api/floor", floorRouter);
app.use("/api/unitType", unitTypeRouter);
app.use("/api/unit", unitRouter);
// app.use create user ref group superadmin api
app.use("/api/refusergroup", refUserGroupRouter);

// gate routes
app.use("/api/gate", gateRout); 
// gate allocation router
app.use("/api/gateallocation",gateAllocationRouter);

// notice announcement
app.use("/api/noticeAnnouncement", noticeAnnouncementRouter);

// visitor management
app.use("/api/visitormanagement", visitorManagementRouter);

// software helpdesk
app.use("/api/softwarehelpdesk", softwareHelpDeskRouter);

// softwarehelpdesk refticketstatus
app.use("/api/softwarehelpdesk", refTicketStatusRouter);

// creating automatic users
app.get("/init-database", initController);
app.get("/create-super-admin", createSuperAdmin);
app.get("/create-admin", createAdmin);
app.use(errorHandler);

// Ticket_Details.sync({ alter: true }) 
//   .then(() => console.log("User table has been synced successfully.")) 
//   .catch((err) => console.error("Error syncing the User table:", err));

// Unit.sync({ alter: true }) 
//   .then(() => console.log("UserModel table has been synced successfully."))
//   .catch((err) => console.error("Error syncing the User table:", err));

module.exports = app;
