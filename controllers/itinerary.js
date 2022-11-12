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

  deleteItinerary: async (req, res) => {

    const _id = req.params.id;    

    try {
      
      await Itinerary.findOneAndDelete({_id});

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
