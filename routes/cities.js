const controller = require("../controllers/city");

let router = require("express").Router()

let {create, updateCity}=controller

router.route("/").post(create)
router.route("/:id").put(updateCity)

module.exports = router;