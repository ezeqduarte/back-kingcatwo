const Hotel = require("../models/Hotel");

const controller = {
  create: async (req, res) => {
   
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        id: new_hotel._id,
        success: true,
        message: "The hotel was succefuly created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  updateHotel: async (req, res) => {

    let { id } = req.params;

    try {
      const hotelModificated = await Hotel.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );

      hotelModificated
        ? res.status(200).json({
            id: hotelModificated._id,
            success: true,
            message: "The hotel has modificated",
          })
        : res.status(400).json({
            success: false,
            message: "The hotel does not exist",
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
