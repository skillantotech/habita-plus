const { generateToken, verifyToken } = require("../utils/jwt");
const cookieHandler = require("../middleware/cookieHandler");
const { User, Role, Customer } = require("../models");
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

module.exports = {
  loginUser,
  tokenSignIn,
};
