const controller = require("../controllers/itinerary");

let router = require("express").Router()

let {create, deleteItinerary , updateItinerary}=controller

router.route("/").post(create)
router.route("/:id").delete(deleteItinerary)
router.route("/:id").put(updateItinerary)


module.exports = router;