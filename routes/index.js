let router = require("express").Router()
let user = require("./users")
let hotel = require("./hotels")
let city = require ("./cities")
let show = require ("./shows")


router.use("/hotels", hotel)
router.use("/users", user)
router.use("/cities", city)
router.use("/shows", show)





module.exports = router;
