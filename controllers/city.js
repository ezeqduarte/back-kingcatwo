const City = require("../models/City");

const controller = {
  create: async (req, res) => {

    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "The city was succefuly created",
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
