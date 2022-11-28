const controller = require("../controllers/city");
const schema = require("../schemas/citySchema");
const validator = require("../middlewares/validator");
const passport = require("../config/passport");

let router = require("express").Router();

let { create, readCities, updateCity, deleteCity, readCity } = controller;

router.route("/").post(validator(schema), create);
router.route("/").get(readCities);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateCity
);
router.route("/:id").get(readCity);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteCity
);

module.exports = router;
