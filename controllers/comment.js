const Comment = require("../models/Comment");

const controller = {
  create: async (req, res) => {
    let userId = req.user.id; //Me trae el ID del PASSPORT, y el passport es el id del token del id del usuario.
    try {
      let new_comment = await Comment.create({
        userId: userId,
        comment: req.body.comment,
        date: req.body.date,
        itineraryId: req.body.itineraryId,
      });
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

      let get_comment = await Comment.find(query)
        .sort({ date: "desc" })
        .populate("userId", [
          "photo",
          "name",
          "lastName",
          "_id",
          "logged",
          "itineraryId",
        ]);
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

  deleteComment: async (req, res) => {
    let { id } = req.params;

    try {
      let comment = await Comment.findOneAndDelete({ _id: id });
      if (comment) {
        res.status(200).json({
          reaction: comment,
          message: "comment has deleted",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "comment doesnt exist",
          success: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  },
};

module.exports = controller;