const controller = require("../controllers/city");

let router = require("express").Router()

let {create}=controller

router.route("/").post(create)

module.exports = router;