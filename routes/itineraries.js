const controller = require("../controllers/itinerary");
const schema = require("../schemas/itinerarySchema");
const validator = require("../middlewares/validator");
const passport = require("../config/passport");

let router = require("express").Router();

let { create, deleteItinerary, updateItinerary, readItineraries } = controller;

router.post("/", validator(schema), create);
router.delete("/:id",passport.authenticate("jwt", { session: false }), deleteItinerary);
router.put("/:id",  passport.authenticate("jwt", { session: false }), updateItinerary);
router.get("/",  readItineraries);



module.exports = router;
