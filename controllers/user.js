const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const accountVerificationEmail = require("./accountVerificationEmail");
const {
  userSignedUpResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
} = require("../config/responses");

const controller = {
  registerUser: async (req, res, next) => {
    let { name, lastName, role, photo, age, email, password } = req.body;
    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10);

    try {
      await User.create({
        name,
        lastName,
        photo,
        age,
        role,
        email,
        password,
        verified,
        logged,
        code,
      });
      await accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verifyUser: async (req, res, next) => {
    let { code } = req.params;

    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        return res.redirect("http://localhost:3000");
      }

      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  signUser: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;

    try {
      const verifiedPassword = bcryptjs.compareSync(password, user.password);
      if (verifiedPassword) {
        const userDb = await User.findOneAndUpdate(
          { _id: user.id },
          { logged: true },
          { new: true }
        );
        const token = jwt.sign(
          {
            id: userDb._id,
            name: userDb.name,
            photo: userDb.photo,
            logged: userDb.logged,
            role: userDb.role,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        );

        return res.status(200).json({
          response: { user, token },
          succes: true,
          message: "Welcome to My Tinerary " + userDb.name,
        });
      }
      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  signInWithToken: async (req, res, next) => {
    let { user } = req;
    console.log(user);
    try {
      return res.json({
        response: {
          user: {
            name: user.name,
            photo: user.photo,
            logged: user.logged,
            role: user.role,
          },
          success: true,
          message: "Welcome to my iTinerary " + user.name,
        },
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = controller;
