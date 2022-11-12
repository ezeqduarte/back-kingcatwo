const controller = require("../controllers/city");

let router = require("express").Router()

let {create, updateCity , deleteCity}=controller

router.route("/").post(create)
router.route("/:id").put(updateCity)
router.route("/:id").delete(deleteCity)


module.exports = router;