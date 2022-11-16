const controller = require("../controllers/city");

let router = require("express").Router()

let {create, readCities , updateCity , deleteCity , readCity}=controller

router.route("/").post(create)
router.route("/").get(readCities)
router.route("/:id").put(updateCity)
router.route("/:id").get(readCity)
router.route("/:id").delete(deleteCity)


module.exports = router;