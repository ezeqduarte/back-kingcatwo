const controller = require("../controllers/comment");
const schema = require("../schemas/commentSchema");
const validator = require("../middlewares/validator");
const passport = require("../config/passport");

let router = require("express").Router();

let { create, getcomment } = controller;

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema),
  create
); //esto es lo que continua en el posman

router.get(
  "/",

  getcomment
); //esto es lo que continua en el posman

module.exports = router;
