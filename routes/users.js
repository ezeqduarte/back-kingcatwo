const controller = require("../controllers/user");

let router = require("express").Router()

let {create}=controller

router.route("/").post(create)

module.exports = router;
