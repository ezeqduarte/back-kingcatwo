let router = require("express").Router();
const passport = require("../config/passport");
const schema = require("../schemas/userSchema");
const schemaSignIn = require("../schemas/userSignInSchema");
const accountExistsSignUp = require("../middlewares/accountExistsSignUp");
const accountExistsSignIn = require("../middlewares/accountExistSignIn")
const accountHasBeenVerified = require("../middlewares/accountHasBeenVerified");
const validator = require("../middlewares/validator");
const mustSignIn = require("../middlewares/mustSignIn")
const { registerUser, signUser, verifyUser, signInWithToken,logout } = require("../controllers/user");

router.post('/sign-up', validator(schema), accountExistsSignUp, registerUser)
router.get('/verify/:code', verifyUser)
router.post('/sign-in', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, signUser)
router.post('/token', passport.authenticate('jwt', { session:false }), mustSignIn, signInWithToken)
router.post('/sign-out', passport.authenticate('jwt', { session:false }), logout)



module.exports = router;
