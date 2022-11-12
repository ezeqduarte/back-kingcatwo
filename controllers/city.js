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

  updateCity: async (req, res) => {

    let { id } = req.params;

    try {
      const cityModificated = await City.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );

      cityModificated
        ? res.status(200).json({
            id: cityModificated._id,
            success: true,
            message: "The city has modificated",
          })
        : res.status(400).json({
            success: false,
            message: "The city does not exist",
          });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  deleteCity: async (req, res) => {

    const {id} = req.params;
    
    try {
      
      await City.findOneAndDelete({ _id: id});

      res.status(200).json({
        
        success: true,
        message: "The city has deleted",
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
