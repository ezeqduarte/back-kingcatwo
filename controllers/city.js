const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city,
        success: true,
        message: "The city was succefuly created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        error: error.status,
      });
    }
  },

  readCities: async (req, res) => {
    let query = {};

    if (req.query.continent) {
      query = { continent: req.query.continent };
    }

    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }

    try {
      let allCities = await City.find(query).sort({ name: "asc" });

      res.status(201).json({
        cities: allCities,
        success: true,
        message: "The cities are here",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        error: error.status,
      });
    }
  },

  readCity: async (req, res) => {
    
    let { id } = req.params;

    try {
      let cityCaptured = await City.findOne({_id: id}).populate(
        "userId",
        "photo && name"
      );

      if (cityCaptured) {
        res.status(201).json({
          cities: cityCaptured,
          success: true,
          message: "The cities are here",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The city doesnt exist",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        error: error.status,
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
    const { id } = req.params;

    try {
      await City.findOneAndDelete({ _id: id });

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
