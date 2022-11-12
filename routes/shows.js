const { deleteShow } = require("../controllers/show");
const controller = require("../controllers/show");

let router = require("express").Router();

let { create } = controller;

router.route("/").post(create);
router.route("/:id").delete(deleteShow);

module.exports = router;
