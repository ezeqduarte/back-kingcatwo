let router = require("express").Router();
const accountExistsSignUp = require("../middlewares/accountExistsSignUp");
const accountExistsSignIn = require("../middlewares/accountExistSignIn")
const accountHasBeenVerified = require("../middlewares/accountHasBeenVerified");
const { registerUser, signUser, verifyUser, signInWithToken } = require("../controllers/user");
const validator = require("../middlewares/validator");
const schema = require("../schemas/userSchema");
const schemaSignIn = require("../schemas/userSignInSchema");
const passport = require("../config/passport");
const mustSignIn = require("../middlewares/mustSignIn")

router.post('/sign-up', validator(schema), accountExistsSignUp, registerUser)
router.get('/verify/:code', verifyUser)
router.post('/sign-in', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, signUser)
router.post('/token', passport.authenticate('jwt', { session:false }), mustSignIn, signInWithToken)



module.exports = router;
