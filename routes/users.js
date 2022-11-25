let router = require("express").Router();
const accountExistsSignUp = require("../middlewares/accountExistsSignUp");
const { registerUser } = require("../controllers/user");
const validator = require("../middlewares/validator");
const schema = require("../schemas/userSchema");

router.post('/sign-up', validator(schema), accountExistsSignUp, registerUser)
/* router.route("/sign-up").post(validator(schema), accountExistsSignUp, registerUser); */

module.exports = router;
