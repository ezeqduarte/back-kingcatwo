const controller = require("../controllers/itinerary");

let router = require("express").Router()

let {create}=controller

router.route("/").post(create)

module.exports = router;