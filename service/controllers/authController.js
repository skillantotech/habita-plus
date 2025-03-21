const { generateToken, verifyToken } = require("../utils/jwt");
const cookieHandler = require("../middleware/cookieHandler");
const { User, Role, Customer, JobProfile } = require("../models");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Role,
          as: "role",
        },
      ],
    });

    if (!user) {
      return res.status(404).json({
        message: "Email doesnot exists !!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "Entered password is incorrect !",
      });
    }

    if (
      user.role.roleCategory === "super_admin" ||
      user.role.roleCategory === "society_moderator" ||
      user.role.roleCategory === "management_committee"
    ) {
      const token = generateToken({ email, password }, "1h");
      const redirectUrl = `http://localhost:3001/signin/${token}`;
      // const redirectUrl = `https://testadmin.habitatplush.com/signin/${token}`
      return res.json({
        redirectUrl,
        token,
        user
      });
    }

    const token = generateToken({ userId: user.userId, email: user.email });
    cookieHandler(res, token);

    return res.status(200).json({
      message: "Successfully logged in!",
      user: {
        userId: user.userId,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: err.message || "Internal server Error",
    });
  }
};


// token signin 
const tokenSignIn = async (req, res) => {
 
  try {
    const { token } = req.body;
    console.log(token);

    if (!token) {
      return res.status(401).json({
        message: "Token Not found",
      });
    }

    console.log("before token verify !")

    const { email, password } = verifyToken(token);

    console.log(email, password);

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Role,
          as: "role",
        },
        {
          model: Customer,
          // as: "customerAlias",
          attributes: ["customerId", "customerName"],
        },
      ],
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
    return res.status(401).json({
        message: "Invalid email or password",
    });
    }

    console.log(user.userId);

    const newToken = generateToken({ userId: user.userId, email });
    cookieHandler(res, newToken);

    // delete user.password;

    return res.status(200).json({
      message: "Successfully logged in!",
      token: newToken,
      user,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: err.message || "Internal server Error",
    });
  }
};
const jobProfileLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const profile = await JobProfile.findOne({ 
      where: { email },
       include: [
        {
           model: Role, 
           as: "role" 
          }] });
    if (!profile) {
      return res.status(404).json({ 
        message: "User does not exist" })};

    // Debugging: Log stored hash and entered password

    const doesMatch = await bcrypt.compare(password, profile.password);
    if (!doesMatch) {
      console.log("Password Mismatch: Comparison failed");
      return res.status(401).json({ message: "Incorrect password" });
    }
    if(
      profile.role.roleCategory === "society_security_guard" ||
      profile.role.roleCategory === "society_facility_manager"
    ){
    const token = generateToken({ email,password }, "1h");
    const redirectUrl = `http://localhost:3001/signin/${token}`;
    return res.json({ redirectUrl, token, profile });
    }
    const token = generateToken({ profileId: profile.profileId, email: profile.email});
    cookieHandler(res, token);
    return res.status(200).json({ 
      message: "Successfully logged in!",
      profile: {
        profileId: profile.profileId,
        email: profile.email,
        role: profile.role,
      },
      token,
    });
  } catch (err) {
    console.error("Job Profile Login Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const loginToken = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(401).json({ message: "Token not found" });

    const decoded = verifyToken(token);
    if (!decoded) return res.status(401).json({ message: "Invalid or expired token" });

    const profile = await JobProfile.findOne({ where: { email: decoded.email }, include: [{ model: Role, as: "role" }] });
    if (!profile) return res.status(404).json({ message: "Invalid email or password" });
    if (!profile.role) return res.status(500).json({ message: "Role is not associated with this JobProfile!" });

    const refreshToken = generateToken({ profileId: profile.profileId, email: profile.email });
    cookieHandler(res, refreshToken);

    return res.status(200).json({ message: "Successfully logged in!", token: refreshToken, profile });
  } catch (err) {
    console.error("Login Token Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { loginUser, tokenSignIn, jobProfileLogin, loginToken };
