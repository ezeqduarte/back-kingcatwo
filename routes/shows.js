const controller = require("../controllers/show");

let router = require("express").Router()

let {create}=controller

router.route("/").post(create)

module.exports = router;