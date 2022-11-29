let router = require("express").Router();
const controller = require("../controllers/reaction");

let { newReaction } = controller;

router.post("/", newReaction);




module.exports = router;
