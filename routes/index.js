let router = require("express").Router()
let user = require("./users")
let hotel = require("./hotels")
let city = require ("./cities")
let itinerary = require ("./itineraries")
let show = require ("./shows")



router.use("/hotels", hotel)
router.use("/users", user)
router.use("/cities", city)
router.use("/itineraries", itinerary)
router.use("/shows", show)






module.exports = router;
