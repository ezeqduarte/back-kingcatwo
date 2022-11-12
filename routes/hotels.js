const { updateHotel, deleteHotel } = require("../controllers/hotel");
const controller = require("../controllers/hotel");

let router = require("express").Router()

let {create}=controller

router.route("/").post(create)

module.exports = router;
router.route("/:id").patch(updateHotel)
router.route("/:id").delete(deleteHotel)