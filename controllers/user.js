const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("./accountVerificationEmail");
const { userSignedUpResponse } = require("../config/responses");

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
};

module.exports = controller;
