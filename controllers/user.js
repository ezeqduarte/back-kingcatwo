const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("./accountVerificationEmail");
const { userSignedUpResponse } = require("../config/responses");

const controller = {
  /*  create: async (req, res) => {
    try {
      let new_user = await User.create(req.body);
      res.status(201).json({
        id: new_user._id,
        success: true,
        message: "The user was succefuly created",
      });
    } catch (error) {
        res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }, */

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
};

module.exports = controller;
