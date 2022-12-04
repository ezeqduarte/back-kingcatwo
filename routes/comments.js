const controller = require("../controllers/comment");
const schema = require("../schemas/commentSchema");
const validator = require("../middlewares/validator");
const passport = require("../config/passport");
const Comment = require("../models/Comment");
const checkUser = require("../controllers/checkUser");

let router = require("express").Router();

let { create, getcomment, deleteComment } = controller;

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

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkUser(Comment),
  deleteComment
);

module.exports = router;