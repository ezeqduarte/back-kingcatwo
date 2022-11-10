const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    let object = {
      ...req.body,
      userId: "636d1e66dbb2d08117b1c7c2",
    }
    try {
      let new_city = await City.create(object);
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
