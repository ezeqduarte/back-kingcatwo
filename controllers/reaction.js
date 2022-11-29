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
};

module.exports = controller;
