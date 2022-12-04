let router = require("express").Router();
const schema = require("../schemas/reactionSchema");
const validator = require("../middlewares/validator");
const controller = require("../controllers/reaction");
const passport = require("../config/passport");
const checkUser = require("../controllers/checkUser");
const Reaction = require("../models/Reaction");

let { newReaction, postReaction, getReactions, deleteReaction } = controller;

router.post("/", validator(schema), newReaction);
router.put("/", passport.authenticate("jwt", { session: false }), postReaction);
 
router.get("/", passport.authenticate("jwt", { session: false }) ,getReactions); 
router.put("/:id", passport.authenticate("jwt", { session: false }), checkUser(Reaction) ,deleteReaction); 


module.exports = router;


