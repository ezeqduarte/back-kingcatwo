const Reaction = require("../models/Reaction");

const controller = {
  newReaction: async (req, res) => {
    try {
      let newReaction = await Reaction.create(req.body);
      res.status(201).json({
        reaction: newReaction,
        success: true,
        message: "The reaction was succefuly created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        error: error.status,
      });
    }
  },

  postReaction: async (req, res) => {
    let query = {};

    if (req.query.name) {
      query = { ...query, name: req.query.name };
    }

    if (req.query.itineraryId) {
      query = { ...query, itineraryId: req.query.itineraryId };
    }

    if (req.query.showId) {
      query = { showId: req.query.showId };
    }

    try {
      let reactionOfTinerary = await Reaction.findOne(query);
      if (reactionOfTinerary) {
        if (reactionOfTinerary.userId.includes(req.user.id)) {
          //tendria que sacarlo

          const reactionOfTineraryEdited = await Reaction.findOneAndUpdate(
            { _id: reactionOfTinerary._id },
            { $pull: { userId: req.user.id } },
            { new: true }
          );
          res.status(200).json({
            reaction: reactionOfTineraryEdited,
            success: true,
            message: "The reaction modificated dislike",
          });
        } else {
          //tendria que pushearlo
          const reactionOfTineraryEdited = await Reaction.findOneAndUpdate(
            { _id: reactionOfTinerary._id },
            { $push: { userId: req.user.id } },
            { new: true }
          );
          res.status(200).json({
            reaction: reactionOfTineraryEdited,
            success: true,
            message: "The reaction modificated like",
          });
        }
      } else {
        res.status(404).json({
          success: false,
          message: "The reaction dosnt exist",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  getReactions: async (req, res) => {
    let query = {};

    if (req.query.itineraryId) {
      query = { ...query, itineraryId: req.query.itineraryId };
    }

    if (req.query.userId) {
      query = { ...query, userId: req.query.userId };
    }

    if (req.query.showId) {
      query = { showId: req.query.showId };
    }

    if (req.query.itineraryId) {
      try {
        let reactions = await Reaction.find(query);
        res.status(201).json({
          reactions: reactions,
          success: true,
          message: "The reactions are here",
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
          error: error.status,
        });
      }
    } else if (req.query.userId) {
      try {
        let reactions = await Reaction.find(query)
          .sort({ itineraryId: "asc" })
          .populate("itineraryId", ["name", "photo"])
          .populate("showId", ["name", "photo"]);
        console.log(reactions);
        if (req.query.userId == req.user.id) {
          res.status(201).json({
            reactions: reactions,
            success: true,
            message: "The reaction are here ESTOY ACA",
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
          error: error.status,
        });
      }
    } else if (req.query.showId) {
      try {
        let reactions = await Reaction.find(query)
          .sort({ showId: "asc" })
          .populate("showId", ["name", "photo"]);
        res.status(201).json({
          reactions: reactions,
          success: true,
          message: "The reactions are here",
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
          error: error.status,
        });
      }
    }
  },

  deleteReaction: async (req, res) => {
    let { id } = req.params;

    try {
      let reaction = await Reaction.findOneAndUpdate(
        { _id: id },
        { $pull: { userId: req.user.id } },
        { new: true }
      );
      if (reaction) {
        res.status(200).json({
          reaction: reaction,
          message: `Reacion has deleted`,
          success: true,
        });
      } else {
        res.status(404).json({
          message: `reaction doesnt exist`,
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
