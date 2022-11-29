const Itinerary = require("../models/Itinerary");

const controller = {
  create: async (req, res) => {
    try {
      let new_itinerary = await Itinerary.create(req.body);
      res.status(201).json({
        id: new_itinerary,
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
    let query = {};

    if (req.query.cityId) {
      query = { ...query, cityId: req.query.cityId };
    }
    if (req.query.userId) {
      query = { ...query, userId: req.query.userId };
    }

    try {
      let itineraries = await Itinerary.find(query).populate("userId", [
        "_id",
        "name",
        "lastName",
      ]);
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
      let tineraryOfUser = await Itinerary.findById(id);
      console.log(tineraryOfUser);
      if (tineraryOfUser.userId.equals(req.user.id)) {
        const itineraryModificated = await Itinerary.findOneAndUpdate(
          { _id: id },
          req.body,
          { new: true }
        );

        itineraryModificated
          ? res.status(200).json({
              itineraryModificated: itineraryModificated,
              success: true,
              message: "The itinerary has modificated",
            })
          : res.status(400).json({
              success: false,
              message: "The itinerary does not exist",
            });
      } else {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }
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
      let tineraryOfUser = await Itinerary.findById(_id);
      if (tineraryOfUser.userId.equals(req.user.id)) {
        await Itinerary.findOneAndDelete({ _id });

        res.status(200).json({
          idDeleted: _id,
          success: true,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        response: error.message,
      });
    }
  },
};

module.exports = controller;
