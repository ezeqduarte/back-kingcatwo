let router = require("express").Router()
let user = require("./users")
let hotel = require("./hotels")
let city = require ("./cities")


router.use("/hotels", hotel)
router.use("/users", user)
router.use("/cities", city)





module.exports = router;
