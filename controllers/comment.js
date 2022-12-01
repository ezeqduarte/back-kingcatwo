const Comment = require("../models/Comment");

const controller = {
  create: async (req, res) => {
    try {
      let new_comment = await Comment.create(req.body);
      res.status(201).json({
        id: new_comment,
        success: true,
        message: "The Comment was succefuly created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  getcomment: async (req, res) => {
    try {
      let query = {}; 

      if (req.query.itineraryId) {
        query = { ...query, itineraryId: req.query.itineraryId };
      }

      let get_comment = await Comment.find(query).sort({date:"desc"}).populate("userId", [
        "photo",
        "name",
        "lastName",
        "_id",
        "logged",
        "itineraryId"
      ]);;
      res.status(201).json({
        comments: get_comment,
        success: true,
        message: "The Comment is here",
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
