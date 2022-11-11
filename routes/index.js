let router = require("express").Router()
let user = require("./users")
let hotel = require("./hotels")
let city = require ("./cities")
let itinerary = require ("./itineraries")

router.use("/hotels", hotel)
router.use("/users", user)
router.use("/cities", city)
router.use("/itineraries", itinerary)




module.exports = router;
