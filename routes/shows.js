const { deleteShow, updateShow, focusShow } = require("../controllers/show");
const controller = require("../controllers/show");

let router = require("express").Router();

let { create } = controller;


router.route("/:id").patch(updateShow);
router.route("/").post(create);
router.route("/:id").delete(deleteShow);
router.route("/").get(focusShow);


module.exports = router;
