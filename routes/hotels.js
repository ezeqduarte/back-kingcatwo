const schema = require("../schemas/hotelSchema");
const validator = require("../middlewares/validator");
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
router.route("/:id").patch(updateHotel);
router.route("/:id").delete(deleteHotel);
router.route("/").get(obtainHotel);
router.route("/:id").get(focusHotel);
