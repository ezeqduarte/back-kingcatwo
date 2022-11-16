const Itinerary = require("../models/Itinerary");

const controller = {
  create: async (req, res) => {
    try {
      let new_itinerary = await Itinerary.create(req.body);
      res.status(201).json({
        id: new_itinerary._id,
        success: true,
        message: "The Itinerary was succefuly created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  readItineraries: async (req, res) => {

    let { cityId } = req.query;

    console.log(cityId);

    try {
      let itineraries = await Itinerary.find({cityId: cityId }).populate("userId", "_id");
      res.status(201).json({
        searched: itineraries,
        success: true,
        message: "The Itineraries are here",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  updateItinerary: async (req, res) => {
    let { id } = req.params;

    try {
      const itineraryModificated = await Itinerary.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );

      itineraryModificated
        ? res.status(200).json({
            id: itineraryModificated._id,
            success: true,
            message: "The itinerary has modificated",
          })
        : res.status(400).json({
            success: false,
            message: "The itinerary does not exist",
          });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  deleteItinerary: async (req, res) => {
    const _id = req.params.id;

    try {
      await Itinerary.findOneAndDelete({ _id });

      res.status(200).json({
        idDeleted: _id,
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        response: error.message,
      });
    }
  },
};

module.exports = controller;
