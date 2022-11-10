let router = require("express").Router()
let user = require("./users")
let city = require ("./cities")

router.use("/users", user)
router.use("/cities", city)





module.exports = router;
