const { verifyResponse } = require("../config/responses")

function accountHasBeenVerified(req, res, next) {
    if (req.user.verified) {
        return next()                                       ///Este nos dice si la cuenta fue verificada 
    }
    return verifyResponse(req,res)
}

module.exports = accountHasBeenVerified