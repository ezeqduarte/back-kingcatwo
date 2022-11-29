let router = require("express").Router();
const schema = require("../schemas/reactionSchema");
const validator = require("../middlewares/validator");
const controller = require("../controllers/reaction");

let { newReaction } = controller;

router.post("/", validator(schema) , newReaction);




module.exports = router;
