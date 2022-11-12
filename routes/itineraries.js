const controller = require("../controllers/itinerary");

let router = require("express").Router()

let {create, deleteItinerary}=controller

router.route("/").post(create)
router.route("/:id").delete(deleteItinerary)

module.exports = router;