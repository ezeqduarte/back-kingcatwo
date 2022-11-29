const User = require("../models/User");
const { userExistsResponse } = require("../config/responses");

async function accountExistsSignUp(req, res, next) {
    const user = await User.findOne({email: req.body.email}) 
    if (user) {
        return userExistsResponse(req, res) //Este nos dice si el mail existe o no
    }
    return next()
}

module.exports = accountExistsSignUp