const User = require("../models/User");

const controller = {
  create: async (req, res) => {
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
  },
};

module.exports = controller;
