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
        error: error.status,
      });
    }
  },

  updateShow: async (req, res) => {
    let { id } = req.params;

    try {
      const showModificated = await Show.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );

      showModificated
        ? res.status(200).json({
            id: showModificated._id,
            success: true,
            message: "The show has modificated",
          })
        : res.status(400).json({
            success: false,
            message: "The show does not exist",
          });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  deleteShow: async (req, res) => {
    const _id = req.params.id;

    try {
      await Show.findOneAndDelete({ _id });

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


  focusShow: async (req, res) => {
    let { hotelId } = req.query;
    try {
      let show = await Show.find({hotelid: hotelId }).populate("userId", "_id");
      res.status(201).json({
        searched: show,
        success: true,
        message: "The shows are here",
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
