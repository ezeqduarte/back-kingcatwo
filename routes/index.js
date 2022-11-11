let router = require("express").Router()
let user = require("./users")
let hotel = require("./hotels")

router.use("/users", user)
router.use("/hotels", hotel)





module.exports = router;
