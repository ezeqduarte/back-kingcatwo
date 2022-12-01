let router = require("express").Router()
let user = require("./users")
let hotel = require("./hotels")
let city = require ("./cities")
let itinerary = require ("./itineraries")
let show = require ("./shows")
let comment = require ("./comments")
let reaction = require ("./reactions")



router.use("/hotels", hotel)
router.use("/auth", user)
router.use("/cities", city)
router.use("/itineraries", itinerary)
router.use("/shows", show)
router.use("/comments", comment) //Esto va en el posman
router.use("/reactions", reaction)





module.exports = router;
