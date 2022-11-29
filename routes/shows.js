const { deleteShow, updateShow, focusShow } = require("../controllers/show");
const controller = require("../controllers/show");
const passport = require("../config/passport");

let router = require("express").Router();

let { create } = controller;

router.route("/").post(create);
router.route("/").get(focusShow);
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateShow
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteShow
);

module.exports = router;
