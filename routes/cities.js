const controller = require("../controllers/city");
const schema = require("../schemas/citySchema");
const validator = require("../middlewares/validator");

let router = require("express").Router();

let { create, readCities, updateCity, deleteCity, readCity } = controller;

router.route("/").post(validator(schema), create);
router.route("/").get(readCities);
router.route("/:id").put(validator(schema), updateCity);
router.route("/:id").get(readCity);
router.route("/:id").delete(deleteCity);

module.exports = router;
