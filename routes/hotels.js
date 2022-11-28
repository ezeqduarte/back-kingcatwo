const schema = require("../schemas/hotelSchema");
const validator = require("../middlewares/validator");
const passport = require("../config/passport");
const {
  updateHotel,
  create, 
  deleteHotel,
  obtainHotel,
  focusHotel,
} = require("../controllers/hotel");
const controller = require("../controllers/hotel");

let router = require("express").Router();



router.route("/").post(validator(schema), create);

module.exports = router;
router.patch("/:id",passport.authenticate("jwt", { session: false }),updateHotel);
router.delete("/:id",passport.authenticate("jwt", { session: false }) ,deleteHotel);
router.route("/").get(obtainHotel);
router.route("/:id").get(focusHotel);
