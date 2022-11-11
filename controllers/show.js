const Show = require("../models/Show");

const controller = {
  create: async (req, res) => {

    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "The show was succefuly created",
      });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error.status
          });
    }
  },
};

module.exports = controller;
