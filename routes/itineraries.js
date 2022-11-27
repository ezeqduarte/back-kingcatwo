const controller = require("../controllers/itinerary");
const schema = require("../schemas/itinerarySchema");
const validator = require("../middlewares/validator");

let router = require("express").Router();

let { create, deleteItinerary, updateItinerary, readItineraries } = controller;

router.post("/", validator(schema), create);
router.route("/:id").delete(deleteItinerary);
router.route("/:id").put(updateItinerary);
router.route("/").get(readItineraries);

module.exports = router;
