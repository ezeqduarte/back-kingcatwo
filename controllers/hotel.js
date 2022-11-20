const Hotel = require("../models/Hotel");

const controller = {
  create: async (req, res) => {
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        hotelCreated: new_hotel,
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

  deleteHotel: async (req, res) => {
    const { id } = req.params;

    try {
      await Hotel.findOneAndDelete({ _id: id });

      res.status(200).json({
        success: true,
        message: "The hotel has deleted",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        response: error.message,
      });
    }
  },

  obtainHotel: async (req, res) => {
    let query = {};
    let order = {};
    if (req.query.name) {
      query = { name: { $regex: req.query.name, $options: "i && x" } };
    }
    if (req.query.order) {
      order = { capacity: req.query.order };
    }

    try {
      const hotelitos = await Hotel.find(query).sort(order);

      res.status(200).json({
        success: true,
        Hotels: hotelitos,
        message: "The hotel has been obtained",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        response: error.message,
        message: "The hotel is not here :(",
      });
    }
  },

  focusHotel: async (req, res) => {
    let { id } = req.params;

    try {
      const hotelModificated = await Hotel.findById({ _id: id }).populate("userId", ("name & photo"));

      hotelModificated
        ? res.status(200).json({
            hotel: hotelModificated,
            success: true,
            message: "The hotel has finded",
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
