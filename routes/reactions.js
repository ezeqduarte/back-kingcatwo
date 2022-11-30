let router = require("express").Router();
const schema = require("../schemas/reactionSchema");
const validator = require("../middlewares/validator");
const controller = require("../controllers/reaction");
const passport = require("../config/passport");

let { newReaction, postReaction, getReactions } = controller;

router.post("/", validator(schema), newReaction);
router.put("/", passport.authenticate("jwt", { session: false }), postReaction);
router.get("/", getReactions);

module.exports = router;


